# Netflix GPT 🎬

A modern Netflix clone built with React, featuring AI-powered movie recommendations using Google's Gemini AI.

## Features ✨

- 🎥 Browse movies and TV shows
- 🔍 AI-powered movie recommendations
- 🎬 Movie trailers and teasers
- �� Responsive design
- 🔐 User authentication
- 🎯 Personalized content discovery

## Tech Stack 🛠

- **Frontend Framework:** React.js
- **State Management:** Redux Toolkit
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **Authentication:** Firebase
- **AI Integration:** Google Gemini AI
- **Build Tool:** Vite
- **API:** TMDB API (via proxy)

## Prerequisites 📋

Before you begin, ensure you have:
- Node.js (v14 or higher)
- npm or yarn
- A Google Gemini AI API key
- A TMDB API key

## Installation 🚀

1. Clone the repository:
```bash
git clone https://github.com/yourusername/netflix-gpt.git
cd netflix-gpt
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
VITE_PROXY_URL=https://tmdb-proxy-server-atie.vercel.app
VITE_AI_API_KEY=your_gemini_api_key_here
```

4. Start the development server:
```bash
npm run dev
```



## Available Scripts 📜

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail 🔍

### AI-Powered Recommendations
- Uses Google's Gemini AI to provide personalized movie recommendations
- Natural language processing for better search results

### Movie Browsing
- Browse through different categories:
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming

### TV Shows
- Dedicated TV shows section
- Categories include:
  - Airing Today
  - On The Air
  - Popular Shows
  - Top Rated Shows


## Acknowledgments 🙏

- TMDB for the movie database API
- Google for the Gemini AI API
- Netflix for the inspiration