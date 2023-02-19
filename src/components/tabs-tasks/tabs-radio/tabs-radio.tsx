import { FormControlLabel, FormGroup } from '@mui/material';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
    return (
        <FormControlLabel control={<Switch size="small" />} label='Выполнено' />
    );
}