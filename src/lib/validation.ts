import {z} from 'zod';
export const inquirySchema=z.object({name:z.string().trim().min(1).max(120),phone:z.string().trim().max(40).regex(/^[+\d()\s-]*$/),email:z.email().max(254),service:z.string().trim().min(1).max(120),message:z.string().trim().min(1).max(2000),honey:z.string().max(200)});
