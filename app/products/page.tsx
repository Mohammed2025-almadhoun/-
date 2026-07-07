"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Truck,
  RotateCcw,
  ShieldCheck,
  Share2,
} from "lucide-react";

// ---------------------------------------------------------------------------
// بيانات المنتج (استبدلها لاحقاً بالبيانات القادمة من الـ API / قاعدة البيانات)
// ---------------------------------------------------------------------------
const product = {
  title: "شنطة كتف تطريز تراثي أحمر",
  seller: "من تطريز حنان",
  origin: "الخليل، فلسطين",
  price: 65.0,
  currency: "₪",
  rating: 4.8,
  reviewsCount: 32,
  description:
    "شنطة كتف تراثية مطرزة يدوياً بخيوط عالية الجودة بتصميم فلسطيني أصيل، تحمل رمز التطريز الفلسطيني الزاهي بالألوان وتفاصيل الزخرفة الدقيقة عبر الأجيال.",
  specs: [
    { label: "الفئة", value: "حقائب نسائية" },
    { label: "مكان الصناعة", value: "الخليل، فلسطين" },
    { label: "بلد الصناعة", value: "فلسطين" },
    { label: "الأبعاد", value: "35 × 28 سم" },
    { label: "الألوان", value: "أحمر وبيج" },
    { label: "التنظيف", value: "ينصح بالتنظيف الجاف" },
  ],
  images: [
    "/images/logo5.jpeg",
    "/images/logo6.jpeg",
    "/images/logo7.jpeg",
    "/images/logo8.jpeg",
  ],
  ratingBreakdown: [
    { stars: 5, count: 24 },
    { stars: 4, count: 5 },
    { stars: 3, count: 2 },
    { stars: 2, count: 0 },
    { stars: 1, count: 1 },
  ],
  reviews: [
    {
      name: "سناء موسى",
      date: "2026/03/01",
      rating: 5,
      comment:
        "شنطة رائعة والتطريز دقيق جداً، وصلت بسرعة والتغليف كان ممتاز. أنصح بشدة بالشراء.",
    },
    {
      name: "هدى العارضة",
      date: "2026/02/20",
      rating: 5,
      comment:
        "جودة القماش ممتازة والألوان زاهية كما في الصورة تماماً، تجربة شراء رائعة.",
    },
  ],
};

const totalReviews = product.ratingBreakdown.reduce(
  (sum, r) => sum + r.count,
  0
);

// ---------------------------------------------------------------------------
// مكوّنات مساعدة
// ---------------------------------------------------------------------------
function StarRow({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" dir="ltr">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-neutral-200 text-neutral-200"
          }
        />
      ))}
    </div>
  );
}

