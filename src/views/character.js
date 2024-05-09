// SwapiData.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ImgCharacter, ContImg, CardBody, CardCharacter, H2, H1 } from "../styled";

const Character = () => {
  // saco la data de la API y le doy un useState para poder usar el estado
  const [data, setData] = useState([]);

  console.log(data)

  // me conecto a la API
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setData(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  // const img = data.character.name.split(" ").join("-").toLowerCase() + ".jpg";

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
    <div className='character-container container'>
      <H1 className='c-white mb-4'>Characters</H1>
      <div className='row'>
        {data.map((character, i) => (
          <div className='col-lg-3 col-md-4 col-12 col-sm-6' key={i}>
            <CardCharacter className="card CardCharacter">
              <div className='row'>
                <H2 className="card-title text-center py-2 mb-0">{character.name}</H2>
                <ContImg className='col-md-12 col-12'>
                  <ImgCharacter className="card-img imgCharacter"
                    src={"/img/people/" + character.name.split(" ").join("-").toLowerCase() + ".jpg"}
                    alt="" />
                </ContImg>
                <CardBody className="card-body col-12 mx-2">
                  <Link className='jc-fe link' to={`/characters/${i + 1}`}>More info</Link>
                </CardBody>
              </div>
            </CardCharacter>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Character;
