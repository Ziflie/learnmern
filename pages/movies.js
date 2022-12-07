import react, {useState, useEffect} from "react"
import { MONGO_URI } from "../database/conn";
import { MongoClient } from "mongodb";



 
 
export default function Movies({ movies }) {
    return (
        <div>
            <h1>Top 20 Movies of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>
             
                {movies.map((movie) => (
                    <ul key={movie.id}>
                    <li >
                        <h2>{movie.title}</h2>
                        <h3>{movie.metacritic}</h3>
                        <p>{movie.plot}</p>
                    </li>
                    </ul>
                ))}
           
             
        </div>
    );
}

 