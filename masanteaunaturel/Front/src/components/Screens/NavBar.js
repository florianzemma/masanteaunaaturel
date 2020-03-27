import React, { useState, useEffect} from'react'
import '../Css/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBookOpen,faLeaf, faUserFriends, faSignInAlt,faArrowAltCircleRight, faSignOutAlt, faStar} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'




export default function NavBar(){

    const [connected,setConnected] = useState(false);
    
    let userStatus = localStorage.getItem("Connected")

    useEffect(() => {
        if(userStatus != undefined){
         setConnected(true)
        }else{
            setConnected(false)
        }    
        console.log(userStatus)
      },[connected]);

    


      const logout = () =>{
        setConnected(false)
        localStorage.removeItem('Salt')
        localStorage.removeItem("Connected")
      }
    
    // REDUX
    // let connected = props.userStatus
    // console.log(connected)

        return( 
        <div className='navbar' style={{position:"fixed"}}>

            <div className="logo">
                <Link to='/'><img alt ='logo' src='../../health.jpg' id="dimlogo"></img></Link>
            </div>
        
            <div className="navigation">

           
                <Link to="/" ><FontAwesomeIcon icon={faHome}> </FontAwesomeIcon>Accueil</Link>
                <Link to="/blog"><FontAwesomeIcon icon={faBookOpen}> </FontAwesomeIcon>Blog</Link>
                <Link to="/medecinedouce"><FontAwesomeIcon icon={faLeaf}> </FontAwesomeIcon>Medecines Douces</Link>
                <Link to="/mutuelles"><FontAwesomeIcon icon={faUserFriends}> </FontAwesomeIcon>Mutuelles</Link>
                  
            </div>
            {connected
            ? (<div className="inscription">
            <Link to="/favoris"><FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>favoris</Link>

            <Link to="/connexion" onClick={()=>logout()}><FontAwesomeIcon icon={faSignOutAlt}> </FontAwesomeIcon>Se deconnecter</Link>
        </div>)
            : (<div className="inscription">

            <Link to="/connexion"><FontAwesomeIcon icon={faArrowAltCircleRight}> </FontAwesomeIcon>Se connecter</Link>
            <Link style={{marginRight:'10px'}} to='/signup'><FontAwesomeIcon icon={faSignInAlt}> </FontAwesomeIcon>S'inscrire</Link> 
       
        </div>)
            }
            

            
        </div>
     )
}


// Redux

  