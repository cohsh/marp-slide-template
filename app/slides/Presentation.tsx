'use client';

import React, { useEffect, useRef } from 'react';

interface PresentationProps {
    src: string;
}

const Presentation: React.FC<PresentationProps> = ({ src }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.src = src;
        }
    }, [src]);

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <iframe
                ref={iframeRef}
                style={{ border: 'none', height: '100%', width: '100%' }}
                title="Marp Presentation"
            />
        </div>
    );
};

export default Presentation;