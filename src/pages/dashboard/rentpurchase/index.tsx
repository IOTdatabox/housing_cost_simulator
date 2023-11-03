// pages/index.tsx
import React from 'react';
import SpinBox from '../../../components/SpinBox';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

const Home: React.FC = () => {
  const handleSpinBoxChange = (value: number) => {
    console.log('SpinBox Value: ', value);
  };

  return (
    <DashboardLayout>
      <h1>Rent Purchase</h1>
      <SpinBox
        min={0}
        max={10}
        step={1}
        unit='%'
        defaultValue={5}
        onChange={handleSpinBoxChange}
      />
    </DashboardLayout>
  );
};

export default Home;
