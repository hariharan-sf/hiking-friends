export type PackageItem = {
  title: string;
  description: string;
  activities: string[];
  benefits?: string[];
  details: string;
  inquiryText: string;
  imageSrc: string;
  imageAlt: string;
  gallery: string[];
};

export const packages: PackageItem[] = [
  {
    title: "Hiking and Trekking",
    description: "Iconic Hatton hikes for sunrise views, ridge walks, and scenic trails.",
    activities: ["Morning sunrise walk", "Evening sunset walk", "5 km relaxation walk", "Bird watching"],
    details:
      "Perfect for travelers who want guided trail experiences with flexible pace and local route knowledge.",
    inquiryText: "Hi Hiking Friends, I want to book the Hiking and Trekking package in Hatton.",
    imageSrc: "/images/trekking/trekking.webp",
    imageAlt: "Group hiking through tea estate trails in Hatton",
    gallery: [
      "/images/trekking/trekking.webp",
      "/images/trekking/trekking-2.webp",
      "/images/trekking/trekking-3.webp",
    ],
  },
  {
    title: "Pekoe Trail Hike",
    description: "A guided Pekoe Trail hiking experience through tea-country landscapes.",
    activities: ["Pekoe Trail (22 stages)", "Scenic tea-estate viewpoints", "Guided route support"],
    details:
      "Ideal for travelers who want a dedicated Pekoe Trail adventure with local guidance and flexible pacing.",
    inquiryText: "Hi Hiking Friends, I want to book the Pekoe Trail Hike package in Hatton.",
    imageSrc: "/images/pekoe-trail/pekoe-trail.webp",
    imageAlt: "Hikers walking along the Pekoe Trail in Hatton",
    gallery: [
      "/images/pekoe-trail/pekoe-trail.webp",
      "/images/trekking/trekking-2.webp",
      "/images/trekking/trekking-3.webp",
      "/images/trekking/trekking.webp",
    ],
  },
  {
    title: "Adam's Peak Visit",
    description: "A dedicated visit to Adam's Peak with guided planning and route support.",
    activities: ["Adam's Peak visit", "Route and timing guidance", "Scenic stop points"],
    details:
      "Best for visitors who want to focus on Adam's Peak with local guidance for a smooth and memorable trip.",
    inquiryText: "Hi Hiking Friends, I want to book the Adam's Peak Visit package in Hatton.",
    imageSrc: "/images/photo-gallery/adams-peak.webp",
    imageAlt: "View from Adam's Peak in Sri Lanka",
    gallery: ["/images/photo-gallery/adams-peak.webp"],
  },
  {
    title: "Tea Tour",
    description: "Hands-on tea culture experience from field to factory in Hatton.",
    activities: [
      "Tea estate tour - Walk amongst the tea estate",
      "Tea plucking experience",
      "Tea factory visit",
      "Local tea community meet (pluckers)",
    ],
    details:
      "Ideal for visitors who want to understand Ceylon tea production and connect with local tea-growing communities.",
    inquiryText: "Hi Hiking Friends, I want to book the Tea Tour package in Hatton.",
    imageSrc: "/images/tea-tour/tea-plucking-1.webp",
    imageAlt: "Tea field walk with local tea community in Hatton",
    gallery: [
      "/images/tea-tour/tea-estate-walk.webp",
      "/images/tea-tour/tea-factory.webp",
      "/images/tea-tour/tea-estate-walk-2.webp",
      "/images/tea-tour/tea-tour.webp",
      "/images/tea-tour/tea-plucking-1.webp",
    ],
  },
  {
    title: "Tuktuk Tour",
    description: "A scenic ride through tea-country landmarks, waterfalls, and local life.",
    activities: [
      "Mlesna Tea Castle",
      "St. Clair Waterfall",
      "Gartmore Waterfall",
      "Devon Waterfall",
      "Local market visit",
    ],
    details:
      "Great for relaxed exploration with multiple stop points, scenic viewpoints, and easy access for all ages.",
    inquiryText: "Hi Hiking Friends, I want to book the Tuktuk Tour package in Hatton.",
    imageSrc: "/images/photo-gallery/tuktuk-tour.webp",
    imageAlt: "Scenic waterfall stop during a tuktuk tour in Hatton",
    gallery: ["/images/photo-gallery/gardmore-falls.webp","/images/photo-gallery/stclaire-waterfall.webp", "/images/photo-gallery/Mlesna-tea.webp"],
  },
  {
    title: "Yoga and Meditation",
    description: "A yoga and meditation session in the morning to start your day.",
    activities: ["One hour yoga and meditation session (Morning and evening session)"],
    benefits: [
      "Improves flexibility and strength",
      "Boosts energy levels",
      "Helps weight management",
      "Reduces stress & improves focus",
    ],
    details:
      "Great for relaxed exploration with multiple stop points, scenic viewpoints, and easy access for all ages (Beginners and experienced yoga practitioners are welcome).",
    inquiryText: "Hi Hiking Friends, I want to book the Tuktuk Tour package in Hatton.",
    imageSrc: "/images/photo-gallery/laxpana.webp",
    imageAlt: "Scenic waterfall stop during a tuktuk tour in Hatton",
    gallery: ["/images/photo-gallery/laxpana.webp", "/images/photo-gallery/adams-peak.webp"],
  },
  {
    title: "Nuwara Eliya Tour (One day)",
    description: "A visit to the beautiful Nuwara Eliya town and its surrounding attractions.",
    activities: [
      "Gregory lake visit",
      "Hakgala Botanical Garden visit",
      "Lovers leap waterfall visit",
      "Ramboda waterfall visit",
      "Seetha Amman Temple visit",
      "Horton Plains National Park visit",
      "Ambewela Farms visit",
      "And many more...",
    ],
    details: "Great for relaxed exploration with multiple stop points, scenic viewpoints, and easy access for all ages.",
    inquiryText: "Hi Hiking Friends, I want to book the Nuwara Eliya Tour package in Hatton.",
    imageSrc: "/images/nuwara-eliya/nuwara-eliya-1.webp",
    imageAlt: "Nuwara Eliya town and its surrounding attractions",
    gallery: ["/images/nuwara-eliya/nuwara-eliya-1.webp", "/images/nuwara-eliya/nuwara-eliya-2.webp", "/images/nuwara-eliya/nuwara-eliya-3.webp"],
  },
  {
    title: "Water rafting",
    description: "A water rafting experience in Kitulgala.",
    activities: [
      "Distance: 5KM - 10KM",
      "Rapids: Around 5 major + 4 minor rapids",
      "Duration: 1 - 2 hours",
      "Difficulty: Beginner - Advanced (Safe for first-timers)",
    ],
    details: "Great for relaxed exploration with multiple stop points, scenic viewpoints, and easy access for all ages.",
    inquiryText: "Hi Hiking Friends, I want to book the Water rafting package in Hatton.",
    imageSrc: "/images/water-rafting/water-rafting-1.webp",
    imageAlt: "Water rafting in Kitulgala",
    gallery: ["/images/water-rafting/water-rafting-1.webp", "/images/water-rafting/water-rafting-2.webp", "/images/water-rafting/water-rafting-3.webp"],
  },
  {
    title: "Transport",
    description: "Reliable transportation services in Hatton and surrounding areas.",
    activities: [
      "Airport pickup and drop off",
      "Transportation within Hatton",
      "Transport to nearby destinations",
      "Private vehicle services for visiting places",
      "Transportation from Hatton to any other destination in Sri Lanka",
    ],
    details:
      "We provide comfortable and reliable transportation services from the airport to Hatton and vice versa. We also offer transport within Hatton and to nearby destinations including Badulla, Kotagala, Nuwara Eliya, and other surrounding areas.",
    inquiryText: "Hi Hiking Friends, I want to book the Transport package in Hatton.",
    imageSrc: "/images/transport/transport-1.webp",
    imageAlt: "Transportation services from the airport to Hatton and nearby areas.",
    gallery: [
      "/images/transport/transport-1.webp",
      "/images/transport/transport-2.webp",
      "/images/transport/transport-3.webp",
    ],
  },
  {
    title: "Kayaking",
    description: "A peaceful kayaking experience in the scenic Castlereagh Reservoir.",
    activities: [
      "Morning and evening sessions available",
      "Duration: 1 - 2 hours",
      "Suitable for beginners and experienced kayakers",
      "Calm water experience with stunning mountain and lake views",
    ],
    details:
      "Enjoy a relaxing kayaking experience in the beautiful Castlereagh Reservoir. Perfect for both beginners and experienced adventurers, this activity offers calm waters, breathtaking scenery, and a refreshing outdoor escape. Available during morning and evening sessions for the best views and weather.",
    inquiryText: "Hi Hiking Friends, I want to book the Kayaking experience in Hatton.",
    imageSrc: "/images/photo-gallery/kayaking.webp",
    imageAlt: "Kayaking in Castlereagh Reservoir",
    gallery: ["/images/photo-gallery/kayaking.webp"],
  },
  {
    title: "Temple Visit",
    description: "A cultural and spiritual journey visiting sacred temples around Hatton.",
    activities: [
      "Explore local Hindu Kovils in Hatton",
      "Visit Buddhist temples in the Hatton area",
      "Cultural exploration and sightseeing",
    ],
    details:
      "Experience the spiritual and cultural richness of Hatton with visits to some of the most sacred temples in the region. This package includes visits to local Hindu Kovils, and nearby Buddhist temples.",
    inquiryText: "Hi Hiking Friends, I want to book the Temple Visit package in Hatton.",
    imageSrc: "/images/temple/temple-1.webp",
    imageAlt: "Temple visits in Hatton including Sri Sivasubramaniyar Temple and nearby sacred sites",
    gallery: ["/images/temple/temple-1.webp", "/images/temple/temple-2.webp", "/images/temple/temple-3.webp"],
  },
  {
    title: "Camping",
    description: "A one-day camping experience surrounded by nature in Haritha Kanda and Gartmore.",
    activities: [
      "Camping at Haritha Kanda ",
      "Camping Gartmore Waterfall",
      "Short hikes and nature exploration",
      "Campfire experience (weather permitting)",
      "Scenic sunrise or sunset views"
    ],
    details: "Enjoy a refreshing one-day camping experience in the beautiful landscapes of Haritha Kanda and Gartmore. This package includes a visit to the stunning Gartmore Waterfall, light hiking, and a peaceful camping setup surrounded by mountains and greenery. Perfect for nature lovers looking for a short escape with unforgettable views.",
    inquiryText: "Hi Hiking Friends, I want to book the Camping experience in Hatton.",
    imageSrc: "/images/camping/camping-1.webp",
    imageAlt: "Camping experience at Haritha Kanda and Gartmore Waterfall",
    gallery: [
      "/images/camping/camping-1.webp",
      "/images/camping/camping-2.webp",
      "/images/camping/camping-3.webp"
    ],
  }
];
