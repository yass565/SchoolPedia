import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import SchoolItem from "./SchoolItem";

class Annuaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schools: []
        }
    }

    componentDidMount(){
        this.getSchools(this.props.match.params.nomPays);
    }


    getSchools(nomPays){
        let url='http://localhost:3000/country/'+nomPays+'/etablissements'
        axios.get(url).then((resp)=>{
            this.setState({ schools: resp.data});
            console.log(this.state.schools);
        })
    }

    delete(id){
        console.log(id);
        axios.delete('http://localhost:3000/api/school/'+id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        return (
            <div>
                <div className="" style={{backgroundColor: "rgba(0, 124, 186, 0.2)"}}>
                    <div className="d-flex">
                        <select className="form-select m-5">
                            <option>Filière</option>
                            <option value="1">Architecture</option>
                            <option value="2">Assurance, Banque, finance</option>
                            <option value="3">Commerce et gestion</option>
                            <option value="3">Genie civil</option>
                            <option value="3">Electricité</option>
                            <option value="3">Informatique</option>
                            <option value="3">Mecanique</option>
                        </select>
                        <select className="form-select m-5">
                            <option >Ville</option>
                            <option value="1">Ouagadougou</option>
                            <option value="2">Bobo Dioulasso</option>
                            <option value="3">Koudougou</option>
                            <option value="3">Fada N'Gourma</option>
                            <option value="3">Dedougou</option>
                            <option value="3">Kaya</option>
                            <option value="3">Ouahigouya</option>
                        </select>
                    </div>

                </div>
                <h1 className="mt-2" style={{color: "#F59A23"}}>Catalogue des universités Burkinabè</h1>
                <Link to="/create-school" className="btn btn-primary" role="button">Ajouter une école</Link>
                <div className="row row-cols-md-4 m-5">
                    {
                        this.state.schools.map(school=>
                            <SchoolItem key={school._id} school={school} details={false} />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Annuaire;
