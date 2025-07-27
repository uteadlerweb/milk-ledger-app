import React, { useState } from 'react';
import { MilkEntry } from '../types';

interface HistoryListProps {
    entries: MilkEntry[];
    deleteEntry: (id: string) => void;
}

const EmptyState = () => (
    <div className="text-center py-16 px-6 bg-sky-blue-100 rounded-2xl">
        <div className="mx-auto h-16 w-16 text-sky-blue-300">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.353-.026.69-.026 1.032 0 1.13.094 1.976 1.057 1.976 2.192V7.5M12 18.75v-5.25m-3.375 5.25v-5.25m6.75 5.25v-5.25M3 13.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h18a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5H3z" />
            </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-sky-blue-800">No entries yet</h3>
        <p className="mt-2 text-sm text-sky-blue-700">Add a new purchase using the form above to get started.</p>
    </div>
);


const HistoryList: React.FC<HistoryListProps> = ({ entries, deleteEntry }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
             <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 sm:p-6 text-left"
                aria-expanded={isOpen}
                aria-controls="history-list-container"
            >
                <h2 className="text-2xl font-bold text-sky-blue-800">Purchase History</h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 text-sky-blue-600 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                id="history-list-container"
                className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transitionProperty: 'max-height, opacity' }}
            >
               <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    {entries.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <div className="space-y-4">
                            {entries.map((entry) => (
                                <div key={entry.id} className="bg-sky-blue-50 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-shadow hover:shadow-lg">
                                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sky-blue-900">
                                        <div>
                                            <p className="text-sm font-medium text-sky-blue-600">Date</p>
                                            <p className="font-semibold leading-tight">{new Date(entry.date + 'T00:00:00').toLocaleDateString('en-IN')}</p>
                                            <p className="text-sm text-sky-blue-800">{new Date(entry.date + 'T00:00:00').toLocaleDateString('hi-IN', { weekday: 'long' })}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-sky-blue-600">Quantity</p>
                                            <p className="font-semibold">{entry.quantity.toFixed(2)} L</p>
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <p className="text-sm font-medium text-sky-blue-600">Total Cost</p>
                                            <p className="font-bold text-lg text-sky-blue-800">
                                                ₹{(entry.quantity * entry.pricePerLiter).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <button
                                            onClick={() => deleteEntry(entry.id)}
                                            className="p-2 rounded-full text-red-500 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
                                            aria-label="Delete entry"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HistoryList;