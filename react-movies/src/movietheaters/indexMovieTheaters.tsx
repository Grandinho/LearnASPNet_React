import React from 'react';
import { Link } from 'react-router-dom';

export default function IndexMovieTheaters() {
    return (
        <>
            <h3>MovieTheaters</h3>
            <Link className='btn btn-primary' to='/movietheaters/create'>Create MovieTheaters</Link>
     </>
    )
}