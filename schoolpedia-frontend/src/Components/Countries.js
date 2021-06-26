import React, {Component} from 'react';
import axios from "axios";
import CountryItem from "./CountryItem";

class Countries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: []
        }
    }

    componentDidMount(){
        this.getCountries();
    }


    getCountries(){
        let url='http://localhost:3000/countries'
        axios.get(url).then((resp)=>{
            this.setState({ countries: resp.data });
            console.log(this.state.countries);
        })
    }

    delete(id){
        console.log(id);
        axios.delete('http://localhost:3000/countries/'+id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        return (
            <div>
                <div className="row row-cols-md-2 m-2">
                    {
                        this.state.countries.map(country=>
                            <CountryItem key={country._id} country={country}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Countries;
