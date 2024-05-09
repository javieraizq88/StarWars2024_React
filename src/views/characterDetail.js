// CharacterDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ContImg, CharacterInfo, ImgCharacterDetail } from '../styled';
import Footer from '../components/footer';

function CharacterDetail() {
  // uso el id de cada character para identificarlo
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  // console.log(character)
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}/`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
      });
  }, [id]);


  //  loeading mientras se carga la vista con la info de la API
  if (!character) {
    return (
      <div className="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div className="spinner-border ms-auto" aria-hidden="true"></div>
      </div>
    );
  }

  return (
    <div className='characterDetail-container'>
      <div className='c-white container mt-5'>
        <div className='d-md-flex d-block'>
          <ContImg className='col-md-6 col-12'>
            <ImgCharacterDetail className="card-img"
              src={"/img/people/" + character.name.split(" ").join("-").toLowerCase() + ".jpg"}
              alt="" />
          </ContImg>
          <CharacterInfo className='w-50 ps-4 d-grid py-4' >
            <div className='ai-b'>
              <h5 className="mb-0">I am</h5>
              <p className="ms-2 c-yellow mb-0"> {character.name}</p>
            </div>
            <div className='ai-b'>
              <h5 className="mb-0">Height</h5>
              <p className="ms-2 c-yellow mb-0">{character.height}</p>
            </div>
            <div className='ai-b'>
              <h5 className="mb-0">My gender is</h5>
              <p className="ms-2 c-yellow mb-0"> {character.gender}</p>
            </div>
            <div className='ai-b'>
              <h5 className="mb-0">Birth year</h5>
              <p className="ms-2 c-yellow mb-0"> {character.birth_year}</p>
            </div>
            <div className='ai-b'>
              <h5 className="mb-0">Eyes colors</h5>
              <p className="ms-2 c-yellow mb-0">{character.eye_color}</p>
            </div>
            <div className='ai-b'>
              <h5 className="mb-0">Hair color</h5>
              <p className="ms-2 c-yellow mb-0"> {character.hair_color}</p>
            </div>
            <div className='ai-b'>
              <h5 className="mb-0">Skin color</h5>
              <p className="ms-2 c-yellow mb-0"> {character.skin_color}</p>
            </div>
          </CharacterInfo>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default CharacterDetail;
