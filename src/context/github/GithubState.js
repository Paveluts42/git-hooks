import React,{useReducer} from "react"
import {GithubContext} from "./GithubContext"
import {GithubReducer} from "./GithubReducer"
import {ClEARUSERS, GETREPOS, GETUSER, SEARCHUSER, SETLOADING} from "../Types"
import axios from "axios"
console.log(process.env.REACT_APP_CLIENT_SECRET)
const CLIENTID=process.env.REACT_APP_CLIENT_ID
const CLIENTSECRET=process.env.REACT_APP_CLIENT_SECRET
const withCreds=url=>{
    return `${url}client_id=${CLIENTID}&client_secret=${CLIENTSECRET}`
}
export const GithubState=({children})=>{
    const initialState={
        user:{},
        users:[],
        loading:false,
        repos:[],
    }
    const [state,dispatch]=useReducer(GithubReducer,initialState)
    const search= async value=>{
setLoading()
const response=await axios.get(
    withCreds(`https://api.github.com/search/users?q=${value}&`))
        dispatch({
            type:SEARCHUSER,
            payload:response.data.items,
        })
    }
    const getUser=async name=>{
setLoading()
const response=await axios.get(withCreds(`https://api.github.com/users/${name}?`))
        dispatch({
            type: GETUSER,
            payload: response.data,
        })
    }
    const getRepos=async name=>{
setLoading()
        const response=await axios.get(withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`))

        dispatch({
            type: GETREPOS,
            payload:response.data,
        })
    }
    const clearUsers=()=>dispatch({type:ClEARUSERS})

    const setLoading=()=>dispatch({type:SETLOADING})
    const{user,users,repos,loading}=state
    return(
        <GithubContext.Provider value={{search,getRepos,getUser,clearUsers,setLoading,user,users,repos,loading}}>
            {children}
        </GithubContext.Provider>
    )
}