import { useState } from 'react';
import Navbar from './components/Navbar';
import SurveyForm from './components/SurveyForm';
import SurveyResult from './components/SurveyResult';

function App() {
  // state สำหรับเก็บข้อมูลที่ submit และสถานะการแสดงผล
  const [submittedData, setSubmittedData] = useState(null);

  // ฟังก์ชันรับข้อมูลจาก SurveyForm เมื่อ submit สำเร็จ
  const handleSubmit = (formData) => {
    setSubmittedData(formData);
  };

  // ฟังก์ชันรีเซ็ตเพื่อกลับไปหน้าฟอร์ม
  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <Navbar />
        {/* แสดงผลลัพธ์ถ้ามีข้อมูลที่ submit แล้ว, ถ้าไม่มีให้แสดงฟอร์ม */}
        {submittedData ? (
          <SurveyResult formData={submittedData} onReset={handleReset} />
        ) : (
          <SurveyForm onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}

export default App;
