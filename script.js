function showSection(sectionId) {
    // Menyembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Sembunyikan semua section
    });

    // Menampilkan section yang dipilih
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block'; // Tampilkan section yang diminta
    } else {
        console.error(`Section with ID '${sectionId}' not found.`);
    }
}

// Secara default, menampilkan bagian 'galeri-kegiatan'
window.onload = () => {
    showSection('galeri-kegiatan');
};

// Tambahkan event listener pada link atau tombol navigasi
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah aksi default tautan
        const targetSection = event.target.getAttribute('data-section');
        showSection(targetSection); // Panggil fungsi untuk menampilkan section
    });
});
