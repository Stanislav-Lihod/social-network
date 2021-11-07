const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT',
  ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

const initialState = {
  contacts: [{
      name: "Michail Issacow",
      id: 1,
      date: "31 Oct",
      lastMessage: "On voluptate velit esse cillum dolore eu fugiat nulla",
      messages: ['On voluptate velit esse cillum dolore eu fugiat nulla', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem a', 'Sed ut perspe natus error sit voluptate miciatis unde omnis ist a']
    },
    {
      name: "Oleg Maslow",
      id: 2,
      date: "31 Oct",
      lastMessage: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem a",
      messages: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem a', 'On voluptate velit esse cillum dolore eu fugiat nulla', 'Sed ut perspe natus error sit voluptate miciatis unde omnis ist a']
    },
    {
      name: "Katia Veras",
      id: 3,
      date: "29 Oct",
      lastMessage: "Ut enim ad minima veniam, quis nostrum exercitationem"
    },
    {
      name: "Aliona Volkova",
      id: 4,
      date: "28 Oct",
      lastMessage: "But I must explain to you how all this mistaken idea"
    },
    {
      name: "Masha Kitiva",
      id: 5,
      date: "19 Oct",
      lastMessage: "because it is pleasure, but because those who"
    },
    {
      name: "Masha Kitiva",
      id: 6,
      date: "19 Oct",
      lastMessage: "because it is pleasure, but because those who"
    },
    {
      name: "Masha Kitiva",
      id: 7,
      date: "19 Oct",
      lastMessage: "because it is pleasure, but because those who"
    },
    {
      name: "Masha Kitiva",
      id: 8,
      date: "19 Oct",
      lastMessage: "because it is pleasure, but because those who"
    },
    {
      name: "Masha Kitiva",
      id: 9,
      date: "19 Oct",
      lastMessage: "because it is pleasure, but because those who"
    },
    {
      name: "Masha Kitiva",
      id: 10,
      date: "19 Oct",
      lastMessage: "because it is pleasure, but because those who"
    }
  ],
  messages: ['1On voluptate velit esse cillum dolore eu fugiat nulla', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem aSed ut perspiciatis unde omnis iste natus error sit voluptatem aSed ut perspiciatis unde omnis iste natus error sit voluptatem a'],
  messageText: ''
}


const reducerMessagePage = (state = initialState, action) => {
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

export const addNewMessageActionCreate = () => ({
  type: ADD_NEW_MESSAGE
})
export const updateMessageTextActionCreate = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  newText: text
})

export default reducerMessagePage