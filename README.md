# Noorli.pk

A modern e-commerce website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Product catalog
- Shopping cart
- User authentication (planned)
- Payment integration (planned)

## Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **Routing**: React Router
- **State Management**: React Context
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/noorli.pk.git
   cd noorli.pk
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push your changes to the `main` branch.
2. GitHub Actions will automatically build and deploy the site.
3. The site will be available at `https://yourusername.github.io/noorli.pk/`

### Manual Deployment

If you prefer to deploy manually:

1. Build the project: `npm run build`
2. The `dist` folder contains the production build.
3. Deploy the contents of `dist` to your hosting provider.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Security

Please see [SECURITY.md](SECURITY.md) for our security policy.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
