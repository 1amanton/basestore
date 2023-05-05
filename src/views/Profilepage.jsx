import classes from "./Profilepage.module.css"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Content } from "../components/Content"
import { Rightbar } from "../components/Rightbar"



export const Profilepage = () => {
    return (
        <div className={classes.profpage}>
            <Header />
            <div className={classes.pagecontent}>
                <Sidebar />
                <Content />
                <Rightbar />
            </div>

        </div>
    )
}