import React from 'react'

import '../Css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBookOpen,faLeaf, faUserFriends, faSignInAlt,faArrowAltCircleRight, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { Input} from 'antd';

const { Search } = Input;

function Footer() {
    return (
        <div style={{width:'100%'}}>
            <div className='footer'>
                <div className='footer-social'>
                    <a href='#' target='_blank'><img src='../../facebook-with-circle.svg' alt='fb-icon' width='40' height='40'></img></a>
                    <a href='#' target='_blank'><img src='../../instagram-with-circle.svg' alt='fb-icon' width='40' height='40'></img></a>
                    <a href='#' target='_blank'><img src='../../linkedin-with-circle.svg' alt='fb-icon' width='40' height='40'></img></a>
                </div>
                <div className='div-vide'>
                    
                </div>
                <div className='footer-logo' style={{width:'33%'}}>
                    <img src='../../health-blanc.svg' width='250' height='100'></img>
                </div>
                <div className='footer-link'>
                    <Link to="/" ><FontAwesomeIcon icon={faHome}> </FontAwesomeIcon>Accueil</Link>
                    <Link to="/blog"><FontAwesomeIcon icon={faBookOpen}> </FontAwesomeIcon>Blog</Link>
                    <Link to="/medecinedouce"><FontAwesomeIcon icon={faLeaf}> </FontAwesomeIcon>Medecines Douces</Link>
                    <Link to="/mutuelles"><FontAwesomeIcon icon={faUserFriends}> </FontAwesomeIcon>Mutuelles</Link>
                </div>
            </div>
            <div className='newsletter-zone'>
                    <Search className='input-c-b'
                        placeholder="Entrez votre Email"
                        enterButton="S'inscrire"
                        size="default"
                        style={{ width: '30%'}}
                    />
            </div>
            <div className='dev'>
                <span>Creation site:
                <a href='https://donka-creation.fr/'> Donka creation</a> / <a href=''>Florian Zemma</a>
                </span>
            </div>
        </div>
    )
}

export default Footer
