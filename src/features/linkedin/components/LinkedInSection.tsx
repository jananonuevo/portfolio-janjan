import { motion } from 'framer-motion';
import { linkedInPosts } from '../constants/postsData';
import { Button } from '../../base/components/ui/Button';

export function LinkedInSection() {
    return (
        <section id="posts" className="scroll-mt-32 mt-32 md:mt-50 mx-10 max-w-7xl xl:mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-16 md:mb-20">LinkedIn Posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {linkedInPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full flex flex-col items-center bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100"
                    >
                        <h1 className="my-5 text-center text-xl font-bold text-gray-900 mb-2">{post.title}</h1>
                        
                        <iframe 
                            src={post.embedUrl} 
                            height="552" 
                            width="504" 
                            frameBorder="0" 
                            allowFullScreen={true} 
                            title={post.title}
                            className="max-w-full rounded-md mt-5"
                        ></iframe>

                        <a href={post.postUrl} target="_blank" rel="noopener noreferrer" className="mb-4">
                            <Button variant="primary" className="text-sm px-5 py-2">
                                Read More
                            </Button>
                        </a>
                    </motion.div>
                ))}
            </div>

            {linkedInPosts.length === 0 && (
                <div className="text-center text-gray-500 mt-20">
                    No posts available at the moment.
                </div>
            )}
        </section>
    );
}
