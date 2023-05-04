import React, { Component } from 'react'
import {movies} from './getMovies';

export default class Banner extends Component {
  render(){
    let movie=movies.results[0];
    console.log(movie);
    return (
        <>
            {
                (movie == "") ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{movie.original_title}</h5>
                            <p className="card-text">{movies.results[0].overview}</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                )
            }
        </>
    )
  }
}
