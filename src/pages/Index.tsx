
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import Button from '@/components/Button';
import CategoryFilter, { Category } from '@/components/CategoryFilter';
import JobCard, { JobProps } from '@/components/JobCard';
import { ArrowRight, Briefcase, Home as HomeIcon, Droplets, Wrench, Paintbrush, Car } from 'lucide-react';

// Sample data
const categories: Category[] = [
  { id: 'cleaning', name: 'Home Cleaning', icon: <HomeIcon className="w-4 h-4" /> },
  { id: 'plumbing', name: 'Plumbing', icon: <Droplets className="w-4 h-4" /> },
  { id: 'repair', name: 'Repairs', icon: <Wrench className="w-4 h-4" /> },
  { id: 'painting', name: 'Painting', icon: <Paintbrush className="w-4 h-4" /> },
  { id: 'carwash', name: 'Car Wash', icon: <Car className="w-4 h-4" /> },
  { id: 'moving', name: 'Moving Help' },
  { id: 'gardening', name: 'Gardening' },
  { id: 'electrical', name: 'Electrical' },
];

const sampleJobs: JobProps[] = [
  {
    id: '1',
    title: 'House Cleaning Needed',
    category: 'Home Cleaning',
    description: 'Need thorough cleaning of a 2-bedroom apartment, including kitchen and bathrooms.',
    location: 'Downtown',
    distance: '2.3 miles',
    pay: 80,
    postedAt: '2 hours ago',
    poster: {
      name: 'John Doe',
      rating: 4.8,
      jobsPosted: 12
    }
  },
  {
    id: '2',
    title: 'Leaky Faucet Repair',
    category: 'Plumbing',
    description: 'Kitchen faucet is leaking. Need someone with plumbing experience to fix it quickly.',
    location: 'Westside',
    distance: '3.7 miles',
    pay: 65,
    postedAt: '5 hours ago',
    poster: {
      name: 'Sarah Smith',
      rating: 4.6,
      jobsPosted: 8
    }
  },
  {
    id: '3',
    title: 'Car Wash & Detailing',
    category: 'Car Wash',
    description: 'Need comprehensive car cleaning, including interior vacuuming and exterior washing.',
    location: 'Northside',
    distance: '1.5 miles',
    pay: 55,
    postedAt: '1 day ago',
    poster: {
      name: 'Michael Johnson',
      rating: 4.9,
      jobsPosted: 23
    }
  },
  {
    id: '4',
    title: 'Living Room Wall Painting',
    category: 'Painting',
    description: 'Need to paint one wall in the living room. Paint will be provided, just need the labor.',
    location: 'Eastside',
    distance: '4.2 miles',
    pay: 120,
    postedAt: '3 hours ago',
    poster: {
      name: 'Emma Thompson',
      rating: 4.7,
      jobsPosted: 5
    }
  },
  {
    id: '5',
    title: 'AC Unit Repair',
    category: 'Repair',
    description: 'Air conditioner not cooling properly. Need someone experienced to diagnose and fix the issue.',
    location: 'Southside',
    distance: '2.8 miles',
    pay: 150,
    postedAt: '6 hours ago',
    poster: {
      name: 'Robert Wilson',
      rating: 4.5,
      jobsPosted: 15
    }
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  
  const handleSearch = (query: string, location: string) => {
    setSearchTerm(query);
    setSearchLocation(location);
    console.log('Searching for:', query, 'in', location);
  };
  
  const handlePostJob = () => {
    navigate('/post-job');
  };
  
  const filteredJobs = sampleJobs.filter(job => {
    if (selectedCategory && job.category.toLowerCase() !== categories.find(c => c.id === selectedCategory)?.name.toLowerCase()) {
      return false;
    }
    
    if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !job.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    if (searchLocation && !job.location.toLowerCase().includes(searchLocation.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-down">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Find Local Part-Time Jobs in Your Area
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with people around you who need help with tasks like cleaning, repairs, and more.
            </p>

            <div className="flex flex-col items-center space-y-4">
              <SearchBar 
                onSearch={handleSearch} 
                placeholder="Search for jobs like 'cleaning' or 'repair'..."
              />
              <div className="flex flex-wrap gap-2 justify-center">
                <Button 
                  variant="primary"
                  className="text-sm md:text-base"
                  icon={<Briefcase className="w-4 h-4" />}
                  onClick={handlePostJob}
                >
                  Post a Job
                </Button>
                <Button 
                  variant="outline"
                  className="text-sm md:text-base"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Find Work
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Categories */}
          <div className="mt-12 animate-slide-up">
            <div className="flex justify-between items-center mb-4 px-2">
              <h2 className="text-xl font-semibold">Categories</h2>
              <Button variant="link" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                View All
              </Button>
            </div>
            <CategoryFilter 
              categories={categories} 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>
      </section>
      
      {/* Jobs Section */}
      <section className="px-4 md:px-6 pb-24 animate-slide-up">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-6 px-2">
            <h2 className="text-xl font-semibold">
              {selectedCategory 
                ? `${categories.find(c => c.id === selectedCategory)?.name} Jobs` 
                : "Available Jobs"}
            </h2>
            <Button variant="link" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              View All Jobs
            </Button>
          </div>
          
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredJobs.map((job, index) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  featured={index === 0}
                  className="animate-slide-up" 
                  // Staggered animation
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-border rounded-lg bg-card/50">
              <h3 className="text-lg font-medium mb-2">No jobs found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or category filters
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchTerm('');
                  setSearchLocation('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
