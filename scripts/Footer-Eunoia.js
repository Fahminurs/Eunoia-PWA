const list = document.querySelectorAll('.list-eunoia');
    const indikator = document.querySelector('.indikator-eunoia');
    
    function updateIndicatorPosition(activeItem) {
        if (activeItem) {
            const ul = activeItem.parentElement; // Ambil referensi ke ul
            const ulLeftOffset = ul.offsetLeft; // Jarak ul dari kiri
            const liWidth = activeItem.offsetWidth; // Lebar item list yang aktif
            const liLeftOffset = activeItem.offsetLeft; // Jarak item list dari kiri
    
            // Hitung posisi yang benar untuk indikator
            const correctOffset = liLeftOffset - ulLeftOffset;
    
            // Update ukuran dan posisi indikator
            indikator.style.width = `${liWidth}px`;
            indikator.style.transform = `translateX(${correctOffset}px)`;
        }
    }
    
    function activeLink() {
        list.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
        updateIndicatorPosition(this);
    }
    
    // Tambahkan event listener ke setiap item list
    list.forEach((item) => item.addEventListener('click', activeLink));
    
    // Set indikator ke posisi awal saat halaman dimuat
    document.addEventListener('DOMContentLoaded', () => {
        const activeItem = document.querySelector('.list-eunoia.active');
        updateIndicatorPosition(activeItem);
    });
    
    // Tambahkan event listener untuk memperbarui posisi indikator saat ukuran layar berubah
    window.addEventListener('resize', () => {
        const activeItem = document.querySelector('.list-eunoia.active');
        updateIndicatorPosition(activeItem);
    });
    