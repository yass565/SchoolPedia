import React from 'react';
import FacebookIcon from "@material-ui/icons/Facebook";
import {Email, GitHub, Instagram, LinkedIn, Phone, Twitter} from "@material-ui/icons";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer className="text-white text-center text-lg-start" style={{backgroundColor: "#007CBA"}}>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase nav-logo">SchoolPedia</h5>

                            <p>
                                suivez-nous
                            </p>
                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{backgroundColor: "#3b5998"}}
                                href="#!"
                                role="button"
                            ><FacebookIcon className="fab"/></a>
                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{backgroundColor: "#55acee"}}
                                href="#!"
                                role="button"
                            ><Twitter className="fab"/></a>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{backgroundColor: "#ac2bac", borderRadius: "5px"}}
                                href="#!"
                                role="button"
                            ><Instagram className="fab"/></a>


                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{backgroundColor: "#0082ca"}}
                                href="#!"
                                role="button"
                            ><LinkedIn className="fab"/></a>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{backgroundColor: "#333333"}}
                                href="#!"
                                role="button"
                            ><GitHub className="fab"/></a>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h6 className="text-uppercase mb-0">
                                Contact
                            </h6>
                            <p>
                                <Email className="fas"/>
                                info@example.com
                            </p>
                            <p><Phone className="fas"/> + 01 234 567 88</p>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-0">Liens utiles</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/" className="text-white">Link 1</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white">Link 2</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white">Link 3</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white">Link 4</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2021 Copyright:
                    <Link to="/" className="text-white">schoolpedia.com</Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
