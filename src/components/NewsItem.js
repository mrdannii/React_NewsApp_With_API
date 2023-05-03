import React, { Component } from "react";

export class NewsItem extends Component {
//   constructor() {
//     super();
//     //console.log("newsitems");
//   }
  render() {
    let {  title, description, aalt, imgUrl ,newsUrl} = this.props;
    return (
      <>
        <div className="card mb-3" >
          <img src={imgUrl} className="card-img-top" alt={aalt} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
       
      </>
    );
  }
}

export default NewsItem;
