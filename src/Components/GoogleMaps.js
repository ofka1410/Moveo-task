import React,{useContext,useEffect} from 'react'
import {context} from '../state_management/Use_context';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';
import { env } from 'process';
require('dotenv').config()
const AnyReactComponent = ({ text }) => <div><RoomIcon style={{color:'red'}}/></div>;


export default function GoogleMaps() {
      
    const {users}= useContext(context)
    let Props = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
   
     const [viewport, setViewport] = React.useState({
      latitude:0,
      longitude:0,

     });
  useEffect(() => {
    console.log(users)
    if(users.length>0){
    setViewport(
      {
        latitude: users[0].location.coordinates.latitude,
        longitude: users[0].location.coordinates.longitude,
        zoom: 8
      }
    )
    Props.center.lat=users[0].location.coordinates.latitude
    Props.center.lng= users[0].location.coordinates.longitude
  }
  },[]);

  
 
  
    return  (
      <div className='maps-warper'>
        <GoogleMapReact
          bootstrapURLKeys={{ key:env.REACT_APP_API_KEY}}
          defaultCenter={Props.center}
          defaultZoom={Props.zoom}
        >
          <AnyReactComponent
            lat={viewport.latitude}
            lng={viewport.longitude}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}
