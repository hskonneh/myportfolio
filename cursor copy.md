---
description: Core rules, conventions, and architectural guidelines for the Portfolio App that will be hosted on GitHub Pages.
globs:
alwaysApply: true
---

# --- CURSOR AGENT RULESET: PERSONAL PORTFOLIO WEBSITE ---

## 1. CORE DIRECTIVES

**THIS DOCUMENT IS THE ABSOLUTE AND IMMUTABLE SOURCE OF TRUTH FOR THIS PROJECT.**

As the AI agent assigned to this task, you **MUST** adhere to these rules without deviation. Your primary objective is to build a professional, aesthetic, and fully functional personal portfolio website for Hassan Sidique Konneh.

### Fundamental Principles
- **No Hallucination:** You **MUST NOT** invent, assume, or hallucinate any information. All content (biography, skills, project details, experience) **MUST** be directly derived from the provided source materials.
- **No Bugs or Errors:** You **MUST** prioritize writing clean, efficient, and error-free code. This includes following all best practices for the chosen technology stack, ensuring all components function as expected before finalizing the project.
- **Self-Correction:** If a command or code generation step results in an error, you **MUST** analyze the error message, consult your knowledge base and these rules, and attempt to correct the issue before proceeding.
- **Clarity and Justification:** When making significant architectural or design decisions, you **MUST** briefly justify your choice in your thought process.
- **Incremental Progress:** You **MUST** work in logical, incremental steps. Follow the phases outlined below.
- **Code Quality:** Always write correct, best practice, DRY principle (Don't Repeat Yourself), bug-free, fully functional and working code.
- **Readability First:** Focus on easy and readable code over being performant.
- **Complete Implementation:** Fully implement all requested functionality. Leave NO todo's, placeholders or missing pieces.

---

## 2. TECHNOLOGY STACK & ARCHITECTURE

### Core Technologies
- **HTML5:** Semantic markup for accessibility and SEO
- **CSS3:** Custom styles with Tailwind CSS utility classes via CDN
- **JavaScript (ES6+):** Modern JavaScript for interactivity and dynamic content
- **Tailwind CSS:** Integrated via CDN for utility-first styling
- **Google Fonts:** Poppins and Inter for typography
- **Font Awesome:** Professional icons via CDN

### Project Structure
```
myportfolio/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript functionality
├── assets/             # Static assets
│   └── Professional_photo.png
├── cursor.mdc          # This rules file
├── GEMINI.md           # Original project rules
├── README.md           # Project documentation
└── LICENSE             # License file
```

---

## 3. DESIGN REQUIREMENTS & MODIFICATIONS

### 3.1 Responsive Design (CRITICAL)
- **Mobile-First Approach:** Design for mobile screens first, then scale up
- **Breakpoints:** Support all screen sizes from 320px to 4K displays
- **Test Points:** 320px, 375px, 768px, 1024px, 1440px, 1920px, 2560px
- **Flexible Layouts:** Use CSS Grid and Flexbox for responsive layouts
- **Scalable Typography:** Use relative units (rem, em) and responsive font sizes

### 3.2 Navigation Bar Modifications
- **Position:** Move navigation to the LEFT side of the website
- **Hamburger Menu:** Add hamburger button for mobile/tablet navigation
- **Toggle Functionality:** Hamburger button opens/closes navigation panel
- **Theme Toggle:** Add dark/light mode switch button in navigation
- **Profile Image:** Replace "Hassan Konneh" text with profile image in nav
- **No Underlines:** Remove all underlines from navigation buttons

### 3.3 Dark/Light Mode Implementation
- **Toggle Button:** Prominent switch in navigation bar
- **Local Storage:** Remember user's theme preference
- **Smooth Transitions:** 0.3s ease transitions between themes
- **Accessibility:** Ensure sufficient contrast ratios in both modes
- **Icon Updates:** Sun icon for dark mode, moon icon for light mode

### 3.4 Visual Enhancements
- **Profile Picture:** Increase size in home section (from 192px to 256px)
- **Blinking Animation:** Add round blinking ping around profile picture
- **Contact Form:** Add contact form box with name, email, and message fields
- **Typography:** Ensure all text is clearly visible in both themes

### 3.5 Color Palette & Accessibility
- **Light Mode:**
  - Primary: #FFFFFF (white)
  - Secondary: #F9FAFB (very light gray)
  - Text: #1F2937 (dark charcoal)
  - Accent: #3B82F6 (professional blue)
  - Links: #2563EB (blue-600)
- **Dark Mode:**
  - Primary: #1F2937 (dark gray)
  - Secondary: #111827 (darker gray)
  - Text: #F9FAFB (light gray)
  - Accent: #60A5FA (light blue)
  - Links: #93C5FD (light blue-300)

---

## 4. IMPLEMENTATION PHASES

### Phase 1: Navigation Restructure
1. Move navigation bar to left side
2. Implement hamburger menu functionality
3. Add theme toggle button
4. Replace name with profile image
5. Remove navigation link underlines

### Phase 2: Responsive Design Enhancement
1. Implement mobile-first CSS approach
2. Add comprehensive media queries
3. Test across all required breakpoints
4. Ensure touch-friendly interface elements

### Phase 3: Visual Improvements
1. Increase profile picture size
2. Add blinking ping animation
3. Enhance contact section with form
4. Improve typography and spacing

### Phase 4: Testing & Validation
1. Cross-browser testing (Chrome, Firefox, Safari, Edge)
2. Device testing (mobile, tablet, desktop)
3. Accessibility audit
4. Performance optimization
5. Code validation (HTML, CSS, JS)

---

## 5. CODE IMPLEMENTATION GUIDELINES

### HTML Standards
- Use semantic HTML5 elements
- Include proper meta tags for SEO and viewport
- Ensure proper heading hierarchy (h1 → h2 → h3)
- Add alt attributes to all images
- Include ARIA labels for accessibility

### CSS Standards
- Use Tailwind CSS utility classes primarily
- Custom CSS only for complex animations and specific styling
- Implement CSS custom properties for theme colors
- Use CSS Grid and Flexbox for layouts
- Ensure smooth transitions and animations

### JavaScript Standards
- Use modern ES6+ syntax
- Implement proper error handling
- Use event delegation for dynamic content
- Follow functional programming principles
- Comment complex logic thoroughly

### Performance Requirements
- Optimize images (WebP format preferred)
- Minimize HTTP requests
- Use CDN for external resources
- Implement lazy loading for images
- Ensure Core Web Vitals compliance

---

## 6. TESTING REQUIREMENTS

### 6.1 Responsive Testing Checklist
- [ ] Mobile (320px - 767px): Navigation collapses to hamburger menu
- [ ] Tablet (768px - 1023px): Navigation remains accessible
- [ ] Desktop (1024px+): Full navigation visible
- [ ] Large screens (1440px+): Content scales appropriately
- [ ] Ultra-wide (2560px+): Layout remains centered and readable

### 6.2 Functionality Testing
- [ ] Hamburger menu opens/closes navigation
- [ ] Theme toggle switches between dark/light modes
- [ ] Smooth scrolling works on all navigation links
- [ ] Contact form validation and submission
- [ ] All external links open correctly
- [ ] Profile picture animation works

### 6.3 Accessibility Testing
- [ ] Keyboard navigation works throughout site
- [ ] Screen reader compatibility
- [ ] Color contrast meets WCAG AA standards
- [ ] Focus indicators are visible
- [ ] Alt text for all images

### 6.4 Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## 7. DEPLOYMENT & MAINTENANCE

### GitHub Pages Configuration
- Static site deployment from main branch
- Custom domain support (if applicable)
- HTTPS enforcement
- Proper meta tags for social sharing

### Maintenance Guidelines
- Regular content updates
- Security updates for dependencies
- Performance monitoring
- Backup procedures
- Version control best practices

---

## 8. CONTENT GUIDELINES

### Personal Information
- All content must be factual and verifiable
- Contact information must be current
- Professional photos only
- Skills and experience accurately represented

### Project Showcase
- Only include completed, working projects
- Provide accurate descriptions
- Include relevant technologies
- Link to live demos when available

---

## 9. SECURITY & PRIVACY

### Data Protection
- No sensitive personal information in code
- Secure contact form implementation
- Privacy policy considerations
- GDPR compliance for EU visitors

### Code Security
- No hardcoded credentials
- Input validation for forms
- XSS prevention
- CSRF protection for forms

---

## 10. DOCUMENTATION REQUIREMENTS

### Code Documentation
- Inline comments for complex logic
- Function documentation with parameters
- README with setup instructions
- Architecture decisions recorded

### User Documentation
- Clear navigation instructions
- Contact form usage guide
- Accessibility features explanation
- Browser compatibility notes

---

## 11. QUALITY ASSURANCE

### Code Quality Metrics
- HTML validation (W3C)
- CSS validation (W3C)
- JavaScript linting (ESLint)
- Performance benchmarks
- Accessibility scores (Lighthouse)

### Final Checklist
- [ ] All requirements implemented
- [ ] Responsive design working
- [ ] Dark/light mode functional
- [ ] Navigation restructured
- [ ] Contact form operational
- [ ] All tests passing
- [ ] Code validated
- [ ] Documentation complete
- [ ] Ready for deployment

---

**REMEMBER: This document serves as the definitive guide for all development decisions. Any deviations must be documented and justified. The final product must meet all specified requirements while maintaining professional quality and user experience standards.**