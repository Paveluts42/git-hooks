import {ClEARUSERS, GETREPOS, GETUSER, SEARCHUSER, SETLOADING} from "../Types";

const handlers={
    [SEARCHUSER]:(state,action)=>({...state,users:action.payload,loading:false}),
    [GETREPOS]:(state,{payload})=>({...state,repos:payload,loading:false}),
    [GETUSER]:(state,{payload})=>({...state,user:payload,loading:false}),
    [SETLOADING]:state=>({...state,loading:true}),
    [ClEARUSERS]:state=>({...state,users:[]}),
    DEFAULT:state=>state
}

export const GithubReducer=(state,action)=>{
const handler=handlers[action.type]||handlers.DEFAULT
    return handler(state,action)
}