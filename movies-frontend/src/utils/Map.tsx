import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});
L.Marker.prototype.options.icon = defaultIcon;
//12.977790, 77.564936

interface mapClickProps {}

const MapClick = (props: mapClickProps): null => {
  return null;
};

const Map = (props: mapProps) => {
  return (
    <>
      <MapContainer
        center={[12.97779, 77.564936]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: `${props.height}` }}
      >
        <TileLayer
          attribution="React Movies"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
};

export default Map;

interface mapProps {
  height: string;
}
Map.defaultProps = {
  height: "300px",
};
