
import React from 'react';

const MilkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.98 9.77a2.5 2.5 0 0 0-2.3-2.61l-.6-3.48A2.5 2.5 0 0 0 14.63 2H9.37a2.5 2.5 0 0 0-2.45 1.68l-.6 3.48a2.5 2.5 0 0 0-2.3 2.61L4 18.27a2.5 2.5 0 0 0 2.48 2.73h11.04a2.5 2.5 0 0 0 2.48-2.73l-.02-8.5zm-5.46 8.5H9.48a.5.5 0 1 1 0-1h5.04a.5.5 0 1 1 0 1zm1.2-3.37a2 2 0 0 1-3.46 0l-.13-.23a.5.5 0 0 1 .43-.7h3.06a.5.5 0 0 1 .43.7l-.13.23zM10.1 5.37l.3-1.74h3.2l.3 1.74a2.5 2.5 0 0 0-3.8 0z" />
    </svg>
);

const Header: React.FC = () => {
    return (
        <header className="bg-sky-blue-600 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex items-center justify-center gap-4">
                <MilkIcon />
                <h1 className="text-3xl font-bold text-white tracking-tight">
                    Milk Ledger
                </h1>
            </div>
        </header>
    );
};

export default Header;
