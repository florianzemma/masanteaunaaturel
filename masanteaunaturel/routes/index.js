var express = require('express');
var router = express.Router();

var userModel = require('../models/UserSchema')
var practicienModel =  require('../models/PracticienSchema')
var mongoose = require('../models/ConnexionBDD')

var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");
var uid2 = require("uid2");

    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
    });

    // User sign-up / Inscription de l'utilisateur 
    router.post('/inscription', async function(req,res,next){

    let salt = uid2(32);
    let newUser = null;
    let user = null ;
    
    user =  new userModel({
        name : req.body.name,
        email : req.body.email,
        password : SHA256(req.body.password + salt).toString(encBase64),
        salt:salt,
    })

    // Email format check / Vérification du format de l'email
    let emailFormat = false;   
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let emailTest = re.test(req.body.email)
    // console.log(emailTest)

    if(emailTest){
      emailFormat = true;
    }else if(emailTest === false){
      emailFormat = false;
    }

    // Email check / Vérification si l'email est existant 
    emailExist = await userModel.findOne({email:req.body.email})

    if(emailExist){
    emailExist = true;
    // console.log(emailExist)
    }else{
    emailExist = false;
    // console.log(emailExist)
    }
    
    //Username Check /Vérification si l'username est existant 
    usernameExist = await userModel.findOne({name: req.body.name})
    
    if(usernameExist){
      usernameExist = true;
      // console.log(usernameExist)
    }else{
     
      usernameExist = false;
    }
    
    //Optimisation : if email exist or username and email format is incorrect you don't save   / Si l'email ou l'username existe et que le format d'email est incorrect pas de sauvegarde en BDD
    if(usernameExist === false && emailExist === true && emailFormat === false){
      newUser = null;
    }else if(usernameExist === true && emailExist === false && emailFormat === false){
      newUser = null;
    }else if(usernameExist === false && emailExist === false && emailFormat === true){
      newUser = await user.save()
    }
  
    res.json({usernameExist,emailExist,emailFormat})
    
  })
  
    // Connexion root / Route de Connexion
    router.post('/connexion',async function(req, res, next) {
     
  
    let password = false;
    let user = false;
    

    // Email check / Vérification de l'email
    let getUser = await userModel.findOne({email: req.body.email})
  
    //Password check if Email is good / Vérification du mot de passe par rapport a l'email
    
    if(getUser){
    user = true
    let salt = uid2(32);
    const passwordEncrypt = SHA256(req.body.password + getUser.salt).toString(encBase64)
    
    
      if(getUser.password === passwordEncrypt){
      password = true
      }else{
      password = false
      }

    }
    console.log(password)
    console.log(getUser)
    console.log(user)

    res.json({getUser,password,user})
    });


    //Practicien sing-up / Inscription des practiciens 
    router.post('/inscriptionpraticien', async function(req,res,next){
    
      //Practicien model
    let practicien =  new practicienModel({
      Name : req.body.Name,
      email : req.body.email,
      password : req.body.password,
      Tel :req.body.Tel,
      Arr:req.body.arr,
      lat: req.body.lat,
      lon : req.body.lon,
      spec: req.body.spec,
      numAdeli:req.body.numadeli,
      url : req.body.url,
    })

    // Save the practicien on the DB/ Sauvegarde du practicien en Db 
    let newPraticien = await practicien.save();
    })

    router.get('/getpraticien', async function(req, res, next) {
      
      // Recovery the arr filters information from Front / Récupération de la valeur du filtre arr à partir du front 
      let arrFilters = req.query.arr;
      let arrFiltersList = arrFilters.split(",")
      console.log(arrFiltersList)


      // Recovery the spec filters information from Front / Récupération de la valeur du filtre Spec à partir du front 
      let specFilters = req.query.spec;
      let specFiltersList = specFilters.split(",")
      console.log(specFiltersList)
      

      // Recovery of all the practicien from th DB / Récupération de tous les practiciens à partir de la base de données
      let practicienList = await practicienModel.find();
      let practicienFiltered = [];
     
      //List of Practicien filtered by arrondissement / Liste de practiciens filtrée par Arrondissement 
      if(arrFiltersList[0] != [''] && specFiltersList[0] === ''){
        console.log("1")
        for(let i=0;i<practicienList.length;i++){
          for(let j=0;j<arrFiltersList.length;j++){
            if(practicienList[i].Arr === arrFiltersList[j]){
              practicienFiltered.push(practicienList[i])
            }
          }
        }
      }
    
    // List of Practicien filtered by Spec // List des practiciens filtrées par la Spec
    if(specFiltersList[0] != [''] && arrFiltersList[0] === ''){
        console.log("2")
        for(let i=0;i<practicienList.length;i++){
          for(let j=0;j<specFiltersList.length;j++){
            if(practicienList[i].spec === specFiltersList[j]){
              practicienFiltered.push(practicienList[i])
            }
          }
        }
      }
      
      //List of practicien filtered by Arrondissment and Spec / List des practiciens filtrée par Arrondissment et Spec
      if(specFiltersList[0] != [''] && arrFiltersList[0] != ['']){
        for(let i=0;i<practicienList.length;i++){
            for(let j=0;j<specFiltersList.length;j++){
                for(let k=0;k<arrFiltersList.length;k++){
                  if(practicienList[i].spec === specFiltersList[j] && practicienList[i].Arr === arrFiltersList[k]){
                    practicienFiltered.push(practicienList[i])  
                  }
                }
            }
        } 
      }

      console.log(practicienFiltered.length)
      res.json(practicienFiltered)
    });

    // To save practicien to Fav when you click on the star / Sauvegarde des infos du praticien quand on clique sur l'étole
    router.post('/savePraticien', async function(req,res,next){
      let favExist =  false ;
      let user = await userModel.findOne({salt:req.body.salt})
      console.log(user)
      
      //Save only if the praticien is not already save // Sauvegarde seulement si le praticien n'est pas déja sauvergarder
      for(let i=0;i<user.praticienSelected.length;i++){
        if(user.praticienSelected[i].name === req.body.name){
        favExist = true;
        }else{
        favExist = false;
        }
      }
      if(favExist === true){
        return user
        }else{
        user.praticienSelected.push({name:req.body.name,spec:req.body.spec,Arr:req.body.Arr,tel:req.body.tel,lat:req.body.lat,lon:req.body.lon,url:req.body.url})
        let saveNewPraticienSelected = await user.save();
        console.log(saveNewPraticienSelected)
        res.json({favList :user.praticienSelected})
        }
        
    })

    // router.post('/deletePraticien', async function(req,res,next){
    //   let user = await userModel.findOne({salt:req.body.salt}) 
        
    //     user.praticienSelected.splice(user.praticienSelected.indexOf({name:req.body.name}),1)
    //     let deletePraticien = await user.save();
    //     res.json({favList :user.praticienSelected})
    // })
    
    // Send the List of praticien saved // Envoi la liste des praticiens sauvegardé
    router.get('/getfavlist', async function(req,res,next){
      console.log(req.query.salt)
      let user =  await userModel.findOne({salt:req.query.salt})
      // console.log(user.praticienSelected)
      res.json(user.praticienSelected)
    })
module.exports = router;

