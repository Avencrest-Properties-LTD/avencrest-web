import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix standard Leaflet default icon paths in bundlers (Vite)
delete L.Icon.Default.prototype._getIconUrl;

const customPinIcon = L.divIcon({
  className: 'custom-map-pin',
  html: `
    <div style="
      background-color: #061612;
      color: #ffffff;
      width: 38px;
      height: 38px;
      border-radius: 9999px;
      border: 2px solid #d7a02a;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      cursor: pointer;
    ">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d7a02a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    </div>
  `,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

// Helper component to smoothly re-center map if coordinates change
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function ProjectLocationMap({
  coordinates = [6.4531, 3.4344],
  zoom = 14,
  title = 'Avencrest Project',
  address = '',
  className = '',
}) {
  return (
    <div
      className={`relative z-0 h-[380px] w-full overflow-hidden border border-primary/10 shadow-sm sm:h-[440px] ${className}`.trim()}
    >
      <MapContainer
        center={coordinates}
        zoom={zoom}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <ChangeView center={coordinates} zoom={zoom} />
        {/* Standard OpenStreetMap tiles - 100% free, public, and requires NO API KEY */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates} icon={customPinIcon}>
          <Popup className="avencrest-map-popup">
            <div className="p-1">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">
                Avencrest Location
              </span>
              <p className="mt-0.5 text-xs font-semibold text-primary">{title}</p>
              {address && (
                <p className="mt-1 whitespace-pre-line text-[11px] text-muted">
                  {address}
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
