import React from 'react';
import { motion } from 'framer-motion';

interface WatermarkedImageProps {
  src: string;
  alt: string;
  className?: string;
  watermark?: string;
  watermarkPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'center';
  watermarkOpacity?: number;
  showWatermark?: boolean;
  [key: string]: any;
}

export const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
  src,
  alt,
  className = '',
  watermark = 'AURA Intelligence',
  watermarkPosition = 'bottom-right',
  watermarkOpacity = 0.7,
  showWatermark = true,
  ...props
}) => {
  const getWatermarkPosition = () => {
    switch (watermarkPosition) {
      case 'bottom-right':
        return 'bottom-2 right-2';
      case 'bottom-left':
        return 'bottom-2 left-2';
      case 'top-right':
        return 'top-2 right-2';
      case 'top-left':
        return 'top-2 left-2';
      case 'center':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      default:
        return 'bottom-2 right-2';
    }
  };

  const getWatermarkRotation = () => {
    switch (watermarkPosition) {
      case 'center':
        return '-rotate-12';
      default:
        return '';
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        {...props}
      />
      
      {showWatermark && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: watermarkOpacity }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`absolute ${getWatermarkPosition()} pointer-events-none`}
        >
          <div className={`${getWatermarkRotation()} backdrop-blur-sm bg-black bg-opacity-30 px-3 py-1 rounded-full`}>
            <span className="text-xs font-medium text-white tracking-wider">
              {watermark}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Specialized watermarks for different use cases
export const ProfileWatermark: React.FC<Omit<WatermarkedImageProps, 'watermark'>> = (props) => (
  <WatermarkedImage 
    {...props} 
    watermark="James Mukoma | AURA Intelligence"
    watermarkPosition="bottom-right"
    watermarkOpacity={0.6}
  />
);

export const ProjectWatermark: React.FC<Omit<WatermarkedImageProps, 'watermark'>> = (props) => (
  <WatermarkedImage 
    {...props} 
    watermark="AURA Intelligence Project"
    watermarkPosition="bottom-left"
    watermarkOpacity={0.5}
  />
);

export const GalleryWatermark: React.FC<Omit<WatermarkedImageProps, 'watermark'>> = (props) => (
  <WatermarkedImage 
    {...props} 
    watermark="AURA Gallery"
    watermarkPosition="top-right"
    watermarkOpacity={0.4}
  />
);

export const HeroWatermark: React.FC<Omit<WatermarkedImageProps, 'watermark'>> = (props) => (
  <WatermarkedImage 
    {...props} 
    watermark="AURA Intelligence"
    watermarkPosition="center"
    watermarkOpacity={0.3}
  />
);
