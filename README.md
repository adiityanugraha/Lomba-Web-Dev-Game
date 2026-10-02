# Octopath Traveler - Fan Showcase & Panduan Interaktif

Sebuah website showcase interaktif dan responsif yang mengangkat dunia **Octopath Traveler** (Square Enix). Dibangun menggunakan **Next.js 16 (App Router)**, **React 19**, dan **Tailwind CSS 4**, menghadirkan eksplorasi visual benua Orsterra, kisah delapan traveler, sistem mekanik pertarungan, galeri media, dan berita game.

---

## Fitur Utama

- **Peta Interaktif Benua Orsterra (`/map`)**:
  - Peta interaktif dilengkapi navigasi geser (pan), perbesaran (zoom), dan kontrol sentuh mobile (`react-zoom-pan-pinch`).
  - Sorotan wilayah lengkap dengan daerah asal traveler, lore sejarah, dan daftar dungeon lokal (`/map/[region]`).
- **Showcase 8 Traveler (`/characters`)**:
  - Direktori profil lengkap delapan protagonis (Ophilia, Cyrus, Tressa, Olberic, Primrose, Alfyn, Therion, H'aanit).
  - Potret karakter resolusi tinggi dengan optimasi WebP, artwork pixel sprite asli, aksi Path Action, serta bakat bertarung (Talent).
- **Teaser Gameplay & Mekanik Tempur (`/features`, `/`)**:
  - Kartu interaktif yang dapat membesar/mengecil mulus untuk menjelaskan sistem Break & Boost, Path Action, dan skenario quest.
  - Transisi animasi mulus berbasis compositor yang bekerja seragam di resolusi desktop maupun layar mobile (412x924).
- **Galeri Media & Cuplikan Trailer (`/`, `/news`)**:
  - Galeri tangkapan layar in-engine beresolusi tinggi dengan sistem carousel sentuh.
  - Trailer gameplay terintegrasi dengan judul responsif yang menyatu di dasar video player.
- **Berita & Artikel Game (`/news`, `/news/[slug]`)**:
  - Sistem artikel dinamis berbasis routing statis (SSG) untuk pemuatan halaman instan.
- **Unduhan & Pengecekan Spesifikasi (`/download`)**:
  - Daftar ketersediaan platform rilis (Steam, Windows, Xbox, PlayStation, Nintendo Switch).
  - Tabel perbandingan spesifikasi minimum dan rekomendasi PC.
- **Navigasi & Footer Responsif**:
  - Menu drawer mobile yang ramah sentuhan dengan ukuran area klik minimal 44px (`min-h-11`).
  - Footer terstruktur dengan navigasi seluruh rute, tautan resmi, dan tombol interaktif "Kembali ke Atas".

---

## Teknologi yang Digunakan

| Lapisan                | Teknologi                                                          |
| :--------------------- | :----------------------------------------------------------------- |
| **Framework**          | Next.js 16 (App Router, Turbopack, Standalone Output)              |
| **Library UI**         | React 19, Lucide React, React Icons                                |
| **Styling**            | Tailwind CSS 4, Animasi & Variabel CSS Kustom                      |
| **Tipografi**          | Cinzel (Display), Cormorant Garamond (Logo), Source Serif 4 (Body) |
| **Bahasa Pemrograman** | TypeScript 5 (Strict Mode)                                         |
| **Optimasi Gambar**    | Next.js SmartImage dengan format WebP dan fallback JPG             |

---

## Pernyataan Hukum & Hak Cipta

Website ini merupakan proyek buatan penggemar (fan-made) yang bersifat non-komersial, dibuat secara khusus untuk tujuan edukasi dan partisipasi dalam kompetisi pengembangan web (Web Development Game Competition). Website ini tidak berafiliasi dengan, disponsori, atau didukung secara resmi oleh Square Enix.

Seluruh judul game, karakter, ilustrasi, sprite, audio, dan aset visual merupakan hak cipta milik &copy; **Square Enix Co., Ltd.**

---

## Lisensi

Proyek ini menggunakan lisensi sumber terbuka [MIT License](LICENSE.md).
