import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { CardCharacter, ContImg, H1, H2, H4, ImgFilms } from "../styled";
import { CardBody } from "react-bootstrap";

const Films = (props) => {
    // saco la data de la API y le doy un useState para poder usar el estado
    const [data, setData] = useState([]);
    // console.log(data)
   
    // me conecto a la API para traer las peliculas
    useEffect(() => {
        axios.get('https://swapi.dev/api/films/')
            .then(response => {
                setData(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching Films data:', error);
            });
    }, []);

  //  loeading mientras se carga la vista con la info de la API
  if (!data) {
    return (
      <div className="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div className="spinner-border ms-auto" aria-hidden="true"></div>
      </div>
    );
  }

    return (
        <div className='films-container container'>
            <H1 className='c-white'>Films </H1>
            <div className='row'>
                {data.map((films, i) => (
                    <div className='col-lg-4 col-md-4 col-12 col-sm-6' key={i}>
                        <CardCharacter className="card CardCharacter">
                            <div className="row">
                            <H2 className="card-title text-center pt-2 mb-0">{films.title}</H2>
                            <H4 className="card-title text-center pb-2 mb-0">Episode {films.episode_id}</H4>
                            <ContImg className='col-md-12 col-12'>
                                <ImgFilms className="img-fluid card-img"
                                    src={"/img/films/" + films.title.split(" ").join("-").toLowerCase() + ".jpg"}
                                    alt="" />
                                </ContImg>
                                <CardBody className="card-body jc-fe col-12 mx-2">
                                    <Link className="text--small" to={`/films/${i + 1}`}>Lear more</Link>
                                </CardBody>
                            </div>
                        </CardCharacter>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Films