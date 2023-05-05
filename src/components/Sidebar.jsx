import { useSelector } from "react-redux"
import classes from "./Sidebar.module.css"

export const Sidebar = () => {
    const name = useSelector((state) => state.user.name)
    return (
        <div className={classes.sidebar}>
            <span>Friends</span>
            <span>Msg</span>
            <span>Settings</span>
            <span>Profile</span>
            <div className={classes.logout}>
                <span>Logout </span>
                <span className={classes.name}>{name}</span>
            </div>

        </div>
    )
}