import { GET_USERS, SEARCH } from "./reducer";



export const getData = () => (dispatch, getState) => {
    console.log(getState());
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()
    .then(data => {
        dispatch({
            type: GET_USERS,
            payload: data
        })
    }))
    .catch(e => {
      console.log(e)
    })
}

export const search = (value) => {
    return {
        type: SEARCH,
        payload: value
    }
}