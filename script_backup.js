document.addEventListener('DOMContentLoaded', () => {
    // Project Data with extracted metadata
    const projects = [
        {
            title: "University Web Portal",
            description: "A comprehensive student dashboard providing access to schedules, grades, financial statements, and profile updates. Features secure login validation, dynamic calendar, and PDF generation for statements. Built as a Single-Page Application (SPA) without heavy frameworks.",
            techStack: ["HTML5", "Vanilla JS", "Tailwind CSS", "Node.js", "jsPDF"],
            images: [
                "Projects/University Web Portal/Home.jpg",
                "Projects/University Web Portal/Login.jpg",
                "Projects/University Web Portal/Profile.jpg",
                "Projects/University Web Portal/Grades.jpg",
                "Projects/University Web Portal/Start game.jpg",
                "Projects/University Web Portal/Accounts.jpg",
                "Projects/University Web Portal/Advisement.jpg",
                "Projects/University Web Portal/Credited Subjects.jpg",
                "Projects/University Web Portal/Messages.jpg",
                "Projects/University Web Portal/Offerings.jpg",
                "Projects/University Web Portal/Subjects.jpg"
            ]
        },
        {
            title: "BINI Music Streaming",
            description: "A mobile music streaming app dedicated to BINI, featuring Spotify-like controls, background playback, and cloud integration. Uses Firebase for backend and ExoPlayer for high-quality audio streaming.",
            techStack: ["Kotlin", "Firebase Firestore", "Firebase Auth", "ExoPlayer", "Glide", "MVVM"],
            images: [
                "Projects/BINI Music Streaming/Homepage_A.jpg",
                "Projects/BINI Music Streaming/Homepage_B.jpg",
                "Projects/BINI Music Streaming/Homepage_C.jpg",
                "Projects/BINI Music Streaming/Now Playing.jpg",
                "Projects/BINI Music Streaming/Login.jpg",
                "Projects/BINI Music Streaming/Create Account.jpg",
                "Projects/BINI Music Streaming/Songs List.jpg",
                "Projects/BINI Music Streaming/Trending and Mostly Played.jpg",
                "Projects/BINI Music Streaming/Recent Favorites and New Releases.jpg",
                "Projects/BINI Music Streaming/Classic and All Time Hit.jpg"
            ]
        },
        {
            title: "ARDUINO-PROJECTS",
            description: "A collection of 10+ hardware-software integration projects including Obstacle Avoiding Robots, RFID Door Locks, Fire Alarms, and Water Level Monitors. Demonstrates strong skills in C++ for embedded systems and circuit design.",
            techStack: ["Arduino", "C++", "Sensors", "Servos", "LCD I2C", "Circuit Design"],
            images: [
                "Projects/ARDUINO-PROJECTS/Schematic Diagram for Distance Measurement.jpg",
                "Projects/ARDUINO-PROJECTS/Schematic Diagram for 2WD Obstacle Avoidiing Robot.jpg",
                "Projects/ARDUINO-PROJECTS/Schematic Diagram for RFID Door Locked System.gif",
                "Projects/ARDUINO-PROJECTS/Schematic Diagram for Fire and Gas Alarm System.jpg",
                "Projects/ARDUINO-PROJECTS/Schematic Diagram for Bluetooth_Controlled_Obstacle_Avoiding_Car.png",
                "Projects/ARDUINO-PROJECTS/Schematic Diagram for Arduino-Based Calculator .jpg",
                "Projects/ARDUINO-PROJECTS/Schematic Diagram for GSM_Module_Sim800l_with_Button.jpg",
                "Projects/ARDUINO-PROJECTS/Schematic Diagram for Water Level Indicator.jpg"
            ]
        },
        {
            title: "Expense Tracking System",
            description: "A robust backend system for financial management featuring JWT authentication, role-based access control, and budget approval workflows. Handles receipt uploads and generates liquidation reports.",
            techStack: ["Spring Boot", "Java 17", "PostgreSQL", "JWT", "Hibernate", "Spring Security"],
            images: [
                "Projects/Expense Tracking System/homepage.png",
                "Projects/Expense Tracking System/login page.png",
                "Projects/Expense Tracking System/expense image.png",
                "Projects/Expense Tracking System/budget requests.png",
                "Projects/Expense Tracking System/liquidation details.png",
                "Projects/Expense Tracking System/budget details.png",
                "Projects/Expense Tracking System/profile.png"
            ]
        },
        {
            title: "Brick Breaker CpE",
            description: "An educational twist on the classic arcade game where players break bricks representing computer engineering subjects to 'graduate'. Features curriculum-based levels and unit tracking.",
            techStack: ["React Native", "Expo", "Skia Graphics", "Reanimated"],
            images: [
                "Projects/Brick Breaker CpE/Game Completed Screen.jpg",
                "Projects/Brick Breaker CpE/Homepage.jpg",
                "Projects/Brick Breaker CpE/Play Menu Screen.jpg",
                "Projects/Brick Breaker CpE/Level Up.jpg",
                "Projects/Brick Breaker CpE/How to Play Screen.jpg",
                "Projects/Brick Breaker CpE/Credited Subjects Screen.jpg"
            ]
        },
        {
            title: "TicTac Toe",
            description: "A real-time multiplayer Tic-Tac-Toe game for Android. Features offline pass-and-play and online matchmaking using room codes. Syncs game state instantly via Firestore.",
            techStack: ["Kotlin", "Firebase Firestore", "Android XML", "MVVM"],
            images: [
                "Projects/TicTac Toe/Homepage.jpg",
                "Projects/TicTac Toe/Start game.jpg",
                "Projects/TicTac Toe/Create Game Online.jpg",
                "Projects/TicTac Toe/Join Game Online.jpg",
                "Projects/TicTac Toe/X Turn.jpg",
                "Projects/TicTac Toe/O Turn.jpg"
            ]
        }
    ];

    // Typing Effect
    const textElement = document.querySelector('.typing-text');
    const texts = ['Computer Engineering Student', 'Aspiring Developer', 'Tech Enthusiast'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
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
    })();

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Modal Logic
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTags = document.getElementById('modal-tags');
    const modalStack = document.getElementById('modal-stack');

    let currentProjectIndex = 0;
    let currentImageIndex = 0;

    // Open Modal
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            currentProjectIndex = index;
            currentImageIndex = 0;
            updateModalContent();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Disable scroll
        });
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scroll
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Change Image
    window.changeImage = (direction) => {
        const project = projects[currentProjectIndex];
        currentImageIndex += direction;

        if (currentImageIndex >= project.images.length) {
            currentImageIndex = 0;
        } else if (currentImageIndex < 0) {
            currentImageIndex = project.images.length - 1;
        }

        modalImage.style.opacity = '0';
        setTimeout(() => {
            modalImage.src = project.images[currentImageIndex];
            modalImage.style.opacity = '1';
        }, 200);
    };

    function updateModalContent() {
        const project = projects[currentProjectIndex];
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalImage.src = project.images[0];

        // Update Stack
        modalStack.textContent = project.techStack.join(', ');

        // Update Tags
        modalTags.innerHTML = '';
        project.techStack.forEach(tech => {
            const span = document.createElement('span');
            span.textContent = tech;
            modalTags.appendChild(span);
        });
    }
});
