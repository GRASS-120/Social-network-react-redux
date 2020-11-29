import React from 'react';
import a from "./Dialogs.module.css";
import Dialog from './Dialog/Dialog';
import Message from './Dialog/Message/Message';
import { Redirect } from 'react-router-dom';
import AddMessageReduxForm from './AddMessageForm';


// const Dialogs = (props) => {

//     let {dialogs, messages, newMessageText} = props.dialogsPage

//     let onAddNewMessage = () => { props.addNewMessage() }

//     let onMessageChange = (event) => {
//         let text = event.target.value
//         props.onMessageChange(text)
//     }

//     let elemDialogs = dialogs.map( (item) => {
//         return (<Dialog name={item.name} id={item.id}/>)
//     })

//     let elemMessages = messages.map( (item) => {
//         return (<Message message={item.message} id={item.id}/>)
//     })

//     return (
//         <div className={a.dialogs_block}>
//             <div className={a.dialogs_list}>
//                 {elemDialogs}
//             </div>

//             <div className={a.messages}>
//                 <div className={a.message_title}>
//                     <p>John Snow</p>
//                     <p>В сети 💻</p>
//                 </div>

//                 <div className={a.messages_window}>
//                    {elemMessages}
//                 </div>

//                 <div className={a.new_message}>
//                     <input className={a.new_message_text} placeholder="Your text..." onChange={onMessageChange} value={newMessageText}></input>
//                     <button className={a.add_new_message} onClick={onAddNewMessage}>Enter</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

class Dialogs extends React.Component {

    addNewMessage = (formData) => {
        this.props.addNewMessage(formData.message)
        this.props.resetForm()
    }

    render(){

        // Редирект на страницу с авторизацией
        if(!this.props.isAuth){ return <Redirect to="/login"/> }

        return <div className={a.dialogs_block}>
        
                <div className={a.dialogs_list}>
                    {
                        this.props.dialogs.map( (item) => {
                            return (<Dialog name={item.name} id={item.id}/>)
                        })
                    }
                </div>

                <div className={a.messages}>
                    <div className={a.message_title}>
                        <p>John Snow</p>
                        <p>В сети 💻</p>
                    </div>

                    <div className={a.messages_window}>
                    {
                        this.props.messages.map( (item) => {
                            return (<Message message={item.message} id={item.id}/>)
                        })
                    }
                    </div>

                    <AddMessageReduxForm onSubmit={this.addNewMessage}/>
                </div>
            </div>
    } 
}

export default Dialogs