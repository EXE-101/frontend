'use client';

import React from "react"

import { cn } from '@/lib/utils';
import { Sparkles, ShoppingBag, Leaf } from 'lucide-react';

interface DisplayCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
  titleClassName?: string;
  className?: string;
}

function DisplayCard({
  icon,
  title,
  description,
  date,
  titleClassName = 'text-blue-600 dark:text-blue-400',
  className,
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        'relative flex h-32 w-72 flex-col justify-between rounded-lg border border-border bg-card/80 backdrop-blur-sm px-4 py-3 transition-all duration-300 hover:shadow-md hover:bg-card',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex rounded-full bg-primary/10 p-2">
          {icon}
        </span>
        <p className={cn('text-base font-semibold', titleClassName)}>
          {title}
        </p>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
      <p className="text-xs text-muted-foreground">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards: DisplayCardProps[] = [
    {
      icon: <ShoppingBag className="w-4 h-4 text-emerald-500" />,
      title: 'Quick Pickup',
      description: 'Reserve and collect in minutes',
      date: 'Available now',
      titleClassName: 'text-emerald-600 dark:text-emerald-400',
      className: 'hover:-translate-y-1',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-blue-500" />,
      title: 'Great Deals',
      description: 'Save up to 70% on quality food',
      date: 'Every day',
      titleClassName: 'text-blue-600 dark:text-blue-400',
      className: 'translate-x-6 translate-y-4 hover:translate-y-2',
    },
    {
      icon: <Leaf className="w-4 h-4 text-green-500" />,
      title: 'Help the Planet',
      description: 'Reduce food waste together',
      date: 'Join us',
      titleClassName: 'text-green-600 dark:text-green-400',
      className: 'translate-x-12 translate-y-8 hover:translate-y-4',
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      {displayCards.map((cardProps, index) => (
        <div key={index} className="absolute">
          <DisplayCard {...cardProps} />
        </div>
      ))}
    </div>
  );
}
