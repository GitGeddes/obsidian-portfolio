/**
 * A container to create an external link like how they appear in Obsidian.
 * @module app/components/ExternalLink
 */

import { PropsWithChildren } from "react";
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

/**
 * Add an icon to an external link.
 * @param props.children a link with the `<a>` tag.
 * @returns a React element.
 */
export default function ExternalLink(props: PropsWithChildren) {
    return (
        <>
            {props.children}
            <OpenInNewOutlinedIcon sx={{ fontSize: '14px' }} className="secondaryTextColor" />
        </>
    );
}