import React from 'react'
import { useParams } from 'react-router'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Moviedetail = ({ movies }) => {
  
    let { id } = useParams();
     
    let selectedMovies = movies.filter((movie) => movie.id === id)
  
  return (
    <div>
      <Card.Title>
        <iframe
          width="723"
          height="409"
          src={selectedMovies[0].Trailler}
          title={selectedMovies[0].title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Card.Title>
      <Link to="/">
        <Button variant="light">Home</Button>
      </Link>
    </div>
  );
}

export default Moviedetail