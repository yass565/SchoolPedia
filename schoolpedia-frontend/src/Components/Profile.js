import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import {Link} from 'react-router-dom';
class Profile extends Component {
    render() {
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
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Nom</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                Valdez
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Prénom</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                Kenneth
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Sexe</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                Kenneth Valdez
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Pays d'origine</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                Burkina Faso
                                            </div>
                                        </div>
                                        <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Email</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    fip@jukmuh.al
                                                </div>
                                            </div>
                                            <hr/>
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Numéro de téléphone</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        (226) 76928473
                                                    </div>
                                                </div>
                                                <hr/>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <a className="btn btn-info " target="__blank"
                                                                       href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Modifier</a>
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
}

export default Profile;
