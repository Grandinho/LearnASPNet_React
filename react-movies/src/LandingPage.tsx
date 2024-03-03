import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList"

export default function LandingPage() {
    const [movies, setMovies] = useState<landingPageDTO>();

    useEffect(() => {
      const timerId = setTimeout(() => {
        setMovies({
          inTheaters: [
            {
              id: 1,
              title: "Spider-man",
              poster:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Spider-Man2.jpg/220px-Spider-Man2.jpg",
            },
            {
              id: 2,
              title: "Spider-man",
              poster:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Spider-Man2.jpg/220px-Spider-Man2.jpg",
            },
            {
              id: 3,
              title: "Spider-man",
              poster:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Spider-Man2.jpg/220px-Spider-Man2.jpg",
            },
            {
              id: 4,
              title: "Spider-man",
              poster:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Spider-Man2.jpg/220px-Spider-Man2.jpg",
            },
          ],
          upcomingReleases: [
            {
              id: 6,
              title: "Test",
              poster:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Spider-Man2.jpg/220px-Spider-Man2.jpg",
            },
          ],
        });
      }, 1000);
  
      return () => clearTimeout(timerId);
    });
    
    return (
        <>
        <h3>In Theaters</h3>
        <MoviesList movies={movies?.inTheaters} />

        <h3>Upcoming</h3>
        <MoviesList movies={movies?.upcomingReleases} />
        </>
    )
}