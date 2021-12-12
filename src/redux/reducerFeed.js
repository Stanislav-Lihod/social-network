import { articleAPI } from "../api/api"

const SET_ARTICLES = 'SET_ARTICLES',
  SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
  SET_ISLOADER = 'SET_ISLOADER',
  CHANGE_LOCALE = 'CHANGE_LOCALE',
  CLEAN_ARTICLE = 'CLEAN_ARTICLE',
  SET_NEXT_PAGE = 'SET_NEXT_PAGE',
  initialState = {
  articles: [],
  totalCount: 0,
  nextPage: 1,
  isLoader: false,
  locale: 'ru'
  }

const reducerFeed = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: [...state.articles, ...action.articles]
      }
    case SET_NEXT_PAGE:
      return{
        ...state,        
        nextPage: state.nextPage + 1
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      }    
    case SET_ISLOADER:
      return {
        ...state,
        isLoader: action.isLoader
      }
    case CHANGE_LOCALE:{
      return{
        ...state,
        locale: action.locale
      }
    }
    case CLEAN_ARTICLE:{
      return{
        ...state,
        articles: [],
        nextPage: state.nextPage = 1
      }
    }
    default:
      return state
  }
}

export const setArticles = (articles) => ({type: SET_ARTICLES, articles})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setIsLoader = (isLoader) => ({type: SET_ISLOADER, isLoader})
export const changeLocale = (locale) => ({type: CHANGE_LOCALE, locale})
export const cleanArticle = () =>({type: CLEAN_ARTICLE})
export const setNextPage = () => ({type: SET_NEXT_PAGE})


export const getArticles = (locale, nextPage) =>{
  return (dispatch) =>{
    dispatch(setIsLoader(true))
    articleAPI.getArticles(locale,'technology', nextPage).then(data => {
      dispatch(setTotalCount(data.totalResults))
      dispatch(setArticles(data.articles))
      dispatch(setIsLoader(false))
    })
  }
}

export const changeLocaleThunk = (locale, nextPage) =>{
  return (dispatch) =>{    
    dispatch(cleanArticle())
    dispatch(changeLocale(locale))    
    dispatch(getArticles(locale, nextPage))
  }
}
export default reducerFeed