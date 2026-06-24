import { Companion, ExperienceStory } from './types';

export const STORIES: ExperienceStory[] = [
  {
    id: "s1",
    companionName: "Aarav Thapa",
    userName: "Emma",
    userAvatar: "https://ui-avatars.com/api/?name=Emma&background=random",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
    timeAgo: "2h ago",
    caption: "Amazing momo tasting tour!"
  },
  {
    id: "s2",
    companionName: "Priya Gurung",
    userName: "Raj",
    userAvatar: "https://ui-avatars.com/api/?name=Raj&background=random",
    imageUrl: "https://images.unsplash.com/photo-1510425463958-dcced28da480?q=80&w=800&auto=format&fit=crop",
    timeAgo: "4h ago",
    caption: "Swayambhunath was breathtaking at sunset."
  },
  {
    id: "s3",
    companionName: "Sita Maharjan",
    userName: "Chloe",
    userAvatar: "https://ui-avatars.com/api/?name=Chloe&background=random",
    imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
    timeAgo: "6h ago",
    caption: "Patan Durbar Square is so rich in history."
  },
  {
    id: "s4",
    companionName: "Tenzing Sherpa",
    userName: "Liam",
    userAvatar: "https://ui-avatars.com/api/?name=Liam&background=random",
    imageUrl: "https://images.unsplash.com/photo-1511216113906-8f56bb20925c?q=80&w=800&auto=format&fit=crop",
    timeAgo: "1d ago",
    caption: "A great boat ride on Phewa lake."
  }
];

export const COMPANIONS: Companion[] = [
  {
    id: 'c1',
    name: 'Aarav Thapa',
    age: 26,
    gender: 'Male',
    bio: 'Born and raised in Kathmandu. I love showcasing the hidden courtyards, local cafes, and the rich history of Durbar Square. Perfect for those who want an authentic, non-touristy experience.',
    hourlyRate: 800, // in NPR
    rating: 4.9,
    reviewsCount: 124,
    isVerified: true,
    location: 'Kathmandu',
    languages: ['English', 'Nepali', 'Hindi'],
    interests: ['History', 'Photography', 'Local Food'],
    imageUrl: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=get&auto=format&fit=crop&w=800',
    images: [
      'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=get&auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?q=80&auto=format&fit=crop&w=800'
    ],
    reviews: [
      {
        id: 'r1',
        authorName: 'Sarah Jenkins',
        rating: 5,
        text: 'Aarav was fantastic! He showed me places in Kathmandu I would never have found on my own.',
        date: '2025-11-12'
      },
      {
        id: 'r2',
        authorName: 'Michael Chen',
        rating: 5,
        text: 'Very knowledgeable about Newari culture. Felt completely safe and had a great time tasting local food.',
        date: '2025-10-05'
      }
    ]
  },
  {
    id: 'c2',
    name: 'Priya Gurung',
    age: 24,
    gender: 'Female',
    bio: "Adventure enthusiast and foodie! I can take you to the best Momo spots in Patan or guide you on a short day hike around the valley rim. Let's make your trip memorable.",
    hourlyRate: 750,
    rating: 4.8,
    reviewsCount: 89,
    isVerified: true,
    location: 'Lalitpur',
    languages: ['English', 'Nepali'],
    interests: ['Hiking', 'Street Food', 'Culture'],
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&auto=format&fit=crop&w=800',
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1510425463958-dcced28da480?q=80&auto=format&fit=crop&w=800'
    ],
  },
  {
    id: 'c3',
    name: 'Tenzing Sherpa',
    age: 28,
    gender: 'Male',
    bio: 'Based in Lakeside Pokhara. Whether you need a companion for boating on Phewa lake, a scooter ride to Sarangkot for sunrise, or just someone to share a coffee with. Safety and fun guaranteed.',
    hourlyRate: 1000,
    rating: 5.0,
    reviewsCount: 204,
    isVerified: true,
    location: 'Pokhara',
    languages: ['English', 'Nepali', 'Tibetan'],
    interests: ['Adventure', 'Nature', 'Motorcycling'],
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&auto=format&fit=crop&w=800',
    images: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1511216113906-8f56bb20925c?q=80&auto=format&fit=crop&w=800'
    ],
  },
  {
    id: 'c4',
    name: 'Sita Maharjan',
    age: 25,
    gender: 'Female',
    bio: "Art student with a deep love for Newari architecture and pottery. Join me for a guided walking tour through Bhaktapur's ancient alleys and artisan workshops.",
    hourlyRate: 900,
    rating: 4.7,
    reviewsCount: 56,
    isVerified: true,
    location: 'Bhaktapur',
    languages: ['English', 'Nepali', 'Newari'],
    interests: ['Art', 'History', 'Pottery'],
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&auto=format&fit=crop&w=800',
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&auto=format&fit=crop&w=800'
    ],
  }
];
