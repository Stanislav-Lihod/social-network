import Article from "./Article/Article";
import stl from "./wall.module.css"
const Wall = (props) =>{
  return <div className={stl.container}>
      {props.articles.map(article => <Article name={article.author} data={article.publishedAt} title={article.title} source={article.source.name}
      img={article.urlToImage} content={article.content} description={article.description} url={article.url}/>)}
    </div>
}

export default Wall