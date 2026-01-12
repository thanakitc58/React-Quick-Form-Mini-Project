/**
 * Navbar Component - Header ของแอป
 */
export default function Navbar() {
  return (
    <header className="bg-linear-to-r from-purple-600 to-blue-600 px-6 py-4">
      <div className="flex items-center gap-3">
        <svg 
          className="w-8 h-8 text-white" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          viewBox="0 0 24 24"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M7 3v18"></path>
          <path d="M3 7.5h4"></path>
          <path d="M3 12h18"></path>
          <path d="M3 16.5h4"></path>
          <path d="M17 3v18"></path>
          <path d="M17 7.5h4"></path>
          <path d="M17 16.5h4"></path>
        </svg>
        <h1 className="text-2xl font-bold text-white">Movie Survey</h1>
      </div>
    </header>
  );
}

