/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, GalleryItem, ProcessStep, Service, Stat, Testimonial, WhyChooseUsItem } from './types.ts';

export const SERVICES: Service[] = [
  {
    id: 'house-construction',
    title: 'Nutec House Construction',
    description: 'Custom-built Nutec homes designed for durability and comfort.',
    icon: 'Home',
  },
  {
    id: 'offices',
    title: 'Nutec Offices',
    description: 'Sleek and functional office spaces for your business or home.',
    icon: 'Briefcase',
  },
  {
    id: 'classrooms',
    title: 'Nutec Classrooms',
    description: 'Safe and cost-effective educational spaces for schools and institutions.',
    icon: 'GraduationCap',
  },
  {
    id: 'site-offices',
    title: 'Site Offices',
    description: 'Portable and secure site offices for construction and projects.',
    icon: 'HardHat',
  },
  {
    id: 'renovations',
    title: 'Renovations',
    description: 'Expert renovations and additions to your existing Nutec structures.',
    icon: 'Hammer',
  },
  {
    id: 'roofing',
    title: 'Roofing Solutions',
    description: 'Complete roofing installations and repairs for all structures.',
    icon: 'ArrowUpFromLine',
  },
];

export const STATS: Stat[] = [
  { id: '1', label: 'Projects Completed', value: '450+' },
  { id: '2', label: 'Years Experience', value: '12' },
  { id: '3', label: 'Satisfied Clients', value: '98%' },
  { id: '4', label: 'Quality Guarantee', value: '100%' },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  { id: '1', title: 'Affordable Pricing', icon: 'DollarSign' },
  { id: '2', title: 'Quality Materials', icon: 'ShieldCheck' },
  { id: '3', title: 'Experienced Team', icon: 'Users' },
  { id: '4', title: 'Fast Completion', icon: 'Zap' },
  { id: '5', title: 'Reliable Service', icon: 'CheckCircle' },
  { id: '6', title: 'Free Quotations', icon: 'FileText' },
];

export const GALLERY: GalleryItem[] = [
  { id: '1', src: '/src/assets/images/hero_nutec_house_png_1781022707611.png', alt: 'Modern Nutec House Exterior' },
  { id: '2', src: '/src/assets/images/nutec_office_classroom_png_1781022734854.png', alt: 'Nutec Office Classroom' },
  { id: '3', src: '/src/assets/images/nutec_modern_cottage_png_1781022747941.png', alt: 'Nutec Modern Cottage' },
  { id: '4', src: '/src/assets/images/nutec_renovation_png_1781022763984.png', alt: 'Nutec Renovation Addition' },
  { id: '5', src: '/src/assets/images/nutec_interior_png_1781022780417.png', alt: 'Nutec House Interior' },
  { id: '6', src: '/src/assets/images/about_nutec_construction_png_1781022720284.png', alt: 'Nutec Construction Process' },
];

export const PROCESS: ProcessStep[] = [
  { id: 1, title: 'Consultation', description: 'Initial meeting to discuss your vision and requirements.' },
  { id: 2, title: 'Site Visit', description: 'On-site technical evaluation and measurement.' },
  { id: 3, title: 'Quotation', description: 'Transparent and detailed cost breakdown for your project.' },
  { id: 4, title: 'Construction', description: 'Efficient and professional building phase with high-quality materials.' },
  { id: 5, title: 'Inspection', description: 'Rigorous quality checks to ensure everything meets our standards.' },
  { id: 6, title: 'Handover', description: 'Final walk-through and delivery of your new Nutec structure.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah J.',
    role: 'Home Owner',
    content: 'Nice Nutec Houses did an incredible job with my garden cottage. The team was professional, fast, and the quality is outstanding.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael T.',
    role: 'Business Owner',
    content: 'The site office they built for us exceeded expectations. It looks professional and is very well insulated.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Elena R.',
    role: 'Principal',
    content: 'Our new classrooms are a hit with the students and staff. Cost-effective and beautiful design.',
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'How long does a Nutec house take to build?',
    answer: 'A standard 2-bedroom Nutec house typically takes 4-6 weeks to complete, depending on the site conditions and finishes.',
  },
  {
    id: '2',
    question: 'Is Nutec better than brick and mortar?',
    answer: 'Nutec is highly durable, fire-resistant, and provides excellent insulation. It is often faster and more cost-effective to build than traditional brick.',
  },
  {
    id: '3',
    question: 'Do Nutec houses require a lot of maintenance?',
    answer: 'Nutec requires very little maintenance. The fiber cement boards are rot-proof and only need occasional painting to keep them looking new.',
  },
  {
    id: '4',
    question: 'Are your quotations really free?',
    answer: 'Yes! We provide free, no-obligation quotations for all projects including sit visits if necessary.',
  },
];
