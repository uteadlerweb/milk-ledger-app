
import React, { useState } from 'react';
import { MilkEntry } from '../types';

interface EntryFormProps {
    addEntry: (entry: Omit<MilkEntry, 'id'>) => void;
}

const EntryForm: React.FC<EntryFormProps> = ({ addEntry }) => {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [quantity, setQuantity] = useState('');
    const [pricePerLiter, setPricePerLiter] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (quantity && pricePerLiter && date) {
            addEntry({
                date,
                quantity: parseFloat(quantity),
                pricePerLiter: parseFloat(pricePerLiter),
            });
            setQuantity('');
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-sky-blue-800 mb-6 text-center">Add New Purchase</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                    <label htmlFor="date" className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-sky-blue-600">Date</label>
                    <input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-sky-blue-200 rounded-lg focus:ring-2 focus:ring-sky-blue-500 focus:border-sky-blue-500 outline-none transition-colors"
                        required
                    />
                </div>
                <div className="relative">
                     <label htmlFor="quantity" className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-sky-blue-600">Milk Quantity (Liters)</label>
                    <input
                        id="quantity"
                        type="number"
                        step="0.1"
                        placeholder="e.g., 1.5"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-sky-blue-200 rounded-lg focus:ring-2 focus:ring-sky-blue-500 focus:border-sky-blue-500 outline-none transition-colors"
                        required
                    />
                </div>
                <div className="relative">
                     <label htmlFor="price" className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-sky-blue-600">Price per Liter (₹)</label>
                    <input
                        id="price"
                        type="number"
                        step="0.01"
                        placeholder="e.g., 55"
                        value={pricePerLiter}
                        onChange={(e) => setPricePerLiter(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-sky-blue-200 rounded-lg focus:ring-2 focus:ring-sky-blue-500 focus:border-sky-blue-500 outline-none transition-colors"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-sky-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-blue-700 focus:outline-none focus:ring-4 focus:ring-sky-blue-300 transition-transform transform hover:scale-105"
                >
                    Add Entry
                </button>
            </form>
        </div>
    );
};

export default EntryForm;
