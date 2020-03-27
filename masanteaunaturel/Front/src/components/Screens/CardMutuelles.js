import React,{useState} from 'react'
import { Drawer, List, Avatar, Divider, Col, Row, Card } from 'antd';


const pStyle = {
    fontSize: 16,
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
  };
  
  const DescriptionItem = ({ title, content }) => (
    <div
      className="site-description-item-profile-wrapper"
      style={{
        fontSize: 14,
        lineHeight: '22px',
        marginBottom: 7,
      }}
    >
      <p
        className="site-description-item-profile-p"
        style={{
          marginRight: 8,
          display: 'inline-block',
        }}
      >
        {title}:
      </p>
      {content}
    </div>
  );
  
function CardMutuelles(props) {
    const [isVisible, setisVisible] = useState(false);
    

  var showDrawer = showDrawer = () => {
    setisVisible(true)
  };

  var onClose = onClose= e => {
    console.log(e);
    setisVisible(false)
  };

           


  
    return (
      <div>

    <div className="site-card-wrapper">
        
    
    <Card className='backcardmut' bordered={false} cover={<img alt="example" src={props.url}/>}>
      <div className='flexmutcard'>
        
          <p style={{height:'33px'}}>{props.mutuelleTitle}</p>
                    
          <a className='savoirplus' onClick={showDrawer}>
          En savoir +              
          </a>
      </div>
    </Card>

    
    </div>

        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={onClose}
          visible={isVisible}
        >
          <p className="site-description-item-profile-p boldgreen" style={{ ...pStyle, marginBottom: 24 }}>
            {props.mutuelleName}
          </p>
          <p> <span className='colormutvert'>Distributeur:</span> {props.mutuelleDist}</p>
          <p> <span className='colormutvert'>Médecines douces couvertes : </span> {props.mutuelleMed}</p>
          <p> <span className='colormutvert'>Plafond maximum: </span>{props.mutuellePlaf}</p>
          <p> <span className='colormutvert'>Produits:</span> {props.mutuelleProd}</p>
          <p> <span className='colormutvert'>Plafond Maximum: </span>{props.mutuelleMaxPlaf}</p>
          <p>Site:<a href={props.mutuelleWeb} target='_blank'> {props.mutuelleWeb}</a></p> 
          
          <Divider style={{backgroundColor:'rgb(129,158,130)', height:3}}/>
          <p className="site-description-item-profile-p boldgreen" style={{ ...pStyle, marginBottom: 24 }}>
            {props.mutuelleName1}
          </p>
          <p> <span className='colormutvert'>Distributeur: </span>{props.mutuelleDist1}</p>
          <p> <span className='colormutvert'>Médecines douces couvertes: </span>{props.mutuelleMed1}</p>
          <p> <span className='colormutvert'>Plafond maximum: </span> {props.mutuellePlaf1}</p>
          <p> <span className='colormutvert'>Produits: </span>{props.mutuelleProd1}</p>
          <p> <span className='colormutvert'>Plafond Maximum: </span>{props.mutuelleMaxPlaf1}</p>
          <p>Site:<a href={props.mutuelleWeb1} target='_blank'> {props.mutuelleWeb1}</a></p> 
          <Divider style={{backgroundColor:'rgb(129,158,130)', height:3}}/>
          <p className="site-description-item-profile-p boldgreen" style={{ ...pStyle, marginBottom: 24 }}>
            {props.mutuelleName2}
          </p>
          <p> <span className='colormutvert'>Distributeur: </span> {props.mutuelleDist2}</p>
          <p> <span className='colormutvert'>Médecines douces couvertes : </span>{props.mutuelleMed2}</p>
          <p> <span className='colormutvert'>Plafond maximum: </span> {props.mutuellePlaf2}</p>
          <p> <span className='colormutvert'>Produits: </span> {props.mutuelleProd2}</p>
          <p> <span className='colormutvert'>Plafond Maximum: </span> {props.mutuelleMaxPlaf2}</p>
          <p>Site:<a href={props.mutuelleWeb2} target='_blank'> {props.mutuelleWeb2}</a></p> 
          
          <Divider style={{backgroundColor:'rgb(129,158,130)', height:3}}/>
          <p className="site-description-item-profile-p boldgreen" style={{ ...pStyle, marginBottom: 24 }}>
            {props.mutuelleName3}
          </p>
          <p><span className='colormutvert'> Distributeur: </span>{props.mutuelleDist3}</p>
          <p> <span className='colormutvert'>Médecines douces couvertes : </span> {props.mutuelleMed3}</p>
          <p> <span className='colormutvert'>Plafond maximum: </span>{props.mutuellePlaf3}</p>
          <p> <span className='colormutvert'>Produits: </span>{props.mutuelleProd3}</p>
          <p> <span className='colormutvert'>Plafond Maximum: </span>{props.mutuelleMaxPlaf3}</p>
          <p>Site:<a href={props.mutuelleWeb3} target='_blank'> {props.mutuelleWeb3}</a></p> 
          
          <Divider style={{backgroundColor:'rgb(129,158,130)', height:3}}/>
          <p className="site-description-item-profile-p boldgreen" style={{ ...pStyle, marginBottom: 24 }}>
            {props.mutuelleName4}
          </p>
          <p> <span className='colormutvert'> Distributeur: </span>{props.mutuelleDist4}</p>
          <p> <span className='colormutvert'>Médecines douces couvertes : </span>{props.mutuelleMed4}</p>
          <p> <span className='colormutvert'>Plafond maximum: </span>{props.mutuellePlaf4}</p>
          <p><span className='colormutvert'> Produits: </span>{props.mutuelleProd4}</p>
          <p><span className='colormutvert'> Plafond Maximum: </span>{props.mutuelleMaxPlaf4}</p>
          <p>Site:<a href={props.mutuelleWeb4} target='_blank'> {props.mutuelleWeb4}</a></p> 
        
        </Drawer>
      </div>
    );
  }

        

export default CardMutuelles
