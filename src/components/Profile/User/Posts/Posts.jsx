import React from 'react';
import a from './Posts.module.css';
import Post from '../Post/Post.jsx';
import AddPostReduxForm from './AddPostForm';

class Posts extends React.PureComponent {

    // onAddPost = () => {
    //     this.props.addPost()
    // }

    // onPostChange = () => {
    //     let text = this.newPostElem.current.value
    //     this.props.changeNewPostText(text);
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps != this.props || nextState != this.state;
    // }

    addNewPost = (formData) => {
        this.props.addNewPost(formData.message)
        this.props.resetForm()
    };

    render(){
        return (
            <div className={a.posts}>
                <AddPostReduxForm onSubmit={this.addNewPost}/>
                {
                    this.props.posts.map( (item, index) => 
                        { 
                            return (
                                <Post
                                    key={index}
                                    message={item.message}
                                    likes_count={item.likes_count}
                                    id={item.id}
                                    photo={this.props.profile.photos.large}
                                    name={this.props.profile.fullName}
                                    deletePost={this.props.deletePost}
                                />
                            ) 
                        }
                    )
                }
            </div>
        )}
};

export default Posts;