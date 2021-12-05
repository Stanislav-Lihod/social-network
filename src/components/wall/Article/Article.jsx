import stl from "./article.module.css"

const Article = (props) => {
  return (
    <div className={stl.article}>
      <div className={stl.articleHeading}>
        <a href={props.url} target="_blank" rel="noreferrer" className={stl.articleHeading__title}>{props.title}</a>
        <div className={stl.articleHeading__info}>
          <div className={stl.articleHeading__infoData}><span>Data: </span>{props.data}</div>
          <div className={stl.articleHeading__infoAuthor}><span>Author: </span>{ props.name ? props.name : props.source}</div>
        </div>
      </div>
      <div className={stl.image}>
        <a href={props.url} target="_blank" rel="noreferrer"><img src={props.img} alt={props.title} title={props.title} /></a>
      </div>
      <div className={stl.description}>{props.content ? (props.description ? props.description : props.content) : props.content}</div>
      <div className={stl.readMore}><a href={props.url} target="_blank" rel="noreferrer">Read More...</a></div>
    </div>
  )
}

export default Article