
import { useState, useEffect } from 'react';

const CONFIG_STORAGE_KEY = 'sindangBogorConfig';

interface AppConfig {
  landingPageImage: string;
  storyImage: string;
  districtColors: Record<string, string>; // id -> hex color
}

const DEFAULT_CONFIG: AppConfig = {
  // Using a high-quality nature image (misty lush green forest vibe suitable for Bogor)
  landingPageImage: 'https://images.unsplash.com/photo-1634894030095-539c4a0d49e6?q=80&w=2832&auto=format&fit=crop',
  storyImage: 'https://picsum.photos/seed/bogor-history/1200/600',
  districtColors: {},
};

export const useAppConfig = () => {
  const [config, setConfig] = useState<AppConfig>(() => {
    try {
      const item = window.localStorage.getItem(CONFIG_STORAGE_KEY);
      return item ? JSON.parse(item) : DEFAULT_CONFIG;
    } catch (error) {
      console.error("Error reading config from localStorage", error);
      return DEFAULT_CONFIG;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
    } catch (error) {
      console.error("Error writing config to localStorage", error);
    }
  }, [config]);

  const setLandingPageImage = (url: string) => {
    setConfig(prev => ({ ...prev, landingPageImage: url }));
  };

  const setStoryImage = (url: string) => {
    setConfig(prev => ({ ...prev, storyImage: url }));
  };

  const setDistrictColor = (id: string, color: string) => {
    setConfig(prev => ({
      ...prev,
      districtColors: {
        ...prev.districtColors,
        [id]: color
      }
    }));
  };

  const resetDistrictColor = (id: string) => {
    setConfig(prev => {
      const newColors = { ...prev.districtColors };
      delete newColors[id];
      return { ...prev, districtColors: newColors };
    });
  };

  return {
    config,
    setLandingPageImage,
    setStoryImage,
    setDistrictColor,
    resetDistrictColor
  };
};
