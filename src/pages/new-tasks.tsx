import { FunctionComponent } from "react";
import { TabsTasks } from "../components/tabs-tasks/tabs-tasks";
import styles from './css/pages.module.css'

export const NewTasks: FunctionComponent = () => {

    return (
        <div className={styles.centrContainer}>
            < TabsTasks />
        </div>
    )
}