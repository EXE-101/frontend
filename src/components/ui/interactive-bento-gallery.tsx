"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { cn } from "@/lib/utils";

interface MediaItemType {
    id: number;
    type: 'video' | 'image';
    title: string;
    desc: string;
    url: string;
    span: string;
}

// Mock Data chuẩn chủ đề Food & Sustainability
const foodMediaItems: MediaItemType[] = [
    {
        id: 1, type: "image", title: "Fresh Bakery", desc: "Saved from waste",
        url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
        span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
        id: 2, type: "video", title: "Community Sharing", desc: "Share the love",
        url: "https://cdn.pixabay.com/video/2023/10/12/184734-874066663_tiny.mp4",
        span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
    },
    {
        id: 3, type: "image", title: "Healthy Veggies", desc: "Organic greens",
        url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop",
        span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    },
    {
        id: 4, type: "image", title: "Zero Waste", desc: "Sustainable living",
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=600&auto=format&fit=crop",
        span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    },
    {
        id: 5, type: "image", title: "Sweet Treats", desc: "Last minute save",
        url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop",
        span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    },
];

const MediaItem = ({ item, onClick, className }: { item: MediaItemType, onClick?: () => void, className?: string }) => {
    return item.type === 'video' ? (
        <div className={cn("relative overflow-hidden w-full h-full group cursor-pointer", className)} onClick={onClick}>
            <video className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" autoPlay muted loop playsInline>
                <source src={item.url} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            <Play className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    ) : (
        <div className={cn("relative overflow-hidden w-full h-full group cursor-pointer", className)} onClick={onClick}>
            <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        </div>
    );
};

export const InteractiveBentoGallery = ({ className }: { className?: string }) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);

    return (
        <div className={cn("w-full h-full", className)}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[100px] md:auto-rows-[120px]">
                {foodMediaItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        layoutId={`media-${item.id}`}
                        className={cn("relative overflow-hidden rounded-xl shadow-sm border border-border/50", item.span)}
                        onClick={() => setSelectedItem(item)}
                        whileHover={{ y: -4 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <MediaItem item={item} />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            layoutId={`media-${selectedItem.id}`}
                            className="relative w-full max-w-3xl aspect-video bg-background rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"><X size={20} /></button>
                            {selectedItem.type === 'video' ? (
                                <video src={selectedItem.url} className="w-full h-full object-contain" controls autoPlay />
                            ) : (
                                <img src={selectedItem.url} alt={selectedItem.title} className="w-full h-full object-contain" />
                            )}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                                <p className="text-sm opacity-80">{selectedItem.desc}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};