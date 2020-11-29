import postsReducer from "./posts-reducer"
import dialogsReducer from "./dialogs-reducer"
import navReducer from "./nav-reducer"

let STORE = {
    _STATE: {
        postsPage: {
            posts: [
                {
                    id: 1,
                    message: "Hi! Anime poor💩🖕",
                    likes_count: 1,
                },
                {
                    id: 2,
                    message: "DO YOU UNDERSTAAAAAAAAAAANDO?",
                    likes_count: 231,
                },
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "John Snow"
                },
                {
                    id: 2,
                    name: "Sara Arrow"
                },
                {
                    id: 3,
                    name: "Jack de Vall"
                },
            ],
            messages: [
                {
                    id: 1,
                    message: "Hi!"
                },
                {
                    id: 2,
                    message: "Hello!"
                },
                {
                    id: 3,
                    message: "Happy New Year 2020!🎉🎄✨"
                },
            ],
            newMessageText: ''
        },
    
        navPage: {
            friends: [
                {name: "👨‍💼 John Snow"},
                {name: "🧕 Sara Arrow"},
                {name: "👨‍🔬 Jack de Vall"},
            ]
        },
    },

    dispatch (action) {

        this._STATE.postsPage = postsReducer(this._STATE.postsPage, action)
        this._STATE.dialogsPage = dialogsReducer(this._STATE.dialogsPage, action)
        this._STATE.navPage = navReducer(this._STATE.navPage, action)

        this._subscriber(this._STATE);
 
    },

    getState () {
        return this._STATE
    },

    // pattern - observer!

    _subscriber () {
        console.log('State is changed')
    },

    subscribe (observer) {
        this._subscriber = observer
    },

}

export default STORE
window.STORE = STORE