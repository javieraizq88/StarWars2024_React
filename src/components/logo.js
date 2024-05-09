import React from "react";
import { CarouselTextDisabled, LoginIcon, SearchIcon } from "../styled";
import { Link } from "react-router-dom";



const LogoSW = () => {

    return (
        <section className="header">
            <div className="headerContainer py-4">
                <img className='logo mx-5 '
                    src={"https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"}
                    alt=''
                    width={220} />
                <div className="d-none d-md-flex fd-c py-2 mx-4">
                    <h2 className="c-white">Cooming soon...</h2>
                    <div className="d-flex">
                        <CarouselTextDisabled disabled className="ai-c d-flex me-2" type="button">
                            <SearchIcon />
                            <p className="c-white mb-0">Search</p>
                        </CarouselTextDisabled>

                        <CarouselTextDisabled disabled className="ai-c d-flex" type="button">
                            <LoginIcon />
                            <p className="c-white mb-0">Log In</p>
                        </CarouselTextDisabled>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default LogoSW