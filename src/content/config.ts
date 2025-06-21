import { defineCollection, z } from "astro:content";

const company = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    mission: z.string(),
    vision: z.string(),
    differentiators: z.array(z.string()),
  })
});

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    icon: z.string().optional(),
    order: z.number().optional(),
    subtitle: z.string().optional(),
    longDescription: z.string().optional(),
    image: z.string().optional(),
    benefits: z.array(z.string()).optional(),
    useCases: z.array(z.string()).optional(),
    process: z.array(z.string()).optional(),
    pricing: z.array(z.string()).optional(),
    url: z.string().optional(),
  })
});

const pricing = defineCollection({
  schema: z.object({
    plan: z.string(),
    price: z.string(),
    features: z.array(z.string()),
    duration: z.string().optional(),
  })
});

const contact = defineCollection({
  schema: z.object({
    department: z.string(),
    email: z.string().email(),
    phone: z.string(),
    whatsapp: z.string().optional(),
  })
});

export const collections = { company, services, pricing, contact }; 