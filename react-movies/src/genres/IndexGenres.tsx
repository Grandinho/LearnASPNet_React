import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { genreDTO } from './genres.model';
import { urlGenres } from '../endpoints';

export default function IndexGenres() {

    useEffect(() => {
        axios.get(urlGenres)
            .then((response: AxiosResponse<genreDTO[]>) => {
                console.log(response.data); 
            })
    }, [])

    return (
        <>
            <h3>Genres</h3>
            <Link className='btn btn-primary' to="/genres/create">Create genre</Link>
     </>
    )
}