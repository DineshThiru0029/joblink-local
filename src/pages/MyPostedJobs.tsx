
import React from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, UserCheck } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Sample data for posted jobs
const postedJobs = [
  {
    id: '1',
    title: 'House Cleaning Needed',
    category: 'Home Cleaning',
    description: 'Need thorough cleaning of a 2-bedroom apartment, including kitchen and bathrooms.',
    location: 'Downtown',
    pay: 80,
    status: 'active',
    applications: 3,
    postedAt: '2 days ago',
  },
  {
    id: '2',
    title: 'Leaky Faucet Repair',
    category: 'Plumbing',
    description: 'Kitchen faucet is leaking. Need someone with plumbing experience to fix it quickly.',
    location: 'Westside',
    pay: 65,
    status: 'active',
    applications: 5,
    postedAt: '5 days ago',
  },
  {
    id: '3',
    title: 'Living Room Painting',
    category: 'Painting',
    description: 'Need to paint one wall in the living room. Paint will be provided.',
    location: 'Eastside',
    pay: 120,
    status: 'completed',
    applications: 7,
    postedAt: '2 weeks ago',
  }
];

const MyPostedJobs = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEdit = (id: string) => {
    toast({
      title: "Edit job",
      description: `Editing job #${id}`,
    });
    // In a real app, this would navigate to an edit page
    // navigate(`/edit-job/${id}`);
  };

  const handleDelete = (id: string) => {
    toast({
      title: "Delete job",
      description: `Job #${id} has been deleted`,
    });
    // In a real app, this would delete the job from the database
  };

  const handleViewApplications = (id: string) => {
    toast({
      title: "View applications",
      description: `Viewing applications for job #${id}`,
    });
    // In a real app, this would navigate to an applications page
    // navigate(`/applications/${id}`);
  };

  const handlePostNewJob = () => {
    navigate('/post-job');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container max-w-4xl mx-auto pt-32 px-4 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Posted Jobs</h1>
          <Button onClick={handlePostNewJob}>
            Post New Job
          </Button>
        </div>
        
        {postedJobs.length > 0 ? (
          <div className="space-y-4">
            {postedJobs.map((job) => (
              <Card key={job.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                          {job.status === 'active' ? 'Active' : 'Completed'}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Posted {job.postedAt}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold">${job.pay}</div>
                      <div className="text-sm text-muted-foreground">{job.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <Badge variant="outline" className="mr-2">
                        {job.category}
                      </Badge>
                      <span className="text-sm">
                        {job.applications} applications
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleEdit(job.id)}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDelete(job.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => handleViewApplications(job.id)}
                      >
                        <UserCheck className="w-4 h-4 mr-2" />
                        Applications
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-border rounded-lg bg-card/50">
            <h3 className="text-lg font-medium mb-2">No jobs posted yet</h3>
            <p className="text-muted-foreground mb-4">
              Create your first job listing to find helpers in your area
            </p>
            <Button onClick={handlePostNewJob}>
              Post a Job
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPostedJobs;
