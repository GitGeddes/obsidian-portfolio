import { PropsWithChildren } from "react";
import ListItemButton from '@mui/material/ListItemButton';

export default function SideBarTopButton(props: PropsWithChildren) {
    return (
        <div className='square row'>
            <ListItemButton disabled>
                {props.children}
            </ListItemButton>
        </div>
    );
}