import React from 'react'
import fallbackImage from "./articleshow.jpg";

const NewsItem=(props)=> {
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display:"flex",justifyContent:'flex-end',position:'absolute',right:"0"}}>
        <span className="badge rounded-pill bg-danger">{source}
        </span>
        </div>
        <img src={imageUrl?imageUrl:"https://img.etimg.com/thumb/msid-121390083,width-1200,height-630,imgsize-21848,overlay-economictimes/articleshow.jpg"} className="card-img-top" alt="..."  onError={(e) => {
    e.target.onerror = null; 
    e.target.src = fallbackImage}}/>
        <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger ">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl}  rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }

export default NewsItem
