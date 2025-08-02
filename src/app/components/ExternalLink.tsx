import { PropsWithChildren } from "react";
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

export default function ExternalLink(props: PropsWithChildren) {
    return (
        <>
            {props.children}
            <OpenInNewOutlinedIcon sx={{ fontSize: '14px' }} className="secondaryTextColor" />
        </>
    );
}