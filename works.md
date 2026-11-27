# Avencrest Works API & Admin Portal Specification

> **Context**: Works showcased on the `/works` page highlight specific architectural studies, active construction milestones, and interior deliveries. Currently, these entries are hardcoded. In production, this catalog will be dynamically served via a REST API and managed through the Avencrest Admin Portal.

---

## 1. REST API Endpoints

### 1.1 Public Endpoints (Client Web)

#### `GET /api/v1/works`
Retrieve published works with filtering and pagination.

- **Query Parameters**:
  - `category` *(optional)*: `architecture` | `construction` | `interiors` | `all` (default: `all`)
  - `page` *(optional, default: 1)*: integer
  - `limit` *(optional, default: 12)*: integer
  - `featured` *(optional)*: boolean (for hero/homepage highlights)

**Success Response (`200 OK`)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "work-1",
      "slug": "contemporary-residential-design",
      "category": "architecture",
      "eyebrow": "IKOYI RESIDENCE",
      "title": "Contemporary residential\ndesign",
      "summary": "Detailed look into the timber facade and passive climate design of the Ikoyi Residence.",
      "image": {
        "url": "https://cdn.avencrest.com/works/ikoyi-residence-facade.webp",
        "alt": "Contemporary residential timber facade",
        "width": 1600,
        "height": 1100
      },
      "targetLink": "/projects/ikoyi-residence",
      "order": 1,
      "featured": true,
      "isPublished": true,
      "createdAt": "2024-04-10T12:00:00Z",
      "updatedAt": "2024-07-01T09:20:00Z"
    }
  ],
  "pagination": {
    "total": 6,
    "page": 1,
    "limit": 12,
    "totalPages": 1
  }
}
```

#### `GET /api/v1/works/:idOrSlug`
Retrieve full detail of a work item, including high-res media gallery, technical notes, and related case studies.

---

### 1.2 Protected Endpoints (Admin Portal)

- `GET /api/v1/admin/works` — List all work entries (drafts, archived, published) with search & category filters.
- `POST /api/v1/admin/works` — Create a new work showcase entry.
- `PUT /api/v1/admin/works/:id` — Update existing work item.
- `DELETE /api/v1/admin/works/:id` — Delete or soft-delete work item.
- `PATCH /api/v1/admin/works/reorder` — Update display ordering of works.
- `POST /api/v1/admin/media/upload` — Direct presigned upload for high-res architectural drawings and site photography.

---

## 2. API Data Schema (TypeScript Interface)

```typescript
export type WorkCategory = 'architecture' | 'construction' | 'interiors';

export interface WorkMedia {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface Work {
  id: string;
  slug: string;
  category: WorkCategory;
  eyebrow: string;              // e.g., "IKOYI RESIDENCE", "DEVELOPMENT STUDY"
  title: string;                // Heading text (supports line breaks \n)
  summary?: string;             // Optional brief note on the work
  image: WorkMedia;             // Primary display image
  targetLink: string;           // Internal route (e.g., "/projects/ikoyi-residence" or "/services")
  gallery?: WorkMedia[];        // Additional sketches, drawings, or site photos
  order: number;                // Display order priority (lower numbers appear first)
  featured: boolean;            // Whether highlighted in special sections
  isPublished: boolean;         // Visibility flag
  createdAt: string;
  updatedAt: string;
}
```

---

## 3. Create / Update Payload (`POST` & `PUT`)

### Request Body (`application/json`):
```json
{
  "category": "architecture",
  "eyebrow": "IKOYI RESIDENCE",
  "title": "Contemporary residential\ndesign",
  "summary": "Timber louvers and responsive environmental architecture.",
  "image": {
    "url": "https://cdn.avencrest.com/works/ikoyi-residence-facade.webp",
    "alt": "Contemporary residential timber facade"
  },
  "targetLink": "/projects/ikoyi-residence",
  "order": 1,
  "featured": true,
  "isPublished": true
}
```

---

## 4. Admin Portal Form Layout & Fields

The Admin Portal Works Manager allows content editors to quickly showcase project highlights, drawings, and construction updates:

### Section A: Classification & Routing
| Field Name | Type | Validation / Requirements | Description |
|---|---|---|---|
| **Category** | Select / Radio | Required: `architecture` \| `construction` \| `interiors` | Powers client-side filter tabs on `/works` |
| **Eyebrow Label** | Text Input | Required, max 50 chars (e.g. `IKOYI RESIDENCE`, `ON-SITE DELIVERY`) | Small tracking label displayed above heading |
| **Title** | Text Input / Textarea | Required, max 100 chars | Display heading (allows line break formatting) |
| **Target Route / Link** | Text Input | Required (e.g., `/projects/ikoyi-residence`, `/services`, `/contact`) | Destination when user clicks the card or title |

### Section B: Media & Presentation
| Field Name | Type | Validation / Requirements | Description |
|---|---|---|---|
| **Cover Image** | Image Dropzone | Required. Accepts WebP, JPG, PNG (Max 5MB) | Card showcase media (aspect 16:11) |
| **Alt Text** | Text Input | Required for accessibility & SEO | Descriptive summary of the visual |
| **Additional Gallery / Drawings** | Multi-Image Dropzone | Optional. Up to 8 files | Architectural diagrams, elevations, or progress shots |

### Section C: Visibility & Sorting
| Field Name | Type | Validation / Requirements | Description |
|---|---|---|---|
| **Display Order** | Number Input | Default: 0 | Sorting sequence in the grid |
| **Featured** | Toggle | Boolean | Highlight in featured carousels |
| **Status** | Toggle / Select | `Draft` \| `Published` | Determines public API availability |

---

## 5. Client Integration Guide (Frontend)

To connect `/works` to the backend REST API:

1. **API Client Hook** (`src/api/useWorks.js`):
   ```javascript
   export async function fetchWorks(category = 'all') {
     const params = new URLSearchParams({ isPublished: 'true' });
     if (category !== 'all') params.set('category', category);
     const res = await fetch(`/api/v1/works?${params}`);
     if (!res.ok) throw new Error('Failed to load works');
     return res.json();
   }
   ```
2. **Component Binding** ([`src/pages/WorksPage.jsx`](file:///c:/Users/admin/Desktop/avencrest-web/src/pages/WorksPage.jsx)):
   - Replace static `WORKS` constant with an API fetch call (or TanStack React Query `useQuery(['works', activeCategory], () => fetchWorks(activeCategory))`).
   - Use `useLoadingStore` to trigger global loading animation or render a subtle card skeleton during tab switching.
