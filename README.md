پروژه OrderDesk

یک داشبورد مدیریت سفارشات ساخته شده با Vue 2، که امکان مرتب‌سازی و جابجایی ستون‌ها به صورت درگ و دراپ را فراهم می‌کند. پروژه کاملاً واکنش‌گرا بوده و از TailwindCSS و FontAwesome برای استایل و آیکون‌ها استفاده می‌کند.

امکانات
داشبورد مدیریت سفارشات

مرتب‌سازی جدول بر اساس ستون‌ها

جابجایی ستون‌ها با Drag & Drop

طراحی واکنش‌گرا برای نمایش مناسب در اندازه‌های مختلف صفحه

استفاده از Vue Router و Vuex برای مدیریت مسیرها و وضعیت اپلیکیشن

اتصال به FAKE API برای دریافت داده‌ها

استفاده از TailwindCSS و FontAwesome برای استایل و آیکون‌ها

نصب و راه‌اندازی

پیش‌ نیازها


Node.js نسخه ۱۲ به بالا

npm یا yarn

مراحل نصب و اجرا
```bash
git clone https://github.com/amirHsz7/OrderDesk.git

cd order-desk

npm install

npm run serve
```


ساختار پروژه

src/components: ...کامپوننت‌های قابل استفاده مجدد مثل جدول، ردیف جدول، دکمه و

src/pages: صفحات اصلی مانند داشبورد

src/router: تنظیمات مسیرهای برنامه

src/store: مدیریت وضعیت با Vuex

src/assets: فایل‌های استاتیک و استایل‌ها

استفاده
بعد از اجرای پروژه با دستور npm run serve، به صورت خودکار به صفحه داشبورد dashboard/ هدایت می‌شوید.
در صفحه داشبورد می‌توانید از قابلیت‌های فیلتر، مرتب‌سازی و جابجایی ستون‌ها بهره‌مند شوید.

