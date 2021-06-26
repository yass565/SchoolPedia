import React from 'react';
import {Link} from "react-router-dom";

function CountryItem(props) {
    return (
        <div key={props.country._id}>
            <div className="card m-2">
                <Link className="card-link" to={props.country.nomPays+"/etablissements/"}>
                    <img className="card-img-top" style={{height: "300px"}} src={props.country.imagePays} alt={props.country.nomPays}/>
                    <div className="card-footer " style={{backgroundColor: "#007CBA"}}>
                        <h5 className="card-title">{props.country.nomPays}</h5>
                        <p className="card-text">{props.country.resumePays}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CountryItem;
