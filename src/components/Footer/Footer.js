import './Footer.css'
import emailSVG from '../../img/email-1-svgrepo-com.svg'
import linkedinSVG from '../../img/linkedin-161-svgrepo-com.svg'
import githubSVG from '../../img/github-142-svgrepo-com.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='contact-items'>
                    <div className='contacts'>
                        <a href="mailto:gabrielmatteelias@gmail.com" target="_blank" rel="noreferrer">
                            <div className='contact-item-icon'>
                                <img src={emailSVG} width={35} color='#fff' alt='email'/>
                            </div>
                        </a>
                        <a href="mailto:gabrielmatteelias@gmail.com" target="_blank" rel="noreferrer" className='contact-text'>
                            <p>E-mail</p>
                        </a>
                    </div>                   
                    <div className='contacts'>
                        <a href='https://www.linkedin.com/in/gabriel-matte-elias-05baab189/' target="_blank" rel="noreferrer">
                            <div className='contact-item-icon'>
                                <img src={linkedinSVG} width={28} color='#fff' alt='linkedin'/>
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/gabriel-matte-elias-05baab189/' target="_blank" rel="noreferrer" className='contact-text'>
                            <p>Linkedin</p>
                        </a>
                    </div>
                    <div className='contacts'>
                        <a href='https://github.com/GabrielMatteElias' target="_blank" rel="noreferrer">
                            <div className='contact-item-icon'>
                                <img src={githubSVG} width={28} color='#fff' alt='github'/>
                            </div>
                        </a>
                        <a href='https://github.com/GabrielMatteElias' target="_blank" rel="noreferrer" className='contact-text'>
                            <p>Github</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer