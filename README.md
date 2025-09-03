# Portfolio Website (React Frontend)

A modern, responsive portfolio website built with React, Vite, and Framer Motion. Features dynamic animations, project showcases, and an admin panel for content management.

## Features

- Responsive design for all devices
- Animated UI with Framer Motion
- Project showcase with filtering
- Admin panel for managing projects and CV
- Contact form with email integration
- Dark/light theme support

## Prerequisites

- Node.js 16+ and npm/yarn
- Git

## Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd myportfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:4000  # Replace with your API URL in production
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Building for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| VITE_API_URL | Base URL for the API | Yes | http://localhost:4000 |

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file includes the necessary routing rules for client-side routing with React Router.

1. Push your code to a Git repository
2. Import the repository into Vercel
3. Set the `VITE_API_URL` environment variable in Vercel settings
4. Deploy!

## Project Structure

```
myportfolio/
├── public/           # Static files
├── src/
│   ├── assets/       # Images, fonts, etc.
│   ├── components/   # Reusable components
│   ├── context/      # React context providers
│   ├── pages/        # Page components
│   ├── services/     # API and service functions
│   └── App.jsx       # Main application component
├── .gitignore
├── package.json
├── vercel.json       # Vercel configuration
└── vite.config.js    # Vite configuration
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

MIT
