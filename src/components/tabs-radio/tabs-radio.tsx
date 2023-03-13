import { Checkbox, FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export function BasicSwitches() {
    return (
        <FormControlLabel control={<Switch size="small" />} label='Выполнено' />
    );
}

export function TabsRadioTasks() {
    return (
        <div>
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} />
            <Checkbox {...label} />
            <Checkbox {...label} />
        </div>
    );
}