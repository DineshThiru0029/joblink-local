
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { User, Settings, Star, Calendar, Award, Clock, MapPin, Briefcase, LogOut, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProfilePage = () => {
  // Mock user data
  const user = {
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: 'January 2023',
    completedJobs: 15,
    rating: 4.9,
    jobsInProgress: 2,
    profileImage: null, // null for now
  };

  return (
    <div className="min-h-screen bg-background pb-24 animate-fade-in">
      <Navbar />
      
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="mb-8 animate-slide-down">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="relative">
              {user.profileImage ? (
                <img 
                  src={user.profileImage} 
                  alt={user.name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-md"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl font-semibold border-4 border-background shadow-md">
                  {user.name.charAt(0)}
                </div>
              )}
              <button className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-md hover:opacity-90 transition-opacity">
                <Settings className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 mb-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500 mr-1" />
                  {user.rating}
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {user.location}
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Joined {user.joinDate}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  icon={<Settings className="w-4 h-4" />}
                >
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 animate-slide-up">
          <StatCard 
            icon={<Briefcase className="w-5 h-5 text-blue-500" />} 
            label="Completed Jobs" 
            value={user.completedJobs.toString()}
          />
          <StatCard 
            icon={<Star className="w-5 h-5 text-amber-500" />} 
            label="Average Rating" 
            value={user.rating.toString()}
          />
          <StatCard 
            icon={<Clock className="w-5 h-5 text-green-500" />} 
            label="In Progress" 
            value={user.jobsInProgress.toString()}
          />
        </div>
        
        {/* Profile Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="md:col-span-2 space-y-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
            {/* About */}
            <ProfileCard title="About">
              <p className="text-muted-foreground">
                Experienced professional with a background in home maintenance and repairs. 
                I enjoy helping people with their projects and providing quality service. 
                Available on weekends and evenings for various tasks.
              </p>
            </ProfileCard>
            
            {/* Skills */}
            <ProfileCard title="Skills">
              <div className="flex flex-wrap gap-2">
                <Skill label="Home Cleaning" />
                <Skill label="Plumbing" />
                <Skill label="Furniture Assembly" />
                <Skill label="Painting" />
                <Skill label="General Repairs" />
              </div>
            </ProfileCard>
            
            {/* Recent Jobs */}
            <ProfileCard title="Recent Jobs" 
              action={
                <Link to="/my-jobs" className="text-sm text-primary hover:underline flex items-center">
                  View All <ChevronRight className="w-3 h-3 ml-1" />
                </Link>
              }
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start pb-3 border-b border-border">
                  <div>
                    <h3 className="font-medium">Furniture Assembly</h3>
                    <p className="text-sm text-muted-foreground">Completed on May 15, 2023</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span className="ml-1 text-sm">5.0</span>
                  </div>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-border">
                  <div>
                    <h3 className="font-medium">Bathroom Cleaning</h3>
                    <p className="text-sm text-muted-foreground">Completed on May 10, 2023</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span className="ml-1 text-sm">4.8</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Light Fixture Installation</h3>
                    <p className="text-sm text-muted-foreground">Completed on May 5, 2023</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span className="ml-1 text-sm">5.0</span>
                  </div>
                </div>
              </div>
            </ProfileCard>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            {/* Contact Information */}
            <ProfileCard title="Contact Information">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Full Name</div>
                    <div className="text-sm text-muted-foreground">{user.name}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">{user.phone}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">{user.location}</div>
                  </div>
                </div>
              </div>
            </ProfileCard>
            
            {/* Verification */}
            <ProfileCard title="Verification">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Award className="w-4 h-4 text-green-500 mr-2" />
                  <span>Identity Verified</span>
                </div>
                <div className="flex items-center text-sm">
                  <Award className="w-4 h-4 text-green-500 mr-2" />
                  <span>Email Verified</span>
                </div>
                <div className="flex items-center text-sm">
                  <Award className="w-4 h-4 text-green-500 mr-2" />
                  <span>Phone Verified</span>
                </div>
              </div>
            </ProfileCard>
            
            {/* Account */}
            <ProfileCard title="Account">
              <div className="space-y-2">
                <Link to="/settings" className="flex items-center justify-between p-2 hover:bg-secondary rounded-md transition-colors">
                  <div className="flex items-center">
                    <Settings className="w-4 h-4 mr-3 text-muted-foreground" />
                    <span className="text-sm">Account Settings</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Link>
                <Link to="/notifications" className="flex items-center justify-between p-2 hover:bg-secondary rounded-md transition-colors">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span className="text-sm">Notifications</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Link>
                <Link to="/payments" className="flex items-center justify-between p-2 hover:bg-secondary rounded-md transition-colors">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                    <span className="text-sm">Payment Methods</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Link>
                <button className="w-full flex items-center justify-between p-2 hover:bg-secondary rounded-md transition-colors text-destructive">
                  <div className="flex items-center">
                    <LogOut className="w-4 h-4 mr-3" />
                    <span className="text-sm">Log Out</span>
                  </div>
                </button>
              </div>
            </ProfileCard>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const StatCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="bg-card border border-border rounded-xl p-4 flex items-center">
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
      {icon}
    </div>
    <div>
      <div className="text-xl font-semibold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  </div>
);

const ProfileCard = ({ 
  title, 
  children, 
  action 
}: { 
  title: string; 
  children: React.ReactNode; 
  action?: React.ReactNode;
}) => (
  <div className="bg-card border border-border rounded-xl p-5">
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-semibold">{title}</h2>
      {action}
    </div>
    {children}
  </div>
);

const Skill = ({ label }: { label: string }) => (
  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
    {label}
  </span>
);

export default ProfilePage;
