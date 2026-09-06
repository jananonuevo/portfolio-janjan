interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
    cvLink: string;
}

export function ResumeModal({ isOpen, onClose, cvLink }: ResumeModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">This is Me! This is Real!</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                        aria-label="Close modal"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                {/* Iframe Viewer */}
                <div className="flex-1 bg-gray-100 p-2">
                    <iframe 
                        id="resume-iframe"
                        src={cvLink} 
                        className="w-full h-full rounded border border-gray-300"
                        title="Resume Document"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
