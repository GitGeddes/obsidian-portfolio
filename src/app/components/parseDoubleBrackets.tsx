import { ReactNode } from 'react';
import { notes } from '@/app/(Notes)/Graph/notes';
import LocalLink from './LocalLink';

export function parseDoubleBrackets(paragraph: ReactNode): ReactNode[] {
  if (!paragraph) return [];
  const childrenResult: ReactNode[] = [];

  if (typeof paragraph === 'string') {
    const regex = /(?:\[\[)([^\]]*?)(?:\]\])/g;
    const className = " inline-link linkColor linkUnderline linkCursor";
    let res;
    let lastIndex = 0;
    do {
      res = regex.exec(paragraph);
      childrenResult.push(paragraph.substring(lastIndex, res?.index));
      lastIndex = regex.lastIndex;
      if (res) {
        const linkText = res[1];
        const noteLink = notes[linkText].link;
        childrenResult.push(
          <LocalLink
            key={lastIndex}
            linkTitle={linkText}
            noteHref={noteLink}
            className={className}
          >
            {linkText}
          </LocalLink>
        );
      }
    } while (res);
  } else {
    childrenResult.push(paragraph);
  }
  return childrenResult;
}
