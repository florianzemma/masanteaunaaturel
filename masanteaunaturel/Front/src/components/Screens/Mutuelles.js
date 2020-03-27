import React,{useState} from 'react'
import NavBar from './NavBar'
import '../Css/Mutuelles.css'
import{ Drawer, Row, Col,Card, Divider, Button, Modal} from 'antd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife, faFileExcel } from '@fortawesome/free-solid-svg-icons'
import Mutuellebanner from './Mutuellebanner'
import CardMutuelles from './CardMutuelles'
import Footer from './Footer'


  
  
function Mutuelles() {
    
    var cardData = [
        {
            title:'Top 5 Mutuelles Santé Orientation Medecines Douces',
            name:'MUTUELLE CAP VERT',
            dist:'Eca Assurance',
            med: '+ de 100 Médecines douces couvertes ',
            plaf:'40.00 € / séance - maximum 240.00 € / an / bénéficiaire',
            prod:'Phytothérapie sur prescription Praticien médecines douces',
            maxplaf: '50% des dépenses avec maximum de 220 € / an / bénéficiaire ',
            web: 'https://www.mutuelle-capvert.com/therapies-couvertes',

            name1:'ASETYS MUTUELLE (ASSOCIATION)',
            dist1:'Courtier',
            med1: '+ 50 médecines douces couvertes ',
            plaf1:'50% dépenses engagées avec maximum de 500.00 € / an / bénéficiaire',
            prod1:'oui',
            maxplaf1: '50% dépenses engagées avec maximum de 500.00 € / an / bénéficiaire',
            web1: 'https://asetys.fr/asetys-nature/',
            url: '../../woman40.jpg',

            name2:'OXYGENE + (MUTUELLE VERTE)',
            dist2:'Mutuelle verte ',
            med2: 'Naturopathes, Ostéopathes, Chiropracteurs, Etiopathes',
            plaf2:'40.00 € / séance - maximum 120.00 € / an / bénéficiaire Bilan micronutritionnel : forfait 100.00 € / an / bénéficiaire',
            prod2:'oui',
            maxplaf2: '50% des dépenses engagées avec un maximum de 100.00 € / an / bénéficiaire',
            web2: 'https://www.mutuelleverte.com/comparateur/produits/particulier/?p=15-16',

            name3:'ASETYS MUTUELLE (ASSOCIATION)',
            dist3:'Courtier Groupe Adelaide',
            med3: 'Osteopathie, chiropractie, étiopathie, psychomotricité, podologie, pédicurie, acupuncture, diététique, psychologie',
            plaf3:'80.00 € par séance maximum 400.00 € / an / bénéficiaire',
            prod3:'Non',
            maxplaf3: '-',
            web3: 'https://www.cocoon.fr/assurance-sante',
            
            name4:'ASETYS MUTUELLE (ASSOCIATION)',
            dist4:'Mutuelle CCMO',
            med4: 'Acupuncture, médecine traditionnelle chinoise, Réflexologie, Naturopathie, Sophrologie, Ostéopathie, Etiopathie, Chiropractie, Massage Ayurveda, Shiatsu, Yoga, Kinésiologie, Psychotérapie ',
            plaf4:'35.00 € / séance    maximum 350.00 € / an / bénéficiaire ',
            prod4:'Non',
            maxplaf4: '-',
            web4: 'www.ccmo.fr',
            
        },


        {
            title:'Top 5 Classiques couvrant Medecines Douces',
            name:'OSALYS Formule 5',
            dist:'ASAF et AFPS',
            med: 'Ostéopathe, Chiropracteur, Pédicure, Podologue, Acupuncteur, Homéopathe ',
            plaf:'300.00 € ',
            prod:'Nom',
            maxplaf: '-',
            web: 'http://www.assurances-50plus.fr/asaf-osalys-5',

            name1:'SWISS LIFE SANTE Formule 9',
            dist1:'Cie Swiss Life',
            med1: 'Ostéopathe, Chiropracteur, Acupuncteur, Homéopathe, Pédicure-Podologue, Dieteticien',
            plaf1:'55.00 € par séance limitée à 5 séances soit 275.00 € / an / bénéficiaire',
            prod1:'Non',
            maxplaf1: '-',
            web1: 'www.swisslife.fr',
            url: '../../couple.jpg',

            name2:'PACK TNS Formule 8 (à destination travailleurs indépendants)',
            dist2:'Cegema Courtier Grossiste  ',
            med2: 'Naturopathes, Ostéopathes, Chiropracteurs, Etiopathes, pédicure-podologue, psychométricien, sexologue',
            plaf2:'50.00 € / séance - maximum 250.00 € / an / bénéficiaire',
            prod2:'oui',
            maxplaf2: '50% des dépenses engagées avec un maximum de 100.00 € / an / bénéficiaire',
            web2: 'https://www.cegema.com',

            name3:'APICIL TNS Formule 8 (à destination des travailleurs indépendants)',
            dist3:'Apicil TNS ',
            med3: 'Acupuncture, ostéopathie, chiropractie, diététique',
            plaf3:'55.00 € par séance maximum 220.00 € / an / bénéficiaire',
            prod3:'Non',
            maxplaf3: '-',
            web3: 'https://mon.apicil.com',
            
            name4:'APIVIA EXCLUSIVE SANTE Formule',
            dist4:'Apivia Mutuelle Groupe Macif ',
            med4: 'Acupuncture, Ostéopathie, Chiropractie,',
            plaf4:'30.00 € / séance    maximum 210.00 € / an / bénéficiaire',
            prod4:'Pharmacie non remboursée',
            maxplaf4: 'Forfait 100.00 €',
            web4: 'https://www.apivia.fr/offres-et-services/sante/',
        },
        {
            title:'Top 5 Surcomplémentaire',
            name:'SURCO COCOON',
            dist:'GROUPE ADELAIDE COURTAGE ',
            med: '+ de 50 Médecines douces ',
            plaf:'150.00 € / an / bénéficiaire',
            prod:'Oui',
            maxplaf: '50% dépenses engagées plafonnées à 100.00 €',
            web: 'https://www.cocoon.fr/mutuelle-sans-carence/choisir-surcomplementaire',

            name1:'VIAPLUS 5',
            dist1:'Mutuelle via sante',
            med1: 'chiropracteurs, ostéopathes, cryothérapie, nutritionnistes, acupuncteurs, naturothé- rapeutes, homéopathes, psychologues, pédicures-podologues, nutritionistes, diététiciens, psychomotriciens, étiopathes, sophrologues.',
            plaf1:'100 € / an / bénéficiaire Pas de plafond par séance.',
            prod1:'Non',
            maxplaf1: '-',
            web1: 'https://www.mutuelle-viasante.fr/fichiers/viaplus-2019.pdf',
            url: '../../vieux2.jpg',

            name2:'SURCO’ADREA 5',
            dist2:'Adrea Mutuelle Groupe Aesio ',
            med2: 'Acupuncteurs, chiropracteurs, cryothérapie, homéopathes, naturothérapeutes, nutritionnistes, ostéopathes, psychologues.',
            plaf2:'70.00 €/ an / bénéficiaire',
            prod2:'Non mais prise en charge pharmacie non remboursée prescrite',
            maxplaf2: '70€',
            web2: 'www.adrea.fr',

            name3:'SURCO MGC',
            dist3:'Mutuelle MGC',
            med3: 'Ostéopathe, chiropracteur, acupuncteur, étiopathe, homéopathe, pédicure',
            plaf3:'70.00 € / an / bénéficiaire',
            prod3:'Non',
            maxplaf3: '-',
            web3: 'https://www.mutuellemgc.fr/faq/remboursements-medecines-alternatives-comment-ca-marche/',
            
            name4:'PLENITUDE',
            dist4:'Mutuelle Solimut Centre Ocean',
            med4: 'Ostéopathe, Chiropracteur, Diététicien, Acupuncteur, Naturopathe, Hypnose, Pédicure, Podologue.',
            plaf4:'20.00 € / séance - maximum 60.00 € / an / bénéficiaire',
            prod4:'NON mais prise en charge pharmacie et homéopathie non remboursée + Service e-santé',
            maxplaf4: 'Forfait 40.00 € / an / bénéficiaire',
            web4: 'https://www.solimut-centre-ocean.fr',
        }
        
    ]


    return (
        <div className="1">
        
            <NavBar/>
            <Mutuellebanner/>

            <div className='second-part'>
            <h1>Comment bien choisir sa mutuelle ? </h1>

           <Row>
               
                <Col span={6} offset={6}>
               
                    <div className="back-image">
                    <div className='hr1'></div>
                    </div>
                   
                </Col>
                <Col span={6}offset={1}>
                    <p><span className='dim-num'> 01 </span> Commencez par établir un bilan de vos besoins : quels soins envisagez-vous et à quelle fréquence ?  </p>
                    <p>Souffrez-vous de douleurs chroniques ou souhaitez-vous mettre en place une hygiène de vie, à titre préventif ?</p>
                </Col>
            </Row>
            <Row>
                <Col span={4} offset={2}>
                    <img className='remonte' alt='' src='../../Mutuelle-flo.svg' width="150px"></img>
                </Col>
                <Col span={6}>
                <p><span className='dim-num1'> 02 </span> Faites-vous confirmer la liste des thérapies prises en charge pour ne pas avoir de mauvaises surprises.</p>
                   
                </Col>
                
                <Col span={6}offset={1}>
                        <div className="back-image2">
                            <div className='hr2'></div>
                        </div>
                        
                </Col>
            </Row>
           
            <Row>
            
                <Col span={6} offset={6}>
                        <div className="back-image3"></div>
                        <div className='hr3'></div>
                </Col>
                <Col span={6}offset={1}>
                    <p> <span className='dim-num'> 03 </span>Demandez un devis et n’hésitez pas à comparer les offres adaptées aux médecines douces. </p>
                </Col>
                <Col span={3} offset={1}>
                    <img alt=''className='rotate-left' src='../../Mutuelles-flo.svg' width="150px"></img>
                </Col>
            </Row>
             
               
           
            </div>

           <Row>
               <div className='back-images'>
                <Col span={10}>
                    <p>Si vous êtes salarié et couvert par un contrat groupe obligatoire par votre entreprise 
                    vous pouvez souscrire à titre individuel pour vous et les ayants droits de votre choix 
                    une surcomplémentaire qui viendra compléter vos garanties actuelles.
                    <br/>    <br/>
                    Si vous êtes travailleur indépendant ou retraités orientez-vous vers une mutuelle
                    adaptée à votre situation et couvrant vos besoins en médecines douces.
                    </p>
                </Col>
                </div>
            </Row>

        <div className='title2'>
            <h2>3 Catégories de mutuelles </h2>
        </div>
        <div className='hr4'></div><div>

        <Row gutter={24} style={{marginBottom:'5%'}}>
         <Col offset={3} span={6}>

        <CardMutuelles 
        mutuelleTitle = {cardData[0].title} mutuelleWeb = {cardData[0].web} mutuelleMaxPlaf = {cardData[0].maxplaf} mutuelleProd = {cardData[0].prod} mutuellePlaf = {cardData[0].plaf} mutuelleMed = {cardData[0].med} mutuelleDist = {cardData[0].dist} url = {cardData[0].url} mutuelleDesc={cardData[0].desc} mutuelleName={cardData[0].name}
        mutuelleTitle = {cardData[0].title} mutuelleWeb1 = {cardData[0].web1} mutuelleMaxPlaf1 = {cardData[0].maxplaf1} mutuelleProd1 = {cardData[0].prod1} mutuellePlaf1 = {cardData[0].plaf1} mutuelleMed1= {cardData[0].med1} mutuelleDist1 = {cardData[0].dist1} url1 = {cardData[0].url1} mutuelleDesc1={cardData[0].desc1} mutuelleName1={cardData[0].name1}
        mutuelleTitle = {cardData[0].title} mutuelleWeb2 = {cardData[0].web2} mutuelleMaxPlaf2 = {cardData[0].maxplaf2} mutuelleProd2 = {cardData[0].prod2} mutuellePlaf2 = {cardData[0].plaf2} mutuelleMed2= {cardData[0].med2} mutuelleDist2 = {cardData[0].dist2} url2 = {cardData[0].url2} mutuelleDesc2={cardData[0].desc2} mutuelleName2={cardData[0].name2}
        mutuelleTitle = {cardData[0].title} mutuelleWeb3 = {cardData[0].web3} mutuelleMaxPlaf3 = {cardData[0].maxplaf3} mutuelleProd3 = {cardData[0].prod3} mutuellePlaf3 = {cardData[0].plaf3} mutuelleMed3= {cardData[0].med3} mutuelleDist3 = {cardData[0].dist3} url3 = {cardData[0].url3} mutuelleDesc3={cardData[0].desc3} mutuelleName3={cardData[0].name3}
        mutuelleTitle = {cardData[0].title} mutuelleWeb4 = {cardData[0].web4} mutuelleMaxPlaf4 = {cardData[0].maxplaf4} mutuelleProd4 = {cardData[0].prod4} mutuellePlaf4 = {cardData[0].plaf4} mutuelleMed4= {cardData[0].med4} mutuelleDist4 = {cardData[0].dist4} url4 = {cardData[0].url4} mutuelleDesc4={cardData[0].desc4} mutuelleName4={cardData[0].name4}
        />
        </Col> 
        <Col span={6}>
        <CardMutuelles 
         mutuelleTitle = {cardData[1].title} mutuelleWeb = {cardData[1].web} mutuelleMaxPlaf = {cardData[1].maxplaf} mutuelleProd = {cardData[1].prod} mutuellePlaf = {cardData[1].plaf} mutuelleMed = {cardData[1].med} mutuelleDist = {cardData[1].dist} url = {cardData[1].url} mutuelleDesc={cardData[1].desc} mutuelleName={cardData[1].name}
         mutuelleTitle = {cardData[1].title}mutuelleWeb1 = {cardData[1].web1} mutuelleMaxPlaf1 = {cardData[1].maxplaf1} mutuelleProd1 = {cardData[1].prod1} mutuellePlaf1 = {cardData[1].plaf1} mutuelleMed1= {cardData[1].med1} mutuelleDist1 = {cardData[1].dist1} url1 = {cardData[1].url1} mutuelleDesc1={cardData[1].desc1} mutuelleName1={cardData[1].name1}
         mutuelleTitle = {cardData[1].title} mutuelleWeb2 = {cardData[1].web2} mutuelleMaxPlaf2 = {cardData[1].maxplaf2} mutuelleProd2 = {cardData[1].prod2} mutuellePlaf2 = {cardData[1].plaf2} mutuelleMed2= {cardData[1].med2} mutuelleDist2 = {cardData[1].dist2} url2 = {cardData[1].url2} mutuelleDesc2={cardData[1].desc2} mutuelleName2={cardData[1].name2}
         mutuelleTitle = {cardData[1].title} mutuelleWeb3 = {cardData[1].web3} mutuelleMaxPlaf3 = {cardData[1].maxplaf3} mutuelleProd3 = {cardData[1].prod3} mutuellePlaf3 = {cardData[1].plaf3} mutuelleMed3= {cardData[1].med3} mutuelleDist3 = {cardData[1].dist3} url3 = {cardData[1].url3} mutuelleDesc3={cardData[1].desc3} mutuelleName3={cardData[1].name3}
         mutuelleTitle = {cardData[1].title} mutuelleWeb4 = {cardData[1].web4} mutuelleMaxPlaf4 = {cardData[1].maxplaf4} mutuelleProd4 = {cardData[1].prod4} mutuellePlaf4 = {cardData[1].plaf4} mutuelleMed4= {cardData[1].med4} mutuelleDist4 = {cardData[1].dist4} url4 = {cardData[1].url4} mutuelleDesc4={cardData[1].desc4} mutuelleName4={cardData[1].name4}
        />
        </Col>
        <Col span={6}>
        <CardMutuelles 
         mutuelleTitle = {cardData[2].title} mutuelleWeb = {cardData[2].web} mutuelleMaxPlaf = {cardData[2].maxplaf} mutuelleProd = {cardData[2].prod} mutuellePlaf = {cardData[2].plaf} mutuelleMed = {cardData[2].med} mutuelleDist = {cardData[2].dist} url = {cardData[2].url} mutuelleDesc={cardData[2].desc} mutuelleName={cardData[2].name}
         mutuelleTitle = {cardData[2].title}mutuelleWeb1 = {cardData[2].web1} mutuelleMaxPlaf1 = {cardData[2].maxplaf1} mutuelleProd1 = {cardData[2].prod1} mutuellePlaf1 = {cardData[2].plaf1} mutuelleMed1= {cardData[2].med1} mutuelleDist1 = {cardData[2].dist1} url1 = {cardData[2].url1} mutuelleDesc1={cardData[2].desc1} mutuelleName1={cardData[2].name1}
         mutuelleTitle = {cardData[2].title} mutuelleWeb2 = {cardData[2].web2} mutuelleMaxPlaf2 = {cardData[2].maxplaf2} mutuelleProd2 = {cardData[2].prod2} mutuellePlaf2 = {cardData[2].plaf2} mutuelleMed2= {cardData[2].med2} mutuelleDist2 = {cardData[2].dist2} url2 = {cardData[2].url2} mutuelleDesc2={cardData[2].desc2} mutuelleName2={cardData[2].name2}
         mutuelleTitle = {cardData[2].title} mutuelleWeb3 = {cardData[2].web3} mutuelleMaxPlaf3 = {cardData[2].maxplaf3} mutuelleProd3 = {cardData[2].prod3} mutuellePlaf3 = {cardData[2].plaf3} mutuelleMed3= {cardData[2].med3} mutuelleDist3 = {cardData[2].dist3} url3 = {cardData[2].url3} mutuelleDesc3={cardData[2].desc3} mutuelleName3={cardData[2].name3}
         mutuelleTitle = {cardData[2].title} mutuelleWeb4 = {cardData[2].web4} mutuelleMaxPlaf4 = {cardData[2].maxplaf4} mutuelleProd4 = {cardData[2].prod4} mutuellePlaf4 = {cardData[2].plaf4} mutuelleMed4= {cardData[2].med4} mutuelleDist4 = {cardData[2].dist4} url4 = {cardData[2].url4} mutuelleDesc4={cardData[2].desc4} mutuelleName4={cardData[2].name4}
         />
        </Col>
            
        </Row>
        
        

       

        </div>

        

 <Footer/>
</div>
    )
}

export default Mutuelles;
