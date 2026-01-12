/**
 * SurveyResult Component - หน้าแสดงผลลัพธ์แบบสำรวจ
 */
export default function SurveyResult({ formData, onReset }) {
  return (
    <div className="p-6 space-y-6">
      {/* กรอบสีเขียวทั้งหมด */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-4">
        {/* แถบแสดงข้อความสำเร็จ */}
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg 
                className="w-4 h-4 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>
          <p className="text-green-700 font-medium">ส่งแบบสำรวจสำเร็จ!</p>
        </div>

        {/* แสดงข้อมูลที่กรอก */}
        <div className="space-y-2">
          {/* ชื่อ */}
          <div className="flex items-start gap-3">
            <label className="text-sm font-medium text-gray-700 min-w-[100px]">
              ชื่อ:
            </label>
            <p className="text-gray-900 flex-1">{formData.name}</p>
          </div>

          {/* อีเมล */}
          <div className="flex items-start gap-3">
            <label className="text-sm font-medium text-gray-700 min-w-[100px]">
              อีเมล:
            </label>
            <p className="text-gray-900 flex-1">{formData.email}</p>
          </div>

          {/* หนังที่เลือก */}
          <div className="flex items-start gap-3">
            <label className="text-sm font-medium text-gray-700 min-w-[100px]">
              หนังที่เลือก:
            </label>
            <p className="text-purple-600 font-medium flex-1">{formData.movie}</p>
          </div>

          {/* เส้นขีดกั้นระหว่างหนังที่เลือกกับความคิดเห็น */}
          {formData.comments && <hr className="border-gray-300" />}

          {/* ความคิดเห็น (ถ้ามี) */}
          {formData.comments && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ความคิดเห็น:
              </label>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="text-gray-900 whitespace-pre-wrap">{formData.comments}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 -mx-6" />

      {/* ปุ่มทำแบบสำรวจใหม่ */}
      <div className="pt-1">
        <button
          type="button"
          onClick={onReset}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 text-white rounded-lg text-base font-medium hover:bg-gray-900 transition-colors"
        >
          <svg 
            className="w-5 h-5" 
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
          ทำแบบสำรวจใหม่
        </button>
      </div>
    </div>
  );
}

