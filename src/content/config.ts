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