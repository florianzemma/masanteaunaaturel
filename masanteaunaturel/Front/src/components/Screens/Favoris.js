import React,{useEffect, useState} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import '../Css/Home.css'

function Favoris() {


    const [currentFavList,SetCurrentFavList]= useState([])
    let userSalt = localStorage.getItem("Salt")


    useEffect(()=>{
      const getfavlist = async()=>{
        const fav = await fetch(`/getfavlist?salt=${userSalt}`)
        let response = await fav.json()
        console.log(response)
        SetCurrentFavList(response)
        
        }
        
        getfavlist()
    },
    [])
   



const favorislist = currentFavList.map((favoris, i)=>
<div className='user-fav-card'>
    <div className="user-fav-top">
        <img className="imgFav" src={favoris.url} width='100' height='100'></img></div>   
    <div className="user-fav">
        <div className='user-fav-right'>
        <p>{favoris.name}</p>
        <p>{favoris.spec}</p>
        <p>{favoris.tel}</p>
        </div>  
    </div>
</div>
)
    return (
        <div className='fav-page'>
            <NavBar/>
                <div className='fav-zone'>
                {favorislist}
                </div>
            <Footer className='footer-fav'/>
        </div>
    )
}

export default Favoris
