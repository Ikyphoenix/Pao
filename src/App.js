import "./App.css";
import Pao from "./Pao.jpeg";
import { useState } from "react";


export default function App() {

  function BotonFlip({texto, texto2, className}) {
    return (
    <a 
    className={`btn-flip ${className || ""}`} 
    data-front={texto} 
    data-back={texto2}
    rel="noopener noreferrer">
    </a>
    );
  }
  return(
    <div className="contenedor">
      <img src={Pao} alt="perfil" className="imagen"/>
      <div className="textos">
        <p className="descripcion">Hola, soy Paola!</p>
      </div>
      <div className="textos2">
        <p className="descripcion">Gracias por estar aquí y por interesarte en mi contenido! Aquí puedes encontrar todas mis redes sociales, 
        plataformas y proyectos para seguir de cerca todo lo que comparto.</p>
      </div>
      <div className="botones">
          <div className="dropdown">
          <div className="dropdown-trigger">
            <BotonFlip texto={"Contacto"} texto2={""} className={"boton"}/>
          </div>
          <div className="dropdown-content">
            <p className="dropdown-item">(656)-150-74-53</p>
            <p className="dropdown-item">paola.machitche@gmail.com</p>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown-trigger">
            <BotonFlip texto={"Paola Rewards"} texto2={""}/>
          </div>
          <div className="dropdown-content">
            <a className="dropdown-item" href="https://www.tiktok.com/@paolatedice?_r=1&_t=ZS-95GbrHO3Aai">Tik-Tok</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown-trigger">
            <BotonFlip texto={"Personal"} texto2={""}/>
          </div>
          <div className="dropdown-content">
            <a className="dropdown-item" href="https://www.instagram.com/paolamachitche?igsh=M2NzYTI0dDg4eDE2&utm_source=qr">Instagram</a>
            <a className="dropdown-item" href="https://www.tiktok.com/@paola.machitche?_r=1&_t=ZS-95Gzo5cuosu">Tik-Tok</a>
            <a className="dropdown-item" href="https://www.facebook.com/share/1Cn15KA3m6/?mibextid=wwXIfr">Facebook</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown-trigger">
            <BotonFlip texto={"Clamoré"} texto2={""}/>
          </div>
          <div className="dropdown-content">
            <a className="dropdown-item" href="https://www.instagram.com/barra_clamore?igsh=NmQzbm1mbXV4Ymdn&utm_source=qr">Instagram</a>
            <a className="dropdown-item" href="https://www.tiktok.com/@barra_clamore?_r=1&_t=ZS-95H09ZqdQuq">Tik-Tok</a>
            <a className="dropdown-item" href="https://www.facebook.com/share/1DXNATzgds/?mibextid=wwXIfr">Facebook</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown-trigger">
            <BotonFlip texto={"Esotérico"} texto2={""}/>
          </div>
          <div className="dropdown-content">
            <a className="dropdown-item" href="https://www.instagram.com/la.mashtt?igsh=MTA3MzA0a211NWh6MA==">Instagram</a>
            <a className="dropdown-item" href="https://www.tiktok.com/@la.mashtt?_r=1&_t=ZS-95H5Duv3A2v">Tik-Tok</a>
            <a className="dropdown-item" href="https://www.facebook.com/share/1JUAMjiEPM/?mibextid=wwXIfr">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
}
