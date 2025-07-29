import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import SideBarTopButton from './SideBarTopButton';

export default function SideBarTopButtonsList() {
    return (
        <div className={"topbar bottomBorder row"}>
            <SideBarTopButton>
                <FolderOpenOutlinedIcon />
            </SideBarTopButton>
            <SideBarTopButton>
                <SearchOutlinedIcon />
            </SideBarTopButton>
            <SideBarTopButton>
                <BookmarkBorderOutlinedIcon />
            </SideBarTopButton>
        </div>
    );
}