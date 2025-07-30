# Event Venue Booking React App (The EventHub)

A modern, responsive web application for browsing and booking event venues, built with React. The app features a clean UI, sticky header, interactive accordions for menu packages, a robust routing structure, and a custom error screen for unmatched routes.

## Features

- **Venue Listings:** Browse a variety of venues with detailed information and amenities.
- **Event Packages:** View and expand menu packages with nested accordions for detailed menu options.
- **Sticky Header:** Always-visible navigation and search bar for easy access.
- **Search Functionality:** Quickly filter venues or events using the search bar.
- **Responsive Design:** Looks great on desktop and mobile devices.
- **React Router:** Smooth navigation between Home, Venues, and Venue Details pages.
- **Custom Error Screen:** Friendly 404 page for unmatched or invalid routes.
- **Context API:** Network connection context for scalable state management.

## Project Structure

```
my-react/
├── public/                # Static assets and HTML template
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx
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
│   ├── App.css            # Global styles
│   └── index.js           # Entry point
├── package.json
└── README.md
```

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
- Navigate to an invalid or non-existent route to see the custom error (404) screen.

## Customization
- Update venue and menu data in the respective components or connect to an API for dynamic data.
- Modify styles in `App.css` to match your branding.
- Customize the error screen in `src/screens/ErrorScreen.jsx` as needed.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

---

**Made with ❤️ using React.**
