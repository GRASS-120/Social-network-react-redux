/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import a from './FormsComponents.module.css';

const FormsControl = ({ meta: { touched, error }, className, ...props }) => {
  const hasError = touched && error;

  return (
    <div className={`${a[className]} ${hasError ? a.error : ''}`}>
      {props.children}
      {hasError && <span style={{ marginLeft: '10px' }}>{error}</span>}
    </div>
  );
};

export const AddPostInput = (props) => {
  const { input, ...restProps } = props;
  return (
    <FormsControl className="login" {...props}>
      <input {...restProps} {...input} />
    </FormsControl>
  );
};

export const AddMessageInput = (props) => {
  const { input, ...restProps } = props;
  return (
    <FormsControl className="login" {...props}>
      <input {...restProps} {...input} />
    </FormsControl>
  );
};

export const LoginInput = (props) => {
  const { input, ...restProps } = props;
  return (
    <FormsControl className="login" {...props}>
      <input {...restProps} {...input} />
    </FormsControl>
  );
};

export const ProfileInput = (props) => {
  const { input, ...restProps } = props;
  return (
    <FormsControl className="profile_input" {...props}>
      <input {...restProps} {...input} />
    </FormsControl>
  );
};
