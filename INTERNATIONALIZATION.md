# Implementazione next-intl - Guida Completa

## Cosa è stato implementato

### 1. **App Router con i18n Routing** ✅
- URL localizzati: `/en/` e `/it/`
- Rilevamento automatico della lingua
- Fallback su inglese come lingua predefinita

### 2. **Configurazione Completa** ✅
- `next.config.mjs` - Plugin next-intl integrato
- `src/i18n/routing.ts` - Configurazione delle rotte
- `src/i18n/navigation.ts` - API di navigazione localizzata
- `src/i18n/request.ts` - Gestione delle richieste localizzate
- `src/middleware.ts` - Middleware per il routing automatico

### 3. **File di Traduzione** ✅
- `messages/en.json` - Traduzioni inglesi
- `messages/it.json` - Traduzioni italiane

### 4. **Esempi Pratici Implementati**

#### **Contenuto Statico** (AboutUs.tsx)
```tsx
function AboutUs() {
  const t = useTranslations('aboutUs');
  
  return (
    <div>
      <span>{t('badge')}</span>
      <p>{t('title.line1')}</p>
      <p>{t('title.line2')}</p>
      <p>{t('description')}</p>
      <ButtonRed text={t('button')} />
    </div>
  );
}
```

#### **Contenuto Dinamico** (content.tsx)
```tsx
export const useServiceData = () => {
  const t = useTranslations('services');
  
  return [
    {
      id: 1,
      icon: phone,
      title: t('telemedicine.title'),
      content: t('telemedicine.content'),
    },
    // ...altri servizi
  ];
};
```

## Come usare le traduzioni

### **Per contenuti statici** 
1. Aggiungi la traduzione in `messages/en.json` e `messages/it.json`
2. Usa `useTranslations('namespace')` nel componente
3. Riferisci le chiavi con la notazione punto: `t('title.line1')`

### **Per contenuti dinamici**
1. Crea un hook personalizzato che usa `useTranslations`
2. Combina i dati statici (immagini, ID) con le traduzioni
3. Esporta il hook per l'uso nei componenti

## Struttura delle traduzioni

```json
{
  "aboutUs": {
    "badge": "About Us",
    "title": {
      "line1": "Together, We Can",
      "line2": "Achieve Optimal Health"
    },
    "description": "...",
    "button": "Know More About Us"
  }
}
```

## Componenti aggiornati

- ✅ `AboutUs.tsx` - Contenuto statico
- ✅ `Heading.tsx` - Hero section 
- ✅ `Services.tsx` - Contenuto dinamico con hook
- ✅ `content.tsx` - Hook per contenuti dinamici
- ✅ `LanguageSwitcher.tsx` - Cambio lingua

## Come testare

1. Avvia il server: `npm run dev`
2. Visita: `http://localhost:3000/en` (inglese)
3. Visita: `http://localhost:3000/it` (italiano)
4. Le traduzioni si applicano automaticamente

## Prossimi passi

1. Aggiungi più traduzioni nei file JSON
2. Crea più hook per contenuti dinamici (doctors, reviews, FAQ)
3. Integra il LanguageSwitcher nell'header
4. Aggiungi traduzioni per tutti i componenti rimanenti

## Vantaggi di questo approccio

- **SEO**: URL localizzati `/en/about` e `/it/about`
- **Prestazioni**: Solo le traduzioni necessarie vengono caricate
- **Scalabilità**: Facile aggiungere nuove lingue
- **Type Safety**: Autocompletamento delle chiavi di traduzione
- **Flessibilità**: Mescola contenuti tradotti e non tradotti
