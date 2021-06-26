import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SchoolDataService from '../services/SchoolService'
const AddSchool=()=> {
    const initialSchoolState={
        acronyme:'',
        nomEtablissement:'',
        villes: [],
        status:'',
        logoUrl:'',
        imageUrl:'',
        presentation:'',
        admission:'',
        frais:'',
        filieres: []
    };

    const [school, setSchool] = useState((initialSchoolState));
    const [submitted, setSubmitted] = useState(false);


    const handleInputChange = event=>{
        const {name, value}=event.target;
        setSchool({...school, [name]: value});
    }

    const saveSchool=()=> {
        const data = {
            acronyme: school.acronyme,
            nomEtablissement: school.nomEtablissement,
            villes: school.villes,
            status: school.status,
            logoUrl: school.logoUrl,
            imageUrl: school.imageUrl,
            presentation: school.presentation,
            admission: school.admission,
            frais: school.frais,
            filieres: school.filieres
        };


        // eslint-disable-next-line no-undef
        SchoolDataService.create(data)
            .then(response => {
                setSchool({
                    id: response.data.id,
                    acronyme: response.data.acronyme,
                    nomEtablissement: response.data.nomEtablissement,
                    villes: response.data.villes,
                    status: response.data.status,
                    logoUrl: response.data.logoUrl,
                    imageUrl: response.data.imageUrl,
                    presentation: response.data.presentation,
                    admission: response.data.admission,
                    frais: response.data.frais,
                    filieres: response.data.filieres,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const newSchool = () => {
        setSchool(initialSchoolState);
        setSubmitted(false);
    };



            return (
                <div className="CreateBook">
                    {submitted?(
                        <div>
                            <h4>You submitted successfully!</h4>
                            <button className="btn btn-success" onClick={newSchool}>
                                Ajouter
                            </button>
                        </div>
                    ):(
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <br/>
                                    <Link to="/" className="btn btn-outline-warning float-left">
                                        Show school List
                                    </Link>
                                </div>
                                <div className="col-md-8 m-auto">
                                    <h1 className="display-4 text-center">Add School</h1>
                                    <p className="lead text-center">
                                        Create new school
                                    </p>

                                    <form noValidate>
                                        <div className='form-group'>
                                            <input
                                                value={school.nomEtablissement}
                                                type='text'
                                                placeholder="Nom de l'établissement"
                                                name='nomEtablissement'
                                                className='form-control'
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <br/>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                placeholder='Status'
                                                name='status'
                                                className='form-control'
                                                value={school.status}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <br/>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                placeholder='Url du logo de l ecole'
                                                name='logoUrl'
                                                className='form-control'
                                                value={school.logoUrl}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <br/>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                placeholder="url de l'image de l'école"
                                                name='imageUrl'
                                                className='form-control'
                                                value={school.imageUrl}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <br/>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                placeholder="presentation de l'école"
                                                name='presentation'
                                                className='form-control'
                                                value={school.presentation}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <br/>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                placeholder="Conditions d'Admission"
                                                name='admission'
                                                className='form-control'
                                                value={school.admission}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <br/>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                placeholder="Frais de scolarité"
                                                name='frais'
                                                className='form-control'
                                                value={school.frais}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-4" onClick={saveSchool}>Enregistrer</button>

                                        <input
                                            type="submit"
                                            className="btn btn-outline-primary btn-block mt-4"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );

}
export default AddSchool;
