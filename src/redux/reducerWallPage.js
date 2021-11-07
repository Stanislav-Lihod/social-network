const ADD_POST = 'ADD-POST',
  UPDATE_ADD_POST_VALUE = 'UPDATE-ADD-POST-VALUE'

const initialState = {
  posts: [{
      id: 1,
      name: "Stanislav",
      prof: "Front-end Developer",
      post: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
      likesValue: 50,
      commentValue: 150
    },
    {
      id: 2,
      name: "Stanislav",
      prof: "Front-end Developer",
      post: "On the other hand, we denounce with righteous indignation and dislike men is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations",
      likesValue: 15691,
      commentValue: 4568
    },
    {
      id: 3,
      name: "Stanislav",
      prof: "Front-end Developer",
      post: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligationsOn the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations",
      likesValue: 320,
      commentValue: 50
    },
  ],
  postAddValue: ''
}

const redicerWallPage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const post = {
        id: state.posts.length + 1,
        name: "Stanislav",
        prof: "Front-end Developer",
        post: state.postAddValue,
        likesValue: 0,
        commentValue: 0,
      }
      state.posts.unshift(post)
      state.postAddValue = ''
      return state
    case UPDATE_ADD_POST_VALUE:
      state.postAddValue = action.newText
      return state
    default:
      return state
  }
}



export const addPostActionCreate = () => ({
  type: ADD_POST
})
export const updateAddPostValueActionCreate = (text) => ({
  type: UPDATE_ADD_POST_VALUE,
  newText: text
})

export default redicerWallPage