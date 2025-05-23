import axios from "axios";
import { MAKE_REQUEST, FAIL_REQUEST, GET_USER_LIST, DELETE_USER, ADD_USER, UPDATE_USER, GET_USER_OBJ } from "./ActionType";
import { toast } from "react-toastify";

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

export const getUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }
}

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

export const addUser = () => {
    return {
        type: ADD_USER
    }
}

export const updateUser = () => {
    return {
        type: UPDATE_USER
    }
}

export const getUserObj = (data) => {
    return {
        type: GET_USER_OBJ,
        payload: data
    }
}

// Dispatch Get User List
export const FetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:8000/user').then(res => {
            const userList = res.data;
            dispatch(getUserList(userList));
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

// Dispatch Delete
export const RemoveUser = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.delete('http://localhost:8000/user/' + id).then(res => {
            dispatch(deleteUser());
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

// Dispatch Delete User
export const FunctionAddUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.post('http://localhost:8000/user', data).then(res => {
            dispatch(addUser());
            toast.success('User Added Successfully.');
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}


// Dispatch Update User
export const FunctionUpdateUser = (data, id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.put('http://localhost:8000/user/' + id, data).then(res => {
            dispatch(updateUser());
            toast.success('User Updated Successfully.');
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

// Dispatch Get User Obj
export const FetchUserobj = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:8000/user/' + id).then(res => {
            const userobj = res.data;
            dispatch(getUserObj(userobj));
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}