import { addPostActionCreator, deletePost } from '../../../../redux/posts-reducer';
import Posts from './Posts.jsx';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        profile: state.postsPage.profile,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (message) => {
            let action = addPostActionCreator(message)
            dispatch(action);
        },

        deletePost: (userId) => {
            let action = deletePost(userId)
            dispatch(action);
        },

        resetForm: () => {
            dispatch(reset('addPost'))
        }
    }
};


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
// connect осуществляет локальную перерисовку дерева

export default PostsContainer;