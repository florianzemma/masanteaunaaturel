import React from 'react';
import NavBar from './NavBar';
import '../Css/DetailsArticle.css'
import Footer from'./Footer'

function DetailsAricle() {
    return (
        <div className='compo-donka'>
        <NavBar/>
           <div className='article-header'>
            <div className='article-header-container'>
                <div className='article-pics'></div>
                <div className='white-square'></div>
                <div className='title-and-text'>
                    <h1>Ronflements: Une solution naturelle: La naturopathie</h1>
                    <div className='categorie-black-div'>NATUROPATHIE</div>
                </div>
            </div>
           </div>
           <div className='article-content'>
               <div className='article-text'>
                   <h3 className='article-author'>Donka Prat</h3>
                   <h2 className='article-title'>La naturopathie au service du ronflement</h2>
                   <p>Aux vrombissements nocturnes du ronfleur s’ajoute bien souvent chez le voisin de chambrée l’agacement de le savoir endormi comme un bébé. Qu’on se détrompe ! Le ronfleur ne dort pas forcément à poings fermés. Lui aussi peut être réveillé par ses sons ou craindre d’en produire et, finalement, passer une mauvaise nuit. À long terme, stress, fatigue et somnolence dans la journée augmentent les risques d’accident cardiovasculaire et d’hypertension. Alors que faire ?</p>
                   <div className='center-flex-cheat'>
                        <div className='divider-blog-center'></div>
                   </div>

                   <h2 className='article-title'>Une histoire de tissus</h2>
                   <p> Pendant le sommeil, les tissus de la gorge se détendent naturellement, 
                       comme la peau du visage et l’ensemble du corps. C’est bon signe, cela signifie 
                       que le repos est en cours. Avec l’âge, ce relâchement des muqueuses peut s’accentuer. 
                       Les tissus internes gênent alors le trajet de l’air et vibrent sur son passage. 
                       </p>
                   <p> Il est bon d’ailleurs de veiller à ce que les ronflements ne se transforment pas en apnée, 
                       avec le temps. L’apnée du sommeil apparaît en effet lorsque les tissus de la gorge obstruent 
                       complètement la circulation de l’air. Si le vieillissement est en cause, certains facteurs aggravants 
                       sont souvent dénigrés. Manger trop lourd, abuser des produits laitiers et boire trop d’alcool accentuent 
                       le risque de ronfler, même très jeune</p>
                   <div className='center-flex-cheat'>
                        <div className='divider-blog-center'></div>
                   </div>
                   <h2 className='article-title'> Dégager les voies respiratoires </h2>
                   <p>Diverses solutions plus ou moins ciblées sont proposées au ronfleur : 
                       prothèse dentaire, dilatateur nasal, spray, oreiller anti-ronflement 
                       ou bague d’acupressure. Outre une hygiène de vie à repenser, surtout 
                       autour du repas du soir, des solutions plus douces permettront sans 
                       doute de traiter le problème de manière autrement efficace. 
                       Les huiles essentielles s’avèrent ainsi particulièrement intéressantes 
                       pour en finir avec les ronflements car elles dégagent les voies aériennes. </p>

                   <p>À appliquer sur les ailes du nez, la gorge et la poitrine ou à diffuser dans la 
                       chambre à coucher. On recommande l’eucalyptus, la menthe poivrée, la lavande vraie, 
                       la camomille noble et la mélisse qui raffermissent les tissus de la gorge et du fond du palais, 
                       tout en apportant calme et apaisement pour la nuit.</p>
                   <div className='center-flex-cheat'>
                        <div className='divider-blog-center'></div>
                   </div>
               </div>
           </div>
           <Footer/>
        </div>
    )
}

export default DetailsAricle