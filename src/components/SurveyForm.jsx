import { movies } from '../data/movies';
import FormButtons from './FormButtons';
import { useState } from 'react';

export default function SurveyForm({ onSubmit }) {
  //สร้าง state สำหรับกรอกข้อมูล ต่างๆ ในฟอร์มไปเก็บในตัวแปร
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [movie, setMovie] = useState('');
  const [comments, setComments] = useState('');

  //สร้าง state สำหรับเช็ค error ต่างๆ
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [movieError, setMovieError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false); // ติดตามว่าผู้ใช้เคยพิมพ์อีเมลหรือยัง


  // ตั้งค่าปุ่ม reset พอกดแล้วจะรีเซ็ตค่าในฟอร์มให้กลับค่าเดิม
  const handleReset = () => {
    setName('');
    setEmail('');
    setMovie('');
    setComments('');
    setNameError('');
    setEmailError('');
    setMovieError('');
    setEmailTouched(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    
    // ตรวจสอบ name หากว่างเปล่า
    if (!name.trim()) {
      setNameError('โปรดใส่ชื่อของคุณ');
      hasError = true;
    } else {
      setNameError(''); // ล้าง error ถ้ากรอกชื่อแล้ว
    }
    
    // ตรวจสอบ email หากว่างเปล่า
    if (!email.trim()) {
      setEmailError('โปรดใส่อีเมลของคุณ');
      hasError = true;
    } else {
      // ตรวจสอบรูปแบบ email ด้วย regex 
      // รูปแบบที่ถูกต้อง: example@domain.com
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        setEmailError('รูปแบบอีเมลไม่ถูกต้อง');
        hasError = true;
      } else {
        setEmailError(''); // ล้าง error ถ้ารูปแบบอีเมลถูกต้อง
      }
    }
    
    // ตรวจสอบว่ามีการเลือกหนังหรือไม่
    if (!movie.trim()) {
      setMovieError('กรุณาเลือกหนังที่คุณชอบ');
      hasError = true;
    } else {
      setMovieError(''); // ล้าง error ถ้าผู้ใช้เลือกหนังแล้ว
    }
    
    // หากมี error อย่างน้อย 1 อย่าง ให้หยุดการ submit และไม่ส่งข้อมูล
    if (hasError) {
      return;
    }

    // ส่งข้อมูลไปยัง parent component (App.jsx) เพื่อแสดงผลลัพธ์
    onSubmit({
      name,
      email,
      movie,
      comments
    });
  };

  return (
    // novaildate เปลี่่ยนจากการแจ้งเตือนเป็นข้อความ
    <form className="p-6 space-y-6" onSubmit={handleSubmit} noValidate>
      {/* //Name Field ชื่อฟอร์ม */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ชื่อ <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="กรุณากรอกชื่อของคุณ"
          className={`w-full max-w-sm px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            // ถ้ามี error (nameError ไม่ว่าง) ให้แสดง border สีแดง
            // ถ้าไม่มี error ให้แสดง border สีเทา
            nameError 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300 hover:border-gray-100 focus:ring-gray-300 focus:border-gray-300'
          }`}
          value={name}
          // เมื่อผู้ใช้พิมพ์ข้อความ:
          // 1. อัปเดต state name ด้วยค่าที่พิมพ์
          // 2. ถ้ามี error อยู่ให้ล้าง error ออก (setNameError('')) เพื่อให้กรอบสีแดงหายไป
          onChange={(e) => {
            setName(e.target.value);
            if (nameError) {
              setNameError('');
            }
          }}
        />
        {nameError && (
          <p className="text-red-500 text-sm mt-1">{nameError}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          อีเมล <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="example@email.com"
          className={`w-full max-w-sm px-4 py-2  border rounded-lg focus:outline-none focus:ring-2 ${
            // ถ้ามี error (emailError ไม่ว่าง) ให้แสดง border สีแดง
            // ถ้าไม่มี error ให้แสดง border สีเทา
            emailError 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300 hover:border-gray-300 focus:ring-gray-300 focus:border-gray-300'
          }`}
          value={email}
          // เมื่อผู้ใช้พิมพ์อีเมล:
          // 1. อัปเดต state email ด้วยค่าที่พิมพ์
          // 2. ตรวจสอบรูปแบบอีเมลแบบ real-time ถ้าผู้ใช้เคยพิมพ์แล้ว
          onChange={(e) => {
            const emailValue = e.target.value;
            setEmail(emailValue);
            setEmailTouched(true);
            
            // ตรวจสอบรูปแบบอีเมลแบบ real-time
            if (emailValue.trim()) {
              const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              if (!emailRegex.test(emailValue)) {
                setEmailError('รูปแบบอีเมลไม่ถูกต้อง');
              } else {
                setEmailError('');
              }
            } else {
              setEmailError('');
            }
          }}
          onBlur={() => {
            // เมื่อ focus ออกจาก input ให้ตรวจสอบอีกครั้ง
            if (email.trim()) {
              const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              if (!emailRegex.test(email)) {
                setEmailError('รูปแบบอีเมลไม่ถูกต้อง');
              }
            }
          }}
        />
        {emailError && (
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
      </div>

      {/* Movie Selection */}
      {/* //แยกข้อมูลไปเป็นไฟล์ data/movies.js และนำมา map */}
      <div>
        <div className="block text-sm font-medium text-gray-700 mb-2">
          เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
        </div>
        {/* แสดง border สีแดงรอบพื้นที่เลือกหนังเมื่อมี error (movieError ไม่ว่าง) */}
        {/* ถ้า movieError มีค่า จะแสดง border-red-300, ถ้าไม่มีจะแสดง border-transparent */}
        <div className={`space-y-2 p-3 rounded-lg border-2 ${movieError ? 'border-red-300' : 'border-transparent'}`}>
          {movies.map((movieItem) => (
            <label
              key={movieItem.title}
              className="flex items-center p-2 mt-[-5px] rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <input
                type="radio"
                name="movie"
                value={movieItem.title}
                className="mr-3 w-4 h-4 text-purple-600 focus:ring-purple-500"
                // เช็คว่าติ๊กหนังที่เลือกไปแล้วหรือยัง ถ้า state movie กับ movieItem.title
                // ถ้าเท่ากัน radio button จะถูกเลือก checked=true
                checked={movie === movieItem.title}
                // เมื่อติ๊ก radio button ให้:
                // 1. อัปเดต state movie เป็นหนังที่เลือก (e.target.value = movieItem.title)
                // 2. ถ้ามี error อยู่ให้ล้าง error ออก (setMovieError('')) เพื่อให้กรอบสีแดงหายไป
                onChange={(e) => {
                  setMovie(e.target.value);
                  if (movieError) {
                    setMovieError('');
                  }
                }}
              />
              <div>
                <span className="font-medium text-gray-900">{movieItem.title}</span>
                <span className="text-sm text-gray-600 ml-2">
                  ({movieItem.year}) <br />Director: {movieItem.director}
                </span> 
              </div>
            </label>
          ))}
        </div>
        {/* //ถ้าเกิด error ให้แสดงข้อความ กรุณาเลือกหนังที่คุณชอบ */}
        {movieError && (
          <p className="text-red-500 text-sm mt-1">{movieError}</p>
        )}
      </div>

      {/* Comments Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ความคิดเห็นเกี่ยวกับหนัง
        </label>
        <textarea
          placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
          rows={4}
          className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 hover:border-gray-400 focus:ring-gray-300 focus:border-gray-300 resize-y"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      {/* Divider */}
      <hr className="border-gray-300 -mx-6" />
      {/* //แยก ปุ่ม ส่งและรีเซ็ต ไปเป็นไฟล์ components/FormButtons.jsx และส่งค่า props ไป */}
      {/* Buttons */}
      <FormButtons onReset={handleReset} />
    </form>
  );
}

