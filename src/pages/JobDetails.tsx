
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, DollarSign, Star, Share2, Flag, Calendar, User, MessageSquare, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { JobProps } from '@/components/JobCard';
import { sampleJobs } from '@/data/sampleData';
import { cn } from '@/lib/utils';

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const foundJob = sampleJobs.find(job => job.id === id) || null;
      setJob(foundJob);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 px-4 max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="flex items-center mb-6">
              <div className="h-6 w-24 bg-muted rounded-md"></div>
            </div>
            <div className="h-8 w-3/4 bg-muted rounded-md mb-4"></div>
            <div className="h-6 w-1/2 bg-muted rounded-md mb-8"></div>
            <div className="h-40 bg-muted rounded-xl mb-6"></div>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="h-10 w-24 bg-muted rounded-md"></div>
              <div className="h-10 w-24 bg-muted rounded-md"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded-md"></div>
              <div className="h-4 bg-muted rounded-md"></div>
              <div className="h-4 w-5/6 bg-muted rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      
      <div className="pt-24 pb-24 px-4 md:px-6 max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate(-1)} 
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Jobs
          </Button>
        </div>

        {/* Job Header */}
        <div className="animate-slide-down">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">{job.title}</h1>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <span className="inline-block px-3 py-1 bg-secondary rounded-full">
                  {job.category}
                </span>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{job.location} ({job.distance})</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Posted {job.postedAt}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center bg-card p-4 rounded-lg border border-border">
              <div className="flex items-center text-xl font-bold text-foreground mb-1">
                <DollarSign className="w-5 h-5 text-primary" />
                {job.pay}
              </div>
              <div className="text-sm text-muted-foreground">Fixed Price</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="md:col-span-2 animate-slide-up">
            {/* Job description */}
            <div className="bg-card border border-border rounded-xl p-6 mb-6">
              <h2 className="text-lg font-medium mb-4">Job Description</h2>
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <p className="text-foreground mb-4">
                  {job.description}
                </p>
                <p className="text-foreground mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h3 className="text-base font-medium mt-6 mb-2">Requirements:</h3>
                <ul className="list-disc list-inside mb-4 text-foreground">
                  <li>Previous experience with similar tasks</li>
                  <li>Own transportation to the job location</li>
                  <li>Necessary tools and equipment</li>
                  <li>Availability on the specified date and time</li>
                </ul>
                <p className="text-foreground">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            
            {/* Job details */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-medium mb-4">Job Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-primary mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-medium text-sm">Expected Date</h3>
                    <p className="text-muted-foreground text-sm">May 24, 2023</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-medium text-sm">Estimated Duration</h3>
                    <p className="text-muted-foreground text-sm">2-3 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="w-5 h-5 text-primary mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-medium text-sm">Experience Level</h3>
                    <p className="text-muted-foreground text-sm">Intermediate</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-medium text-sm">Location Type</h3>
                    <p className="text-muted-foreground text-sm">On-site</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-1 animate-slide-up" style={{ animationDelay: '100ms' }}>
            {/* Action card */}
            <div className="bg-card border border-border rounded-xl p-6 mb-6 sticky top-24">
              <Button 
                className="w-full mb-3"
                size="lg"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Apply for this Job
              </Button>
              
              <div className="flex gap-2 mb-6">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  icon={<Share2 className="w-4 h-4" />}
                >
                  Share
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  icon={<Flag className="w-4 h-4" />}
                >
                  Report
                </Button>
              </div>
              
              {/* Posted by */}
              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-medium mb-3">Posted by</h3>
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-medium mr-3">
                    {job.poster.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{job.poster.name}</div>
                    <div className="flex items-center text-sm">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500 mr-1" />
                      <span className="text-muted-foreground">
                        {job.poster.rating} · {job.poster.jobsPosted} jobs
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm mb-4">
                  <Award className="w-4 h-4 text-primary mr-2" />
                  <span>Verified Member since January 2023</span>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
