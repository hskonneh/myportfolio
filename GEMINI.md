---
description: Core rules, conventions, and architectural guidelines for the Portfolio App that will be hosted on GitHub Pages.
globs:
alwaysApply: false
---

# --- GEMINI AGENT RULESET: PERSONAL PORTFOLIO WEBSITE ---

## 1. CORE DIRECTIVES

**THIS DOCUMENT IS THE ABSOLUTE AND IMMUTABLE SOURCE OF TRUTH FOR THIS PROJECT.**

As the AI agent assigned to this task, you **MUST** adhere to these rules without deviation. Your primary objective is to build a professional, aesthetic, and fully functional personal portfolio website for Hassan Sidique Konneh.

- **No Hallucination:** You **MUST NOT** invent, assume, or hallucinate any information. All content (biography, skills, project details, experience) **MUST** be directly derived from the provided source materials: the documents in the `C:\Users\LENIVO\Documents\GEMINI\cv_resumes\gemini_app\portfolio\portfoliocvs`
directory and the user's public GitHub repositories.
- **No Bugs or Errors:** You **MUST** prioritize writing clean, efficient, and error-free code. This includes following all best practices for the chosen technology stack, ensuring all components function as expected before finalizing the project. The final output **MUST** be a deployable application.
- **Self-Correction:** If a command or code generation step results in an error, you **MUST** analyze the error message, consult your knowledge base and these rules, and attempt to correct the issue before proceeding. Do not repeat a failing command without modification.
- **Clarity and Justification:** When making significant architectural or design decisions (e.g., choosing a specific library), you **MUST** briefly justify your choice in your thought process.
- **Incremental Progress:** You **MUST** work in logical, incremental steps. Do not attempt to generate the entire website in a single step. Follow the phases outlined below.
- Adhere strictly to the rules, patterns, and conventions outlined in this document to ensure code quality, consistency, and maintainability.
- The project **Must** be lightweight and must not include any unnecessary libraries or dependencies.
- Follow the user’s requirements carefully & to the letter.
- First think step-by-step - describe your plan for what to build in pseudocode, written out in great detail.
- Confirm, then write code!
- Always write correct, best practice, DRY principle (Don't Repeat Yourself), bug free, fully functional and working code also it should be aligned to listed rules down below at Code Implementation Guidelines.
- Focus on easy and readability code, over being performant.
- Fully implement all requested functionality.
- Leave NO todo’s, placeholders or missing pieces.
- Ensure code is complete! Verify thoroughly finalised.
- Include all required imports, and ensure proper naming of key components.
- Make sure the code is well explained in comments for future understanding and development.
- Be concise Minimize any other prose.
- If you think there might not be a correct answer, you say so.
- If you do not know the answer, say so, instead of guessing.
---


## Technology Stack
---

## 2. PHASE 1: INFORMATION GATHERING & SYNTHESIS

This is the foundational phase. No code will be written until this phase is complete.

1.  **Scan Local Documents:**
    - You **SHALL** use the `glob` and `read_file` tools to access and parse all documents within the `C:\Users\LENIVO\documents\gemini\cv_resumes\` directory.
    - Supported file types to parse are: `.pdf`, `.docx`, and `.txt`.
    - Extract key information:
        - **Personal Details:** Full Name, Contact Information (Email, Phone, LinkedIn if available).
        - **Profile Picture:** A professional headshot of the owner.
        - **Professional Summary/Bio:** A concise summary of skills and experience.
        - **Work Experience:** Job titles, company names, dates of employment, and key responsibilities/achievements.
        - **Education:** Degrees, institutions, and graduation dates.
        - **Skills:** A comprehensive list of technical and soft skills.

2.  **Scan GitHub Repositories:**
    - You **SHALL** use the GitHub API tools to access and list all public repositories for the user `hskonneh`.
    - For each relevant repository, you **SHALL** retrieve:
        - Repository Name
        - Repository Description
        - Primary Programming Language
        - URL

3.  **Synthesize Data:**
    - After gathering all information, you **SHALL** synthesize it into a single, structured JSON object. This object will be the sole source of content for the website. This prevents inconsistencies and repeated file reading.
    - The structure should be logical, for example:
      ```json
      {
        "personalInfo": {
          "name": "Hassan Sidique Konneh",
          "email": "...",
          "linkedin": "..."
        },
        "bio": "...",
        "experience": [
          { "title": "...", "company": "...", "dates": "...", "duties": ["...", "..."] }
        ],
        "education": [ ... ],
        "skills": [ "Stata", "Python", "Data Analysis", ... ],
        "projects": [
          { "name": "...", "description": "...", "language": "...", "url": "..." }
        ]
      }
      ```

---

## 3. PHASE 2: PROJECT SETUP & TECHNOLOGY STACK

This project will be built using a modern, efficient, and easily deployable technology stack. The chosen technologies are **HTML**, **CSS**, and **JavaScript** for a static single-page application, with **Tailwind CSS** integrated via CDN for utility-first styling and custom components designed to achieve a **shadcn/ui-like aesthetic**.

1.  **Initialize Project:**
    - The project **MUST** be located in `C:\Users\LENIVO\documents\gemini\cv_resumes\gemini_app\`.
    - You **SHALL** create the following core files:
        - `index.html`: The main HTML file for the single-page application.
        - `style.css`: The CSS file for any custom styles not covered by Tailwind.
        - `script.js`: The JavaScript file for interactive functionalities and dynamic content population.

2.  **Dependencies:**
    - **Tailwind CSS:** Integrated via CDN in `index.html` for utility-first styling.
    - **Google Fonts:** Used for typography (Poppins and Inter).
    - **Font Awesome (Optional):** May be used via CDN for professional icons.
    - No other external npm packages or build tools are required to maintain a lightweight and easily deployable static site.

---

## 4. PHASE 3: DESIGN (UI/UX) & STRUCTURE

The website's design must be clean, modern, professional, and fully responsive.

1.  **Design Principles:**
    - **Mobile-First:** The layout **MUST** be designed for mobile screens first, then scaled up for tablet and desktop.
    - **Accessibility (A11y):** Use semantic HTML, ensure sufficient color contrast, and provide `alt` tags for images.
    - **Consistency:** Maintain a consistent color scheme, typography, and spacing throughout the site.
    - **Visual Hierarchy:** Important elements should be more prominent. Use size, color, and placement to guide the user's eye.

2.  **Aesthetics:**
    - **Color Palette:** Use a professional and clean palette.
        - **Primary/Background:** White (`#FFFFFF`) or a very light gray (`#F9FAFB`).
        - **Secondary/Text:** A dark charcoal (`#1F2937`) instead of pure black.
        - **Accent:** A professional blue (`#3B82F6`) or teal for links, buttons, and highlights.
    - **Typography:**
        - Use a sans-serif font from a service like Google Fonts. **Poppins** or **Inter** are excellent choices.
        - Define clear font sizes for headings (`h1`, `h2`, `h3`) and body text.

3.  **Website Structure (Single-Page Application):**
    - The website **MUST** be a **Single-Page Application (SPA)**. Navigation links in the Navbar **SHALL** smoothly scroll the user to the corresponding section of the page.
    - You **SHALL** structure the application using semantic HTML elements, organized into the following sections:
    - **Core Elements:**
        - `Navbar`: Contains navigation links (Home, About, Projects, Contact) that scroll to page sections. It will also contain links to social profiles.
        - `Footer`: Contains copyright information and repeated social links.
        - `Project Card`: A reusable HTML structure to display individual GitHub projects.
        - `Skill Badge`: A reusable HTML structure to display individual skills.
    - **Page Sections (HTML `div` elements with IDs):**
        - **Hero Section:** A compelling introduction with the user's name, a professional title (e.g., "Data Analyst & Economist"), a prominent profile picture, and a call-to-action button (e.g., "View My Work").
        - **About Section:** An eye-catching and professional autobiography derived from the source documents, providing a detailed and engaging narrative about the owner.
        - **Skills Section:** A grid or list displaying all skills using the `Skill Badge` structure.
        - **Experience Section:** A chronological list of work experience.
        - **Projects Section:** A grid of `Project Card` structures, showcasing the GitHub repositories.
        - **Contact Section:** A simple section with email, LinkedIn, and GitHub profile links.
        - **Services Section:** A section describing the services offered for hire.

---

## 5. PHASE 4: COMPREHENSIVE TESTING & VALIDATION

This phase is critical to ensure the final application is correct, functional, and ready for deployment. You **MUST** conduct the following tests thoroughly.

1.  **Automated Checks:**
    - **Code Quality:** You **SHALL** ensure HTML is well-formed, CSS is valid, and JavaScript adheres to best practices. This will primarily involve manual review and potentially using browser developer tools for validation.
    - **No Automated Tests:** For this static HTML/CSS/JS project, formal unit/integration tests are not required. Validation will rely on manual testing.
    - **Build Process:** For a static site, the "build" process involves ensuring all HTML, CSS, and JavaScript files are correctly linked and present. There are no compilation steps.

2.  **End-to-End (E2E) Testing (Optional but Recommended):**
    - For ensuring the application works from a user's perspective, you **MAY** implement E2E tests. This involves simulating user interactions in a real browser.
    - **Frameworks:** Playwright or Cypress are recommended for this.
    - **Example Test Case:** A test that navigates to the page, clicks on a project link, and verifies that the correct URL is opened.
    - *Note: Adding E2E tests introduces new dependencies. This step is recommended for ensuring the highest quality but can be skipped if the project needs to remain absolutely minimal.*

3.  **Manual Testing Checklist:**
    - This checklist **MUST** be completed before deployment.
    - **Responsiveness:**
        - [ ] Verify the layout renders correctly on at least three screen sizes: mobile (375px), tablet (768px), and desktop (1440px).
        - [ ] Ensure navigation is usable on mobile (e.g., a hamburger menu if needed).
        - [ ] Confirm that text is readable and does not overflow its containers on any screen size.
    - **Content & Functionality:**
        - [ ] **Content Accuracy:** Proofread all displayed text (bio, experience, project descriptions) and verify it matches the synthesized data from Phase 1.
        - [ ] **Link Integrity:** Click every link on the page (Navbar, social icons, project URLs, contact links) to ensure they direct to the correct destination.
        - [ ] **Smooth Scrolling:** Verify that clicking the navigation links scrolls smoothly to the correct page section.
    - **Browser Compatibility & Performance:**
        - [ ] **Console Check:** Open the browser's developer tools and check the console for any errors or warnings. The console **MUST** be clean.
        - [ ] **Cross-Browser Check:** Test the site in Chrome and at least one other browser (e.g., Firefox) to ensure consistent rendering.
        - [ ] **Performance Audit:** Run a Lighthouse audit in Chrome DevTools to check for performance, accessibility, and SEO best practices. Aim for scores above 90.

---

## 6. PHASE 5: DEPLOYMENT TO GITHUB PAGES

The final application **MUST** be configured for successful deployment to **GitHub Pages**.

1.  **Configuration for Static Export:**
    - For a static HTML/CSS/JavaScript site, no specific configuration file is needed for static export. Ensure all your assets (HTML, CSS, JS, images) are in the root directory or a clearly defined subdirectory (e.g., `assets/`).

2.  **Deployment Process:**
    - You **SHALL** push your project files (including `index.html`, `style.css`, `script.js`, and any other assets) to the `main` branch of your GitHub repository.
    - After pushing, navigate to your repository on GitHub, go to "Settings" -> "Pages".
    - Under "Build and deployment", select "Deploy from a branch" and choose the `main` branch (or `gh-pages` if you prefer to use that branch for deployment) and the `/ (root)` folder.
    - Save the changes. GitHub Pages will then build and deploy your site.
    **Deployment Package:**
    - You **SHALL** install the `gh-pages` package to simplify the deployment process.
    - **Command:** `npm install gh-pages --save-dev`

3.  **Deployment Scripts:**
    - You **SHALL** add two scripts to the `scripts` section of `package.json`:
        - `"predeploy": "npm run build"`
        - `"deploy": "gh-pages -d out"`
    **Build and Deploy:**
    - The final step of the project will be to run `npm run deploy`. This command will first build and export the application and then push the contents of the `out` directory to a `gh-pages` branch on the remote repository, making it live.

3.  **Final Check:**
    - Before concluding, you **SHALL** perform a final check of the live URL (usually `https://<your-github-username>.github.io/<repository-name>/`) to ensure all links are working, all content is displayed correctly, and the site is responsive.
