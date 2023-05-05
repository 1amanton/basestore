import { useSelector } from "react-redux"
import classes from "./Rightbar.module.css"

export const Rightbar = () => {
    const name = useSelector((state) => state.user.name)
    return (
        <div>
            hello<span className={classes.name}> {name}</span>
        </div>
    )
}