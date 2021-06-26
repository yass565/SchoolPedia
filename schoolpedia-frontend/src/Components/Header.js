import React from 'react';
import {Link} from "react-router-dom";
import {Search} from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";
import {AccountCircle} from "@material-ui/icons";



function Header() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <header>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-lg">
                        <ul className="navbar-nav d-flex  flex-row">
                            <li className="nav-item">
                                <Link to="/Inscription" className="btn btn-outline-primary" role="button">S'inscrire</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="btn btn-primary" role="button" onClick={handleOpen}>Se connecter</Link>
                            </li>
                        </ul>
                        <form className="d-flex input-group w-auto">
                            <input
                                type="search"
                                className="form-control rounded"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                            />
                            <span className="input-group-text border-0" id="search-addon">
        <Search/>
      </span>
                        </form>
                    </div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                            <form className=" w-25 bg-white p-2 rounded-3 m-5">
                                <h3 className="text-cente">Sign In</h3>

                                <div className="form-group mb-3">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" />
                                </div>

                                <div className="form-group mb-3">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                <p className="forgot-password text-right">
                                    Forgot <Link to="/">password?</Link>
                                </p>
                            </form>
                    </Modal>
                </nav>
                <nav
                    className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light order-bottom box-shadow navbar-static-top mb-0">
                    <div className="container">
                        <Link to="/" className="navbar-brand text-white nav-logo">SchoolPedia</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target=".navbar-collapse"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1 navbar-right">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-white">Accueil</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/apropos" className="nav-link text-white">A propos de nous</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/schools" className="nav-link text-white">Annuaire universités</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Cooperation" className="nav-link text-white">Coopération</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/commentPostuler" className="nav-link text-white">Comment ça marche?</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link text-white">Contact</Link>
                                </li>
                            </ul>
                            <div>
                                <Link to="/"><AccountCircle style={{color: "white", fontSize: "x-large"}}/></Link>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