export default function ProductPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div dir="rtl" className="min-h-screen bg-[#F7F6F3] text-[#22201D]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[1fr_280px]">
        {/* -------------------- المحتوى الرئيسي (يظهر على اليمين) -------------------- */}
        <main className="space-y-6">
          <div className="grid grid-cols-1 gap-6 rounded-2xl border border-neutral-200 bg-white p-5 md:grid-cols-2">
            {/* تفاصيل المنتج والسعر */}
            <div className="order-1 flex flex-col md:order-2">
              <h1 className="text-xl font-bold text-neutral-900">
                {product.title}
              </h1>
              <p className="mt-1 text-sm text-neutral-500">
                {product.seller} · {product.origin}
              </p>

              <div className="mt-2 flex items-center gap-2">
                <StarRow rating={product.rating} />
                <span className="text-sm font-semibold text-neutral-700">
                  {product.rating}
                </span>
                <span className="text-xs text-neutral-400">
                  ({product.reviewsCount} تقييم)
                </span>
              </div>

              <p className="mt-3 text-2xl font-extrabold text-[#1F5C3F]">
                {product.price.toFixed(2)} {product.currency}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {product.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-2.5 py-1">
                  🧵 تصميم تراثي
                </span>
                <span className="rounded-full bg-neutral-100 px-2.5 py-1">
                  ✋ صناعة يدوية
                </span>
                <span className="rounded-full bg-neutral-100 px-2.5 py-1">
                  100% قطن
                </span>
              </div>

              {/* الكمية */}
              <div className="mt-5 flex items-center gap-3">
                <span className="text-sm text-neutral-600">الكمية:</span>
                <div className="flex items-center rounded-lg border border-neutral-300">
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1.5 text-neutral-600 hover:bg-neutral-50"
                    aria-label="زيادة الكمية"
                  >
                    <Plus size={14} />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1.5 text-neutral-600 hover:bg-neutral-50"
                    aria-label="إنقاص الكمية"
                  >
                    <Minus size={14} />
                  </button>
                </div>
              </div>

              {/* أزرار الشراء */}
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#1F5C3F] py-2.5 text-sm font-semibold text-white transition hover:bg-[#184b32]">
                  <ShoppingCart size={16} />
                  أضف إلى السلة
                </button>
                <button className="flex-1 rounded-lg border border-[#1F5C3F] py-2.5 text-sm font-semibold text-[#1F5C3F] transition hover:bg-[#1F5C3F]/5">
                  اشترِ الآن
                </button>
              </div>

              {/* معلومات الشحن */}
              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-neutral-100 pt-4 text-center text-[11px] text-neutral-500">
                <div className="flex flex-col items-center gap-1">
                  <Truck size={16} className="text-[#1F5C3F]" />
                  توصيل سريع خلال 5-7 أيام
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw size={16} className="text-[#1F5C3F]" />
                  إرجاع سهل خلال 14 يوم
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck size={16} className="text-[#1F5C3F]" />
                  دفع آمن 100%
                </div>
              </div>
            </div>

            {/* معرض الصور */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src={product.images[activeImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(i)}
                    className={`relative h-16 w-16 overflow-hidden rounded-lg border-2 ${
                      activeImage === i
                        ? "border-[#1F5C3F]"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`صورة ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* -------------------- التقييمات -------------------- */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h2 className="mb-4 text-base font-bold text-neutral-900">
              التقييمات ({totalReviews})
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr]">
              {/* توزيع النجوم */}
              <div className="space-y-2">
                {product.ratingBreakdown
                  .slice()
                  .sort((a, b) => b.stars - a.stars)
                  .map((r) => {
                    const pct = totalReviews
                      ? (r.count / totalReviews) * 100
                      : 0;
                    return (
                      <div key={r.stars} className="flex items-center gap-2">
                        <span className="w-3 text-xs text-neutral-500">
                          {r.stars}
                        </span>
                        <Star
                          size={12}
                          className="fill-amber-400 text-amber-400"
                        />
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100">
                          <div
                            className="h-full rounded-full bg-amber-400"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="w-4 text-xs text-neutral-400">
                          {r.count}
                        </span>
                      </div>
                    );
                  })}
              </div>

              {/* التقييم الإجمالي */}
              <div className="flex flex-col items-center justify-center border-x border-neutral-100 px-6">
                <p className="text-4xl font-extrabold text-neutral-900">
                  {product.rating}
                </p>
                <StarRow rating={product.rating} size={18} />
                <p className="mt-1 text-xs text-neutral-400">
                  {product.reviewsCount} تقييم / {5} من 5
                </p>
              </div>

              {/* نموذج إضافة تقييم */}
              <div className="flex flex-col justify-center gap-2">
                <p className="text-sm text-neutral-600">أضف تقييمك</p>
                <StarRow rating={0} size={20} />
                <button className="mt-2 rounded-lg bg-[#1F5C3F] py-2 text-sm font-semibold text-white hover:bg-[#184b32]">
                  إضافة تقييم
                </button>
              </div>
            </div>

            {/* قائمة التقييمات */}
            <div className="mt-6 divide-y divide-neutral-100 border-t border-neutral-100">
              {product.reviews.map((r) => (
                <div key={r.name} className="flex gap-3 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1F5C3F]/10 text-sm font-bold text-[#1F5C3F]">
                    {r.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-neutral-800">
                        {r.name}
                      </span>
                      <span className="text-xs text-neutral-400">
                        {r.date}
                      </span>
                    </div>
                    <StarRow rating={r.rating} size={13} />
                    <p className="mt-1 text-sm text-neutral-600">
                      {r.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mx-auto mt-4 block text-sm font-semibold text-[#1F5C3F] underline underline-offset-2">
              عرض المزيد من التقييمات
            </button>
          </div>
        </main>

        {/* -------------------- العمود الجانبي (يظهر على اليسار) -------------------- */}
        <aside className="space-y-4">
          {/* قصة المنتج */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-[#1F5C3F]">
              📖 قصة المنتج
            </h3>
            <div className="flex items-start gap-3">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-neutral-200">
                <Image
                  src="/images/logo5.jpeg"
                  alt="الحرفية"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-xs leading-relaxed text-neutral-600">
                تعكس هذه القطعة تراثاً أصيلاً تتناقله الحرفيات الفلسطينيات
                جيلاً بعد جيل، وتحمل في تفاصيلها هوية الأرض وحكاية الصبر
                والانتماء.
              </p>
            </div>
            <button className="mt-3 text-xs font-semibold text-[#1F5C3F] underline underline-offset-2">
              اقرأ القصة كاملة ←
            </button>
          </div>

          {/* شهادة الأصالة */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-[#1F5C3F]">
              ✅ شهادة الأصالة
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-dashed border-neutral-300 text-[10px] text-neutral-400">
                <Image src="/images/logo10.jpeg" alt="شهادة الأصالة" width={48} height={48} />
              </div>
              <p className="text-xs leading-relaxed text-neutral-600">
                هذا المنتج معتمد بشهادة أصالة فلسطينية 100%، من مصنّعات
                فلسطينيات موثقات.
              </p>
            </div>
            <button className="mt-3 w-full rounded-lg border border-[#1F5C3F] py-1.5 text-xs font-semibold text-[#1F5C3F] transition hover:bg-[#1F5C3F]/5">
              عرض الشهادة
            </button>
          </div>

          {/* تفاصيل المنتج */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <h3 className="mb-3 text-sm font-bold text-[#1F5C3F]">
              تفاصيل المنتج
            </h3>
            <dl className="divide-y divide-neutral-100 text-xs">
              {product.specs.map((s) => (
                <div key={s.label} className="flex justify-between py-2">
                  <dt className="text-neutral-500">{s.label}</dt>
                  <dd className="font-medium text-neutral-800">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* مشاركة المنتج */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <h3 className="mb-3 text-sm font-bold text-[#1F5C3F]">
              شارك هذا المنتج
            </h3>
            <div className="flex gap-3 text-neutral-500">
              <Share2 size={18} className="cursor-pointer hover:text-[#1F5C3F]" />
              <FaFacebook size={18} className="cursor-pointer hover:text-[#1F5C3F]" />
              <FaInstagram size={18} className="cursor-pointer hover:text-[#1F5C3F]" />
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
