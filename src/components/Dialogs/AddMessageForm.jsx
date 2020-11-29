import React from "react";
import { Field, reduxForm } from "redux-form";
import a from "./Dialogs.module.css";
import { AddMessageInput } from "../Common/FormsControls/FormsComponents";
import { requiredField, maxLengthCreator } from '../../utils/validators/validators'

// onChange={this.onMessageChange} value={this.props.newMessageText}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={a.new_message}>
            <Field 
                component={AddMessageInput} 
                validate={[requiredField, maxLength100]}
                name="message" 
                type="text" 
                className={a.login} 
                placeholder="Your text..."
            />
            <button className={a.add_new_message}>Enter</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm)

export default AddMessageReduxForm