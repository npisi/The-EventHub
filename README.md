# Event Venue Booking React App (The EventHub)

A modern, responsive web application for browsing and booking event venues, built with React. The app features a clean UI, sticky header, interactive accordions for menu packages, a robust routing structure, custom error screen, login modal, and a custom image carousel built with useRef.

## Features

- **Venue Listings:** Browse a variety of venues with detailed information and amenities.
- **Event Packages:** View and expand menu packages with nested accordions for detailed menu options.
- **Sticky Header:** Always-visible navigation and search bar for easy access.
- **Search Functionality:** Quickly filter venues or events using the search bar.
- **Responsive Design:** Fully responsive design optimized for desktop, tablet, and mobile devices.
- **React Router:** Smooth navigation between Home, Venues, and Venue Details pages.
- **Custom Error Screen:** Friendly 404 page for unmatched or invalid routes.
- **Login Modal:** Global login modal accessible from any screen with modern UI.
- **Custom Image Carousel:** Built using useRef for smooth horizontal scrolling of event images.
- **Context API:** Network connection context for scalable state management.

## Project Structure

```
my-react/
├── public/                # Static assets and HTML template
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── LoginModal.jsx
│   │   ├── MenuAccordian.jsx
│   │   ├── NestedMenuAccordian.jsx
│   │   ├── EventCards.jsx
│   │   ├── VenueCards.jsx
│   │   └── imgs/          # Images for UI
│   ├── context/
│   │   └── networkConnection.js
│   ├── screens/           # Main app screens/pages
│   │   ├── Home.jsx
│   │   ├── Venue.jsx
│   │   ├── VenueDetails.jsx
│   │   └── ErrorScreen.jsx   # Custom error (404) page
│   ├── App.js             # Main app logic and routing
│   ├── App.css            # Global styles with responsive media queries
│   └── index.js           # Entry point
├── package.json
└── README.md
```

## Key Implementations

### Custom Image Carousel
The app features a custom image carousel built using React's `useRef` hook:
- **Horizontal scrolling** with smooth scroll behavior
- **Navigation buttons** positioned on left and right edges
- **Responsive design** that adapts to different screen sizes
- **Scroll snap** for precise image positioning
- **Touch-friendly** on mobile devices

**Alternative:** You can also use popular React carousel libraries like:
- `react-slick` - Feature-rich carousel with animations
- `swiper` - Modern touch slider
- `react-responsive-carousel` - Lightweight and accessible

### Login Modal
- **Global accessibility** - Available from any screen
- **Modern UI** with backdrop blur effect
- **Responsive design** that works on all devices

### Responsive Design
Comprehensive media queries for:
- **Tablets (768px - 1024px):** Optimized layouts with stacked components
- **Phones (320px - 767px):** Compact horizontal header, mobile-friendly carousel
- **Small phones (320px - 480px):** Ultra-compact design with smaller elements

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name/my-react
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
4. **Open in your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Usage
- Use the search bar in the sticky header to filter venues or events.
- Click on a venue to view details and available packages.
- Expand menu accordions to see detailed menu options.
- Click the "Login" button in the header to open the login modal from any screen.
- Navigate through event images using the carousel navigation buttons.
- Navigate to an invalid or non-existent route to see the custom error (404) screen.

## Customization
- Update venue and menu data in the respective components or connect to an API for dynamic data.
- Modify styles in `App.css` to match your branding.
- Customize the error screen in `src/screens/ErrorScreen.jsx` as needed.
- Replace the custom carousel with React carousel libraries if needed.
- Extend the login modal with authentication logic and API integration.

## API Integration & CORS

**Note:** For development, you can use CORS browser extensions to enable cross-origin requests when testing API integrations.

## Offline Modal
- An Offline Modal is also there which appears when the user is offline.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

---

**Made with ❤️ using React.**
