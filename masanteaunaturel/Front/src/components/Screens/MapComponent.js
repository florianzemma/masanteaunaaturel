import React, {useState,useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import {connect} from 'react-redux'
import { Layout} from 'antd'
import { Drawer, List, Avatar, Col, Row } from 'antd';
import {Rate} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const {Content} = Layout;

const mapOptions = {
  disableDefaultUI: true,
  mapTypeControl: true,
  styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }]
}

function SimpleMap(props) {

  const [center,setCenter] = useState({lat :45.75,lng: 4.85 });
  const [zoom,setZoom] = useState(11);
  const [visible,setVisible] = useState(false);
  const [connected,SetConnected] = useState(localStorage.getItem("Connected"));
  const [currentFavList,SetCurrentFavList]= useState([]);
 
  let userSalt = localStorage.getItem("Salt")
  
  
  
  useEffect(()=>{
    const getfavlist = async()=>{
      const fav = await fetch(`/getfavlist?salt=${userSalt}`)
      let response = await fav.json()
      console.log(response)
      SetCurrentFavList(response)
      }
      getfavlist()
  },[])
  useEffect(()=>{},[currentFavList])


  // Get the information via Redux / Récupère l'information via Redux
  let data = props.currentPracticienList
  
  let newData= [""]
  if(data.length>0){
    for(let i=0;i<data.length;i++){
    newData=data[i]
    }
  }


  //Praticien localisation with the marker on the map / Localistion du praticien via un marker sur la map
  let array = []
  for(let i=0;i<newData.length;i++){
  array.push(<Marker key={i} lat={newData[i].lat} lng={newData[i].lon}/>)
  }
          
    return (
<Layout>

      <div style={{ height: 500, width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB2IU638nxlJ-yftq_oOMoYTRMTzUZ6aSw" }}
          defaultCenter={center}
          defaultZoom={zoom}
          options = {mapOptions}
        >

         {array}
        </GoogleMapReact>
      </div>
</Layout>
         
    )
    
  
  
}

function mapStateToProps(state){
  return {currentPracticienList: state.displayPracticien,currentFavList :state.favList}
}

export default connect(
  mapStateToProps,
  null
)(SimpleMap)



