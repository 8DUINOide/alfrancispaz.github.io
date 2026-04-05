document.addEventListener('DOMContentLoaded', () => {
    // Project galleries data structure
    const projectGalleries = {
        'University Web Portal': [
            'Projects/University Web Portal/Login.jpg',
            'Projects/University Web Portal/Home.jpg',
            'Projects/University Web Portal/Messages.jpg',
            'Projects/University Web Portal/Profile.jpg',
            'Projects/University Web Portal/Accounts.jpg',
            'Projects/University Web Portal/Subjects.jpg',
            'Projects/University Web Portal/Credited Subjects.jpg',
            'Projects/University Web Portal/Grades.jpg',
            'Projects/University Web Portal/Advisement.jpg',
            'Projects/University Web Portal/Offerings.jpg'
        ],
        'BINI Music Streaming': [
            'Projects/BINI Music Streaming/Login.jpg',
            'Projects/BINI Music Streaming/Create Account.jpg',
            'Projects/BINI Music Streaming/Homepage_A.jpg',
            'Projects/BINI Music Streaming/Homepage_B.jpg',
            'Projects/BINI Music Streaming/Homepage_C.jpg',
            'Projects/BINI Music Streaming/Recent Favorites and New Releases.jpg',
            'Projects/BINI Music Streaming/Trending and Mostly Played.jpg',
            'Projects/BINI Music Streaming/Classic and All Time Hit.jpg',
            'Projects/BINI Music Streaming/Songs List.jpg',
            'Projects/BINI Music Streaming/Now Playing.jpg'
        ],
        'Arduino Projects': [
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/TinkerCad Projects.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/Calculator using 4x4 Keypad and LCD Display i2c.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/Distance Measurement.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/Fire Alarm System.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/IR Remote Controlled LED.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/LCD Display.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/Obstacle Avoiding Car.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/Password Protected Security System.png',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for 1 segment LED Display.png',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for 2WD Obstacle Avoidiing Robot.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for 4 segment LED Display.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for 8x8 LED Matrix.png',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for Arduino-Based Calculator .jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for Bluetooth_Controlled_Obstacle_Avoiding_Car.png',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for Distance Measurement.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for Fire and Gas Alarm System.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for GSM_Module_Sim800l_with_Button.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for Joystick with DC Motor.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for LCD Display.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for RFID Door Locked System.gif',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for Water Level Indicator.jpg'
        ],
        'Expense Tracking System': [
            'Projects/Expense Tracking System/login page.png',
            'Projects/Expense Tracking System/reset password.png',
            'Projects/Expense Tracking System/homepage.png',
            'Projects/Expense Tracking System/homepage with sidebar.png',
            'Projects/Expense Tracking System/users with sidebar.png',
            'Projects/Expense Tracking System/add user.png',
            'Projects/Expense Tracking System/user reset password.png',
            'Projects/Expense Tracking System/budget requests with sidebar.png',
            'Projects/Expense Tracking System/budget requests.png',
            'Projects/Expense Tracking System/budget details.png',
            'Projects/Expense Tracking System/expenses with sidebar.png',
            'Projects/Expense Tracking System/expense image.png',
            'Projects/Expense Tracking System/liquidations with sidebar.png',
            'Projects/Expense Tracking System/liquidation details.png',
            'Projects/Expense Tracking System/profile with sidebar.png',
            'Projects/Expense Tracking System/profile.png',
            'Projects/Expense Tracking System/logout.png'
        ],
        'Brick Breaker CpE': [
            'Projects/Brick Breaker CpE/Welcome Screen.jpg',
            'Projects/Brick Breaker CpE/How to Play Screen.jpg',
            'Projects/Brick Breaker CpE/Default Play Menu Screen.jpg',
            'Projects/Brick Breaker CpE/Try Again.jpg',
            'Projects/Brick Breaker CpE/Level Up.jpg',
            'Projects/Brick Breaker CpE/Play Menu Screen.jpg',
            'Projects/Brick Breaker CpE/Game Completed Screen.jpg',
            'Projects/Brick Breaker CpE/Credited Subjects Screen.jpg',
        ],
        'TicTac Toe': [
            'Projects/TicTac Toe/Homepage.jpg',
            'Projects/TicTac Toe/Create Game Online.jpg',
            'Projects/TicTac Toe/Join Game Online.jpg',
            'Projects/TicTac Toe/Start game.jpg',
            'Projects/TicTac Toe/O Turn.jpg'
        ],
        'Internship Experience': [
            'Internships/Deployment.jpg',
            'Internships/ADNU OJT.jpg',
            'Internships/Day 1.jpg',
            'Internships/Reporting.jpg'
        ],
        'Field Trip Experience': [
            'Seminars and Fieldtrips/BRP Hydrographer Presbitero.jpg',
            'Seminars and Fieldtrips/Vessel Traffic Management System.jpg',
            'Seminars and Fieldtrips/GigaMare.jpg',
            'Seminars and Fieldtrips/wistron.jpg',
            'Seminars and Fieldtrips/Law Enforcement Department.jpg',
            'Seminars and Fieldtrips/PLDT & Smart.jpg'
        ]
    };

    // Event galleries data structure
    const eventGalleries = {
        'Breadboarding': [
            'Events/Breadboarding/1st year/1.jpg',
            'Events/Breadboarding/1st year/2.jpg',
            'Events/Breadboarding/1st year/3.jpg',
            'Events/Breadboarding/1st year/4.jpg',
            'Events/Breadboarding/1st year/5.jpg',
            'Events/Breadboarding/2nd year/1.jpg',
            'Events/Breadboarding/2nd year/2.jpg',
            'Events/Breadboarding/2nd year/3.jpg',
            'Events/Breadboarding/2nd year/4.jpg',
            'Events/Breadboarding/2nd year/5.jpg',
            'Events/Breadboarding/2nd year/6.jpg',
            'Events/Breadboarding/3rd year/1.jpg',
            'Events/Breadboarding/3rd year/2.jpg',
            'Events/Breadboarding/3rd year/3.jpg',
            'Events/Breadboarding/3rd year/4.jpg',
            'Events/Breadboarding/4th year/1.jpg',
            'Events/Breadboarding/4th year/2.jpg',
            'Events/Breadboarding/4th year/3.jpg',
            'Events/Breadboarding/4th year/4.jpg'
        ],
        'LAAD Software Festival': [
            'Events/LAAD Software Festival/1.jpg',
            'Events/LAAD Software Festival/2.jpg',
            'Events/LAAD Software Festival/3.jpg',
            'Events/LAAD Software Festival/4.jpg',
            'Events/LAAD Software Festival/5.jpg',
            'Events/LAAD Software Festival/6.jpg',
            'Events/LAAD Software Festival/7.jpg',
            'Events/LAAD Software Festival/8.jpg',
            'Events/LAAD Software Festival/9.jpg',
            'Events/LAAD Software Festival/10.jpg'
        ],
        'Packethacks 2024': [
            'Events/Packethacks 2024/1.jpg',
            'Events/Packethacks 2024/2.jpg',
            'Events/Packethacks 2024/3.jpg',
            'Events/Packethacks 2024/4.jpg',
            'Events/Packethacks 2024/5.jpg',
            'Events/Packethacks 2024/6.jpg',
            'Events/Packethacks 2024/7.jpg'
        ]
    };

    let currentGallery = [];
    let currentImageIndex = 0;
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Typing Effect
    const textElement = document.querySelector('.typing-text');
    const texts = ['Computer Engineering Student', 'Aspiring Developer', 'Tech Enthusiast'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        textElement.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Pause at end of word
        } else {
            setTimeout(type, 100);
        }
    }

    // Start typing effect if element exists
    if (textElement) {
        type();
    }

    // Enhanced Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');

    // Open project gallery function
    window.openProjectGallery = (projectName) => {
        const gallery = projectGalleries[projectName];
        if (gallery && gallery.length > 0) {
            currentGallery = gallery;
            currentImageIndex = 0;
            
            // Preload the first image before showing lightbox
            const img = new Image();
            img.onload = () => {
                updateLightboxImage();
                lightbox.style.display = 'block';
                // Trigger fade-in animation
                setTimeout(() => {
                    lightbox.classList.add('active');
                }, 10);
                document.body.style.overflow = 'hidden';
            };
            img.src = gallery[0];
        }
    };

    // Open event gallery function
    window.openEventGallery = (eventName) => {
        const gallery = eventGalleries[eventName];
        if (gallery && gallery.length > 0) {
            currentGallery = gallery;
            currentImageIndex = 0;
            
            // Preload the first image before showing lightbox
            const img = new Image();
            img.onload = () => {
                updateLightboxImage();
                lightbox.style.display = 'block';
                // Trigger fade-in animation
                setTimeout(() => {
                    lightbox.classList.add('active');
                }, 10);
                document.body.style.overflow = 'hidden';
            };
            img.src = gallery[0];
        }
    };

    // Update lightbox image and navigation
    function updateLightboxImage() {
        if (currentGallery.length > 0) {
            lightboxImg.src = currentGallery[currentImageIndex];
            
            // Add filename caption only for non-event galleries
            const isEventImage = currentGallery[currentImageIndex].includes('Events/');
            if (!isEventImage) {
                const filename = currentGallery[currentImageIndex].split('/').pop().split('.')[0].toUpperCase();
                let caption = lightbox.querySelector('.image-caption');
                if (!caption) {
                    caption = document.createElement('div');
                    caption.className = 'image-caption';
                    lightbox.appendChild(caption);
                }
                caption.textContent = filename;
            } else {
                // Remove caption if it exists for event images
                const existingCaption = lightbox.querySelector('.image-caption');
                if (existingCaption) {
                    existingCaption.remove();
                }
            }
            
            updateGalleryNavigation();
        }
    }

    // Update gallery navigation buttons and counter
    function updateGalleryNavigation() {
        // Remove existing navigation if any
        const existingNav = lightbox.querySelector('.gallery-navigation');
        if (existingNav) {
            existingNav.remove();
        }

        if (currentGallery.length > 1) {
            // Create navigation container
            const navDiv = document.createElement('div');
            navDiv.className = 'gallery-navigation';
            
            // Previous button
            const prevBtn = document.createElement('button');
            prevBtn.className = 'gallery-nav-btn prev-btn';
            prevBtn.innerHTML = '‹';
            prevBtn.onclick = (e) => {
                e.stopPropagation();
                navigateGallery(-1);
            };
            
            // Image counter
            const counter = document.createElement('div');
            counter.className = 'gallery-counter';
            counter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;
            
            // Next button
            const nextBtn = document.createElement('button');
            nextBtn.className = 'gallery-nav-btn next-btn';
            nextBtn.innerHTML = '›';
            nextBtn.onclick = (e) => {
                e.stopPropagation();
                navigateGallery(1);
            };
            
            navDiv.appendChild(prevBtn);
            navDiv.appendChild(counter);
            navDiv.appendChild(nextBtn);
            lightbox.appendChild(navDiv);
        }
    }

    // Navigate through gallery images
    function navigateGallery(direction) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) {
            currentImageIndex = currentGallery.length - 1;
        } else if (currentImageIndex >= currentGallery.length) {
            currentImageIndex = 0;
        }
        updateLightboxImage();
    }

    // Open lightbox function (for single images)
    window.openLightbox = (imageSrc) => {
        currentGallery = [imageSrc];
        currentImageIndex = 0;
        
        // Preload the image before showing lightbox
        const img = new Image();
        img.onload = () => {
            updateLightboxImage();
            lightbox.style.display = 'block';
            // Trigger fade-in animation
            setTimeout(() => {
                lightbox.classList.add('active');
            }, 10);
            document.body.style.overflow = 'hidden';
        };
        img.src = imageSrc;
    };

    // Open certificate lightbox function
    window.openCertificateLightbox = (pdfSrc) => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        
        // Create container with overflow hidden to crop PDF controls
        const container = document.createElement('div');
        container.style.cssText = `
            width: 90%;
            height: 90vh;
            border-radius: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow: hidden;
            background: white;
        `;
        
        // Create PDF viewer iframe - slightly larger to crop controls
        const pdfViewer = document.createElement('iframe');
        pdfViewer.src = pdfSrc;
        pdfViewer.style.cssText = `
            width: calc(100% + 60px);
            height: calc(100% + 60px);
            border: none;
            position: absolute;
            top: -40px;
            left: -30px;
        `;
        
        container.appendChild(pdfViewer);
        lightbox.appendChild(container);
        
        // Hide the main image
        lightboxImg.style.display = 'none';
        
        // Show lightbox
        lightbox.style.display = 'block';
        setTimeout(() => {
            lightbox.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden';
        
        // Update close function to clean up PDF viewer
        const originalCloseLightbox = closeLightboxFunction;
        window.closeLightboxFunction = () => {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
                // Remove PDF container and show image again
                if (container.parentNode) {
                    container.parentNode.removeChild(container);
                }
                lightboxImg.style.display = 'block';
            }, 300);
            
            // Clean up gallery navigation
            const existingNav = lightbox.querySelector('.gallery-navigation');
            if (existingNav) {
                existingNav.remove();
            }
            
            // Clean up image caption
            const existingCaption = lightbox.querySelector('.image-caption');
            if (existingCaption) {
                existingCaption.remove();
            }
            
            // Restore original close function
            window.closeLightboxFunction = originalCloseLightbox;
        };
    };

    // Close lightbox
    function closeLightboxFunction() {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
        
        // Clean up gallery navigation
        const existingNav = lightbox.querySelector('.gallery-navigation');
        if (existingNav) {
            existingNav.remove();
        }
        
        // Clean up image caption
        const existingCaption = lightbox.querySelector('.image-caption');
        if (existingCaption) {
            existingCaption.remove();
        }
        
        currentGallery = [];
        currentImageIndex = 0;
    }

    if (closeLightbox) {
        closeLightbox.addEventListener('click', closeLightboxFunction);
    }

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxFunction();
        }
    });

    // Close lightbox with Escape key and arrow key navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightboxFunction();
            } else if (currentGallery.length > 1) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    navigateGallery(-1);
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    navigateGallery(1);
                }
            }
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Observe project cards
    document.querySelectorAll('.project-card, .timeline-item, .org-item, .seminar-item, .cert-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Add active class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--accent-color) !important;
        }
        .nav-link.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Project card hover effect with tilt
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Add loading animation for images
    document.querySelectorAll('img:not(#lightbox-img)').forEach(img => {
        img.addEventListener('load', function() {
            this.style.animation = 'fadeIn 0.5s ease-in';
        });
    });

    // Add fadeIn animation
    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(fadeStyle);

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Create mailto link with form data
            const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
            const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
            const mailtoLink = `mailto:alfrancisbadillapaz10@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showNotification('Opening your email client...', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Notification function
    function showNotification(message, type = 'info') {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--accent-color)' : 'var(--accent-secondary)'};
            color: var(--bg-color);
            padding: 15px 20px;
            border-radius: 8px;
            font-weight: 500;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            max-width: 300px;
        `;
        
        // Add slide in animation
        const slideStyle = document.createElement('style');
        slideStyle.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(slideStyle);
        
        // Add to page
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Initialize seamless carousels
    function initCarousels() {
        const carousels = document.querySelectorAll('.event-carousel, .internship-gallery');
        
        carousels.forEach(carousel => {
            // Get all images and markers in the carousel
            const items = Array.from(carousel.children);
            
            // Clone items for seamless scrolling
            items.forEach(item => {
                const clone = item.cloneNode(true);
                carousel.appendChild(clone);
            });
            
            // Set up automatic scrolling
            let scrollPosition = 0;
            const scrollSpeed = 1; // pixels per frame
            let scrollInterval;
            
            function scroll() {
                scrollPosition += scrollSpeed;
                
                if (scrollPosition >= carousel.scrollWidth / 2) {
                    scrollPosition = 0;
                    carousel.scrollTo({
                        left: 0,
                        behavior: 'auto'
                    });
                } else {
                    carousel.scrollTo({
                        left: scrollPosition,
                        behavior: 'auto'
                    });
                }
            }
            
            function startScrolling() {
                scrollInterval = setInterval(scroll, 30);
            }
            
            function stopScrolling() {
                if (scrollInterval) {
                    clearInterval(scrollInterval);
                }
            }
            
            // Start scrolling
            startScrolling();
            
            // Pause on hover
            carousel.addEventListener('mouseenter', () => {
                stopScrolling();
            });
            
            // Resume on mouse leave
            carousel.addEventListener('mouseleave', () => {
                scrollPosition = carousel.scrollLeft;
                startScrolling();
            });
        });
    }

    // Add click handlers to event carousel images
    const carouselImages = document.querySelectorAll('.event-carousel-img');
    carouselImages.forEach(img => {
        img.addEventListener('click', function() {
            const src = this.getAttribute('src');
            openLightbox(src);
        });
    });

    // Add click handlers to internship gallery images
    const internshipImages = document.querySelectorAll('.internship-gallery .gallery-img');
    internshipImages.forEach(img => {
        img.addEventListener('click', function() {
            const src = this.getAttribute('src');
            openLightbox(src);
        });
    });

    // Initialize carousels
    initCarousels();

    // Initialize page
    highlightNavigation();
});
