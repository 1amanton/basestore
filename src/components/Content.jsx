import { useState } from "react"
import classes from "./Content.module.css"
import { useDispatch, useSelector } from "react-redux"
import { update } from "../redux/userSlice"

export const Content = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(update({ name, email }))
    }



    return (
        <div>
            UPDATE UR ACCOUNT
            <form className={classes.forma}>

                <div>
                    <img src="" alt="" />

                </div>
                <input type="text" placeholder={user.name} onChange={e => setName(e.target.value)} />
                <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="password" />

                <button onClick={handleUpdate}>update</button>
            </form>

        </div>
    )
}