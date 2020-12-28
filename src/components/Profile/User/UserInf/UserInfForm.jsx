import React from 'react';
import style from '../User.module.css';
import errorStyle from '../../../Common/FormsControls/FormsComponents.module.css';
import {ProfileInput} from '../../../Common/FormsControls/FormsComponents';
import { Field, reduxForm } from 'redux-form';

let UserInfForm = ({handleSubmit, error, profile, deactiveEditMode}) => {
    return (
        <form onSubmit={handleSubmit} className={style.user__inf}>

            { error && <div className={errorStyle.formSummaryError}> {error} </div> }

            <div className={style.form_item}>
                <p>Name: </p>
                <Field
                    component={ProfileInput}
                    name="fullName"
                    type="text" 
                    placeholder="New name"
                />    
            </div>

            <div className={style.form_item}>
                <p>Are you looking for a job?: </p>
                <Field
                    component={ProfileInput}
                    name="lookingForAJob"
                    type="checkbox" 
                />    
            </div>

            <div className={style.form_item}>
                <p>My skills: </p>
                <Field
                    component={ProfileInput}
                    name="lookingForAJobDescription"
                    type="text" 
                    placeholder="Are you looking for a job?"
                />    
            </div>

            <div className={style.form_item}>
                <p>About me: </p>
                <Field
                    component={ProfileInput}
                    name="aboutMe"
                    type="text" 
                    placeholder="I'm ..."
                />    
            </div>

            <button onClick={deactiveEditMode} className={style.contacts__close_editor}>
                Close editor <i className="fas fa-times"></i>
            </button>

            <div className={style.contacts__list}>
                <p>Contacts:</p>
                <div>
                    {Object.keys(profile.contacts).map(key => {
                        return (
                            <div key={key} className={style.contacts}>
                                <span className={style.contacts__title}>{key}: </span>
                                <div className={style.form_item}>
                                    <Field
                                        component={ProfileInput}
                                        name={"contacts."+key}
                                        type="text" 
                                        placeholder={key}
                                    />    
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <button className={style.contacts__save_changes}>
                Save changes <i className="fas fa-check"></i>
            </button>
        </form>
    );
};

export let UserInfFormRedux = reduxForm({form: 'profile_form'})(UserInfForm);

export default UserInfFormRedux;