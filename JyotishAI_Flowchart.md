# JyotishAI App Flowchart and Process Steps

## 1. Onboarding Flow
- Language Selection (Nepali / English)
- Input Form: Full Name, DOB, Time of Birth, Place of Birth
- Location auto-suggest with Devanagari support
- Save data locally or to cloud (Firebase/local SQLite)
- Proceed to Home Dashboard

## 2. Home Dashboard
- Display daily horoscope preview (Love, Health, Career, Family scores)
- "Ask Jyotish Bot" chatbot button
- Today's Panchang widget (Tithi, Nakshatra, Yoga, Karana, Rahukal)
- Transit alerts (e.g., Saturn enters Aquarius)
- Navigation to other features

## 3. Kundali (Birth Chart) Viewer
- Use VedAstro API to generate Janma Kundali (birth chart)
- Display Vimshottari Dasha periods
- Show planetary positions (Graha Gochar)
- Zoom/pan on chart with English/Nepali labels

## 4. Daily/Weekly/Monthly Horoscope
- Generate using planetary transit logic from VedAstro
- UI cards for Love, Health, Career, Family
- Scrollable date selector (Mon-Sun horizontal layout)

## 5. Muhurta & Panchang Calendar
- Panchang calendar per Bikram Sambat
- Auspicious time selector (Abhijit Muhurat, Guru Pushya Yoga, etc.)
- Search for dates for weddings, housewarming, travel

## 6. Matchmaking (Guna Milan)
- Enter partner’s birth details
- Calculate compatibility using Ashta Koota/Guna Milan via API
- Output score and explanation in both languages

## 7. Jyotish Bot (AI Chatbot)
- Conversational interface for user queries
- Use system prompt trained on Vedic astrology concepts and Nepali cultural nuances
- Support Devanagari and Romanized Nepali input
- Display bot responses in styled chat bubbles

## 8. User Profile & Settings
- Edit birth details
- Language toggle (English ↔ Nepali)
- Notifications (upcoming Muhurat, weekly predictions)
- Dark Mode toggle

---

# Development Task Breakdown

1. Setup project structure and onboarding page (done)
2. Implement onboarding data persistence (local storage)
3. Build Home Dashboard UI and integrate horoscope preview and Panchang widget
4. Integrate VedAstro API for Kundali viewer and planetary data
5. Implement Horoscope views with date selector
6. Build Muhurta & Panchang calendar UI and API integration
7. Implement Matchmaking feature using MatchAPI
8. Develop Jyotish Bot AI chatbot interface and backend integration
9. Create User Profile and Settings pages with language and dark mode toggles
10. Final testing, bug fixes, and UI polish using Figma design inspiration

---

# Notes
- Use Tailwind CSS and Google Fonts for styling
- Follow mobile-first responsive design principles
- Use bilingual support throughout the app
- Use API endpoints in API/FrontDesk for backend integration
- Use screenshots for UI design guidance due to Figma access issues
