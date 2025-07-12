'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

const ContactMap = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Fix for default markers - import leaflet dynamically
    const setupLeafletIcons = async () => {
      const L = await import('leaflet');
      
      // Delete existing icon URL method
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      
      // Set custom icon URLs
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    };

    setupLeafletIcons();
  }, []);

  // Coordinates for Sicily, Italy (approximate center)
  const position: [number, number] = [37.5999, 14.0153];

  if (!isClient) {
    return (
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Caricamento mappa...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={8}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <div className="text-center">
              <strong>{process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - Ingegneria & Costruzioni</strong>
              <br />
              Sicilia, Italia
              <br />
              <small>Servizi su tutto il territorio nazionale</small>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;