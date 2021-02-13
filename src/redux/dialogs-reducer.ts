const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogModel = {
  id: number;
  name: string;
};

type MessageModel = {
  id: number;
  message: string;
};

const initialState = {
  dialogs: [
    { id: 1, name: 'John Snow' },
    { id: 2, name: 'Sara Arrow' },
    { id: 3, name: 'Jack de Wall' },
  ] as Array<DialogModel>,

  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Hello!' },
    { id: 3, message: 'Happy New Year 2020!' },
  ] as Array<MessageModel>,
};

export type DialogInitStateType = typeof initialState;

//?-- Reducer --//

const dialogsReducer = (
  state = initialState,
  action: any
): DialogInitStateType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: state.messages[state.messages.length - 1].id + 1,
        message: action.message,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage], // stateCopy.messages.push(newMessage); => push() мутирует массив
      };
    }
    default:
      return state;
  }
};

//?-- Action creators --//

type addMessageActionCreatorType = {
  type: typeof ADD_MESSAGE;
  message: string;
};
export const addMessageActionCreator = (
  message: string
): addMessageActionCreatorType => ({
  type: ADD_MESSAGE,
  message: message,
});

export default dialogsReducer;
