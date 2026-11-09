document.addEventListener("DOMContentLoaded", function() {
  
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  if (hamburger && navMenu) {
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
          if (fotoSection) fotoSection.style.display = 'block';
          if (videoSection) videoSection.style.display = 'block';
        } else if (filter === 'foto') {
          if (fotoSection) fotoSection.style.display = 'block';
          if (videoSection) videoSection.style.display = 'none';
          if (video) video.pause();
        } else if (filter === 'video') {
          if (fotoSection) fotoSection.style.display = 'none';
          if (videoSection) videoSection.style.display = 'block';
        }
      });
    });
  }
  
  const form = document.getElementById("guestbookForm");
  const msg = document.getElementById("formMessage");
  const resetBtn = document.getElementById("resetBtn");
  let msgTimer;
  
  if (form && msg) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      clearTimeout(msgTimer);
      msg.textContent = "Pesan terkirim!";
      msg.style.display = "block";
      msg.style.color = "#2d5a47";
      msg.style.background = "#eaf0e9";
      msg.style.padding = "14px";
      msg.style.borderRadius = "8px";
      msg.style.lineHeight = "1.6";
      msg.style.textAlign = "center";
      form.reset();
      msgTimer = setTimeout(function() {
        msg.textContent = "";
        msg.style.display = "none";
        msg.style.background = "transparent";
        msg.style.padding = "0";
      }, 5000);
    });
  }
  
  if (form && resetBtn) {
    resetBtn.addEventListener("click", function() {
      let overlay = document.getElementById("confirmOverlay");
      if (overlay) overlay.remove();
      
      overlay = document.createElement("div");
      overlay.id = "confirmOverlay";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.background = "rgba(0,0,0,0.5)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = "9999";
      overlay.style.padding = "20px";
      
      const box = document.createElement("div");
      box.style.background = "white";
      box.style.padding = "24px";
      box.style.borderRadius = "12px";
      box.style.maxWidth = "320px";
      box.style.width = "100%";
      box.style.textAlign = "center";
      box.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
      
      const text = document.createElement("p");
      text.textContent = "Apakah kamu yakin ingin menghapus?";
      text.style.fontSize = "15px";
      text.style.fontWeight = "600";
      text.style.color = "#1d2923";
      text.style.marginBottom = "20px";
      
      const btnWrap = document.createElement("div");
      btnWrap.style.display = "flex";
      btnWrap.style.gap = "10px";
      btnWrap.style.justifyContent = "center";
      
      const yesBtn = document.createElement("button");
      yesBtn.textContent = "Ya";
      yesBtn.style.flex = "1";
      yesBtn.style.padding = "11px";
      yesBtn.style.border = "none";
      yesBtn.style.borderRadius = "8px";
      yesBtn.style.background = "#183d32";
      yesBtn.style.color = "white";
      yesBtn.style.fontWeight = "700";
      yesBtn.style.cursor = "pointer";
      
      const noBtn = document.createElement("button");
      noBtn.textContent = "Tidak";
      noBtn.style.flex = "1";
      noBtn.style.padding = "11px";
      noBtn.style.border = "1px solid #dce2db";
      noBtn.style.borderRadius = "8px";
      noBtn.style.background = "white";
      noBtn.style.color = "#1d2923";
      noBtn.style.fontWeight = "700";
      noBtn.style.cursor = "pointer";
      
      yesBtn.addEventListener("click", function() {
        form.reset();
        clearTimeout(msgTimer);
        msg.textContent = "";
        msg.style.display = "none";
        msg.style.background = "transparent";
        msg.style.padding = "0";
        overlay.remove();
      });
      
      noBtn.addEventListener("click", function() {
        overlay.remove();
      });
      
      overlay.addEventListener("click", function(e) {
        if (e.target === overlay) overlay.remove();
      });
      
      btnWrap.appendChild(yesBtn);
      btnWrap.appendChild(noBtn);
      box.appendChild(text);
      box.appendChild(btnWrap);
      overlay.appendChild(box);
      document.body.appendChild(overlay);
    });
  }
  
});
