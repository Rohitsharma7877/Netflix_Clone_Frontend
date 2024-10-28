import React from 'react'
import useMovieById from '../hooks/useMovieById';
import {useSelector} from "react-redux";

const VideoBackground = ({movieId,bool}) => {
    const trailerMovie = useSelector(store=>store.movie.trailerMovie);
    
    useMovieById(movieId);

    return (
        <div className='w-[vw] overflow-hidden'>
            <iframe
                className={`${bool ? "w-[100%]" : "w-screen aspect-video" } `}
                src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=Z7Xv6Dy9QQZR--z_&autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground

// https://www.youtube.com/embed/${trailerMovie?.key}?si=Z7Xv6Dy9QQZR--z_&autoplay=1&mute=1
{/*"https://www.youtube.com/embed/45k01lWIv0k?si=Z7Xv6Dy9QQZR--z_" title="YouTube video player" fra*/}