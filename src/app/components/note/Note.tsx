import { PropsWithChildren } from "react";

export default function Note(props: PropsWithChildren) {
    return(
        <div className="note">
            {props.children}
        </div>
    );
}