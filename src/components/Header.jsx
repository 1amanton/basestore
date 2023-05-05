import { useSelector } from "react-redux"
import classes from "./Header.module.css"
export const Header = () => {

    const name = useSelector((state) => state.user.name)
    return (
        <div className={classes.header}>
            <div className={classes.logo}></div>
            <span className={classes.name}>{name}</span>
        </div>
    )
}