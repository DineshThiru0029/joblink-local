
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { MapPin, Clock, DollarSign, Star } from 'lucide-react';

export interface JobProps {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  distance: string;
  pay: number;
  postedAt: string;
  poster: {
    name: string;
    rating: number;
    jobsPosted: number;
  };
}

interface JobCardProps {
  job: JobProps;
  className?: string;
  featured?: boolean;
}

const JobCard = ({ job, className, featured = false }: JobCardProps) => {
  return (
    <Link 
      to={`/job/${job.id}`}
      className={cn(
        "block w-full transition-all",
        "group", // For group hover effects
        className
      )}
    >
      <div 
        className={cn(
          "relative rounded-xl overflow-hidden", 
          "transition-all duration-300 ease-out", 
          "border border-border bg-card hover:shadow-md",
          "hover:translate-y-[-2px]",
          featured && "ring-2 ring-primary/20"
        )}
      >
        {featured && (
          <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-lg leading-tight group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <div className="text-xs text-muted-foreground mt-1 inline-block px-2 py-0.5 bg-secondary rounded-full">
                {job.category}
              </div>
            </div>
            <div className="flex items-center text-lg font-semibold text-foreground">
              <DollarSign className="w-4 h-4 text-primary" />
              {job.pay}
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {job.description}
          </p>
          
          <div className="flex flex-wrap gap-3 text-xs">
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              <span>{job.distance} away · {job.location}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="w-3.5 h-3.5 mr-1" />
              <span>{job.postedAt}</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-medium">
                {job.poster.name.charAt(0)}
              </div>
              <div className="ml-2">
                <div className="text-sm">{job.poster.name}</div>
                <div className="flex items-center text-xs">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500 mr-1" />
                  <span className="text-muted-foreground">
                    {job.poster.rating} · {job.poster.jobsPosted} jobs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
