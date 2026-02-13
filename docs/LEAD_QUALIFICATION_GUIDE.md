# Lead Qualification System Guide

## Overview

The contact form now includes **subtle qualifying questions** that help identify high-quality leads without feeling like aggressive lead generation. The questions are framed as "helping us understand how to best support you" - which is genuine and helpful.

## How It Works

### The Questions (What Users See)

After basic contact info (name, email, phone, location), users see:

1. **"Do you currently have an NDIS plan?"**
   - Yes, I have an active NDIS plan
   - I'm approved but need help creating my plan
   - I'm currently applying for NDIS
   - Not yet, I'm exploring my options

2. **"What type of support are you looking for?"**
   - Support Coordination
   - Specialist Support Coordination
   - Plan Management
   - I'm not sure yet - need guidance

3. **"Have you worked with a Support Coordinator before?"**
   - No, this is my first time
   - Yes, I'm looking to switch coordinators
   - Yes, but I need additional support

4. **"When are you looking to get started?"**
   - As soon as possible
   - Within the next few weeks
   - Just planning ahead for now

5. **"Tell us a bit more about your situation"** (optional text area)

### Why These Questions Work

✅ **They feel helpful, not filtering** - Framed as understanding how to best support them
✅ **Natural conversation flow** - Mirrors what you'd ask on a call anyway
✅ **Not intimidating** - Simple dropdown selections
✅ **Build rapport** - Shows you care about their specific situation

## Lead Scoring System

Each submission is automatically scored out of **100 points**:

### Scoring Breakdown

#### NDIS Plan Status (30 points max)
- **Active NDIS plan**: 30 points - *Best quality lead*
- **Approved, needs plan**: 25 points - *Ready to engage*
- **Currently applying**: 15 points - *Future lead*
- **Not yet applied**: 5 points - *Early stage*

#### Support Type (25 points max)
- **Support Coordination**: 25 points - *Perfect match*
- **Specialist Coordination**: 25 points - *High-value client*
- **Plan Management**: 20 points - *Good fit*
- **Not sure**: 10 points - *Needs education*

#### Previous Coordinator Experience (20 points max)
- **Looking to switch**: 20 points - *Experienced, likely serious*
- **First time**: 15 points - *New client opportunity*
- **Need additional support**: 15 points - *Current needs*

#### Urgency (15 points max)
- **ASAP**: 15 points - *Hot lead*
- **Within weeks**: 10 points - *Warm lead*
- **Planning ahead**: 5 points - *Future opportunity*

#### Engagement (10 points)
- **Preferred time selected**: 10 points - *Shows commitment*

### Lead Quality Ratings

- **High Quality** (70-100 points): Priority follow-up within 4 hours
- **Medium Quality** (50-69 points): Follow-up within 24 hours
- **Low Quality** (0-49 points): Standard follow-up or nurture sequence

## What You'll See (Console Output)

When someone submits the form, you'll see in the browser console:

```javascript
Form submitted: {
  name: "John Smith",
  email: "john@example.com",
  phone: "0400 000 000",
  location: "Sydney",
  "ndis-status": "yes-plan",
  "support-type": "support-coordination",
  "previous-coordinator": "yes-switching",
  "current-challenge": "urgent",
  "preferred-time": "morning",
  message: "I need help with...",

  // Automated scoring
  leadQuality: "High",
  leadScore: 100,
  qualificationNotes: [
    "Active NDIS participant",
    "Specifically wants support coordination",
    "Looking to switch - likely experienced participant",
    "Urgent need - high priority",
    "Provided preferred contact time",
    "Location: Sydney"
  ]
}
```

## Examples of Lead Scores

### Example 1: Premium Lead (100 points)
```
- Has active NDIS plan (30)
- Wants support coordination (25)
- Looking to switch coordinators (20)
- Needs help ASAP (15)
- Selected preferred time (10)
= 100 points (High Quality) ⭐⭐⭐
```

### Example 2: Good Lead (75 points)
```
- Approved but no plan yet (25)
- Wants specialist coordination (25)
- First time coordinator (15)
- Starting within weeks (10)
= 75 points (High Quality) ⭐⭐
```

### Example 3: Future Opportunity (45 points)
```
- Currently applying for NDIS (15)
- Not sure what support needed (10)
- First time (15)
- Just planning ahead (5)
= 45 points (Low Quality) - Nurture lead
```

## Integration with CRM/Email

### Current Setup
Right now, the lead data is logged to the browser console. This is perfect for testing.

### Production Setup Options

#### Option A: Send to Email (Quick Setup)
Create an API route that emails you the lead data with the score:

