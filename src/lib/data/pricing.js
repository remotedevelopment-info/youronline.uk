export const pricingPlans = [
    {
        title: "On-Demand Expertise as you need it",
        link: "/product/hourly",
        price: 90,
        period: "hour",
        description: "Expert assistance when you need it most. Perfect for targeted problems and team training.",
        features: [
            { name: "WhatsApp support", included: true },
            { name: "Priority attention", included: true },
            { name: "Rapid response times", included: true },
            { name: "No long-term commitment", included: true },
            { name: "Knowledge transfer to your team", included: true },
            { name: "AI-accelerated frontend programming", included: true },
            { name: "Expert consultation and implementation", included: true },
            { name: "Backend system development", included: false },
            { name: "Continuous development", included: false },
            { name: "AI Agent development", included: false },
            { name: "Hosting and infrastructure", included: false },
            { name: "Team training on AI development", included: false },
        ],
        paypalId: "hourly-expertise-btn"
    },
    {
        title: "Rapid Development Sprints",
        link: "/product/weekly",
        price: 2400,
        period: "week",
        isPopular: true,
        description: `Focused development blocks with rapid iteration. 
            Ideal for websites builds, integrations, 
            features and product customisation.`,
        features: [
            { name: "WhatsApp support", included: true },
            { name: "CMS site integration option", included: true },
            { name: "Frontend/UI development", included: true },
            { name: "Backend system development", included: true },
            { name: "Product integrations with customisation", included: true },
            { name: "AI Accelerated Development", included: true },
            { name: "Planning and review sessions", included: true },
            { name: "Daily standup meetings available", included: true },
            { name: "Team training/documentation", included: true },
            { name: "Staging environment with subdomain", included: true },
            { name: "Product strategy consultation", included: true },
            { name: "AI Agent setup and configuration", included: true },
            { name: "Continuous deployment to staging", included: true },
            { name: "API development and integration", included: true },
            { name: "Dedicated weekly development blocks", included: true },
            { name: "Production Hosting", included: false },
            { name: "Progress dashboard access", included: false },
            { name: "Backend system architecture", included: false },
            { name: "Enterprise infrastructure", included: false },
            { name: "Custom AI Agent development", included: false },
        ],
        paypalId: "weekly-sprint-btn"
    },
    {
        title: "Fullstack Development and Engineering",
        link: "/product/monthly",
        price: 8000,
        period: "month",
        description: `Your dedicated development team. 
            For complex products and enterprise solutions.`,
        features: [
            { name: "On-call support", included: true },
            { name: "WhatsApp access for users", included: true },
            { name: "CMS site integration option", included: true },
            { name: "Enterprise infrastructure", included: true },
            { name: "Custom AI Agent development", included: true },
            { name: "Backend system architecture", included: true },
            { name: "Knowledge transfer sessions", included: true },
            { name: "Dedicated development team", included: true },
            { name: "Team training/documentation", included: true },
            { name: "Progress dashboard access", included: true },
            { name: "System architecture and planning", included: true },
            { name: "API development and integration", included: true },
            { name: "Product strategy consultation", included: true },
            { name: "Daily standups and weekly reviews", included: true },
            { name: "Continuous deployment to staging", included: true },
            { name: "Full backend/frontend development", included: true },
            { name: "AI Development Strategy and Team Training", included: true },
            { name: "Production Hosting Software Engineering", included: true },
            { name: "Product integrations with customisation", included: true },
            { name: "Rapid progress credit for unused time", included: true },
            { name: "Enterprise hosting planning and implementation", included: true },
        ],
        paypalId: "monthly-partnership-btn"
    }
];

export const serviceDetails = {
    hourly: {
        title: "On-Demand Expertise",
        subtitle: "Expert assistance when you need it most",
        description: "Get immediate access to our team of AI-assisted development experts without committing to a long-term contract. Perfect for solving specific challenges, training your team, or getting unstuck on technical problems.",
        useCases: [
            "Solve complex technical problems",
            "Train your team on AI-assisted development",
            "Code reviews and architecture consultation",
            "Emergency technical support"
        ],
        process: [
            "Book a time slot through our calendar",
            "We'll confirm and send a meeting link",
            "Work directly with our experts via screen sharing",
            "Receive follow-up documentation of solutions"
        ]
    },
    weekly: {
        title: "Weekly Development Sprints",
        subtitle: "Focused development with measurable progress",
        description: "Dedicated weekly development sprints that deliver tangible results. We handle the hosting, provide a staging environment, and meet daily to ensure rapid progress on your priorities.",
        useCases: [
            "Build new features for your product",
            "Create an MVP for your startup",
            "Implement AI capabilities in your application",
            "Overhaul existing websites and applications"
        ],
        process: [
            "Monday planning session to set weekly goals",
            "Daily standups to track progress",
            "Continuous deployment to your staging environment",
            "Friday demo and planning for next week"
        ]
    },
    monthly: {
        title: "Continuous Development Partnership",
        subtitle: "Your dedicated technical team",
        description: "A full-service development partnership for businesses that need ongoing technical expertise. We become an extension of your team, handling everything from architecture to implementation while training your internal resources.",
        useCases: [
            "Build complex products and platforms",
            "Serve as technical co-founders for startups",
            "Implement enterprise-grade solutions",
            "Develop and maintain custom AI systems"
        ],
        process: [
            "Initial discovery and architecture planning",
            "Dedicated team assignment",
            "Daily standups and weekly reviews",
            "Monthly strategy sessions and roadmap updates"
        ]
    }
};