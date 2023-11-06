import React, { useState } from 'react';
import UnitLabel from './UnitLabel';

interface SpinBoxProps {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
    unit: string;
    onChange?: (value: number) => void;
}

const SpinBox: React.FC<SpinBoxProps> = ({
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    step = 0.01, // Default step changed to accommodate decimals
    unit,
    defaultValue = 0,
    onChange,
}) => {
    const [value, setValue] = useState<number>(defaultValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[120px] p-1"
                style={{ textAlign: 'center', fontSize: 30 }}
            />
            {/* <span className='whitespace-nowrap'> {unit}</span> */}
            <UnitLabel text={unit} />
        </div>
    );
};

export default SpinBox;
