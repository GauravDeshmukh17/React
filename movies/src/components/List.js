import React, { Component } from 'react'
import {movies} from './getMovies'

export default class List extends Component {

  constructor(){
    super();
    this.state={
      movie:movies.results,
      idx:0
    }
  }


  handleIdx = (id) => {
    this.state.idx = this.state.movie.findIndex((movieObj) => {
      return movieObj.id===id;
    })
    // console.log(this.state);
    // console.log(this.state.idx);

    this.setState({
        idx:this.state.idx
    })
  }

  

  render() {
    console.log("Hi");
    let movie=movies.results;
    let movie1=movies.results[this.state.idx];
    return (
      <>

        {
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
                              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                          </div>
                      </div>
                  )
        }

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
                    <div className="card banner-card">
                      <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top banner-img" style={{width:"24vw",height:"40vh"}} onClick={()=>{this.handleIdx(movieObj.id)}} alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title banner-title">{movieObj.original_title}</h5>
                          <p className="card-text banner-text">{movieObj.overview}</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
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
