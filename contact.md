# Contact Page — Data Flow & Backend Integration

> This document explains how the Contact Us form collects data, sends it to the backend API, and surfaces it in the admin dashboard.

---

## 1. Form Fields

| Field | HTML Name | Type | Required | Validation |
|---|---|---|---|---|
| Full name | `fullName` | `text` | ✅ | Non-empty, max 100 chars |
| Email address | `email` | `email` | ✅ | Valid email format |
| Phone number | `phone` | `tel` | ❌ | Optional, E.164 format preferred |
| Estimated budget | `budget` | `text` | ❌ | Free-text (e.g. "₦50M – ₦100M") |
| Area of interest | `interests` | `string[]` | ✅ | At least 1 selected from: `architecture`, `real-estate`, `project-mgmt`, `design-build`, `construction` |
| Project stage | `stage` | `select` | ✅ | One of the predefined stage strings |
| City / Town | `city` | `text` | ❌ | Free-text |
| State | `state` | `text` | ❌ | Free-text |
| Message | `message` | `textarea` | ✅ | Non-empty, max 2000 chars |
| Privacy consent | `privacyAccepted` | `checkbox` | ✅ | Must be `true` |

---

## 2. Frontend Submission

The form is managed with React `useState` in `ContactPage.jsx`.

### Current behaviour (placeholder)

```js
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Contact form submitted:', formData);
  alert('Thank you for your enquiry. Our team will be in touch shortly.');
};
```

### Production behaviour (when backend is ready)

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  try {
    const res = await fetch('/api/v1/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error('Submission failed');
    const data = await res.json();
    // Show success toast via sonner
    toast.success('Enquiry sent! We'll be in touch shortly.');
    // Reset form
    setFormData(initialState);
  } catch (err) {
    toast.error('Something went wrong. Please try again.');
  } finally {
    setSubmitting(false);
  }
};
```

---

## 3. API Endpoint

### `POST /api/v1/contact`

**Request body:**

```json
{
  "fullName": "Adaeze Okonkwo",
  "email": "adaeze@email.com",
  "phone": "+2348012345678",
  "budget": "₦80M – ₦120M",
  "interests": ["architecture", "real-estate"],
  "stage": "Have a site / Ready to plan",
  "city": "Lekki",
  "state": "Lagos",
  "message": "We have a 1200 sqm plot in Lekki Phase 1 and want to develop a luxury 4-unit terrace complex.",
  "privacyAccepted": true
}
```

**Success response — `201 Created`:**

```json
{
  "id": "enq_abc123",
  "status": "new",
  "createdAt": "2026-11-27T15:30:00Z",
  "message": "Your enquiry has been received. Our team will respond within 24 hours."
}
```

**Error responses:**

| Status | Meaning |
|---|---|
| `400` | Validation error (missing required fields, invalid email) |
| `429` | Rate limit exceeded (max 5 submissions per IP per hour) |
| `500` | Internal server error |

---

## 4. Backend Processing

When the backend receives a contact submission:

1. **Validate** all required fields and sanitise input (strip HTML, trim whitespace).
2. **Store** the enquiry in the database:

```
Table: enquiries
─────────────────────────────────────
id            UUID PRIMARY KEY
full_name     VARCHAR(100) NOT NULL
email         VARCHAR(255) NOT NULL
phone         VARCHAR(20)
budget        VARCHAR(100)
interests     TEXT[]  (array of interest IDs)
stage         VARCHAR(100)
city          VARCHAR(100)
state         VARCHAR(100)
message       TEXT NOT NULL
privacy_accepted  BOOLEAN NOT NULL DEFAULT TRUE
status        ENUM('new', 'in_progress', 'responded', 'closed') DEFAULT 'new'
assigned_to   UUID REFERENCES users(id)
source_ip     INET
created_at    TIMESTAMPTZ DEFAULT NOW()
updated_at    TIMESTAMPTZ DEFAULT NOW()
```

3. **Send notification email** to the Avencrest team:
   - **To:** `hello@avencrest.com` (or a configured notification list)
   - **Subject:** `New enquiry from {fullName} — {interests joined}`
   - **Body:** Summary of all form fields + a link to the enquiry in the admin dashboard

4. **Send confirmation email** to the submitter:
   - **To:** `{email}`
   - **Subject:** `Thank you for contacting Avencrest`
   - **Body:** Acknowledgement message + expected response time (24 hours)

---

## 5. Admin Dashboard

### Enquiry List View

| Column | Description |
|---|---|
| Name | Full name (clickable → detail view) |
| Email | Email address |
| Interests | Tags showing selected areas |
| Stage | Project stage badge |
| Status | Colour-coded: 🔵 New · 🟡 In Progress · 🟢 Responded · ⚫ Closed |
| Date | Relative timestamp (e.g. "2 hours ago") |
| Assigned | Team member avatar or "Unassigned" |

**Filters:** Status, Interest area, Date range, Assigned to  
**Sort:** Newest first (default), Oldest first, Status  
**Search:** By name, email, or message content

### Enquiry Detail View

Displays all submitted fields in a clean read-only layout, plus:

- **Status selector** — dropdown to change status (New → In Progress → Responded → Closed)
- **Assign to** — assign a team member from the users list
- **Internal notes** — rich text field for the team to add private notes
- **Activity log** — chronological list of status changes, assignments, and notes
- **Reply via email** — compose and send a reply directly from the dashboard (logged in activity)
- **Delete** — soft-delete with confirmation modal

### Notification Rules

| Event | Notification |
|---|---|
| New enquiry received | Email to team + badge in dashboard sidebar |
| Enquiry assigned to you | Email + in-app notification |
| Enquiry idle for 24+ hours | Reminder email to assigned member (or team if unassigned) |
| Status changed | Activity log entry (no external email) |

---

## 6. Rate Limiting & Security

- **Rate limit:** 5 submissions per IP per hour (configurable)
- **Honeypot field:** Hidden `website` field — if filled, submission is silently discarded (bot trap)
- **CSRF protection:** Backend validates CSRF token on form submission
- **Input sanitisation:** All text fields stripped of HTML tags and trimmed
- **File uploads:** Not supported on the contact form (use project brief forms for attachments)
- **GDPR/NDPR compliance:** `privacyAccepted` must be `true`; data retention policy applies (auto-archive after 12 months)
