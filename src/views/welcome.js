import React from "react";
import Footer from "../components/footer";
import { H1 } from "../styled";

const Welcome = () => {
    return (
        <>
            <section className="trailers ">
                <div>
                    <img class="img-absolute" alt="" tabindex="0"
                        src="https://lumiere-a.akamaihd.net/v1/images/the-acolyte-logotitle-ctapre-800_b66ce94b.png?region=0,0,800,367" />
                    <img className="img-fondo" alt="" tabindex="0"
                        src="https://lumiere-a.akamaihd.net/v1/images/the-acolyte-tentpole-desktop-b_13efcaeb.jpeg?region=0,0,1600,600&amp;width=1200" />
                    <div className="text-img-welcome">
                        <h3 className="c-white ">Two-episode premiere streaming June 4, only on Disney+.</h3>
                        <button data-bs-toggle="modal" data-bs-target="#exploreModal" className="button yellow" role="button" type="button">
                            Explore
                        </button>

                        {/* modal */}
                        <div class="modal fade" id="exploreModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content bg-dark">
                                    <div class="modal-body">
                                        <h1 class="c-white mb-4">The Acolyte</h1>
                                        <div className="d-flex">
                                            <div className="w-50">
                                                <img tabindex="0" alt="" width="100%" src="https://lumiere-a.akamaihd.net/v1/images/the-acolyte-poster-c-pre-catalog_a1b364e5.jpeg" />
                                            </div>
                                            <div className="w-50 ta-l ps-4">
                                                <p className="c-white">Rating: TV-14</p>
                                                <p className="c-white">Release Date: June 4, 2024</p>
                                                <p className="c-white">Genre: Mystery, Science Fiction</p>
                                                <p className="c-white">An investigation into a shocking crime spree pits a respected Jedi Master against a dangerous warrior from his past. As more clues emerge, they travel down a dark path where sinister forces reveal all is not what it seems…</p>
                                            </div>
                                        </div>
                                        <img src="https://lumiere-a.akamaihd.net/v1/images/3-the-high-republic_0292a50f.png" alt="The High Republic symbol" />
                                        <p className="c-white">Era: The High Republic</p>
                                        <div className="jc-fe">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="">
                    <div className="">
                        <div className="card" >
                            <a href=" https://youtu.be/6tzur6JrUEA" data-core-id="617958f636a6cb5a5e662bdf"
                                class=""
                                aria-label="Official Trailer | The Acolyte 1 of 2 - Play video" data-youtube-id="6tzur6JrUEA"
                                data-title="Official Trailer | The Acolyte" tabindex="0">
                                <img class="img-fluid" alt="Official Trailer | The Acolyte thumbnail"
                                    data-src="https://lumiere-a.akamaihd.net/v1/images/image_88b6e151.jpeg?region=0%2C0%2C1920%2C1080" d
                                    ata-legacy="true"
                                    src="https://lumiere-a.akamaihd.net/v1/images/image_88b6e151.jpeg?region=0%2C0%2C1920%2C1080" />
                            </a>
                        </div>
                    </div>
                </div>


            </section>

            <Footer />


        </>
    )
}

export default Welcome