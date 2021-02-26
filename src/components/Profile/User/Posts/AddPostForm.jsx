import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './Posts.module.css';
import { requiredField } from '../../../../utils/validators/requiredField';
import { maxLengthCreator } from '../../../../utils/validators/maxLengthCreator';
import { AddPostInput } from '../../../Common/FormsControls/FormsComponents';

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => (
  <form onSubmit={props.handleSubmit} className={style.add_post__block}>
    <p className={style.my_posts}>My posts📢</p>
    <div className={style.add_post__form}>
      <Field
        component={AddPostInput}
        name="message"
        type="text"
        placeholder="Post text..."
        validate={[requiredField, maxLength10]}
      />
      <button type="submit" className={style.add_post}>
        Add post
      </button>
    </div>
  </form>
);

const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm);

export default AddPostReduxForm;
