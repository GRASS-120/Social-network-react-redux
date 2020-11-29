import React from 'react';
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

let withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        // Редирект на страницу с авторизацией
        if(!props.isAuth){ return <Redirect to="/login"/> }
        return <Component {...props}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}

export default withAuthRedirect