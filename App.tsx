
import React, { useState, useCallback, useMemo } from 'react';
import type { Kecamatan, Kelurahan, Place } from './types';
import Header from './components/Header';
import BogorMap from './components/BogorMap';
import KecamatanView from './components/KecamatanView';
import KelurahanView from './components/KelurahanView';
import LandingPage from './components/LandingPage';
import StoryView from './components/StoryView';
import EditModal from './components/EditModal';
import { ArrowLeftIcon } from './components/icons/ArrowLeftIcon';
import { useBogorData } from './hooks/useBogorData';
import { useAppConfig } from './hooks/useAppConfig';

type ModalState = {
  isOpen: boolean;
  type?: 'kelurahan' | 'place' | 'background' | 'district-config';
  mode?: 'add' | 'edit';
  data?: any;
  context?: any;
};

const App: React.FC = () => {
  const { bogorData, updateKecamatan, addKelurahan, updateKelurahan, deleteKelurahan, addPlace, updatePlace, deletePlace } = useBogorData();
  const { config, setLandingPageImage, setStoryImage, setDistrictColor } = useAppConfig();

  const [view, setView] = useState<'landing' | 'explorer' | 'story'>('landing');
  const [selectedKecamatan, setSelectedKecamatan] = useState<Kecamatan | null>(null);
  const [selectedKelurahan, setSelectedKelurahan] = useState<Kelurahan | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isMapEditMode, setIsMapEditMode] = useState(false);
  const [modalState, setModalState] = useState<ModalState>({ isOpen: false });

  const handleKecamatanSelect = useCallback((kecamatan: Kecamatan) => {
    setSelectedKecamatan(kecamatan);
    setSelectedKelurahan(null);
  }, []);

  const handleKelurahanSelect = useCallback((kelurahan: Kelurahan) => {
    setSelectedKelurahan(kelurahan);
  }, []);
  
  const handleBack = useCallback(() => {
    if (selectedKelurahan) {
      setSelectedKelurahan(null);
    } else if (selectedKecamatan) {
      setSelectedKecamatan(null);
    }
  }, [selectedKelurahan, selectedKecamatan]);

  const handleStartExploring = () => {
    setView('explorer');
  };

  const openModal = (type: 'kelurahan' | 'place' | 'background' | 'district-config', mode: 'add' | 'edit', data?: any, context?: any) => {
    setModalState({ isOpen: true, type, mode, data, context });
  };
  
  const closeModal = () => {
    setModalState({ isOpen: false });
  };

  const handleSave = (values: any) => {
    const { type, mode, context } = modalState;
    
    if (type === 'background') {
        if (context?.target === 'story') {
            setStoryImage(values.url);
        } else {
            setLandingPageImage(values.url);
        }
    } else if (type === 'district-config') {
        // Save Color to Config
        setDistrictColor(context.kecamatanId, values.color);
        // Save Structure (Name, Path, Position) to Data
        updateKecamatan(context.kecamatanId, {
            name: values.name,
            path: values.path,
            textPosition: values.textPosition
        });
    } else if (type === 'kelurahan') {
      if (mode === 'add') {
        addKelurahan(context.kecamatanId, values.name);
      } else {
        updateKelurahan(context.kecamatanId, { ...context.kelurahan, name: values.name });
      }
    } else if (type === 'place') {
      if (mode === 'add') {
        addPlace(context.kecamatanId, context.kelurahanId, values as Omit<Place, 'id'>);
      } else {
        updatePlace(context.kecamatanId, context.kelurahanId, { ...values, id: context.place.id });
      }
    }
    closeModal();
  };

  const currentKecamatanData = useMemo(() => {
    if (!selectedKecamatan) return null;
    return bogorData.find(k => k.id === selectedKecamatan.id) || null;
  }, [bogorData, selectedKecamatan]);
  
  const currentKelurahanData = useMemo(() => {
    if (!currentKecamatanData || !selectedKelurahan) return null;
    return currentKecamatanData.kelurahan.find(kl => kl.id === selectedKelurahan.id) || null;
  }, [currentKecamatanData, selectedKelurahan]);


  if (view === 'landing') {
    return (
      <>
        <LandingPage 
          onExplore={handleStartExploring} 
          onReadStory={() => setView('story')} 
          backgroundImage={config.landingPageImage}
          onEditBackground={() => openModal('background', 'edit', { url: config.landingPageImage })}
        />
        <EditModal
            isOpen={modalState.isOpen}
            onClose={closeModal}
            onSave={handleSave}
            config={modalState}
        />
      </>
    );
  }
  
  if (view === 'story') {
    return (
      <>
        <StoryView 
            onBack={() => setView('landing')} 
            image={config.storyImage}
            isAdminMode={isAdminMode}
            onEditImage={() => openModal('background', 'edit', { url: config.storyImage }, { target: 'story' })}
        />
        <EditModal
            isOpen={modalState.isOpen}
            onClose={closeModal}
            onSave={handleSave}
            config={modalState}
        />
      </>
    );
  }
  
  const getTitle = () => {
    if (selectedKelurahan) return `Jelajahi ${selectedKelurahan.name}`;
    if (selectedKecamatan) return `Pilih Kelurahan di ${selectedKecamatan.name}`;
    return 'Pilih Kecamatan di Peta Bogor';
  };

  const showBackButton = selectedKecamatan !== null;

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-800 flex flex-col">
      <Header onHomeClick={() => setView('landing')} />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 min-h-[70vh] transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
                {showBackButton && (
                <button
                    onClick={handleBack}
                    className="mr-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Kembali"
                >
                    <ArrowLeftIcon className="w-6 h-6 text-emerald-700" />
                </button>
                )}
                <h1 className="text-2xl md:text-3xl font-bold text-emerald-800">{getTitle()}</h1>
            </div>
            {isAdminMode && !selectedKecamatan && (
                <label className="flex items-center cursor-pointer text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg hover:bg-gray-200 transition-colors border border-gray-200">
                    <input 
                        type="checkbox" 
                        checked={isMapEditMode} 
                        onChange={() => setIsMapEditMode(!isMapEditMode)} 
                        className="mr-2 accent-emerald-600 h-4 w-4" 
                    />
                    Mode Edit Peta
                </label>
            )}
          </div>
          
          <div className="transition-opacity duration-500 ease-in-out">
            {!currentKecamatanData ? (
              <BogorMap 
                data={bogorData} 
                onKecamatanSelect={handleKecamatanSelect} 
                customColors={config.districtColors}
                isEditMode={isAdminMode && isMapEditMode}
                onEditColor={(kecamatan) => openModal(
                    'district-config', 
                    'edit', 
                    { 
                        name: kecamatan.name,
                        color: config.districtColors[kecamatan.id] || '#cccccc',
                        path: kecamatan.path,
                        textPosition: kecamatan.textPosition
                    }, 
                    { kecamatanId: kecamatan.id }
                )}
              />
            ) : !currentKelurahanData ? (
              <KecamatanView 
                kecamatan={currentKecamatanData} 
                onKelurahanSelect={handleKelurahanSelect}
                isAdminMode={isAdminMode}
                onAdd={() => openModal('kelurahan', 'add', { name: '' }, { kecamatanId: currentKecamatanData.id })}
                onEdit={(kelurahan) => openModal('kelurahan', 'edit', kelurahan, { kecamatanId: currentKecamatanData.id, kelurahan })}
                onDelete={(kelurahan) => {
                  if (window.confirm(`Yakin ingin menghapus ${kelurahan.name}?`)) {
                    deleteKelurahan(currentKecamatanData.id, kelurahan.id);
                  }
                }}
              />
            ) : (
              <KelurahanView 
                kelurahan={currentKelurahanData}
                isAdminMode={isAdminMode}
                onAdd={() => openModal('place', 'add', { name: '', type: 'Local Attraction', description: '', images: [], contact: { phone: '', socialMedia: '' } }, { kecamatanId: currentKecamatanData.id, kelurahanId: currentKelurahanData.id })}
                onEdit={(place) => openModal('place', 'edit', place, { kecamatanId: currentKecamatanData.id, kelurahanId: currentKelurahanData.id, place })}
                onDelete={(place) => {
                  if (window.confirm(`Yakin ingin menghapus ${place.name}?`)) {
                    deletePlace(currentKecamatanData.id, currentKelurahanData.id, place.id);
                  }
                }}
              />
            )}
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} SindangBogor.com. Dibuat dengan ❤️ di Kota Hujan.</p>
        <div className="mt-2">
            <label className="flex items-center justify-center cursor-pointer">
                <span className="mr-2 text-sm font-medium">Mode Admin</span>
                <div className="relative">
                    <input type="checkbox" checked={isAdminMode} onChange={() => setIsAdminMode(!isAdminMode)} className="sr-only" />
                    <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${isAdminMode ? 'transform translate-x-6' : ''}`}></div>
                </div>
            </label>
        </div>
      </footer>
      <EditModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        onSave={handleSave}
        config={modalState}
      />
    </div>
  );
};

export default App;
