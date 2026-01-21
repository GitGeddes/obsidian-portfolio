'use client'

import { useTabNavigation } from '@/app/hooks/useTabNavigation';
import { PropsWithChildren } from 'react';

type LocalLinkProps = PropsWithChildren & {
    id: string;
    linkTitle?: string;
    noteHref?: string;
    className: string;
};

export default function LocalLink(props: LocalLinkProps) {
    const { navigateToTab } = useTabNavigation();

    return (
        <a
            onClick={() => navigateToTab(props.id, props.linkTitle || props.id, props.noteHref)}
            className={props.className}
        >
            {props.children}
        </a>
    );
}