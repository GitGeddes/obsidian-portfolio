/**
 * Creates a breadcrumb of the current note and its folder path.
 * @module app/components/note/components/NoteBreadcrumb
 */

import { Breadcrumbs, Link } from "@mui/material";

/**
 * The input properties for the {@link NoteBreadcrumb} function.
 */
export type NoteBreadcrumbProps = {
    /** the full path of the current note, including the note name. */
    path: string;
}

/**
 * Create a breadcrumb trail of the file name and folder path.
 * @param {NoteBreadcrumbProps} props the path of the current note to be displayed.
 * @returns a React element.
 */
export default function NoteBreadcrumb(props: NoteBreadcrumbProps) {
    return (
        <div className="column breadcrumb">
            <Breadcrumbs
                style={{
                    color: "#666666",
                    fontSize: "13px"
                }}
            >
                {
                    props.path.split('/').map(p => {
                        return (
                            <Link
                                underline="hover"
                                color="#b3b3b3"
                                fontSize="13px"
                                key={p}
                            >
                                {p}
                            </Link>
                        );
                    })
                }
            </Breadcrumbs>
        </div>
    );
}