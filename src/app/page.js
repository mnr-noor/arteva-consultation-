"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from './assets/logo.png'
import Bg from './assets/bg.png'
import { X, Menu, Globe, Palette, Code, Smartphone, Zap, Users, Award } from 'lucide-react';

export default function ArtevaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    serviceType: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }
    console.log('Form submitted:', formData);
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً');
    setShowConsultationForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      serviceType: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image 
                  src={Logo} 
                  alt="Arteva Logo" 
                  width={100} 
                  height={100}
                  // className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">الرئيسية</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">من نحن</a>
                <a href="#services" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">خدماتنا</a>
                <button 
                  onClick={() => setShowConsultationForm(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all"
                >
                  احجز استشارة
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md border-t">
              <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">الرئيسية</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">من نحن</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">خدماتنا</a>
              <button 
                onClick={() => setShowConsultationForm(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium"
              >
                احجز استشارة
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - With Background Image */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={Bg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 z-10"></div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            نحول أفكارك إلى
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">واقع رقمي</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            نصمم ونطور مواقع الويب والتطبيقات ونبني الهوية البصرية الكاملة لعلامتك التجارية
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setShowConsultationForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              ابدأ مشروعك الآن
            </button>
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-all backdrop-blur-sm"
            >
              اكتشف خدماتنا
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              لماذا تختار
              <span className="text-blue-600"> ?Arteva </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن متخصصون في تحويل رؤيتك إلى حلول رقمية متكاملة تنمي عملك وتميزك عن المنافسين
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">سرعة في التنفيذ</h3>
              <p className="text-gray-600">
                نلتزم بالمواعيد المحددة ونسلم مشاريعك في الوقت المحدد بأعلى جودة ممكنة
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">فريق محترف</h3>
              <p className="text-gray-600">
                فريق من المطورين والمصممين ذوي الخبرة الواسعة في أحدث التقنيات والاتجاهات
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">جودة عالية</h3>
              <p className="text-gray-600">
                نضمن لك جودة استثنائية في كل مشروع مع دعم فني متواصل بعد التسليم
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              خدماتنا الشاملة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              من التصميم إلى البرمجة، نقدم كل ما تحتاجه لإنشاء حضور رقمي قوي ومؤثر
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Web Development */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Globe className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">تطوير المواقع الإلكترونية</h3>
                  <p className="text-gray-600 mb-6">
                    نصمم ونطور مواقع ويب احترافية وسريعة ومحسّنة لجميع الأجهزة لتعزز من حضورك الرقمي
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                      مواقع تجارية
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                      متاجر إلكترونية
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                      مواقع شخصية
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                      أنظمة إدارة
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Apps
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">تطبيقات الهاتف المحمول</h3>
                  <p className="text-gray-600 mb-6">
                    تطبيقات جوال متطورة لنظامي iOS و Android بتصميم عصري وأداء فائق لتصل لعملائك في كل مكان
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full ml-2"></div>
                      تطبيقات iOS
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full ml-2"></div>
                      تطبيقات Android
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full ml-2"></div>
                      تطبيقات هجينة
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full ml-2"></div>
                      تطبيقات تجارية
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Branding & Design */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 lg:col-span-2">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Palette className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">الهوية البصرية والتصميم الشامل</h3>
                  <p className="text-gray-600 mb-6">
                    نصمم هوية بصرية متكاملة ومميزة لعلامتك التجارية تشمل كل ما تحتاجه من مواد تسويقية ورقمية
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full ml-2"></div>
                      تصميم الشعارات
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full ml-2"></div>
                      الهوية البصرية
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full ml-2"></div>
                      كروت العمل
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full ml-2"></div>
                      تصميم المنشورات
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full ml-2"></div>
                      UI/UX Design
                    </div>
                    {/* <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full ml-2"></div>
                      المواد الطباعية
                    </div> */}
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full ml-2"></div>
                      تصميم الإعلانات
                    </div>
                    {/* <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full ml-2"></div>
                      حقائب العلامة التجارية
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            هل أنت مستعد لإطلاق مشروعك؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            دعنا نحول أفكارك إلى حقيقة رقمية مبهرة. احجز استشارتك المجانية الآن ولنبدأ رحلة نجاحك
          </p>
          <button 
            onClick={() => setShowConsultationForm(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            احجز استشارة مجانية الآن
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">أرتيفا</h3>
              <p className="text-gray-400 mb-6 max-w-sm">
                شريكك الموثوق في التحول الرقمي. نحول أفكارك إلى واقع رقمي يحقق أهدافك ويميزك عن المنافسين.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">خدماتنا</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">تطوير المواقع الإلكترونية</li>
                {/* <li className="hover:text-white transition-colors cursor-pointer">تطبيقات الهاتف المحمول</li> */}
                <li className="hover:text-white transition-colors cursor-pointer">الهوية البصرية والتصميم</li>
                <li className="hover:text-white transition-colors cursor-pointer">UI/UX Design</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">تواصل معنا</h4>
              <div className="space-y-3 text-gray-400">
                <p>artevapro@gmail.com</p>
                <p>social: arteva.off</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 جميع الحقوق محفوظة لـ Arteva</p>
          </div>
        </div>
      </footer>

      {/* Enhanced Consultation Form Modal with Navy Background */}
      {showConsultationForm && (
        <div className="fixed inset-0 z-50">
          {/* Enhanced Blur Background */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setShowConsultationForm(false)}
          ></div>
          
          {/* Form Container */}
          <div className="relative  flex items-center justify-center p-4 overflow-y-auto min-h-screen">
            <div className="w-full max-w-lg overflow-y-auto min-h-screen ">
              {/* Navy Form with Glass Effect */}
              <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-3xl p-8 shadow-2xl border border-white/10 backdrop-blur-sm overflow-hidden relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">احجز استشارة مجانية</h3>
                      <p className="text-slate-300">دعنا نناقش مشروعك ونحوله إلى واقع</p>
                    </div>
                    <button 
                      onClick={() => setShowConsultationForm(false)}
                      className="text-slate-400 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-200 mb-3">الاسم الكامل *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all text-white placeholder:text-slate-400"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-200 mb-3">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all text-white placeholder:text-slate-400"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-200 mb-3">رقم الهاتف *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all text-white placeholder:text-slate-400"
                        placeholder="+213 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-200 mb-3">اسم الشركة</label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all text-white placeholder:text-slate-400"
                        placeholder="اسم شركتك (البراند او المنتح)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-200 mb-3">نوع الخدمة *</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all text-white"
                      >
                        <option value="" className="bg-slate-800 text-white">اختر نوع الخدمة</option>
                        <option value="website" className="bg-slate-800 text-white">تطوير موقع ويب</option>
                        <option value="mobile" className="bg-slate-800 text-white">تطبيق هاتف محمول</option>
                        <option value="branding" className="bg-slate-800 text-white">هوية بصرية وتصميم</option>
                        <option value="uiux" className="bg-slate-800 text-white">تصميم UI/UX</option>
                        <option value="ecommerce" className="bg-slate-800 text-white">متجر إلكتروني</option>
                        <option value="consultation" className="bg-slate-800 text-white">استشارة تقنية</option>
                      </select>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-[1.02] shadow-lg"
                    >
                      إرسال الطلب
                    </button>

                    <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 p-4 rounded-xl">
                      <p className="text-sm text-slate-200 text-center">
                        ✨ سنتواصل معك خلال 24 ساعة لمناقشة مشروعك وتقديم عرض مخصص
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}