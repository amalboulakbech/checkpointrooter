
import './App.css';
import React from 'react'
import Modal from 'react-bootstrap/Modal';

import {useEffect,useState} from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom'
import ReactStars from 'react-stars'
import MovieList from './components/MovieList/MovieList';
import Moviedetail from './components/Moviedetail/Moviedetail';


function App() {
  const [movies, setMovies] = useState([
    {
      id: "1",
      title: "Twilight",
      rating: 3,
      posterUrl:
        "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2009211/3886196/apiovo70k__89519.1625621230.jpg?c=2",
      Trailler: "https://youtu.be/4ezHyDEEPOU",
      description:
        "Bella tombe follement amoureuse de l'un d'eux, Edward Cullen. Une relation sensuelle et dangereuse commence alors entre les deux jeunes gens : lorsque Isabella comprend que Edward est un vampire, il est déjà trop tard.",
    },
    {
      id: "2",
      title: "Bad Boys For Life",
      rating: 4,
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      Trailler: "https://youtu.be/R228yPrwqTo",
      description:
        "Marcus Burnett est maintenant inspecteur de police. Mike Lowery est, quant à lui, en pleine crise de la quarantaine. Ils s'unissent à nouveau lorsqu'un mercenaire albanais, dont ils ont tué le frère, leur promet une importante prime.",
    },
    {
      id: "3",
      title: " Mrs and Mrs Smith",
      rating: 5,
      posterUrl:
        "https://fr.web.img2.acsta.net/medias/nmedia/18/35/50/84/18432356.jpg",
      Trailler: "https://youtu.be/CZ0B22z22pI",
      description:
        "Mr et Mrs Smith forment un couple tout ce qu'il y a de plus banal. Pourtant, Mr Smith est exécuteur pour une organisation secrète et Mrs Smith, tueuse à gage vendant ses services aux plus offrants. Ignorant chacun les activités de leur cher et tendre, ils vont pourtant se retrouver en compétition sur le même contrat : s'éliminer l'un l'autre.",
    },
    {
      id: "4",
      title: "Lara Croft: tomb raider",
      rating: 5,
      posterUrl: "https://flxt.tmsimg.com/assets/p27735_p_v8_aj.jpg",
      Trailler: "https://youtu.be/VlCylyAKpGA",
      description:
        " Lara Croft a hérité de son père archéologue de nombreux trésors parmi lesquels une mystérieuse horloge magique. Des années plus tôt, celui-ci lui dévoila l'existence d'une organisation secrète, les Illuminati, qui s'était lancée à la recherche d'une horloge dont la clé ouvrait les portes du Temps et de l'Espace.",
    },
    {
      id: "5",
      title: "Aquaman ",
      rating: 2,
      posterUrl:
        "https://m.media-amazon.com/images/I/81m6Y9w6WGL._AC_SY606_.jpg",
      Trailler: "https://youtu.be/2wcj6SrX4zw",
      description:
        "Aquaman est un super-héros appartenant à l'univers de DC Comics, et le héros de la série du même nom. Il a été créé par Paul Norris et Mort Weisinger dans More Fun Comics nᵒ 73 publié en 1941.",
    },

    {
      id: "6",
      title: "3 metre au dessus du ciel ",
      rating: 5,
      posterUrl:
        "https://i.skyrock.net/4488/91704488/pics/3263914992_1_3_ToWMjL6K.jpg",
      Trailler: "https://youtu.be/qjB18FjRFak",
      description:
        "À Barcelone, deux jeunes gens issus de mondes opposés se rencontrent et tombent follement amoureux l'un de l'autre. Hugo est un beau jeune homme troublé, rebelle et impulsif. Constamment à la recherche d'adrénaline, il participe à des combats de rue et des courses de moto illégales.",
    },
    {
      id: "7",
      title: "Harry Potter",
      rating: 5,
      posterUrl:
        "https://i-mom.unimedias.fr/2020/09/16/harry-potter-a-l-ecole-des-sorciers.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=max&h=453&w=806",
      Trailler: "https://youtu.be/VyHV0BRtdxo",
      description:
        " L'histoire, se situant dans les années 1903 raconte la jeunesse de Harry Potter, sorcier orphelin élevé sans affection ni considération par la seule famille vivante qui lui reste : son oncle et sa tante moldus (sans pouvoirs magiques). Le garçon découvre son identité de sorcier, son héritage tragique et la responsabilité qui lui revient..",
    },

    {
      id: "8",
      title: "Avatar",
      rating: 4,
      posterUrl:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/208A0E5EB8E1ADCEE6DEE4149CFC1428BDAABFCE5A006D2F240ADD8B87F239A5/scale?width=1200&aspectRatio=1.78&format=jpeg",
      Trailler: "https://youtu.be/6ziBFh3V1aM",
      description:
        "Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre. ",
    },
    {
      id: "9",
      title: "Maleficent",
      rating: 2,
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ8SqhyI2HxEyoSV_EQZ6QTFazSIbdT_rPg&usqp=CAU",
      Trailler: "https://youtu.be/n0OFH4xpPr4",
      description:
        "Maléfique grandit en menant une vie idyllique, jusqu'à ce qu'une armée d'invasion menace l'harmonie. Lorsque Maléfique devient la protectrice du territoire, elle se retrouve victime d'une trahison impitoyable.",
    },
  ]);

const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [newMovie, setNewMovie]=useState({
id:Math.round(Math.random),
title:"",
rating :0,
posterUrl:"",
description:"",
})
const handelChange=(e)=> {
setNewMovie({...newMovie,[e.target.name]:e.target.value}  )
}
const handleSave=(e)=>{
  setMovies([...movies,newMovie])
alert ("movie Aded")
handleClose()
  }

  const [titleFilter, setTitleFilter ] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [filtreMovies, setFiltreMovies ] = useState(movies);



  const handeltitlefilter = (e) => {
    setTitleFilter(e.target.value);
  }
 
  const handelRatingFilter = (newrating) => {
    setRatingFilter(newrating);
}

useEffect(()=>{
  setFiltreMovies(
  movies.filter( (movie)=>{return (movie.title.trim().toLowerCase().includes(titleFilter) && movie.rating >= ratingFilter)}
  ))}
,[movies,titleFilter,ratingFilter])
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ fontFamily: "cursive", color: "red" }}>
          <h1>Ciné Culb</h1>
        </Navbar.Brand>

        <Container style={{ marginRight: "10px" }}>
          <input
            type="text"
            onChange={handeltitlefilter}
            placeholder="  Search ..."
            className="searchInput"
          ></input>
          <ReactStars
            count={5}
            size={28}
            activeColor="#ffd700"
            onChange={handelRatingFilter}
          />
          <Button variant="outline-info" onClick={handleShow}>
            Add New Movie
          </Button>
        </Container>
      </Navbar>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add new Movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handelChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="poster"
            name="posterUrl"
            onChange={handelChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={handelChange}
          ></input>
          <br></br>
          <input
            type="number"
            placeholder="Rating"
            name="rating"
            onChange={handelChange}
          ></input>
          <br></br>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleSave}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Routes>
        <Route exact path="/" element={<MovieList movies={filtreMovies} />} />
        <Route
          path="/movie/:id"
          element={<Moviedetail movies={filtreMovies} />}
        />
      </Routes>
    </div>
  );
}
export default App;
