# NDIS Support Coordination Website Template

A modern, reusable Next.js template for NDIS Support Coordination businesses. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## 🎯 Features

This template includes all the key features from the reference websites:

### From Option 1 (Marli & Moe)
- ✅ Top header with contact details prominently displayed
- ✅ "Servicing Australia Wide" badge
- ✅ Smooth, modern website layout
- ✅ Professional color scheme and typography

### From Option 2 (Meta Healthcare)
- ✅ "Book Free Consultation" call-to-action button
- ✅ FAQ accordion section with smooth animations
- ✅ Clean, organized layout

### From Option 3 (United for Care)
- ✅ "Find Out If You're Eligible for NDIS" section
- ✅ 5-step process visualization
- ✅ "Request a Call Back" form
- ✅ Benefit checkmarks and visual elements

### Additional Features
- ✅ **Smart Lead Qualification** - Subtle questions that score leads 0-100 without feeling salesy
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Interactive mobile menu
- ✅ Accessibility-friendly
- ✅ SEO optimized
- ✅ Fast loading with Next.js optimization
- ✅ Type-safe with TypeScript
- ✅ Easy to customize

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page importing all components
│   └── globals.css         # Global styles and animations
├── components/
│   ├── TopBar.tsx          # Contact info header
│   ├── Navigation.tsx      # Main nav with mobile menu
│   ├── Hero.tsx            # Hero section with CTA buttons
│   ├── Services.tsx        # Services grid
│   ├── EligibilitySteps.tsx # 5-step eligibility guide
│   ├── FAQ.tsx             # Accordion FAQ section
│   ├── CallbackForm.tsx    # Contact/callback form
│   └── Footer.tsx          # Footer with links
└── config/
    └── site.ts             # ⭐ Central config file for customization
```

## ⚙️ Customization

**The easiest way to customize this template is to edit `src/config/site.ts`**

This single file controls:
- Business name, phone, email
- Service area
- NDIS registration number
- All services and descriptions
- All FAQ questions and answers
- Hero section text
- Social media links

### Example Customization:

```typescript
// src/config/site.ts
export const siteConfig = {
  businessName: "ABC Support Services",
  phone: "1300 123 456",
  email: "hello@abcsupport.com.au",
  serviceArea: "Servicing Sydney & NSW",
  // ... update everything else
}
```

For detailed customization instructions, see **[CUSTOMIZATION.md](CUSTOMIZATION.md)**

## 🎨 Color Scheme

The template uses:
- **Primary**: Orange (#F37228) - buttons, accents, active states
- **Secondary**: Teal (#003336) - headers, dark sections
- **Accent**: Yellow (#ECD36D) - highlights

To change colors globally, use Find & Replace:
- Replace `orange-500` with your primary color
- Replace `teal-900` with your secondary color

## 📱 Components

### TopBar
Contact information banner at the very top with phone, email, and service area.

### Navigation
Sticky navigation bar with mobile-responsive hamburger menu.

### Hero
Eye-catching hero section with title, subtitle, and two CTA buttons.

### Services
Grid layout showcasing 3 main services with icons and descriptions.

### EligibilitySteps
Visual 5-step process showing how to get started with NDIS.

### FAQ
Accordion-style FAQ section with smooth expand/collapse animations.

### CallbackForm
Contact form with validation, success message, and benefit list.

### Footer
Comprehensive footer with links, contact info, and social media.

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router and Turbopack
- **React 19** - Latest React with improved performance
- **TypeScript** - Type safety and better DX
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons
- **Google Fonts** - Montserrat and Raleway fonts

## 📦 Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
This template works with any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

## 🎯 Lead Qualification System

The contact form includes **smart lead qualification** that scores every lead 0-100 based on:
- NDIS plan status
- Type of support needed
- Previous coordinator experience
- Urgency/timeline
- Engagement level

**Key Features:**
- Questions feel helpful, not filtering
- Automatic scoring: High (70-100), Medium (50-69), Low (0-49)
- Console logs show lead quality and notes
- Helps prioritize follow-ups

**See full details:** [LEAD_QUALIFICATION_GUIDE.md](LEAD_QUALIFICATION_GUIDE.md)

## 🔧 Form Integration

The callback form currently logs to console with lead scoring. To integrate with your backend:

1. Create an API route: `src/app/api/contact/route.ts`
2. Update `src/components/CallbackForm.tsx` to call your API
3. Connect to your email service or CRM (SendGrid, Mailgun, HubSpot, etc.)

Example API route with lead scoring:

```typescript
// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Send email with priority based on lead score
  const subject = data.leadQuality === "High"
    ? `🔥 HIGH PRIORITY Lead: ${data.name}`
    : `New Lead: ${data.name}`;

  await sendEmail({
    to: "your-email@business.com",
    subject,
    body: formatLeadEmail(data), // Include leadScore and qualificationNotes
  });

  return NextResponse.json({ success: true });
}
```

## 📸 Screenshots

The template includes:
- Modern gradient hero sections
- Clean card-based layouts
- Smooth hover animations
- Professional color scheme
- Mobile-responsive design

## 🎯 Use Cases

This template is perfect for:
- NDIS Support Coordination businesses
- Disability support services
- Healthcare coordination services
- Support service providers
- Social care organizations

## 📝 License

This is a template for your use. Modify it as needed for your business.

## 🤝 Support

For questions about:
- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev

## 💡 Tips

1. **Start with config**: Edit `src/config/site.ts` first
2. **Test mobile**: Always check responsive design
3. **Optimize images**: Use Next.js Image component
4. **Add analytics**: Consider Google Analytics or Plausible
5. **Test forms**: Make sure form submissions work before going live

---

Built with ❤️ using Next.js and Tailwind CSS
