import {addMessageActionCreator, changeNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
// import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { reset } from 'redux-form';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (message) => {
            let action = addMessageActionCreator(message)
            dispatch(action)
        },

        resetForm: () => {
            dispatch(reset('addMessage'))
        }
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
