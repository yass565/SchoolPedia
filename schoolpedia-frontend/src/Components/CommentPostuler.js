import React, {Component} from 'react';

class CommentPostuler extends Component {
    render() {
        return (
            <div>
                <div className="bg-primary m-5 p-3">
                    <div className="d-flex flex-column" style={{maxWidth: "500px"}}>
                        <div className="d-flex">
                            <h4 className="bg-warning border-0  text-white rounded-circle p-lg-4">1</h4>
                            <h3 className="text-white">S'inscrire sur le site</h3>
                        </div>
                        <p className="text-white">Creer un compte pour soumettre votre dossier de candidature, postuler et profiter pleinement de nos services, créer un compte</p>
                    </div>
                    <div className="d-flex flex-column" style={{maxWidth: "500px", marginLeft: "600px" }}>
                        <div className="d-flex">
                            <h4 className="bg-warning border-0  text-white rounded-circle p-lg-4">2</h4>
                            <h3 className="text-white">S'inscrire sur le site</h3>
                        </div>
                        <p className="text-white">Accedez à votre tableau de bord et complete lvotre pofil puis uploadez votre dossier de candidature sous format pdf. Ce fichier doit contenir toutes les pièces à fournir selon votre niveau actuel</p>
                    </div>
                    <div className="d-flex flex-column " style={{maxWidth: "500px"}}>
                        <div className="d-flex">
                            <h4 className="bg-warning border-0  text-white rounded-circle p-lg-4">3</h4>
                            <h3 className="text-white">S'inscrire sur le site</h3>
                        </div>
                        <p className="text-white">Creer un compte pour soumettre votre dossier de candidature, postuler et profiter pleinement de nos services, créer un compte</p>
                    </div>
                    <div className="d-flex flex-column" style={{maxWidth: "500px", marginLeft: "600px"}}>
                        <div className="d-flex">
                            <h4 className="bg-warning border-0  text-white rounded-circle p-lg-4">4</h4>
                            <h3 className="text-white">S'inscrire sur le site</h3>
                        </div>
                        <p className="text-white">Creer un compte pour soumettre votre dossier de candidature, postuler et profiter pleinement de nos services, créer un compte</p>
                    </div>
                    <div className="d-flex flex-column" style={{maxWidth: "1000px", textAlign: "center"}}>
                        <p className="text-white text-center">Votre candidature est soumis, nous l'enverrons à votre école choisi pour le traiter. La reponse vous sera communiqué par email. Vous pouvez postuler jusqu'à 10 écoles. Vous pouvez également suivre le traitement de vos candidatures dans votre tableau de bord, dans l'onglet mes candidatures</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentPostuler;
