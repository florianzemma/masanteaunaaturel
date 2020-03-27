import React,{useState,useEffect} from 'react';
import {Row,Col,Button,Input,Card,message,Layout} from 'antd';
import {GoogleOutlined,FacebookOutlined,CheckCircleOutlined} from '@ant-design/icons'
import {Redirect} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';

import '../../App.css';
import NavBar from './NavBar'


 export default function Signin(props) {

    // Input Group Options
    const InputGroup = Input.Group;
  
    // Social Network States
    const [googleResponse, setGoogleResponse] = useState();
    const [facebookResponse,setFacebookResponse] = useState();

    //User State
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [connected,setConnected] = useState(false);
    const [currentFavList,SetCurrentFavList]= useState([]);
    
    
    // To  clear the LocalStorage / Vider le localStorage
    useEffect(() => {
      localStorage.removeItem("Connected")
    },[]);

    // Send informations to back for record DB / Envoi des informations du user vers le back pour enregistrement BDD

    const checkUser = async() => {
      const data = await fetch('/connexion', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `email=${email}&password=${password}`
      });
      let body = await data.json()
              console.log(body)       
      // Connexion process username + password check / Vérification du nom d'utilisateur et du mot de passe 

        if(body.getUser && body.password){
          setConnected(true)
          SetCurrentFavList(body.getUser.praticienSelected)

          localStorage.setItem('Salt',body.getUser.salt)
          console.log(body.getUser)
        }
        if(body.password === false){
          setConnected(false)
          message.error("Mot de passe incorrect")
        }
        if(body.getUser === null){
          setConnected(false)
          message.error("Email incorrect")
        }
        
      }
      localStorage.setItem('Connected', connected)
     
      console.log(connected)
      // Redirection to the homepage if the user is connected / Redirection vers la homepage dès que l'utilisateur est connecté
      if(connected){
        return <Redirect to='/'/>
      }
      //Google and Facebook Login Response / Réponse Google et Facebook 
      const responseGoogle = (response) => {
     setGoogleResponse(response.getBasicProfile())
     console.log(googleResponse)
      }
      const responseFacebook = (response) => {
        console.log(response)
        
       if(response === "unknown"){
         setFacebookResponse(false)
       }else{
        setFacebookResponse(true)
       }
       
      }
      console.log(facebookResponse)

      // Connection with Facebook & Google / Connexion avec Facebook et Googl
      if(googleResponse || facebookResponse){
        setConnected(true) ;
        localStorage.setItem('Connected', connected)
        return <Redirect to='/'/>
      }
      
      
    return (
      <Layout>
         <NavBar/>
          <Row  id="signin">
           
           <Col span={22}>
            <Card  hoverable style={{height:500,width:"100",display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

               <Col id="connexion"  >

                          <h2>Se connecter</h2>

                          <GoogleLogin
                            clientId="780075199574-sf4qhhbdomfajna8ccb4m6boicdg0uet.apps.googleusercontent.com"
                            render={renderProps => (
                            <Button onClick={renderProps.onClick} disabled={renderProps.disabled}type="danger" shape="round" > <GoogleOutlined /> Connect with Google</Button>
                          )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                          />

                          
                          <FacebookLogin
                            appId="166754597998606"
                            autoLoad =  {false}
                            callback={responseFacebook}
                            render={renderProps => (
                            <Button onClick={renderProps.onClick} type="primary" shape="round" ><FacebookOutlined /> Connect With Facebook</Button>
                          )}
                          />
                          
                         
                          <InputGroup style={{width:'50%',height:200,display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}} compact>
                          
                          
                          <Input
                            onChange={(e) => setEmail(e.target.value)} value={email}  
                            placeholder="Email">
                          </Input>

                          <Input.Password
                            onChange={(e) => setPassword(e.target.value)} value={password}  
                            placeholder="Mot De Passe" 
                          />

                          </InputGroup>
                            <Button onClick={()=>checkUser(connected)} type ="primary"style={{width:"40%"}}><CheckCircleOutlined/> Connexion</Button>
              </Col>
            </Card>
          </Col>
        </Row>
    </Layout>
    );
}

// Redux

// function mapDispatchToProps(dispatch){
//   return {
//     getStatus: function(connected){
//       dispatch({type: 'userStatus', connected : connected})
//     }
//   }
// }

// export default connect(
//   null,
//   mapDispatchToProps
// )(Signin)
