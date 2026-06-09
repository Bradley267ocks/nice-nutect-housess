/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
