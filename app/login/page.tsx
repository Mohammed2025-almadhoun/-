"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, HeartHandshake, Shield } from 'lucide-react'; // استعارة أيقونات مشابهة للصورة

const LoginPage = () => {
const [showPassword, setShowPassword] = useState(false);

return (
    <div className="flex min-h-screen font-sans" dir="rtl">
      {/* القسم الأيمن: نموذج تسجيل الدخول */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-md w-full mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">تسجيل الدخول</h1>
        <p className="text-gray-500 mb-8">مرحباً بك! يرجى تسجيل الدخول للمتابعة</p>

        <form className="space-y-6">
            {/* حقل البريد الإلكتروني */}
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
            <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                type="email"
                className="block w-full pr-10 border border-gray-300 rounded-md py-3 focus:ring-emerald-600 focus:border-emerald-600 border-opacity-50 outline-none"
                placeholder="أدخل بريدك الإلكتروني"
                />
            </div>
            </div>

            {/* حقل كلمة المرور */}
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
            <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                type={showPassword ? "text" : "password"}
                className="block w-full pr-10 pl-10 border border-gray-300 rounded-md py-3 focus:ring-emerald-600 focus:border-emerald-600 border-opacity-50 outline-none"
                placeholder="أدخل كلمة المرور"
                />
                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 left-0 pl-3 flex items-center"
                >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
            </div>
            </div>

            {/* خيارات إضافية */}
            <div className="flex items-center justify-between">
            <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-emerald-700 focus:ring-emerald-500 border-gray-300 rounded" />
                <span className="mr-2 text-sm text-gray-600">تذكرني</span>
            </label>
            <a href="#" className="text-sm font-medium text-emerald-700 hover:text-emerald-500 transition-colors">
                نسيت كلمة المرور؟
            </a>
            </div>

            {/* زر تسجيل الدخول */}
            <button
            type="submit"
            className="w-full bg-[#1A4D2E] text-white py-3 px-4 rounded-md font-bold hover:bg-emerald-900 transition-colors"
            >
                تسجيل الدخول
            </button>

            <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">أو</span></div>
            </div>

            <p className="text-center text-sm text-gray-600">
            ليس لديك حساب؟ <a href="/choose-account" className="font-bold text-emerald-700 hover:underline">إنشاء حساب</a>
            </p>
        </form>
        </div>
    </div>

      {/* القسم الأيسر: الصورة والمميزات */}
    <div className="hidden lg:flex lg:w-1/2 bg-[#F9F7F2] flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* محتوى الشعار والنص بناءً على الصورة */}
        <div className="z-10 text-right space-y-8">
        <div className="flex items-center justify-end gap-4 mb-10">
            <div className="text-right">
                <h2 className="text-4xl font-bold text-[#1A4D2E]">بأيدي فلسطينية</h2>
                <p className="text-lg text-gray-600">للتراث والمنتجات الفلسطينية</p>
            </div>
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                {/* هنا يمكن وضع لوغو الموقع */}
                <Image src="/logo2.svg" alt="Logo" width={48} height={48} className="w-12 h-12" />
            </div>
        </div>

        <ul className="space-y-6">
            <li className="flex items-center justify-end gap-3 text-gray-700">
            <span>منتجات أصلية وموثوقة</span>
            <ShieldCheck className="text-emerald-700 h-6 w-6" />
            </li>
            <li className="flex items-center justify-end gap-3 text-gray-700">
            <span>دعم المنتجات الفلسطينية</span>
            <HeartHandshake className="text-emerald-700 h-6 w-6" />
            </li>
            <li className="flex items-center justify-end gap-3 text-gray-700">
            <span>تجربة تسوق آمنة وسهلة</span>
            <Shield className="text-emerald-700 h-6 w-6" />
            </li>
        </ul>
        </div>
        
        {/* صورة الزينة في الأسفل */}
        <div className="absolute bottom-0 right-0 w-full">
        <Image 
            src="/logo.svg" 
            alt="Palestinian Decor" 
            width={1200}
            height={800}
            className="object-cover w-full opacity-90"
        />
        </div>
    </div>
    </div>
);
};

export default LoginPage;