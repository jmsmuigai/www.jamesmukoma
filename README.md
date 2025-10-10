# AURA Intelligence Portfolio

> **Automated Unified Resource Architecture** - State-of-the-art AI-powered portfolio showcasing GeoAI expertise and intelligent automation solutions for sustainable impact.

[![Deploy Status](https://github.com/jmsmuigai/aura-portfolio/workflows/Deploy%20AURA%20Intelligence%20Portfolio/badge.svg)](https://github.com/jmsmuigai/aura-portfolio/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?logo=three.js&logoColor=white)](https://threejs.org/)

## 🌟 Overview

AURA Intelligence is a cutting-edge portfolio website that demonstrates James Mukoma's expertise in GeoAI, Google Earth Engine, and intelligent automation. Built with modern web technologies and powered by AI, this portfolio showcases real-world projects making sustainable impact in Kenya's ASAL regions.

### ✨ Key Features

- **🤖 AI-Powered Chatbot** - Gemini Pro integration with voice input support
- **🌍 Interactive GeoAI Maps** - Mapbox GL JS with Google Earth Engine integration
- **🎨 3D Visualizations** - Three.js and React Three Fiber for immersive experiences
- **📱 Responsive Design** - Neo-African Futurism aesthetic with Tailwind CSS
- **💰 M-Pesa Integration** - Secure payment processing for consultancy services
- **📊 Real-time Analytics** - Live project monitoring and performance metrics
- **🔊 Voice Interface** - Speech recognition for enhanced accessibility
- **⚡ Performance Optimized** - PWA support with offline capabilities

## 🚀 Live Demo

- **Website**: [https://jmsmuigai.github.io/aura-portfolio](https://jmsmuigai.github.io/aura-portfolio)
- **API**: [https://aura-api.herokuapp.com](https://aura-api.herokuapp.com)

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Three.js & React Three Fiber** for 3D graphics
- **Mapbox GL JS** for interactive maps
- **Chart.js** for data visualization

### Backend
- **Python Flask** API server
- **Google Gemini Pro** for AI chatbot
- **Google Earth Engine** for geospatial processing
- **M-Pesa API** for payment integration
- **MongoDB** for data storage
- **Docker** for containerization

### Deployment
- **GitHub Pages** for frontend hosting
- **Google Cloud Run** for backend services
- **GitHub Actions** for CI/CD
- **Cloudflare** for CDN and security

## 📁 Project Structure

```
aura-portfolio/
├── 📁 src/                          # React frontend source
│   ├── 📁 components/               # Reusable UI components
│   │   ├── 📁 ai/                   # AI chatbot components
│   │   ├── 📁 layout/               # Layout components
│   │   └── 📁 ui/                   # UI components
│   ├── 📁 pages/                    # Page components
│   ├── 📁 graphics/                 # 3D graphics components
│   ├── 📁 maps/                     # Map components
│   ├── 📁 hooks/                    # Custom React hooks
│   ├── 📁 utils/                    # Utility functions
│   └── 📁 types/                    # TypeScript type definitions
├── 📁 backend/                      # Python Flask backend
│   ├── 📁 blueprints/               # API route modules
│   ├── 📄 app.py                    # Flask application
│   ├── 📄 requirements.txt          # Python dependencies
│   └── 📄 Dockerfile                # Docker configuration
├── 📁 public/                       # Static assets
├── 📄 package.json                  # Node.js dependencies
├── 📄 vite.config.ts                # Vite configuration
├── 📄 tailwind.config.js            # Tailwind CSS configuration
└── 📄 README.md                     # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.11+
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jmsmuigai/aura-portfolio.git
   cd aura-portfolio
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   cd ..
   ```

4. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your API keys and configuration
   ```

5. **Start development servers**
   ```bash
   # Terminal 1: Start frontend
   npm run dev

   # Terminal 2: Start backend
   cd backend
   python app.py
   ```

6. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🔧 Configuration

### Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# AI Services
GEMINI_API_KEY=your_gemini_api_key_here

# Maps
VITE_MAPBOX_TOKEN=your_mapbox_access_token_here

# Payments (Optional)
MPESA_CONSUMER_KEY=your_mpesa_consumer_key
MPESA_CONSUMER_SECRET=your_mpesa_consumer_secret

# Analytics (Optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Getting API Keys

1. **Google Gemini API**
   - Visit [Google AI Studio](https://aistudio.google.com/)
   - Create a new project
   - Generate an API key

2. **Mapbox Access Token**
   - Sign up at [Mapbox](https://www.mapbox.com/)
   - Go to your account page
   - Create an access token

3. **M-Pesa API** (Optional)
   - Register at [Safaricom Developer Portal](https://developer.safaricom.co.ke/)
   - Create an app and get credentials

## 🌍 Projects Showcase

### Active Projects in Garissa County

1. **Project Sentinel** - Flood & Drought Early Warning System
   - Real-time monitoring using Sentinel satellite data
   - AI-powered prediction models
   - Community alert system

2. **Project Verdant** - Rangeland & Livestock AI
   - Cattle identification using muzzle prints
   - Rangeland health mapping
   - Grazing optimization

3. **Project TerraForm** - Invasive Species AI
   - Mathenge plant detection and monitoring
   - Aquifer impact analysis
   - Eradication planning

4. **Project Harvest** - AI for Soil & Crop Yield
   - Soil nutrient analysis
   - Crop yield prediction
   - Weather integration

5. **Project Shirika** - Refugee Integration AI
   - Resource allocation modeling
   - Social integration analysis
   - Policy recommendations

6. **Project Atlas** - Garissa Living Atlas
   - Ecosystem health monitoring
   - Degradation tracking
   - Interactive dashboards

## 🤖 AI Features

### AURA Assistant Chatbot
- **Powered by**: Google Gemini Pro
- **Capabilities**: 
  - Answer questions about projects and services
  - Provide technical information
  - Support multiple languages (English/Swahili)
  - Voice input support

### Voice Interface
- **Speech Recognition**: Web Speech API
- **Languages**: English and Swahili
- **Features**: Real-time transcription, voice commands

### 3D Visualizations
- **Technology**: Three.js and React Three Fiber
- **Features**:
  - Interactive data visualizations
  - Skill galaxy visualization
  - Project progress animations
  - Particle background effects

## 💳 Payment Integration

### M-Pesa STK Push
- **Secure Payment Processing**
- **Real-time Notifications**
- **Transaction Tracking**
- **Automated Quote Generation**

### Supported Payment Types
- Consultation fees
- Project retainers
- Training programs
- Custom AI development

## 📊 Analytics & Monitoring

### Real-time Metrics
- Page views and user engagement
- Chat interactions and queries
- Project progress tracking
- Geographic visitor data

### Performance Monitoring
- Core Web Vitals
- Error tracking
- API response times
- User experience metrics

## 🚀 Deployment

### Frontend (GitHub Pages)
```bash
npm run build
# Automatically deployed via GitHub Actions
```

### Backend (Google Cloud Run)
```bash
# Build Docker image
docker build -t aura-backend ./backend

# Deploy to Cloud Run
gcloud run deploy aura-backend --image aura-backend
```

### Environment Setup
1. **Production Environment Variables**
2. **Domain Configuration**
3. **SSL Certificates**
4. **CDN Setup**

## 🔒 Security

### Implemented Security Measures
- **HTTPS Everywhere**
- **API Rate Limiting**
- **Input Validation**
- **CORS Configuration**
- **Environment Variable Protection**
- **Docker Security Scanning**

### Privacy Compliance
- **GDPR Compliance**
- **Data Minimization**
- **User Consent Management**
- **Secure Data Storage**

## 🧪 Testing

### Frontend Testing
```bash
npm run test          # Run unit tests
npm run test:e2e      # Run end-to-end tests
npm run test:coverage # Generate coverage report
```

### Backend Testing
```bash
cd backend
python -m pytest tests/ -v
```

### Performance Testing
```bash
npm run lighthouse    # Run Lighthouse performance audit
npm run bundle-analyze # Analyze bundle size
```

## 📈 Performance

### Optimization Features
- **Code Splitting**
- **Lazy Loading**
- **Image Optimization**
- **Service Worker Caching**
- **CDN Integration**

### Performance Metrics
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

### Code Standards
- **ESLint** for JavaScript/TypeScript
- **Prettier** for code formatting
- **Black** for Python formatting
- **TypeScript** strict mode

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**James Mukoma**
- **Email**: jmsmuigai@gmail.com
- **LinkedIn**: [James Mukoma](https://www.linkedin.com/in/james-mukoma-86534438/)
- **GitHub**: [jmsmuigai](https://github.com/jmsmuigai)

## 🙏 Acknowledgments

- **Google Earth Engine** team for geospatial processing capabilities
- **Mapbox** for mapping services
- **Three.js** community for 3D graphics libraries
- **React** team for the amazing framework
- **Open Source** community for inspiration and tools

## 📞 Support

For support, email jmsmuigai@gmail.com or join our [Discord community](https://discord.gg/aura-intelligence).

## 🔗 Links

- **Live Website**: [https://jmsmuigai.github.io/aura-portfolio](https://jmsmuigai.github.io/aura-portfolio)
- **API Documentation**: [https://aura-api.herokuapp.com/api/docs](https://aura-api.herokuapp.com/api/docs)
- **Project Board**: [GitHub Projects](https://github.com/jmsmuigai/aura-portfolio/projects)
- **Issues**: [GitHub Issues](https://github.com/jmsmuigai/aura-portfolio/issues)

---

**Built with ❤️ by James Mukoma | AURA Intelligence**

*Transforming data into sustainable impact through intelligent automation.*
