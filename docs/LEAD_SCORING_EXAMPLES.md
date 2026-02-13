# Lead Scoring Examples

Real-world examples of how different leads are scored by the system.

## Test the System

Open your browser console (F12 → Console tab) and submit the form with different answers to see the scoring in action.

---

## Example 1: Premium Lead 🔥 (Score: 100)

### What They Selected:
```
Name: Sarah Johnson
Email: sarah@email.com
Phone: 0400 123 456
Location: Sydney

NDIS Status: "Yes, I have an active NDIS plan"
Support Type: "Support Coordination"
Previous Coordinator: "Yes, I'm looking to switch coordinators"
When Starting: "As soon as possible"
Preferred Time: "Morning (9am - 12pm)"
Message: "I'm unhappy with my current coordinator and need someone more responsive"
```

### Console Output:
```javascript
Form submitted: {
  name: "Sarah Johnson",
  email: "sarah@email.com",
  phone: "0400 123 456",
  location: "Sydney",
  "ndis-status": "yes-plan",
  "support-type": "support-coordination",
  "previous-coordinator": "yes-switching",
  "current-challenge": "urgent",
  "preferred-time": "morning",
  message: "I'm unhappy with my current coordinator...",

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

### Follow-Up Action:
📞 **Call within 4 hours**
💬 "Hi Sarah, I saw you're looking to switch coordinators. I'd love to discuss how we can provide you with the responsive support you need. Are you available for a quick chat this morning?"

---

## Example 2: Strong Lead ⭐ (Score: 85)

### What They Selected:
```
Name: Michael Chen
Email: michael@email.com
Phone: 0411 234 567
Location: Melbourne

NDIS Status: "I'm approved but need help creating my plan"
Support Type: "Specialist Support Coordination"
Previous Coordinator: "No, this is my first time"
When Starting: "As soon as possible"
Preferred Time: "Afternoon (12pm - 5pm)"
Message: "Just got approved, not sure where to start"
```

### Console Output:
```javascript
Form submitted: {
  name: "Michael Chen",
  email: "michael@email.com",
  phone: "0411 234 567",
  location: "Melbourne",
  "ndis-status": "approved-no-plan",
  "support-type": "specialist-coordination",
  "previous-coordinator": "no",
  "current-challenge": "urgent",
  "preferred-time": "afternoon",
  message: "Just got approved, not sure where to start",

  leadQuality: "High",
  leadScore: 85,
  qualificationNotes: [
    "NDIS approved, needs plan",
    "High-value specialist coordination need",
    "First-time coordination client",
    "Urgent need - high priority",
    "Provided preferred contact time",
    "Location: Melbourne"
  ]
}
```

### Follow-Up Action:
📞 **Call within 4 hours**
💬 "Hi Michael, congratulations on getting approved! I'd love to help you create a strong plan that meets your needs. I have availability this afternoon if you'd like to discuss..."

---

## Example 3: Good Lead ✓ (Score: 70)

### What They Selected:
```
Name: Emma Wilson
Email: emma@email.com
Phone: 0422 345 678
Location: Brisbane

NDIS Status: "Yes, I have an active NDIS plan"
Support Type: "Plan Management"
Previous Coordinator: "No, this is my first time"
When Starting: "Within the next few weeks"
Preferred Time: "Evening (5pm - 7pm)"
```

### Console Output:
```javascript
Form submitted: {
  name: "Emma Wilson",
  email: "emma@email.com",
  phone: "0422 345 678",
  location: "Brisbane",
  "ndis-status": "yes-plan",
  "support-type": "plan-management",
  "previous-coordinator": "no",
  "current-challenge": "soon",
  "preferred-time": "evening",

  leadQuality: "High",
  leadScore: 70,
  qualificationNotes: [
    "Active NDIS participant",
    "Plan management interest",
    "First-time coordination client",
    "Starting soon",
    "Provided preferred contact time",
    "Location: Brisbane"
  ]
}
```

### Follow-Up Action:
📧 **Email + call within 24 hours**
💬 "Hi Emma, thanks for reaching out about plan management. I'd love to explain how we can help simplify your NDIS funding management. Are you available for a call this evening?"

---

## Example 4: Warm Lead 🌡️ (Score: 55)

### What They Selected:
```
Name: David Kumar
Email: david@email.com
Phone: 0433 456 789

