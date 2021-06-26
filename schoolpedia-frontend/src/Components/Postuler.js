import React from 'react';
import Sidebar from "./Sidebar";
import {Link} from "react-router-dom";

function Postuler() {
    return (
        <div>
            <div className="container">
                <div className="main-body">

                    <div aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item"><Link to={{javascript:void(0)}}>User</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                        </ol>
                    </div>

                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <Sidebar/>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <p>Veuillez Entrer dans le menu annuaire universités pour choisir votre école et
                                            postuler.</p>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <p>Pour savoir plus en détails comment postuler, visitez cette pages:

                                            <Link to="/commentPostuler">Comment posttuler?</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Postuler;
