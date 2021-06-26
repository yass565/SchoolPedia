import React, {Component} from 'react';
import Profil_Avatar from '../images/Profil_Avatar.png';
import {Link} from "react-router-dom";
class Sidebar extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src={Profil_Avatar} alt="Admin"
                             className="rounded-circle" width="150"/>
                        <div className="mt-3">
                            <ul className="list-unstyled d-flex flex-column sidenav">
                                <Link to="/profile">Profil</Link>
                                <Link to="/dossier">Dossier de candidature</Link>
                                <Link to="/postuler">Postuler</Link>
                                <Link to="/candidatures">Mes candidatures</Link>
                                <Link to="/deconnexion">Se deconnecter</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
