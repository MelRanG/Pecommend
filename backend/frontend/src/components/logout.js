import { useEffect } from "react";
import {logOut} from "../redux/user_reducer"
import {useDispatch} from "react-redux"

function LogOut(){
    const dispatch = useDispatch();
    const doLogOut = () => dispatch(logOut());

    useEffect(()=>{
        sessionStorage.removeItem("Auth")
        sessionStorage.removeItem("Refresh")
        doLogOut();
        window.location.href = "/"
    })
    
}

export default LogOut;