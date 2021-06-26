import React from 'react';
import Sidebar from "./Sidebar";
import docPdf from '../documents/5384a9a66ccf4.pdf';
import {Link} from "react-router-dom";

function Dossier() {
    return (
        <div>
            <div className="container">
                <div className="main-body">

                    <div aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item"><Link to={{javascript:void(0)}}>User</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">User Dossier</li>
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
                                        <p>Veuiller visualiser le pdf ci dessous pour prendre connaissance des pièces à
                                            fournir selon votre niveau actuel.

                                            Vous devez scanner tous les dossier s mentionner dans le fichier et les
                                            rassembler dans un document pdf pour le soumettre.</p>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <a href={docPdf}>Pieces à fournir.pdf</a>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Votre niveau actuel</h6>
                                        </div>
                                        <div className="col-sm-9 mb-3 text-secondary">
                                            <select className="form-select">
                                                <option selected>Niveau</option>
                                                <option value="1">Licence</option>
                                                <option value="2">Master</option>
                                                <option value="3">Doctorat</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Charger votre dossier</h6>
                                        </div>
                                        <div className="col-sm-9 mb-3 text-secondary">
                                            <input
                                                type='file'
                                                name='schoolPicture'
                                                className='form-control'
                                            />
                                        </div>
                                    </div>
                                    <hr/>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <a className="btn btn-info " target="__blank"
                                               href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Envoyer</a>
                                        </div>
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

export default Dossier;
