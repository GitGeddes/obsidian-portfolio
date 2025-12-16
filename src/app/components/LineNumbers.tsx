/**
 * A wrapper for text elements to add a line number on the left side.
 * @module app/components/LineNumbers
 */

import { CSSProperties, PropsWithChildren } from "react";

/**
 * The input properties for the {@link LineNumbers} function.
 */
export type LineNumbersProps = {
    /** (optional) CSS styles to pass through. */
    style?: CSSProperties;
}

/**
 * Wrap a text element with a line number.
 * @param props properties with a React child element and optional CSS styles.
 * @returns a React element.
 */
export default function LineNumbers(props: LineNumbersProps & PropsWithChildren) {
    return (
        <div className="lineNumbers row" style={{ ...props.style }}>{props.children}</div>
    );
}