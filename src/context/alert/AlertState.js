import React,{useReducer}from "react"
import {AlertContext} from "./AlertContext";
import {AlertReducer} from "./AlertReducer";
import {HIDEALERT, SHOWALERT} from "../Types";

export const AlertState=({children})=>{
const [state,dispatch]=useReducer(AlertReducer,null)
    const hide=()=>dispatch({type:HIDEALERT})
const show=(text,type="secondary")=>{
    dispatch({
        type:SHOWALERT,
        payload:{type,text}
    })
}

    return(
        <AlertContext.Provider value={{hide,show,alert:state}}>
            {children}
        </AlertContext.Provider>
    )
}