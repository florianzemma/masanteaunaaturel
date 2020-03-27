import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Layout} from 'antd'

import MapComponent from './MapComponent'
import SearchBar from './SearchBar'
import Drawer from './Drawer'

import '../Css/Home.css'


const {Content} = Layout;


export default function Home(props){
   

  

    return (
        <Layout>
            <NavBar/>
            
           <Content>
           <div className='search-bg-img'>
                <SearchBar/>
            </div>
            <div id = "MapAndCard">
                    <MapComponent/>
                    <Drawer/>  
            </div>
            
           </Content>
           <Footer/>
        </Layout>
    )
}


