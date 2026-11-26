import heroResidenceImg from '../assets/images/properties/palm dulex.jpg';
import aboutBuildingImg from '../assets/images/properties/2story 2.jpg';
import ikoyiResidenceImg from '../assets/images/properties/palm dulex.jpg';
import viRetreatImg from '../assets/images/properties/white glass duplex.jpg';

export const HERO_DATA = {
  eyebrow: 'Architecture · Development · Construction',
  titleLine1: 'Shaping places.',
  titleLine2: 'Elevating lives.',
  subtitle:
    'Thoughtful property development and construction across Nigeria—crafted with clarity, precision, and enduring value.',
  image: heroResidenceImg,
  imageAlt: 'Modern tropical residence designed and built by Avencrest',
};

export const TRUST_STATS = [
  { value: '15+ Years', label: 'Industry Excellence' },
  { value: '30+ Projects', label: 'Delivered Across Nigeria' },
  { value: '100% Turnkey', label: 'Integrated Delivery' },
];

export const ABOUT_DATA = {
  eyebrow: 'ABOUT AVENCREST',
  titleLine1: 'Thoughtful spaces.',
  titleLine2: 'Enduring value.',
  paragraphs: [
    'We believe true quality goes beyond surface appeal. Every Avencrest project starts with disciplined planning, architectural clarity, and deep respect for the communities we build within.',
    'From concept design through structural execution and final handover, our integrated approach removes friction—delivering residences and commercial assets built to endure.',
  ],
  ctaLabel: 'Explore our story',
  ctaTo: '/about',
  image: aboutBuildingImg,
  imageAlt: 'Contemporary stone and glass commercial building',
};

export const SERVICES_LIST = [
  {
    number: '01',
    title: 'Architectural Design',
    description:
      'Bespoke residential and commercial concepts crafted around climate, proportion, and daily living.',
    featured: true,
    to: '/services',
  },
  {
    number: '02',
    title: 'Real Estate Development',
    description:
      'Strategic site evaluation, feasibility planning, and turnkey property developments built for longevity.',
    featured: false,
    to: '/services',
  },
  {
    number: '03',
    title: 'Construction',
    description:
      'Precision structural execution, site supervision, and uncompromising material standards on every build.',
    featured: false,
    to: '/services',
  },
  {
    number: '04',
    title: 'Project Management',
    description:
      'Transparent scheduling, budget stewardship, and structured milestone reporting across every phase.',
    featured: false,
    to: '/services',
  },
  {
    number: '05',
    title: 'Design-Build',
    description:
      'Single-point accountability uniting architectural intent and construction delivery under one roof.',
    featured: false,
    to: '/services',
  },
];

export const FEATURED_PROJECTS = [
  {
    id: 'ikoyi-residence',
    location: 'IKOYI, LAGOS · RESIDENTIAL',
    title: 'The Ikoyi Residence',
    summary: 'Contemporary tropical residence featuring timber louvers and expansive glazing.',
    image: ikoyiResidenceImg,
    imageAlt: 'The Ikoyi Residence exterior with palm trees and louvers',
    to: '/projects',
  },
  {
    id: 'victoria-island-retreat',
    location: 'VICTORIA ISLAND, LAGOS · RESIDENTIAL',
    title: 'Victoria Island Retreat',
    summary: 'Minimalist glass-and-limestone villa designed for natural light and quiet privacy.',
    image: viRetreatImg,
    imageAlt: 'Victoria Island Retreat modern white glass duplex',
    to: '/projects',
  },
];

export const CORE_VALUES = [
  {
    number: '01',
    key: 'quality',
    title: 'Quality',
    description:
      'Unwavering standards in materials, structural engineering, and finishing on every project.',
    cardClass: 'bg-white text-ink border border-primary/10',
    mutedClass: 'text-muted',
    iconClass: 'text-primary',
  },
  {
    number: '02',
    key: 'innovation',
    title: 'Innovation',
    description:
      'Forward-looking architectural methods and practical building systems tailored for modern living.',
    cardClass: 'bg-[#B4EC51] text-ink border border-transparent',
    mutedClass: 'text-ink/80',
    iconClass: 'text-ink',
  },
  {
    number: '03',
    key: 'professionalism',
    title: 'Professionalism',
    description:
      'Disciplined governance, clear documentation, and proactive accountability at every stage.',
    cardClass: 'bg-primary text-white border border-transparent',
    mutedClass: 'text-white/80',
    iconClass: 'text-white',
  },
  {
    number: '04',
    key: 'excellence',
    title: 'Excellence',
    description:
      'Precision craftsmanship and thoughtful details designed to stand the test of time.',
    cardClass: 'bg-[#BFE0CD] text-ink border border-transparent',
    mutedClass: 'text-ink/80',
    iconClass: 'text-primary',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Understanding your goals, site context, timeline, and investment parameters from day one.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Translating vision into architectural concepts, structural engineering plans, and approvals.',
  },
  {
    number: '03',
    title: 'Delivery',
    description:
      'Coordinated construction execution with strict quality assurance and clear milestone updates.',
  },
  {
    number: '04',
    title: 'Handover',
    description:
      'Thorough final inspections, commissioning, and a seamless transition into your completed space.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'A shared vision. Clear communication. A result that feels considered in every detail.',
    name: 'Tunde Adeyemi',
    role: 'Private Client · Ikoyi',
    initials: 'TA',
    project: 'The Ikoyi Residence',
  },
  {
    quote:
      'Avencrest brought structure and transparency to our entire build. Every milestone was delivered with remarkable discipline.',
    name: 'Amaka Okafor',
    role: 'Managing Partner · Victoria Island',
    initials: 'AO',
    project: 'Victoria Island Retreat',
  },
  {
    quote:
      'From early feasibility to final commissioning, their team balanced architectural ambition with practical execution.',
    name: 'Chidi Nwosu',
    role: 'Development Director · Abuja',
    initials: 'CN',
    project: 'Commercial Annex',
  },
];
