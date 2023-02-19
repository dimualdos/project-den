
import { useMemo } from 'react';
import { Spinner } from '../spinner/spinner';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useAppSelector } from '../../hooks/hooks';
import { ITasksItems } from '../../utils/types';
import RowRadioButtonsGroup from './tabs-radio/tabs-radio';



import styles from './tabs-tasks.module.css';
import BasicSwitches from './tabs-radio/tabs-radio';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const TabsTasks = () => {
  const { tasks } = useAppSelector((state) => state.tasksArray)

  const items = useMemo(() => tasks.map((item: ITasksItems) => {
    return (<Grid xs={12}>
      <Grid xs={8}>
        <Item key={item.id}>
          <div className={styles.rowRadioSwitch}>
            <h3 className={styles.h3Div}>Задание №{item.id}</h3>
            <BasicSwitches />
          </div>
          <hr />
          {item.descripion}

        </Item>
      </Grid>
    </Grid>)
  })
    , [tasks]);

  return (
    <Grid container rowSpacing={1} columnSpacing={1}>

      {items ? items : (<Spinner />)}

    </Grid>
  )
}

