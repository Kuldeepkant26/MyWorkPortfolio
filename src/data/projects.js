// ── Mentel — screenshots (bundled by Vite as local assets) ──
import mentelDashboard      from '../My_Projects/Mentel/mentel-dashboard.png'
import mentelSignIn         from '../My_Projects/Mentel/mentel-sign-in.png'
import mentelMessages       from '../My_Projects/Mentel/mentel-messages.png'
import mentelSupport        from '../My_Projects/Mentel/mentel-support-ticketing.png'

// ── Billionax — screenshots of the live site (billionax.com) ──
import billionaxDashboard   from '../My_Projects/Billionax/billionax-dashboard.webp'
import billionaxGuestApp    from '../My_Projects/Billionax/billionax-guest-app.webp'
import billionaxQrEntry     from '../My_Projects/Billionax/billionax-qr-entry.webp'
import billionaxMembership  from '../My_Projects/Billionax/billionax-membership.webp'
import billionaxStaffPanel  from '../My_Projects/Billionax/billionax-staff-panel.webp'
import billionaxForHotels   from '../My_Projects/Billionax/billionax-for-hotels.webp'

// ── JK Fashion Embroidery — screenshots of the live site (jkfashionembroidery.com) ──
import jkHome               from '../My_Projects/JKFashion/jkfashion-home.webp'
import jkRange              from '../My_Projects/JKFashion/jkfashion-range.webp'
import jkGallery            from '../My_Projects/JKFashion/jkfashion-gallery.webp'
import jkProcess            from '../My_Projects/JKFashion/jkfashion-process.webp'
import jkEnquiry            from '../My_Projects/JKFashion/jkfashion-enquiry.webp'

// ── SILO — public homepage of the live site (silo-main.vercel.app).
//    The AI features live behind the login, so the project page shows
//    hand-built mock screens instead (see Components/SiloScreens.jsx).
import siloHome             from '../My_Projects/SILO/silo-home.webp'

// ── Naturally Good — screenshots of the live site (naturallygood.in) ──
import ngHome               from '../My_Projects/NaturallyGood/naturallygood-home.webp'
import ngProducts           from '../My_Projects/NaturallyGood/naturallygood-products.webp'
import ngSubscription       from '../My_Projects/NaturallyGood/naturallygood-subscription.webp'
import ngPremium            from '../My_Projects/NaturallyGood/naturallygood-premium.webp'
import ngFarmers            from '../My_Projects/NaturallyGood/naturallygood-farmers.webp'

/* Array order = carousel order. Index 0 is the centre card on load and the
   last item sits to its left, so the three live client sites (Billionax,
   JK Fashion, Naturally Good) are what visitors see first.
   `id` is used in the /project/:id route, so never renumber existing ones. */
