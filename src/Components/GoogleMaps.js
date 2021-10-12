import React,{useContext,useEffect} from 'react'
import {context} from '../state_management/Use_context';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';
import { env } from 'process';
require('dotenv').config()
const AnyReactComponent = ({ text }) => <div><RoomIcon style={{color:'red',zIndex:'1000'}}/></div>;


export default function GoogleMaps() {
      
    const {users}= useContext(context)
    
   
     const [viewport, setViewport] = React.useState({
      latitude:0,
      longitude:0,

     });
  useEffect(() => {
    
    if(users.length>0){
    setViewport(
      {
        lat: parseInt(users[0].location.coordinates.latitude),
        lng: parseInt(users[0].location.coordinates.longitude),
       
      }
    )
 
  }
  },[]);

  
 
  
    return  (
      <div className='maps-warper'>
        <GoogleMapReact
          bootstrapURLKeys={{ key:env.REACT_APP_API_KEY}}
          defaultCenter={viewport}
          defaultZoom={6}
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
