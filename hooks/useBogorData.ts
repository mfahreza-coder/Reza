
import { useState, useEffect, useCallback } from 'react';
import type { Kecamatan, Kelurahan, Place, PlaceType } from '../types';
import { BOGOR_DATA } from '../data/bogorData';

const LOCAL_STORAGE_KEY = 'sindangBogorData';

export const useBogorData = () => {
  const [data, setData] = useState<Kecamatan[]>(() => {
    try {
      const item = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      return item ? JSON.parse(item) : BOGOR_DATA;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return BOGOR_DATA;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [data]);

  const updateData = (updater: (draft: Kecamatan[]) => void) => {
    const newState = structuredClone(data);
    updater(newState);
    setData(newState);
  };
  
  // New function to update Kecamatan properties (Path, Text Position, etc)
  const updateKecamatan = useCallback((id: string, updatedData: Partial<Kecamatan>) => {
    updateData(draft => {
      const index = draft.findIndex(k => k.id === id);
      if (index !== -1) {
        draft[index] = { ...draft[index], ...updatedData };
      }
    });
  }, [data]);

  const addKelurahan = useCallback((kecamatanId: string, kelurahanName: string) => {
    updateData(draft => {
      const kecamatan = draft.find(k => k.id === kecamatanId);
      if (kecamatan) {
        kecamatan.kelurahan.push({
          id: `kel-${Date.now()}`,
          name: kelurahanName,
          places: [],
        });
      }
    });
  }, [data]);

  const updateKelurahan = useCallback((kecamatanId: string, updatedKelurahan: Kelurahan) => {
    updateData(draft => {
      const kecamatan = draft.find(k => k.id === kecamatanId);
      if (kecamatan) {
        const index = kecamatan.kelurahan.findIndex(kl => kl.id === updatedKelurahan.id);
        if (index !== -1) {
          kecamatan.kelurahan[index] = updatedKelurahan;
        }
      }
    });
  }, [data]);

  const deleteKelurahan = useCallback((kecamatanId: string, kelurahanId: string) => {
    updateData(draft => {
      const kecamatan = draft.find(k => k.id === kecamatanId);
      if (kecamatan) {
        kecamatan.kelurahan = kecamatan.kelurahan.filter(kl => kl.id !== kelurahanId);
      }
    });
  }, [data]);

  const addPlace = useCallback((kecamatanId: string, kelurahanId: string, newPlaceData: Omit<Place, 'id'>) => {
    updateData(draft => {
      const kecamatan = draft.find(k => k.id === kecamatanId);
      const kelurahan = kecamatan?.kelurahan.find(kl => kl.id === kelurahanId);
      if (kelurahan) {
        kelurahan.places.push({
          ...newPlaceData,
          id: `place-${Date.now()}`,
        });
      }
    });
  }, [data]);

  const updatePlace = useCallback((kecamatanId: string, kelurahanId: string, updatedPlace: Place) => {
    updateData(draft => {
        const kecamatan = draft.find(k => k.id === kecamatanId);
        const kelurahan = kecamatan?.kelurahan.find(kl => kl.id === kelurahanId);
        if (kelurahan) {
            const index = kelurahan.places.findIndex(p => p.id === updatedPlace.id);
            if (index !== -1) {
                kelurahan.places[index] = updatedPlace;
            }
        }
    });
  }, [data]);

  const deletePlace = useCallback((kecamatanId: string, kelurahanId: string, placeId: string) => {
    updateData(draft => {
        const kecamatan = draft.find(k => k.id === kecamatanId);
        const kelurahan = kecamatan?.kelurahan.find(kl => kl.id === kelurahanId);
        if (kelurahan) {
            kelurahan.places = kelurahan.places.filter(p => p.id !== placeId);
        }
    });
  }, [data]);


  return { bogorData: data, updateKecamatan, addKelurahan, updateKelurahan, deleteKelurahan, addPlace, updatePlace, deletePlace };
};
