export const profile = {
  name: 'Ashwini Gathekar',
  role: 'Frontend Developer',
  location: 'Pune, India',
  email: 'ashwinigathekar2704@gmail.com',
  github: 'https://github.com/Gathekar98',
  linkedin: 'https://www.linkedin.com/in/ashwini-gathekar-85050b194/',
  resume: '/Ashwini-Gathekar-CV.pdf',
  tagline:
    'I build responsive, accessible React interfaces — from fintech dashboards used by investors every day to games packaged for Android.',
  about: [
    'Frontend developer with 2+ years of professional experience building production web apps with React, JavaScript (ES6+), TypeScript, HTML5 and CSS3.',
    'I enjoy translating Figma designs into pixel-accurate, maintainable components, and I care about the details users feel — performance, keyboard navigation, semantic HTML and Lighthouse scores.',
  ],
};

export const stats = [
  { value: '2+', label: 'Years experience' },
  { value: '9', label: 'Live projects' },
  { value: '19', label: 'GitHub repos' },
];

export const experience = [
  {
    company: 'The Alchemist Ark Pvt. Ltd.',
    role: 'Frontend Developer',
    period: 'Sep 2024 — Present',
    location: 'Pune, India',
    projects: [
      {
        name: 'MoneyWorks4Me',
        type: 'Wealth research and investment platform',
        url: 'https://www.moneyworks4me.com/',
        summary:
          'Developed responsive, data-driven interfaces for a wealth-tech platform offering stock and mutual-fund research, screeners, portfolio tools, dashboards, reports, and financial calculators.',
        points: [
          'Built reusable interfaces using React.js, JavaScript, TypeScript, HTML5, CSS3, SCSS, and Bootstrap.',
          'Developed conditional dashboards, screeners, listing pages, portfolio tools, reports, calculators, and customer-facing workflows.',
          'Led frontend development of the Portfolio Verdict Report with Puppeteer PDF exports and built an auto-filled agreement workflow using PHPWord.',
          'Contributed to a site-wide theme migration, responsive improvements, and React and Node.js upgrade-related changes.',
          'Improved accessibility, SEO, and production quality through ARIA, keyboard navigation, Lighthouse audits, canonical URLs, debugging, and AI-assisted testing with manual verification.',
        ],
        modules: [
          'Stock Screener',
          'Company Detail Pages',
          'Mutual Fund Detail Pages',
          'Mutual Fund Screener',
          'Investment Dashboard',
          'Portfolio Manager',
          'Watchlist',
          'Stock & Fund Listings',
          'Financial Planning',
          'Calculators',
          'Portfolio Verdict Report',
        ],
      },
      {
        name: 'Third Rock Wealth',
        type: 'Mutual fund distribution and financial-planning platform',
        url: 'https://thirdrockwealth.com/',
        summary:
          'Developed responsive customer experiences for a mutual-fund platform covering fund research, financial calculators, client onboarding, risk profiling, goal planning, KYC verification, and investment workflows.',
        points: [
          'Built responsive interfaces using HTML5, CSS3, vanilla JavaScript, and reusable frontend patterns.',
          'Developed fund screeners, fund-detail pages, comparison and portfolio-overlap tools, watchlists, and financial calculators.',
          'Integrated PHP JSON APIs using Fetch API to display dynamic fund, portfolio, session, and customer information.',
          'Contributed to registration, risk profiling, financial goals, fund planning, KYC verification, and investment-handoff workflows.',
          'Implemented validation, authentication-aware UI states, accessibility, SEO-friendly routing, error handling, cross-browser compatibility, and AI-assisted testing with manual verification.',
        ],
        modules: [
          'Fund Screener',
          'Fund Detail Pages',
          'Fund Comparison',
          'Portfolio Overlap',
          'Watchlist',
          'Calculators',
          'Risk Profiling',
          'Goal Planning',
          'KYC Verification',
        ],
      },
    ],
  },
];

export const work = [
  {
    id: 'mw4me',
    title: 'MoneyWorks4Me',
    company: 'The Alchemist Ark',
    tagline: 'Wealth research and investment platform',
    description:
      'Stock and mutual-fund research, screeners, dashboards, portfolio tools, reports and calculators. Led frontend for the Portfolio Verdict Report with Puppeteer PDF exports, and built an auto-filled agreement workflow with PHPWord.',
    tech: ['React', 'TypeScript', 'SCSS', 'Bootstrap', 'Puppeteer', 'PHPWord'],
    image: '/projects/mw4me.webp',
    live: 'https://www.moneyworks4me.com/',
  },
  {
    id: 'trw',
    title: 'Third Rock Wealth',
    company: 'The Alchemist Ark',
    tagline: 'Mutual fund distribution and financial planning',
    description:
      'Fund screeners and detail pages, comparison and portfolio-overlap tools, calculators, and onboarding flows for registration, risk profiling, goal planning and KYC verification.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Fetch API', 'PHP JSON APIs'],
    image: '/projects/trw.webp',
    live: 'https://thirdrockwealth.com/',
  },
];

