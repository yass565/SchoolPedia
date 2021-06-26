/*
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

    constructor() {
        super();
        this.state = {
            nom: '',
            pays: '',
            ville: '',
            status: '',
            logoUrl: '',
            imageUrl: '',
            presentation: '',
            admission: '',
            frais: '',
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { nom, pays, ville, status, logoUrl, imageUrl, presentation, admission, frais } = this.state;

        axios.post('http://localhost:3000/api/school', { nom, pays, ville, status, logoUrl, imageUrl, presentation, admission, frais })
            .then((result) => {
                console.log(result)
            });
    }

    render() {
        const { nom, pays, ville, status, logoUrl, imageUrl, presentation, admission, frais } = this.state;
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            ADD School
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="nom">Nom:</label>
                                <input type="text" className="form-control" name="nom" value={nom}
                                       onChange={this.onChange} placeholder="Nom"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ville">Pays:</label>
                                <input type="text" className="form-control" name="pays" value={pays}
                                       onChange={this.onChange} placeholder="Pays"/>
                            </div>
                            <div class="form-group">
                                <label for="ville">Ville:</label>
                                <input type="text" class="form-control" name="ville" value={ville} onChange={this.onChange} placeholder="Ville" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Status:</label>
                                <input type="text" className="form-control" name="status" value={status}
                                       onChange={this.onChange} placeholder="Status"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="logoUrl">URL du logo:</label>
                                <input type="text" className="form-control" name="logoUrl" value={logoUrl}
                                       onChange={this.onChange} placeholder="https://..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="imageUrl">URL de présentation:</label>
                                <input type="text" className="form-control" name="imageUrl" value={imageUrl}
                                       onChange={this.onChange} placeholder="https://..."/>
                            </div>
                            <div class="form-group">
                                <label for="status">Présentation:</label>
                                <textArea class="form-control" name="presentation" onChange={this.onChange} placeholder="Résumé de l'école" cols="80" rows="3">{presentation}</textArea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Admission:</label>
                                <textArea class="form-control" name="admission" onChange={this.onChange}
                                          placeholder="Conditions d'admission" cols="80" rows="3">{admission}</textArea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Frais de scolarité:</label>
                                <textArea class="form-control" name="frais" onChange={this.onChange}
                                          placeholder="Frais de scolarité" cols="80" rows="3">{frais}</textArea>
                            </div>
                            <button type="submit" class="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;
*/
