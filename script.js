document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan fungsi untuk menangani formulir kontak
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                alert('Terima kasih! Pesan Anda telah terkirim.');
                contactForm.reset();
            }
        });
    }

    function validateForm() {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (!name || !email || !message) {
            alert('Mohon isi semua field yang diperlukan.');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Mohon masukkan alamat email yang valid.');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Tambahkan fungsi untuk menampilkan/menyembunyikan detail paket
    const packageButtons = document.querySelectorAll('.package-button');
    packageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            if (details.style.maxHeight) {
                details.style.maxHeight = null;
            } else {
                details.style.maxHeight = details.scrollHeight + "px";
                details.style.transition = "max-height 0.5s ease-in-out";
            }
        });
    });

    // Tambahkan fungsi untuk scroll smooth
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Objek untuk menyimpan stok paket
    const stokPaket = {
        pemula: 10,
        pro: 5,
        sultan: 3
    };

    // Fungsi untuk memperbarui tampilan stok
    function updateStok(paket) {
        const stokElement = document.getElementById(`stok-${paket}`);
        stokElement.textContent = stokPaket[paket];
    }

    // Fungsi untuk memesan paket
    function pesanPaket(paket) {
        console.log(`Memesan paket: ${paket}`);
        const kontakElement = document.getElementById('kontak');
        if (kontakElement) {
            kontakElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Elemen kontak tidak ditemukan');
        }
    }

    // Inisialisasi tampilan stok
    updateStok('pemula');
    updateStok('pro');
    updateStok('sultan');

    // Daftar kode promo yang valid
    const validPromos = {
        'DISKON10': 10,
        'HEMAT20': 20,
        'SUPER30': 30
    };

    // Fungsi untuk menangani submit form promo
    document.getElementById('promo-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const kodePromo = document.getElementById('kode-promo').value.toUpperCase();
        const promoMessage = document.getElementById('promo-message');

        if (validPromos.hasOwnProperty(kodePromo)) {
            const diskonPersen = validPromos[kodePromo];
            promoMessage.textContent = `Selamat! Anda mendapatkan diskon ${diskonPersen}%`;
            promoMessage.style.color = 'green';
        } else {
            promoMessage.textContent = 'Kode promo tidak valid';
            promoMessage.style.color = 'red';
        }
    });

    // Tambahkan fungsi untuk mengontrol musik
    const audio = document.getElementById('background-music');
    const toggleButton = document.getElementById('toggle-music');

    toggleButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            toggleButton.textContent = '🔇 Hentikan Musik';
        } else {
            audio.pause();
            toggleButton.textContent = '🎵 Putar Musik';
        }
    });

    // Tambahkan fungsi untuk menangani submit form top up
    const topupForm = document.getElementById('topup-form');
    
    topupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userId = document.getElementById('user-id').value;
        const serverId = document.getElementById('server-id').value;
        const diamondAmount = document.getElementById('diamond-amount').value;
        
        // Di sini Anda bisa menambahkan logika untuk memproses top up
        // Untuk contoh ini, kita hanya akan menampilkan alert
        alert(`Top up berhasil diproses!\nUser ID: ${userId}\nServer ID: ${serverId}\nJumlah Diamond: ${diamondAmount}`);
        
        // Reset form setelah submit
        topupForm.reset();
    });

    // Fungsi untuk animasi tombol pesanan
    function animateButton(button) {
        button.classList.add('button-pressed');
        setTimeout(() => {
            button.classList.remove('button-pressed');
        }, 300);
    }

    // Fungsi untuk halaman Tentang Kami
    function initTentangKami() {
        console.log("Halaman Tentang Kami dimuat");
        // Tambahkan kode khusus untuk halaman Tentang Kami di sini
    }

    // Deteksi halaman yang sedang aktif
    if (document.body.classList.contains("tentang-kami")) {
        initTentangKami();
    }
});