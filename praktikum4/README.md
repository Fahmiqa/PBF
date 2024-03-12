## Praktikum 1 - EVent Hadler 

### Langkah 1

`src/component/button.tsx` <br>
![T1](/img/Tombol%201.png)


`src/app/page.tsx` <br>
![PT1](/img/Page%20Tombol%201.png)


`Result` <br>
![HT1](/img/Hasil%20Tombol%201.png)


### Langkah 2

`src/components/button.tsx` <br>
![B](/img/Button%201.png)

Muncul eror dengan solusi menambahkan "use client".

`Issue result` <br>
![5](/img/Hasil%20Error.png)

`src/components/page.tsx` <br>
![6](/img/Page%20Use%20Client.png)

`Fix result` <br>
![6](/img/Hasil%20Fix.png)


## Praktikum 2

`src/components/button.tsx` <br>
![B](/img/Button.png)

`Result` <br>
![HB](/img/Hasil%20Button%20(2).png)

## Praktikum 3

### Langkah 1

`src/components/button.tsx` <br>
![T](/img/Tombol.png)

`src/components/page.tsx` <br>
![PT](/img/Page%20Tombol.png)

`Result` <br>
![HB](/img/Hasil%20Button.png)

### Langkah 2

`src/components/button.tsx` <br>
![T](/img/Tombol.png)

`src/components/page.tsx` <br>
![PT](/img/Page%20Tombol.png)

`Result` <br>
![HB](/img/Hasil%20Button.png)

## Praktikum 4

`src/data/article.tsx` <br>
![A](/img/Artikel.png)

`src/component/gallery.tsx` <br>
![G](/img/Gallery.png)

`src/components/page.tsx` <br>
![PG](/img/Page%20Gallery.png)

`Result` <br>
![HG](/img/Hasil%20Gallery.png)

## Soal
1. Jika kita menekan tombol "Artikel Selanjutnya" sebanyak 5x (atau melebihi halaman total artikel), apa yang akan terjadi?
2. Modifikasilah gallery.tsx agar bisa meng-handle permasalahan tersebut.
3. Tambahkan tombol "Artikel Sebelumnya", untuk menampilkan artikel secara mundur.

### Jawaban
1. Akan terjadi eror karena hanya ada 5 data yang berada pada file article.jsx hanya
2. Berikut kode yang di modifikasi <br>
![6](/img/Galery%20modif.png)
3.  Berikut hasil kode yang telah dimodifikasi <br>
![6](/img/Hasil%20Modifikasi.png)

## Praktikum 5

### Langkah 1

`src/components/form.tsx` <br>
![CF2](/img/Componen%20Form2.png)
![CF1](/img/Componen%20Form1.png)

`src/components/page.tsx` <br>
![PF](/img/Page%20Form%201.png)

`Result` <br>
![HF](/img/Hasil%20Form%20Tebak.png)

`Penjelasan`
Kode di tersebut adalah sebuah komponen Form dalam React yang memungkinkan pengguna untuk menebak nama hewan yang ditakuti oleh Doraemon. Komponen ini menggunakan `useState` untuk mengelola state dari variabel Jawaban, error, dan status. Ketika pengguna mengirimkan tebakan, fungsi `handleSubmit` akan dipanggil, dan jika tebakan benar, akan ditampilkan pesan "Yay...Jawaban Benar!". Jika terjadi kesalahan, pesan kesalahan akan ditampilkan di bawah form. Fungsi `submitForm` digunakan untuk menangani pengiriman tebakan dan memberikan respons setelah jeda 500 milidetik.

### Langkah 2

`src/components/form.tsx` <br>
![F1](/img/Form1.png)

`src/components/page.tsx` <br>
![F](/img/Page%20Form.png)

`Result` <br>
![HF](/img/Hasil%20Form.png)

state fullName digantikan variable biasa

`src/components/form.tsx` <br>
![F](/img/Form.png)

`Result` <br>
![HF](/img/Hasil%20Form.png)

`Penjelasan`
Setelah kode di compile memiliki hasil yang sama

## Soal

1. Apa perbedaan dari fungsi Form_2 yang pertama dengan yang kedua?
2. Kenapa perlu menghapus state fullName? Apa keuntungannya?

### Jawaban

1. Perbedaan nya antara lain

- Cara Penanganan State:
    - Kode pertama menggunakan tiga state terpisah untuk `firstName`, `lastName`, dan `fullName`.
    - Kode kedua hanya menggunakan state untuk `firstName` dan `lastName`, sementara `fullName` dihitung langsung di dalam komponen.

- Perhitungan Nama Lengkap (`fullName`):
   - Kode pertama menghitung `fullName` setelah mengubah state `firstName` atau `lastName` di dalam fungsi khusus.
   - Kode kedua menghitung `fullName` langsung di dalam JSX, tanpa perlu fungsi tambahan.

2. keuntungannya adalah kemampuan Perubahan `fullName`:
- Kode pertama mungkin memiliki masalah dengan pembaruan nilai yang tertinggal karena cara React mengelola pembaruan state secara asinkron.
- Kode kedua lebih langsung, sehingga `fullName` selalu mencerminkan nilai terbaru dari `firstName` dan `lastName`.

## Praktikum 6

### Langkah 1

`src/components/accordion.tsx`
![A](/img/Accordion.png)


`src/components/page.tsx` <br>
![PA](/img/Page%20Accordion.png)

`Result` <br>
![HA](/img/Hasil%20Accordion.png)

`Penjelasan`
Kode tersebut merupakan komponen yang membuat sebuah accordion (sebuah elemen UI yang memungkinkan pengguna untuk memperluas dan menyembunyikan konten) dengan dua panel yang bisa di-klik

### Langkah 2
`src/components/chat.tsx` <br>
![C1](/img/Chat%201.png)
![c2](/img/Chat%202.png)

`src/components/page.tsx` <br>
![PM](/img/Page%20Messenger.png)

`Result` <br>
![M](/img/Hasil%20Messenger.png)

`Penjelasan`
Menambahkan ini agar React bisa lebih baik dalam mengelola bagaimana komponen Chat ini diperbarui. Jadi, setiap kali memilih kontak baru, "key" membantu React memahami bahwa Chat seharusnya di-update dengan benar.

## Soal

1. Apa tujuan dari penulisan ini key={to.email} pada < Chat key={to.email} contact={to} / > ?
2. Apa fungsi dari props key tersebut?

### Jawaban

1. Tujuannya adalah untuk membantu ne dalam proses pembaruan ulang komponen saat terjadi perubahan pada struktur daftar dan data pada komponen.

2. Prop "key" dalam React berfungsi untuk memberikan identifikasi unik kepada setiap komponen, memungkinkan optimisasi re-render, dan membantu dalam menjaga state untuk komponen yang berbeda saat daftar komponen mengalami perubahan, sehingga memastikan pengalaman pengguna yang konsisten.