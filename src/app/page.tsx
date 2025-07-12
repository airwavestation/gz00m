'use client';

import { useState } from 'react';

export default function Home() {
  const [isStreamingOpen, setIsStreamingOpen] = useState(false);

  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'Silo';
          src: url('/Silo.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Silo Pixel';
          src: url('/Silo Pixel.ttf') format('truetype');
        }
      `}</style>
      
      <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ backgroundColor: '#1E1E1E', color: '#00FF00' }}>
        <div className="max-w-md w-full space-y-8 p-6 rounded-lg border-2" style={{ borderColor: '#00D200' }}>
          
          {/* Artist Name */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2" style={{ color: '#00FF00', fontFamily: 'Silo, monospace' }}>G ZOOM</h1>
            <p className="opacity-80" style={{ fontFamily: 'Silo Pixel, monospace' }}>Rave Scientist</p>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <a 
              href="https://befitting-octagon-390.notion.site/22109928af8a805cbaf5e5dd47457cd8" 
              target="_blank"
              className="flex items-center justify-center w-full font-semibold py-4 px-6 rounded-lg border-2 transition-all duration-200 hover:scale-105"
              style={{ 
                backgroundColor: '#7732D9', 
                color: '#00FF00',
                borderColor: '#7732D9',
                fontFamily: 'Silo Pixel, monospace'
              }}
            >
              Join AIRWAVE~STATION Waiting List
            </a>
            
            <a 
              href="https://gzoom.bandcamp.com/track/go-slo" 
              target="_blank"
              className="flex items-center justify-center w-full font-semibold py-4 px-6 rounded-lg border-2 transition-all duration-200 hover:scale-105"
              style={{ 
                backgroundColor: '#00D200', 
                color: '#1E1E1E',
                borderColor: '#00D200',
                fontFamily: 'Silo Pixel, monospace'
              }}
            >
              $1 = 333 streams
            </a>
            
            <a 
              href="https://www.instagram.com/gz00m/" 
              target="_blank"
              className="flex items-center justify-center w-full font-semibold py-4 px-6 rounded-lg border-2 transition-all duration-200 hover:scale-105"
              style={{ 
                backgroundColor: '#00D200', 
                color: '#1E1E1E',
                borderColor: '#00D200',
                fontFamily: 'Silo Pixel, monospace'
              }}
            >
              Instagram
            </a>
            
            <a 
              href="https://www.tiktok.com/@gz00m" 
              target="_blank"
              className="flex items-center justify-center w-full font-semibold py-4 px-6 rounded-lg border-2 transition-all duration-200 hover:scale-105"
              style={{ 
                backgroundColor: '#00D200', 
                color: '#1E1E1E',
                borderColor: '#00D200',
                fontFamily: 'Silo Pixel, monospace'
              }}
            >
              TikTok
            </a>

            {/* Streaming Dropdown */}
            <div className="w-full">
              <button
                onClick={() => setIsStreamingOpen(!isStreamingOpen)}
                className="flex items-center justify-center w-full font-semibold py-4 px-6 rounded-lg border-2 transition-all duration-200 hover:scale-105"
                style={{ 
                  backgroundColor: '#00D200', 
                  color: '#1E1E1E',
                  borderColor: '#00D200',
                  fontFamily: 'Silo Pixel, monospace'
                }}
              >
                Airwaves {isStreamingOpen ? '▲' : '▼'}
              </button>
              
              {isStreamingOpen && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <a 
                    href="https://www.youtube.com/@gz000m" 
                    target="_blank"
                    className="relative flex items-end justify-center p-2 rounded-lg border-2 transition-all duration-200 hover:scale-105 aspect-square overflow-hidden"
                    style={{ 
                      borderColor: '#00D200'
                    }}
                  >
                    <img src="/Youtube Portal gif.gif" alt="YouTube Portal" className="absolute inset-0 w-full h-full object-cover" />
                    <span className="relative z-10 text-sm font-bold px-3 py-1 rounded" style={{ color: '#00FF00', backgroundColor: '#1E1E1E', fontFamily: 'Silo Pixel, monospace' }}>YouTube</span>
                  </a>
                  
                  <a 
                    href="https://open.spotify.com/artist/125N85kRGoK1PXtPvClZDJ?si=2JtsnQLBSPilAouIf1Sx-g" 
                    target="_blank"
                    className="relative flex items-end justify-center p-2 rounded-lg border-2 transition-all duration-200 hover:scale-105 aspect-square overflow-hidden"
                    style={{ 
                      borderColor: '#00D200'
                    }}
                  >
                    <img src="/Spotify Portal gif.gif" alt="Spotify Portal" className="absolute inset-0 w-full h-full object-cover" />
                    <span className="relative z-10 text-sm font-bold px-3 py-1 rounded" style={{ color: '#00FF00', backgroundColor: '#1E1E1E', fontFamily: 'Silo Pixel, monospace' }}>Spotify</span>
                  </a>
                  
                  <a 
                    href="https://tidal.com/browse/artist/9330430?u" 
                    target="_blank"
                    className="relative flex items-end justify-center p-2 rounded-lg border-2 transition-all duration-200 hover:scale-105 aspect-square overflow-hidden"
                    style={{ 
                      borderColor: '#00D200'
                    }}
                  >
                    <img src="/Tidal Portal gif.gif" alt="Tidal Portal" className="absolute inset-0 w-full h-full object-cover" />
                    <span className="relative z-10 text-sm font-bold px-3 py-1 rounded" style={{ color: '#00FF00', backgroundColor: '#1E1E1E', fontFamily: 'Silo Pixel, monospace' }}>Tidal</span>
                  </a>
                  
                  <a 
                    href="https://music.apple.com/us/artist/g-zoom/1150703591" 
                    target="_blank"
                    className="relative flex items-end justify-center p-2 rounded-lg border-2 transition-all duration-200 hover:scale-105 aspect-square overflow-hidden"
                    style={{ 
                      borderColor: '#00D200'
                    }}
                  >
                    <img src="/Apple Music Portal gif.gif" alt="Apple Music Portal" className="absolute inset-0 w-full h-full object-cover" />
                    <span className="relative z-10 text-sm font-bold px-3 py-1 rounded" style={{ color: '#00FF00', backgroundColor: '#1E1E1E', fontFamily: 'Silo Pixel, monospace' }}>Apple Music</span>
                  </a>
                </div>
              )}
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center text-sm mt-8" style={{ color: '#00FF00', opacity: 0.7, fontFamily: 'Silo, monospace' }}>
            <p>AIRWAVE~STATION</p>
          </div>
          
        </div>
      </div>
    </>
  );
}