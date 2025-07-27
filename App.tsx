
import React, { useMemo } from 'react';
import { MilkEntry } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import EntryForm from './components/EntryForm';
import HistoryList from './components/HistoryList';
import Summary from './components/Summary';

const App: React.FC = () => {
    const [entries, setEntries] = useLocalStorage<MilkEntry[]>('milkEntries', []);

    const addEntry = (newEntryData: Omit<MilkEntry, 'id'>) => {
        const newEntry: MilkEntry = {
            id: new Date().getTime().toString(),
            ...newEntryData
        };
        // Add new entry to the list. Sorting is handled for display.
        setEntries([newEntry, ...entries]);
    };

    const deleteEntry = (id: string) => {
        setEntries(entries.filter(entry => entry.id !== id));
    };

    // Sort entries by date for display, newest first.
    const sortedEntries = useMemo(() => 
        [...entries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    , [entries]);

    return (
        <div className="min-h-screen bg-sky-blue-50 font-sans">
            <Header />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    <EntryForm addEntry={addEntry} />
                    <HistoryList entries={sortedEntries} deleteEntry={deleteEntry} />
                    {entries.length > 0 && <Summary entries={entries} />}
                </div>
            </main>
             <footer className="text-center py-4 text-sm text-sky-blue-500">
                <p>Built with ❤️ for daily tracking.</p>
            </footer>
        </div>
    );
};

export default App;
