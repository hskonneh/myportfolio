// script.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const body = document.body;
    const heroName = document.getElementById('hero-name');
    const heroTitle = document.getElementById('hero-title');
    const contactEmail = document.getElementById('contact-email');
    const contactLinkedin = document.getElementById('contact-linkedin');
    const contactMobile = document.getElementById('contact-mobile');
    const currentYear = document.getElementById('current-year');
    const footerLinkedin = document.getElementById('footer-linkedin');
    const footerGithub = document.getElementById('footer-github');

    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();

    // Function to apply theme
    const applyTheme = (isDarkMode) => {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for dark mode
            if (themeToggleMobile) themeToggleMobile.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for dark mode
        } else {
            body.classList.remove('dark-mode');
            if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for light mode
            if (themeToggleMobile) themeToggleMobile.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for light mode
        }
    };

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    // Theme toggle event listener for desktop button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDarkMode = body.classList.contains('dark-mode');
            applyTheme(!isDarkMode);
            localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
        });
    }

    // Theme toggle event listener for mobile button
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', () => {
            const isDarkMode = body.classList.contains('dark-mode');
            applyTheme(!isDarkMode);
            localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Placeholder for dynamic content - replace with actual data fetching
    const portfolioData = {
        personalInfo: {
            name: "Hassan Sidique Konneh",
            title: "Data Analyst & Economist",
            email: "hassan.konneh@example.com", // Replace with actual email
            linkedin: "https://www.linkedin.com/in/hassansidiquekonneh", // Replace with actual LinkedIn
            mobile: "+1234567890" // Replace with actual mobile
        },
        experience: [
            {
                title: "Senior Data Analyst",
                company: "Global Insights Inc.",
                dates: "Jan 2022 - Present",
                duties: [
                    "Led data analysis projects, improving decision-making by 20%.",
                    "Developed predictive models for market trends.",
                    "Mentored junior analysts in advanced statistical techniques."
                ]
            },
            {
                title: "Economic Researcher",
                company: "Development Solutions NGO",
                dates: "Jul 2019 - Dec 2021",
                duties: [
                    "Conducted econometric studies on development programs.",
                    "Published research findings in peer-reviewed journals.",
                    "Collaborated with international teams on policy recommendations."
                ]
            }
        ],
        projects: [
            {
                name: "My Portfolio",
                description: "My personal portfolio website.",
                language: "HTML, CSS, JavaScript",
                url: "https://github.com/hskonneh/myportfolio"
            },
            {
                name: "SurveyVault",
                description: "A repository created to help data acquizition specalists using Open Data Kits - Kobo, XLS FORM.😎📊📈",
                language: "N/A",
                url: "https://github.com/hskonneh/SurveyVault"
            },
            {
                name: "Econometric Analysis with Stata",
                description: "Econometric analysis project using Stata.",
                language: "Stata",
                url: "https://github.com/hskonneh/econometric_analysis_stata"
            },
            {
                name: "Python for Data Science",
                description: "My code base for all my data related learning",
                language: "Jupyter Notebook",
                url: "https://github.com/hskonneh/python"
            },
            {
                name: "Student Online Registeration System",
                description: "This repository was created to help learners of bootstrap, Php, Mysql, html and CSS create an online registration form that will store the inserted data into a mysql database and display it on the browser if needed.",
                language: "CSS",
                url: "https://github.com/hskonneh/Student_online_registeration_system"
            },
            {
                name: "ALX Polly",
                description: "A polling application for ALX.",
                language: "TypeScript",
                url: "https://github.com/hskonneh/alx-polly"
            }
        ]
    };

    // Populate Hero Section
    if (heroName) heroName.textContent = portfolioData.personalInfo.name;
    if (heroTitle) heroTitle.textContent = portfolioData.personalInfo.title;

    // Populate Contact Info
    if (contactEmail) {
        contactEmail.href = `mailto:${portfolioData.personalInfo.email}`;
        contactEmail.textContent = portfolioData.personalInfo.email;
    }
    if (contactLinkedin) {
        contactLinkedin.href = portfolioData.personalInfo.linkedin;
        contactLinkedin.textContent = portfolioData.personalInfo.linkedin.split('/').pop();
    }
    if (contactMobile) contactMobile.textContent = portfolioData.personalInfo.mobile;

    // Populate Footer Social Links
    if (footerLinkedin) footerLinkedin.href = portfolioData.personalInfo.linkedin;
    if (footerGithub) footerGithub.href = "https://github.com/hskonneh"; // Assuming a fixed GitHub URL for now

    // Populate Experience Section
    const experienceContainer = document.getElementById('experience-container');
    if (experienceContainer) {
        portfolioData.experience.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.classList.add('bg-white', 'dark:bg-gray-800', 'p-6', 'rounded-lg', 'shadow-md');
            jobDiv.innerHTML = `
                <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">${job.title} at ${job.company}</h3>
                <p class="text-blue-600 dark:text-blue-400 mb-4">${job.dates}</p>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    ${job.duties.map(duty => `<li>${duty}</li>`).join('')}
                </ul>
            `;
            experienceContainer.appendChild(jobDiv);
        });
    }

    // Populate Projects Section
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        portfolioData.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card', 'bg-white', 'dark:bg-gray-800', 'p-6', 'rounded-lg', 'shadow-lg', 'transform', 'transition', 'duration-300', 'ease-in-out', 'hover:scale-105', 'hover:shadow-xl');
            projectCard.innerHTML = `
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">${project.name}</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">${project.description}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Language: ${project.language}</p>
                <a href="${project.url}" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Project <i class="fas fa-external-link-alt ml-1"></i></a>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    // Populate Services Section (example, assuming a similar structure to projects for now)
    const servicesList = document.querySelector('.services-list');
    if (servicesList) {
        // Clear existing placeholder content if any
        servicesList.innerHTML = '';

        const servicesData = [
            "Data Analysis & Visualization",
            "Data Management & Database Design",
            "Private Sector Development Advisory",
            "Geographic Information Systems (GIS)",
            "Full Stack Web & Mobile Development",
            "AI Integration & Development",
            "Project Management & M&E Consulting",
            "Digital Skills Training",
            "Prompt development"
        ];

        servicesData.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.classList.add('service-card', 'bg-white', 'dark:bg-gray-800', 'p-4', 'rounded-lg', 'shadow-md', 'text-lg', 'font-medium', 'transform', 'transition', 'duration-300', 'ease-in-out', 'hover:scale-105', 'hover:shadow-xl');
            serviceCard.textContent = service;
            servicesList.appendChild(serviceCard);
        });
    }
});