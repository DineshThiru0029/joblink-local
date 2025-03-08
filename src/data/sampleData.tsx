
import { JobProps } from '@/components/JobCard';

export const sampleJobs: JobProps[] = [
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
  {
    id: '6',
    title: 'Lawn Mowing Service',
    category: 'Gardening',
    description: 'Need someone to mow my lawn and trim the hedges. Regular maintenance, approximately once every two weeks.',
    location: 'Suburbs',
    distance: '5.1 miles',
    pay: 45,
    postedAt: '1 day ago',
    poster: {
      name: 'Jennifer Brown',
      rating: 4.3,
      jobsPosted: 3
    }
  },
  {
    id: '7',
    title: 'Furniture Assembly',
    category: 'Moving Help',
    description: 'Need help assembling a new bookshelf and desk. All tools required will be provided.',
    location: 'Midtown',
    distance: '1.8 miles',
    pay: 70,
    postedAt: '4 hours ago',
    poster: {
      name: 'David Clark',
      rating: 4.7,
      jobsPosted: 9
    }
  },
  {
    id: '8',
    title: 'Light Fixture Installation',
    category: 'Electrical',
    description: 'Need to install 3 ceiling light fixtures in my apartment. Must have experience with electrical work.',
    location: 'Downtown',
    distance: '3.2 miles',
    pay: 90,
    postedAt: '2 days ago',
    poster: {
      name: 'Linda Garcia',
      rating: 4.2,
      jobsPosted: 4
    }
  }
];
