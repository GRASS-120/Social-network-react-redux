import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from '../../../../redux/posts-reducer'
import Posts from './Posts';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (message) => {
            let action = addPostActionCreator(message)
            dispatch(action);
        },

        resetForm: () => {
            dispatch(reset('addPost'))
        }
    }
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
// connect осуществляет локальную перерисовку дерева

export default PostsContainer;