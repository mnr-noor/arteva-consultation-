

import Image from "next/image";
import Logo from "../assets/thy.svg"; // Note: adjusted path

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <Image 
        src={Logo} 
        alt="Arteva Logo" 
        width={160} 
        height={160} 
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
         شكراً لتواصلك معنا
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        تم استلام طلبك وسنقوم بالتواصل معك قريباً.
      </p>
      <a 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        العودة إلى الصفحة الرئيسية
      </a>
    </div>
  );
}