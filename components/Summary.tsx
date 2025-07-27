
import React, { useMemo } from 'react';
import { MilkEntry } from '../types';

interface SummaryProps {
    entries: MilkEntry[];
}

const Summary: React.FC<SummaryProps> = ({ entries }) => {
    const { totalQuantity, totalCost } = useMemo(() => {
        return entries.reduce(
            (acc, entry) => {
                acc.totalQuantity += entry.quantity;
                acc.totalCost += entry.quantity * entry.pricePerLiter;
                return acc;
            },
            { totalQuantity: 0, totalCost: 0 }
        );
    }, [entries]);

    return (
        <div className="bg-sky-blue-700 text-white p-6 rounded-2xl shadow-lg mt-8 sticky bottom-4">
            <h2 className="text-xl font-bold text-center mb-4 text-sky-blue-100">Total Calculation</h2>
            <div className="flex flex-col sm:flex-row justify-around items-center gap-4">
                <div className="text-center">
                    <p className="text-sm uppercase tracking-wider text-sky-blue-200">Total Milk</p>
                    <p className="text-3xl font-extrabold">{totalQuantity.toFixed(2)} L</p>
                </div>
                <div className="h-12 w-px bg-sky-blue-500 hidden sm:block"></div>
                <div className="text-center">
                    <p className="text-sm uppercase tracking-wider text-sky-blue-200">Total Cost</p>
                    <p className="text-3xl font-extrabold">₹{totalCost.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;
