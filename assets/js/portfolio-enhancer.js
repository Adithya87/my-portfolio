/**
 * Portfolio Enhancement Script
 * Adds modern features and animations to the portfolio website
 */

// Add animations to elements when they come into view
function initAnimations() {
    // Elements to animate
    const animatedElements = {
        '.hero-content': 'animate-fadeIn',
        '.profile-image': 'animate-fadeInUp delay-100',
        '.hero h1': 'animate-fadeInUp delay-200',
        '.hero p': 'animate-fadeInUp delay-300',
        '.hero-contact': 'animate-fadeInUp delay-400',
        '.cta-button': 'animate-fadeInUp delay-500',
        '.section-title': 'animate-fadeInUp',
        '.project-card': 'animate-fadeInUp',
        '.skill-category': 'animate-fadeInUp',
        '.timeline-item': 'animate-fadeInUp',
        '.certification-card': 'animate-fadeInUp',
        '.contact-form': 'animate-fadeInUp',
        '.contact-info': 'animate-fadeInUp',
    };

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(...entry.target.dataset.animation.split(' '));
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Set up animations for elements
    Object.entries(animatedElements).forEach(([selector, animation], index) => {
        document.querySelectorAll(selector).forEach((element, elementIndex) => {
            // Add different delays to stagger animations
            let finalAnimation = animation;
            if (selector === '.project-card' || selector === '.skill-category' || 
                selector === '.timeline-item' || selector === '.certification-card') {
                const delay = `delay-${(elementIndex + 1) * 100}`;
                finalAnimation = `${animation} ${delay}`;
            }
            
            element.dataset.animation = finalAnimation;
            observer.observe(element);
        });
    });
}

// Enhance form with form submission functionality
function enhanceContactForm() {
    const form = document.getElementById('contactForm');
    
    // Add form action if not already set
    if (!form.getAttribute('action')) {
        form.setAttribute('action', 'https://formspree.io/f/your-formspree-id');
        form.setAttribute('method', 'POST');
    }
    
    // Add enhanced styling to the submit button
    const submitBtn = form.querySelector('.submit-btn');
    if (submitBtn && !submitBtn.querySelector('.btn-icon')) {
        const buttonText = submitBtn.textContent;
        submitBtn.innerHTML = `
            <span class="btn-text">${buttonText}</span>
            <span class="btn-icon">→</span>
        `;
    }
    
    // Add consent checkbox if not already there
    if (!form.querySelector('.form-checkbox')) {
        const lastFormGroup = Array.from(form.querySelectorAll('.form-group')).pop();
        const consentGroup = document.createElement('div');
        consentGroup.className = 'form-group form-checkbox';
        consentGroup.innerHTML = `
            <input type="checkbox" id="consent" name="consent" required>
            <label for="consent">I agree to be contacted regarding this message</label>
        `;
        lastFormGroup.after(consentGroup);
    }
}

