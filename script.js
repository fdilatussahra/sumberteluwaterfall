const tabs = document.querySelectorAll('.gallery-tab');
const fotoSection = document.getElementById('foto-section');
const videoSection = document.getElementById('video-section');

if (tabs.length > 0) {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      const video = document.querySelector('video');

      if (filter === 'all') {
        fotoSection.style.display = 'block';
        videoSection.style.display = 'block';
      } else if (filter === 'foto') {
        fotoSection.style.display = 'block';
        videoSection.style.display = 'none';
        if (video) video.pause();
      } else if (filter === 'video') {
        fotoSection.style.display = 'none';
        videoSection.style.display = 'block';
      }
    });
  });
}
const guestbookForm = document.getElementById("guestbookForm");

if (guestbookForm) {
    guestbookForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formMessage = document.getElementById("formMessage");

        formMessage.textContent =
            "Terima kasih! Pesan kamu berhasil diisi.";

        formMessage.style.color = "#2d5a47";

        guestbookForm.reset();
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("guestbookForm");
  const msg = document.getElementById("formMessage");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = form.nama.value.trim();
    const pesan = form.pesan.value.trim();

    if (!nama || !pesan) {
      msg.textContent = "⚠️ Nama dan pesan wajib diisi ya!";
      msg.style.color = "#c0392b";
      return;
    }

    const aktivitas = [...form.querySelectorAll('input[name="aktivitas"]:checked')]
      .map(el => el.value)
      .join(", ") || "Tidak ada";

    const teman = form.querySelector('input[name="teman"]:checked')?.value || "-";

    msg.innerHTML = `Terima kasih, <b>${nama}</b>! ✨<br>
      Kesanmu sudah terkirim. Berkunjung bersama <b>${teman}</b>, aktivitas: <b>${aktivitas}</b>. Sampai jumpa lagi di Sumber 3!`;
    msg.style.color = "#2d5a47";
    msg.style.background = "#eaf0e9";
    msg.style.padding = "14px";
    msg.style.borderRadius = "8px";
    msg.style.lineHeight = "1.6";

    form.reset();

    msg.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  form.addEventListener("reset", function () {
    setTimeout(() => {
      msg.textContent = "";
      msg.style.background = "transparent";
      msg.style.padding = "0";
    }, 10);
  });
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if(hamburger && navMenu){
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
  });
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.textContent = '☰';
    });
  });
          }
