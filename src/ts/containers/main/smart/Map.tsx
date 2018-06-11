/* global google */
import * as React from 'react';
import {withGoogleMap, withScriptjs} from 'react-google-maps'
import GoogleMap from "react-google-maps/lib/components/GoogleMap";

interface IMapPros {
    isMarkerShown?: boolean
}

class Map extends React.Component<IMapPros> {
    render() {
        return(
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
            </GoogleMap>

        );
    }
}

export default withScriptjs(withGoogleMap(Map));
