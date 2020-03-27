import React from 'react';
import {Row,Col,Button,Input,Select,Card,message,Layout} from 'antd';
import {useState} from 'react'
import {GoogleOutlined,FacebookOutlined,CheckCircleOutlined} from '@ant-design/icons'
import NavBar from './NavBar'
import { Redirect } from 'react-router-dom';


import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';


import '../../App.css';



export default function Signup() {

    // Input Group Options
    const InputGroup = Input.Group;
    const { Option } = Select;

    const [googleResponse, setGoogleResponse] = useState();
    const [facebookResponse,setFacebookResponse] = useState();

    //User State
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    // Send informations to back for record DB / Envoi des informations du user vers le back pour enregistrement BDD

    const userToDb = async() => {
      const data = await fetch('/inscription', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `name=${name}&email=${email}&password=${password}`
      });
      let body = await data.json()
      
      console.log(body)
      // Error messages if user or email exist / messsage d'erreur si l'username ou l'email est existant  
      if(body.emailExist){
        message.error("Email déja existant")
      }
      if(body.usernameExist){
        message.error("Nom déja existant")
      }
      if(body.emailFormat === false){
        message.error("Email Incorrect")
      }
      if(body.emailExist === false && body.usernameExist === false && body.emailFormat === true){
        message.success("Inscription Réussie")
        return <Redirect to="/connexion"/>   
      }
    }
   
      //Google and Facebook Login Response / Réponse Google et Facebook 
      const responseGoogle = (response) => {
     setGoogleResponse(response.getBasicProfile())
      }
      const responseFacebook = (response) => {
        setFacebookResponse(response)
      }

      // Connection with Facebook & Google / Connexion avec Facebook et Google
    if(googleResponse || facebookResponse){
      return <Redirect to='/'/>
    }
      
    return (
      <Layout>
          <NavBar/>
          <Row  id="signin">
           
           <Col span={22}>
            <Card  hoverable style={{height:500,display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center",}}>

               <Col id="inscription" xs={24} lg={12}>

                          <h2>Créer un compte</h2>

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
                            onChange={(e) => setName(e.target.value)} value={name} 
                            placeholder="Nom">
                          </Input>
                          
                          <Input
                            onChange={(e) => setEmail(e.target.value)} value={email}  
                            placeholder="Email">
                          </Input>

                          <Input.Password
                            onChange={(e) => setPassword(e.target.value)} value={password}  
                            placeholder="Mot De Passe" 
                          />

                          </InputGroup>
                            <Button onClick={()=>userToDb()} type ="primary"style={{width:"40%"}}><CheckCircleOutlined/> Inscription</Button>
              </Col>
                                   

                  
              <Col id="pro" xs={24} lg={12}>
                        <h2>Enregistrez vous</h2>

                        <InputGroup  style={{width:'50%',height:500,display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}compact>
                            <Input placeholder="Nom"></Input>
                            <Input placeholder="Prénom"></Input>
                            <Input placeholder="Email"></Input>
                          
                            <Select style={{ width: '100%' }} defaultValue="Spécialité">
                              <Option value="Option1-1">Naturophate</Option>
                              <Option value="Option1-2">Ostéopahte</Option>
                              <Option value="Option1-3">Hynothérapeute</Option>
                              <Option value="Option1-4">Chiropracteur</Option>
                              <Option value="Option1-5">Ethiopate</Option>
                              <Option value="Option1-6">Masseur bien-etre</Option>
                            </Select>
                          

                            <Input placeholder="Numéro Adeli"></Input>
                            <Input placeholder="Téléphone"></Input>
                            <Input placeholder="Adresse"></Input>
                            <Input.Password placeholder="Mot de Passe"/>

                            <Button type ="primary"style={{width:"40%"}}><CheckCircleOutlined/> Inscription</Button>
                          
                        </InputGroup>
                </Col>
            </Card>
          </Col>
        </Row>
    </Layout>
    );
}