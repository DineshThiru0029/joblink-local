
import React, { useState } from 'react';
import { Search, MapPin, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onSearch?: (query: string, location: string) => void;
  className?: string;
  placeholder?: string;
  variant?: 'default' | 'minimal';
}

const SearchBar = ({ 
  onSearch, 
  className, 
  placeholder = "Search for jobs...",
  variant = 'default'
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch && onSearch(query, location);
  };
  
  const clearSearch = () => {
    setQuery('');
    setLocation('');
  };

  return (
    <form 
      onSubmit={handleSearch}
      className={cn(
        "w-full transition-all",
        variant === 'default' ? "max-w-3xl" : "max-w-md",
        isFocused ? "scale-[1.01]" : "scale-100",
        className
      )}
    >
      <div 
        className={cn(
          "relative flex items-center overflow-hidden transition-all",
          "border border-input focus-within:border-primary/50",
          "focus-within:ring-4 focus-within:ring-primary/10",
          variant === 'default' 
            ? "bg-white dark:bg-black/30 shadow-sm rounded-2xl"
            : "bg-secondary/60 rounded-lg backdrop-blur-sm"
        )}
      >
        <div className="flex-1 flex items-center">
          <Search className={cn(
            "flex-shrink-0 text-muted-foreground",
            variant === 'default' ? "ml-4 w-5 h-5" : "ml-3 w-4 h-4"
          )} />
          
          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "flex-1 bg-transparent border-0 focus:outline-none focus:ring-0 placeholder:text-muted-foreground/70",
              variant === 'default' ? "px-3 py-3" : "px-2 py-2 text-sm"
            )}
          />
        </div>

        {variant === 'default' && (
          <>
            <div className="hidden sm:flex items-center border-l border-input/50 pl-3">
              <MapPin className="flex-shrink-0 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-1 bg-transparent border-0 px-2 py-3 focus:outline-none focus:ring-0 placeholder:text-muted-foreground/70"
              />
            </div>
            
            {(query || location) && (
              <button
                type="button"
                onClick={clearSearch}
                className="flex-shrink-0 p-2 hover:text-destructive transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </>
        )}
        
        <button 
          type="submit" 
          className={cn(
            "flex-shrink-0 bg-primary text-primary-foreground font-medium transition-all hover:opacity-90",
            variant === 'default' 
              ? "ml-2 px-5 py-3 mr-1.5 rounded-xl" 
              : "ml-1 px-3 py-1.5 mr-1 rounded-md text-sm"
          )}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
