# WorldAtlas - Country Information Explorer

A React application that allows users to explore information about different countries around the world. Built with React, Vite, and Tailwind CSS.

## Features

- View detailed information about countries worldwide
- Search countries by name
- Filter countries by region
- Responsive design for all devices
- Dark mode support
- Interactive country cards with detailed views

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS 3
- Axios
- React Icons

## Project Structure

```
world-info/
├── public/
│   └── images/
│       └── world.jpg
├── src/
│   ├── api/
│   │   ├── aboutCountry.json
│   │   ├── footerData.json
│   │   └── postApi.jsx
│   ├── components/
│   │   ├── layout/
│   │   │   └── AppLayout.jsx
│   │   └── UI/
│   │       ├── CountryCard.jsx
│   │       ├── CountryDetails.jsx
│   │       ├── Footer.jsx
│   │       ├── Header.jsx
│   │       ├── Hero.jsx
│   │       ├── Loader.jsx
│   │       └── SearchCountry.jsx
│   ├── Pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Country.jsx
│   │   └── Home.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Gograj-choudhary/word-Atlas
cd world-info
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun run dev
```

4. Open [http://localhost:5173](http://localhost:5173) or https://worldatlas-gr.netlify.app/ in your browser.

## Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build

## API

The project uses the [REST Countries API]([https://restcountries.com](https://restcountries.com/v3.1)) to fetch country data.

## License

This project is licensed under the MIT License.
