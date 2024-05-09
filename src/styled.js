import styled from "styled-components";

const sizes = {
    mobile: '768px',
    mobileL: '991px',
    laptop: '1200px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const devices = {
    mobile: `(max-width: ${sizes.mobile})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
};


// +++++++++++  estilos generales +++++++++++++

export const H1 = styled.h1`
@media ${devices.laptopL} {
    font-size: 2rem;
    margin-top: 2rem
}
@media ${devices.laptop} {
    font-size: 3rem;
    margin-top: 2rem
}
@media ${devices.mobileL} {
    font-size: 3rem;
    margin-top: 2rem
}
@media ${devices.mobile} {
    font-size: 3rem;
    margin-top: 2rem
}
`;

export const H2 = styled.h2`
@media ${devices.laptopL} {
    font-size: 1.75rem;
}
@media ${devices.laptop} {
    font-size: 1.25rem;
}
@media ${devices.mobileL} {
    font-size: 1.25rem;
}
@media ${devices.mobile} {
    font-size: 1.25rem;
}
`;

export const H4 = styled.h4`

    font-size: 1.2rem;

`;

//header 
export const SearchIcon = styled.i`
    font-size: 1.2rem;
    width: 20px;
    height: 20px;
    background: url(https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Nav_Search-74ab820c48e2.svg) no-repeat 15px 15px;
    background-size: 20px;
    background-position: 50%;
    margin: 0 0.25rem 0 ;
    color: white
`;
export const LoginIcon = styled.i`
    font-size: 1.2rem;
    width: 20px;
    height: 20px;
    background: url(https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg) no-repeat 15px 15px;
    background-size: 20px;
    background-position: 50%;
    margin: 0 0.25rem 0 ;
    `;


// character

export const CardCharacter = styled.div`
margin-bottom: 1rem;
&:hover{
    background: linear-gradient(173deg, rgb(10, 10, 10), rgb(122, 122, 122), rgb(224, 224, 224)) !important;
    color:white;
    border-radius:  0.6rem
}
`;

export const ImgCharacter = styled.img`
@media ${devices.laptopL} {
    height: 15rem;
}
@media ${devices.laptop} {
    height: 11rem;
}
@media ${devices.mobileL} {
    height: 13rem;
}
@media ${devices.mobile} {
    height: 11rem;
}
`;

export const CardBody = styled.div`
@media ${devices.mobile} {
    display: grid;
    margin-right: 1rem;
    padding-left:0;
}

@media ${devices.laptop} {
    display: grid;
    padding: 1rem 1.5rem 1rem 0;
}
`;

// character detail

export const ImgCharacterDetail = styled.img`
@media ${devices.laptopL} {
    height: auto;
}
@media ${devices.laptop} {
    height: auto;
}
@media ${devices.mobileL} {
    height: auto;
}
@media ${devices.mobile} {
    height: auto;
}
`;

export const CharacterInfo = styled.div`
    background-color: #1D1E1F;
`;

export const ImgFilms = styled.img`
    width: inherit;
    height: 26rem;
`;

export const ContImg = styled.div`
@media ${devices.laptop} {
    display:flex;
    justify-content:space-center;
}
`;


// films
export const ImgEpisodeDetail = styled.img`
width: -webkit-fill-available;
height: auto;
`;


// starships
export const ImgStarships = styled.img`
width: -webkit-fill-available;
height: 11rem;
`; 




// footer

export const ImgCarousel = styled.img`
    width: auto;
    height: 25rem;
`;
export const CarouselText = styled.button`
    color: black;
    background-color: white;
    padding:0.5rem 1rem;
    border-radius: 2rem
    
`;
export const CarouselTextDisabled = styled.button`
    color: white;
    background-color: #9d9d9d;
    padding:0.5rem 1rem;
    border-radius: 2rem;
    
`;
