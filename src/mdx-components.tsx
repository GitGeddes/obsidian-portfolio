import type { MDXComponents } from 'mdx/types'
import Link from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import LineNumbers from './app/components/LineNumbers';
import ExternalLink from './app/components/ExternalLink';
import { notes } from './app/(Notes)/Graph/notes';

const components: MDXComponents = {}

export function useMDXComponents(): MDXComponents { return {
    h1: ({ children, ...props }: ComponentPropsWithoutRef<"h1">) => (
      <LineNumbers style={{ ["--line-margin-top" as string]: "1em", ["--line-align-self" as string]: "center" }}>
        <h1 className="mb-2 mt-5" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
          {children}
        </h1>
      </LineNumbers>
    ),
    h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <LineNumbers style={{ ["--line-margin-top" as string]: "0.8em", ["--line-align-self" as string]: "center" }}>
        <h2 className="mb-2 mt-4" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
          {children}
        </h2>
      </LineNumbers>
    ),
    h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
      <LineNumbers style={{ ["--line-margin-top" as string]: "0.4em", ["--line-align-self" as string]: "center" }}>
        <h3 className="mb-2 mt-3" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
          {children}
        </h3>
      </LineNumbers>
    ),
    h4: ({ children, ...props }: ComponentPropsWithoutRef<"h4">) => (
      <LineNumbers style={{ ["--line-align-self" as string]: "center" }}>
        <h4 className="mb-2 mt-2" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
          {children}
        </h4>
      </LineNumbers>
    ),
    h5: ({ children, ...props }: ComponentPropsWithoutRef<"h5">) => (
      <LineNumbers style={{ ["--line-align-self" as string]: "center" }}>
        <h5 className="mb-2 mt-1" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
          {children}
        </h5>
      </LineNumbers>
    ),
    h6: ({ children, ...props }: ComponentPropsWithoutRef<"h6">) => (
      <LineNumbers style={{ ["--line-align-self" as string]: "center" }}>
        <h6 className="mb-2" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
          {children}
        </h6>
      </LineNumbers>
    ),
    p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => {
      const parsed = parseDoubleBrackets(children);

      return (
        <LineNumbers style={{ ["--line-margin-top" as string]: "0.2em" }}>
          <p className="leading-snug" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
            {parsed}
          </p>
        </LineNumbers>
      );
    },
    ol: (props: ComponentPropsWithoutRef<"ol">) => (
      <ol
        className="space-y-1"
        style={{
          listStyleType: "revert",
          listStyle: "revert",
          fontSize: 'revert',
          fontWeight: 'revert'
        }}
        {...props}
      />
    ),
    ul: (props: ComponentPropsWithoutRef<"ul">) => {
      if (props.className === "contains-task-list") {
        return (
          <ul className="space-y-1" {...props} />
        );
      }

      return (
        <ul
          className="space-y-1"
          style={{
            listStyleType: "revert",
            listStyle: "revert",
            fontSize: 'revert',
            fontWeight: 'revert'
          }}
          {...props}
        />
      );
    },
    li: (props: ComponentPropsWithoutRef<"li">) => (
      <LineNumbers style={{ ["--line-margin-top" as string]: "0.2em" }}>
        <li
          style={{
            paddingLeft: "20px",
            listStylePosition: "inside"
          }}
          {...props}
        />
      </LineNumbers>
    ),
    a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => {
      const className = " inline-link linkColor linkUnderline";
      if (href?.startsWith("/")) {
        // Internal link
        return (
          <Link href={href} className={className} {...props}>
            {children}
          </Link>
        );
      }
      if (href?.startsWith("#")) {
        return (
          <ExternalLink>
            <a href={href} className={className} {...props}>
              {children}
            </a>
          </ExternalLink>
        );
      }
      return (
        <ExternalLink>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            {...props}
          >
            {children}
          </a>
        </ExternalLink>
      );
    },
    table: ({ children, ...props }: ComponentPropsWithoutRef<"table">) => (
      <LineNumbers>
        <span>
          <table {...props}>{children}</table>
        </span>
      </LineNumbers>
    ),
    tr: ({ children, ...props }: ComponentPropsWithoutRef<"tr">) => (
      <LineNumbers>
        <tr
          {...props}
          className="odd:bg-white even:bg-gray-100 odd:dark:bg-gray-900 even:dark:bg-gray-800"
        >
          {children}
        </tr>
      </LineNumbers>
    ),
    th: ({ children, ...props }: ComponentPropsWithoutRef<"th">) => (
      <LineNumbers>
        <th
          {...props}
          className="border border-gray-300 p-2 dark:border-gray-700"
        >
          {children}
        </th>
      </LineNumbers>
    ),
    td: ({ children, ...props }: ComponentPropsWithoutRef<"td">) => (
      <LineNumbers>
        <td
          {...props}
          className="border border-gray-300 p-2 dark:border-gray-700"
        >
          {children}
        </td>
      </LineNumbers>
    ),
    hr: ({ children, ...props }: ComponentPropsWithoutRef<"hr">) => (
      <hr className='lineNumbers' {...props}>{children}</hr>
    ),
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
      <LineNumbers>
        <blockquote
          className={
            "ml-[0.075em] border-l-4 " +
            "border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
          }
          {...props}
        />
      </LineNumbers>
    ),
    pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
      <LineNumbers>
        <pre {...props} className="mb-2 lineNumbers">
          {children}
        </pre>
      </LineNumbers>
    ),
    ...components,
  };
}

function parseDoubleBrackets(paragraph: ReactNode): ReactNode[] {
  if (!paragraph) return [];
  const regex = /(?:\[\[)([^\]]*?)(?:\]\])/g;
  const className = " inline-link linkColor linkUnderline";
  const childrenResult: ReactNode[] = [];

  if (typeof paragraph === 'string') {
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
          <Link href={noteLink || ''} key={lastIndex} className={className}>
            {linkText}
          </Link>
        );
      }
    } while (res);
  } else {
    childrenResult.push(paragraph);
  }
  return childrenResult;
}