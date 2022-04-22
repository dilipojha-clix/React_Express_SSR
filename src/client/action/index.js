
 
export const FETCH_USER = "FETCH_USER"
export const fetchUsers = async(res)=> {
    console.log("===============>",res)
    return {
        type:FETCH_USER,
        payload:res
     }
    /* dispatch({
       type:FETCH_USER,
       payload:res
    }); */
}
