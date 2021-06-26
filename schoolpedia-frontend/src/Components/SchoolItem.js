import React from 'react';
import {Link} from "react-router-dom";

function SchoolItem(props) {
    return (
        <div key={props.school._id}>
            {
                (props.details === false) ?
                    (
                        <div className="card m-2 border-0"><Link to={props.school.nomEtablissement}>
                            <div className="h-70 div-image">
                                <img className="card-img-top university-image p-3" src={props.school.logoUrl}
                                     alt={props.school.nomEtablissement}/>
                            </div>
                            <div className="card-footer h-30" style={{backgroundColor: "#007CBA"}}>
                                <p className="card-title university-text">{props.school.nomEtablissement}</p>
                            </div>
                        </Link>
                        </div>
                    )
                    :
                    (
                        <div>
                            <div
                                className="bg-image  d-flex justify-content-center align-items-center w-100 school-bg">
                                <h1 className="text-white">{props.school.nomEtablissement}</h1>
                            </div>
                            <div className="layout">
                                <input name="nav" type="radio" className="nav home-radio" id="home" defaultChecked/>
                                <div className="page home-page">
                                    <div className="page-contents">
                                        <div>
                                            <h3>Présentation</h3>
                                            <p>{props.school.presentation}
                                            </p>
                                        </div>
                                        <div>
                                            <h3> Reconnaissance et Accreditation </h3>
                                        </div>
                                        <div>
                                            <h3>Filières disponibles</h3>
                                            <ul>
                                                {
                                                    props.school.filieres
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <label className="nav" htmlFor="home">
                                    <span>
                                      Présentation
                                    </span>
                                </label>

                                <input name="nav" type="radio" className="about-radio" id="about"/>
                                <div className="page about-page">
                                    <div className="page-contents">
                                        <h1>Conditions d'accès</h1>
                                        <p>{props.school.admission}</p>
                                    </div>
                                </div>
                                <label className="nav" htmlFor="about">
    <span>
    Conditions d'accès
      </span>
                                </label>

                                <input name="nav" type="radio" className="contact-radio" id="contact"/>
                                <div className="page contact-page">
                                    <div className="page-contents">
                                        <h1>Postuler</h1>
                                        <table className="table">
                                            <thead className="bg-primary">
                                            <tr>
                                                <th>Filière</th>
                                                <th>Niveau d'accès</th>
                                                <th>Postuler</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                    <td><select className="form-select">
                                                        <option>Selectionner votre filière</option>
                                                        <option value="1">Architecture</option>
                                                        <option value="2">Assurance, Banque, finance</option>
                                                        <option value="3">Commerce et gestion</option>
                                                        <option value="3">Genie civil</option>
                                                        <option value="3">Electricité</option>
                                                        <option value="3">Informatique</option>
                                                        <option value="3">Mecanique</option>
                                                    </select></td>
                                                <td><select className="form-select">
                                                    <option>Niveau</option>
                                                    <option value="1">Licence</option>
                                                    <option value="2">Master</option>
                                                    <option value="3">Doctorat</option>
                                                </select></td>
                                                <td>
                                                    <button className="btn btn-primary" type="submit">Je candidate
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <label className="nav" htmlFor="contact">
                                    <span>Postuler</span>
                                </label>
                            </div>
                        </div>
                    )
            }

        </div>
    );
}

export default SchoolItem;
