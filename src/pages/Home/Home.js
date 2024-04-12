import './Home.css'
/* ICONES LINGUAGENS */
import jsSVG from '../../img/js-svgrepo-com.svg'
import reactSVG from '../../img/reactjs-svgrepo-com.svg'
import cssSVG from '../../img/css-3-svgrepo-com.svg'
import htmlsSVG from '../../img/html-5-svgrepo-com.svg'
import bootstrapSVG from '../../img/bootstrap-svgrepo-com.svg'
import tailWindSVG from '../../img/tailwind-svgrepo-com.svg'
import materialUISVG from '../../img/material-ui-svgrepo-com.svg'
import oracleSVG from '../../img/oracle-svgrepo-com.svg'
import SQLServerSVG from '../../img/icons8-servidor-microsoft-sql.svg'
import pythonSVG from '../../img/python-svgrepo-com.svg'
import DockerSVG from '../../img/docker-svgrepo-com.svg'

import rightArrow from '../../img/right-arrow-alt-svgrepo-com.svg'

/*MIDIA PROJETOS*/
import cloneWhatsClipe from "../../img/clone-whatsapp-clipe.mp4"

import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import { useState } from 'react'

AOS.init();

const Home = () => {

  const [openModal, setOpenModal] = useState(true)

  return (
    <>
      <div className='home' style={{ overflow: openModal ? 'hidden' : '' }}>

        <div className='first-section'>
          <div className='container'>
            <h2 style={{ fontSize: '7rem', margin: '0 0 0 1.3rem', fontWeight: 400 }}>FRONTEND</h2>
            <h1 style={{ fontSize: '15rem', margin: 0 }}>DEVELOPER</h1>
          </div>
        </div>


        <div className="about">
          <div className='container'>

            <h2>Sobre mim</h2>
            <p>
              Desenvolvedor Front-end com experiência em React.js, JavaScript, Material UI e consumo de APIs REST. Apaixonado por tecnologias e programação.
              Também possui experiência em projetos gerenciados por Metodologias Ágeis. Cursando Análise e desenvolvimento de sistema.
            </p>
          </div>
        </div>


        <div className='subcontainer-skills' data-aos="fade-right">
          <div className='container' >
            <h3>Habilidades</h3>
            <div className='subcontainer-skills-items'>
              <div className='card-skills'>
                <img src={jsSVG} width={52} alt='javascript' title='Javascript' />
                <p>Javascript</p>
              </div>
              <div className='card-skills'>
                <img src={reactSVG} width={58} alt='react' title='React' />
                <p>React.js</p>
              </div>

              <div className='card-skills'>
                <img src={cssSVG} width={58} alt='css' title='CSS' />
                <p>CSS3</p>
              </div>

              <div className='card-skills'>
                <img src={htmlsSVG} width={58} alt='html' title='HTML' />
                <p>HTML5</p>
              </div>

              <div className='card-skills'>
                <img src={materialUISVG} width={50} alt='bootstrap' title='Material UI' />
                <p>Material UI</p>
              </div>

              <div className='card-skills'>
                <img src={bootstrapSVG} width={50} alt='bootstrap' title='Bootstrap' />
                <p>Bootstrap</p>
              </div>
            </div>

            <div className='skills-secundarias'>
              <h4>Em desenvolvimento</h4>
              <div className='subcontainer-skills-items'>
                <div className='card-skills'>
                  <img src={tailWindSVG} width={50} alt='bootstrap' title='TailWind CSS' />
                  <p>TailWind CSS</p>
                </div>

                <div className='card-skills'>
                  <img src={oracleSVG} width={82} alt='javascript' title='Oracle DB' />
                  <p>Oracle SQL Developer</p>
                </div>

                <div className='card-skills'>
                  <img src={SQLServerSVG} width={58} alt='react' title='SQL Server' />
                  <p>Microsoft SQL Server</p>
                </div>

                <div className='card-skills'>
                  <img src={pythonSVG} width={58} alt='css' title='Python' />
                  <p>Python</p>
                </div>

                <div className='card-skills'>
                  <img src={DockerSVG} width={58} alt='css' title='Docker' />
                  <p>Docker</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='projects' data-aos="fade-right">
          <div className='container'>
            <h3>Projetos</h3>
            <div className='projects-items'>

              <div className='card-projects p-1' onClick={() => setOpenModal(true)}>
                <div className='projects-info'>
                  <p>Clone Whatsapp</p>
                  <div>
                    <img src={reactSVG} width={30} alt='css' title='React' />
                    <img src={htmlsSVG} width={30} alt='css' title='Python' />
                    <img src={tailWindSVG} width={30} alt='css' title='Python' />
                  </div>
                </div>
              </div>

              <div className='card-projects p-2' onClick={() => setOpenModal(true)}>
                <div className='projects-info'>
                  <p>Busca CEP</p>
                  <div>
                    <img src={jsSVG} width={30} alt='css' title='Docker' />
                    <img src={cssSVG} width={30} alt='css' title='Python' />
                    <img src={htmlsSVG} width={30} alt='css' title='Python' />
                  </div>
                </div>
              </div>
              <div className='card-projects p-3' onClick={() => setOpenModal(true)}>
                <div className='projects-info'>
                  <p>Busca CEP</p>
                  <div>
                    <img src={jsSVG} width={30} alt='css' title='Docker' />
                    <img src={cssSVG} width={30} alt='css' title='Python' />
                    <img src={htmlsSVG} width={30} alt='css' title='Python' />
                  </div>
                </div>                </div>
              <div className='card-projects p-4' onClick={() => setOpenModal(true)}>
                <div className='projects-info'>
                  <p>Busca CEP</p>
                  <div>
                    <img src={jsSVG} width={30} alt='css' title='Docker' />
                    <img src={cssSVG} width={30} alt='css' title='Python' />
                    <img src={htmlsSVG} width={30} alt='css' title='Python' />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='modal-background' style={{ display: openModal ? '' : 'none' }}></div>
      <div className='modal-info-project' style={{ display: openModal ? '' : 'none' }}>

        <div>
          <div className='modal-close-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='icon-close-modal' onClick={() => setOpenModal(false)}>
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
          <div className='modal-body'>
            <div className='modal-video-buttons'>
              <div className='modal-video'>
                <video controls>
                  <source src={cloneWhatsClipe} type="video/mp4" />
                </video>
              </div>

              <div className='modal-buttons'>
                <a className='link-project' href='https://github.com/GabrielMatteElias/clone-whatsapp' target='_blank'>
                  Repositório Github
                  <img src={rightArrow} width={22} />
                </a>
              </div>
            </div>

            <div>
              <div className='modal-description'>
                <div className='modal-title'>
                  <h2>Clone Whatsapp</h2>
                </div>
                <p>Recriei a interface do whatsapp utilizando React.js, HTML5, Javascript e TailWindCSS. Quando me foi proposto este projeto a ideia era
                  criar uma interface para facilitar a visualização das conversas entre funcionários e clientes de uma empresa, como se fosse um backup
                  com um tela amigável, e não um chat em tempo real como o whatsapp. Para explicar um pouco o funcionamento, no menu da esquerda temos os
                  telefones usados pelos funcionários da empresa e dentro do menu sanfona de cada número há os whatsapp dos clientes contactados pelo
                  mesmo podendo acessar a conversa entre ambos.
                </p>
                <span>Outubro de 2023</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home