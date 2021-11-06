const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT',
  ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

const reducerMessagePage = (state, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.messageText = action.newText
      return state
    case ADD_NEW_MESSAGE:
      state.messages.push(state.messageText)
      state.messageText = ''
      return state
    default:
      return state
  }
}

export const addNewMessageActionCreate = () => ({type: ADD_NEW_MESSAGE})
export const updateMessageTextActionCreate = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text})

export default reducerMessagePage