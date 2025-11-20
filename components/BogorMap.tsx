
import React, { useState, useRef } from 'react';
import type { Kecamatan } from '../types';

interface BogorMapProps {
  data: Kecamatan[];
  onKecamatanSelect: (kecamatan: Kecamatan) => void;
  customColors: Record<string, string>;
  isEditMode?: boolean;
  onEditColor?: (kecamatan: Kecamatan) => void;
}

const BogorMap: React.FC<BogorMapProps> = ({ data, onKecamatanSelect, customColors, isEditMode, onEditColor }) => {
  const [hoverCoord, setHoverCoord] = useState<{x: number, y: number} | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleInteraction = (kecamatan: Kecamatan) => {
    if (isEditMode && onEditColor) {
      onEditColor(kecamatan);
    } else {
      onKecamatanSelect(kecamatan);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
      if (!isEditMode || !svgRef.current) return;
      
      const CTM = svgRef.current.getScreenCTM();
      if (CTM) {
          const x = (e.clientX - CTM.e) / CTM.a;
          const y = (e.clientY - CTM.f) / CTM.d;
          setHoverCoord({ x: Math.round(x), y: Math.round(y) });
      }
  };

  return (
    <div className="w-full flex justify-center items-center relative">
        <svg 
            ref={svgRef}
            viewBox="0 0 600 600" 
            className="w-full max-w-2xl" 
            aria-label="Peta Kota Bogor"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoverCoord(null)}
        >
          <desc>Peta interaktif kecamatan di Kota Bogor.</desc>
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {data.map((kecamatan) => {
            const hasCustomColor = !!customColors[kecamatan.id];
            const customFill = customColors[kecamatan.id];
            
            return (
              <g 
                key={kecamatan.id}
                transform={kecamatan.transform}
                onClick={() => handleInteraction(kecamatan)}
                className={`cursor-pointer group ${isEditMode ? 'hover:opacity-80' : ''}`}
                role="button"
                aria-label={`${isEditMode ? 'Ubah warna' : 'Pilih'} kecamatan ${kecamatan.name}`}
                filter="url(#dropShadow)"
              >
                <path
                  d={kecamatan.path}
                  style={hasCustomColor ? { fill: customFill } : undefined}
                  className={`${!hasCustomColor ? kecamatan.colorClass : ''} stroke-white stroke-[3px] transition-all duration-300`}
                />
                <text
                  x={kecamatan.textPosition.x}
                  y={kecamatan.textPosition.y}
                  textAnchor="middle"
                  className="font-bold text-sm fill-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] pointer-events-none select-none uppercase tracking-wide"
                >
                  {kecamatan.name.split(' ')[0]}
                </text>
                 <text
                  x={kecamatan.textPosition.x}
                  y={parseInt(kecamatan.textPosition.y) + 15}
                  textAnchor="middle"
                  className="font-bold text-sm fill-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] pointer-events-none select-none uppercase tracking-wide"
                >
                  {kecamatan.name.split(' ')[1]}
                </text>
              </g>
            );
          })}
        </svg>
        {isEditMode && (
            <div className="absolute top-0 left-0 flex flex-col space-y-2 pointer-events-none">
                <div className="bg-black/70 text-white px-3 py-1 rounded text-sm shadow-md backdrop-blur-sm">
                    Mode Edit Peta Aktif
                </div>
                {hoverCoord && (
                    <div className="bg-emerald-600/90 text-white px-3 py-2 rounded text-xs font-mono border border-emerald-400 shadow-lg backdrop-blur-sm">
                        <div className="font-bold mb-1 border-b border-white/30 pb-1">Koordinat Kursor</div>
                        <div className="grid grid-cols-2 gap-x-4">
                            <span>X: {hoverCoord.x}</span>
                            <span>Y: {hoverCoord.y}</span>
                        </div>
                    </div>
                )}
            </div>
        )}
    </div>
  );
};

export default BogorMap;
