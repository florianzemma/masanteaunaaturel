import React from 'react'
import NavBar from './NavBar'
import '../Css/Medecinedouce.css'
import { Card, Col, Row } from 'antd';
import Footer from './Footer';
const { Meta } = Card;


function Medecinedouce() {
    var descriptions = ["La chiropraxie se fonde sur une conception globale du fonctionnement de l’organisme et des relations existant entre la colonne vertébrale;le système nerveux, le système musculaire et certains troubles de la santé",
    "Thérapeutique consistant dans l'introduction d'aiguilles très fines en des points précis des tissus ou des organes.",
    "L’Étiopathie s'adresse à chacun d'entre nous ! Du nourrisson au sénior, de la femme enceinte au sportif, l’Étiopathie soigne manuellement de nombreuses pathologies qui affectent notre vie quotidienne : troubles articulaires ou digestifs... ",
    "L’ostéopathie est une thérapie manuelle qui vise à remettre du mouvement dans les tissus, organes et articulations. Bien établie, l’ostéopathie est l’une des thérapies complémentaires les plus respectées et utilisées, en particulier pour des douleurs dorsales et articulaires",
    "L’état d’hypnose est un état naturel dans lequel chacun peut se retrouver sans le réaliser. En d’autres termes, c’est le fait d’être présent, sans l’être en même temps. Ce sont tous les moments où l’esprit se soustrait. Un état hypnotique singulier que nous connaissons et que nous pratiquons sans le réaliser.",
    "Médecine avant tout préventive, la naturothérapie vise à maintenir et/ou rétablir la santé par des moyens naturels. Le naturopathe cherche à rétablir les capacités d’auto-guérison inhérents à chacun et sa démarche consiste à s’appuyer sur les points forts afin de contrebalancer les faiblesses.",
    "La chiropraxie se fonde sur une conception globale du fonctionnement de l’organisme et des relations existant entre la colonne vertébrale, le système nerveux, le système musculaire et certains troubles de la santé.",
    "Utilisé depuis un millénaire comme une méthode de soin du corps sain et attrayant, le massage est reconnu dans le monde entier pour ses bénéfices et a été intégré dans de nombreux systèmes de santé. "
]
    
    return (
        <div className="color">
            <NavBar/>

            <div className='background-image'>
            
            </div>
    
                
           
                <div className='medecine-media' style={{padding: '100px' }}>
                
                <Row gutter={[32,32]}>
                <Col span={6}>
                    <Card bodyStyle={{backgroundColor: 'rgb(129, 158, 130)',height:'auto'}}
                    hoverable 
                    cover={<img alt="example" src="../../massage.jpg"/>}
                   bordered={false}>
                    
                   
                    <Meta title="Chiropraxie" description={descriptions[0].slice(0,80)+'...'} />           
                                           
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bodyStyle={{backgroundColor: 'rgb(129, 158, 130)'}} 
                    hoverable 
                    cover={<img alt="example" src="accupuncture.jpg"/>}
                   bordered={false}>
                    <Meta title="Accupuncture" description={descriptions[1].slice(0,80)+'...'} />           
                                           
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bodyStyle={{backgroundColor: 'rgb(129, 158, 130)'}}
                    hoverable 
                    cover={<img alt="example" src="etiopathie.jpg"/>}
                   bordered={false}>
                    <Meta title="Etiopathie" description={descriptions[2].slice(0,80)+'...'} />           
                                           
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bodyStyle={{backgroundColor: 'rgb(129, 158, 130)'}}
                    hoverable 
                    cover={<img alt="example" src="osteo.jpg"/>}
                   bordered={false}>
                    <Meta title="Ostéopathie" description={descriptions[3].slice(0,80)+'...'}/>           
                                           
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bodyStyle={{backgroundColor: 'rgb(129, 158, 130)'}}
                    hoverable 
                    cover={<img alt="example" src="hypnose.jpg"/>}
                   bordered={false}>
                    <Meta title="Hypnothérapie" description={descriptions[4].slice(0,80)+'...'} />           
                                           
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bodyStyle={{backgroundColor: 'rgb(129, 158, 130)'}}
                    hoverable 
                    cover={<img alt="example" src="naturopathie.jpg"/>}
                   bordered={false}>
                    <Meta title="Naturopathie" description={descriptions[5].slice(0,80)+'...'} />           
                                           
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bodyStyle={{backgroundColor: 'rgb(129, 158, 130)'}}
                    hoverable 
                    cover={<img alt="example" src="homeo.jpg"/>}
                   bordered={false}>
                    <Meta title="Homeopathie" description={descriptions[6].slice(0,80)+'...'} />           
                                           
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bodyStyle={{backgroundColor: 'rgb(129, 158, 130)'}}
                    hoverable 
                    cover={<img alt="example" src="massage2.jpg"/>}
                   bordered={false}>
                    <Meta title="Massage" description={descriptions[7].slice(0,80)+'...'} />                                
                    </Card>
                </Col>
                
            
                </Row>
            </div>
            <Footer/>
        </div>
    )
}

export default Medecinedouce
