export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ backgroundColor: '#1E1E1E', color: '#00FF00' }}>
      <div className="max-w-md w-full space-y-8 p-6 rounded-lg border-2" style={{ borderColor: '#00D200' }}>
        
        {/* Artist Name */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#00FF00' }}>G ZOOM</h1>
          <p className="opacity-80">Rave Scientist</p>
        </div>
        
        {/* Links */}
        <div className="space-y-4">
          <a 
            href="https://www.instagram.com/gz00m/" 
            target="_blank"
            className="block w-full font-semibold py-4 px-6 rounded-lg text-center border-2 transition-all duration-200 hover:scale-105"
            style={{ 
              backgroundColor: '#00D200', 
              color: '#1E1E1E',
              borderColor: '#00D200'
            }}
          >
            Instagram
          </a>
          
          <a 
            href="https://www.tiktok.com/@gz00m" 
            target="_blank"
            className="block w-full font-semibold py-4 px-6 rounded-lg text-center border-2 transition-all duration-200 hover:scale-105"
            style={{ 
              backgroundColor: '#00D200', 
              color: '#1E1E1E',
              borderColor: '#00D200'
            }}
          >
            TikTok
          </a>
          
          <a 
            href="https://www.youtube.com/@gz000m" 
            target="_blank"
            className="block w-full font-semibold py-4 px-6 rounded-lg text-center border-2 transition-all duration-200 hover:scale-105"
            style={{ 
              backgroundColor: '#00D200', 
              color: '#1E1E1E',
              borderColor: '#00D200'
            }}
          >
            YouTube
          </a>
          
          <a 
            href="https://open.spotify.com/artist/125N85kRGoK1PXtPvClZDJ?si=2JtsnQLBSPilAouIf1Sx-g" 
            target="_blank"
            className="block w-full font-semibold py-4 px-6 rounded-lg text-center border-2 transition-all duration-200 hover:scale-105"
            style={{ 
              backgroundColor: '#00D200', 
              color: '#1E1E1E',
              borderColor: '#00D200'
            }}
          >
            Spotify
          </a>
          
          <a 
            href="https://tidal.com/browse/artist/9330430?u" 
            target="_blank"
            className="block w-full font-semibold py-4 px-6 rounded-lg text-center border-2 transition-all duration-200 hover:scale-105"
            style={{ 
              backgroundColor: '#00D200', 
              color: '#1E1E1E',
              borderColor: '#00D200'
            }}
          >
            Tidal
          </a>
          
          <a 
            href="https://music.apple.com/us/artist/g-zoom/1150703591" 
            target="_blank"
            className="block w-full font-semibold py-4 px-6 rounded-lg text-center border-2 transition-all duration-200 hover:scale-105"
            style={{ 
              backgroundColor: '#00D200', 
              color: '#1E1E1E',
              borderColor: '#00D200'
            }}
          >
            Apple Music
          </a>
        </div>
        
        {/* Footer */}
        <div className="text-center text-sm mt-8" style={{ color: '#00FF00', opacity: 0.7 }}>
          <p>© 2025 G ZOOM</p>
        </div>
        
      </div>
    </div>
  );
}
