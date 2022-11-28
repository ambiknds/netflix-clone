import './Row.css'
import Card from '../card/Card'
import { useState ,useEffect } from 'react'
import axios from 'axios'

export default function Row(props) {
    const [movies, setMovies] = useState([]);

    //fo get the movies from api
    const fetchMovies = async () => {
        const response = await axios.get(props.url)
        setMovies(response.data.results);
        // console.log(response)
    }

    useEffect(() => {
        fetchMovies();
    },[]);

    return (
        <div className='row-wrapper'>
            <h3 className='row-title'>{props.title}</h3>
            <div className='row-card'>
                {
                    movies.map((el) => {
                        {/* console.log(el) */}
                        return <Card title={el.title} poster={el.backdrop_path} id={el.id}/>
                    })
                }
            </div>
        </div>
    )
}
