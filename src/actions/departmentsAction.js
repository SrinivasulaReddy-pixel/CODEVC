import axios from "../config/axios"

export const setDepartments = (departments)=>{
    return {
        type: 'SET_DEPARTMENTS', payload: departments
    }
}

export const startGetDepartments = () =>{
    return (dispatch)=>{
        axios
          .get('/departments', {
            headers: {
              'x-auth': localStorage.getItem('authToken'),
            },
          })
          .then((response) => {
            const departments= response.data
            dispatch(setDepartments(departments))
          });
    }
}

export const removeDepartment = (id)=>{
    return {
        type: 'REMOVE_DEPARTMENT', payload: id
    }
}
export const startRemoveDepartment = (id, redirect) =>{
    return (dispatch)=>{
        axios.delete(`/departments/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const department = response.data
            dispatch(removeDepartment(department._id))
            redirect()
        })
    }
}

export const addDepartment = (dept) =>{
    return {
        type:'ADD_DEPARTMENT',
        payload: dept
    }
}
export const startAddDepartment = (formData, redirect)=>{
    return (dispatch) =>{
        axios.post('/departments', formData, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const dept = response.data
            dispatch(addDepartment(dept))
            redirect()
        })
    }
}

export const updateDepartment = (dept)=>{
    return {
        type:'UPDATE_DEPARTMENT', payload: dept
    }
}
export const startUpdateDepartment = (formData, id, redirect) =>{
    return (dispatch)=>{
        axios.put(`/departments/${id}`, formData, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const dept = response.data
            dispatch(updateDepartment(dept))
            redirect()
        })
    }
}