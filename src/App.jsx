import Testimonio from './components/Testimonio'
import './App.css'
import Quincy from './images/Quincy.png'
import Naomi from './images/Naomi.png'
import Yaw from './images/Yaw.png'

function App() {
  return (
    <div className="contenedor-tarjetas">

      <Testimonio
        nombre="Quincy Larson"
        pais="Estados Unidos"
        imagen={Quincy}
        cargo="Fundador"
        empresa="freeCodeCamp"
        testimonio="Aprender a programar transformó completamente mi vida. Pasé de ser profesor de inglés a fundar una plataforma que ha ayudado a millones de personas en todo el mundo a dar el mismo salto."
      />

      <Testimonio
        nombre="Naomi Carrillo"
        pais="México"
        imagen={Naomi}
        cargo="Desarrolladora Full Stack"
        empresa="Mercado Libre"
        testimonio="Nunca pensé que podría trabajar en tecnología. freeCodeCamp me demostró que con constancia y los recursos adecuados, cualquiera puede aprender a programar sin importar su punto de partida."
      />

      <Testimonio
        nombre="Yaw Anokwa"
        pais="Ghana"
        imagen={Yaw}
        cargo="Ingeniero de Software"
        empresa="Google"
        testimonio="freeCodeCamp me acompañó durante los meses más difíciles de mi carrera. Sus proyectos reales y su comunidad me prepararon mejor que cualquier curso de pago que haya hecho."
      />

    </div>
  )
}

export default App