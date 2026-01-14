import { ContributionDay } from '../hooks/useGithubActivity';
// Task indicators in Calendar
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

export const DOT_HEIGHT = 8;

function CircleLevelZero() {
    return (
        <div style={{ height: DOT_HEIGHT, aspectRatio: 1 }} />
    );
}

function CircleLevelOne(isCurrentMonth: boolean) {
    return (
        <CircleOutlinedIcon
            sx={{ fontSize: DOT_HEIGHT }}
            style={{ color: isCurrentMonth ? '#inherit' : '#494949' }}
        />
    );
}

function CircleLevelTwo(isCurrentMonth: boolean) {
    return (
        <CircleIcon
            sx={{ fontSize: DOT_HEIGHT }}
            style={{ color: isCurrentMonth ? '#inherit' : '#494949' }}
        />
    );
}

function CircleLevelThree(isCurrentMonth: boolean) {
    return (
        <div>
            {CircleLevelTwo(isCurrentMonth)}
            {CircleLevelOne(isCurrentMonth)}
        </div>
    );
}

function CircleLevelFour(isCurrentMonth: boolean) {
    return (
        <div>
            {CircleLevelTwo(isCurrentMonth)}
            {CircleLevelTwo(isCurrentMonth)}
        </div>
    );
}

type GitHubActivityDayProps = {
    commitDay: ContributionDay;
    isCurrentMonth: boolean;
}

export default function GitHubActivityDay(props: GitHubActivityDayProps) {
    return (
        <div>
            {
                (props.commitDay) ?
                    (props.commitDay.level === 0) ?
                    CircleLevelZero() :
                    (props.commitDay.level === 1) ?
                    CircleLevelOne(props.isCurrentMonth) :
                    (props.commitDay.level === 2) ?
                    CircleLevelTwo(props.isCurrentMonth) :
                    (props.commitDay.level === 3) ?
                    CircleLevelThree(props.isCurrentMonth) :
                    CircleLevelFour(props.isCurrentMonth)
                : CircleLevelZero()
            }
        </div>
    );
}