import postsReducer, { addPostActionCreator, deletePost } from './posts-reducer'

// 1. test data
let state = {
    posts: [
        {
            id: 1,
            message: "Hi! Anime poor💩🖕",
            likes_count: 1,
        },
        {
            id: 2,
            message: "Hi! Anime poor💩🖕",
            likes_count: 1,
        },
    ]
}

it('new post should be added', () => {
    // 2. test action
    let action = addPostActionCreator("hentai")
    let newState = postsReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3);
})

it('new post text', () => {
    // 2. test action
    let action = addPostActionCreator("hentai")
    let newState = postsReducer(state, action)

    // 3. expectation
    expect(newState.posts[2].message).toBe("hentai");
})

it('post should be delited', () => {
    // 2. test action
    let action = deletePost(1)
    let newState = postsReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(1);
})
