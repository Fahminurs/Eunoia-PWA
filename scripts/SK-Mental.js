        // Fungsi untuk menangani klik pada nomor pertanyaan
        function handleQuestionClick(li) {
            // Hapus kelas aktif dari semua nomor
            document.querySelectorAll('.Nomor-Pertanyaan li').forEach(el => el.classList.remove('active'));
            // Tambahkan kelas aktif pada nomor yang diklik
            li.classList.add('active');
            
            // Sembunyikan semua pertanyaan
            document.querySelectorAll('.Pertanyaan').forEach(p => p.classList.remove('active'));
            // Tampilkan pertanyaan yang sesuai
            const questionNumber = li.getAttribute('data-question');
            document.querySelector(`.Pertanyaan-${questionNumber}`).classList.add('active');
        }
    
        // Menambahkan event listener pada semua nomor pertanyaan
        document.querySelectorAll('.Nomor-Pertanyaan li').forEach(li => {
            li.addEventListener('click', () => handleQuestionClick(li));
        });
    
        // Menampilkan pertanyaan pertama secara default
        document.addEventListener('DOMContentLoaded', () => {
            const firstQuestion = document.querySelector('.Nomor-Pertanyaan li[data-question="1"]');
            if (firstQuestion) {
                handleQuestionClick(firstQuestion);
            }
        });