/* ─── Projects Data Repository ────────────────────────────
 * Central source of truth for all projects and project detail views.
 * When backend API is ready, this structure maps directly to the API response.
 * ────────────────────────────────────────────────────────── */

import palmDulexImg from '../assets/images/properties/palm dulex.jpg';
import whiteGlassDuplexImg from '../assets/images/properties/white glass duplex.jpg';
import brownDuplexImg from '../assets/images/properties/brown duplex.jpg';
import duplex2CarsImg from '../assets/images/properties/duplexwth 2cars.jpg';
import storyCommercialImg from '../assets/images/properties/2story 2.jpg';
import duplexTerraceImg from '../assets/images/properties/duplex terrace.jpg';

// Detail gallery images
import paloorFireImg from '../assets/images/properties/paloorwth Artficial fire.jpg';
import paloorTvImg from '../assets/images/properties/Paloorwth tv.jpg';
import paloorPlantImg from '../assets/images/properties/paloor with plant2.jpg';
import woodenPaloorImg from '../assets/images/properties/wooden paloor.jpg';

export const CATEGORIES = [
  { id: 'all', label: 'All projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
];

export const PROJECTS = [
  {
    id: 'ikoyi-residence',
    badge: 'Residential',
    category: 'residential',
    location: 'IKOYI, LAGOS · RESIDENTIAL',
    title: 'The Ikoyi Residence',
    typology: 'Private Residence',
    description:
      'A private contemporary residence carefully designed to balance natural ventilation, timber shading, and seamless indoor-outdoor living.',
    image: palmDulexImg,
    imageAlt: 'The Ikoyi Residence exterior featuring warm timber louvers',

    // Detail page specific content
    heroSubtitle: 'A private contemporary residence in Ikoyi, Lagos.',
    overviewEyebrow: 'THE PROJECT',
    overviewHeading: 'A considered home.\nAn exceptional way\nto live.',
    overviewParagraphs: [
      'Every space throughout the Ikoyi Residence was planned to celebrate natural light, fluid connectivity between rooms, and intuitive daily convenience.',
      'From the expansive glazing and custom crafted timber louvers to the private outdoor terrace and garden, each detail serves both aesthetic clarity and practical function.',
    ],
    overviewFootnote: 'Project completed on time and within agreed budget across all architectural and delivery stages.',

    keyFacts: [
      { label: 'LOCATION', value: 'Ikoyi, Lagos' },
      { label: 'TYPOLOGY', value: 'Private Residence' },
      { label: 'DISCIPLINES', value: 'Architecture, Civil, Interior' },
      { label: 'COMPLETION', value: 'Completed 2024 · Handed Over' },
    ],

    galleryEyebrow: 'SPATIAL EXPERIENCE',
    galleryHeading: 'Material. Light.\nSpace.',
    galleryItems: [
      {
        image: paloorFireImg,
        caption: '01 / Double-height living salon & daylight atrium',
        alt: 'Double height living room with fireplace and floor-to-ceiling windows',
      },
      {
        image: paloorTvImg,
        caption: '02 / Private salon with warm acoustic wall cladding',
        alt: 'Modern living room with media wall and bespoke lighting',
      },
    ],

    featuresEyebrow: 'FEATURES & AMENITIES',
    featuresHeading: 'Details that make\na difference.',
    featuresList: [
      'Open plan living',
      'Private gym',
      'Double-height salon',
      'Private pool and spa',
    ],

    locationCard: {
      tag: 'LOCATION',
      title: 'A connected address.\nA considered setting.',
      address: 'Ikoyi Crescent\nIkoyi, Lagos, Nigeria',
      subtext: 'Positioned close to key commercial and social amenities.',
      coordinates: [6.4531, 3.4344], // Ikoyi, Lagos
    },

    nextProject: {
      id: 'victoria-island-retreat',
      title: 'Victoria Island Retreat',
      image: whiteGlassDuplexImg,
      imageAlt: 'Victoria Island Retreat modern white glass duplex',
    },
  },
  {
    id: 'victoria-island-retreat',
    badge: 'Residential',
    category: 'residential',
    location: 'VICTORIA ISLAND, LAGOS',
    title: 'Victoria Island Retreat',
    typology: 'Multi-Family Residence',
    description:
      'A sleek, multi-storey modern villa maximizing natural light through floor-to-ceiling glass, finished with clean masonry and quiet privacy.',
    image: whiteGlassDuplexImg,
    imageAlt: 'Victoria Island Retreat modern white glass duplex with landscaped lawn',

    heroSubtitle: 'A modern architectural statement in Victoria Island, Lagos.',
    overviewEyebrow: 'THE PROJECT',
    overviewHeading: 'Refined geometry.\nUncompromising\nprivacy.',
    overviewParagraphs: [
      'Designed as an oasis amidst the bustling urban rhythm of Victoria Island, this multi-family villa merges expansive glazing with solid monolithic stone walls.',
      'Indoor spaces flow effortlessly into landscaped exterior gardens, ensuring that natural cross-breezes and daylight permeate every level.',
    ],
    overviewFootnote: 'Executed with turnkey design-build oversight and certified structural precision.',

    keyFacts: [
      { label: 'LOCATION', value: 'Victoria Island, Lagos' },
      { label: 'TYPOLOGY', value: 'Multi-Family Residence' },
      { label: 'DISCIPLINES', value: 'Architecture & Turnkey Delivery' },
      { label: 'COMPLETION', value: 'Delivered 2024' },
    ],

    galleryEyebrow: 'INTERIOR RESOLUTION',
    galleryHeading: 'Purity of form.\nCalm interiors.',
    galleryItems: [
      {
        image: paloorPlantImg,
        caption: '01 / Sunlit lounge with integrated greenery',
        alt: 'Interior lounge with green planter elements',
      },
      {
        image: woodenPaloorImg,
        caption: '02 / Natural timber finishes and polished concrete',
        alt: 'Minimalist living area featuring premium wood flooring',
      },
    ],

    featuresEyebrow: 'HIGHLIGHTS',
    featuresHeading: 'Precision engineered\nfor living.',
    featuresList: [
      'Full-height curtain walling',
      'Rooftop sunset terrace',
      'Smart home energy automation',
      'Private security perimeter',
    ],

    locationCard: {
      tag: 'LOCATION',
      title: 'Prime coastal\nconnectivity.',
      address: 'Ahmadu Bello Way\nVictoria Island, Lagos',
      subtext: 'Minutes away from business headquarters and waterfront venues.',
      coordinates: [6.4281, 3.4219], // Victoria Island, Lagos
    },

    nextProject: {
      id: 'marina-residence',
      title: 'The Marina Residence',
      image: brownDuplexImg,
      imageAlt: 'The Marina Residence modern warm stone facade',
    },
  },
  {
    id: 'marina-residence',
    badge: 'Residential',
    category: 'residential',
    location: 'IKOYI, LAGOS · RESIDENTIAL',
    title: 'The Marina Residence',
    typology: 'Bespoke Residence',
    description:
      'Understated elegance in every detail—crafted for privacy, light, and enduring value across multiple levels of living.',
    image: brownDuplexImg,
    imageAlt: 'The Marina Residence modern warm stone and glass facade with garage',

    heroSubtitle: 'Bespoke architectural residence crafted along the waterfront.',
    overviewEyebrow: 'THE PROJECT',
    overviewHeading: 'Timeless texture.\nSubtle luxury.',
    overviewParagraphs: [
      'Constructed with tactile travertine stone, fluted timber panelling, and deep architectural recesses that protect against equatorial sun.',
      'A harmonious layout dedicated to family life, intimate entertainment, and quiet evening relaxation.',
    ],
    overviewFootnote: 'Delivered turnkey from concept sketch to interior styling handover.',

    keyFacts: [
      { label: 'LOCATION', value: 'Ikoyi, Lagos' },
      { label: 'TYPOLOGY', value: 'Bespoke Private Residence' },
      { label: 'DISCIPLINES', value: 'Design-Build & Project Oversight' },
      { label: 'COMPLETION', value: 'Completed 2023' },
    ],

    galleryEyebrow: 'MATERIALITY',
    galleryHeading: 'Crafted with\nintent.',
    galleryItems: [
      {
        image: paloorFireImg,
        caption: '01 / Central entertainment living hall',
        alt: 'Interior living salon with architectural lighting',
      },
      {
        image: paloorPlantImg,
        caption: '02 / Private inner garden courtyard view',
        alt: 'Sun-drenched relaxation corner',
      },
    ],

    featuresEyebrow: 'AMENITIES',
    featuresHeading: 'Thoughtful additions.',
    featuresList: [
      'Integrated solar microgrid',
      'Underground wine cellar',
      '4-car enclosed garage',
      'Dedicated staff quarters',
    ],

    locationCard: {
      tag: 'LOCATION',
      title: 'Secluded yet\naccessible.',
      address: 'Alexander Avenue\nIkoyi, Lagos',
      subtext: 'One of the most prestigious and serene residential addresses in Nigeria.',
      coordinates: [6.4565, 3.4422], // Alexander Ave, Ikoyi
    },

    nextProject: {
      id: 'garden-collection',
      title: 'The Garden Collection',
      image: duplex2CarsImg,
      imageAlt: 'The Garden Collection luxury multi-level villa',
    },
  },
  {
    id: 'garden-collection',
    badge: 'Residential',
    category: 'residential',
    location: 'LEKKI, LAGOS · RESIDENTIAL',
    title: 'The Garden Collection',
    typology: 'Terraced Homes',
    description:
      'Sculptural geometric architecture combined with tiered terrace gardens, ambient architectural lighting, and bespoke interior spaces.',
    image: duplex2CarsImg,
    imageAlt: 'The Garden Collection luxury multi-level villa with evening lighting',

    heroSubtitle: 'Sculptural terraced homes with vertical greenery in Lekki.',
    overviewEyebrow: 'THE PROJECT',
    overviewHeading: 'Vertical gardens.\nDynamic lines.',
    overviewParagraphs: [
      'The Garden Collection presents an ensemble of contemporary duplexes united by clean white cantilevered forms and cascading terrace planters.',
      'Each residence is oriented to optimize ocean breezes while sheltering private balconies from direct solar glare.',
    ],
    overviewFootnote: 'Full development planning, architectural design, and civil construction.',

    keyFacts: [
      { label: 'LOCATION', value: 'Lekki Phase 1, Lagos' },
      { label: 'TYPOLOGY', value: 'Terraced Homes' },
      { label: 'DISCIPLINES', value: 'Masterplanning & Construction' },
      { label: 'COMPLETION', value: 'Completed 2024' },
    ],

    galleryEyebrow: 'SPACES',
    galleryHeading: 'Modern living\nredefined.',
    galleryItems: [
      {
        image: woodenPaloorImg,
        caption: '01 / Open plan kitchen & dining connection',
        alt: 'Contemporary dining and lounge zone',
      },
      {
        image: paloorTvImg,
        caption: '02 / Upper floor media room',
        alt: 'Modern lounge room',
      },
    ],

    featuresEyebrow: 'SPECIFICATIONS',
    featuresHeading: 'Engineered excellence.',
    featuresList: [
      'Multi-level garden terraces',
      'Reinforced concrete structure',
      'Dedicated backup power',
      'Smart perimeter security',
    ],

    locationCard: {
      tag: 'LOCATION',
      title: 'At the heart of\nLekki development.',
      address: 'Admiralty Road\nLekki Phase 1, Lagos',
      subtext: 'Direct access to shopping, dining, and coastal links.',
      coordinates: [6.4474, 3.4723], // Admiralty Way, Lekki
    },

    nextProject: {
      id: 'avencrest-commercial',
      title: 'Avencrest Commercial',
      image: storyCommercialImg,
      imageAlt: 'Avencrest Commercial stone and glass building',
    },
  },
  {
    id: 'avencrest-commercial',
    badge: 'Commercial',
    category: 'commercial',
    location: 'COMMERCIAL · ABUJA',
    title: 'Avencrest Commercial',
    typology: 'Commercial Development',
    description:
      'A contemporary mixed-use development combining textured masonry with expansive curtain glazing for modern corporate enterprise.',
    image: storyCommercialImg,
    imageAlt: 'Avencrest Commercial stone and glass building',

    heroSubtitle: 'Contemporary corporate and commercial hub in Abuja.',
    overviewEyebrow: 'THE PROJECT',
    overviewHeading: 'Civic presence.\nEnduring value.',
    overviewParagraphs: [
      'A high-performance corporate building engineered to provide open, column-free office floor plates that readily adapt to corporate tenants.',
      'Natural stone facades give the building an authoritative, timeless identity while low-E insulated glass maximizes daylight efficiency.',
    ],
    overviewFootnote: 'Supervised from commercial feasibility to MEP commissioning and handover.',

    keyFacts: [
      { label: 'LOCATION', value: 'Central Business District, Abuja' },
      { label: 'TYPOLOGY', value: 'Commercial / Corporate' },
      { label: 'DISCIPLINES', value: 'Commercial Architecture & PM' },
      { label: 'COMPLETION', value: 'Completed 2023' },
    ],

    galleryEyebrow: 'CORPORATE VOLUMES',
    galleryHeading: 'Form, function & prestige.',
    galleryItems: [
      {
        image: paloorTvImg,
        caption: '01 / Executive boardroom & conference lounge',
        alt: 'Corporate lounge and boardroom setting',
      },
      {
        image: paloorFireImg,
        caption: '02 / Ground floor reception & triple-height atrium',
        alt: 'Grand commercial entrance foyer',
      },
    ],

    featuresEyebrow: 'BUILDING SYSTEMS',
    featuresHeading: 'Institutional-grade\ninfrastructure.',
    featuresList: [
      'High-speed commercial elevators',
      'Dual generator redundancy',
      'Advanced HVAC climate control',
      'Secure subterranean parking',
    ],

    locationCard: {
      tag: 'LOCATION',
      title: 'Prime CBD\npositioning.',
      address: 'Constitution Avenue\nCBD, Abuja, Nigeria',
      subtext: 'Proximity to diplomatic and government administrative centres.',
      coordinates: [9.0579, 7.4951], // CBD, Abuja
    },

    nextProject: {
      id: 'terrace-collection',
      title: 'The Terrace Collection',
      image: duplexTerraceImg,
      imageAlt: 'The Terrace Collection modern residential development',
    },
  },
  {
    id: 'terrace-collection',
    badge: 'Residential',
    category: 'residential',
    location: 'IKOYI, LAGOS · RESIDENTIAL',
    title: 'The Terrace Collection',
    typology: 'Luxury Residences',
    description:
      'Refined contemporary duplex residences featuring timber ceilings, airy balcony lounges, and generous natural daylight.',
    image: duplexTerraceImg,
    imageAlt: 'The Terrace Collection modern residential development with private balconies',

    heroSubtitle: 'Boutique collection of luxury duplex residences in Ikoyi.',
    overviewEyebrow: 'THE PROJECT',
    overviewHeading: 'Airy volumes.\nIntimate luxury.',
    overviewParagraphs: [
      'A boutique collection of homes that prioritize privacy and bespoke finishes. Warm timber details and clean render create an inviting, sophisticated atmosphere.',
      'Balconies overlook quiet streets, providing a tranquil sanctuary in the city.',
    ],
    overviewFootnote: 'Complete architectural design, civil engineering, and luxury interior finishing.',

    keyFacts: [
      { label: 'LOCATION', value: 'Ikoyi, Lagos' },
      { label: 'TYPOLOGY', value: 'Boutique Duplexes' },
      { label: 'DISCIPLINES', value: 'Architecture, Interior & Build' },
      { label: 'COMPLETION', value: 'Delivered 2024' },
    ],

    galleryEyebrow: 'FINISHES',
    galleryHeading: 'Every detail considered.',
    galleryItems: [
      {
        image: paloorPlantImg,
        caption: '01 / Master suite private balcony lounge',
        alt: 'Private balcony lounge with indoor plants',
      },
      {
        image: paloorFireImg,
        caption: '02 / Living room with built-in hearth',
        alt: 'Living area with customized finishes',
      },
    ],

    featuresEyebrow: 'FEATURES',
    featuresHeading: 'Curated for living.',
    featuresList: [
      'Private terrace lounges',
      'Custom European kitchen cabinetry',
      'Dedicated inverter & power backup',
      '24/7 security concierge',
    ],

    locationCard: {
      tag: 'LOCATION',
      title: 'Serene Ikoyi\nsanctuary.',
      address: 'Glover Road\nIkoyi, Lagos, Nigeria',
      subtext: 'Surrounded by mature trees and elite residential enclaves.',
      coordinates: [6.4498, 3.4410], // Glover Road, Ikoyi
    },

    nextProject: {
      id: 'ikoyi-residence',
      title: 'The Ikoyi Residence',
      image: palmDulexImg,
      imageAlt: 'The Ikoyi Residence exterior with palm trees',
    },
  },
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
