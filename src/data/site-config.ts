export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

// Newsletter subscription has been removed

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Pedro Nascimento de Lima, PhD',
    subtitle: 'Engineer at RAND Corporation and Professor at Pardee RAND Gradutate School',
    description: 'Personal website of Pedro Nascimento de Lima',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Pedro Nascimento de Lima'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Research',
            href: '/research'
        },
        {
            text: 'Talks',
            href: '/talks'
        },
        /*{
            text: 'Blog',
            href: '/blog'
        },*/
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'CV',
            href: '/cv.pdf'
        }
    ],
    footerNavLinks: [
        /*{
            text: 'About',
            href: '/about'
        },*/
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/pedroliman'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/pedro-nascimento-de-lima/'
        },
        {
            text: 'RAND Profile',
            href: 'https://www.rand.org/about/people/n/nascimento_de_lima_pedro.html'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/PedroNdeLima'
        }
    ],
    hero: {
        /*title: 'Hi There!',*/
        text: "I’m an associate engineer at RAND Corporation, a non-partisan research institution dedicated to improving policy through research and analysis. <br /><br />Trained as an engineer and as policy researcher, I work across disciplines to inform our most challenging policy decisions with quantitative models and data - even when uncertainty is deep and consensus seems out of reach.",
        image: {
            src: '/hero.jpeg',
            alt: 'Pedro Nascimento de Lima'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // Newsletter subscription has been removed
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
