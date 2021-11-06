const ADD_POST = 'ADD-POST',
  UPDATE_ADD_POST_VALUE = 'UPDATE-ADD-POST-VALUE'

export const redicerWallPage = (state, action) => {
  switch(action.type){
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



export const addPostActionCreate = () => ({type: ADD_POST})
export const updateAddPostValueActionCreate = (text) => ({type: UPDATE_ADD_POST_VALUE,newText: text})

export default redicerWallPage