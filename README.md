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

| Lapisan                    | Teknologi                                                          |
| :------------------------- | :----------------------------------------------------------------- |
| **Framework**              | Next.js 16 (App Router, Turbopack, Standalone Output)              |
| **Library UI**             | React 19, Lucide React, React Icons                                |
| **Styling**                | Tailwind CSS 4, Animasi & Variabel CSS Kustom                      |
| **Tipografi**              | Cinzel (Display), Cormorant Garamond (Logo), Source Serif 4 (Body) |
| **Bahasa Pemrograman**     | TypeScript 5 (Strict Mode)                                         |
| **Optimasi Gambar**        | Next.js SmartImage dengan format WebP dan fallback JPG             |
| **Deployment & Kontainer** | Docker (Node 24 Bookworm Slim), Docker Compose, Cloudflare Tunnel  |

---

## Keunggulan Teknis & Optimasi

1. **Static Site Generation (SSG)**:
   - Seluruh 25 rute halaman (termasuk halaman detail tiap wilayah dan artikel berita) di-render di awal saat build, menghasilkan pemuatan halaman di bawah satu detik.
2. **Animasi Ringan (Compositor-Only)**:
   - Animasi scroll reveal, partikel atmosfer, dan kartu interaktif dijalankan menggunakan properti GPU compositor (`opacity`, `transform`, `flex`, `height`).
   - Mencegah layout thrashing dan penurunan frame rate saat pengguna melakukan scrolling cepat.
3. **Aksesibilitas & Standar Antarmuka (A11y)**:
   - Dukungan navigasi keyboard penuh (`Tab`, `Enter`, `Escape` untuk menutup drawer dan dialog).
   - Kontras warna teks memenuhi standar WCAG AA di seluruh komponen tema gelap.
   - Mendukung preferensi sistem `prefers-reduced-motion` untuk pengguna yang sensitif terhadap animasi.
4. **Keamanan Tipe Data (Strict TypeScript)**:
   - Seluruh data konten dikelola terpusat di `src/data/` dengan tipe data TypeScript ketat, serta divalidasi otomatis via skrip pengecekan data (`npm run check-data`).

---

## Pernyataan Hukum & Hak Cipta

Website ini merupakan proyek buatan penggemar (fan-made) yang bersifat non-komersial, dibuat secara khusus untuk tujuan edukasi dan partisipasi dalam kompetisi pengembangan web (Web Development Game Competition). Website ini tidak berafiliasi dengan, disponsori, atau didukung secara resmi oleh Square Enix.

Seluruh judul game, karakter, ilustrasi, sprite, audio, dan aset visual merupakan hak cipta milik &copy; **Square Enix Co., Ltd.**

---

## Lisensi

Proyek ini menggunakan lisensi sumber terbuka [MIT License](LICENSE.md).
