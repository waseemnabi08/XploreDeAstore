// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) { // Check if navbar element exists
        window.addEventListener('scroll', function() {
            if (window.scrollY > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            try {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // If it's a mobile nav link, close the mobile menu
                    const mobileNav = document.getElementById('mobile-nav-links');
                    if (mobileNav && !mobileNav.classList.contains('hidden')) {
                        mobileNav.classList.add('hidden');
                    }
                }
            } catch (error) {
                console.warn(`Smooth scroll target not found or invalid selector: ${targetId}`, error);
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNavLinks = document.getElementById('mobile-nav-links');
    if (mobileMenuButton && mobileNavLinks) {
        mobileMenuButton.addEventListener('click', () => {
            mobileNavLinks.classList.toggle('hidden');
        });
    }


    // Destination details data object
    const destinations = {
        deosai: {
            title: 'Deosai Plains - The Land of Giants',
            description: 'Deosai, meaning "Summer\'s Place" in Balti, transforms into a carpet of millions of wildflowers from July to August. This vast, treeless wilderness is the second highest alpine plateau in the world, offering an almost surreal landscape. It\'s a critical habitat for the Himalayan Brown Bear and numerous other species.',
            details: [
                'Elevation: Approximately 4,114 meters (13,497 ft)',
                'Best Time to Visit: Mid-June to mid-September (road access dependent on snowmelt)',
                'Key Attractions: Sheosar Lake, Bara Pani, Kala Pani, diverse flora and fauna, incredible night skies.',
                'Activities: Wildlife spotting (especially brown bears), photography, camping, trekking, stargazing.',
                'Travel Note: Requires a 4x4 vehicle. Weather can change rapidly; be prepared for cold temperatures even in summer.'
            ],
            highlights: 'Witnessing a Himalayan Brown Bear in its natural habitat or camping under a canopy of stars in the profound silence of Deosai is an experience that stays with you forever. The sheer scale of the plains is humbling.',
            images: [
                'https://placehold.co/600x400/166534/FFFFFF?text=Deosai+Wildflowers',
                'https://placehold.co/600x400/166534/f0fdf4?text=Deosai+Landscape',
                'https://placehold.co/600x400/166534/e0f2f1?text=Himalayan+Brown+Bear+(Illustration)',
                'https://placehold.co/600x400/166534/d1fae5?text=Deosai+River+Crossing'
            ]
        },
        sheosar: {
            title: 'Sheosar Lake - The Blind Lake',
            description: 'Located in the heart of Deosai Plains, Sheosar Lake is a breathtakingly beautiful alpine lake. Its deep blue waters reflect the surrounding snow-capped peaks and vast plains, creating a picture-perfect scene. The name "Sheosar" means "blind lake" in Shina language.',
            details: [
                'Elevation: Approximately 4,142 meters (13,589 ft)',
                'Location: Within Deosai National Park',
                'Features: Crystal-clear waters, surrounded by meadows often blooming with wildflowers, views of distant mountains.',
                'Activities: Photography, picnicking, quiet contemplation, short walks around the lake.',
                'Accessibility: Reached via a jeep track within Deosai.'
            ],
            highlights: 'The tranquility of Sheosar Lake, especially during sunrise or sunset, is magical. On a clear day, the reflection of Nanga Parbat can sometimes be seen in its waters from certain vantage points.',
            images: [
                'https://placehold.co/600x400/065f46/FFFFFF?text=Sheosar+Lake+View+1',
                'https://placehold.co/600x400/065f46/f0fdf4?text=Sheosar+Lake+Reflection',
                'https://placehold.co/600x400/065f46/e0f2f1?text=Wildflowers+near+Sheosar',
                'https://placehold.co/600x400/065f46/d1fae5?text=Panoramic+Sheosar'
            ]
        },
        minimarg: {
            title: 'Minimarg Valley - A Slice of Paradise',
            description: 'Minimarg is an exceptionally beautiful valley, often described as a "piece of Switzerland" in Pakistan. Known for its lush green plains, dense pine forests, crystal-clear streams, and the famous Rainbow Lake. Due to its proximity to the Line of Control (LoC), access is restricted and requires special permits.',
            details: [
                'Elevation: Approximately 2,800 meters (9,186 ft)',
                'Key Attractions: Rainbow Lake, Domel, Burzil Pass (on the way), traditional wooden houses.',
                'Activities: Sightseeing, photography, light trekking (if permitted).',
                'Permit Info: NOC (No Objection Certificate) from the concerned authorities is mandatory for all visitors.',
                'Best Time to Visit: Summer months (June to August).'
            ],
            highlights: 'The vibrant colors of Rainbow Lake, set against the backdrop of lush greenery and towering mountains, make Minimarg a photographer\'s dream. The valley\'s pristine and untouched beauty is its main draw.',
            images: [
                'https://placehold.co/600x400/047857/FFFFFF?text=Minimarg+Rainbow+Lake',
                'https://placehold.co/600x400/047857/f0fdf4?text=Minimarg+Green+Meadows',
                'https://placehold.co/600x400/047857/e0f2f1?text=Minimarg+Pine+Forests',
                'https://placehold.co/600x400/047857/d1fae5?text=Domel+Minimarg'
            ]
        },
        rama: {
            title: 'Rama Valley & Rama Lake',
            description: 'Rama Valley is a stunningly beautiful area characterized by its lush green meadows, thick pine forests, and the tranquil Rama Lake. It serves as a base for trekkers heading towards Nanga Parbat\'s eastern flank and offers magnificent views of the "Killer Mountain."',
            details: [
                'Elevation: Around 3,300 meters (10,826 ft) for Rama Lake',
                'Key Attractions: Rama Lake, PTDC Motel Rama, surrounding pine forests, views of Nanga Parbat.',
                'Activities: Trekking, camping, boating in Rama Lake (seasonal), photography, relaxation.',
                'Accessibility: Accessible by jeep from Astore town. The road can be challenging.',
                'Best Time to Visit: May to October.'
            ],
            highlights: 'Camping by Rama Lake under a starlit sky with the silhouette of Nanga Parbat in the distance is an unforgettable experience. The valley is also rich in biodiversity.',
            images: [
                'https://placehold.co/600x400/059669/FFFFFF?text=Rama+Lake+Serenity',
                'https://placehold.co/600x400/059669/f0fdf4?text=Rama+Meadows',
                'https://placehold.co/600x400/059669/e0f2f1?text=Nanga+Parbat+from+Rama',
                'https://placehold.co/600x400/059669/d1fae5?text=Pine+Forests+in+Rama'
            ]
        },
        tarishing: {
            title: 'Tarishing & Nanga Parbat (Rupal Face)',
            description: 'The village of Tarishing is the gateway to one of the most formidable mountain faces on Earth: the Rupal Face of Nanga Parbat. This sheer wall of rock and ice rises over 4,500 meters (15,000 ft) from the valley floor, creating an awe-inspiring spectacle. The trek to Rupal Base Camp is legendary.',
            details: [
                'Tarishing Village Elevation: Approx. 2,900 meters (9,514 ft)',
                'Rupal Base Camp Elevation: Approx. 3,500 meters (11,482 ft)',
                'Key Attractions: Direct views of Nanga Parbat\'s Rupal Face, traditional village life, challenging treks.',
                'Activities: Trekking (to Rupal Base Camp, Mazeno Pass), mountaineering (for experienced climbers), cultural immersion.',
                'Difficulty: Trek to base camp is moderate to challenging.'
            ],
            highlights: 'Standing at the foot of the Rupal Face is a humbling and powerful experience. The sheer scale and majesty of Nanga Parbat from this side are unparalleled. It\'s a pilgrimage site for serious trekkers and mountaineers.',
            images: [
                'https://placehold.co/600x400/115e59/FFFFFF?text=Rupal+Face+Nanga+Parbat',
                'https://placehold.co/600x400/115e59/f0fdf4?text=Tarishing+Village+View',
                'https://placehold.co/600x400/115e59/e0f2f1?text=Trek+to+Rupal+Base+Camp',
                'https://placehold.co/600x400/115e59/d1fae5?text=Glaciers+near+Tarishing'
            ]
        },
         rattu: {
            title: 'Rattu Valley - Year-Round Charm',
            description: 'Rattu Valley is known for its scenic beauty that changes dramatically with the seasons. In winter, it hosts a ski resort attracting enthusiasts, while in summer, it transforms into a lush green haven perfect for leisurely exploration and enjoying the local culture. It\'s a less crowded gem offering diverse experiences.',
            details: [
                'Elevation: Approximately 2,600 meters (8,530 ft)',
                'Key Attractions: Army Ski Resort (winter), Kalapani, lush summer meadows, traditional villages.',
                'Activities: Skiing & snowboarding (winter), hiking, trout fishing, cultural visits, photography.',
                'Accessibility: Relatively easily accessible from Astore town.',
                'Best Time to Visit: December-February for snow activities; May-September for green landscapes.'
            ],
            highlights: 'The duality of Rattu is its charm – from thrilling ski slopes under a blanket of snow to serene green pastures under the summer sun. The drive to Rattu itself is scenic, passing through charming villages.',
            images: [
                'https://placehold.co/600x400/134e4a/FFFFFF?text=Rattu+Ski+Slopes+(Winter)',
                'https://placehold.co/600x400/134e4a/f0fdf4?text=Rattu+Summer+Meadows',
                'https://placehold.co/600x400/134e4a/e0f2f1?text=Kalapani+Rattu',
                'https://placehold.co/600x400/134e4a/d1fae5?text=Village+Life+in+Rattu'
            ]
        }
    };

    // Modal elements and state
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    let currentImageIndex = 0;
    let currentImages = []; // To store images for the currently open modal

    // Function to open the modal with destination details
    // Make it globally accessible for inline onclick attributes
    window.openModal = function(destinationKey) {
        const dest = destinations[destinationKey];
        if (!dest || !modal || !modalBody) {
            console.error("Destination data, modal, or modal body not found for:", destinationKey);
            return;
        }
        currentImages = dest.images;
        currentImageIndex = 0;

        let imageCarouselSlides = '';
        currentImages.forEach((image, index) => {
            imageCarouselSlides += `
                <div class="carousel-image-item">
                    <img src="${image}" alt="${dest.title} Image ${index + 1}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1f2937/FFFFFF?text=Image+Load+Error';">
                </div>`;
        });

        const aiContentContainerId = `ai-destination-details-${destinationKey}`;

        modalBody.innerHTML = `
            <div class="carousel-container">
                <div class="carousel-slide" style="transform: translateX(0%);">
                    ${imageCarouselSlides}
                </div>
                ${currentImages.length > 1 ? `
                    <button class="carousel-prev" onclick="changeImage(-1)">❮</button>
                    <button class="carousel-next" onclick="changeImage(1)">❯</button>
                ` : ''}
            </div>
            <h2>${dest.title}</h2>
            <p class="description">${dest.description}</p>
            <h3>Key Details</h3>
            <ul>
                ${dest.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
            <h3>Highlights</h3>
            <p class="highlights-paragraph">${dest.highlights}</p>

            <div class="text-center">
                <button class="ai-tell-more-button" id="ai-button-${destinationKey}" onclick="fetchAiDetails('${destinationKey}', this)">
                    ✨ Tell Me More with AI
                </button>
            </div>
            <div id="${aiContentContainerId}" class="ai-details-content" style="display:none;">
                </div>

            <div style="margin-top: 2rem; text-align: center;">
                <a href="mailto:info@xploredeastore.com?subject=Inquiry%20about%20${encodeURIComponent(dest.title)}" class="modal-contact-button">
                    Inquire About This Destination
                </a>
            </div>
        `;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scroll
        updateCarouselTransform();
    }

    // Function to close the modal
    // Make it globally accessible
    window.closeModal = function() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore background scroll
        }
    }

    // Function to change carousel image
    // Make it globally accessible
    window.changeImage = function(direction) {
        currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
        updateCarouselTransform();
    }

    // Function to update carousel transform for sliding effect
    function updateCarouselTransform() {
        if (modalBody) {
            const slideContainer = modalBody.querySelector('.carousel-slide');
            if (slideContainer) {
                slideContainer.style.transform = `translateX(-${currentImageIndex * 100}%)`;
            }
        }
    }

    // Event listener to close modal if clicked outside of modal-content
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
    // Event listener to close modal on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // --- Gemini API Integration ---
    const geminiApiKey = ""; // IMPORTANT: Platform will inject API key. Leave empty.

    // Make fetchAiDetails globally accessible for the onclick attribute
    window.fetchAiDetails = async function(destinationKey, buttonElement) {
        const destinationName = destinations[destinationKey]?.title || "this location";
        const aiContentContainerId = `ai-destination-details-${destinationKey}`;
        const aiContentContainer = document.getElementById(aiContentContainerId);

        if (!aiContentContainer) {
            console.error("AI content container not found for", destinationKey);
            return;
        }

        // Show loading state
        buttonElement.disabled = true;
        buttonElement.innerHTML = '✨ Fetching Insights...';
        aiContentContainer.style.display = 'block';
        aiContentContainer.innerHTML = `<p class="loading-text">Generating fascinating details about ${destinationName}...</p>`;

        const prompt = `Tell me more interesting, unique, and engaging details about ${destinationName}, located in Astore Valley, Gilgit-Baltistan, Pakistan. Include any fascinating local stories, cultural significance, hidden gems or activities nearby that aren't commonly known, or specific tips for visitors that would enhance their experience. Aim for a narrative style that would excite a tourist. Keep the response to 2-3 well-structured paragraphs.`;

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;
        const payload = {
            contents: [{
                role: "user",
                parts: [{ text: prompt }]
            }]
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API Error (${response.status}): ${errorData.error?.message || 'Unknown error'}`);
            }

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                let text = result.candidates[0].content.parts[0].text;
                // Basic formatting: replace newlines with <br> and bold headings if any (simple heuristic)
                text = text.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
                text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold text between **

                aiContentContainer.innerHTML = `<h4>✨ AI Storyteller Unveils...</h4><p>${text}</p>`;
                buttonElement.innerHTML = '✨ Insights Loaded!'; // Indicate completion
                // Optionally hide the button after successful load, or change its function:
                // buttonElement.style.display = 'none'; 
            } else {
                throw new Error("No content received from AI or unexpected response structure.");
            }

        } catch (error) {
            console.error("Error fetching AI details:", error);
            aiContentContainer.innerHTML = `<p class="error-text">Sorry, couldn't fetch AI insights at the moment. Error: ${error.message}</p>`;
            buttonElement.disabled = false;
            buttonElement.innerHTML = '✨ Try AI Insights Again';
        }
    }


    // Weather data update using OpenWeatherMap API
    async function fetchWeather() {
        const openWeatherApiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // IMPORTANT: Replace with your actual API key
        const city = 'Astore';
        const countryCode = 'PK';
        const weatherDisplay = document.getElementById('weather-info-display');

        if (!weatherDisplay) {
            console.error("Weather display element not found.");
            return;
        }
        
        // Check if API key is the placeholder
        if (openWeatherApiKey === 'YOUR_OPENWEATHERMAP_API_KEY' || openWeatherApiKey === '') {
            weatherDisplay.innerHTML = `
                <div class="weather-item col-span-full text-center">
                    <p class="text-sm text-yellow-300">Weather API key not configured.</p>
                    <p class="text-xs">(Displaying sample data)</p>
                </div>
                <div class="weather-item"><h4>Temperature</h4><p>12°C</p></div>
                <div class="weather-item"><h4>Condition</h4><p><span class="weather-icon">⛅</span> Partly Cloudy</p></div>
                <div class="weather-item"><h4>Feels Like</h4><p>10°C</p></div>
                <div class="weather-item"><h4>Humidity</h4><p>60%</p></div>`;
            return;
        }

        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${openWeatherApiKey}&units=metric`;

        try {
            const response = await fetch(weatherApiUrl);
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: "Unknown API error" }));
                throw new Error(`Weather API request failed: ${response.status} - ${errorData.message}`);
            }
            const data = await response.json();

            const weatherIconMap = {
                '01d': '☀️', '01n': '🌙', // Clear sky
                '02d': '⛅', '02n': '☁️', // Few clouds
                '03d': '☁️', '03n': '☁️', // Scattered clouds
                '04d': '☁️', '04n': '☁️', // Broken clouds
                '09d': '🌧️', '09n': '🌧️', // Shower rain
                '10d': '🌦️', '10n': '🌧️', // Rain
                '11d': '⛈️', '11n': '⛈️', // thunderstorm
                '13d': '❄️', '13n': '❄️', // Snow
                '50d': '🌫️', '50n': '🌫️'  // Mist
            };
            const icon = weatherIconMap[data.weather[0].icon] || '🌡️'; // Default icon

            weatherDisplay.innerHTML = `
                <div class="weather-item">
                    <h4>Temperature</h4>
                    <p>${Math.round(data.main.temp)}°C</p>
                </div>
                <div class="weather-item">
                    <h4>Condition</h4>
                    <p><span class="weather-icon">${icon}</span> ${data.weather[0].description}</p>
                </div>
                <div class="weather-item">
                    <h4>Feels Like</h4>
                    <p>${Math.round(data.main.feels_like)}°C</p>
                </div>
                <div class="weather-item">
                    <h4>Humidity</h4>
                    <p>${data.main.humidity}%</p>
                </div>
            `;
        } catch (error) {
            console.error("Error fetching weather:", error);
            weatherDisplay.innerHTML = `<div class="col-span-full text-center text-red-300">Could not fetch weather data. ${error.message}</div>`;
        }
    }

    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Initial call to fetch weather data
    fetchWeather();

}); // End of DOMContentLoaded
