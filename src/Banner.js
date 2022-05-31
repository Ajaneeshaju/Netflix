import React, { useState, useEffect } from 'react'
import './Banner.css'
import request from './request'
import instance from './instance'

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const result = await instance.get(request.fetchNetflixOriginals)
            setMovie(
                result.data.results[
                Math.floor(Math.random() * result.data.results.length - 1)
                ]
            )
        }
        fetchData()
    }, [])
    console.log("my movie is", movie)

    function truncate(str ,n){
        return str?.length > n ? str.substr(0 , n-1) + "...." :str;
    }

    return (
        <header
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
            )`,
                backgroundPosition: 'center center'
            }}>
            <div className='bannner_contents'>
                <h1 className='banner_title'>
                    {movie.title || movie.name || movie.orginal_name}
                </h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>

                    <button className='banner_button'>More Info</button>

                </div>
                <h1 className="bannner_description">
                    {truncate(movie.overview,150)}

                </h1>

                
            </div>


            <div className="banner_fade"></div>
        </header>
    )
}

export default Banner