// Add a progress indicator to the page
function addProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);
    
    const style = document.createElement('style');
    style.textContent = `
        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            z-index: 9999;
            width: 0%;
            transition: width 0.2s ease;
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
}

// Enhanced styling for skills section
function enhanceSkillsSection() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Modern Skills Section Styling */
        .skills-section {
            padding: 5rem 2rem;
            background: linear-gradient(to bottom right, rgba(240, 244, 248, 0.8), rgba(248, 250, 252, 0.8));
            position: relative;
            overflow: hidden;
        }
        
        .skills-section::before {
            content: '';
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0) 70%);
            top: -100px;
            left: -100px;
            z-index: 0;
        }
        
        .skills-section::after {
            content: '';
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0) 70%);
            bottom: -150px;
            right: -150px;
            z-index: 0;
        }
        
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 2rem;
            position: relative;
            z-index: 1;
        }
        
        @media (max-width: 768px) {
            .skills-container {
                grid-template-columns: 1fr;
            }
        }
        
        .skill-category {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            border: 1px solid rgba(37, 99, 235, 0.1);
            position: relative;
            overflow: hidden;
        }
        
        .skill-category::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            transition: height 0.3s ease;
        }
        
        .skill-category:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(37, 99, 235, 0.15);
        }
        
        .skill-category:hover::before {
            height: 6px;
        }
        
        .skill-category h3 {
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
            color: #1e293b;
            position: relative;
            display: inline-block;
            padding-bottom: 0.5rem;
        }
        
        .skill-category h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 3px;
            background: var(--primary);
            transition: width 0.3s ease;
        }
        
        .skill-category:hover h3::after {
            width: 100%;
        }
        
        .skills-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
            margin-top: 1rem;
        }
        
        .skill-tag {
            background: white;
            color: #1e293b;
            border: 1px solid rgba(37, 99, 235, 0.2);
            padding: 0.6rem 1.2rem;
            border-radius: 30px;
            font-size: 0.9rem;
            font-weight: 500;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            z-index: 1;
            cursor: default;
        }
        
        .skill-tag::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            z-index: -1;
            transition: width 0.3s ease;
        }
        
        .skill-tag:hover {
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(37, 99, 235, 0.15);
        }
        
        .skill-tag:hover::before {
            width: 100%;
        }
        
        /* Dark mode adjustments */
        body.dark-mode .skills-section {
            background: linear-gradient(to bottom right, rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.7));
        }
        
        body.dark-mode .skill-category {
            background: rgba(30, 41, 59, 0.8);
            border-color: rgba(255, 255, 255, 0.1);
        }
        
        body.dark-mode .skill-category h3 {
            color: #e2e8f0;
        }
        
        body.dark-mode .skill-tag {
            background: rgba(30, 41, 59, 0.7);
            color: #e2e8f0;
            border-color: rgba(255, 255, 255, 0.1);
        }
    `;
    document.head.appendChild(styleElement);
}

// Darken footer section
function darkenFooter() {
    const footerStyle = document.createElement('style');
    footerStyle.textContent = `
        /* Darkened Footer Styling */
        .footer {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
            color: #e2e8f0 !important;
            border-top: 1px solid rgba(59, 130, 246, 0.2) !important;
        }
        
        .footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(to right, var(--primary), var(--secondary));
        }
        
        .footer-content {
            position: relative;
            z-index: 2;
        }
        
        .footer p {
            color: #cbd5e1 !important;
        }
        
        .social-links .social-link {
            background-color: rgba(59, 130, 246, 0.1) !important;
            border: 1px solid rgba(59, 130, 246, 0.2) !important;
            color: #cbd5e1 !important;
            transition: all 0.3s ease !important;
        }
        
        .social-links .social-link:hover {
            background-color: var(--primary) !important;
            color: white !important;
            transform: translateY(-3px) !important;
            box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3) !important;
        }
        
        /* Add subtle pattern overlay */
        .footer::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
            pointer-events: none;
            z-index: 1;
        }
    `;
    document.head.appendChild(footerStyle);
}