```typescript
// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();

  // Email subject based on lead quality
  const subject = data.leadQuality === "High"
    ? `🔥 HIGH PRIORITY Lead: ${data.name}`
    : `New Lead: ${data.name}`;

  // Send email with lead score and notes
  await sendEmail({
    to: "your-email@business.com",
    subject,
    body: formatLeadEmail(data)
  });

  return Response.json({ success: true });
}
```

#### Option B: CRM Integration (Professional)
Send leads directly to your CRM with priority tagging:

```typescript
// High-quality leads → Tag as "Hot Lead"
// Medium quality → Tag as "Warm Lead"
// Low quality → Tag as "Nurture"

await crm.createLead({
  ...contactData,
  tags: [data.leadQuality],
  priority: data.leadScore >= 70 ? "high" : "normal",
  notes: data.qualificationNotes.join(", ")
});
```

Popular CRM options:
- **HubSpot** (has NDIS templates)
- **Zoho CRM**
- **Pipedrive**
- **Salesforce**

#### Option C: Spreadsheet (Simple Start)
Auto-populate a Google Sheet with scores:

```typescript
await googleSheets.append({
  spreadsheetId: "your-sheet-id",
  range: "Leads!A:K",
  values: [[
    new Date(),
    data.name,
    data.email,
    data.phone,
    data.leadScore,
    data.leadQuality,
    ...
  ]]
});
```

## Customizing the Scoring

Want to adjust what matters most to your business? Edit `src/components/CallbackForm.tsx`:

```typescript
// Example: Make urgency more important
if (data["current-challenge"] === "urgent") {
  score += 25; // Changed from 15
  notes.push("Urgent need - high priority");
}

// Example: Prioritize specialist coordination more
if (data["support-type"] === "specialist-coordination") {
  score += 35; // Changed from 25
  notes.push("High-value specialist coordination need");
}

// Example: Adjust quality thresholds
let quality = "Low";
if (score >= 80) quality = "High";      // Stricter
else if (score >= 60) quality = "Medium"; // Stricter
```

## Follow-Up Strategy by Lead Quality

### High Quality Leads (70-100)
- ⚡ **Response Time**: Within 4 hours
- 📞 **Action**: Direct phone call
- 💬 **Message**: "Hi [Name], I saw you need support coordination urgently. I can help you get started today..."

### Medium Quality Leads (50-69)
- 📅 **Response Time**: Within 24 hours
- 📧 **Action**: Personalized email + follow-up call
- 💬 **Message**: "Hi [Name], thanks for reaching out. I'd love to discuss how we can support your NDIS journey..."

### Low Quality Leads (0-49)
- 📬 **Response Time**: Within 48 hours
- 📧 **Action**: Email with resources
- 💬 **Message**: "Hi [Name], I've included some helpful NDIS resources to get you started..."
- 🔄 **Follow-up**: Add to nurture sequence

## Privacy & Ethics

✅ **These questions are ethical because:**
- They genuinely help provide better service
- Users still get a response regardless of score
- No one is rejected or blocked
- Information is used to prioritize, not exclude

✅ **GDPR/Privacy compliant:**
- Users provide information voluntarily
- Clear purpose (to better assist them)
- Data used only for providing requested services

## Testing the System

1. **Test High-Quality Lead**:
   - Select "Yes, I have an active NDIS plan"
   - Select "Support Coordination"
   - Select "Yes, I'm looking to switch coordinators"
   - Select "As soon as possible"
   - Fill in contact details
   - **Expected Score**: 85-100 points

2. **Test Medium-Quality Lead**:
   - Select "I'm currently applying for NDIS"
   - Select "I'm not sure yet"
   - Select "No, this is my first time"
   - Select "Within the next few weeks"
   - **Expected Score**: 50-65 points

3. **Test Low-Quality Lead**:
   - Select "Not yet, I'm exploring my options"
   - Select "I'm not sure yet"
   - Leave other fields empty
   - **Expected Score**: 15-25 points

## Benefits of This System

✅ **Prioritize your time** - Focus on ready-to-convert leads first
✅ **Better conversion rates** - Reach hot leads while they're hot
✅ **Improved customer service** - Respond appropriately to each lead type
✅ **Data-driven insights** - See what types of leads you attract
✅ **No missed opportunities** - Everyone gets a response, just prioritized
✅ **Feels natural** - Users don't feel "filtered" or judged

---

## Quick Reference: Lead Score Cheat Sheet

| Score Range | Quality | Priority | Response Time | Action |
|-------------|---------|----------|---------------|--------|
| 70-100 | High | 🔥 Hot | 4 hours | Call ASAP |
| 50-69 | Medium | ♨️ Warm | 24 hours | Email + Call |
| 0-49 | Low | 📬 Cold | 48 hours | Resources |

---

Remember: **Even "low quality" leads are still potential clients.** The scoring just helps you work smarter, not exclude people!
