// SpinBox.tsx
import React, { useState } from 'react';
import UnitLabel from './UnitLabel';

interface AgeSpinBoxProps {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
    unit: string;
    onChange?: (value: number) => void;
}

const AgeSpinBox: React.FC<AgeSpinBoxProps> = ({
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    step = 1,
    unit,
    defaultValue = 0,
    onChange,
}) => {
    const [value, setValue] = useState<number>(defaultValue);

    const handleIncrement = () => {
        setValue((prevValue) => {
            const newValue = prevValue + step;
            if (newValue <= max) {
                onChange?.(newValue);
                return newValue;
            }
            return prevValue;
        });
    };

    const handleDecrement = () => {
        setValue((prevValue) => {
            const newValue = prevValue - step;
            if (newValue >= min) {
                onChange?.(newValue);
                return newValue;
            }
            return prevValue;
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);
        if (!isNaN(newValue) && newValue >= min && newValue <= max) {
            setValue(newValue);
            onChange?.(newValue);
        }
    };

    return (
        <div className='flex items-center gap-2'>
            <input
                type="number"
                value={value}
                onChange={handleChange}
                min={min}
                max={max}
                step={step}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60px] p-1"
                style={{ textAlign: 'center', fontSize: 30 }}
            />
            {/* <span className='whitespace-nowrap'> {unit}</span> */}
            <UnitLabel text={unit} />
        </div >
    );
};

export default AgeSpinBox;
