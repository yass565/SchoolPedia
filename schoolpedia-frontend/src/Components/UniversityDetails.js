import React from 'react';
import axios from "axios";
import SchoolItem from "./SchoolItem";
import {Link} from 'react-router-dom';
class UniversityDetails extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            school:{}
        }
    }

    componentDidMount() {
        this.getSchools(this.props.match.params.nomPays, this.props.match.params.nomEtablissement)
    }

    getSchools( nomPays, nomEtablissement) {
        let url = "http://localhost:3000/country/"+nomPays+"/etablissements/"+nomEtablissement;
        axios.get(url).then((resp) => {
            this.setState({
                school: resp.data,

            });
            console.log(this.state.school);
        }).catch((err => {
            console.log(err);
        }))
    }

    delete(id){
        console.log(id);
        axios.delete('http://localhost:3000/api/school/'+id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        if(this.state.school!==null)
        return (
            <div>
                <SchoolItem school={this.state.school} details={true}/>
                <div className="mb-5">
                    <Link to={`/UniversityUpdate/${this.state.school._id}`} className="btn btn-success">Modifier</Link>&nbsp;
                    <button onClick={this.delete.bind(this, this.state.school._id)} className="btn btn-danger">Delete</button>
                </div>
            </div>

        );
        else{
            return <div>Hi</div>
        }
    }
}

export default UniversityDetails;
