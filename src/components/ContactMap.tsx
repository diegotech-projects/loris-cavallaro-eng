'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false },
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false },
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false },
);

const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});

const ContactMap = () => {
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');

  useEffect(() => {
    setIsClient(true);

    // Fix for default markers - import leaflet dynamically
    const setupLeafletIcons = async () => {
      const L = await import('leaflet');

      // Delete existing icon URL method
      // eslint-disable-next-line no-underscore-dangle
      delete (L.Icon.Default.prototype as any)._getIconUrl;

      // Set custom icon URLs
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    };

    setupLeafletIcons();
  }, []);

  // Coordinates for Sicily, Italy (approximate center)
  const position: [number, number] = [
    parseFloat(process.env.NEXT_PUBLIC_LATITUDINE || '37.5999'),
    parseFloat(process.env.NEXT_PUBLIC_LONGITUDINE || '14.0153'),
  ];

  if (!isClient) {
    return (
      <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gray-200">
        <p className="text-gray-500">{t('map.loading')}</p>
      </div>
    );
  }

  return (
    <div className="h-64 w-full overflow-hidden rounded-lg shadow-lg">
      <MapContainer
        center={position}
        zoom={
          process.env.NEXT_PUBLIC_ZOOM
            ? parseInt(process.env.NEXT_PUBLIC_ZOOM, 10)
            : 9
        }
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
              <strong>
                {process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} -{' '}
                {process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'}
              </strong>
              <br />
              {tFooter('contact.location')}
              <br />
              <small>{t('map.popupText')}</small>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
