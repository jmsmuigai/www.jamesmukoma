import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Download,
  Share2,
  Heart,
  Eye,
  Calendar,
  User,
  Camera,
  Sparkles,
  Brain,
  Zap
} from 'lucide-react';
import { WatermarkedImage, GalleryWatermark } from '../components/ui/WatermarkedImage';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'profile' | 'project' | 'theme' | 'showcase';
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

export const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set());

  const galleryImages: GalleryImage[] = [
    {
      id: 'profile1',
      src: '/gallery/profile photo1.jpeg',
      alt: 'James Mukoma - AI Expert Profile Photo',
      category: 'profile',
      title: 'AI Visionary',
      description: 'James Mukoma, Founder & Lead AI Architect, showcasing cutting-edge technology integration.',
      date: '2024-10-10',
      tags: ['AI Expert', 'Technology', 'Innovation', 'Leadership'],
      featured: true
    },
    {
      id: 'profile2',
      src: '/gallery/profile photo2.jpeg',
      alt: 'James Mukoma - Professional Portrait',
      category: 'profile',
      title: 'Tech Innovator',
      description: 'Professional portrait highlighting expertise in GeoAI and machine learning technologies.',
      date: '2024-10-10',
      tags: ['Professional', 'GeoAI', 'Machine Learning', 'Innovation']
    },
    {
      id: 'profile3',
      src: '/gallery/profile photo3.jpeg',
      alt: 'James Mukoma - AI Solutions Architect',
      category: 'profile',
      title: 'Solutions Architect',
      description: 'Expert in developing intelligent systems for environmental monitoring and humanitarian aid.',
      date: '2024-10-10',
      tags: ['Solutions', 'Environmental', 'Humanitarian', 'AI Systems']
    },
    {
      id: 'profile4',
      src: '/gallery/profile4.jpeg',
      alt: 'James Mukoma - Google Cloud Expert',
      category: 'profile',
      title: 'Cloud Expert',
      description: 'Specialized in Google Cloud technologies and ethical AI implementation.',
      date: '2024-10-10',
      tags: ['Google Cloud', 'Ethical AI', 'Technology', 'Expertise']
    },
    {
      id: 'profile5',
      src: '/gallery/profile5.jpeg',
      alt: 'James Mukoma - AI Research',
      category: 'profile',
      title: 'AI Researcher',
      description: 'Conducting research in advanced AI models for predictive environmental monitoring.',
      date: '2024-10-10',
      tags: ['Research', 'Predictive', 'Environmental', 'AI Models']
    },
    {
      id: 'profile6',
      src: '/gallery/profile6.jpeg',
      alt: 'James Mukoma - Technology Integration',
      category: 'profile',
      title: 'Tech Integration',
      description: 'Demonstrating seamless integration of AI technologies in real-world applications.',
      date: '2024-10-10',
      tags: ['Integration', 'Real-world', 'Applications', 'Technology']
    },
    {
      id: 'profile7',
      src: '/gallery/profile7.jpeg',
      alt: 'James Mukoma - Innovation Leader',
      category: 'profile',
      title: 'Innovation Leader',
      description: 'Leading innovation in GeoAI and environmental monitoring solutions.',
      date: '2024-10-10',
      tags: ['Leadership', 'Innovation', 'GeoAI', 'Monitoring']
    },
    {
      id: 'project1',
      src: '/gallery/pg1.jpeg',
      alt: 'AI Project Showcase 1',
      category: 'project',
      title: 'Environmental AI',
      description: 'Advanced AI system for environmental monitoring and data analysis.',
      date: '2024-10-10',
      tags: ['Environmental', 'Monitoring', 'Data Analysis', 'AI System']
    },
    {
      id: 'project2',
      src: '/gallery/pg2.jpeg',
      alt: 'AI Project Showcase 2',
      category: 'project',
      title: 'GeoAI Platform',
      description: 'Geospatial AI platform for real-time environmental data processing.',
      date: '2024-10-10',
      tags: ['GeoAI', 'Geospatial', 'Real-time', 'Processing']
    },
    {
      id: 'project3',
      src: '/gallery/pg4.jpeg',
      alt: 'AI Project Showcase 3',
      category: 'project',
      title: 'Machine Learning',
      description: 'Advanced machine learning algorithms for predictive analysis.',
      date: '2024-10-10',
      tags: ['Machine Learning', 'Algorithms', 'Predictive', 'Analysis']
    },
    {
      id: 'project4',
      src: '/gallery/pg5.jpeg',
      alt: 'AI Project Showcase 4',
      category: 'project',
      title: 'AI Automation',
      description: 'Automated systems for intelligent decision-making processes.',
      date: '2024-10-10',
      tags: ['Automation', 'Intelligent', 'Decision-making', 'Processes']
    },
    {
      id: 'project5',
      src: '/gallery/pg6.jpeg',
      alt: 'AI Project Showcase 5',
      category: 'project',
      title: 'Data Intelligence',
      description: 'Transforming raw data into actionable intelligence through AI.',
      date: '2024-10-10',
      tags: ['Data', 'Intelligence', 'Actionable', 'Transformation']
    },
    {
      id: 'theme1',
      src: '/gallery/thememain.jpeg',
      alt: 'AURA Intelligence Theme',
      category: 'theme',
      title: 'AURA Intelligence',
      description: 'The core theme representing our vision for AI-powered solutions.',
      date: '2024-10-10',
      tags: ['AURA', 'Intelligence', 'Vision', 'AI Solutions'],
      featured: true
    },
    {
      id: 'theme2',
      src: '/gallery/theme1.jpeg',
      alt: 'AI Innovation Theme',
      category: 'theme',
      title: 'AI Innovation',
      description: 'Representing the cutting-edge innovation in artificial intelligence.',
      date: '2024-10-10',
      tags: ['Innovation', 'Cutting-edge', 'Artificial Intelligence', 'Technology']
    },
    {
      id: 'theme3',
      src: '/gallery/theme2.jpeg',
      alt: 'Technology Integration Theme',
      category: 'theme',
      title: 'Tech Integration',
      description: 'Seamless integration of AI technologies across different domains.',
      date: '2024-10-10',
      tags: ['Integration', 'Technologies', 'Domains', 'Seamless']
    },
    {
      id: 'theme4',
      src: '/gallery/theme3.jpeg',
      alt: 'Future Technology Theme',
      category: 'theme',
      title: 'Future Tech',
      description: 'Envisioning the future of technology with AI at its core.',
      date: '2024-10-10',
      tags: ['Future', 'Technology', 'Envisioning', 'AI Core']
    },
    {
      id: 'theme5',
      src: '/gallery/theme4.jpeg',
      alt: 'Digital Transformation Theme',
      category: 'theme',
      title: 'Digital Transformation',
      description: 'Leading organizations through digital transformation with AI.',
      date: '2024-10-10',
      tags: ['Digital', 'Transformation', 'Organizations', 'Leading']
    },
    {
      id: 'showcase1',
      src: '/gallery/s1.jpeg',
      alt: 'AI Showcase 1',
      category: 'showcase',
      title: 'AI Showcase',
      description: 'Demonstrating the power and potential of artificial intelligence.',
      date: '2024-10-10',
      tags: ['Showcase', 'Power', 'Potential', 'Demonstration']
    },
    {
      id: 'showcase2',
      src: '/gallery/s2.jpeg',
      alt: 'AI Showcase 2',
      category: 'showcase',
      title: 'Tech Excellence',
      description: 'Showcasing excellence in technology implementation and innovation.',
      date: '2024-10-10',
      tags: ['Excellence', 'Implementation', 'Innovation', 'Technology']
    },
    {
      id: 'showcase3',
      src: '/gallery/s3.jpeg',
      alt: 'AI Showcase 3',
      category: 'showcase',
      title: 'Innovation Hub',
      description: 'The hub of innovation where ideas become reality through AI.',
      date: '2024-10-10',
      tags: ['Hub', 'Ideas', 'Reality', 'Innovation']
    },
    {
      id: 'showcase4',
      src: '/gallery/s4.jpeg',
      alt: 'AI Showcase 4',
      category: 'showcase',
      title: 'Future Vision',
      description: 'Envisioning a future powered by intelligent technology solutions.',
      date: '2024-10-10',
      tags: ['Vision', 'Future', 'Intelligent', 'Solutions']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos', icon: Grid, count: galleryImages.length },
    { id: 'profile', label: 'Profile', icon: User, count: galleryImages.filter(img => img.category === 'profile').length },
    { id: 'project', label: 'Projects', icon: Brain, count: galleryImages.filter(img => img.category === 'project').length },
    { id: 'theme', label: 'Themes', icon: Sparkles, count: galleryImages.filter(img => img.category === 'theme').length },
    { id: 'showcase', label: 'Showcase', icon: Zap, count: galleryImages.filter(img => img.category === 'showcase').length }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleLike = (imageId: string) => {
    const newLikedImages = new Set(likedImages);
    if (newLikedImages.has(imageId)) {
      newLikedImages.delete(imageId);
    } else {
      newLikedImages.add(imageId);
    }
    setLikedImages(newLikedImages);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'profile': return User;
      case 'project': return Brain;
      case 'theme': return Sparkles;
      case 'showcase': return Zap;
      default: return Camera;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
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
              Explore the world of artificial intelligence through our curated collection of images, 
              showcasing innovation, technology, and the future of AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-dark-gray bg-opacity-30 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-gray w-5 h-5" />
              <input
                type="text"
                placeholder="Search photos, tags, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-dark-gray border border-gray-700 rounded-xl text-text-light placeholder-text-gray focus:outline-none focus:border-accent-teal focus:ring-2 focus:ring-accent-teal focus:ring-opacity-20"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-accent-teal text-deep-blue'
                        : 'bg-dark-gray text-text-gray hover:bg-gray-700 hover:text-text-light'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{category.label}</span>
                    <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl transition-colors ${
                  viewMode === 'grid' ? 'bg-accent-teal text-deep-blue' : 'bg-dark-gray text-text-gray hover:bg-gray-700'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl transition-colors ${
                  viewMode === 'list' ? 'bg-accent-teal text-deep-blue' : 'bg-dark-gray text-text-gray hover:bg-gray-700'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => {
                const CategoryIcon = getCategoryIcon(image.category);
                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="card overflow-hidden cursor-pointer"
                         onClick={() => setSelectedImage(image)}>
                      <div className="relative aspect-square overflow-hidden">
                        <GalleryWatermark
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <CategoryIcon className="w-4 h-4 text-accent-teal" />
                                <span className="text-xs font-medium text-accent-teal uppercase tracking-wider">
                                  {image.category}
                                </span>
                              </div>
                              {image.featured && (
                                <div className="bg-accent-orange text-white px-2 py-1 rounded-full text-xs font-bold">
                                  Featured
                                </div>
                              )}
                            </div>
                            <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                            <p className="text-sm text-gray-300 line-clamp-2">{image.description}</p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLike(image.id);
                            }}
                            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                              likedImages.has(image.id)
                                ? 'bg-red-500 text-white'
                                : 'bg-black bg-opacity-50 text-white hover:bg-red-500'
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
                          </button>
                          <button className="p-2 rounded-full backdrop-blur-sm bg-black bg-opacity-50 text-white hover:bg-accent-teal transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-text-light">{image.title}</h3>
                          <span className="text-xs text-text-gray">{image.date}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {image.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs bg-accent-teal bg-opacity-20 text-accent-teal px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                          {image.tags.length > 3 && (
                            <span className="text-xs text-text-gray">+{image.tags.length - 3}</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm text-text-gray">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>View</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{image.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredImages.map((image, index) => {
                const CategoryIcon = getCategoryIcon(image.category);
                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="flex">
                      <div className="w-32 h-32 flex-shrink-0">
                        <GalleryWatermark
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <CategoryIcon className="w-4 h-4 text-accent-teal" />
                              <span className="text-xs font-medium text-accent-teal uppercase tracking-wider">
                                {image.category}
                              </span>
                              {image.featured && (
                                <span className="bg-accent-orange text-white px-2 py-1 rounded-full text-xs font-bold">
                                  Featured
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-text-light mb-2">{image.title}</h3>
                            <p className="text-text-gray mb-4">{image.description}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleLike(image.id);
                              }}
                              className={`p-2 rounded-full transition-colors ${
                                likedImages.has(image.id)
                                  ? 'bg-red-500 text-white'
                                  : 'bg-gray-700 text-text-gray hover:bg-red-500 hover:text-white'
                              }`}
                            >
                              <Heart className={`w-4 h-4 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
                            </button>
                            <button className="p-2 rounded-full bg-gray-700 text-text-gray hover:bg-accent-teal hover:text-white transition-colors">
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {image.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-accent-teal bg-opacity-20 text-accent-teal px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-text-gray">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{image.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>Click to view</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-text-gray mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text-light mb-2">No photos found</h3>
              <p className="text-text-gray">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-6xl max-h-[90vh] bg-deep-blue rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-accent-teal transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <WatermarkedImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[60vh] object-contain"
                  watermark="AURA Intelligence Gallery"
                  watermarkPosition="bottom-right"
                  watermarkOpacity={0.5}
                />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        {React.createElement(getCategoryIcon(selectedImage.category), { 
                          className: "w-5 h-5 text-accent-teal" 
                        })}
                        <span className="text-sm font-medium text-accent-teal uppercase tracking-wider">
                          {selectedImage.category}
                        </span>
                        {selectedImage.featured && (
                          <span className="bg-accent-orange text-white px-2 py-1 rounded-full text-xs font-bold">
                            Featured
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold text-text-light mb-2">{selectedImage.title}</h2>
                      <p className="text-text-gray mb-4">{selectedImage.description}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleLike(selectedImage.id)}
                        className={`p-3 rounded-full transition-colors ${
                          likedImages.has(selectedImage.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-700 text-text-gray hover:bg-red-500 hover:text-white'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${likedImages.has(selectedImage.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-3 rounded-full bg-gray-700 text-text-gray hover:bg-accent-teal hover:text-white transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                      <button className="p-3 rounded-full bg-gray-700 text-text-gray hover:bg-accent-teal hover:text-white transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedImage.tags.map((tag) => (
                      <span key={tag} className="text-sm bg-accent-teal bg-opacity-20 text-accent-teal px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-text-gray">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Uploaded: {selectedImage.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
