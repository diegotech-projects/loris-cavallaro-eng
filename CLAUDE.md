# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Fix linting issues and format code
- `npm run check-types` - TypeScript type checking

### Database Operations
- `npm run db:generate` - Generate database schema with Drizzle
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Drizzle Studio for database management

### Testing
- `npm run test` - Run Jest unit tests
- `npm run cypress` - Open Cypress for E2E testing
- `npm run e2e` - Run E2E tests in development
- `npm run e2e:headless` - Run E2E tests headlessly

### Git & Commits
- `npm run commit` - Interactive commit using Commitizen (enforces conventional commits)
- Uses Husky for pre-commit hooks with lint-staged

## High-Level Architecture

### Project Structure
This is a **Next.js 13+ App Router** project with internationalization (i18n) support. The main entry point is `src/app/[locale]/page.tsx` which combines all landing page sections.

### Key Architectural Patterns

**1. Internationalization (next-intl)**
- URLs are localized: `/en/` and `/it/`
- Translation files in `messages/en.json` and `messages/it.json`
- Components use `useTranslations()` hook for content
- Dynamic content handled via custom hooks (see `src/data/content.tsx`)

**2. Theme System**
- Professional theming system in `tailwind.config.js`
- Three themes: `default`, `professional`, `professionalDark`
- Semantic color tokens: `bg-themeBackground`, `text-themeTextPrimary`, etc.
- Switch themes by changing `activeTheme` variable and restarting dev server
- Runtime theme switching available via `tailwind.config.runtime.js`

**3. Component Architecture**
- Landing page sections as individual components in `src/components/`
- Page layout combines sections: Hero → Stats → Services → Profiles → Reviews → FAQ → Contact
- Shared components in `src/shared/` for reusable UI elements
- Data layer in `src/data/` with TypeScript types

**4. Database & Auth**
- DrizzleORM with SQLite/Turso for database
- Clerk for authentication (configured via environment variables)
- Database schema in `src/models/Schema.ts`
- Migrations in `migrations/` directory

### Current Content Focus
The template is currently configured as a **medical landing page** but contains engineering project assets in `src/_docs/data/` ready for adaptation to a civil engineering portfolio.

### Landing Page Sections
1. **Heading.tsx** - Hero section with diagonal background
2. **Stats.tsx** - Impact numbers/statistics
3. **Services.tsx** - Service offerings (uses i18n dynamic content)
4. **BookDoctor.tsx** - Professional profiles
5. **Reviews.tsx** - Client testimonials
6. **FAQS.tsx** - FAQ accordion
7. **Appointment.tsx** - Contact form

### Theme Configuration
- Currently using `professional` theme (navy/slate/gold palette)
- Switch themes by editing `activeTheme` in `tailwind.config.js`
- All components should use semantic theme colors, not hardcoded values

### Internationalization Patterns
- Static content: `const t = useTranslations('namespace')` → `t('key')`
- Dynamic content: Custom hooks in `src/data/content.tsx` that combine static data with translations
- Translation keys use dot notation: `t('title.line1')`

### Environment Setup
Required environment variables:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk auth
- `CLERK_SECRET_KEY` - Clerk auth
- `DATABASE_URL` - Database connection
- `DATABASE_AUTH_TOKEN` - Database auth (Turso)

### Development Workflow
1. Always run `npm run lint` and `npm run check-types` before committing
2. Use `npm run commit` for properly formatted commit messages
3. Database changes require running `npm run db:generate` then `npm run db:migrate`
4. Test theme changes by restarting dev server after config updates

### Testing Strategy
- Unit tests colocated with components
- E2E tests in `cypress/` directory
- Storybook for component development
- Visual testing with Percy (optional)

### Content Adaptation Notes
The template contains medical-focused content that needs adaptation for civil engineering. Key areas:
- Update translation files for engineering terminology
- Replace medical service icons/images with engineering ones
- Modify `src/data/content.tsx` for engineering services
- Update `src/utils/AppConfig.ts` for site metadata


# REQUIREMENTS.md

# Introduction

I need to do a landing website for a civil engineer friends of mine, I am a developer but I almost never used frontend. I already set up a template project about medical services because I wanted a starting point since I don't want to mess around with css and html. The technologies used are Nextjs, Tailwind and next-intl for internationalization.

The final website should present the civil engineering service, be multilingual (ita (default) and eng), have a contact info box, be responsive (probably is already), cookie management, have a cms like sanity to let him be able to edit the content of the website (text, img, documents)

## References

I will attach the actual screenshot of different pages; the pages of a reference website, and the content (text, pictures, video, documents) that I have, because I wouldn't even know how to design/structure these elements in the website.


## Actual template we start from

![alt text](src/_docs/current_page/current_page.jpeg)

## Reference website (to take as inspiration not copy)

Link

https://gadstudio.eu/

Some screenshot

- HOME

![alt text](src/_docs/ref_home.jpeg)

- LA FORMULA

![alt text](src/_docs/ref_la-formula-gad.jpeg)

- PROGETTI list

![alt text](src/_docs/ref_progetti.jpeg)

- PROGETTI detail

![alt text](src/_docs/ref_progetti_details.jpeg)

- SERVIZI

![alt text](src/_docs/ref_servizi.jpeg)


## Material at our disposal and vocal requirements (media under src/_docs/data/)

```
INGEGNERE CIVILE AMBIENTALE, PROGETTISTA EDILE

Loris Cavallaro
ingegnere civile e ambientale per contribuire a realizzare progetti di grande valore. con una laurea magistrale in sicurezza sui luoghi di lavoro, Loris e il professionista che si occupa di bandi di gara, gare d’appalto, progettazioni civili, pratiche urbanistiche, diagnosi legge 10, APE convenzionale e progettazione di impianti fotovoltaici. Insomma, un vero e proprio punto di riferimento quando si parla di progettazione e sostenibilità.
Mission: vedere che ciò che crea sulla carta si trasforma in realtà tangibile, costruendo non solo strutture, ma anche bellezza e funzionalità, è per lui l’aspetto più gratificante di far parte di questa realtà.


loriscavallaro22@gmail.com
Ingegnerelorising@gmail.com

La pec la inseriamo poi 

3801477121
```
```
Puoi formulare anche con ia una breve descrizione che si avvicina a questo tipo di scrittura

Impostato come un portfolio professionale, con sezioni chiare:

1. Home
Hero image con una tua foto o un progetto

Claim: “Ingegneria civile per l’architettura moderna”

Pulsante: [Scopri i progetti]

2. Chi sono
Breve bio: laurea, anni di esperienza, specializzazione in edilizia civile e sostenibile

Valori: funzionalità, estetica, rispetto ambientale

3. Servizi
Progettazione strutturale

Direzione lavori

Ristrutturazioni e ampliamenti

Verifiche statiche e collaudi

Consulenze tecniche

4. Progetti
Griglia con immagini realistiche e descrizioni brevi:

“Villa minimalista in collina”

“Ristrutturazione urbana in stile contemporaneo”

“Palazzina residenziale con classe energetica A+”

“Interni open-space su misura”

5. Contatti
Form semplice

Mail, telefono

Mappa con sede (es. Palermo, Milano…)
```

# How to proceed

I gave you all context just to be aware of the final result, but I would proceed per step, implementing one requirement per time.
My main issue is not to be expert with nextjs best practices and really bad at html and css, also having no fantasy about design and where is better to put things. By the way I am a developer so something, once understood how it works, I can do it so for instance once understood how to setup sanity, or translations (I already setup something) I can do it.
