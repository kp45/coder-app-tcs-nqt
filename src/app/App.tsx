import { useState } from 'react';
import { BottomNavigation } from './components/BottomNavigation';
import { TabContent } from './components/TabContent';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* iOS Status Bar Spacer with gradient */}
      <div className="h-12 bg-gradient-to-b from-blue-500/5 to-transparent" />

      {/* Main Content Area */}
      <div className="max-w-md mx-auto px-6 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <TabContent activeTab={activeTab} onNavigate={handleNavigate} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
