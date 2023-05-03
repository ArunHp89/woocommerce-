import React from "react";
import logo from '../../images/Logo.png';
function FooterMenu(){
    return(
        <>
            <div className="col-sm-3 col-12">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src={logo} />
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has standard.</p>
                        <ul>
                            <li>
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-google" aria-hidden="true" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
        </>
    );

};
export default FooterMenu;