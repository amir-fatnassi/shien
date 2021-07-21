import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = ({image, mTitle, title, position, vedio, path}) => {
    return (
        <div className={` ${ position ==='left'? 'hero-container' : 'hero-container-1' }`}>
            {  image ?  <img src={image} alt="" className="hero-img"/> :
                <video src={vedio} autoPlay loop muted />
            }
            
            <div className="hero-banner">
                <h3 className="min-title"> {mTitle}</h3>
                <h1 className="title">{title}</h1>
                <p className="discreption"></p>
                <Button>
                    <Link
                        to={{
                            pathname:`/${path ? path :`search-${window.location.pathname.split('/')[1]}`}`,
                            state: window.location.pathname
                        }}>
                    voir tout
                    </Link>
                </Button>
                
                
            </div>
        </div>
    )
}

export default HeroSection
