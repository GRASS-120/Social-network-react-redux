import { connect } from 'react-redux';
// import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { addMessageActionCreator } from '../../redux/dialogs-reducer.ts';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: (message) => {
      const action = addMessageActionCreator(message);
      dispatch(action);
    },

    resetForm: () => {
      dispatch(reset('addMessage'));
    },
  };
};

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
