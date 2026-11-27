# Avencrest Developments API & Admin Portal Specification

> **Context**: The `/developments` page showcases Avencrest's large-scale residential enclaves, commercial towers, and multi-family communities across Nigeria. Currently, it consumes the shared property dataset. In production, Developments will operate via a dedicated REST API with investment, construction progress, and unit inventory tracking managed via the Avencrest Admin Portal.

---

## 1. REST API Endpoints

### 1.1 Public Endpoints (Client Web)

#### `GET /api/v1/developments`
Retrieve published developments with filtering, typology, and status criteria.

- **Query Parameters**:
  - `category` *(optional)*: `residential` | `commercial` | `all` (default: `all`)
  - `status` *(optional)*: `planning` | `under_construction` | `completed` | `selling`
  - `location` *(optional)*: e.g. `lagos`, `abuja`
  - `page` *(optional, default: 1)*: integer
  - `limit` *(optional, default: 12)*: integer
  - `featured` *(optional)*: boolean

**Success Response (`200 OK`)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "dev-ikoyi-residence",
      "slug": "the-ikoyi-residence",
      "title": "The Ikoyi Residence",
      "category": "residential",
      "badge": "Residential",
      "location": "IKOYI, LAGOS · RESIDENTIAL",
      "typology": "Private Residence",
      "description": "A private contemporary residence carefully designed to balance natural ventilation, timber shading, and seamless indoor-outdoor living.",
      "developmentPhase": "Completed & Handed Over",
      "completionYear": 2024,
      "unitsAvailable": 0,
      "totalUnits": 1,
      "investmentYield": "High Capital Growth",
      "coverImage": {
        "url": "https://cdn.avencrest.com/developments/ikoyi/cover.webp",
        "alt": "The Ikoyi Residence exterior featuring warm timber louvers",
        "width": 1920,
        "height": 1320
      },
      "gallery": [
        {
          "url": "https://cdn.avencrest.com/developments/ikoyi/facade.webp",
          "caption": "Primary street facade"
        }
      ],
      "featured": true,
      "order": 1,
      "isPublished": true,
      "createdAt": "2024-02-10T08:00:00Z",
      "updatedAt": "2024-06-15T11:45:00Z"
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

#### `GET /api/v1/developments/:idOrSlug`
Retrieve full development dossier including master plans, floor layouts, unit breakdown, and specification downloads.

---

### 1.2 Protected Endpoints (Admin Portal)

- `GET /api/v1/admin/developments` — Full list of development records with draft, active, and completed statuses.
- `POST /api/v1/admin/developments` — Create a new real estate development entry.
- `PUT /api/v1/admin/developments/:id` — Update development data, construction progress, or sales status.
- `DELETE /api/v1/admin/developments/:id` — Archive or delete development entry.
- `PATCH /api/v1/admin/developments/:id/status` — Quick toggle for sales/construction status (`planning`, `selling`, `sold_out`, `completed`).
- `POST /api/v1/admin/media/upload` — Direct presigned upload for architectural brochures, site maps, and renders.

---

## 2. API Data Schema (TypeScript Interface)

```typescript
export type DevelopmentCategory = 'residential' | 'commercial';
export type DevelopmentStatus = 'planning' | 'under_construction' | 'selling' | 'completed' | 'sold_out';

export interface DevelopmentMedia {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface Development {
  id: string;
  slug: string;
  title: string;
  category: DevelopmentCategory;
  badge: string;                     // e.g. "Residential", "Commercial"
  location: string;                  // e.g. "IKOYI, LAGOS · RESIDENTIAL"
  typology: string;                  // e.g. "Multi-Family Residence", "Commercial Hub"
  description: string;               // Card teaser summary (120-220 chars)
  status: DevelopmentStatus;
  developmentPhase?: string;         // e.g. "Civil Substructure", "Superstructure", "Finishing"
  totalUnits?: number;
  unitsAvailable?: number;
  completionYear?: number;
  coverImage: DevelopmentMedia;
  gallery?: DevelopmentMedia[];
  brochureUrl?: string;              // Downloadable investment/architectural PDF
  order: number;                     // Display sorting priority
  featured: boolean;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}
```

---

## 3. Create / Update Payload (`POST` & `PUT`)

