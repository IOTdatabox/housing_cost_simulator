// components/Label.tsx

import React from 'react';

type LabelProps = {
  text: string; // This is the content of the label that can be passed by the parent component
};

const UnitLabel: React.FC<LabelProps> = ({ text }) => {
  return <label className='whitespace-nowrap text-[20px] w-10'>{text}</label>;
};

export default UnitLabel;
