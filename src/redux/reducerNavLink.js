import {rss, network, jobs, messages, notises} from '../img/imagesNav'

const initialState = {
  links: [{
      id: 1,
      name: "feed",
      path: "/wall",
      logo: rss,
    },
    {
      id: 2,
      name: "network",
      path: "/network",
      logo: network,
    },
    {
      id: 3,
      name: "jobs",
      path: "/jobs",
      logo: jobs,
    },
    {
      id: 4,
      name: "chat",
      path: "/message",
      logo: messages,
    },
    {
      id: 5,
      name: "notises",
      path: "/notises",
      logo: notises,
    }
  ]
}

const reducerNavLink = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducerNavLink