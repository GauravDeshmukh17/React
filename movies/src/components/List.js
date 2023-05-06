import React, { Component } from 'react'
import {movies} from './getMovies'

export default class List extends Component {
  render() {
    let movie=movies.results;
    return (
      <>
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
                      <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top banner-img" style={{width:"24vw",height:"40vh"}} alt="..."/>
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
