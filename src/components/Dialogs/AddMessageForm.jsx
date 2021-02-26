import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './Dialogs.module.css';
import { AddMessageInput } from '../Common/FormsControls/FormsComponents';
import { requiredField } from '../../utils/validators/requiredField';
import { maxLengthCreator } from '../../utils/validators/maxLengthCreator';

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.new_message}>
        <Field
          component={AddMessageInput}
          validate={[requiredField, maxLength100]}
          name="message"
          type="text"
          className={style.login}
          placeholder="Your text..."
        />
        <button type="submit" className={style.add_new_message}>
          Enter
        </button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: 'addMessage' })(AddMessageForm);

export default AddMessageReduxForm;
