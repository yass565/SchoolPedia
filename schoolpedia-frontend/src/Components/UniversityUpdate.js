/*
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UniversityUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            school: {}
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/school/'+this.props.match.params.id)
            .then(res => {
                this.setState({ school: res.data });
                console.log(this.state.school);
            });
    }

    onChange = (e) => {
        const state = this.state.school
        state[e.target.name] = e.target.value;
        this.setState({school:state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { nom, pays, ville, status, logoUrl, imageUrl, presentation, admission, frais } = this.state.school;

        axios.put('http://localhost:3000/api/school/'+this.props.match.params.id, { nom, pays, ville, status, logoUrl, imageUrl, presentation, admission, frais })
            .then((result) => {
                this.props.history.push("/UniversityDetails/"+this.props.match.params.id)
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Modifier une école
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to={`/UniversityDetails/${this.state.school._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Retour</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="ville">Nom:</label>
                                <input type="text" className="form-control" name="nom" value={this.state.school.nom}
                                       onChange={this.onChange} placeholder="Nom"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ville">Pays:</label>
                                <input type="text" className="form-control" name="pays" value={this.state.school.pays}
                                       onChange={this.onChange} placeholder="Pays"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ville">Ville:</label>
                                <input type="text" className="form-control" name="ville" value={this.state.school.ville}
                                       onChange={this.onChange} placeholder="Ville"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Status:</label>
                                <input type="text" className="form-control" name="status" value={this.state.school.status}
                                       onChange={this.onChange} placeholder="Status"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="logoUrl">URL du logo:</label>
                                <input type="text" className="form-control" name="logoUrl" value={this.state.school.logoUrl}
                                       onChange={this.onChange} placeholder="https://..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="imageUrl">URL de présentation:</label>
                                <input type="text" className="form-control" name="imageUrl" value={this.state.school.imageUrl}
                                       onChange={this.onChange} placeholder="https://..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Présentation:</label>
                                <textArea class="form-control" name="presentation" onChange={this.onChange}
                                          placeholder="Résumé de l'école" cols="80" rows="3">{this.state.school.presentation}</textArea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Admission:</label>
                                <textArea class="form-control" name="admission" onChange={this.onChange}
                                          placeholder="Conditions d'admission" cols="80" rows="3">{this.state.school.admission}</textArea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Frais de scolarité:</label>
                                <textArea class="form-control" name="frais" onChange={this.onChange}
                                          placeholder="Frais de scolarité" cols="80" rows="3">{this.state.school.frais}</textArea>
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UniversityUpdate;
*/
