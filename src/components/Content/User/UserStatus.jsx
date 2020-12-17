import React from 'react';
import a from './User.module.css';

class UserStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    };

    render() {
        return (
            <div>
                {this.state.editMode && this.props.isOwner ?    
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveEditMode} type="text" value={this.state.status}/>
                    : <span onDoubleClick={this.activeEditMode} className={a.user__status}>Status: {this.props.status || "No status"}</span>
                } 
            </div>
        );
    };
};

export default UserStatus;