
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { sampleJobs } from '@/data/sampleData';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, DollarSign } from 'lucide-react';

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  
  const handleSearch = (query: string, location: string) => {
    setSearchTerm(query);
    setSearchLocation(location);
    console.log('Searching for:', query, 'in', location);
  };
  
  const handleViewJob = (jobId: string) => {
    navigate(`/job/${jobId}`);
  };
  
  const filteredJobs = sampleJobs.filter(job => {
    if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !job.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !job.category.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    if (searchLocation && !job.location.toLowerCase().includes(searchLocation.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto pt-32 px-4 pb-20">
        <h1 className="text-3xl font-bold mb-8">Find Jobs</h1>
        
        <div className="mb-8">
          <SearchBar 
            onSearch={handleSearch} 
            placeholder="Search for jobs like 'cleaning' or 'repair'..."
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge>{job.category}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Clock className="w-3 h-3 mr-1" /> {job.postedAt}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold flex items-center">
                        <DollarSign className="w-4 h-4" />{job.pay}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location} ({job.distance})
                    </div>
                    <Button 
                      onClick={() => handleViewJob(job.id)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12 border border-dashed border-border rounded-lg bg-card/50">
              <h3 className="text-lg font-medium mb-2">No jobs found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSearchLocation('');
                }}
              >
                Reset Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
