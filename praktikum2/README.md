Praktikum: Membuat Project Pertama ReactJS
Langkah 1: Buat Folder Baru
npx create-next-app

Langkah 2: Buat project baru
![PB](/praktikum/praktikum2/img/Projek%20baru.png)

*Soal 1*
Pada gambar tersebut, silakan Anda browsing apa yang dimaksud dengan:

TypeScript :  bahasa pemrograman open source yang dibangun di atas JavaScript.
ESLint : alat untuk menganalisa source code untuk menandai errors, bug, code convention dan memverifikasi kualitas kode.
Tailwind CSS : framework CSS yang berbasis utility untuk membuat UI atau tampilan dari aplikasi web. 
App Router : cara untuk membangun aplikasi web menggunakan React Server Components.
Import alias : impor standar yang menggunakan nama yang ditentukan dalam modul pengimpor, bukan nama yang telah ditentukan sebelumnya oleh modul pengekspor.

Langkah 3: Buka dengan VS Code
cd hello-world
code .

*Soal 2*
Pada struktur project tersebut, jelaskan kegunaan folder dan file masing-masing tersebut!
![FF](/praktikum/praktikum2/img/File%20dan%20Folder.png)
1. Git : folder yg berarti sudah ada tools dimana digunakan untuk mengelola versi source code program 
2. next. : framework untuk React.js
3. img : folder memuat image
4. node_modules : directory dibuat oleh npm dan jalan untuk tracking setiap package yg telah diinstal di json
5. src memiliki konfigurasi file 
6. .estlintcr : salah satu file yang akan dicari ESLint untuk konfigurasinya, dan juga yang memiliki prioritas tertinggi
7. gitnigore :  cara git untuk mengabaikan file yang dimasukan dalam daftar .gitignore agar tidak diikut sertakan pada proses git push
8. next.config : file konfigurasi yang digunakan dalam aplikasi Next.js untuk menyesuaikan perilaku sistem build Next.js
9. next-env.d : dibuat di root proyek File ini memastikan tipe Next.js diambil oleh kompiler TypeScript
10. package : terdapat package dari proyek
11. package.lock : file kunci yang menyimpan informasi tentang dependensi atau paket yang diinstal untuk proyek node.js
12. postcss.config.js : alat Node.js yang mengubah gaya Anda menggunakan plugin JavaScript.
13. README : Terdapat jawaban serta praktikum
14. tailwind.config : di root proyek tempat dapat menentukan penyesuaian apa pun termasuk tampilan
15. tsconfig : objek bersarang yang berisi aturan yang harus diterapkan oleh kompiler TypeScript

Langkah 4: Run
npm run dev
![RUN](/praktikum/praktikum2/img/Run.png)

*Soal 3*
Gantilah teks pada bagian atas dengan Nama - NIM Anda.
![N&N](/praktikum/praktikum2/img/Nama%20dan%20NIM.png)
Ketika Anda telah berhasil mengganti teks tersebut, Anda tidak perlu menjalankan perintah npm run dev dan tidak juga diperlukan me-reload halaman di browser. Tiba-tiba perubahan itu tampil, Mengapa terjadi demikian? Jelaskan!
penggunaan npm run dev digunakan dalam pengembangan perangkat lunak untuk menjalankan serve pengembangan lokal secara otomatis, ini dikarenakan mengunakan alat seperti reactJS secara otomatis.

Cobalah buat project react lainnya dengan menggunakan framework Remix dan Gatsby.
![G2](/praktikum/praktikum2/img/Gatsby%20(2).png)
![G](/praktikum/praktikum2/img/Gatsby.png)
![R2](/praktikum/praktikum2/img/Remix%20(2).png)
![R](/praktikum/praktikum2/img/Remix.png)

Perbedaannya diantara ketiga framework tersebut :
- Next.js menonjol sebagai kerangka kerja yang paling matang dan mapan. Dengan basis pengguna yang lebih besar, dokumentasi yang luas, dan dukungan komunitas yang kuat, Next.js adalah pilihan yang dapat diandalkan. Ini juga mendukung situs statis dan dinamis, menjadikannya solusi yang cocok untuk berbagai kasus penggunaan.
- Kesederhanaan, kecepatan, dan pengaturan minimal , Remix mungkin merupakan pilihan yang lebih sesuai. Meskipun masih dalam tahap pengembangan dan belum memiliki banyak contoh serta kasus penggunaan, aplikasi ini mendapatkan tanggapan positif dari para pengembang dan menunjukkan harapan di masa depan.
- Gatsby, menjadi pilihan yang lebih cepat dan ringan karena kemampuan pembuatan situs statisnya.



