import React from 'react'

import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi' 
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import '../styles/orphanages-map.css'
import mapMarkerImg from '../images/map-marker.svg'

function OrphanagesMap(){
  return(
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy Icon"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>Araçuaí</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map center={[-16.842752,-42.0497976]} zoom={15} style={{ width: '100%', height: '100%' }}>
      <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </Map >

      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color='#fff'/>
      </Link>
    </div>
  )
}

export default OrphanagesMap