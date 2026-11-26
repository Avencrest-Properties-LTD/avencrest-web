# Avencrest Projects API & Admin Portal Specification

> **Context**: For current development, project records on the client-facing website are hardcoded. In production, this data will be dynamically served via a REST API and managed via the Avencrest Admin Portal.

---

## 1. API Endpoints

### 1.1 Public Endpoints (Client Web)

#### `GET /api/v1/projects`
Retrieve published projects with filtering and pagination.

- **Query Parameters**:
  - `category` *(optional)*: `residential` | `commercial` | `all` (default: `all`)
  - `status` *(optional)*: `completed` | `in_progress` | `planned`
  - `page` *(optional, default: 1)*: integer
  - `limit` *(optional, default: 12)*: integer
  - `featured` *(optional)*: boolean

**Success Response (`200 OK`)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "ikoyi-residence",
      "slug": "the-ikoyi-residence",
      "title": "The Ikoyi Residence",
      "category": "residential",
      "badge": "Residential",
      "location": "IKOYI, LAGOS · RESIDENTIAL",
      "typology": "Private Residence",
      "description": "A private contemporary residence carefully designed to balance natural ventilation, timber shading, and seamless indoor-outdoor living.",
      "featured": true,
      "status": "completed",
      "completionYear": 2024,
      "coverImage": {
        "url": "https://cdn.avencrest.com/projects/ikoyi-residence/cover.webp",
        "alt": "The Ikoyi Residence exterior featuring warm timber louvers",
        "width": 1920,
        "height": 1320
      },
      "gallery": [
        {
          "url": "https://cdn.avencrest.com/projects/ikoyi-residence/gallery-1.webp",
          "caption": "Front facade with timber louvers"
        }
      ],
      "order": 1,
      "createdAt": "2024-03-15T10:00:00Z",
      "updatedAt": "2024-06-20T14:30:00Z"
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

#### `GET /api/v1/projects/:slug`
Retrieve full project details by slug.

---

### 1.2 Protected Endpoints (Admin Portal)

- `GET /api/v1/admin/projects` — List all projects (including drafts/archived)
- `POST /api/v1/admin/projects` — Create project
- `PUT /api/v1/admin/projects/:id` — Update project
- `DELETE /api/v1/admin/projects/:id` — Delete project
- `POST /api/v1/admin/media/upload` — Direct upload for cover images and galleries (presigned S3 / Cloudinary)

---

## 2. API Data Schema (TypeScript Interface)

```typescript
export type ProjectCategory = 'residential' | 'commercial';
export type ProjectStatus = 'completed' | 'in_progress' | 'planned';

export interface ProjectMedia {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  badge: string;                     // e.g., "Residential" or "Commercial"
  location: string;                  // e.g., "IKOYI, LAGOS · RESIDENTIAL"
  typology: string;                  // e.g., "Private Residence", "Terraced Homes"
  description: string;               // 2-3 concise summary sentences
  fullContent?: string;              // Optional markdown or rich text for detail page
  coverImage: ProjectMedia;
  gallery?: ProjectMedia[];
  status: ProjectStatus;
  featured: boolean;
  order: number;                     // Display sorting order
  completionYear?: number;
  client?: string;                   // Optional private client info for admin records
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
  "coverImage": {
    "url": "https://cdn.avencrest.com/projects/ikoyi-residence/cover.webp",
    "alt": "The Ikoyi Residence exterior featuring warm timber louvers"
  },
  "gallery": [
    {
      "url": "https://cdn.avencrest.com/projects/ikoyi-residence/facade.webp",
      "caption": "Facade detail"
    }
  ],
  "status": "completed",
  "featured": true,
  "order": 1,
  "completionYear": 2024,
  "isPublished": true
}
```

---

## 4. Admin Portal Form Layout & Fields

The Admin Portal project editor form is organized into 4 distinct fieldsets:

### Section A: Core Information
| Field Name | Type | Validation / Requirements | Description |
|---|---|---|---|
| **Project Title** | Text Input | Required, max 100 chars | e.g. `The Ikoyi Residence` |
| **URL Slug** | Text Input | Required, unique, auto-generated from title | e.g. `the-ikoyi-residence` |
| **Category** | Radio / Select | Required: `residential` \| `commercial` | Drives client-side filter tabs |
| **Badge Label** | Text Input | Optional (defaults to category title) | Display text on top of image |
| **Typology** | Text Input | Required, max 60 chars | e.g. `Private Residence` |
| **Location Line** | Text Input | Required, max 80 chars | e.g. `IKOYI, LAGOS · RESIDENTIAL` |

### Section B: Copy & Descriptions
| Field Name | Type | Validation / Requirements | Description |
|---|---|---|---|
| **Short Summary** | Textarea | Required, 120-220 characters | Displayed on the project grid cards |
| **Full Description** | Rich Text / Markdown | Optional | For expanded project modal / case study page |

### Section C: Imagery & Media
| Field Name | Type | Validation / Requirements | Description |
|---|---|---|---|
| **Cover Image** | Image Dropzone | Required. Max 5MB (JPG, WebP, PNG) | Card image (aspect ~ 16:11) |
| **Cover Alt Text** | Text Input | Required for accessibility & SEO | Descriptive image caption |
| **Gallery Images** | Multi-Image Dropzone | Optional. Up to 10 images | Detail views and interior shots |

### Section D: Publishing & Display Controls
| Field Name | Type | Validation / Requirements | Description |
|---|---|---|---|
| **Project Status** | Select | `completed` \| `in_progress` \| `planned` | Current delivery status |
| **Completion Year** | Number Input | 4-digit year (e.g. 2024) | Date of handover |
| **Sort Order** | Number Input | Default: 0 | Lower numbers appear first |
| **Featured on Home** | Toggle / Checkbox | Boolean | Shows on homepage featured row |
| **Publish Status** | Toggle / Select | `Draft` \| `Published` | Visibility control for public API |

---

## 5. Client Integration Plan (Frontend)

When switching from hardcoded static data to the live API:

1. **Service Hook**: Create `src/api/useProjects.js` using `fetch` or React Query:
   ```javascript
   export async function fetchProjects(category = 'all') {
     const params = new URLSearchParams({ isPublished: 'true' });
     if (category !== 'all') params.set('category', category);
     const res = await fetch(`/api/v1/projects?${params}`);
     if (!res.ok) throw new Error('Failed to load projects');
     return res.json();
   }
   ```
2. **Component Integration**:
   Replace static `PROJECTS` in `src/pages/ProjectsPage.jsx` with standard loading state (`useLoadingStore` / skeleton loader) and data response binding.
