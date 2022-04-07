import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    
    constructor(){
        super();
        console.log("Hello I am constructor from news comonest")
        this.state = {
           articles : [] ,
           loading : false,
           page : 1

        }
    }
   async componentDidMount(){
        // console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=602ca039adc7400e9bde3a41b586b10e&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(data);
        this.setState({
            articles: parsedData.articles, totalArticles:parsedData.totalResults})
            
    }
   handlePrevClick = async ()=>{
        console.log("previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=602ca039adc7400e9bde3a41b586b10e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(data);
        // this.setState({
        //     articles: parsedData.articles
        // })
        
        this.setState({
            page: this.state.page - 1,
            articles : parsedData.articles
        })
        

    }
    handleNextClick = async ()=>{
        console.log("Next");
        if(this.state.page + 1 >Math.ceil(this.state.page +1 > this.state.totalResults/this.props.pageSize)){

        }
        else{
            this.setState({
                page: this.state.page + 1,
                
            })
                let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=602ca039adc7400e9bde3a41b586b10e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
                let data = await fetch(url);
                let parsedData = await data.json();
                // console.log(data);
                // this.setState({
                //     articles: parsedData.articles
                // })
                
                
    }
    }
   
  render() {
    return (
      <div className="container my-3">
          <h1 className="text-center">NewsMonkey - Top HeadLines</h1>
          
      
       <div className="row">
       {this.state.articles.map((element)=>{
           return <div className="col-md-4" key ={element.url}>
           <NewsItem title={element.title?element.title:""}  description={element.description?element.description:""} imageUrl= {element.urlToImage} newsUrl = {element.url}/>
      </div> 
    })}</div>
    <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1}   type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
    <button rel="noreferrer"disabled = {Math.ceil(this.state.page + 1 > this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
    </div>
    </div>
    );
  }
}

export default News;
