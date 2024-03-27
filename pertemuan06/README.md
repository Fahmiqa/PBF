# Soal Praktikum

Tentu, berikut ini adalah jawaban untuk pertanyaan-pertanyaan tersebut tanpa menggunakan kata "Anda":

1. **Apa kegunaan dari kode ini `import { useEffect } from "react";` pada file `pages/_app.tsx`? Jelaskan.**
   - Kode `import { useEffect } from "react";` digunakan untuk mengimpor fungsi `useEffect` dari pustaka React. `useEffect` adalah salah satu dari hook yang disediakan oleh React untuk melakukan efek samping (side effects) dalam komponen fungsional. Di dalam file `pages/_app.tsx`, `useEffect` dapat digunakan untuk menangani efek samping yang berlaku di seluruh aplikasi Next.js, seperti inisialisasi analitik, pemuatan data awal, atau manajemen status masuk (login).

2. **Jika pada file `pages/_app.tsx` kita tidak menggunakan `useEffect` (menghapus baris 3, dan baris 9-11), apa yang akan terjadi?**
   - Jika tidak menggunakan `useEffect` di dalam file `pages/_app.tsx`, tidak akan ada efek samping yang ditangani secara global di seluruh aplikasi. Ini berarti tidak akan dapat melakukan inisialisasi yang diperlukan untuk aplikasi secara keseluruhan, seperti pengaturan analitik, pemuatan data awal, atau manajemen status masuk (login) secara otomatis pada setiap permintaan halaman.

3. **Mengapa di React/Next.js penulisan tag HTML untuk class, harus diganti menjadi `className`?**
   - Di React/Next.js, penulisan atribut `class` pada elemen HTML harus diganti menjadi `className` karena `class` adalah kata kunci yang digunakan dalam JavaScript untuk mendefinisikan kelas (class) dan objek. Oleh karena itu, untuk menghindari konflik dengan penggunaan `class` dalam konteks JavaScript, React memilih untuk menggunakan `className` sebagai pengganti untuk menentukan kelas CSS pada elemen HTML.

4. **Apakah store pada Next.js bisa menyimpan banyak redux reducer?**
   - Ya, store pada Next.js dengan menggunakan Redux bisa menyimpan banyak redux reducer. Anda dapat menggabungkan beberapa reducer menjadi satu reducer utama menggunakan fungsi `combineReducers` dari Redux, dan kemudian menggunakan reducer utama tersebut saat membuat toko Redux menggunakan `configureStore`. Dengan demikian, dapat memiliki satu toko Redux yang mengelola keadaan aplikasi dengan banyak reducer.

5. **Jelaskan kegunaan dari file `store.js`!**
   - File `store.js` adalah tempat di mana mendefinisikan dan mengonfigurasi toko Redux untuk aplikasi. Di dalam file ini, dapat menentukan konfigurasi Redux seperti middleware, reducers, dan pengaturan Redux Persist jika digunakan. File `store.js` memberikan satu titik pusat untuk membuat dan mengonfigurasi toko Redux, yang kemudian dapat diimpor dan digunakan di seluruh aplikasi.

6. **Pada file `pages/login.tsx`, apa maksud dari kode ini? `const { isLogin } = useSelector((state) => state.auth);`**
   - Kode `const { isLogin } = useSelector((state) => state.auth);` menggunakan hook `useSelector` dari React Redux untuk memilih bagian tertentu dari keadaan aplikasi Redux dan membuatnya tersedia dalam komponen `login.tsx`. Dalam hal ini, memilih nilai `isLogin` dari state Redux yang dikelola oleh reducer `auth`. Nilai `isLogin` kemungkinan akan menunjukkan apakah pengguna telah login atau tidak, sehingga dapat digunakan untuk menentukan tindakan apa yang harus diambil dalam halaman login.

7. **Pada file `pages/counter.tsx`, apa maksud dari kode ini? `const {totalCounter} = useSelector((state) => state.counter);`**
   - Kode `const {totalCounter} = useSelector((state) => state.counter);` juga menggunakan hook `useSelector` dari React Redux untuk memilih bagian tertentu dari keadaan aplikasi Redux dan membuatnya tersedia dalam komponen `counter.tsx`. Di sini, memilih nilai `totalCounter` dari state Redux yang dikelola oleh reducer `counter`. Nilai `totalCounter` kemungkinan akan berisi total hitungan yang diinginkan, seperti jumlah total item dalam keranjang belanja atau jumlah total pesan yang belum dibaca, tergantung pada logika aplikasi.