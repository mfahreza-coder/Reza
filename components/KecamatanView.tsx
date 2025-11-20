import React from 'react';
import type { Kecamatan, Kelurahan } from '../types';
import { PencilIcon } from './icons/PencilIcon';
import { TrashIcon } from './icons/TrashIcon';

interface KecamatanViewProps {
  kecamatan: Kecamatan;
  onKelurahanSelect: (kelurahan: Kelurahan) => void;
  isAdminMode: boolean;
  onAdd: () => void;
  onEdit: (kelurahan: Kelurahan) => void;
  onDelete: (kelurahan: Kelurahan) => void;
}

const KecamatanView: React.FC<KecamatanViewProps> = ({ kecamatan, onKelurahanSelect, isAdminMode, onAdd, onEdit, onDelete }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {kecamatan.kelurahan.map((kelurahan) => (
          <div key={kelurahan.id} className="relative group">
            <button
              onClick={() => onKelurahanSelect(kelurahan)}
              className="w-full text-left p-4 bg-gray-100 rounded-lg hover:bg-emerald-200 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <h3 className="font-semibold text-lg text-emerald-800">{kelurahan.name}</h3>
              <p className="text-sm text-gray-600">{kelurahan.places.length} tempat ditemukan</p>
            </button>
            {isAdminMode && (
              <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => { e.stopPropagation(); onEdit(kelurahan); }}
                  className="p-1.5 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                  aria-label={`Ubah ${kelurahan.name}`}
                >
                  <PencilIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onDelete(kelurahan); }}
                  className="p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600"
                  aria-label={`Hapus ${kelurahan.name}`}
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ))}
        {isAdminMode && (
           <button
            onClick={onAdd}
            className="flex items-center justify-center p-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg hover:bg-emerald-100 hover:border-emerald-400 transition-all duration-300"
          >
            <span className="text-emerald-700 font-semibold">+ Tambah Kelurahan</span>
          </button>
        )}
        {kecamatan.kelurahan.length === 0 && !isAdminMode && (
            <p className="text-gray-500 col-span-full">Data untuk kecamatan ini belum tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default KecamatanView;