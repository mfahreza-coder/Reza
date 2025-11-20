
export type PlaceType = 'Culinary Spot' | 'Local Attraction' | 'Educational Site';

export interface Place {
  id: string;
  name: string;
  type: PlaceType;
  description: string;
  images: string[];
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
