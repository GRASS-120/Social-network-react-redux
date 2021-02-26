import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsersThunkCreator,
  onPageChangeThinkCreator,
} from '../../redux/users-reducer';
import Users from './Users';
import { compose } from 'redux';
import {
  getUsersSuper,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingProgress,
} from '../../redux/selectors/users-selectors';

// let Users = (props) => {

//     let getUsers = () => {
//         if (props.users.length === 0){
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(Response => {
//                 props.setUsers(Response.data.items)
//             })
//         }
//     }

//     return <div>
//         <button onClick={getUsers()}>SHOW USERS</button>
//         {
//             props.users.map(u => <div >
//                 <div>
//                     <img src={ u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
//                     { u.followed ?
//                      <button onClick={ () => {props.unfollow(u.id)} }>UNFOLLOW</button> :
//                      <button onClick={ () => {props.follow(u.id)} }>FOLLOW</button>
//                     }
//                 </div>
//                 <div>
//                     <div>
//                         <p>{u.name}</p>
//                         <p>{'u.location.country'}</p>
//                         <p>{'u.location.city'}</p>
//                     </div>
//                     <div>
//                         <p>{u.status}</p>
//                     </div>
//                 </div>
//             </div>)
//         }
//     </div>
// }

class UsersContainer extends React.Component {
  // ! конструктор писать не надо, если класс только отрисовывает, все ПО УМОЛЧАНИЮ

  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsersThunkCreator(currentPage, pageSize);
  }

  onPageChange = (pageNumber, pageSize) => {
    this.props.onPageChangeThinkCreator(pageNumber, pageSize);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChange={this.onPageChange}
        isFetching={this.props.isFetching}
        toggleIsFetching={this.props.toggleIsFetching}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingProgress={this.props.followingProgress}
      />
    );
  }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingProgress: state.usersPage.followingProgress,
//     }
// }

const mapStateToProps = (state) => {
  return {
    users: getUsersSuper(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
  };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },

//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },

//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },

//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page))
//         },

//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },

//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsersThunkCreator,
    onPageChangeThinkCreator,
  })
)(UsersContainer);
