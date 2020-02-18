import React from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import "./leafletmap.css"

const OpenMarker = props => {
    const initMarker = ref => {
        if (ref) {
            ref.leafletElement.openPopup()
        }
    }

    return <Marker ref={initMarker} {...props} />
}

const LeafletMap = ({ geo }) => {
    if (typeof window !== 'undefined') {
        const position = geo.split(' ')
        return (
            <Map center={position} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <OpenMarker position={position}>
                    <Popup>
                        Geo: {geo}
                    </Popup>
                </OpenMarker>
            </Map>
        )
    }
    return null
}

export default LeafletMap