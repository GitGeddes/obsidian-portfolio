import type { MDXComponents } from 'mdx/types'
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

const components: MDXComponents = {}

export function useMDXComponents(): MDXComponents { return {
    h1: ({ children, ...props }: ComponentPropsWithoutRef<"h1">) => (
      <h1 className="mb-2 mt-5 lineNumbers" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2 className="mb-2 mt-5 lineNumbers" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
      <h3 className="mb-2 mt-5 lineNumbers" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: ComponentPropsWithoutRef<"h4">) => (
      <h4 className="mb-2 mt-5 lineNumbers" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
        {children}
      </h4>
    ),
    h5: ({ children, ...props }: ComponentPropsWithoutRef<"h5">) => (
      <h5 className="mb-2 mt-5 lineNumbers" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
        {children}
      </h5>
    ),
    h6: ({ children, ...props }: ComponentPropsWithoutRef<"h6">) => (
      <h6 className="mb-2 mt-5 lineNumbers" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props}>
        {children}
      </h6>
    ),
    p: (props: ComponentPropsWithoutRef<"p">) => (
      <p className="mb-2 leading-snug lineNumbers" style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props} />
    ),
    ol: (props: ComponentPropsWithoutRef<"ol">) => (
      <ol
        className="space-y-1 lineNumbers"
        style={{
          listStyleType: "revert",
          listStyle: "revert",
          padding: "revert",
          fontSize: 'revert',
          fontWeight: 'revert'
        }}
        {...props}
      />
    ),
    ul: (props: ComponentPropsWithoutRef<"ul">) => {
      if (props.className === "contains-task-list") {
        return <ul className="space-y-1" {...props} />;
      }

      return (
        <ul
          className="space-y-1"
          style={{
            listStyleType: "revert",
            listStyle: "revert",
            padding: "revert",
            fontSize: 'revert',
            fontWeight: 'revert'
          }}
          {...props}
        />
      );
    },
    li: (props: ComponentPropsWithoutRef<"li">) => (
      <li className='lineNumbers' style={{ fontSize: 'revert', fontWeight: 'revert' }} {...props} />
    ),
    a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => {
      const className = " inline-link lineNumbers";
      if (href?.startsWith("/")) {
        return (
          <Link href={href} className={className} {...props}>
            {children}
          </Link>
        );
      }
      if (href?.startsWith("#")) {
        return (
          <a href={href} className={className} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...props}
        >
          {children}
        </a>
      );
    },
    table: ({ children, ...props }: ComponentPropsWithoutRef<"table">) => (
      <span>
        <table {...props}>{children}</table>
      </span>
    ),
    tr: ({ children, ...props }: ComponentPropsWithoutRef<"tr">) => (
      <tr
        {...props}
        className="odd:bg-white even:bg-gray-100 odd:dark:bg-gray-900 even:dark:bg-gray-800"
      >
        {children}
      </tr>
    ),
    th: ({ children, ...props }: ComponentPropsWithoutRef<"th">) => (
      <th
        {...props}
        className="border border-gray-300 p-2 dark:border-gray-700"
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: ComponentPropsWithoutRef<"td">) => (
      <td
        {...props}
        className="border border-gray-300 p-2 dark:border-gray-700"
      >
        {children}
      </td>
    ),
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className={
          "ml-[0.075em] border-l-4 " +
          "border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
        }
        {...props}
      />
    ),
    pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
      <pre {...props} className="mb-2 lineNumbers">
        {children}
      </pre>
    ),
    ...components,
  };
}