// Add image to About Me section
function enhanceAboutSection() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    // Local image path - you'll need to copy this image to your assets folder
    const imageUrl = 'assets/images/profile.jpg'; // Copy your image here and rename it
    
    // Find the about image placeholder and replace it
    const aboutImage = aboutSection.querySelector('.about-image');
    if (aboutImage) {
        // Replace the emoji with actual image
        aboutImage.innerHTML = `
            <img src="${imageUrl}" alt="Adithya Chepuri" style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
                transition: transform 0.5s ease;
            ">
        `;
        
        // Add hover effect
        aboutImage.addEventListener('mouseenter', () => {
            const img = aboutImage.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });
        
        aboutImage.addEventListener('mouseleave', () => {
            const img = aboutImage.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    }
    
    // Add enhanced styling for the about section
    const aboutStyle = document.createElement('style');
    aboutStyle.textContent = `
        /* Enhanced About Section */
        .about-image {
            overflow: hidden !important;
            position: relative;
        }
        
        .about-image img {
            border-radius: 20px;
            transition: all 0.5s ease;
        }
        
        .about-image:hover {
            transform: translateY(-10px) rotate(2deg) !important;
        }
        
        .about-image::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(37, 99, 235, 0.1), rgba(139, 92, 246, 0.1));
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 20px;
            z-index: 1;
        }
        
        .about-image:hover::before {
            opacity: 1;
        }
        
        /* Add loading placeholder */
        .about-image.loading::after {
            content: '📸';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            z-index: 2;
        }
    `;
    document.head.appendChild(aboutStyle);
    
    // Add loading state while image loads
    if (aboutImage) {
        aboutImage.classList.add('loading');
        const img = aboutImage.querySelector('img');
        if (img) {
            img.addEventListener('load', () => {
                aboutImage.classList.remove('loading');
            });
            
            img.addEventListener('error', () => {
                aboutImage.classList.remove('loading');
                aboutImage.innerHTML = `
                    <div style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                        background: linear-gradient(45deg, var(--primary), #7b2cbf);
                        color: white;
                        font-size: 4rem;
                        border-radius: 20px;
                    ">
                        👨‍💻
                    </div>
                `;
            });
        }
    }
}

// Project Modal Functionality
function initProjectModals() {
    // Project details data
    const projectDetails = {
        project1: {
            title: "MERN Stack Todo Application with Real-time Notifications",
            description: "A full-stack task management system using MERN stack (React.js, Node.js, Express.js, MongoDB) with secure user authentication, CRUD operations, and automated task scheduling functionality.",
            features: [
                "Implemented real-time browser notifications with Web Notifications API for automatic task reminders based on scheduled date/time",
                "Built RESTful API with Express.js backend featuring MongoDB integration, Mongoose ODM, secure user registration/login",
                "Persistent task storage with React Router navigation",
                "Responsive web application with Bootstrap styling and Axios HTTP client integration"
            ],
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Web Notifications API", "React Router", "Bootstrap", "Axios"],
            liveLink: "https://mern-todo-frontend-kvcx.onrender.com"
        },
        project2: {
            title: "AI Prompt Library Web App",
            description: "A full-stack AI Prompt Library web application enabling users to upload, view, and manage AI-generated prompts with associated images.",
            features: [
                "Integrated Cloudinary for secure image hosting",
                "Implemented admin authentication and prompt deletion with MongoDB persistence",
                "Built a responsive UI with prompt cards, modals, copy-to-clipboard functionality",
                "Implemented pagination (12 prompts per page)"
            ],
            technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Tailwind CSS", "Render"],
            liveLink: "https://promptopia-92a8.onrender.com"
        },
        project3: {
            title: "Forest Fire Detection & Risk Assessment Web Application",
            description: "An ML-powered forest fire prediction system using Python (scikit-learn, XGBoost, Flask) with comparative analysis of 5 algorithms on 518-record UCI dataset.",
            features: [
                "Achieved optimal performance through automated R² score optimization",
                "Developed full-stack web application with real-time environmental risk assessment analyzing temperature, humidity, wind, and rainfall data",
                "Built comprehensive platform featuring 9 interactive pages with Leaflet.js mapping, community alert system, Chart.js analytics dashboard",
                "Implemented persistent model storage with joblib, responsive web interface, and automated prediction pipeline"
            ],
            technologies: ["Python", "scikit-learn", "XGBoost", "Flask", "Leaflet.js", "Chart.js", "joblib"],
            githubLink: "https://github.com/Adithya87/forest-fire-detection"
        },
        project4: {
            title: "Leaf Disease Detection using Deep Learning",
            description: "A CNN-based classification system using TensorFlow/Keras achieving 88-96% accuracy across 33 plant disease categories.",
            features: [
                "Developed CNN-based classification system using TensorFlow/Keras achieving 88-96% accuracy across 33 plant disease categories",
                "Implemented transfer learning with pre-trained VGG16 architecture on 3,300+ augmented leaf images from Kaggle dataset",
                "Built comprehensive evaluation framework with real-time prediction visualization and automated performance tracking",
                "Applied data augmentation techniques to enhance model robustness and generalization capabilities"
            ],
            technologies: ["Python", "TensorFlow", "Keras", "VGG16", "Transfer Learning", "Computer Vision", "NumPy", "Matplotlib"],
            githubLink: "https://github.com/Adithya87/leaf_disease_detection"
        },
        project5: {
            title: "Habitat Sustainability Analysis: Climate-Driven Species Vulnerability Assessment",
            description: "A multi-factor vulnerability assessment framework analyzing 10 endangered species using Python data science stack with 84 WorldClim climate datasets and 1.46GB GBIF occurrence data.",
            features: [
                "Engineered multi-factor vulnerability assessment framework analyzing 10 endangered species using Python data science stack with 84 WorldClim climate datasets and 1.46GB GBIF occurrence data",
                "Developed quantitative risk classification system with statistical modeling identifying 4 critical species requiring $15-30M conservation investment",
                "Built comprehensive Jupyter Notebook analysis pipeline with 25+ executable cells generating 15+ interactive visualizations",
                "Designed actionable implementation roadmap with resource allocation strategy, phased timeline, monitoring protocols, and detailed conservation action plans"
            ],
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Rasterio", "GeoPandas", "Statistical Modeling", "Geospatial Analysis", "Jupyter Notebook"],
            githubLink: "https://github.com/Adithya87/habitat-sustainability-analysis"
        }
    };

    // Make functions globally available
    window.openModal = function(projectId) {
        const modal = document.getElementById('projectModal');
        const modalContent = document.getElementById('modalContent');
        const project = projectDetails[projectId];

        if (!modal || !modalContent || !project) {
            console.error('Modal elements or project data not found');
            return;
        }

        modalContent.innerHTML = `
            <h2>${project.title}</h2>
            <p style="margin-bottom: 2rem; color: #4b5563; line-height: 1.7; font-size: 1.1rem;">${project.description}</p>
            
            <h3 style="margin-bottom: 1rem; color: #1f2937;">🚀 Key Features</h3>
            <ul style="margin-bottom: 2rem; color: #374151;">
                ${project.features.map(feature => `<li style="margin-bottom: 1rem; padding-left: 2rem; position: relative; line-height: 1.6;">${feature}</li>`).join('')}
            </ul>
            
            <h3 style="margin-bottom: 1rem; color: #1f2937;">🛠️ Technologies Used</h3>
            <div class="modal-tech-grid">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <div class="project-links">
                ${project.liveLink ? `
                <a href="${project.liveLink}" target="_blank" class="project-link">
                    <span class="link-text">🌐 View Live Demo</span>
                    <i class="fas fa-external-link-alt link-icon"></i>
                </a>
                ` : ''}
                ${project.githubLink ? `
                <a href="${project.githubLink}" target="_blank" class="project-link">
                    <span class="link-text">📂 View on GitHub</span>
                    <i class="fab fa-github link-icon"></i>
                </a>
                ` : ''}
            </div>
        `;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Add entrance animation
        setTimeout(() => {
            modalContent.style.transform = 'scale(1) translateY(0)';
            modalContent.style.opacity = '1';
        }, 50);
    };

    window.closeModal = function() {
        const modal = document.getElementById('projectModal');
        const modalContent = document.getElementById('modalContent');
        
        if (!modal || !modalContent) {
            console.error('Modal elements not found');
            return;
        }
        
        // Add exit animation
        modalContent.style.transform = 'scale(0.95) translateY(20px)';
        modalContent.style.opacity = '0';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable background scrolling
        }, 300);
    };

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('projectModal');
        if (e.target === modal) {
            window.closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('projectModal');
            if (modal && modal.style.display === 'block') {
                window.closeModal();
            }
        }
    });

    console.log('Project modals initialized successfully!');
}

// Initialize all enhancements when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    enhanceContactForm();
    addProgressIndicator();
    enhanceSkillsSection();
    darkenFooter();
    enhanceAboutSection();
    initProjectModals();
    
    console.log('Portfolio enhancements loaded successfully!');
});
