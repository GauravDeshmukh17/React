import React, { Component } from 'react'
import {movies} from './getMovies'

export default class List extends Component {

  // constructor(){
  //   super();
  //   this.state={
  //     movie:movies.results,
  //     idx:0
  //   }
  // }

  // handleIdx = (id) => {
  //   this.state.idx = this.state.movie.findIndex((movieObj) => {
  //     return movieObj.id===id;
  //   })
  
  //   this.setState({
  //       idx:this.state.idx
  //   })
  // }

  

  render() {
    console.log("Hi");
    let movie=movies.results;
    // let movie1=movies.results[this.state.idx];
    return (
      <>

        {/* {
          (movie == "") ? (
              <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <div className="card banner-card">
                  <img src={`https://image.tmdb.org/t/p/original${movie1.backdrop_path}`} className="card-img-top banner-img" alt="..."/>
                  <div className="card-body">
                      <h5 className="card-title banner-title">{movie1.original_title}</h5>
                      <p className="card-text banner-text">{movie1.overview}</p>
                  </div>
              </div>
          )
        } */}

        {
          (movie.length==0) ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div> 
          ) : 
          (
            <div> 
              <h3 className='text-center'><strong>Trending</strong></h3>
              <div className="movies-list">
                {
                  movie.map((movieObj) => (
                    <div className="card movie-card"> 
                      <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top" style={{width:"22vw",height:"40vh"}} alt="..."/>                       
                      <h5 className="card-title movie-title">{movieObj.original_title}</h5>        
                      <div className='button-wrapper'>
                          <a href="#" className="btn btn-primary movie-button">Add to Favourites</a>
                      </div>
                    </div>
                  ))
                }
              </div>  
            </div>
          )
        }
      </>
    )
  }
}
