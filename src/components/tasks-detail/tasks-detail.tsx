
import { FunctionComponent, useMemo } from 'react';
import { Spinner } from '../spinner/spinner';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useAppSelector } from '../../hooks/hooks';
import { ITasksItems } from '../../utils/types';
import { BasicSwitches, TabsRadioTasks } from '../tabs-radio/tabs-radio';
import Chat from '../chat/chat';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import styles from './tasks-detail.module.css';


const ItemTask = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const TasksDetail: FunctionComponent = () => {

    const { tasks } = useAppSelector((state) => state.tasksArray);
    let { id } = useParams();
    if (tasks) console.log(tasks)

    const taskItem = useMemo(() => {
        const itemId = tasks!.filter((item1: ITasksItems) => item1.id === +id!)
        return (
            <Grid xs={8} >
                <ItemTask >
                    <div className={styles.rowRadioSwitch}>
                        <h3 className={styles.h3Div}>Задание №{itemId[0].id}</h3>
                        <TabsRadioTasks />
                        <BasicSwitches />
                    </div>
                    <hr />

                    <h4>{itemId[0].name}</h4>
                    <p>{itemId[0].descripion}</p>
                </ItemTask>
            </Grid>

        )
    }, [id, tasks])

    return (

        <Grid container spacing={2} >
            {taskItem ? taskItem : (<Spinner />)}
            <Grid xs={4} >
                {/* <Button variant="outlined" >Чат</Button> */}

                <ItemTask> <Chat /></ItemTask>
            </Grid>
        </Grid>

    )
}

