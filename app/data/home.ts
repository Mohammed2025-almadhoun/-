export interface Category {
  id: number;
  title: string;
  image: string;
  slug: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  id: number;
  label: string;
  heading: string;
  paragraph: string;
  image: string;
}

export const navLinks: NavLink[] = [
  { label: "الرئيسية", href: "/" },
  { label: "المنتجات", href: "/products" },
  { label: "الفئات", href: "/categories" },
  { label: "من نحن", href: "/about" },
  { label: "اتصل بنا", href: "/contact" },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    label: "منتجات تراثية أصلية",
    heading: "اكتشف أصالة\nالتراث الفلسطيني",
    paragraph:
      "منتجات يدوية أصيلة من قلب فلسطين،\nتدعم الحرفيين وتحافظ على تراثنا وهويتنا.",
    image: "/images/hero-1.jpg",
  },
  {
    id: 2,
    label: "حرف يدوية فريدة",
    heading: "فن التطريز\nبأيادي فلسطينية",
    paragraph:
      "كل قطعة تحكي قصة، كل غرزة تحمل تراثاً.\nتسوق من مجموعة مميزة من المشغولات اليدوية.",
    image: "/images/hero-2.jpg",
  },
  {
    id: 3,
    label: "من قلب المخيمات",
    heading: "دعم الحرفيين\nوصمودهم",
    paragraph:
      "نحن هنا لدعم الحرفيين الفلسطينيين\nوتوفير منصة عالمية لمنتجاتهم.",
    image: "/images/hero-3.jpg",
  },
];

export const features = [
  {
    id: 1,
    icon: "BadgeCheck",
    title: "منتجات أصلية 100%",
    description: "حرف يدوية فلسطينية",
  },
  {
    id: 2,
    icon: "Handshake",
    title: "دعم الحرفيين المحليين",
    description: "نساهم في استدامة التراث",
  },
  {
    id: 3,
    icon: "Truck",
    title: "توصيل سريع وآمن",
    description: "لكافة المحافظات الفلسطينية",
  },
  {
    id: 4,
    icon: "ShieldCheck",
    title: "دفع آمن",
    description: "وسائل دفع متعددة",
  },
];

export const categories: Category[] = [
  {
    id: 1,
    title: "التطريز الفلسطيني",
    image: "/images/cat-embroidery.jpg",
    slug: "embroidery",
  },
  {
    id: 2,
    title: "الإكسسوارات",
    image: "/images/cat-accessories.jpg",
    slug: "accessories",
  },
  {
    id: 3,
    title: "الأطعمة التقليدية",
    image: "/images/cat-food.jpg",
    slug: "traditional-food",
  },
  {
    id: 4,
    title: "الديكورات",
    image: "/images/cat-decor.jpg",
    slug: "decor",
  },
  {
    id: 5,
    title: "الفخار",
    image: "/images/cat-pottery.jpg",
    slug: "pottery",
  },
  {
    id: 6,
    title: "الحرف اليدوية",
    image: "/images/cat-handicrafts.jpg",
    slug: "handicrafts",
  },
];

export const featuredProducts: Product[] = [
  {
    id: 1,
    title: "شنطة تطريز تراثية",
    price: 45,
    rating: 4.9,
    image: "/images/prod-1.jpg",
    category: "التطريز الفلسطيني",
  },
  {
    id: 2,
    title: "طقم فخار مزخرف",
    price: 60,
    rating: 4.8,
    image: "/images/prod-2.jpg",
    category: "الفخار",
  },
  {
    id: 3,
    title: "ميدالية يدوية",
    price: 25,
    rating: 4.7,
    image: "/images/prod-3.jpg",
    category: "الإكسسوارات",
  },
  {
    id: 4,
    title: "زيت زيتون بكر",
    price: 30,
    rating: 5.0,
    image: "/images/prod-4.jpg",
    category: "الأطعمة التقليدية",
  },
  {
    id: 5,
    title: "لوحة تطريز جدارية",
    price: 80,
    rating: 4.9,
    image: "/images/prod-5.jpg",
    category: "الديكورات",
  },
  {
    id: 6,
    title: "سلة خوص منسوجة",
    price: 35,
    rating: 4.6,
    image: "/images/prod-6.jpg",
    category: "الحرف اليدوية",
  },
];

export const suggestedProducts: Product[] = [
  {
    id: 7,
    title: "ثوب فلسطيني مطرز",
    price: 120,
    rating: 4.9,
    image: "/images/prod-7.jpg",
    category: "التطريز الفلسطيني",
  },
  {
    id: 8,
    title: "سوار فضة يدوي",
    price: 40,
    rating: 4.7,
    image: "/images/prod-8.jpg",
    category: "الإكسسوارات",
  },
  {
    id: 9,
    title: "زيت زيتون عضوي",
    price: 22,
    rating: 4.8,
    image: "/images/prod-9.jpg",
    category: "الأطعمة التقليدية",
  },
  {
    id: 10,
    title: "مصباح فخار مزخرف",
    price: 55,
    rating: 4.6,
    image: "/images/prod-10.jpg",
    category: "الديكورات",
  },
  {
    id: 11,
    title: "طبق خزف ملون",
    price: 35,
    rating: 4.8,
    image: "/images/prod-11.jpg",
    category: "الفخار",
  },
  {
    id: 12,
    title: "سجادة صوف يدوي",
    price: 150,
    rating: 4.9,
    image: "/images/prod-12.jpg",
    category: "الحرف اليدوية",
  },
  {
    id: 13,
    title: "كوفية فلسطينية",
    price: 28,
    rating: 4.7,
    image: "/images/prod-13.jpg",
    category: "الإكسسوارات",
  },
  {
    id: 14,
    title: "قدح فخار تقليدي",
    price: 18,
    rating: 4.5,
    image: "/images/prod-14.jpg",
    category: "الفخار",
  },
];

export const footerLinks = {
  quickLinks: [
    { label: "الرئيسية", href: "/" },
    { label: "الفئات", href: "/categories" },
    { label: "المنتجات", href: "/products" },
    { label: "قصص الحرفيين", href: "/stories" },
  ],
  contact: {
    email: "info@bifilastinia.com",
    phone: "+970 2 295 1234",
  },
  social: [
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "WhatsApp", icon: "WhatsApp", href: "#" },
    { name: "Twitter", icon: "Twitter", href: "#" },
  ],
};
