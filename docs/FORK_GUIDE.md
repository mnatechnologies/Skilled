# How to Fork This Template for a New Website

Quick guide to create a new NDIS Support Coordination website from this template.

## Step 1: Duplicate the Project

```bash
# Copy the entire project folder
cp -r web-temp my-new-website
cd my-new-website

# Initialize new git repo (optional)
rm -rf .git
git init
```

## Step 2: Update Package Info

Edit `package.json`:

```json
{
  "name": "my-business-website",
  "version": "0.1.0",
  ...
}
```

## Step 3: Customize Site Config

**This is the most important step!** Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  // 1. Business Details
  businessName: "Your Business Name",
  phone: "1300 XXX XXX",
  email: "info@yourbusiness.com.au",
  serviceArea: "Servicing [Your Area]",
  ndisRegistration: "Your NDIS Reg Number",

  // 2. Update Hero Section
  hero: {
    title: "Your Unique Value Proposition",
    subtitle: "Your compelling subtitle",
  },

  // 3. Update Services (add, remove, or modify)
  services: [
    {
      title: "Service 1",
      description: "What you offer...",
      icon: "users",
    },
    // Add more...
  ],

  // 4. Update FAQs
  faqs: [
    {
      question: "Your question?",
      answer: "Your answer...",
    },
    // Add more...
  ],

  // 5. Social Media
  social: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    linkedin: "https://linkedin.com/company/yourpage",
  },
};
```

## Step 4: Change Colors (Optional)

If you want different brand colors, use Find & Replace across the project:

### Option A: Keep similar colors
No changes needed! The template uses professional orange and teal.

### Option B: Change to your brand colors

**Find & Replace (in all files in `src/`):**

| Current | Replace With | Usage |
|---------|-------------|--------|
| `orange-500` | `blue-600` | Primary buttons/accents |
| `orange-600` | `blue-700` | Hover states |
| `teal-900` | `navy-900` | Headers/dark sections |
| `teal-800` | `navy-800` | Gradients |
| `yellow-400` | `amber-400` | Accent highlights |

### Available Tailwind Colors:
- Blue: `blue-500`, `blue-600`, `blue-700`
- Green: `green-500`, `green-600`, `green-700`
- Purple: `purple-500`, `purple-600`, `purple-700`
- Red: `red-500`, `red-600`, `red-700`
- Pink: `pink-500`, `pink-600`, `pink-700`
- Indigo: `indigo-500`, `indigo-600`, `indigo-700`

[See all Tailwind colors](https://tailwindcss.com/docs/customizing-colors)

## Step 5: Add Your Logo (Optional)

1. Add logo file to `public/` folder (e.g., `public/logo.svg`)

2. Edit `src/components/Navigation.tsx`:

```tsx
import Image from "next/image";

// Replace the text logo (around line 20):
<div className="text-2xl font-bold text-teal-900">
  {siteConfig.businessName}
</div>

// With:
<Image
  src="/logo.svg"
  alt={siteConfig.businessName}
  width={150}
  height={50}
  priority
/>
```

## Step 6: Update Metadata

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Business | NDIS Support Coordination",
  description: "Your SEO-friendly description here (150-160 chars)",
};
```

## Step 7: Test Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and check:
- [ ] All text is updated
- [ ] Colors look good
- [ ] Phone/email links work
- [ ] All sections display correctly
- [ ] Mobile menu works
- [ ] Forms work (check console for now)
- [ ] FAQ accordion expands/collapses

## Step 8: Set Up Form Backend (Before Launch)

The form currently just logs to console. Before launching, connect it to a backend:

### Option A: Use a Form Service (Easiest)
- [Formspree](https://formspree.io/)
- [Getform](https://getform.io/)
- [Web3Forms](https://web3forms.com/)

### Option B: Build API Route (More Control)

Create `src/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Send email via SendGrid, Mailgun, etc.
  // Or save to database

  return NextResponse.json({ success: true });
}
```

Then update `src/components/CallbackForm.tsx`:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(Object.fromEntries(formData)),
});
```

## Step 9: Build and Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

### Deploy to Vercel (Easiest):
```bash
npm install -g vercel
vercel
```

Follow prompts to deploy!

### Other deployment options:
- **Netlify**: Connect GitHub repo
- **Cloudflare Pages**: Connect GitHub repo
- **AWS Amplify**: Connect GitHub repo
- **Digital Ocean**: Docker deployment

## Step 10: Post-Launch Checklist

- [ ] Test all forms actually send emails
- [ ] Add Google Analytics or tracking
- [ ] Test on multiple devices/browsers
- [ ] Check all links work
- [ ] Test contact info (call/email)
- [ ] Set up SSL certificate (usually automatic)
- [ ] Submit sitemap to Google Search Console
- [ ] Test page speed with Lighthouse

## 🎉 You're Done!

You now have a professional NDIS Support Coordination website!

## Common Customizations

### Add More Services
In `src/config/site.ts`, add to the `services` array:
```typescript
services: [
  ...existing services,
  {
    title: "New Service",
    description: "Description here",
    icon: "users", // or "activity", "check"
  },
]
```

### Add More FAQs
In `src/config/site.ts`, add to the `faqs` array:
```typescript
faqs: [
  ...existing FAQs,
  {
    question: "New question?",
    answer: "Answer here",
  },
]
```

### Change Step Count
Edit `src/components/EligibilitySteps.tsx` - add/remove steps from the array.

### Remove a Section
In `src/app/page.tsx`, comment out the component you don't want:
```typescript
// <Services />  // Commented out
```

## Need Help?

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

**Estimated Time to Fork: 30-60 minutes** ⏱️

Most of that time is just copying your content into `site.ts`!
