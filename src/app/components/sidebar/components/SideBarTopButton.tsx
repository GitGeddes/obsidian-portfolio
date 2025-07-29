import { PropsWithChildren } from "react";
import ListItemButton from '@mui/material/ListItemButton';

export default function SideBarTopButton(props: PropsWithChildren) {
    return (
        <div className='square row'>
            <ListItemButton>
                {props.children}
            </ListItemButton>
        </div>
    );
}