
import AddTaskIcon from '@mui/icons-material/AddTask';
import TaskIcon from '@mui/icons-material/Task';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LowPriorityIcon from '@mui/icons-material/LowPriority';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <AddTaskIcon />,
        label: 'Добавленные задачи',
        route: 'new-tasks'
    },
    {
        id: 1,
        icon: <TaskIcon />,
        label: 'Выполненные задачи',
        route: 'completed-tasks'
    },
    {
        id: 2,
        icon: <AssignmentIcon />,
        label: 'Прочие задачи',
        route: 'other-tasks'
    },
    {
        id: 3,
        icon: <ListAltIcon />,
        label: 'Еще что то',
        route: 'something-else'
    },
    {
        id: 4,
        icon: <LowPriorityIcon />,
        label: 'И что то еще',
        route: 'and-something-else'
    }
]
