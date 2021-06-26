import React from 'react';
import Sidebar from "./Sidebar";
import {Link} from "react-router-dom";

function MesCandidatures() {
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
                        <div className="col-md-3 mb-3">
                            <Sidebar/>
                        </div>
                        <div className="col-md-9">
                            <table className="table">
                                <thead style={{backgroundColor: "#007CBA", color: "white"}}>
                                <tr>
                                    <th scope="col">Ecoles</th>
                                    <th scope="col">Filières</th>
                                    <th scope="col">Niveau</th>
                                    <th scope="col">Réponse</th>
                                    <th scope="col">Motifs</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">EMSI</th>
                                    <td>Ingenierie financiere et audit</td>
                                    <td>Premiere année</td>
                                    <td>Accepté</td>
                                    <td>Félicitations</td>
                                    <td>
                                        <button className="btn btn-primary">Certificats d'admission</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">EMI</th>
                                    <td>Génie industriel</td>
                                    <td>Premiere année</td>
                                    <td>refusé</td>
                                    <td>Dossier incomplet</td>
                                    <td>
                                        <button className=" btn btn-primary">Details</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">ISCAE</th>
                                    <td>Audit</td>
                                    <td>Premiere année</td>
                                    <td>Accepté</td>
                                    <td>En cours ...</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MesCandidatures;
