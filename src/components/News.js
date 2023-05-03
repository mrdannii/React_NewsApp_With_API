import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  
  constructor() {
    super();
    // console.log("news");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      pageSize:6,
    };
  }

  async componentDidMount() {
  //  alert(this.state.page);
  this.setState({loading:true});
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    //console.log(parseddata);
    this.setState({ articles: parseddata.articles, totalResults:parseddata.totalResults,loading:false
    });
  }
  
  handlePrev=async ()=>{
  //  alert(this.state.page);
  this.setState({loading:true});
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.state.pageSize}`;
  let data = await fetch(url);
  let parseddata = await data.json();
  this.setState(
    {
      loading:false,
      articles: parseddata.articles,
      page:this.state.page-1
    });
  }
  handleNext= async ()=>{
   // alert(this.state.page);
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize)){
      alert("End of Pages")
    }
    else{
      this.setState({loading:true});
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    //console.log(parseddata);
    this.setState(
      {
        loading:false,
        articles: parseddata.articles,
        page:this.state.page+1
      });
    }
  }

  render() {
    return (
      <div className="container mt-3 ">
        <div className="text-center mb-3"> <h2>{this.props.htag}</h2> </div>
          {this.state.loading && (<Spinner/>)}
        <div className="row">
          {!this.state.loading &&  this.state.articles.map((elemnt) => {
            return (
              <div className="col-md-4" key={elemnt.url}>
                <NewsItem
                  title={elemnt.title ? elemnt.title.slice(0, 45) : ""}
                  description={
                    elemnt.description ? elemnt.description.slice(0, 88) : ""
                  }
                  imgUrl={elemnt.urlToImage}
                  aalt="source not found"
                  newsUrl={elemnt.url}
                />
              </div>
            );
          })}
          <div className="d-flex justify-content-evenly mb-3">
            <button disabled={this.state.page<=1} type="button" className="btn btn-outline-info btn-sm" onClick={this.handlePrev}>
              &larr; Previous
            </button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize)} type="button" className="btn btn-outline-info btn-sm" onClick={this.handleNext}>
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
