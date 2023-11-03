// components/Label.tsx

import React from 'react';

type LabelProps = {
  text: string; // This is the content of the label that can be passed by the parent component
};

const ExplainLabel: React.FC<LabelProps> = ({ text }) => {
  return <label className='text-[20px]'>{text}</label>;
};

export default ExplainLabel;