export const PROJECTS = [
  {
    id: 4,
    title: 'Billionax',
    client: 'Freelance',
    company: 'Billionax',
    freelance: true,
    category: 'Full Stack',
    url: 'billionax.com',
    liveLink: 'https://billionax.com/',
    githubLink: '#',
    image: billionaxDashboard,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'WebSockets'],
    year: '2026',
    role: 'Full-Stack Developer',

    tagline:
      'A multi-tenant hotel loyalty & payments platform — guest web app, hotel staff panel and super admin, with QR entry, loyalty coins and Razorpay split settlement.',

    description:
      'Billionax is a multi-tenant loyalty and payments platform for hotels. Guests scan a QR code at the front desk to join, earn Billionax Coins on every stay, and use them to take money off their bill. I\'m building it end to end across three surfaces — a guest mobile web app, a hotel staff panel, and a super admin panel — on React, Node/Express and MongoDB, with Razorpay Route handling split settlement to each hotel.',

    features: [
      {
        icon: 'phone',
        title: 'Guest Mobile Web App',
        text: 'A mobile-first guest app with nothing to download. Guests sign in with their email, get a digital membership card, and see their coins, savings, bills and privileges in one place.',
        image: billionaxGuestApp,
      },
      {
        icon: 'qr',
        title: 'QR-Based Guest Entry',
        text: 'Every participating hotel has a Billionax QR code at reception. Scanning it is the way in — the guest signs in, their card appears with welcome coins, and bills from the front desk land on their phone.',
        image: billionaxQrEntry,
      },
      {
        icon: 'coin',
        title: 'Loyalty Coins & Membership Tiers',
        text: 'A coin system with Silver, Gold and Platinum tiers. Each hotel sets its own earn rates, how much of a bill coins can cover, and how many nights it takes to move up a tier.',
        image: billionaxMembership,
      },
      {
        icon: 'card',
        title: 'Razorpay Split Settlement',
        text: 'Coins come off the bill and the guest pays the rest by card or UPI. Payments run on Razorpay Route with each hotel as a linked sub-account, behind a payment-provider abstraction that switches between demo and live mode based on the credentials it is given.',
        image: billionaxDashboard,
      },
      {
        icon: 'search',
        title: 'Hotel Staff Panel & Live Search',
        text: 'A separate panel where hotel staff run their programme — track members, issue rewards and settle bills. A WebSocket-driven live search lets the front desk find a guest as they type.',
        image: billionaxStaffPanel,
      },
      {
        icon: 'layers',
        title: 'Multi-Tenant, Hotel by Hotel',
        text: 'Every hotel runs its own programme: enrol guests by QR, send bills to a guest\'s phone, set earn rates and coin limits per service, publish offers to members, and issue an invoice for every paid bill. A super admin panel sits above all of it.',
        image: billionaxForHotels,
      },
    ],
  },

  {
    id: 5,
    title: 'JK Fashion Embroidery',
    client: 'Freelance',
    company: 'JK Fashion',
    freelance: true,
    category: 'Web',
    url: 'jkfashionembroidery.com',
    liveLink: 'https://jkfashionembroidery.com/',
    githubLink: '#',
    image: jkHome,
    tags: ['React', 'SEO', 'Open Graph', 'Brand Identity', 'SVG', 'Python · fontTools'],
    year: '2026',
    role: 'Web Designer & Developer',

    tagline:
      'A B2B website for a Schiffli embroidery & lace manufacturer — plus the brand identity, from 26 logo concepts to custom embroidery SVG artwork.',

    description:
      'JK Fashion manufactures Schiffli embroidered fabrics, cotton and net laces, and crochet trims for garment and fabric exporters. I built their B2B website to present that range to buyers, with SEO and Open Graph metadata for search and social sharing. I also designed the brand identity behind it — 26 logo concepts across 5 design families, generated as SVGs through a Python/fontTools pipeline — plus custom embroidery SVG artwork.',

    features: [
      {
        icon: 'layers',
        title: 'The Range, Told for Buyers',
        text: 'An editorial overview of what the factory makes — Schiffli yardage, laces & trims, and custom development — written for exporters who buy by the metre.',
        image: jkRange,
      },
      {
        icon: 'image',
        title: 'Look Closer — Rack Gallery',
        text: 'Pick a garment from the rail and bring its embroidery up close — the thread, the ground and the repeat — at the scale a buyer would inspect it.',
        image: jkGallery,
      },
      {
        icon: 'factory',
        title: 'Inside the Floor',
        text: 'Real photographs of the unit, the machines and the people who run them, followed by the production flow from design punching through checking and inspection to dispatch.',
        image: jkProcess,
      },
      {
        icon: 'mail',
        title: 'Buyer Enquiry Flow',
        text: 'A "Tell Us What You Need" form where buyers send a reference, a rough idea or a shade card, alongside direct phone and WhatsApp contact.',
        image: jkEnquiry,
      },
    ],
  },

  {
    id: 7,
    title: 'SILO',
    client: 'Oodles Technologies',
    company: 'Oodles Technologies',
    category: 'AI',
    url: 'silo-main.vercel.app',
    liveLink: 'https://silo-main.vercel.app/',
    githubLink: '#',
    image: siloHome,
    tags: ['Node.js', 'Express', 'AI Agents', 'LLM Integration', 'REST APIs'],
    year: '2026',
    role: 'Developer — AI Features',

    tagline:
      'AI features for a legal-operations platform — a personalised AI bot builder, AI-improved descriptions, and smart suggestions while drafting legal documents.',

    description:
      'SILO is a legal-operations platform that helps businesses automate their legal consultancies — legal requests come in as tickets, get assigned across the team, and are answered faster with the SILO AI Agent. I built multiple AI features into SILO\'s dashboard: a builder for personalised AI bots, AI that improves descriptions, and AI suggestions while legal documents are being prepared.',

    // Shown under "What it does" — the screens are illustrative, not screenshots.
    mockNote: 'Screens recreated for this portfolio — the live dashboard sits behind the client\'s login.',

    // `mock` = a hand-built screen from SiloScreens.jsx (keys in ProjectDetail's WEB_MOCKS).
    features: [
      {
        icon: 'bot',
        title: 'Personalised AI Bot Builder',
        text: 'Teams build their own AI bot right inside the dashboard, personalised to how they work, so routine legal requests get answered faster.',
        mock: 'silo-bot',
      },
      {
        icon: 'wand',
        title: 'AI-Improved Descriptions',
        text: 'One action turns a rough description into a clear, complete one — AI rewrites and tightens the text before it goes out.',
        mock: 'silo-describe',
      },
      {
        icon: 'doc',
        title: 'AI Suggestions for Legal Documents',
        text: 'While a legal document is being prepared, AI offers suggestions as it takes shape, guiding the person drafting it.',
        mock: 'silo-doc',
      },
    ],
  },

  {
    id: 1,
    title: 'Mentel',
    client: 'Oodles Technologies',
    company: 'Oodles Technologies',
    category: 'Full Stack',
    url: 'mentel.app',
    liveLink: '#',
    githubLink: '#',
    image: mentelDashboard,
    tags: ['React', 'Redux', 'Chart.js', 'REST APIs', 'Tailwind CSS'],
    year: '2025',
    role: 'Frontend Developer (React)',

    // Short line shown on the Work card hover
    tagline:
      'A patient & psychologist portal — dashboard, support & ticketing, messaging, user and permission management.',

    description:
      'Mentel is a patient and psychologist portal for running a mental-health practice end to end — analytics dashboards, real-time messaging, intake, payroll, user & permission management, and a full support & ticketing system. I built the complete frontend in React, turning dense clinical workflows into a clean, intuitive interface.',

    // The key features, each with its own screenshot + short blurb.
    features: [
      {
        icon: 'lock',
        title: 'Secure Login & Sign Up',
        text: 'A branded, enterprise-compliant authentication experience with secure access and role-based entry into the platform.',
        image: mentelSignIn,
      },
      {
        icon: 'dashboard',
        title: 'Analytics Dashboard',
        text: 'A multi-tab overview — Patient, Providers, Financial, Marketing — with KPI cards, month-over-month trends, and an interactive client-base & intake chart.',
        image: mentelDashboard,
      },
      {
        icon: 'message',
        title: 'Real-time Messaging',
        text: 'A built-in chat between admins, providers, and patients with inbox & groups, read receipts, online presence, and date-grouped threads.',
        image: mentelMessages,
      },
      {
        icon: 'ticket',
        title: 'Support & Ticketing',
        text: 'A complete ticketing system with priority and complexity tags, assignment, status flow, SLA-breach tracking, search/filter, and pagination.',
        image: mentelSupport,
      },
    ],
  },

  {
    id: 2,
    title: 'Kinly',
    client: 'Oodles Technologies',
    company: 'Oodles Technologies',
    category: 'Mobile',
    kind: 'mobile',          // render hand-built screen mockups instead of images
    cover: 'home',           // KINLY_SCREENS key used for the hero preview
    url: 'kinly.app',
    liveLink: '#',
    githubLink: '#',
    tags: ['React Native', 'Expo', 'AI Assistant', 'Charts', 'REST APIs'],
    year: '2025',
    role: 'Mobile Developer (React Native)',

    tagline:
      'A React Native app for parents — track a child\'s sleep, food, activity, health & more, with an AI assistant and a built-in baby shop.',

    description:
      'Kinly is a React Native childcare companion that helps parents track and understand their child\'s daily routine — sleep, active/play time, nutrition, stools, and health — all in one place. It pairs the data with an AI assistant that answers parenting questions using each child\'s own history, rich tracking dashboards, multi-child profiles, and a curated baby-products shop.',

    features: [
      {
        icon: 'phone',
        title: 'Daily Routine Dashboard',
        text: 'A warm home screen with at-a-glance daily rings for sleep, play, and feeds, quick-log shortcuts, a live activity timeline, and a fast child switcher.',
        screen: 'home',
      },
      {
        icon: 'chart',
        title: 'Tracking — Sleep, Food, Stools & Activity',
        text: 'Detailed tracking with weekly sleep charts, a nutrition balance meter, stool logs, and active-time trends — turning everyday logging into clear insights.',
        screen: 'track',
      },
      {
        icon: 'ai',
        title: 'AI Parenting Assistant',
        text: 'A conversational AI agent that answers parents\' questions grounded in their own child\'s data — sleep patterns, feeding, and personalised, actionable suggestions.',
        screen: 'ai',
      },
      {
        icon: 'children',
        title: 'Multi-Child Profiles',
        text: 'Add and manage multiple children, each with their own profile, routine, and data — and switch between them anywhere in the app in a tap.',
        screen: 'children',
      },
      {
        icon: 'shop',
        title: 'Baby Products Shop',
        text: 'An in-app shop for baby essentials with categories, search, a cart, and product recommendations tailored to each child\'s age and routine.',
        screen: 'shop',
      },
    ],
  },

  {
    id: 3,
    title: 'Orbi',
    client: 'Personal Project',
    company: 'Personal Project',
    category: 'Mobile',
    kind: 'mobile',          // render hand-built screen mockups instead of images
    screens: 'orbi',         // which mockup set ORBI_SCREENS to use
    cover: 'feed',           // screen shown in the hero / Work card
    url: 'orbi.app',
    liveLink: '#',
    githubLink: '#',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.IO', 'Cloudinary'],
    year: '2026',
    role: 'Full-Stack Mobile Developer',

    tagline:
      'A full Instagram-style social app — feed, stories & highlights, real-time chat, likes & comments, and a superadmin panel. Built end to end.',

    description:
      'Orbi is a premium, Instagram-style social app I designed and built end to end — React Native on the front, a Node/Express + MongoDB + Socket.IO backend on the server. It has a photo & text feed, ephemeral stories with viewers, likes and permanent highlights, real-time direct messaging with reactions and custom chat backgrounds, threaded comments with likes and pinning, email-OTP signup, live notification badges, image uploads via Cloudinary, and a full superadmin moderation panel with reports.',

    features: [
      {
        icon: 'phone',
        title: 'Feed, Stories & Highlights',
        text: 'A clean photo/text feed with a story tray on top — post 8/16/24/48h stories, see your viewers, like stories, and save the best ones into permanent profile highlights.',
        screen: 'feed',
      },
      {
        icon: 'children',
        title: 'Profiles, Follows & Highlights',
        text: 'Full Instagram-style profiles — avatar, bio, post grid, follower/following lists, and highlight reels — with real follow graphs powering a personalised feed.',
        screen: 'profile',
      },
      {
        icon: 'message',
        title: 'Real-time Chat',
        text: 'Socket.IO direct messaging with typing indicators, read receipts, edit/delete, emoji reactions on messages, and switchable premium chat backgrounds.',
        screen: 'chat',
      },
      {
        icon: 'bell',
        title: 'Real-time Notifications',
        text: 'Powered by Socket.IO — follows, likes, and comments arrive instantly with live badge counts on the heart and message icons. The notification feed updates in place as activity happens, no refresh needed.',
        screen: 'notifs',
      },
      {
        icon: 'shield',
        title: 'Superadmin Panel & Moderation',
        text: 'A role-based admin suite — manage people, ban with duration & reason, soft-delete accounts, hide or remove posts, and review & reply to user-submitted reports.',
        screen: 'admin',
      },
    ],
  },

  {
    id: 6,
    title: 'Naturally Good',
    client: 'Freelance',
    company: 'Naturally Good',
    freelance: true,
    category: 'Web',
    url: 'naturallygood.in',
    liveLink: 'https://www.naturallygood.in/',
    githubLink: '#',
    image: ngHome,
    tags: ['React', 'AWS EC2', 'Nginx', 'Certbot SSL', 'SEO'],
    year: '2024 – 2025',
    role: 'Web Developer (React + AWS)',

    tagline:
      'The official brand website for a farm-to-table natural produce company — built in React and run in production on AWS.',

    description:
      'Naturally Good grows natural vegetables on its own farms and delivers them to homes on subscription. I designed, built and deployed the brand\'s complete official website end to end in React — a reusable component architecture, performance and SEO work, and production releases on AWS EC2 (Amazon Linux + Nginx), including SSL certificate renewals with Certbot.',

    features: [
      {
        icon: 'leaf',
        title: 'Seasonal Produce Catalogue',
        text: '"What\'s in Your Bag?" — a tabbed catalogue of veggies & exotics, staples, salads and greens that shows exactly what arrives in each seasonal bag.',
        image: ngProducts,
      },
      {
        icon: 'layers',
        title: 'Subscription Plans',
        text: 'Plan cards for every household size — 1–3 or 3–5 people — across four wellness tiers, with per-bag pricing, savings and what each plan includes.',
        image: ngSubscription,
      },
      {
        icon: 'shop',
        title: 'Premium Offerings',
        text: 'A second tabbed shelf for premium products — A2 cow ghee, raw honey, microgreens kits and nutrition packs — each with pricing and a direct order action.',
        image: ngPremium,
      },
      {
        icon: 'server',
        title: 'Multi-Page Site, Hosted on AWS',
        text: 'Dedicated pages for the farmers, the farms and the brand story, built from one set of reusable components. Every release ships to AWS EC2 behind Nginx, with SSL certificates renewed through Certbot.',
        image: ngFarmers,
      },
    ],
  },
]
