import React from "react";
import { Field, reduxForm } from "redux-form";
import a from './Posts.module.css';
import { requiredField, maxLengthCreator } from '../../../../utils/validators/validators'
import { AddPostInput } from "../../../Common/FormsControls/FormsComponents";

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <p className={a.my_posts}>My posts📢</p>
            <Field
                component={AddPostInput}
                name="message"
                type="text" 
                placeholder="Post text..."
                validate={[requiredField, maxLength10]}
            />
            <button className={a.add_post}>Add post</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)

export default AddPostReduxForm