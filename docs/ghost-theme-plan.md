## Ghost Theme Migration Plan

### Goals
- **Preserve design**: Keep your visual style, palette, typography, and section layout.
- **Base theme**: Adapt everything into the existing `Starter/` Ghost theme in the repo.
- **Scheduling**: Embed Calendly inline for booking.
- **Marketing + blog**: A custom homepage plus `/blog/` collection for posts.

### Files and structure to use in `Starter/`
- **Templates (keep)**: `Starter/default.hbs`, `Starter/index.hbs`, `Starter/post.hbs`, `Starter/page.hbs`, `Starter/tag.hbs`, `Starter/author.hbs`.
- **Templates (add)**: `Starter/home.hbs` (marketing homepage with sections).
- **Partials (add)**:
  - `Starter/partials/navigation.hbs` (optional custom header markup)
  - `Starter/partials/hero.hbs`
  - `Starter/partials/services.hbs`
  - `Starter/partials/about.hbs`
  - `Starter/partials/gallery.hbs`
  - `Starter/partials/booking.hbs`
  - `Starter/partials/footer.hbs`
  - `Starter/partials/calendly.hbs` (Calendly inline embed)
- **Assets**:
  - Move images to `Starter/assets/images/` and reference with `{{asset "images/..."}}`.
  - Reuse `Starter/assets/` build pipeline (outputs to `Starter/assets/built/`).

### Routing
- Provide a `routes.yaml` for Ghost Admin → Settings → Labs:

```yaml
routes:
  /: home

collections:
  /blog/:
    permalink: /blog/{slug}/
    template: index

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

### Calendly embed
- Create `Starter/partials/calendly.hbs` for inline embed and script.
- Read URL from a theme setting `@custom.calendlyUrl` so it’s configurable in Ghost Admin → Design.
- Include this partial inside `partials/booking.hbs` and optionally on a Contact page template.

### Styling integration (adapting `styles/globals.css`)
- Do not add Tailwind; translate to the Starter’s vanilla CSS pipeline.
- Map styles into `Starter/assets/css/`:
  - **Variables/palette** → merge into `vars.css` (keep names like `--dark-teal`, `--forest-green`, etc.).
  - **Base/typography** → `ghost/content.css` and `components/global.css`.
  - **Section styles/utilities** → new component sheets:
    - `components/hero.css`
    - `components/services.css`
    - `components/about.css`
    - `components/gallery.css`
    - `components/booking.css`
    - `components/utilities.css` (e.g., `.frame-fill`, section background helpers)
  - Import these from `assets/css/index.css` to include in the build.
- Fonts: include Google Fonts link in `Starter/default.hbs` head to preserve typography.

### Layout mapping (React → Handlebars)
- `Navigation.tsx` → header markup in `default.hbs` or `partials/navigation.hbs` using `{{navigation}}` helper.
- `Hero.tsx`, `Services.tsx`, `About.tsx`, `Gallery.tsx`, `Booking.tsx` → respective partials included in `home.hbs` in that order.
- `Footer.tsx` → `partials/footer.hbs` with your palette and links.
- `Blog.tsx` → `index.hbs` (list with `partials/card.hbs`).
- `BlogPage.tsx` → `post.hbs`.
- `Contact.tsx` → optional `page-contact.hbs` or use `page.hbs` with Calendly partial injected.

### Content and helpers
- Use Ghost helpers for data and navigation:
  - `{{navigation}}` for menus configured in Ghost Admin.
  - `{{#foreach posts}}` in `index.hbs` for listings; `{{content}}` in `post.hbs` for post body.
  - `{{asset "images/logo.png"}}` to reference local images.
- Add a “Book Now” CTA that anchors to the booking section or opens Calendly inline.

### Build, validate, and package
- Inside `Starter/`:
  - Install deps: `npm i` or `yarn`.
  - Build assets: `npm run build` or `yarn build` (outputs to `assets/built/`).
  - Optionally validate locally with `gscan`.
  - Package: `npm run zip` or zip the `Starter/` directory manually.

### Deployment to Ghost(Pro)
- Upload the zipped theme in Ghost Admin → Design → Change theme → Upload.
- In Ghost Admin:
  - Design → Site-wide settings: set `calendlyUrl`, logo, cover image, and navigation.
  - Settings → Labs: upload `routes.yaml`.
- Set homepage to `home` via the `routes.yaml` mapping; blog will live at `/blog/`.

### Assets mapping
- Replace Figma images with local assets:
  - `assets/hero.png` → `Starter/assets/images/hero.png`
  - `assets/logo.png` → `Starter/assets/images/logo.png`
  - `assets/image 2.png`, `image 3.png`, `image 4.png` → `Starter/assets/images/` with sensible names

### Open questions / assumptions
- Using Ghost(Pro); no server-side customizations beyond theme.
- Booking: Inline Calendly embed preferred over modal for theme compatibility.
- Tailwind not required; styles will be converted to vanilla CSS within Starter’s pipeline.


