const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        { id: 1, name: "John Snow" },
        { id: 2, name: "Sara Arrow" },
        { id: 3, name: "Jack de Vall" },
    ],

    messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "Hello!" },
        { id: 3, message: "Happy New Year 2020!" },
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_MESSAGE:
    
            let newMessage = {
                id: state.messages[state.messages.length - 1].id + 1,
                message: action.message
            } 

            return {
                ...state,  // ???????? ????? ?????? ????, ??? ????? ??????????
                newMessageText: '',
                messages: [...state.messages, newMessage]  // stateCopy.messages.push(newMessage); => push() ??? ?? ???., ??????? ??????????? ??? ???
            }

        default:
            return state
    }

}

export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message: message})

export default dialogsReducer