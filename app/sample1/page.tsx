'use client';

import React from 'react';
import Presentation from './Presentation';

const SamplePage: React.FC = () => {
    const presentationSrc = "/sample1.html";

    return (
      <Presentation src={presentationSrc} />
    );
};

export default SamplePage;