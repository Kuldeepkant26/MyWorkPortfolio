// ── Mentel — screenshots (bundled by Vite as local assets) ──
import mentelDashboard      from '../My_Projects/Mentel/mentel-dashboard.png'
import mentelSignIn         from '../My_Projects/Mentel/mentel-sign-in.png'
import mentelMessages       from '../My_Projects/Mentel/mentel-messages.png'
import mentelSupport        from '../My_Projects/Mentel/mentel-support-ticketing.png'

export const PROJECTS = [
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
]
