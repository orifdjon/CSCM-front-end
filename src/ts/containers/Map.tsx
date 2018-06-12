/* global google */
import * as React from 'react';
import {DirectionsRenderer, withGoogleMap, withScriptjs} from 'react-google-maps'
import GoogleMap from "react-google-maps/lib/components/GoogleMap";

interface IMapPros {
    directions?: google.maps.DirectionsResult;
}

class Map extends React.Component<IMapPros, IMapPros> {

    constructor(props: IMapPros) {
        super(props);
        this.state = {
            directions: this.props.directions
        }
    }

    componentDidMount() {
        const DirectionsService = new google.maps.DirectionsService();

        DirectionsService.route({
            origin: new google.maps.LatLng(41.8507300, -87.6512600),
            destination: new google.maps.LatLng(41.8525800, -87.6514100),
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                    directions: result,
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
    }

    render() {
        return(
            <GoogleMap
                defaultZoom={7}
                defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
            >
                {this.state.directions && <DirectionsRenderer directions={this.props.directions} />}
            </GoogleMap>

        );
    }
}

export default withScriptjs(withGoogleMap(Map));
