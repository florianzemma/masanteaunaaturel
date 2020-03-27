import React from 'react'
import { Card } from 'antd';
import { Row, Col} from 'antd';

import '../Css/Blog.css'
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import Footer from './Footer';
const { Meta } = Card;

function Blog() {
    
    return (
     
        <div className='blog-zone'>
             <NavBar/>
             <div className='back-imgs'> </div>
                <Row className='blog-cat'>
                    <div>
                    BEAUTÉ AU NATUREL
                    </div>
                    <div className='divider-blog'></div>
                </Row>
           
        <Row className='column-stp' gutter={[32, 32]}>
        
            <Col span={8}>
                <div className='blog-card'>
                    <div className='blog-card-img'></div>
                    <div className='overlay'>
                            <div className='overlay-btn'>Read More</div>
                    </div>
                    <div className='blog-card-desc'>
                        <div className='blog-card-title'>Boostez votre immunité grâce à l'alimentation</div>
                    </div>
                    
                </div>
            </Col>
            <Col span={8}>
                <div className='blog-card'>
                    <div className='blog-card-img2'></div>
                    <div className='overlay'>
                            <div className='overlay-btn'>Read More</div>
                    </div>
                    <div className='blog-card-desc'>
                        <div className='blog-card-title'>Quelles sont les alternatives naturelles à l'aspirine ?</div>
                    </div>
                    
                </div>
            </Col>
            <Col span={8}>
                <div className='blog-card'>
                    <div className='blog-card-img3'></div>
                    <div className='overlay'>
                            <div className='overlay-btn'>Read More</div>
                    </div>
                    <div className='blog-card-desc'>
                        <div className='blog-card-title'>La progression des medecines alternatives en France</div>
                    </div>
                    
                    
                </div>
            </Col>
            </Row>


            <Row gutter={[32, 32]}>
            <Col span={8}>
                <div className='blog-card'>
                    <div className='blog-card-img4'></div>
                    <Link target='_blank'to='/details'><div className='overlay'>
                            <div className='overlay-btn'>Read More</div>
                    </div></Link>
                    <div className='blog-card-desc'>
                        <div className='blog-card-title'>Ronflements: Une solution naturelle: La naturopathie</div>
                    </div>
                    
                </div>
            </Col>
            <Col span={8}>
                <div className='blog-card'>
                    <div className='blog-card-img5'></div>
                    <div className='overlay'>
                            <div className='overlay-btn'>Read More</div>
                    </div>
                    <div className='blog-card-desc'>
                        <div className='blog-card-title'>Herpès : l'homopathie agit dès les premiers signes</div>
                    </div>
                    
                </div>
            </Col>
            <Col span={8}>
                <div className='blog-card'>
                    <div className='blog-card-img6'></div>
                    <div className='overlay'>
                            <div className='overlay-btn'>Read More</div>
                    </div>
                    <div className='blog-card-desc'>
                        <div className='blog-card-title'>J'ai arrêté de fumer grâce à l'hypnose</div>
                    </div>
                    
                </div>
            </Col>
            </Row>
            <Footer/>
        </div>
    )
}

export default Blog
