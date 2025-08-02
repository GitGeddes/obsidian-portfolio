import { CSSProperties, PropsWithChildren } from "react";

type LineNumbersProps = {
    style?: CSSProperties;
}

export default function LineNumbers(props: LineNumbersProps & PropsWithChildren) {
    return (
        <div className="lineNumbers row" style={{ ...props.style }}>{props.children}</div>
    );
}