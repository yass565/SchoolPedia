import React, {Component} from 'react';
import { Email,  Lock, Person, Phone, School} from "@material-ui/icons";
import {Link} from "react-router-dom";

class Inscription extends Component {
    render() {
        return (
            <div>

                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{maxWidth: "400px"}}>
                        <h4 className="card-title mt-3 text-center">Creer un compte</h4>
                        <p className="text-center">Pour pouvoir postuler à l'inscription dans une école, veuillez creer un compte</p>
                        <form>
                            <div className="form-group input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <Person/> </span>
                                </div>
                                <input name="" className="form-control" placeholder="Nom" type="text"/>
                            </div>
                            <div className="form-group input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <Person/> </span>
                                </div>
                                <input name="" className="form-control" placeholder="Prenom" type="text"/>
                            </div>
                            <div className="form-group input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><Email/> </span>
                                </div>
                                <input name="" className="form-control" placeholder="Email" type="email"/>
                            </div>
                            <div className="form-group input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <Phone/> </span>
                                </div>
                                <select className="custom-select" style={{maxWidth: "120px"}}>
                                    <option selected="">+212</option>
                                    <option value="1">+226</option>
                                </select>
                                <input name="" className="form-control" placeholder="Téléphone" type="text"/>
                            </div>
                            <div className="form-group input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <School/> </span>
                                </div>
                                <select className="form-control">
                                    <option selected=""> Niveau actuel</option>
                                    <option>Bac</option>
                                    <option>Licence</option>
                                    <option>Master</option>
                                </select>
                            </div>
                            <div className="form-group input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <Lock/> </span>
                                </div>
                                <input className="form-control" placeholder="Mot de passe" type="password"/>
                            </div>
                            <div className="form-group input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <Lock/> </span>
                                </div>
                                <input className="form-control" placeholder="Confirmer le mot de passe" type="password"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> S'inscrire</button>
                            </div>
                            <p className="text-center">Vous avez déjà un compte? <Link to="/">Connectez-vous</Link></p>
                        </form>
                    </article>
                </div>
            </div>
        );
    }
}

export default Inscription;
