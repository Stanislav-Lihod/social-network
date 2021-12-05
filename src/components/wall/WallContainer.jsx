import React from 'react'
import { connect } from "react-redux";
import { getArticles, changeLocaleThunk, setNextPage } from '../../redux/reducerFeed';
import Preloader from '../common/preloader/Preloader';
import Wall from './Wall';
import stl from "./wall.module.css"


class WallContainerClass extends React.Component {
  componentDidMount() {
    if (this.props.articles.length === 0) this.props.getArticles(this.props.locale, this.props.nextPage)
  }

  getNextPage = (nextPage) => {
    this.props.setNextPage()
    this.props.getArticles(this.props.locale, nextPage + 1)}
  changeLocale = (locale) => this.props.changeLocaleThunk(locale, 1)

  render() {
    return <>
      {this.props.isLoader ? <Preloader /> : null}
      <div className={stl.local}>{this.props.locale === 'ru' ? "Язык:" : 'Language:'} 
      <span onClick={() => this.changeLocale('ru')}>RU</span><span onClick={() => this.changeLocale('en')}>EN</span></div>
      <Wall {...this.props} />
      {this.props.totalCount > this.props.articles.length &&
        <button onClick={() => this.getNextPage(this.props.nextPage)} className={stl.nextPage}>Get more articles</button>}
    </>
  }
}

const mapStateToProps = (state) => ({
  articles: state.feed.articles,
  isLoader: state.feed.isLoader,
  nextPage: state.feed.nextPage,
  totalCount: state.feed.totalCount,
  locale: state.feed.locale
})

const WallContainer = connect(mapStateToProps, { getArticles, changeLocaleThunk, setNextPage })(WallContainerClass)

export default WallContainer