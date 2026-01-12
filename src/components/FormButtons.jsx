/**
 * FormButtons Component - ปุ่ม Reset และ Submit
 */
export default function FormButtons({ onReset, onSubmit }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-[-20px] max-w-sm">
      <button
        type="button"
        onClick={onReset}
        className="flex items-center justify-center gap-2 w-full sm:w-auto sm:flex-1 px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors"
      >
        <svg 
          className="w-4 h-4 sm:w-5 sm:h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
          />
        </svg>
        รีเซ็ต
      </button>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 w-full sm:w-auto sm:flex-1 px-3 py-2.5 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm sm:text-base font-medium hover:from-purple-700 hover:to-blue-700 transition-colors"
      >
        <svg 
          className="w-4 h-4 sm:w-5 sm:h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
          />
        </svg>
        ส่งแบบสำรวจ
      </button>
    </div>
  );
}