NDIS Status: "I'm currently applying for NDIS"
Support Type: "I'm not sure yet - need guidance"
Previous Coordinator: "No, this is my first time"
When Starting: "Within the next few weeks"
Preferred Time: "Morning (9am - 12pm)"
```

### Console Output:
```javascript
Form submitted: {
  name: "David Kumar",
  email: "david@email.com",
  phone: "0433 456 789",
  "ndis-status": "applying",
  "support-type": "not-sure",
  "previous-coordinator": "no",
  "current-challenge": "soon",
  "preferred-time": "morning",

  leadQuality: "Medium",
  leadScore: 55,
  qualificationNotes: [
    "Currently applying",
    "Needs guidance on services",
    "First-time coordination client",
    "Starting soon",
    "Provided preferred contact time"
  ]
}
```

### Follow-Up Action:
📧 **Personalized email within 24 hours, then call**
💬 "Hi David, I see you're currently applying for NDIS. I'd be happy to explain the different support options available once you're approved, so you can hit the ground running. Would you like a quick call to discuss?"

---

## Example 5: Nurture Lead 📬 (Score: 30)

### What They Selected:
```
Name: Lisa Brown
Email: lisa@email.com
Phone: 0444 567 890

NDIS Status: "Not yet, I'm exploring my options"
Support Type: "I'm not sure yet - need guidance"
Previous Coordinator: (not selected)
When Starting: "Just planning ahead for now"
Preferred Time: (not selected)
Message: "Looking into NDIS for my daughter"
```

### Console Output:
```javascript
Form submitted: {
  name: "Lisa Brown",
  email: "lisa@email.com",
  phone: "0444 567 890",
  "ndis-status": "not-yet",
  "support-type": "not-sure",
  "current-challenge": "planning",
  message: "Looking into NDIS for my daughter",

  leadQuality: "Low",
  leadScore: 30,
  qualificationNotes: [
    "Not yet applied",
    "Needs guidance on services",
    "Planning ahead"
  ]
}
```

### Follow-Up Action:
📧 **Send helpful resources within 48 hours**
💬 "Hi Lisa, thank you for thinking ahead about NDIS support for your daughter. I've included some helpful resources about NDIS eligibility and the application process. Feel free to reach out when you're ready to apply - we're here to help. [Include NDIS Guide PDF/Links]"

Then add to **nurture email sequence** for future follow-up.

---

## Score Breakdown Reference

| Component | Max Points | Impact |
|-----------|------------|---------|
| NDIS Plan Status | 30 | Highest - shows readiness |
| Support Type | 25 | High - shows intent match |
| Previous Coordinator | 20 | Medium - shows experience/urgency |
| Urgency/Timeline | 15 | Medium - shows timeframe |
| Engagement (selected time) | 10 | Low - shows seriousness |

## Lead Quality Thresholds

- **70-100 points** = High Quality (Hot lead)
- **50-69 points** = Medium Quality (Warm lead)
- **0-49 points** = Low Quality (Cold lead / Future opportunity)

---

## Testing Checklist

To ensure the system works correctly, test these scenarios:

### Test 1: Maximum Score Lead ✅
- [x] Active NDIS plan
- [x] Support Coordination
- [x] Looking to switch
- [x] ASAP
- [x] Preferred time selected
- **Expected**: Score = 100, Quality = "High"

### Test 2: Minimum Score Lead ✅
- [x] Not yet applied
- [x] Not sure
- [x] Leave most fields empty
- **Expected**: Score = 15, Quality = "Low"

### Test 3: Medium Range Lead ✅
- [x] Currently applying
- [x] Not sure
- [x] First time
- [x] Within weeks
- **Expected**: Score = 50-55, Quality = "Medium"

---

## What Happens in the Background

1. **User fills form** → Looks like a normal contact form
2. **Clicks submit** → Form validates required fields
3. **JavaScript calculates score** → Invisible to user
4. **Console logs result** → You see the breakdown
5. **Thank you message** → User sees confirmation
6. **Data sent to API** (when you set it up) → Goes to your email/CRM with priority flag

## Privacy Note

Users see a normal contact form. They don't see:
- Their lead score
- The scoring algorithm
- Quality rating
- Priority level

This is **internal business intelligence** to help you prioritize follow-ups effectively while treating all leads with respect.

---

## Quick Tips

💡 **High scores (70+)**: Call these people ASAP. They're ready to engage.

💡 **Medium scores (50-69)**: These are good prospects who need a bit more nurturing.

💡 **Low scores (0-49)**: Don't ignore them! Send resources and add to email nurture. They might become high-quality leads later.

💡 **All leads get a response** - The score just determines priority and approach, not whether to follow up.
