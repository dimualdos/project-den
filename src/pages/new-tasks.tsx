
import { FunctionComponent, useMemo } from 'react';
import { Spinner } from '../components/spinner/spinner';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useAppSelector } from '../hooks/hooks';
import { ITasksItems } from '../utils/types';
import { BasicSwitches, TabsRadioTasks } from '../components/tabs-radio/tabs-radio';
import Chat from '../components/chat/chat';
import { Link } from 'react-router-dom';
import styles from './css/new-tasks.module.css'
import { Box } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const NewTasks: FunctionComponent = () => {
    const { tasks } = useAppSelector((state) => state.tasksArray)

    const items = tasks.map((itemTasks: ITasksItems) => {
        return (

            <Grid xs={8} key={itemTasks.id}>
                <Item >
                    <div className={styles.rowRadioSwitch}>
                        <h3 className={styles.h3Div}>Задание №{itemTasks.id}</h3>
                        <TabsRadioTasks />
                        <BasicSwitches />
                    </div>
                    <hr />

                    <Link
                        className={styles.textLinkTasks}
                        to={`/new-tasks/${itemTasks.id}`} >
                        <h4>{itemTasks.name}</h4>
                    </Link>
                </Item>
            </Grid>
        )
    })

    return (
        <Grid container spacing={2}>
            {items ? items : (<Spinner />)}
            <Grid xs={4}>
                {/* <Button variant="outlined" >Чат</Button> */}
                {/* <Chat /> */}
                <Item>sfgndfg</Item>
            </Grid>
        </Grid>
    )
}


