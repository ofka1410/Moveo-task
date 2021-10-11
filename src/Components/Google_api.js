import React from 'react'
import {GoogleApiWrapper} from 'google-maps-react';
export class MapContainer extends React.Component {}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAZK3MKGVUpN8nILMyaqPHL7jUhrcl5VAA')
})(MapContainer)