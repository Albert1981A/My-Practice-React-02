import React, { useEffect, useState } from "react";
import Demo11MovieChild from "./Demo11_MovieChild";
import axios from 'axios';


function Demo11MoviesParent() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            for (let i = 1; i <= 10; i++) {
                const resp = await axios.get("https://api.tvmaze.com/shows/" + i);
                // console.log(resp.data);
                setMovies((movies) => [...movies, {id: resp.data.id, name: resp.data.name, image: resp.data.image.original}]);
            }
        }
        fetchData();
    }, []);


    return (
        <div>
            <h1>Demo11 Movies Parent Header</h1>

            {movies &&
                movies.map(( item ) => {
                    return <Demo11MovieChild key={item.id} moviesDetails={item} />
                })
            }

            <h1>Demo11 Movies Parent Footer</h1>
        </div>
    );
}
export default Demo11MoviesParent;