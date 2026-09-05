import React from 'react';

interface SectionProps {
    id?: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
    return (
        <section id={id} className={`mt-32 md:mt-50 mx-10 max-w-7xl xl:mx-auto ${className}`}>
            {title && <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-text mb-16 md:mb-20">{title}</h2>}
            {children}
        </section>
    );
}
