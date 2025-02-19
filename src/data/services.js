const services = [
    {
        id: 1,
        theme: {
            bgColor: 'brown-dark',
            primary: {
                DEFAULT: 'primary',
                dark: 'primary-dark',
                light: 'primary'
            },
            batchTextColor: 'black',
        },
        // Hero and Card Section
        titleColor: 'green',
        small: 'Personal Care Case Study',
        headline: '363% more views in 90 days',
        leadContent: 'How we transformed a personal care brand’s YouTube channel',
        list: [
            { id: 1, title: 'Lead with Value', lead: 'Hook viewers in the first 10 seconds' },
            { id: 2, title: 'Test & Iterate', lead: 'A/B test thumbnails, titles & video structure' },
            { id: 3, title: 'Diversify Content', lead: 'Don’t just do product demos; add value-driven content' },
            { id: 4, title: 'Move Fast', lead: 'Adjust underperforming videos instead of letting them fade' },
        ],
        // About Section
        about: {
            headline: 'Stuck Growth → Low Engagement → Missed Opportunities',
            lead: 'Despite strong brand recognition, this personal care brand struggled with stagnant YouTube growth. Their content wasn’t reaching new viewers, and revenue wasn’t scaling.'
        },
        // Details Section
        details: {
            headline: 'From Plateau to Breakthrough: The Impact in Numbers',
            headlineHighlightSmall: 'Breakthrough',
            list: [
                {
                    // icon: SampleIcon,
                    headline: '363%',
                    small: 'increase in views',
                    lead: 'Achieved by combining strategic titles, sharper hooks, and consistent design elements that drew clicks'
                },
                {
                    // icon: SampleIcon,
                    headline: '463%',
                    small: 'growth in watch time',
                    lead: 'Minimizing “intro fluff” and highlighting the core value early kept viewers engaged'
                },
                {
                    // icon: SampleIcon,
                    headline: '814%',
                    small: 'hike in YouTube ad revenue',
                    lead: 'Extended watch time + higher CTR + more videos served = substantial monetization uplift'
                },
                {
                    // icon: SampleIcon,
                    headline: '392%',
                    small: 'rise in subscriber count',
                    lead: 'With extended watch times and more viewer conversions, AdSense revenue and potential product leads increased significantly'
                },
            ]
        },
        testimonial: {
            theme: {
                bgClassName: 'bg-blue-2',
                headlineClassName: 'text-white',
                chipClassName: 'bg-info-primary text-white',
                // Card
                cardClassName: {
                    container: 'bg-white',
                    title: 'text-blue',
                },
                sliderClassName: {
                    active: 'bg-info-primary',
                    default: 'bg-white'
                }
            },
        }
    }, {
        id: 2,
        theme: {
            bgColor: 'info-dark',
            primary: {
                DEFAULT: 'info',
                dark: 'info-dark',
                light: 'info'
            },
            batchTextColor: 'info',
        },
        // Hero and Card Section
        titleColor: '#0ABF8F',
        small: 'Healthcare Case Study',
        headline: 'From 86K to 1.4M Views',
        leadContent: 'How We Scaled a Healthcare Brand’s YouTube Presence',
        list: [
            { id: 1, title: '1,500% Growth in Views', lead: 'Monthly views skyrocketed from 86K to 1.4M' },
            { id: 2, title: 'Authority-Driven Content Strategy', lead: 'Increased credibility and audience trust' },
            { id: 3, title: 'Expanded Traffic Beyond Search', lead: 'Boosted suggested & browse feature views' },
            { id: 4, title: 'Higher Engagement & Retention', lead: 'Improved watch time & returning viewers' },
        ],
        // About Section
        about: {
            headline: 'Lack of Engagement in a Competitive Space',
            lead: 'Despite producing high-quality medical content, the brand wasn’t reaching a broad audience. Most traffic came from direct searches, limiting growth potential. Without suggested video traction, their content wasn’t being discovered by new viewers.'
        },
        // Details Section
        details: {
            headline: 'From Low Visibility to a Leading Voice in Healthcare: The Impact in Numbers',
            headlineHighlightSmall: 'Leading Voice',
            list: [
                {
                    // icon: SampleIcon,
                    title: 'Exponential Channel Growth',
                    lead: 'Revived “dead” videos soared to hundreds of thousands of views, proving the long-tail potential of evergreen healthcare topics'
                },
                {
                    // icon: SampleIcon,
                    title: 'Higher Average Views per Viewer',
                    lead: 'Jumped from 1.2 videos per session to nearly 3, indicating that viewers were binge-watching playlists'
                },
                {
                    // icon: SampleIcon,
                    title: 'Brand & Lead Generation Lift',
                    lead: 'Although not formally tracked, the client reported a notable uptick in inquiries for their supplements and wellness products—likely influenced by the channel’s newfound visibility'
                },
                {
                    // icon: SampleIcon,
                    title: 'Monetization Surge',
                    lead: 'With extended watch times and more viewer conversions, AdSense revenue and potential product leads increased significantly'
                },
            ]
        },
        testimonial: {
            theme: {
                bgClassName: 'bg-blue-2',
                headlineClassName: 'text-white',
                chipClassName: 'bg-info-primary text-white',
                // Card
                cardClassName: {
                    container: 'bg-white',
                    title: 'text-blue',
                },
                sliderClassName: {
                    active: 'bg-info-primary',
                    default: 'bg-white'
                }
            },
        }
    },
    {
        id: 3,
        theme: {
            bgColor: 'green-dark',
            primary: {
                DEFAULT: 'green',
                dark: 'green-dark',
                light: 'green'
            },
            batchTextColor: 'white',
        },
        // Hero and Card Section
        titleColor: 'green',
        small: 'Finance Case Study',
        headline: '937% Watch-Time Surge',
        leadContent: 'How We Grew a Niche Finance Channel from 571K to 3.2M Views in Just 4 Months',
        list: [
            { id: 1, title: '450% Growth in Monthly Views', lead: 'From 571.7K to 3.2M views in just four months' },
            { id: 2, title: '6X Revenue Increase', lead: 'Monthly YouTube revenue jumped from $5,359 to $29,081' },
            { id: 3, title: 'Unlocked YouTube’s Browse & Suggested Traffic', lead: 'Expanded beyond search-based growth' },
            { id: 4, title: 'Shorts Strategy That Went Viral', lead: 'Repurposed content drove cross-platform success' },
        ],
        // About Section
        about: {
            headline: 'A Niche Finance Channel Stuck in Stagnation',
            lead: 'Despite an engaged subscriber base, growth had stalled. The channel was overly reliant on search traffic, with little traction from YouTube’s suggested videos or browse features. Expanding reach seemed impossible without sacrificing the brand’s authority.'
        },
        // Details Section
        details: {
            headline: 'Our comprehensive YouTube strategy transformed the channel into a high-growth asset.',
            headlineHighlightSmall: 'high-growth asset.',
            list: [
                {
                    // icon: SampleIcon,
                    title: 'Unlocking a “Hidden” Audience',
                    lead: 'Proved that niche finance channels can achieve substantial new viewership when broader topics and reaction formats are introduced'
                },
                {
                    // icon: SampleIcon,
                    title: '$5,359 to $29,081',
                    lead: 'Revenue skyrocketed—despite the client’s initial lack of focus on profitability'
                },
                {
                    // icon: SampleIcon,
                    title: 'Dynamic Thumbnail & Title Strategy',
                    lead: 'Switching to a broader design/message after three days helped attract new eyes from YouTube’s recommended feed'
                },
                {
                    // icon: SampleIcon,
                    title: 'Cross-Platform Success',
                    lead: 'Repurposed Shorts found viral success on Instagram and TikTok, further boosting brand visibility beyond YouTube'
                },
            ]
        },
        testimonial: {
            theme: {
                bgClassName: 'bg-green-dark',
                headlineClassName: 'text-white',
                chipClassName: 'bg-green text-white',
                // Card
                cardClassName: {
                    container: 'bg-green-light',
                    title: 'text-green-dark-2',
                },
                sliderClassName: {
                    active: 'bg-green',
                    default: 'bg-green-dark-2'
                }
            },
        }
    }
]
export default services;