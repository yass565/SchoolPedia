import React from 'react';
import {Link} from 'react-router-dom';
import Countries from "./Countries";

function Home() {
    return (
        <div>
            <div
                className="bg-image  d-flex justify-content-center align-items-center w-100 home-bg">
                <h1 className="text-white">Le meilleur allié pour poursuivre vos études de rêves</h1>
            </div>
            <div>
                <Link to="/addCountry" role="button" className="btn btn-primary">Ajouter un pays</Link>
            <div className="card-group m-5">
                <Countries/>
            </div>
            </div>
        </div>
);
}

export default Home;
