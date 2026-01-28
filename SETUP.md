# Light Vision Marketing - Setup Guide

## 📋 Översikt

Detta är en modern marketing-webbplats byggd med Next.js, TypeScript och Tailwind CSS för Light Vision Marketing.

## 🚀 Kom igång

### 1. Installera beroenden

Alla nödvändiga paket är redan installerade, men om du behöver installera dem igen:

```bash
npm install
```

### 2. Konfigurera Email-funktionalitet

För att kontaktformuläret ska fungera behöver du en Resend API-nyckel:

1. Gå till [https://resend.com](https://resend.com) och skapa ett gratis konto
2. Skapa en API-nyckel i din Resend dashboard
3. Öppna filen `.env.local` i projektets rot
4. Ersätt `your_resend_api_key_here` med din faktiska API-nyckel:

```env
RESEND_API_KEY=re_din_faktiska_api_nyckel_här
```

5. Öppna `app/api/contact/route.ts` och uppdatera email-adressen:
   - Rad 19: Ändra `from` till din verifierade domän (eller använd `onboarding@resend.dev` för testning)
   - Rad 20: Ändra `to` till den email-adress där du vill ta emot kontaktförfrågningar

### 3. Lägg till innehåll

#### Logotyp
- Lägg till er logotyp i `public/images/`
- Uppdatera `components/Header.tsx` för att använda er logotyp istället för text

#### Teambild
- Lägg till en teambild i `public/images/team.jpg`
- Bilden visas automatiskt i Om Oss-sektionen

#### Behind-the-scenes videos/bilder
- Lägg till videos och bilder i `public/videos/` och `public/images/`
- Uppdatera `components/Hero.tsx` för att visa era faktiska videos/bilder

#### Kundloggor
- Lägg till kundloggor i `public/images/clients/`
- Uppdatera `components/Clients.tsx` för att visa faktiska loggor

### 4. Starta utvecklingsservern

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare för att se sidan.

### 5. Bygg för produktion

```bash
npm run build
npm start
```

## 📁 Projektstruktur

```
marketing/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API-route för kontaktformuläret
│   ├── globals.css               # Globala styles
│   ├── layout.tsx                # Root layout med metadata
│   └── page.tsx                  # Huvudsidan
├── components/
│   ├── Header.tsx                # Header med navigering
│   ├── Hero.tsx                  # Hero-sektion
│   ├── Clients.tsx               # Rullande kundloggor
│   ├── Services.tsx              # Tjänster-sektion
│   ├── About.tsx                 # Om Oss-sektion
│   └── ContactForm.tsx           # Kontaktformulär
├── public/
│   ├── images/                   # Bilder
│   └── videos/                   # Videos
├── .env.local                    # Miljövariabler (lägg till i .gitignore)
└── .env.example                  # Exempel på miljövariabler
```

## 🎨 Anpassning

### Färger

Färgerna definieras i `app/globals.css`. Huvudfärgerna är:

- Orange accent: `#ff6b00` (kan ändras i `:root`)
- Svart text: `#0a0a0a`
- Vit bakgrund: `#ffffff`

### Typsnitt

Projektet använder Geist Sans och Geist Mono från Google Fonts (definieras i `app/layout.tsx`).

### Animationer

Animationer görs med Framer Motion. Du kan justera timing och effekter i respektive komponent.

## 📧 Kontaktformulär

Kontaktformuläret skickar email via Resend API. Formuläret validerar:

- Förnamn (required)
- Efternamn (required)
- Telefon (required)
- Email (required)
- Bolag (required)
- Meddelande (optional)

## 🔧 Teknisk stack

- **Framework**: Next.js 15 med App Router
- **Språk**: TypeScript
- **Styling**: Tailwind CSS
- **Animationer**: Framer Motion
- **Icons**: React Icons
- **Email**: Resend
- **Deployment**: Vercel (rekommenderat)

## 🚀 Deployment

### Vercel (Rekommenderat)

1. Push koden till GitHub
2. Gå till [vercel.com](https://vercel.com)
3. Importera ditt GitHub repository
4. Lägg till miljövariabler i Vercel dashboard:
   - `RESEND_API_KEY`
5. Deploy!

## 📝 Att göra efter deployment

- [ ] Lägg till er logotyp
- [ ] Lägg till teambild
- [ ] Lägg till behind-the-scenes videos/bilder
- [ ] Lägg till kundloggor
- [ ] Konfigurera Resend API-nyckel
- [ ] Uppdatera email-adressen för mottagning av kontaktförfrågningar
- [ ] Testa kontaktformuläret
- [ ] Lägg till Google Analytics eller liknande (optional)
- [ ] Sätt upp egen domän

## 🆘 Support

Om du stöter på problem:

1. Kontrollera att alla miljövariabler är korrekt konfigurerade
2. Kontrollera att Resend API-nyckeln är giltig
3. Kontrollera console logs i webbläsaren för felmeddelanden
4. Kontrollera terminal/server logs för backend-fel

## 📄 Licens

Alla rättigheter förbehållna Light Vision Marketing © 2026
