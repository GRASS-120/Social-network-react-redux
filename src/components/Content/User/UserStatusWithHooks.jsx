import React, { useEffect, useState } from 'react'
import a from './User.module.css'

export const UserStatusWithHooks = React.memo(props => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activeEditMode = () => {
        setEditMode(true)
    }

    let deactiveEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value) 
    }

    console.log('RENDER')
    console.log(props)

    return (
        <div>
            {!editMode &&
                <span className={a.user__status} onDoubleClick={activeEditMode} >Status: {props.status || "No status"}</span>
            }
            { editMode &&
                <input autoFocus={true} onBlur={deactiveEditMode} onChange={onStatusChange} value={status} type="text"/>
            }        
        </div>
    )
});

export default UserStatusWithHooks;