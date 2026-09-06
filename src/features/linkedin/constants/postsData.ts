import type { LinkedInPost } from '../types';

export const linkedInPosts: LinkedInPost[] = [
    {
        id: '1',
        title: 'Thesis "Best Presentation" Award',
        // Example iframe src from a LinkedIn embed (a public placeholder post)
        // You can get this by clicking "Embed this post" on LinkedIn and extracting the src="" URL from the iframe tag.
        embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7436707753022148608?collapsed=1',
        postUrl: 'https://lnkd.in/p/gig4sYsf'
    },
    {
        id: '2',
        title: 'WMG Speakership',
        embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7483542815273013250?collapsed=1',
        postUrl: 'https://lnkd.in/p/gig4sYsf'
    }
];
