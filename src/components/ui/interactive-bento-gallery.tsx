"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { X, Play } from 'lucide-react';

export interface MediaItemType {
  id: number;
  type: 'video' | 'image';
  title: string;
  desc: string;
  url: string;
  span: string;
}

const MediaItem = ({ item, className, onClick }: { item: MediaItemType, className?: string, onClick?: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsInView(entry.isIntersecting));
    }, { threshold: 0.1 });

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (item.type !== 'video' || !videoRef.current) return;
    
    if (isInView) {
      videoRef.current.play().then(() => setIsBuffering(false)).catch(() => setIsBuffering(false));
    } else {
      videoRef.current.pause();
    }
  }, [isInView, item.type]);

  if (item.type === 'video') {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onClick={onClick}
          playsInline muted loop
          style={{ opacity: isBuffering ? 0.8 : 1, transition: 'opacity 0.2s' }}
        >
          <source src={item.url} type="video/mp4" />
        </video>
        <div className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full backdrop-blur-sm">
           <Play size={12} className="text-white" fill="white" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn('relative', className)}>
      <Image
        src={item.url}
        alt={item.title}
        fill
        className="object-cover cursor-pointer"
        onClick={onClick}
        sizes="(max-width: 768px) 100vw, 400px"
        loading="lazy"
      />
    </div>
  );
};

const GalleryModal = ({ selectedItem, isOpen, onClose }: { selectedItem: MediaItemType; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        layoutId={`media-${selectedItem.id}`}
        className="relative w-full max-w-4xl aspect-video bg-zinc-900 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors">
          <X size={20} />
        </button>
        {selectedItem.type === 'video' ? (
          <video src={selectedItem.url} className="w-full h-full object-contain" controls autoPlay />
        ) : (
          <Image src={selectedItem.url} alt={selectedItem.title} fill className="object-contain" sizes="100vw" />
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h3 className="text-2xl font-bold font-serif">{selectedItem.title}</h3>
          <p className="text-white/80 mt-2">{selectedItem.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface InteractiveBentoGalleryProps {
  mediaItems: MediaItemType[];
  className?: string;
}

export const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ mediaItems, className }) => {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
  const items = mediaItems;
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className={className}>
      <AnimatePresence>
        {selectedItem && (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={true}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]"
        initial="hidden" animate="visible"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layoutId={`media-${item.id}`}
            className={`relative overflow-hidden rounded-2xl cursor-pointer hover:shadow-xl transition-shadow ${item.span}`}
            onClick={() => !isDragging && setSelectedItem(item)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => {
              setIsDragging(false);
            }}
          >
            <MediaItem item={item} className="w-full h-full" onClick={() => !isDragging && setSelectedItem(item)} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 transition-opacity" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-serif text-lg md:text-xl font-medium tracking-wide">{item.title}</h3>
              <p className="text-xs md:text-sm text-white/80 font-light tracking-wider uppercase mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};