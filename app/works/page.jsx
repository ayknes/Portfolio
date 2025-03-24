"use client"

import { useState } from 'react';

const Works = () => {
    // State to manage modal visibility and selected project
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const worksdata = [
        {
            "image": "./img/tableau.png",
            "name": "Football Transfer Analytics",
            "date": "2023",
            "category": "Web Development & Data Analysis",
            "technologies": ["Python", "Pandas", "Tableau", "Geopy", "SQL", "BeautifulSoup"],
            "description": "A comprehensive football analytics platform focused on transfer market analysis across Europe's top seven leagues (Premier League, La Liga, Ligue 1, Bundesliga, Serie A, Liga Portugal, and Eredivisie). The project combines data mining, geospatial analysis, and interactive visualizations to provide insights into transfer patterns, club spending, and player movement.",
            "features": [
                "Interactive flow map visualization of club transfers by year",
                "League spending analysis dashboard with top spenders and sellers",
                "Featured top transfer players showcase",
                "Geospatial mapping of club locations and transfer movements",
                "Club name standardization and data validation",
                "Multi-league transfer pattern analysis"
            ],
            "process": [
                "Data Mining: Utilized existing repository for transfer data and scraped club locations from Wikipedia",
                "Data Cleaning: Removed duplicate transfers, standardized club names, and handled missing location data",
                "Data Preparation: Merged tables and added geospatial coordinates using Geopy library",
                "Visualization: Created interactive Tableau dashboards showing transfer flows and financial analytics"
            ],
            "github": "https://github.com/username/football-analytics",
            "starred": false
        },
        {
            "image": "./img/eeg.png",
            "name": "Neural Interaction Helmet",
            "date": "2024",
            "category": "Machine Learning & BCI",
            "technologies": ["Python", "MNE", "OpenBCI", "BitBrain", "TensorFlow", "NeuroDSP", "VGG16", "ResNet50"],
            "description": "A brain-computer interface (BCI) system that detects and classifies hand movements (left vs right) based on EEG signals. The project uses a BitBrain Hero headset with 10 electrodes to record neural activity, processes the signals using advanced filtering techniques, and classifies them using deep learning models.",
            "features": [
                "EEG signal acquisition using BitBrain Hero headset",
                "Signal preprocessing with ICA-based artifact removal",
                "Neural activity visualization with topographic brain mapping",
                "Hand movement detection with 60% classification accuracy",
                "Multiple deep learning models (VGG16, ResNet50) comparison",
                "Interactive user interface for real-time movement feedback"
            ],
            "process": [
                "Data acquisition from 29 participants following specific motor movement protocols",
                "Signal preprocessing and filtering (7-30 Hz bandpass)",
                "Artifact detection and removal using Independent Component Analysis",
                "Feature extraction and rhythmicity analysis across the scalp",
                "Neural network training and evaluation",
                "Interactive application development for real-time testing"
            ],
            "starred": false
        },
        {
            "image": "./img/eye_tracking.png",
            "name": "Cognitive Bias EyeTracking",
            "date": "2023",
            "category": "UX Research",
            "technologies": ["TOBII Pro", "Blender", "HTML", "CSS", "JavaScript", "Adobe Premiere Pro", "MySQL"],
            "description": "A comprehensive eye tracking research project analyzing how cognitive biases influence visual attention patterns. Through a series of controlled experiments with both desktop and wearable eye tracking technology, the project demonstrates how factors like contrast, color, positioning, and visual hierarchy predictably guide user attention, with applications in marketing, UX design, and public education.",
            "features": [
              "Multi-platform eye tracking analysis (desktop & mobile)",
              "Contrast and color influence measurement",
              "Visual attention heatmap generation",
              "Interactive experiment interfaces",
              "Real-time gaze pattern visualization",
              "Visual behavior prediction algorithms"
            ],
            "github": "https://github.com/username/eye-tracking",
            "starred": false
          },
          {
            "image": "./img/vr pizzeria.png",
            "name": "Pizza Tiger VR",
            "date": "2023",
            "category": "Virtual Reality",
            "technologies": ["Unity", "C#", "Blender", "WebXR", "Animation"],
            "description": "An immersive VR pizza-making experience featuring an animated tiger mascot created from scratch. Players enter a virtual pizzeria where they can combine ingredients to create custom pizzas while interacting with the environment and the automated tiger character that guides them through the experience.",
            "features": [
              "Custom 3D tiger mascot modeled and rigged in Blender",
              "Interactive ingredient combining system",
              "Fully realized pizzeria environment",
              "Automated mascot behavior and guidance",
              "Cross-platform VR compatibility",
              "Progressive Web App support"
            ],
            "starred": false
          },
          {
            "image": "./img/pro04.png",
            "name": "Interactive AR Mascot",
            "date": "2023",
            "category": "Augmented Reality",
            "technologies": ["Unity", "C#", "ARCore/ARKit", "Animation", "Surface Detection"],
            "description": "A mobile augmented reality application that brings a digital mascot to life in the real world through your phone's camera. The app uses advanced surface detection to place the character in your environment, allowing for natural interactions and displaying various animations based on user input.",
            "features": [
              "Real-time surface detection and tracking",
              "Interactive 3D mascot with multiple animation states",
              "Touch-based interaction with the character",
              "Realistic placement in physical environments",
              "Responsive animation system",
              "Cross-platform AR compatibility"
            ],
            "starred": false
          },
          {
            "image": "./img/pro05.png",
            "name": "Ludotheque Game Library",
            "date": "2022",
            "category": "Web Development",
            "technologies": ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "phpMyAdmin"],
            "description": "My first web development project - a comprehensive board game library website that showcases available games with detailed information. The site features a database-driven catalog system managed through phpMyAdmin, allowing users to browse, search, and discover games available in the collection.",
            "features": [
              "Complete game catalog with details and images",
              "Search and filtering functionality",
              "Responsive design for mobile and desktop",
              "Database-driven content management",
              "User-friendly navigation system",
              "Admin panel for game inventory management"
            ],
            "starred": false
          },
          {
            "image": "./img/pro06.png",
            "name": "NutriMeal Explorer",
            "date": "2023",
            "category": "Mobile Development",
            "technologies": ["Dart", "Flutter", "REST API", "JSON"],
            "description": "A cross-platform mobile application built with Dart that connects to free recipe APIs to provide users with a personalized meal discovery experience. The app allows users to search, browse, and save recipes while adapting search results to accommodate various dietary restrictions and preferences.",
            "features": [
              "Comprehensive recipe search with filtering options",
              "Detailed ingredient lists and nutritional information",
              "Diet-specific filtering (vegetarian, vegan, gluten-free, etc.)",
              "Recipe bookmarking and saving functionality",
              "Intuitive user interface for seamless browsing",
              "Offline access to saved recipes"
            ],
            "starred": false
          },
          {
            "image": "./img/pro06.png",
            "name": "MultiAPI Telegram Bot",
            "date": "2023",
            "category": "Backend Development",
            "technologies": ["Java", "Telegram Bot API", "REST APIs", "JSON"],
            "description": "A versatile Telegram bot developed in Java that connects to multiple external APIs to provide users with real-time information and recommendations. The bot can fetch weather forecasts, suggest movies, and access various other data sources through simple chat commands.",
            "features": [
              "Real-time weather information for any location",
              "Personalized movie recommendations and details",
              "Multi-API integration in a single conversational interface",
              "Command-based interaction system",
              "Instant responses with formatted data presentation",
              "Extensible architecture for adding new API services"
            ],
            "starred": false
          },
          {
            "image": "./img/express.png",
            "name": "Beauty Store Admin Dashboard",
            "date": "2024",
            "category": "Backend Development",
            "technologies": ["Express.js", "Node.js", "SQL", "PDF Generation", "Data Export"],
            "description": "A comprehensive admin dashboard for a beauty store, enabling management of customer orders, product recipes, and customer tiers. This backend system provides powerful tools for tracking order modifications, generating detailed receipts, and analyzing customer data to improve business operations.",
            "features": [
              "Order management and tracking system",
              "Customer tier classification and management",
              "Multi-format report generation (PDF, CSV, Excel)",
              "Order modification history and audit trail",
              "Product recipe database and management",
              "Customer analytics and segmentation tools"
            ],
            "starred": false
          },
        {
            "image": "./img/semsarai.png",
            "name": "Semsarai",
            "date": "2025",
            "category": "Web Development",
            "technologies": ["Vue.js", "GraphQL", "AWS"],
            "description": "A semantic search engine for academic research papers with advanced filtering capabilities.",
            "features": [
                "Natural language search queries",
                "Citation network visualization",
                "Paper recommendation system",
                "Research topic clustering"
            ],
            "starred": false
        },
        {
            "image": "./img/pro06.png",
            "name": "Bot Spotify",
            "date": "2025",
            "category": "Backend Development",
            "technologies": ["Python", "Spotify API", "Docker"],
            "description": "A Spotify bot that generates personalized playlists based on listening habits and preferences.",
            "features": [
                "Automated playlist generation",
                "Music mood and genre analysis",
                "Collaborative filtering for recommendations",
                "Scheduled playlist updates"
            ],
            "starred": false
        },
        {
            "image": "./img/vehicle detection.png",
            "name": "Oversized Vehicle Detection System",
            "date": "2024",
            "category": "Computer Vision & AI",
            "technologies": ["Python", "PyTorch", "ResNet-50", "YOLOv5", "YOLO-Tiny", "SSD MobileNet", "OpenCV", "Non-Maximum Suppression"],
            "description": "Advanced AI-based vehicle monitoring system that detects oversized vehicles (>2.6m height) approaching tunnels to prevent infrastructure damage. The project implements multiple deep learning models (ResNet-50, YOLOv5, YOLO-Tiny, SSD MobileNet) with geometric perspective projection for height detection, achieving an F1-score of 0.92 in vehicle classification at 13 FPS on 640×480 resolution video.",
            "features": [
              "Multi-model comparative analysis with threshold optimization (ResNet-50 at 0.8 threshold optimal)",
              "Geometric perspective projection for precise height measurement",
              "Detection performance evaluation with precision/recall metrics across different conditions",
              "Signal triggering system with time-based lissage to prevent flickering",
              "Vehicle counting using center-point tracking across detection lines",
              "Speed estimation through temporal vehicle position analysis",
              "Non-Maximum Suppression for reducing multiple detections"
            ],
            "starred": false
          },
          {
            "image": "./img/pro06.png",
            "name": "URSSAF UX Redesign",
            "date": "2024",
            "category": "UX/UI Design",
            "technologies": ["Figma", "Figma Libraries", "UI Components", "User Research", "UX Principles", "Prototyping"],
            "description": "A comprehensive redesign of the URSSAF platform based on thorough user research and HCI standards. The project involved creating interactive prototypes, conducting user surveys, and implementing standardized component libraries to improve accessibility and overall user experience.",
            "features": [
              "Interactive high-fidelity prototypes in Figma",
              "User research and usability surveys",
              "Component library implementation following HCI standards",
              "Accessibility-focused design system",
              "Task flow optimization for common user journeys",
              "Responsive layouts for all device types",
              "Visual design aligned with URSSAF brand guidelines"
            ],
            "starred": false
          }
    ];

    // Sort works: first by starred (false first), then by date (most recent first)
    const sortedWorks = [...worksdata].sort((a, b) => {
        // First sort by starred status
        if (a.starred && !b.starred) return -1;
        if (!a.starred && b.starred) return 1;
        
        // Then sort by date (most recent first)
        return parseInt(b.date) - parseInt(a.date);
    });

    // Function to format technologies for display
    const formatTechnologies = (technologies) => {
        if (technologies.length <= 2) {
            return technologies.join(', ');
        } else {
            return `${technologies[0]}, ${technologies[1]} +${technologies.length - 2}`;
        }
    };

    // Function to open modal with project details
    const openProjectDetails = (project) => {
        setSelectedProject(project);
        setIsModalOpen(false);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        // Optional: add a small delay before clearing the selected project
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <div className='w-full z-20 h-full flex justify-center items-center'>
            <div className="w-11/12 gap-4 h-full pt-20 pb-8 flex flex-col justify-center items-center">
                <div className="w-full">
                    <h3 className="font-bold text-center text-2xl">Works & Projects</h3>
                </div>
                <div className="w-full grid gap-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {sortedWorks.map((work, index) => {
                        return (
                            <div 
                                key={index} 
                                className="glass2 w-full border border-gray-600/[0.5] p-3 rounded-xl cursor-pointer hover:shadow-lg transition-all duration-300"
                                onClick={() => openProjectDetails(work)}
                            >
                                <div className="w-full h-52 rounded-xl overflow-hidden relative">
                                    <img src={work.image} alt={work.name} className="w-full h-full object-cover" />
                                    {work.starred && (
                                        <div className="absolute top-2 right-2 text-yellow-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div className="w-full flex py-2 items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                            <h3 className="font-bold text-xl">{work.name}</h3>
                                            {work.starred && (
                                                <span className="ml-2 text-yellow-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-400">{work.category}</p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {formatTechnologies(work.technologies)}
                                        </p>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-right">{work.date}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal/Popup for project details */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
                    <div 
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                        onClick={e => e.stopPropagation()} // Prevent clicks inside from closing
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center">
                                <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
                                {selectedProject.starred && (
                                    <span className="ml-2 text-yellow-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </span>
                                )}
                            </div>
                            <button 
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="mb-6 rounded-xl overflow-hidden">
                            <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-auto" />
                        </div>
                        
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Description</h3>
                            <p className="text-gray-700 dark:text-gray-300">{selectedProject.description}</p>
                        </div>
                        
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Features</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                {selectedProject.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="flex flex-wrap justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-gray-500 dark:text-gray-400">
                                {selectedProject.category} • {selectedProject.date}
                            </div>
                            {selectedProject.github && (
                                <a 
                                    href={selectedProject.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                    View on GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Works;