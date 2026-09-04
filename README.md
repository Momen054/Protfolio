# Momen Ahmed — .NET Developer Portfolio

A professional, responsive personal portfolio built with plain HTML5, CSS3, and JavaScript.

## Features

- Modern dark developer-focused design
- Responsive layout for mobile, tablet, and desktop
- Sticky navigation with mobile hamburger menu
- Hero, About, Skills, Projects, Experience, Services, and Contact sections
- Project detail modal
- Frontend-only contact form, ready to connect to an ASP.NET Core API
- Semantic HTML and accessibility-friendly labels/focus states
- Basic SEO metadata
- Subtle reveal and hover animations
- No framework dependencies

## Structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── profile/
│   ├── projects/
│   └── icons/
└── README.md
```

## Before publishing

Replace every placeholder:

- `YOUR_GITHUB_URL`
- `YOUR_LINKEDIN_URL`
- `YOUR_EMAIL`
- `YOUR_CV_URL`

You can also replace the abstract project previews with real screenshots inside `images/projects/`.

## Run locally

Open `index.html` directly in a browser. No build process is required.

For development, you can also use VS Code Live Server.

## Connecting the contact form

The form currently does not send email. To connect it to ASP.NET Core later:

1. Create a POST endpoint such as `/api/contact`.
2. Accept `name`, `email`, `subject`, and `message`.
3. Validate the request server-side.
4. Add rate limiting / anti-spam protection.
5. Send or store the message through your backend.
6. Replace the current JavaScript submit handler with a `fetch()` request.

## Content policy

The portfolio intentionally avoids invented clients, awards, certifications, statistics, testimonials, experience, or URLs. Add only information you can verify.
