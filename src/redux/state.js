import reducerMessagePage from "./reducerMessagePage"
import redicerWallPage from "./reducerWallPage"

let store = {
  _state: {
    messagePage: {
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
    },
    wallPage: {
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
  },
  _callSubscribe() {},

  getState() {return this._state},
  subscribe(observer) {this._callSubscribe = observer },

  despatch(action) {
    this._state.messagePage = reducerMessagePage(this._state.messagePage, action)
    this._state.wallPage = redicerWallPage(this._state.wallPage, action)    
    this._callSubscribe(this._state)
  }
}

export default store