import {SHOWALERT,HIDEALERT} from "../Types";
const handlers={
    [SHOWALERT]:(state,action)=>action.payload,
    [HIDEALERT]:()=>null,
    DEFAULT:state=>state
}
export const AlertReducer=(state,action)=> {
 const handler=handlers[action.type]||handlers.DEFAULT
    return handler(state,action)
}