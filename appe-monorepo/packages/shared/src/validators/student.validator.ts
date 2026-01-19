import { z } from 'zod';

export const createParticipationSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  type: z.enum(['CONFERENCE', 'WORKSHOP', 'PROJECT', 'RESEARCH', 'COMMUNITY_SERVICE', 'VOLUNTEER']),
  level: z.enum(['COLLEGE', 'UNIVERSITY', 'NATIONAL', 'INTERNATIONAL']),
  organizer: z.string().optional(),
  eventDate: z.coerce.date(),
  role: z.string().optional(),
  hours: z.number().positive().optional(),
  description: z.string().optional(),
});

export const createAwardSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  awardingBody: z.string().min(2, 'Awarding body is required'),
  level: z.enum(['COLLEGE', 'UNIVERSITY', 'NATIONAL', 'INTERNATIONAL']),
  category: z.enum(['ACADEMIC', 'RESEARCH', 'LEADERSHIP', 'COMMUNITY', 'INNOVATION', 'CLINICAL', 'COMPETITION', 'SCHOLARSHIP']),
  dateReceived: z.coerce.date(),
  description: z.string().optional(),
});
