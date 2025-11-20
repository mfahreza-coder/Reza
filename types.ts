
export type PlaceType = 'Culinary Spot' | 'Local Attraction' | 'Educational Site';

export interface Place {
  id: string;
  name: string;
  type: PlaceType;
  description: string;
  images: string[];
  address?: string; // New field for physical address
  mapUrl?: string;  // New field for Google Maps link
  contact?: {
    phone?: string;
    socialMedia?: string;
  };
}

export interface Kelurahan {
  id: string;
  name: string;
  places: Place[];
}

export interface Kecamatan {
  id: string;
  name: string;
  path: string;
  transform: string;
  textPosition: { x: string; y: string };
  colorClass: string;
  kelurahan: Kelurahan[];
}