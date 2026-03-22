import tajMahal from "../assets/TahMahal.jpg";
import rajasthan from "../assets/rajasthan.jpg";
import kerala from "../assets/Kerala.jpg";
import kashmir from "../assets/Kashmir.jpg";
import darjeeling from "../assets/darjeeling.webp";
import darjeeling2 from "../assets/darjeeling2.jpg";
import goa from "../assets/Goa.jpg";
import gangtok from "../assets/Gangtok.jpg";
import himachal from "../assets/Himachal.jpg";
import uttarakhand from "../assets/Uttarakhand.jpg";
import goldenTriangle from "../assets/Golden Triangle.jpg";
import rajasthanHeritage from "../assets/Rajasthan Heritage.jpg";
import keralaBackwaters from "../assets/Kerala Backwaters.jpg";
import footerCity from "../assets/footer-city-bg.jpg";

const homeContent = {
  hero: {
    title: "Soulful India Tours",
    subtitle: "Curated journeys across India with local experts and bespoke experiences.",
    ctaLabel: "Plan My Trip",
    backgroundImage: tajMahal
  },
  popularPackages: [
    {
      id: "pop-1",
      packageSlug: "golden-triangle-classic",
      status: "active",
      shortDescription: "Delhi, Agra, and Jaipur with handpicked stays and local guides."
    },
    {
      id: "pop-2",
      packageSlug: "royal-rajasthan-heritage",
      status: "active",
      shortDescription: "Fort cities, palace stays, and desert sunsets in royal Rajasthan."
    },
    {
      id: "pop-3",
      packageSlug: "serene-kerala-backwaters",
      status: "active",
      shortDescription: "Houseboats, spice plantations, and Ayurvedic wellness retreats."
    },
    {
      id: "pop-4",
      packageSlug: "kashmir-winter-escape",
      status: "active",
      shortDescription: "Snowy landscapes, shikara rides, and cozy boutique hotels."
    },
    {
      id: "pop-5",
      packageSlug: "darjeeling-tea-trails",
      status: "active",
      shortDescription: "Tea estates, heritage rail rides, and crisp mountain air."
    },
    {
      id: "pop-6",
      packageSlug: "himalayan-adventure-uttarakhand",
      status: "active",
      shortDescription: "Riverside camps, scenic trails, and alpine adventures."
    },
    {
      id: "pop-7",
      packageSlug: "goa-coastal-escape",
      status: "active",
      shortDescription: "Beachside stays, sunset cruises, and coastal cuisine."
    },
    {
      id: "pop-8",
      packageSlug: "himachal-hill-retreat",
      status: "active",
      shortDescription: "Hill towns, pine forests, and slow travel escapes."
    }
  ],
  customCategories: [
    {
      id: "cat-1",
      title: "Honeymoon Packages",
      slug: "honeymoon-packages",
      image: goa,
      description: "Romantic escapes with beach stays and candlelight experiences.",
      status: "active",
      packageSlugs: ["serene-kerala-backwaters", "kashmir-winter-escape"]
    },
    {
      id: "cat-2",
      title: "Yoga Retreats",
      slug: "yoga-retreats",
      image: gangtok,
      description: "Wellness journeys with guided yoga, meditation, and nature walks.",
      status: "active",
      packageSlugs: ["himalayan-adventure-uttarakhand"]
    },
    {
      id: "cat-3",
      title: "Eco Tourism",
      slug: "eco-tourism",
      image: darjeeling,
      description: "Low-impact travel with eco lodges and community experiences.",
      status: "active",
      packageSlugs: ["darjeeling-tea-trails", "himalayan-adventure-uttarakhand"]
    },
    {
      id: "cat-4",
      title: "Spiritual Tours",
      slug: "spiritual-tours",
      image: darjeeling2,
      description: "Temples, heritage walks, and sacred river rituals.",
      status: "active",
      packageSlugs: ["spiritual-varanasi"]
    }
  ],
  goldenTriangleRegions: [
    {
      id: "gt-1",
      title: "North India Golden Triangle",
      slug: "north-india-golden-triangle",
      image: goldenTriangle,
      status: "active",
      packageSlugs: ["golden-triangle-classic"]
    },
    {
      id: "gt-2",
      title: "South India Golden Triangle",
      slug: "south-india-golden-triangle",
      image: kerala,
      status: "active",
      packageSlugs: ["serene-kerala-backwaters"]
    },
    {
      id: "gt-3",
      title: "West India Golden Triangle",
      slug: "west-india-golden-triangle",
      image: rajasthan,
      status: "active",
      packageSlugs: ["royal-rajasthan-heritage"]
    },
    {
      id: "gt-4",
      title: "East India Golden Triangle",
      slug: "east-india-golden-triangle",
      image: darjeeling,
      status: "active",
      packageSlugs: ["darjeeling-tea-trails"]
    }
  ],
  packages: [
    {
      id: "pkg-1",
      title: "Golden Triangle Classic",
      slug: "golden-triangle-classic",
      images: [goldenTriangle],
      duration: "6 Nights / 7 Days",
      price: "79999",
      shortDescription: "Delhi, Agra, and Jaipur in one seamless luxury circuit.",
      fullDescription: "Discover iconic monuments, royal palaces, and vibrant bazaars with curated city experiences.",
      details: "Includes private transfers, 4-star stays, and guided heritage walks.",
      location: "Delhi, Agra, Jaipur",
      inclusions: "Airport pickup\nBoutique stays\nDaily breakfast\nGuided city tours",
      exclusions: "Flights\nPersonal expenses",
      category: "state",
      status: "active"
    },
    {
      id: "pkg-2",
      title: "Royal Rajasthan Heritage",
      slug: "royal-rajasthan-heritage",
      images: [rajasthanHeritage],
      duration: "7 Nights / 8 Days",
      price: "89999",
      shortDescription: "Palaces, forts, and desert sunsets across royal Rajasthan.",
      fullDescription: "Experience regal hospitality with palace stays, camel rides, and cultural evenings.",
      details: "Includes heritage hotels, cultural performances, and city guides.",
      location: "Jaipur, Jodhpur, Udaipur",
      inclusions: "Heritage stays\nBreakfast + dinner\nCultural shows",
      exclusions: "Flights\nShopping",
      category: "state",
      status: "active"
    },
    {
      id: "pkg-3",
      title: "Serene Kerala Backwaters",
      slug: "serene-kerala-backwaters",
      images: [keralaBackwaters],
      duration: "5 Nights / 6 Days",
      price: "69999",
      shortDescription: "Houseboats, spice trails, and lush greenery in Kerala.",
      fullDescription: "Relax on private houseboats, explore plantations, and unwind with Ayurvedic therapies.",
      details: "Includes houseboat cruise, coastal stays, and wellness sessions.",
      location: "Cochin, Alleppey, Munnar",
      inclusions: "Houseboat stay\nBreakfast\nWellness session",
      exclusions: "Flights\nSpa upgrades",
      category: "state",
      status: "active"
    },
    {
      id: "pkg-4",
      title: "Kashmir Winter Escape",
      slug: "kashmir-winter-escape",
      images: [kashmir],
      duration: "4 Nights / 5 Days",
      price: "64999",
      shortDescription: "Snowy valleys, cozy stays, and alpine experiences.",
      fullDescription: "Enjoy shikara rides, snowy landscapes, and curated winter activities.",
      details: "Includes deluxe hotel stays, gondola ride, and private transfers.",
      location: "Srinagar, Gulmarg",
      inclusions: "Airport pickup\nBreakfast\nSightseeing",
      exclusions: "Flights\nAdventure add-ons",
      category: "state",
      status: "active"
    },
    {
      id: "pkg-5",
      title: "Darjeeling Tea Trails",
      slug: "darjeeling-tea-trails",
      images: [darjeeling],
      duration: "3 Nights / 4 Days",
      price: "45999",
      shortDescription: "Tea estates, heritage rail, and mountain views.",
      fullDescription: "Discover the charm of Darjeeling with tea tastings and scenic hikes.",
      details: "Includes boutique stays, tea factory visit, and guided walks.",
      location: "Darjeeling",
      inclusions: "Tea tour\nBreakfast\nLocal guide",
      exclusions: "Flights\nPersonal expenses",
      category: "state",
      status: "active"
    },
    {
      id: "pkg-6",
      title: "Himalayan Adventure Uttarakhand",
      slug: "himalayan-adventure-uttarakhand",
      images: [uttarakhand],
      duration: "6 Nights / 7 Days",
      price: "74999",
      shortDescription: "Trekking trails, river camps, and mountain vistas.",
      fullDescription: "Adventure-focused itinerary with curated treks and local homestays.",
      details: "Includes camping gear, trek guides, and select meals.",
      location: "Rishikesh, Auli",
      inclusions: "Adventure activities\nBreakfast\nLocal transfers",
      exclusions: "Flights\nPersonal gear",
      category: "theme",
      status: "active"
    },
    {
      id: "pkg-7",
      title: "Spiritual Varanasi",
      slug: "spiritual-varanasi",
      images: [himachal],
      duration: "3 Nights / 4 Days",
      price: "39999",
      shortDescription: "Ganga aarti, heritage ghats, and soulful rituals.",
      fullDescription: "Immersive spiritual journey with guided rituals and temple visits.",
      details: "Includes guided rituals, heritage walks, and premium stays.",
      location: "Varanasi",
      inclusions: "Guided rituals\nBreakfast\nPrivate transfers",
      exclusions: "Flights\nPersonal expenses",
      category: "theme",
      status: "active"
    },
    {
      id: "pkg-8",
      title: "Goa Coastal Escape",
      slug: "goa-coastal-escape",
      images: [goa],
      duration: "4 Nights / 5 Days",
      price: "Price on Request",
      shortDescription: "Beach resorts, sunset cruises, and coastal cafes.",
      fullDescription: "Relax along Goa's golden beaches with curated stays and flexible excursions.",
      details: "Includes beachfront hotel, airport transfers, and curated dining picks.",
      location: "North Goa, South Goa",
      inclusions: "Beachfront stay\nBreakfast\nAirport pickup",
      exclusions: "Flights\nPersonal expenses",
      category: "state",
      status: "active"
    },
    {
      id: "pkg-9",
      title: "Himachal Hill Retreat",
      slug: "himachal-hill-retreat",
      images: [himachal],
      duration: "5 Nights / 6 Days",
      price: "58999",
      shortDescription: "Charming hill stations, forests, and local markets.",
      fullDescription: "Unwind in Himachal with slow days, scenic drives, and cozy boutique stays.",
      details: "Includes hotel stays, private transfers, and guided local walks.",
      location: "Shimla, Manali",
      inclusions: "Hotel stays\nBreakfast\nLocal guide",
      exclusions: "Flights\nPersonal expenses",
      category: "state",
      status: "active"
    }
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Amber Fort Sunrise",
      mediaType: "image",
      mediaUrl: rajasthan,
      tags: ["fort", "heritage"],
      status: "active"
    },
    {
      id: "gal-2",
      title: "Backwater Cruise",
      mediaType: "image",
      mediaUrl: keralaBackwaters,
      tags: ["water", "relax"],
      status: "active"
    },
    {
      id: "gal-3",
      title: "Tea Estate Walk",
      mediaType: "image",
      mediaUrl: darjeeling,
      tags: ["nature"],
      status: "active"
    },
    {
      id: "gal-4",
      title: "Golden Triangle Highlights",
      mediaType: "video",
      mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      tags: ["video"],
      status: "active"
    },
    {
      id: "gal-5",
      title: "Snow in Kashmir",
      mediaType: "image",
      mediaUrl: kashmir,
      tags: ["snow"],
      status: "active"
    },
    {
      id: "gal-6",
      title: "Desert Camp Night",
      mediaType: "image",
      mediaUrl: rajasthanHeritage,
      tags: ["desert"],
      status: "active"
    },
    {
      id: "gal-7",
      title: "Temple Aarti",
      mediaType: "video",
      mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      tags: ["ritual"],
      status: "active"
    },
    {
      id: "gal-8",
      title: "Himalayan Trails",
      mediaType: "image",
      mediaUrl: uttarakhand,
      tags: ["mountain"],
      status: "active"
    }
  ],
  blogs: [
    {
      id: "blog-1",
      title: "A Luxury Guide to the Golden Triangle",
      slug: "luxury-guide-golden-triangle",
      coverImage: goldenTriangle,
      excerpt: "Plan the perfect Delhi, Agra, and Jaipur journey with curated stays and private guides.",
      content: "Explore the Golden Triangle with a seamless itinerary that blends heritage with luxury.\nFrom sunrise at the Taj Mahal to evening bazaars in Jaipur, this route offers iconic experiences.",
      author: "Soulful India Editorial",
      date: "2026-02-10",
      status: "active"
    },
    {
      id: "blog-2",
      title: "Kerala Backwaters for First-Time Travelers",
      slug: "kerala-backwaters-first-time",
      coverImage: keralaBackwaters,
      excerpt: "Everything you need to know for a relaxed houseboat escape in Kerala.",
      content: "Kerala invites you to slow down. Start with Cochin, move to the backwaters, and end in Munnar.\nChoose boutique houseboats for privacy and enjoy local cuisine on board.",
      author: "Priya Menon",
      date: "2026-02-05",
      status: "active"
    },
    {
      id: "blog-3",
      title: "Rajasthan Palaces and Forts You Should Not Miss",
      slug: "rajasthan-palaces-forts",
      coverImage: rajasthanHeritage,
      excerpt: "A curated list of regal stays and heritage sites across Rajasthan.",
      content: "From Jaipur's Amer Fort to Udaipur's City Palace, Rajasthan is a living museum.\nPair heritage tours with cultural performances for a complete experience.",
      author: "Aarav Singh",
      date: "2026-01-28",
      status: "active"
    },
    {
      id: "blog-4",
      title: "Himalayan Winter Escapes with Soulful Comfort",
      slug: "himalayan-winter-escapes",
      coverImage: kashmir,
      excerpt: "Snowy retreats with cozy stays and curated winter activities.",
      content: "Plan your winter escape with warm boutique stays and flexible itineraries.\nAdd local cuisine and cultural touchpoints for a memorable experience.",
      author: "Soulful India Editorial",
      date: "2026-01-20",
      status: "active"
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Soulful India Tours wins Excellence in Service 2026",
      slug: "excellence-in-service-2026",
      image: footerCity,
      date: "2026-02-12",
      excerpt: "Recognized for personalized itineraries and customer satisfaction.",
      content: "Soulful India Tours has been honored with the Excellence in Service 2026 award for curated travel planning and customer support.",
      status: "active"
    },
    {
      id: "news-2",
      title: "New boutique stays added to Rajasthan routes",
      slug: "boutique-stays-rajasthan",
      image: rajasthan,
      date: "2026-02-03",
      excerpt: "Stay in restored havelis and royal heritage properties.",
      content: "We have expanded our Rajasthan itineraries with exclusive boutique stays and curated cultural nights.",
      status: "active"
    },
    {
      id: "news-3",
      title: "Kerala wellness journeys now include Ayurveda sessions",
      slug: "kerala-wellness-ayurveda",
      image: kerala,
      date: "2026-01-26",
      excerpt: "Signature wellness additions for travelers seeking balance.",
      content: "Our Kerala itineraries now include guided Ayurveda sessions and wellness consultations.",
      status: "active"
    }
  ],
  about: {
    title: "About Soulful India Tours",
    subtitle: "Crafting journeys that connect you with the heart of India.",
    description: "We are a boutique travel company focused on personalized experiences across India. From heritage cities to serene backwaters, every itinerary is designed by experts who care about comfort, authenticity, and local connections.",
    image: footerCity,
    highlights: [
      { label: "Years of Experience", value: "12+" },
      { label: "Happy Travelers", value: "8,500+" },
      { label: "Expert Planners", value: "45" }
    ],
    ctaLabel: "About Us",
    ctaLink: "/about"
  },
  footer: {
    companyName: "Soulful India Tours",
    description: "Your trusted partner for authentic Indian travel experiences. We specialize in curated journeys that celebrate culture, heritage, and nature.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Destinations", href: "/places-to-visit" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" }
    ],
    contact: {
      phone: "097735 29963",
      whatsapp: "097735 29963",
      email: "soulfulindia01tours@gmail.com",
      address: "Tooti Chowk, 1171-75, 6, Main Bazar Rd, Paharganj, New Delhi, Delhi 110055",
      hours: "Open 24 hours"
    },
    socials: [
      { platform: "facebook", href: "https://facebook.com" },
      { platform: "instagram", href: "https://instagram.com" },
      { platform: "linkedin", href: "https://linkedin.com" },
      { platform: "youtube", href: "https://youtube.com" }
    ],
    copyright: "Copyright 2026 Soulful India Tours. All rights reserved."
  }
};

export default homeContent;
