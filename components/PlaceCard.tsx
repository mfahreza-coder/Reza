
import React, { useState } from 'react';
import type { Place } from '../types';
import { BuildingStorefrontIcon } from './icons/BuildingStorefrontIcon';
import { MapPinIcon } from './icons/MapPinIcon';
import { AcademicCapIcon } from './icons/AcademicCapIcon';
import { PencilIcon } from './icons/PencilIcon';
import { TrashIcon } from './icons/TrashIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { ShareIcon } from './icons/ShareIcon';

interface PlaceCardProps {
  place: Place;
  isAdminMode?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, isAdminMode, onEdit, onDelete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { images } = place;
  const hasMultipleImages = images && images.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const getCategoryStyles = (type: string) => {
    switch (type) {
      case 'Culinary Spot':
        return { bg: 'bg-amber-600', icon: BuildingStorefrontIcon, iconColor: 'text-amber-700' };
      case 'Educational Site':
        return { bg: 'bg-purple-600', icon: AcademicCapIcon, iconColor: 'text-purple-700' };
      case 'Local Attraction':
      default:
        return { bg: 'bg-sky-600', icon: MapPinIcon, iconColor: 'text-sky-700' };
    }
  };

  const styles = getCategoryStyles(place.type);
  const IconComponent = styles.icon;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col group">
      <div className="relative">
        <img 
          className="w-full h-48 object-cover" 
          src={images?.[currentIndex] || 'https://picsum.photos/seed/placeholder/400/300'} 
          alt={place.name} 
        />
        <div 
          className={`absolute top-0 right-0 m-2 px-3 py-1 text-xs font-bold text-white rounded-full ${styles.bg}`}
        >
          {place.type}
        </div>
        {isAdminMode && (
           <div className="absolute top-2 left-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={onEdit}
              className="p-1.5 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              aria-label={`Ubah ${place.name}`}
            >
              <PencilIcon className="w-4 h-4" />
            </button>
            <button
              onClick={onDelete}
              className="p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600"
              aria-label={`Hapus ${place.name}`}
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        )}
        {hasMultipleImages && (
          <>
            <button onClick={handlePrev} aria-label="Gambar sebelumnya" className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100">
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button onClick={handleNext} aria-label="Gambar berikutnya" className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100">
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      
      {hasMultipleImages && (
        <div className="flex justify-center items-center pt-3">
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => handleIndicatorClick(e, index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-400 ${
                  currentIndex === index ? 'bg-emerald-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Tampilkan gambar ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <div className={`px-5 pb-5 ${hasMultipleImages ? 'pt-3' : 'pt-5'} flex-grow flex flex-col`}>
        <div className="flex items-center mb-2">
           <IconComponent className={`w-5 h-5 ${styles.iconColor} mr-2 flex-shrink-0`} />
          <h3 className="font-bold text-xl text-gray-800 truncate">{place.name}</h3>
        </div>
        <p className="text-gray-600 text-sm flex-grow">{place.description}</p>
        
        {/* Address and Map Link Section */}
        {(place.address || place.mapUrl) && (
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-start text-sm text-gray-600">
             <MapPinIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-emerald-600" />
             <div className="flex-grow">
                {place.address && <p className="line-clamp-2 mb-1">{place.address}</p>}
                {place.mapUrl && (
                    <a 
                        href={place.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 hover:underline text-xs font-semibold inline-flex items-center"
                    >
                        Lihat di Google Maps &rarr;
                    </a>
                )}
             </div>
          </div>
        )}
        
        {place.contact && (place.contact.phone || place.contact.socialMedia) && (
          <div className="mt-4 pt-3 border-t border-gray-200 flex items-center space-x-4 text-sm">
            {place.contact.phone && (
              <a href={`tel:${place.contact.phone}`} className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
                <PhoneIcon className="w-4 h-4 mr-1.5" />
                <span>Telepon</span>
              </a>
            )}
            {place.contact.socialMedia && (
              <a href={place.contact.socialMedia} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
                <ShareIcon className="w-4 h-4 mr-1.5" />
                <span>Media Sosial</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceCard;
