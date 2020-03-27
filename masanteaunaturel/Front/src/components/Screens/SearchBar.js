import React, { useState,useEffect} from 'react'
import { Select,Input} from 'antd';
import '../Css/SearchBar.css'
import {connect} from 'react-redux'

const { Option } = Select;
const { Search } = Input;

function SearchBar(props) {

const [practicienList,setPracticienList] = useState([]);
console.log(practicienList)
const [spec,setSpec] = useState([]);
const [arr,setArr] = useState([]);

useEffect(() => {
 let data = [""]
}, [])

//Get the value of the input option Spécialité / Récupère la valeur de l'input spécialité
function handleChange(value) {
  console.log(`selected ${value}`);
  setSpec(value) 
}
// console.log(spec)
// Get the value of the input option Arrondissement / Récupère la valeur de l'input Arrondissemnt 
function arrChange(value){
  console.log(`selected ${value}`)
  setArr(value)
}
// console.log(arr)

// Onclick Function to fetch the backend and send the filters / La function Onclick qui fetch vers le backend pour envoyer les filtres 
const searchOnDb = async() =>{
  console.log(spec)
  console.log("envoi réussi")
  var rawResponse = await fetch(`/getpraticien?spec=${spec}&arr=${arr}`)
  .then(res => res.json())
  .then(data => {
    setPracticienList(data);
    props.clearPracticienList([]);
    props.sendPracticienList(data)
   })
  .catch(err => console.log(err))
}

    return (
        <div className='search' style={{height:'10vh',display:'flex', justifyContent:"center"}}>

      <Select
    mode="multiple"
    style={{ width:'30%'}}
    placeholder="selectionnez une spécialité"
    defaultValue={[]}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="Chiropraxie" label="Chiropraxie">
      <div className="demo-option-label-item">
        Chiropraxie
      </div>
    </Option>
    <Option value="Hypnotherapie" label="Hypnotherapie">
      <div className="demo-option-label-item">
        Hypnotherapie
      </div>
    </Option>
    <Option value="Ostéopathie" label="Ostéopathie">
      <div className="demo-option-label-item">
        Ostéopathie
      </div>
    </Option>
    <Option value="Accupuncture" label="Accupuncture">
      <div className="demo-option-label-item">
        Accupuncture
      </div>
    </Option>
    <Option value="Naturopathie" label="Naturopathie">
      <div className="demo-option-label-item">
      Naturopathie
      </div>
    </Option>
    <Option value="Homéopathie" label="Homéopathie">
      <div className="demo-option-label-item">
        Homéopathie
      </div>
    </Option>
    <Option value="Massage" label="Massage">
      <div className="demo-option-label-item">
        Massage
      </div>
    </Option>
  </Select>
 
  <Select
    mode="multiple"
    style={{ width: '30%'}}
    placeholder="selectionnez une localité"
    defaultValue={[]}
    onChange={arrChange}
    optionLabelProp="label"
  >
    <Option value="69001" label="69001">
      <div className="demo-option-label-item">
        Lyon 69001
      </div>
    </Option>
    <Option value="69002" label="69002">
      <div className="demo-option-label-item">
      Lyon 69002
      </div>
    </Option>
    <Option value="69003" label="69003">
      <div className="demo-option-label-item">
      Lyon 69003
      </div>
    </Option>
    <Option value="69004" label="69004">
      <div className="demo-option-label-item">
      Lyon 69004
      </div>
    </Option>
    <Option value="69005" label="69005">
      <div className="demo-option-label-item">
      Lyon 69005
      </div>
    </Option>
    <Option value="69006" label="69006">
      <div className="demo-option-label-item">
      Lyon 69006
      </div>
    </Option>
    <Option value="69007" label="69007">
      <div className="demo-option-label-item">
      Lyon 69007
      </div>
    </Option>
    <Option value="690008" label="690008">
      <div className="demo-option-label-item">
      Lyon 69008
      </div>
    </Option>
    <Option value="69009" label="69009">
      <div className="demo-option-label-item">
      Lyon 69009
      </div>
    </Option>
  </Select>

  <Search
        placeholder="Rechercher par Nom"
        enterButton="Search"
        size="default"
        style={{ width: '30%'}}
        
        onSearch={()=>searchOnDb()}
  />
      </div>
    )
}


function mapDispatchToProps(dispatch){
  return {
    sendPracticienList: function(practicienList){
      dispatch({type: 'sendPracticien', list: practicienList})
    },
    clearPracticienList: function(practicienList){
      dispatch({type:'clear',list : practicienList})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar)



