# NDIS Support Coordination Template - Customization Guide

This is a reusable Next.js template for NDIS Support Coordination websites. It's designed to be easily customized for different businesses while maintaining a professional, modern look.

## Features Included

Based on the reference websites:
- ✅ Top header with contact details and service area
- ✅ Smooth, modern website layout
- ✅ "Book Free Consultation" button
- ✅ FAQ accordion section
- ✅ "Find out if you're eligible for NDIS" section with steps
- ✅ Request callback form
- ✅ Responsive mobile design
- ✅ Tailwind CSS styling
- ✅ TypeScript support

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## How to Customize for a New Website

### 1. Update Site Configuration

Edit `src/config/site.ts` to change all business-specific information:

```typescript
export const siteConfig = {
  // Business Information
  businessName: "Your Business Name Here",
  phone: "1300 XXX XXX",
  email: "info@yourbusiness.com.au",
  serviceArea: "Servicing Australia Wide", // or specific area
  ndisRegistration: "Your NDIS Registration Number",

  // Update colors, services, FAQs, etc.
}
```

### 2. Customize Colors

The template uses Tailwind CSS. Main colors can be changed in `src/config/site.ts`:

- **Primary Color (Orange)**: Used for buttons, icons, accents
  - Current: `bg-orange-500`
  - Change to: `bg-blue-500`, `bg-green-500`, etc.

- **Secondary Color (Teal)**: Used for headers, text
  - Current: `bg-teal-900`
  - Change to: `bg-navy-900`, `bg-slate-900`, etc.

To do a global color change, use Find & Replace:
- Replace `orange-500` with your primary color
- Replace `teal-900` with your secondary color

### 3. Update Content

#### Services Section
Edit the `services` array in `src/config/site.ts`:

```typescript
services: [
  {
    title: "Your Service Name",
    description: "Your service description",
    icon: "users", // options: users, activity, check
  },
]
```

#### FAQs
Edit the `faqs` array in `src/config/site.ts`:

```typescript
faqs: [
  {
    question: "Your question?",
    answer: "Your answer...",
  },
]
```

#### Hero Section
Edit the `hero` object in `src/config/site.ts`:

```typescript
hero: {
  title: "Your Main Heading",
  subtitle: "Your subtitle message",
}
```

### 4. Add Your Logo

1. Add your logo to `/public/logo.svg` (or `.png`, `.jpg`)
2. Update the Navigation component in `src/components/Navigation.tsx`:

```tsx
// Replace the text logo with:
<Image src="/logo.svg" alt={siteConfig.businessName} width={150} height={50} />
```

### 5. Update Metadata (SEO)

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Business Name | NDIS Support Coordination",
  description: "Your custom description for SEO",
};
```

### 6. Form Submission

The callback form currently logs to console. To connect it to your backend:

Edit `src/components/CallbackForm.tsx` in the `handleSubmit` function:

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  // Add your API call here
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  // Handle response...
};
```

### 7. Social Media Links

Update social media URLs in `src/config/site.ts`:

```typescript
social: {
  facebook: "https://facebook.com/yourpage",
  instagram: "https://instagram.com/yourpage",
  linkedin: "https://linkedin.com/company/yourpage",
}
```

## Component Structure

- `src/components/TopBar.tsx` - Contact info header bar
- `src/components/Navigation.tsx` - Main navigation with mobile menu
- `src/components/Hero.tsx` - Hero section with CTA buttons
- `src/components/Services.tsx` - Services grid
- `src/components/EligibilitySteps.tsx` - 5-step eligibility guide
- `src/components/FAQ.tsx` - Accordion FAQ section
- `src/components/CallbackForm.tsx` - Contact/callback form
- `src/components/Footer.tsx` - Footer with links and contact info

## Advanced Customization

### Add More Services

Add more service cards by adding to the `services` array in `src/config/site.ts`.

### Add New Sections

Create a new component in `src/components/` and import it in `src/app/page.tsx`:

```typescript
import { YourNewSection } from "@/components/YourNewSection";

// Add it in the page layout
<YourNewSection />
```

### Change Fonts

Edit `src/app/layout.tsx` to change Google Fonts:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

Deploy to Vercel (easiest):
```bash
vercel
```

Or any other platform that supports Next.js.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Lucide React** - Icon library

## Support

For questions about customization, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
