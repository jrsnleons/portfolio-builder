# Protfolio Builder

- A simple website portoflio builder made to cater and help people have a more online professional presence by having a personalized website of their own

## Todo:
### Phase 1: Foundation
- [x] **Database Schema Design:** User, Bio, Category, Skill, Project, Experience, and Link models.
- [x] **Database Seeding:** Initial mock data for testing relational integrity.
- [ ] **Authentication:** Implementation of secure login (NextAuth/Clerk).

### Phase 2: Frontend & Public View
- [ ] **Public Profile Page:** Dynamic routing `/[username]` to display individual portfolios.
- [ ] **Responsive UI:** Mobile-first design for all portfolio sections.
- [ ] **SEO Optimization:** Dynamic metadata for social sharing.

### Phase 3: Editor Dashboard
- [ ] **Editor UI:** A user-friendly dashboard to manage portfolio content.
- [ ] **Form Handling:** Zod-validated forms for Bio and User details.
- [ ] **Dynamic Lists:** Interface to add/remove/edit Skills, Projects, and Experience.

### Phase 4: Backend & Infrastructure
- [ ] **Server Actions:** Secure CRUD operations for all database models.
- [ ] **Media Handling:** Image and PDF upload integration (Uploadthing/Cloudinary).
- [ ] **Deployment:** Hosting on Vercel with environment variable configuration
