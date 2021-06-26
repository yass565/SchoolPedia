import React, {Component} from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
class Contact extends Component {
    render() {
        return (
            <div>
                <section className="m-5 mb-4">
                    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>

                    <div className="row">
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label htmlFor="name" className="">Your name</label>
                                            <input type="text" id="name" name="name" class="form-control"/>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label className="email">Your email</label>
                                            <input type="text" id="email" name="email" class="form-control"/>

                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <label htmlFor="subject" className="">Subject</label>
                                            <input type="text" id="subject" name="subject" class="form-control"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <label htmlFor="message">Your message</label>
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        </div>

                                    </div>
                                </div>

                            </form>

                            <div className="text-center text-md-left">
                                <button className="btn btn-primary" type="submit">Envoyer</button>
                            </div>
                            <div className="status"></div>
                        </div>
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><PhoneIcon/>
                                    <p>+ 01 234 567 89</p>
                                </li>

                                <li><EmailIcon/>
                                    <p>contact@mdbootstrap.com</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>
            </div>
        );
    }
}

export default Contact;
