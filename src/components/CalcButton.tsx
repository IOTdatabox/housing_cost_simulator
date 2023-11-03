import Link from 'next/link';
import React from 'react';

const CalcButton = ({
    children,
    onClick,
    // href,
}: {
    children: React.ReactNode,
    onClick: any
    // href: string,
}) => {
    return (
        <button className='px-[57px] sm:px-[37px] py-[5px] bg-primary rounded-[5px]' onClick={onClick}>
            <p className='text-primaryButtonTextColor text-bigPrimaryButtonTextSize sm:text-[20px]'>{children}</p>
        </button>
    );
};

CalcButton.displayName = 'CalcButton';

export { CalcButton };
