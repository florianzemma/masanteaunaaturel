import React,{useState, useEffect} from 'react'
import { Drawer, List, Avatar, Col, Row } from 'antd';
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

import {Rate} from 'antd'



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
      marginBottom: 7
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
function MyDrawer(props,item){

  const [visible,setVisible]= useState(false);
  const [praticien,setPracticien]= useState("");
  const [star,setStar]= useState(false)
  const [disabled,setDisabled]= useState(false);
  const [currentFavList,SetCurrentFavList]= useState([]);
    const [connected,setConnected] = useState(false);
    
  console.log(praticien)
 // Refresh list of praticien at the loading of the page / Rafraichit la liste des praticiens au chargement de la page 
 useEffect(() => {
  data = []
},[MyDrawer]);


  // Get the information via Redux / Récupère l'information via Redux
  let data = props.currentPracticienList

  console.log(data)
  let newData= [""]

  if(data.length>0){
    for(let i=0;i<data.length;i++){
    newData=data[i]
    }
  }

  //To open the drawer / Pour ouvrir le drawer
  const showDrawer = (item) => {
    setVisible(true)
    setPracticien(item)
    console.log(item)
   }

   //To close the drawer / Pour fermer le drawer
   const onClose = () => {
    setVisible(false)
   };
  

   // Change the color of the start if you liked it and save the praticien liked / Chnage la couleur de l'étoile au click et sauvegarde le praticien séléctioné
   let userSalt = localStorage.getItem("Salt");
   

    
    const AddToFav = async(item,currentFavList) =>{
          const data = await fetch('/savePraticien', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `name=${item.Name}&spec=${item.spec}&Arr=${item.Arr}&tel=${item.Tel}&lat=${item.lat}&lon=${item.lon}&url=${item.url}&salt=${userSalt}`
          })
          const getfavlist = async(currentFavList) => {
            const dataToRedux = await fetch(`/getfavlist?salt=${userSalt}`)
            let response = await dataToRedux.json()
            SetCurrentFavList(response)
            props.sendToMapComponent(currentFavList)
            }
            
          getfavlist(currentFavList)
          }

console.log(currentFavList)

 
let praticienCard;
if(data.length === 0){
 praticienCard = <p> Recherchez un praticien près de chez vous grace à la barre de recherche</p>
}else{
 praticienCard =  <List
 dataSource= {newData}
 bordered
 renderItem={item => (
     <List.Item
     
       key={item.id}
       actions={[
       <a onClick={()=>showDrawer(item)} key={`a-${item.id}`}>
       Voir le Profil
     </a>,
       <p> {`${item.price}`}</p>,
      //  <FontAwesomeIcon key={item.id} style={starColor} onClick={()=>AddToFav(item)} icon={faStar}></FontAwesomeIcon>,
       <Rate  defaultValue={0} disabled={disabled} onChange={()=>AddToFav(item,currentFavList)} count={1}/>   ]}
     >
<List.Item.Meta
     avatar={
       <Avatar style={{width:50, height:50}} src={`${item.url}`}/>
     }
     title={item.Name}
     description=  {`${item.spec} ${item.Arr}`}

   />
 </List.Item>
)}
/>
}

   return (
    <div style={{textAlign:"center",width:"50%",marginLeft:20}}>
       {praticienCard}
    
      <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={()=>onClose()}
        visible={visible}
       
      >
        <p className="site-description-item-profile-p" style={{ ...pStyle, marginBottom: 24 }}>
          Informations
        </p>
        <p className="site-description-item-profile-p" style={pStyle}>
          Praticien
        </p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Nom" content={praticien.Name}/>
          </Col>
          <Col span={12}>
            <DescriptionItem title="Téléphone" content={praticien.Tel} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Ville" content="Lyon" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Arrondissement" content= {praticien.Arr}/>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Spécialité" content={praticien.spec} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Website" content="-" />
          </Col>
      </Row>
      <Row>
          <Col span={12}>
            <DescriptionItem title="Prix" content={praticien.price} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Prix" content={praticien.detailprice} />
          </Col>
         
      </Row>
      </Drawer>
    </div>
    );
  }
  
  function mapStateToProps(state){
    return {currentPracticienList: state.displayPracticien}
  }
  
  function mapDispatchToProps(dispatch){
    return {
      sendToMapComponent: function(currentFavList){
        dispatch({type: 'sendfavList', userFavList: currentFavList})
      }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyDrawer)
