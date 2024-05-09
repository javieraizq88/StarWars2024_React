import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ContImg, CharacterInfo, ImgEpisodeDetail } from "../styled";
import Footer from "../components/footer";


const Episode = (props) => {
    // uso el id de cada character para identificarlo
    const { episode_id } = useParams();
    const [films, setFilms] = useState(null);
    console.log(films)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${episode_id}/`)
            .then(response => {
                setFilms(response.data);
            })
            .catch(error => {
                console.error('Error fetching Episode data:', error);
            });
    }, [episode_id]);

    // dejo un loeading mientras se carga la vista con la info de la API
    if (!films) {
        return (
            <div className="d-flex align-items-center">
                <strong role="status">Loading...</strong>
                <div className="spinner-border ms-auto" aria-hidden="true"></div>
            </div>
        );
    }

    return (
        <div className='episodeDetail-container'>
            <div className='c-white container mt-5'>
                <div className='d-md-flex d-block'>
                    <ContImg className='col-md-6 col-12'>
                        <ImgEpisodeDetail className="card-img"
                            src={"/img/films/" + films.title.split(" ").join("-").toLowerCase() + ".jpg"}
                            alt="" />
                    </ContImg>
                    <CharacterInfo className='col-md-6 col-12 ps-4 d-block py-4 CharacterInfo'>
                        <h2>Episode {films.episode_id}: {films.title} </h2>
                        <h5 className="mb-0">Created</h5>
                        <p className="ms-4 c-yellow"> {films.created}</p>
                        <h5 className="mb-0">Director</h5>
                        <p className="ms-4 c-yellow">{films.director}</p>
                        <h5 className="mb-0">Edited</h5>
                        <p className="ms-4 c-yellow"> {films.edited}</p>
                        <h5 className="mb-0">Opening crawl</h5>
                        <p className="ms-4 c-yellow"> {films.opening_crawl}</p>
                        <h5 className="mb-0">Producer</h5>
                        <p className="ms-4 c-yellow">{films.producer}</p>
                        <h5 className="mb-0">Release date</h5>
                        <p className="ms-4 c-yellow"> {films.release_date}</p>
                    </CharacterInfo>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default Episode