export const projects = [
  {
    id: 'finmarkets',
    title: 'finMarkets',
    category: ['Full-stack', 'Fintech'],
    tagline: 'Research platform for Indian investors',
    description:
      'Ratings for 1,300+ mutual funds from official AMFI data, live NSE stock prices with quality, growth, valuation and momentum scores, SIP and retirement calculators, and a portfolio tracker with Supabase auth.',
    tech: ['React', 'Node/Express', 'Supabase', 'Vite', 'Vercel'],
    image: '/projects/finmarkets.webp',
    live: 'https://fin-markets.vercel.app',
    code: 'https://github.com/Gathekar98/FinMarkets',
    featured: true,
  },
  {
    id: 'nexskill',
    title: 'NexSkill Labs',
    category: ['Full-stack'],
    tagline: 'EdTech platform with payments',
    description:
      'Multi-page EdTech site with program registration, contact and newsletter flows, Razorpay payments with server-side verification, and automated branded emails.',
    tech: ['React', 'Node/Express', 'Razorpay', 'Tailwind'],
    image: '/projects/nexskill.webp',
    live: 'https://nex-skill-labs.vercel.app',
    code: 'https://github.com/Gathekar98/NexSkill-Labs',
  },
  {
    id: 'picpuzzle',
    title: 'PicPuzzle',
    category: ['Mobile', 'Frontend'],
    tagline: '30-level puzzle game, shipped as an APK',
    description:
      'Custom state-machine architecture, touch-optimized drag and drop with the Pointer Events API, an SVG village map and saved progress — packaged for Android with Capacitor.',
    tech: ['React', 'TypeScript', 'Capacitor', 'SVG'],
    image: '/projects/picpuzzle.webp',
    live: 'https://picture-puzzle-game-one.vercel.app',
    code: 'https://github.com/Gathekar98/picture-puzzle-game',
  },
  {
    id: 'ringbox',
    title: 'RingBox',
    category: ['Frontend'],
    tagline: 'Ringtone and sound discovery',
    description:
      'Search, browse and preview sounds with an in-page audio player and sound detail pages, powered by the Freesound API.',
    tech: ['React', 'Freesound API', 'REST', 'Vite'],
    image: '/projects/ringbox.webp',
    live: 'https://react-ring-box-ringtone-download-pl.vercel.app',
    code: 'https://github.com/Gathekar98/React_RingBox-ringtone-download-platform-',
  },
  {
    id: 'shopkart',
    title: 'ShopKart',
    category: ['Frontend'],
    tagline: 'React Redux e-commerce cart',
    description:
      'Product browsing, cart with quantity controls, validated checkout form and localStorage persistence, all driven by Redux Toolkit global state.',
    tech: ['React', 'Redux Toolkit', 'React Router', 'Vite'],
    image: '/projects/shopkart.webp',
    live: 'https://react-redux-project-shopping-cart.vercel.app/',
    code: 'https://github.com/Gathekar98/React-Redux-Project---Shopping-Cart',
  },
  {
    id: 'frame',
    title: 'Frame',
    category: ['Frontend'],
    tagline: 'Image discovery app',
    description:
      'Search Unsplash by topic, filter by orientation, preview full-size images, save favourites and download high-resolution photos.',
    tech: ['Next.js', 'Tailwind', 'Unsplash API'],
    image: '/projects/frame.webp',
    live: 'https://image-search-app-react-two.vercel.app',
    code: 'https://github.com/Gathekar98/ImageSearchApp-React',
  },
  {
    id: 'sip',
    title: 'SIP Calculator',
    category: ['Fintech', 'Frontend'],
    tagline: 'Plan monthly investing',
    description:
      'Interactive SIP calculator with adjustable controls, a projected growth chart and downloadable PDF investment plans.',
    tech: ['React', 'Charts', 'PDF export'],
    image: '/projects/sip.webp',
    live: 'https://sip-calculator-react-theta.vercel.app/',
    code: 'https://github.com/Gathekar98/SIP-Calculator-React',
  },
];

export const filters = ['All', 'Full-stack', 'Fintech', 'Mobile', 'Frontend'];

export const skills = [
  {
    group: 'Frontend',
    items: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Sass/SCSS', 'Bootstrap', 'Tailwind', 'jQuery'],
  },
  {
    group: 'State & data',
    items: ['React Hooks', 'Context API', 'Redux Toolkit', 'REST APIs', 'Axios', 'Fetch', 'Supabase'],
  },
  {
    group: 'Quality & UX',
    items: ['Responsive design', 'Figma to UI', 'Accessibility (ARIA)', 'Lighthouse', 'SEO', 'Performance', 'Cross-browser'],
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'Tortoise SVN', 'npm', 'Vite', 'VS Code', 'Chrome DevTools', 'Vercel'],
  },
  {
    group: 'Also explored',
    items: ['React Native', 'Capacitor', 'Node/Express', 'PHP (basic)', 'SQL (basic)', 'Claude AI', 'ChatGPT'],
  },
];

export const education = {
  degree: 'B.E. — Electronics & Telecommunication',
  school: 'Prof. Ram Meghe College of Engineering & Management, Amravati',
  period: '2015 — 2019',
};
