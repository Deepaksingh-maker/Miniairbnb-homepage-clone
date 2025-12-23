export interface Property {
  id: number;
  image: string;
  location: string;
  distance?: string;
  dates: string;
  price: number;
  rating: number;
  isSuperhost?: boolean;
  category: string;
  description?: string;
}

export const properties: Property[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1729615220884-4acf89995f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMGhvdXNlfGVufDF8fHx8MTc2NjM5NTE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Malibu, California",
    distance: "2,341 miles away",
    dates: "Jan 15 - 20",
    price: 450,
    rating: 4.95,
    isSuperhost: true,
    category: "Beachfront",
    description: "A bright and open beachfront home with stunning ocean views, cozy decor, and quick access to the sand.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBjaXR5fGVufDF8fHx8MTc2NjM5NTE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "New York, New York",
    distance: "854 miles away",
    dates: "Feb 1 - 6",
    price: 325,
    rating: 4.87,
    isSuperhost: false,
    category: "Iconic cities",
    description: "Stylish apartment located in the heart of the city — walkable to restaurants, museums, and parks.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1621771674545-849014cf91fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FiaW4lMjBmb3Jlc3R8ZW58MXx8fHwxNzY2Mjk3OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Lake Tahoe, California",
    distance: "1,523 miles away",
    dates: "Mar 10 - 15",
    price: 280,
    rating: 4.92,
    isSuperhost: true,
    category: "Mountains",
    description: "Rustic cabin with panoramic mountain views, fireplace, and easy access to hiking and skiing.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzY2Mzk1MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Miami Beach, Florida",
    distance: "1,087 miles away",
    dates: "Apr 5 - 12",
    price: 520,
    rating: 4.98,
    isSuperhost: true,
    category: "Beachfront",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1707926959464-2d8c54e7f70c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNoYWxldHxlbnwxfHx8fDE3NjYzOTUxODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Aspen, Colorado",
    distance: "945 miles away",
    dates: "Dec 20 - 27",
    price: 650,
    rating: 4.96,
    isSuperhost: true,
    category: "Mountains",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1573760464283-3ba64302271f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3dudG93biUyMGxvZnR8ZW58MXx8fHwxNzY2Mzk1MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Austin, Texas",
    distance: "723 miles away",
    dates: "May 3 - 8",
    price: 195,
    rating: 4.89,
    isSuperhost: false,
    category: "Trending",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc29ydHxlbnwxfHx8fDE3NjYzODQzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Maui, Hawaii",
    distance: "3,842 miles away",
    dates: "Jun 12 - 19",
    price: 580,
    rating: 4.99,
    isSuperhost: true,
    category: "Beachfront",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1719008546743-c6f4f4b3f7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5c2lkZSUyMGNvdHRhZ2V8ZW58MXx8fHwxNzY2Mzk1MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Napa Valley, California",
    distance: "2,145 miles away",
    dates: "Sep 8 - 13",
    price: 385,
    rating: 4.91,
    isSuperhost: false,
    category: "Top rated",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1729615220884-4acf89995f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMGhvdXNlfGVufDF8fHx8MTc2NjM5NTE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Charleston, South Carolina",
    distance: "612 miles away",
    dates: "Oct 15 - 20",
    price: 265,
    rating: 4.88,
    isSuperhost: true,
    category: "Trending",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBjaXR5fGVufDF8fHx8MTc2NjM5NTE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Seattle, Washington",
    distance: "1,876 miles away",
    dates: "Nov 5 - 10",
    price: 295,
    rating: 4.93,
    isSuperhost: false,
    category: "Iconic cities",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1621771674545-849014cf91fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FiaW4lMjBmb3Jlc3R8ZW58MXx8fHwxNzY2Mjk3OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Portland, Oregon",
    distance: "1,654 miles away",
    dates: "Aug 22 - 27",
    price: 215,
    rating: 4.86,
    isSuperhost: true,
    category: "Top rated",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzY2Mzk1MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "San Diego, California",
    distance: "2,087 miles away",
    dates: "Jul 18 - 23",
    price: 425,
    rating: 4.97,
    isSuperhost: true,
    category: "Beachfront",
  },
];
