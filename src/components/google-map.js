import React from 'react'
import GoogleMapReact from 'google-map-react'
import Wifi from './wifi.js'

class Map extends React.Component {
  render() {
    let markers = []
    if(this.props.wifis){
      this.props.wifis.forEach((wifi, index) =>{
        if((parseFloat(wifi[15]) < this.props.lat + 0.01 && parseFloat(wifi[15]) > this.props.lat - 0.01) && (parseFloat(wifi[16]) < this.props.long + 0.01 && parseFloat(wifi[16]) > this.props.long - 0.01)){
          markers.push(<Wifi key={index} lat={wifi[15]} lng={wifi[16]} />)
        }
      })
    }
    return(
      <GoogleMapReact bootstrapURLKeys={{
        key: '',
        language: 'en'
        }}
      defaultCenter={[this.props.lat, this.props.long]}
      defaultZoom={this.props.zoom}>
        {markers}
      </GoogleMapReact>
  )
}
}

export default Map
