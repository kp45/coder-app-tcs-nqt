import { House, BookOpen, Download, CreditCard, User } from 'lucide-react';
import { motion } from 'motion/react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'materials', label: 'Materials', icon: BookOpen },
  { id: 'bundle', label: 'Bundle', icon: Download },
  { id: 'payment', label: 'Payment', icon: CreditCard },
  { id: 'profile', label: 'Profile', icon: User },
];

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg">
      <div className="max-w-md mx-auto px-2 py-2">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="relative flex flex-col items-center py-2 px-3 min-w-[60px]"
              >
                <motion.div
                  className="relative"
                  whileTap={{ scale: 0.85 }}
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`transition-all duration-300 ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-600"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                </motion.div>
                <span
                  className={`text-[10px] mt-1.5 transition-all duration-300 font-medium ${
                    isActive ? 'text-blue-600 scale-105' : 'text-gray-500 scale-100'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {/* Safe area padding for iOS devices */}
      <div className="h-safe-area-inset-bottom bg-white" />
    </div>
  );
}
