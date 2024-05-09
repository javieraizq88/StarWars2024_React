import React, { useEffect, useState } from "react";
import axios from "axios";
import { H1, H2, ImgStarships, CardCharacter, ContImg, CardBody } from "../styled";
import { Link } from "react-router-dom";

const Starships = (props) => {
    // saco la data de la API y le doy un useState para poder usar el estado
    const [data, setData] = useState([]);
    // console.log(data)

    // me conecto a la API para traer las peliculas
    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
            .then(response => {
                setData(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching starships data:', error);
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
            <H1 className='c-white mb-4'>Starships</H1>
            <div className='row'>
                {data.map((starships, i) => (
                    <div className='col-lg-4 col-md-4 col-12 col-sm-6' key={i}>
                        <CardCharacter className="card">
                            <div className='row'>
                                <H2 className="card-title text-center py-2 mb-0">{starships.name}</H2>
                                <ContImg className='col-12'>
                                    <ImgStarships className="card-img ImgStarships"
                                        src={"/img/starships/" + starships.name.split(" ").join("-").toLowerCase() + ".jpg"}
                                        alt="" />
                                </ContImg>
                             
                            </div>
                        </CardCharacter>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Starships