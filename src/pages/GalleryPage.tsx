import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  Settings,
  Heart,
  Share2,
  Download
} from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

export const GalleryPage: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [transitionSpeed, setTransitionSpeed] = useState(5000); // 5 seconds
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());
  const [showControls, setShowControls] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // All photos from your Google Drive folder
  const photos: Photo[] = [
    { id: 'profile1', src: '/gallery/profile photo1.jpeg', alt: 'James Mukoma - AI Expert Profile', category: 'Profile', title: 'AI Visionary' },
    { id: 'profile2', src: '/gallery/profile photo2.jpeg', alt: 'James Mukoma - Professional Portrait', category: 'Profile', title: 'Tech Innovator' },
    { id: 'profile3', src: '/gallery/profile photo3.jpeg', alt: 'James Mukoma - AI Solutions Architect', category: 'Profile', title: 'Solutions Architect' },
    { id: 'profile4', src: '/gallery/profile4.jpeg', alt: 'James Mukoma - Google Cloud Expert', category: 'Profile', title: 'Cloud Expert' },
    { id: 'profile5', src: '/gallery/profile5.jpeg', alt: 'James Mukoma - AI Research', category: 'Profile', title: 'AI Researcher' },
    { id: 'profile6', src: '/gallery/profile6.jpeg', alt: 'James Mukoma - Technology Integration', category: 'Profile', title: 'Tech Integration' },
    { id: 'profile7', src: '/gallery/profile7.jpeg', alt: 'James Mukoma - Innovation Leader', category: 'Profile', title: 'Innovation Leader' },
    { id: 'project1', src: '/gallery/pg1.jpeg', alt: 'AI Project Showcase 1', category: 'Projects', title: 'Environmental AI' },
    { id: 'project2', src: '/gallery/pg2.jpeg', alt: 'AI Project Showcase 2', category: 'Projects', title: 'GeoAI Platform' },
    { id: 'project3', src: '/gallery/pg4.jpeg', alt: 'AI Project Showcase 3', category: 'Projects', title: 'Machine Learning' },
    { id: 'project4', src: '/gallery/pg5.jpeg', alt: 'AI Project Showcase 4', category: 'Projects', title: 'AI Automation' },
    { id: 'project5', src: '/gallery/pg6.jpeg', alt: 'AI Project Showcase 5', category: 'Projects', title: 'Data Intelligence' },
    { id: 'project6', src: '/gallery/pg7.jpeg', alt: 'AI Project Showcase 6', category: 'Projects', title: 'Smart Systems' },
    { id: 'project7', src: '/gallery/pg8.jpeg', alt: 'AI Project Showcase 7', category: 'Projects', title: 'Neural Networks' },
    { id: 'project8', src: '/gallery/pg9.jpeg', alt: 'AI Project Showcase 8', category: 'Projects', title: 'Deep Learning' },
    { id: 'project9', src: '/gallery/pg10.jpeg', alt: 'AI Project Showcase 9', category: 'Projects', title: 'Computer Vision' },
    { id: 'project10', src: '/gallery/pg11.jpeg', alt: 'AI Project Showcase 10', category: 'Projects', title: 'Predictive Analytics' },
    { id: 'project11', src: '/gallery/pg12.jpeg', alt: 'AI Project Showcase 11', category: 'Projects', title: 'AI Robotics' },
    { id: 'project12', src: '/gallery/pg13.jpeg', alt: 'AI Project Showcase 12', category: 'Projects', title: 'Intelligent Systems' },
    { id: 'project13', src: '/gallery/pg14.jpeg', alt: 'AI Project Showcase 13', category: 'Projects', title: 'Quantum Computing' },
    { id: 'project14', src: '/gallery/pg15.jpeg', alt: 'AI Project Showcase 14', category: 'Projects', title: 'AI Innovation' },
    { id: 'project15', src: '/gallery/pg16.jpeg', alt: 'AI Project Showcase 15', category: 'Projects', title: 'Future Technology' },
    { id: 'project16', src: '/gallery/pg17.jpeg', alt: 'AI Project Showcase 16', category: 'Projects', title: 'Smart Automation' },
    { id: 'project17', src: '/gallery/pg18.jpeg', alt: 'AI Project Showcase 17', category: 'Projects', title: 'Digital Transformation' },
    { id: 'project18', src: '/gallery/pg19.jpeg', alt: 'AI Project Showcase 18', category: 'Projects', title: 'AI Solutions' },
    { id: 'project19', src: '/gallery/pg20.jpeg', alt: 'AI Project Showcase 19', category: 'Projects', title: 'Tech Excellence' },
    { id: 'theme1', src: '/gallery/thememain.jpeg', alt: 'AURA Intelligence Theme', category: 'Themes', title: 'AURA Intelligence' },
    { id: 'theme2', src: '/gallery/theme1.jpeg', alt: 'AI Innovation Theme', category: 'Themes', title: 'AI Innovation' },
    { id: 'theme3', src: '/gallery/theme2.jpeg', alt: 'Technology Integration Theme', category: 'Themes', title: 'Tech Integration' },
    { id: 'theme4', src: '/gallery/theme3.jpeg', alt: 'Future Technology Theme', category: 'Themes', title: 'Future Tech' },
    { id: 'theme5', src: '/gallery/theme4.jpeg', alt: 'Digital Transformation Theme', category: 'Themes', title: 'Digital Transformation' },
    { id: 'theme6', src: '/gallery/theme5unique.jpeg', alt: 'Unique Theme', category: 'Themes', title: 'Unique Vision' },
    { id: 'showcase1', src: '/gallery/s1.jpeg', alt: 'AI Showcase 1', category: 'Showcase', title: 'AI Showcase' },
    { id: 'showcase2', src: '/gallery/s2.jpeg', alt: 'AI Showcase 2', category: 'Showcase', title: 'Tech Excellence' },
    { id: 'showcase3', src: '/gallery/s3.jpeg', alt: 'AI Showcase 3', category: 'Showcase', title: 'Innovation Hub' },
    { id: 'showcase4', src: '/gallery/s4.jpeg', alt: 'AI Showcase 4', category: 'Showcase', title: 'Future Vision' }
  ];

  const currentPhoto = photos[currentPhotoIndex];

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      }, transitionSpeed);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, transitionSpeed, photos.length]);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleLike = (photoId: string) => {
    const newLikedPhotos = new Set(likedPhotos);
    if (newLikedPhotos.has(photoId)) {
      newLikedPhotos.delete(photoId);
    } else {
      newLikedPhotos.add(photoId);
    }
    setLikedPhotos(newLikedPhotos);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const toggleMuted = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={`min-h-screen pt-16 ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
      {/* Header */}
      {!isFullscreen && (
        <section className="py-12 bg-gradient-to-r from-deep-blue via-dark-gray to-deep-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-text-light">
                AI <span className="aura-gradient">Gallery</span>
              </h1>
              <p className="text-xl text-text-gray max-w-3xl mx-auto">
                Experience the future of artificial intelligence through our curated collection of images, 
                showcasing innovation, technology, and the evolution of AI solutions.
              </p>
              <div className="flex items-center justify-center space-x-4 text-text-gray">
                <span className="text-sm">Total Photos: {photos.length}</span>
                <span className="text-sm">•</span>
                <span className="text-sm">Current: {currentPhotoIndex + 1}</span>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Slideshow */}
      <section className={`${isFullscreen ? 'h-screen' : 'py-12'}`}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Slideshow Container */}
          <div className="relative">
            <motion.div
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep-blue to-dark-gray shadow-2xl ${
                isFullscreen ? 'h-screen' : 'aspect-video'
              }`}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {/* Main Photo */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhotoIndex}
                  initial={{ opacity: 0, scale: 1.1, rotateX: 10 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateX: -10 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('Image failed to load:', currentPhoto.src);
                      // Fallback to next image
                      nextPhoto();
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  
                  {/* Photo Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-8 left-8 right-8 text-white"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">{currentPhoto.title}</h2>
                        <p className="text-lg opacity-90">{currentPhoto.category} • Photo {currentPhotoIndex + 1} of {photos.length}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleLike(currentPhoto.id)}
                          className={`p-3 rounded-full transition-all duration-300 ${
                            likedPhotos.has(currentPhoto.id)
                              ? 'bg-red-500 text-white'
                              : 'bg-black bg-opacity-50 text-white hover:bg-red-500'
                          }`}
                        >
                          <Heart className={`w-6 h-6 ${likedPhotos.has(currentPhoto.id) ? 'fill-current' : ''}`} />
                        </button>
                        <button className="p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-accent-teal transition-colors">
                          <Share2 className="w-6 h-6" />
                        </button>
                        <button className="p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-accent-teal transition-colors">
                          <Download className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <AnimatePresence>
                {showControls && (
                  <>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onClick={prevPhoto}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-accent-teal transition-all duration-300 group"
                    >
                      <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    </motion.button>
                    
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      onClick={nextPhoto}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-accent-teal transition-all duration-300 group"
                    >
                      <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    </motion.button>
                  </>
                )}
              </AnimatePresence>

              {/* Control Bar */}
              <AnimatePresence>
                {showControls && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute top-4 right-4 flex items-center space-x-2"
                  >
                    <button
                      onClick={togglePlay}
                      className="p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-accent-teal transition-all duration-300"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={toggleFullscreen}
                      className="p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-accent-teal transition-all duration-300"
                    >
                      {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-30">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-teal to-accent-orange"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: transitionSpeed / 1000, ease: "linear" }}
                  key={currentPhotoIndex}
                />
              </div>
            </motion.div>

            {/* Thumbnail Strip */}
            {!isFullscreen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <div className="flex space-x-4 overflow-x-auto pb-4">
                  {photos.map((photo, index) => (
                    <motion.button
                      key={photo.id}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                        index === currentPhotoIndex
                          ? 'ring-4 ring-accent-teal scale-110'
                          : 'hover:scale-105 opacity-70 hover:opacity-100'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                      />
                      {index === currentPhotoIndex && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-accent-teal bg-opacity-30"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Settings Panel */}
            {!isFullscreen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-8 flex items-center justify-center space-x-6"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-text-gray">Speed:</span>
                  <input
                    type="range"
                    min="2000"
                    max="10000"
                    value={transitionSpeed}
                    onChange={(e) => setTransitionSpeed(Number(e.target.value))}
                    className="w-32 accent-accent-teal"
                  />
                  <span className="text-text-gray text-sm">{transitionSpeed / 1000}s</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleMuted}
                    className="p-2 rounded-full bg-gray-700 text-text-gray hover:bg-accent-teal hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  
                  <button
                    onClick={() => setCurrentPhotoIndex(0)}
                    className="p-2 rounded-full bg-gray-700 text-text-gray hover:bg-accent-teal hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Counter */}
      {!isFullscreen && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black bg-opacity-50 backdrop-blur-sm text-white px-6 py-3 rounded-full"
          >
            <span className="text-sm font-medium">
              {currentPhotoIndex + 1} / {photos.length}
            </span>
          </motion.div>
        </div>
      )}
    </div>
  );
};