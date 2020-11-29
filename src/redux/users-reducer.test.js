const { default: usersReducer, followSuccess, unfollowSuccess, setUsers } = require("./users-reducer")

let state = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0, 
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}

it("users be provided", () => {
    let action = setUsers({userName: "Vitya"})
    let newState = usersReducer(state, action)

    expect(newState.users !== []).toBe(newState.users.userName === "Vitya");
})

it("follow working is correct", () => {
    let action = followSuccess(10)
    let newState = usersReducer(state, action)

    expect(newState.isFetching).toBe(true);
})

it("unfollow working is correct", () => {
    let action = unfollowSuccess(10)
    let newState = usersReducer(state, action)

    expect(newState.isFetching).toBe(true);
})