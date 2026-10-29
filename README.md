# Eunoia PWA

Web app kesehatan mental (Progressive Web App): diary dengan mood, chatbot AI, konsultasi, latihan pernapasan, suara relaksasi, dan artikel edukasi. Dikembangkan untuk kompetisi ITConvert, Universitas Jember (Juara 2 kategori Software Development).

Repo ini berisi front end (HTML/CSS/JS). Konten yang tampil adalah contoh bawaan; analisis mood (dual LSTM) dan balasan AI tidak berjalan di repo ini.

## Tampilan

Tangkapan layar asli dari aplikasi yang dijalankan, 390×844. File gambarnya ada di branch [`portfolio-screenshots`](https://github.com/Fahminurs/eunoia-pwa/tree/portfolio-screenshots/portfolio-screenshots).

| Login | Home | Diary List |
|:---:|:---:|:---:|
| <img src="https://raw.githubusercontent.com/Fahminurs/eunoia-pwa/portfolio-screenshots/portfolio-screenshots/01-login-390.png" width="240"> | <img src="https://raw.githubusercontent.com/Fahminurs/eunoia-pwa/portfolio-screenshots/portfolio-screenshots/02-home-390.png" width="240"> | <img src="https://raw.githubusercontent.com/Fahminurs/eunoia-pwa/portfolio-screenshots/portfolio-screenshots/03-diary-list-390.png" width="240"> |
| Masuk akun | Banner, bar kondisi mental, mood | Daftar diary dengan mood |

| Tulis Diary | Chatbot AI | Breathing |
|:---:|:---:|:---:|
| <img src="https://raw.githubusercontent.com/Fahminurs/eunoia-pwa/portfolio-screenshots/portfolio-screenshots/04-diary-tulis-390.png" width="240"> | <img src="https://raw.githubusercontent.com/Fahminurs/eunoia-pwa/portfolio-screenshots/portfolio-screenshots/05-chatbot-ai-390.png" width="240"> | <img src="https://raw.githubusercontent.com/Fahminurs/eunoia-pwa/portfolio-screenshots/portfolio-screenshots/06-breath-390.png" width="240"> |
| Menulis catatan diary | Percakapan dengan chatbot | Latihan pernapasan |

| Relaxing Sound | Explore & Care | Artikel |
|:---:|:---:|:---:|
| <img src="https://raw.githubusercontent.com/Fahminurs/eunoia-pwa/portfolio-screenshots/portfolio-screenshots/07-relaxing-sound-390.png" width="240"> | <img src="https://raw.githubusercontent.com/Fahminurs/eunoia-pwa/portfolio-screenshots/portfolio-screenshots/08-explore-care-390.png" width="240"> | <img src="https://raw.githubusercontent.com/Fahminurs/eunoia-pwa/portfolio-screenshots/portfolio-screenshots/09-artikel-390.png" width="240"> |
| Suara relaksasi | Menu Explore & Care | Artikel kesehatan mental |

## Menjalankan

```bash
python3 -m http.server 8000
```

Buka `http://localhost:8000/Welcome.html`.
