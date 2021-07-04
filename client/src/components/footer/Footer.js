import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-head">
                    <div className="footer-page">
                        <div className="footer-item">
                            <h6 className="title-item">INFORMATIONS SUR L'ENTREPRISE</h6>
                            <ul className="item-list">
                                <li className="item">Qui Sommes-Nous?</li>
                                <li className="item">Affilié</li>
                                <li className="item">Blogger</li>
                                <li className="item">Responsabilité Sociétale Et</li>
                                <li className="item">Environnementale</li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h6 className="title-item">AIDE</h6>
                            <ul className="item-list">
                                <li className="item">Livraison</li>
                                <li className="item">Retour</li>
                                <li className="item">Commande</li>
                                <li className="item">Statut De Commande</li>
                                <li className="item">Guide Des Tailles</li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h6 className="title-item">CONTACT & PAIEMENT</h6>
                            <ul className="item-list">
                                <li className="item">Nous Contacter</li>
                                <li className="item">Paiement</li>
                                <li className="item">Points Bonus</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <div className="footer-social">
                            <div className="social-media">
                                <h6 className="title-social">Trouvez-nous sur</h6>
                                <ul className="social-list">
                                    <li className="social-item"><i className="fab fa-facebook-f"></i></li>
                                    <li className="social-item"><i className="fab fa-instagram"></i></li>
                                    <li className="social-item"><i className="fab fa-twitter"></i></li>
                                    <li className="social-item"><i className="fab fa-youtube"></i></li>
                                    <li className="social-item"><i className="fab fa-pinterest-p"></i></li>
                                    <li className="social-item"><i className="fab fa-snapchat-ghost"></i></li>
                                    <li className="social-item"><i className="fab fa-tiktok"></i></li>
                                </ul>
                            </div>
                            <div className="social-app">
                                <h6 className="title-social">APP</h6>
                                <ul className="social-list">
                                    <li className="social-item"><i className="fab fa-apple"></i></li>
                                    <li className="social-item"><i className="fab fa-android"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-email">
                            <h6 className="title-social">Abonnez-vous à notre newsletter pour suivre toute l'actualité SHEIN en avant-première ! (Vous pouvez vous DÉSABONNER à tout moment).</h6>
                            <div className="email-space">
                                <input type="text"/>
                                <button>S'ABONNER</button>
                            </div>
                        </div>
                        <div className="footer-payment">
                            <ul className="payment-list">
                                <li className="payment-item"><i className="fab fa-cc-visa"></i></li>
                                <li className="payment-item"><i className="fab fa-cc-stripe"></i></li>
                                <li className="payment-item"><i className="fab fa-cc-paypal"></i></li>
                                <li className="payment-item"><i className="fab fa-cc-mastercard"></i></li>
                                <li className="payment-item"><i className="fab fa-cc-amazon-pay"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-end">
                    <p>Note that the development build is not optimized.
To create a production build, use npm run build. </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
