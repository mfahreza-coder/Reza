import React from 'react';
import type { Kelurahan, Place } from '../types';
import PlaceCard from './PlaceCard';

interface KelurahanViewProps {
  kelurahan: Kelurahan;
  isAdminMode: boolean;
  onAdd: () => void;
  onEdit: (place: Place) => void;
  onDelete: (place: Place) => void;
}

const KelurahanView: React.FC<KelurahanViewProps> = ({ kelurahan, isAdminMode, onAdd, onEdit, onDelete }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kelurahan.places.map((place) => (
          <PlaceCard 
            key={place.id} 
            place={place} 
            isAdminMode={isAdminMode}
            onEdit={() => onEdit(place)}
            onDelete={() => onDelete(place)}
          />
        ))}
        {isAdminMode && (
          <button
            onClick={onAdd}
            className="flex items-center justify-center p-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl hover:bg-emerald-100 hover:border-emerald-400 transition-all duration-300 min-h-[200px]"
          >
            <span className="text-emerald-700 font-semibold">+ Tambah Tempat</span>
          </button>
        )}
        {kelurahan.places.length === 0 && !isAdminMode && (
            <p className="text-gray-500 col-span-full">Tidak ada data tempat untuk kelurahan ini.</p>
        )}
      </div>
    </div>
  );
};

export default KelurahanView;