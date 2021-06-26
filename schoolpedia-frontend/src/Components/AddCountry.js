import React, {Component} from 'react';
import axios from "axios";

class AddCountry extends Component {

    constructor() {
        super();
        this.state = {
            nomPays: '',
            resumePays: '',
            imagePays: '',
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { nomPays, resumePays, imagePays} = this.state;

        axios.post('http://localhost:3000/countries', { nomPays, resumePays, imagePays})
            .then((result) => {
                console.log(result)
            });
    }

    render() {
        const { nomPays, resumePays, imagePays } = this.state;
        return (
            <div>
                <div class="container">
                    <h1>Formulaires</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="nomPays" value={nomPays}
                                   onChange={this.onChange} placeholder="Nom du pays"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="imagePays" value={imagePays}
                                   onChange={this.onChange} placeholder="Url d'une image représentative du pays"/>
                        </div>
                        <div className="form-group">
                            <textArea class="form-control" name="resumePays" onChange={this.onChange}
                                      placeholder="Bref résumé sur le pays" cols="80" rows="3">{resumePays}</textArea>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddCountry;
