import { useEffect } from 'react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
    cvLink: string;
}

export function ResumeModal({ isOpen, onClose, cvLink }: ResumeModalProps) {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Use /preview for clean Google Docs embedding if an edit link is supplied
    const embedUrl = cvLink.replace(/\/edit(\?.*)?$/, '/preview');

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 id="resume-modal-title" className="text-xl md:text-2xl font-bold text-gray-900">Curriculum Vitae</h2>
                    <div className="flex items-center gap-3">
                        <a 
                            href={cvLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors underline flex items-center gap-1"
                        >
                            Open in New Tab
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        <button 
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-900 transition-colors p-1 rounded hover:bg-gray-100 cursor-pointer"
                            aria-label="Close modal"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                {/* Iframe Viewer */}
                <div className="flex-1 bg-gray-100 p-2">
                    <iframe 
                        id="resume-iframe"
                        src={embedUrl} 
                        className="w-full h-full rounded border border-gray-300"
                        title="Resume Document"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

