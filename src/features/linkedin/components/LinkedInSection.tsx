import { motion } from 'framer-motion';
import { linkedInPosts } from '../constants/postsData';
import { Button } from '../../base/components/ui/Button';

export function LinkedInSection() {
    return (
        <section id="posts" className="scroll-mt-32 mt-32 md:mt-50 mx-6 sm:mx-10 max-w-7xl xl:mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">LinkedIn Posts</h2>
            <p className="text-lg text-gray-600 mb-12 md:mb-16">
                Highlights, speaking engagements, and updates from my professional journey.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                {linkedInPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full flex flex-col justify-between bg-white rounded-2xl p-5 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                    >
                        {/* Card Header: Badge, Title & Direct Link */}
                        <div className="w-full flex items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-gray-100">
                            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0a66c2]/10 text-[#0a66c2] flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                    </svg>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-0.5">LinkedIn Post</span>
                                    <h3 className="text-xs min-[400px]:text-sm sm:text-base md:text-lg xl:text-xl font-bold text-gray-900 leading-snug break-words" title={post.title}>
                                        {post.title}
                                    </h3>
                                </div>
                            </div>

                            <a 
                                href={post.postUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="shrink-0"
                            >
                                <Button 
                                    variant="outline" 
                                    className="text-xs sm:text-sm px-2.5 sm:px-4 py-1.5 sm:py-2 me-0 mb-0 flex items-center gap-1 sm:gap-1.5 hover:border-[#0a66c2] hover:text-[#0a66c2]"
                                >
                                    <span>View Post</span>
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </Button>
                            </a>
                        </div>

                        {/* Card Body: Centered Embed Frame */}
                        <div className="w-full flex-1 flex justify-center items-center my-6">
                            <div className="w-full max-w-[504px] overflow-hidden rounded-xl border border-gray-200/80 bg-neutral-50 shadow-inner flex justify-center">
                                <iframe 
                                    src={post.embedUrl} 
                                    height="552" 
                                    width="504" 
                                    frameBorder="0" 
                                    allowFullScreen={true} 
                                    title={post.title}
                                    className="w-full max-w-full rounded-xl"
                                ></iframe>
                            </div>
                        </div>

                        {/* Card Footer: Action Bar */}
                        <div className="w-full pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <span className="text-xs sm:text-sm text-gray-500">
                                View full post and interactions on LinkedIn
                            </span>
                            <a 
                                href={post.postUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-full sm:w-auto"
                            >
                                <Button 
                                    variant="primary" 
                                    className="w-full sm:w-auto text-sm px-5 py-2.5 me-0 mb-0 flex items-center justify-center gap-2"
                                >
                                    <span>Read More</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Button>
                            </a>
                        </div>
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