### Request Body (`application/json`):
```json
{
  "title": "The Ikoyi Residence",
  "slug": "the-ikoyi-residence",
  "category": "residential",
  "badge": "Residential",
  "location": "IKOYI, LAGOS · RESIDENTIAL",
  "typology": "Private Residence",
  "description": "A private contemporary residence carefully designed to balance natural ventilation, timber shading, and seamless indoor-outdoor living.",
  "status": "completed",
  "developmentPhase": "Handed Over",
  "totalUnits": 1,
  "unitsAvailable": 0,
  "completionYear": 2024,
  "coverImage": {
    "url": "https://cdn.avencrest.com/developments/ikoyi/cover.webp",
    "alt": "The Ikoyi Residence exterior featuring warm timber louvers"
  },
  "featured": true,
  "order": 1,
  "isPublished": true
}
```

---

## 4. Admin Portal Form Layout & Fields

The Developments Manager form is structured into 4 sections:

### Section A: Development Identity
| Field Name | Type | Validation / Requirements | Description |
|---|---|---|---|
| **Development Title** | Text Input | Required, max 100 chars | e.g. `The Garden Collection` |
| **URL Slug** | Text Input | Required, unique, auto-generated | e.g. `the-garden-collection` |
| **Category** | Radio / Select | Required: `residential` \| `commercial` | Governs category filtering |
| **Badge Label** | Text Input | Optional (defaults to category title) | Visual overlay tag on image |
| **Location Line** | Text Input | Required, max 80 chars | e.g. `LEKKI, LAGOS · RESIDENTIAL` |
| **Typology** | Text Input | Required, max 60 chars | e.g. `Terraced Homes`, `Corporate Hub` |

### Section B: Summary & Narrative
| Field Name | Type | Validation / Requirements | Description |
|---|---|---|---|
| **Card Summary** | Textarea | Required, 120-220 characters | Displayed on the development cards |
| **Detailed Overview** | Markdown / Rich Text | Optional | Full case study and specification breakdown |

### Section C: Project Metrics & Status
| Field Name | Type | Validation / Requirements | Description |
|---|---|---|---|
| **Development Status** | Select | `planning` \| `under_construction` \| `selling` \| `completed` \| `sold_out` | Real-time stage |
| **Current Construction Phase** | Text Input | Optional (e.g. `MEP Rough-in`, `Finishing`) | Transparent progress line |
| **Total Units & Available** | Number Inputs | Optional integers | Unit inventory tracking |
| **Target Completion Year** | Number Input | 4-digit year (e.g. 2025) | Delivery milestone |
| **Downloadable Brochure** | File Upload (PDF) | Optional (Max 25MB) | Investor & buyer brochure download |

### Section D: Imagery & Publishing
| Field Name | Type | Validation / Requirements | Description |
|---|---|---|---|
| **Cover Visual** | Image Dropzone | Required. WebP, JPG, PNG (Max 5MB) | Card aspect ratio 16:11 |
| **Cover Alt Text** | Text Input | Required for accessibility & SEO | Image description |
| **Gallery Renders** | Multi-Image Dropzone | Optional. Up to 12 files | 3D renders, site aerials, plans |
| **Sort Order** | Number Input | Default: 0 | Display priority (ascending) |
| **Publish Status** | Toggle | `Draft` \| `Published` | Live status on the public website |

---

## 5. Client Integration Guide (Frontend)

To connect `/developments` to the backend REST API:

1. **API Client Hook** (`src/api/useDevelopments.js`):
   ```javascript
   export async function fetchDevelopments(category = 'all') {
     const params = new URLSearchParams({ isPublished: 'true' });
     if (category !== 'all') params.set('category', category);
     const res = await fetch(`/api/v1/developments?${params}`);
     if (!res.ok) throw new Error('Failed to load developments');
     return res.json();
   }
   ```
2. **Component Integration** ([`src/pages/DevelopmentsPage.jsx`](file:///c:/Users/admin/Desktop/avencrest-web/src/pages/DevelopmentsPage.jsx)):
   - Replace static `PROJECTS` binding with `useQuery(['developments', activeCategory], () => fetchDevelopments(activeCategory))`.
   - Each card routes cleanly to `/projects/${development.slug}` for individual project dossier preview.
