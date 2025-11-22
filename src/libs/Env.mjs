/* eslint-disable import/prefer-default-export */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const Env = createEnv({
  server: {
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),
    NEXT_PUBLIC_NOME_COGNOME: z.string().nonempty(),
    NEXT_PUBLIC_SIGLA: z.string().nonempty(),
    NEXT_PUBLIC_LATITUDINE: z.string().nonempty(),
    NEXT_PUBLIC_LONGITUDINE: z.string().nonempty(),
    NEXT_PUBLIC_ZOOM: z.string().nonempty(),
    NEXT_PUBLIC_COMPANY_EMAIL: z.string().email(),
    NEXT_PUBLIC_COMPANY_EMAIL_SECONDARY: z.string().email(),
    NEXT_PUBLIC_COMPANY_PHONE: z.string().nonempty(),
    NEXT_PUBLIC_COMPANY_NAME: z.string().nonempty(),
    NEXT_PUBLIC_ENGINEER_NAME: z.string().nonempty(),
    NEXT_PUBLIC_VAT_NUMBER: z.string().nonempty(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_NOME_COGNOME: process.env.NEXT_PUBLIC_NOME_COGNOME,
    NEXT_PUBLIC_SIGLA: process.env.NEXT_PUBLIC_SIGLA,
    NEXT_PUBLIC_LATITUDINE: process.env.NEXT_PUBLIC_LATITUDINE,
    NEXT_PUBLIC_LONGITUDINE: process.env.NEXT_PUBLIC_LONGITUDINE,
    NEXT_PUBLIC_ZOOM: process.env.NEXT_PUBLIC_ZOOM,
    NEXT_PUBLIC_COMPANY_EMAIL: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
    NEXT_PUBLIC_COMPANY_EMAIL_SECONDARY: process.env.NEXT_PUBLIC_COMPANY_EMAIL_SECONDARY,
    NEXT_PUBLIC_COMPANY_PHONE: process.env.NEXT_PUBLIC_COMPANY_PHONE,
    NEXT_PUBLIC_COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME,
    NEXT_PUBLIC_ENGINEER_NAME: process.env.NEXT_PUBLIC_ENGINEER_NAME,
    NEXT_PUBLIC_VAT_NUMBER: process.env.NEXT_PUBLIC_VAT_NUMBER,
  },
});
