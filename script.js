const projectData = {
  coffeshop: {
    title: "Coffee Shop E-Commerce",
    description:
      "Platform e-commerce lengkap untuk coffee shop dengan sistem pemesanan, pembayaran, dan manajemen produk yang terintegrasi.",
    features: [
      "Katalog Produk dengan Filter & Search",
      "Shopping Cart & Checkout System",
      "Payment Gateway Integration",
      "Order Management System",
      "Admin Dashboard dengan Statistik",
    ],
    tech: [
      "Laravel",
      "MySQL",
      "JavaScript",
      "Payment Gateway",
      "Alpine.js",
      "AJAX",
    ],
    screenshots: [
      { path: "projek/coffeshop/home.jpeg", caption: "Homepage" },
      { path: "projek/coffeshop/dashboard.jpeg", caption: "Dashboard Admin" },
      { path: "projek/coffeshop/katalog.jpeg", caption: "Katalog Produk" },
      { path: "projek/coffeshop/keranjang.jpeg", caption: "Shopping Cart" },
      {
        path: "projek/coffeshop/manajemen-pesanan.jpeg",
        caption: "Manajemen Pesanan",
      },
      {
        path: "projek/coffeshop/manajemen-produk.jpeg",
        caption: "Manajemen Produk",
      },
      {
        path: "projek/coffeshop/paymentgetway.jpeg",
        caption: "Payment Gateway",
      },
      {
        path: "projek/coffeshop/payment-sukses.jpeg",
        caption: "Pembayaran Sukses",
      },
      {
        path: "projek/coffeshop/notifikasi berhasil.jpeg",
        caption: "Notifikasi",
      },
    ],
  },
  firma: {
    title: "Law Firm Management System",
    description:
      "Sistem manajemen firma hukum komprehensif dengan fitur tracking perkara, manajemen klien, komunikasi real-time, dan dashboard statistik.",
    features: [
      "Case Management System",
      "Client Portal",
      "Real-time Chat",
      "Progress Tracking",
      "Dashboard Analytics",
    ],
    tech: ["Laravel", "MySQL", "WebSocket", "Tailwind CSS", "AJAX"],
    screenshots: [
      { path: "projek/firma/home.jpeg", caption: "Homepage" },
      {
        path: "projek/firma/dashboard-statistik-admin.jpeg",
        caption: "Statistik Admin",
      },
      { path: "projek/firma/data-client.jpeg", caption: "Data Client" },
      {
        path: "projek/firma/fitur-chat-admin.jpeg",
        caption: "Fitur Chat Admin",
      },
      {
        path: "projek/firma/fiturchat-client.jpeg",
        caption: "Fitur Chat Client",
      },
      { path: "projek/firma/login-client.jpeg", caption: "Login Client" },
      { path: "projek/firma/login.jpeg", caption: "Login Admin" },
      {
        path: "projek/firma/manajemen-client.jpeg",
        caption: "Manajemen Client",
      },
      {
        path: "projek/firma/manajemen-perkara.jpeg",
        caption: "Manajemen Perkara",
      },
      {
        path: "projek/firma/manajemen-progres-perkara.jpeg",
        caption: "Manajemen Progress",
      },
      {
        path: "projek/firma/tracking-progres-perkara-client.jpeg",
        caption: "Tracking Progress",
      },
    ],
  },
  "landingpage-sekolah": {
    title: "School Landing Page",
    description:
      "Website landing page modern dan responsif untuk madrasah dengan informasi lengkap tentang sekolah, fasilitas, berita, dan prestasi.",
    features: [
      "Responsive Design",
      "Photo Gallery",
      "News Section",
      "Facilities Showcase",
      "Contact Form",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Alpine.js"],
    screenshots: [
      { path: "projek/landingpage-sekolah/home.jpeg", caption: "Homepage" },
      {
        path: "projek/landingpage-sekolah/berita-madrasah.jpeg",
        caption: "Berita Madrasah",
      },
      {
        path: "projek/landingpage-sekolah/fasilitas.jpeg",
        caption: "Fasilitas",
      },
      {
        path: "projek/landingpage-sekolah/galeri-madrasah.jpeg",
        caption: "Galeri Madrasah",
      },
      {
        path: "projek/landingpage-sekolah/kontak-madrasah.jpeg",
        caption: "Kontak Madrasah",
      },
      { path: "projek/landingpage-sekolah/prestasi.jpeg", caption: "Prestasi" },
      { path: "projek/landingpage-sekolah/sejarah.jpeg", caption: "Sejarah" },
      {
        path: "projek/landingpage-sekolah/staf-pengajar.jpeg",
        caption: "Staf Pengajar",
      },
    ],
  },
  "pengajuan-perbaikan-alat": {
    title: "Equipment Repair Request System",
    description:
      "Sistem pengajuan dan tracking perbaikan alat dengan status real-time, history lengkap, dan dashboard monitoring untuk admin.",
    features: [
      "Repair Request Form",
      "Real-time Tracking",
      "History Log",
      "Admin Dashboard",
      "Notification System",
    ],
    tech: ["PHP Native", "MySQL", "Alpine.js", "jQuery"],
    screenshots: [
      {
        path: "projek/pengajuan-perbaikan-alat/home.jpeg",
        caption: "Homepage",
      },
      {
        path: "projek/pengajuan-perbaikan-alat/dashboard.jpeg",
        caption: "Dashboard",
      },
      {
        path: "projek/pengajuan-perbaikan-alat/history-perbaikan.jpeg",
        caption: "History Perbaikan",
      },
      {
        path: "projek/pengajuan-perbaikan-alat/input-kerusakan-user.jpeg",
        caption: "Input Kerusakan",
      },
      { path: "projek/pengajuan-perbaikan-alat/login.jpeg", caption: "Login" },
      {
        path: "projek/pengajuan-perbaikan-alat/tracking-perbaikan.jpeg",
        caption: "Tracking Perbaikan",
      },
    ],
  },
  yayasan: {
    title: "Foundation Management System",
    description:
      "Sistem manajemen yayasan komprehensif dengan fitur manajemen keuangan, user management, tracking bulanan, dan reporting.",
    features: [
      "Cash Flow Management",
      "User Management",
      "Financial Reports",
      "Dashboard Charts",
      "PDF Export",
    ],
    tech: ["Laravel", "MySQL", "Chart.js", "Alpine.js"],
    screenshots: [
      { path: "projek/yayasan/home.jpeg", caption: "Homepage" },
      { path: "projek/yayasan/dashboard.jpeg", caption: "Dashboard" },
      { path: "projek/yayasan/manajemen-kas.jpeg", caption: "Manajemen Kas" },
      { path: "projek/yayasan/manajemen-user.jpeg", caption: "Manajemen User" },
      {
        path: "projek/yayasan/tracking-bulanan.jpeg",
        caption: "Tracking Bulanan",
      },
    ],
  },
};

const pcGroup = document.getElementById("pc-group");
const aboutSection = document.getElementById("about-section");
const projectSection = document.getElementById("project-section");
const contactSection = document.getElementById("contact-section");
const header = document.querySelector("header");
const scrollHint = document.getElementById("scroll-hint");
const gridContainer = document.getElementById("grid-container");
const modal = document.getElementById("project-modal");
const lightbox = document.getElementById("lightbox");
const navLinks = document.querySelectorAll(".nav-link");

let scale = 1;
let targetScale = 1;
let easing = 0.1;

const textToType =
  "Hi, Saya Wafy Putra Pangestu. Lulusan D3 Manajemen Informatika (IPK 3.53) dengan spesialisasi Sistem Informasi Manajemen. Memiliki pengalaman praktis di PT. Paragon Technology and Innovation dan Dinas Pemberdayaan Perempuan & Perlindungan Anak.";
const typeWriterElement = document.getElementById("typewriter-text");
let typeIndex = 0;
let hasStartedTyping = false;

function typeWriter() {
  if (typeIndex < textToType.length) {
    typeWriterElement.innerHTML += textToType.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeWriter, 20);
  }
}

let tagCloudInstance = null;
function initTagCloud() {
  if (tagCloudInstance) return;
  const container = "#tagcloud-container";
  const skills = [
    { text: "Laravel", icon: "devicon-laravel-original" },
    { text: "PHP", icon: "devicon-php-plain" },
    { text: "MySQL", icon: "devicon-mysql-plain" },
    { text: "HTML5", icon: "devicon-html5-plain" },
    { text: "CSS3", icon: "devicon-css3-plain" },
    { text: "JS", icon: "devicon-javascript-plain" },
    { text: "Tailwind", icon: "devicon-tailwindcss-original" },
    { text: "Alpine", icon: "devicon-alpinejs-original" },
    { text: "Git", icon: "devicon-git-plain" },
    { text: "Figma", icon: "devicon-figma-plain" },
    { text: "VS Code", icon: "devicon-vscode-plain" },
  ];
  const texts = skills.map((s) => s.text);
  const options = {
    radius: 200,
    maxSpeed: "normal",
    initSpeed: "normal",
    direction: 135,
    keep: true,
  };
  tagCloudInstance = TagCloud(container, texts, options);
  setTimeout(() => {
    const items = document.querySelectorAll(".tagcloud--item");
    items.forEach((item) => {
      const text = item.innerText.trim();
      const skill = skills.find((s) => s.text === text);
      if (skill)
        item.innerHTML = `<div class="skill-item-container"><i class="${skill.icon} skill-icon-3d colored"></i><span class="skill-text-3d">${text}</span></div>`;
    });
  }, 100);
}

function copyEmail() {
  navigator.clipboard
    .writeText("wafyputrapangestu@gmail.com")
    .then(function () {
      var toast = document.getElementById("toast");
      toast.className = "show";
      setTimeout(function () {
        toast.className = toast.className.replace("show", "");
      }, 3000);
    });
}

// STARFIELD ANIMATION
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
let width, height;
let stars = [];
const numStars = 400;
const speed = 2;

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
function initStars() {
  for (let i = 0; i < numStars; i++)
    stars.push({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      z: Math.random() * width,
    });
}

// PERBAIKAN UTAMA ADA DI SINI (updateStars)
function updateStars() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
  if (window.innerWidth > 768) {
    for (let i = 0; i < numStars; i++) {
      let star = stars[i];
      star.z -= speed;

      // Reset jika bintang lewat (<=0) ATAU jika window di-resize jadi kecil (star.z > width)
      if (star.z <= 0 || star.z > width) {
        star.x = Math.random() * width - width / 2;
        star.y = Math.random() * height - height / 2;
        star.z = width;
      }

      const x = (star.x / star.z) * width + width / 2;
      const y = (star.y / star.z) * height + height / 2;

      // Mencegah radius negatif: gunakan Math.max(0, ...)
      const rawSize = (1 - star.z / width) * 3;
      const size = Math.max(0, rawSize);

      if (x >= 0 && x <= width && y >= 0 && y <= height && size > 0) {
        const brightness = 1 - star.z / width;
        ctx.fillStyle = `rgba(34, 197, 94, ${brightness})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  requestAnimationFrame(updateStars);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
initStars();
updateStars();

const config = {
  pcExit: 8,
  aboutEnter: 8,
  aboutExit: 18,
  projectEnter: 21,
  projectExit: 31,
  contactEnter: 34,
  max: 42,
};
const scrollSpeedConst = 0.06;
const velocityDamping = 0.75;

function createGrid() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 12; i++) {
    const hLine = document.createElement("div");
    hLine.className = "grid-line horizontal";
    hLine.style.top = `${i * 8.33}%`;
    fragment.appendChild(hLine);
    const vLine = document.createElement("div");
    vLine.className = "grid-line vertical";
    vLine.style.left = `${i * 8.33}%`;
    fragment.appendChild(vLine);
  }
  gridContainer.appendChild(fragment);
}
function createDataStream() {
  const dataStream = document.getElementById("data-stream");
  const fragment = document.createDocumentFragment();
  const chars = "01XYWAFY";
  for (let i = 0; i < 10; i++) {
    const span = document.createElement("span");
    span.textContent = chars[Math.floor(Math.random() * chars.length)];
    span.style.left = `${Math.random() * 100}%`;
    span.style.animationDuration = `${Math.random() * 3 + 2}s`;
    span.style.animationDelay = `${Math.random() * 2}s`;
    fragment.appendChild(span);
  }
  dataStream.appendChild(fragment);
}
createGrid();
createDataStream();

// Setup Intersection Observer untuk Navbar, Animasi Mengetik, dan TagCloud
const sectionsMap = [
  { target: 'home', el: document.querySelector('main') },
  { target: 'about', el: document.getElementById('about-section') },
  { target: 'project', el: document.getElementById('project-section') },
  { target: 'kontak', el: document.getElementById('contact-section') }
];

const observerOptions = { root: null, rootMargin: '0px', threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      let targetName = 'home';
      if (id === 'about-section') targetName = 'about';
      else if (id === 'project-section') targetName = 'project';
      else if (id === 'contact-section') targetName = 'kontak';
      
      navLinks.forEach(link => {
        link.classList.remove("nav-active");
        if (link.dataset.target === targetName) link.classList.add("nav-active");
      });

      if (id === 'about-section') {
        if (!hasStartedTyping) {
          hasStartedTyping = true;
          typeWriter();
        }
        initTagCloud();
      }
    }
  });
}, observerOptions);

sectionsMap.forEach(sec => {
  if (sec.el) observer.observe(sec.el);
});

// Render loop hanya untuk efek zoom PC di hero section berdasarkan scroll native
function animate() {
  requestAnimationFrame(animate);
  
  let scrollY = window.scrollY;
  let vh = window.innerHeight;
  let maxScroll = vh * 1.5;
  
  // Kalkulasi progress zoom berdasarkan scroll
  let zoomProgress = Math.min(scrollY / (vh * 1.0), 1);
  
  // Skala PC dari 1 ke 40
  let currentScale = 1 + (zoomProgress * 40);
  
  if (currentScale < 15) {
    pcGroup.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
    let pcOp = 1;
    if (currentScale > 5) pcOp = 1 - (currentScale - 5) / 10;
    pcGroup.style.opacity = Math.max(0, pcOp);
    pcGroup.style.visibility = pcOp > 0 ? "visible" : "hidden";
    scrollHint.style.opacity = currentScale > 1.5 ? 0 : 1;
  } else {
    pcGroup.style.visibility = "hidden";
  }

  // Animasi grid background saat di-scroll
  gridContainer.style.transform = `perspective(500px) rotateX(${zoomProgress * 15}deg) scale(${1 + zoomProgress * 0.5})`;

  // Sembunyikan navbar saat animasi PC zoom sedang berlangsung di tengah-tengah
  if (currentScale > 2 && currentScale < 10) {
    header.classList.add("hidden-nav");
  } else {
    header.classList.remove("hidden-nav");
  }

  // Efek About Section masuk dari dalam monitor (scale & opacity)
  let entranceStart = vh * 0.5;
  if (scrollY < maxScroll) {
    let progress = Math.max(0, (scrollY - entranceStart) / (maxScroll - entranceStart));
    aboutSection.style.transform = `scale(${0.9 + (progress * 0.1)})`;
    aboutSection.style.opacity = progress;
  } else {
    aboutSection.style.transform = `scale(1)`;
    aboutSection.style.opacity = 1;
  }
}
requestAnimationFrame(animate);

// Smooth scroll native untuk klik Navbar
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.dataset.target;
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      let sectionId = targetId === "kontak" ? "contact-section" : targetId + "-section";
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close-modal");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

document.querySelectorAll(".view-project-btn, .project-card").forEach((el) => {
  el.addEventListener("click", (e) => {
    if (el.classList.contains("view-project-btn")) e.stopPropagation();
    const card = el.closest(".project-card");
    const projectId = card.dataset.project;
    const project = projectData[projectId];
    if (project) showProjectModal(project);
  });
});

function showProjectModal(project) {
  const featuresHTML = project.features
    .map(
      (f) =>
        `<li class="text-green-300 mb-2 flex items-start gap-2"><span class="text-green-500 mt-1">▹</span> ${f}</li>`
    )
    .join("");
  const techHTML = project.tech
    .map(
      (t) =>
        `<span class="skill-tag text-xs font-bold bg-green-900/40 px-3 py-1 border border-green-800 text-green-400 uppercase">${t}</span>`
    )
    .join("");
  const screenshotsHTML = project.screenshots
    .map(
      (s) => `
        <div class="screenshot-item group" onclick="openLightbox('${s.path}')"><img src="${s.path}" alt="${s.caption}" loading="lazy" class="group-hover:scale-110 transition-transform duration-500"><div class="screenshot-caption font-bold tracking-wider">${s.caption}</div></div>`
    )
    .join("");
  modalBody.innerHTML = `<div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1 space-y-6"><div><h2 class="text-3xl font-bold text-white glow-text mb-2">${project.title}</h2><div class="loading-bar w-full mb-4"></div><p class="text-green-300/90 leading-relaxed text-base">${project.description}</p></div><div><h3 class="text-lg font-bold text-white mb-3 border-b border-green-800 pb-1">TECHNOLOGIES</h3><div class="flex flex-wrap gap-2">${techHTML}</div></div><div><h3 class="text-lg font-bold text-white mb-3 border-b border-green-800 pb-1">KEY FEATURES</h3><ul class="list-none text-sm">${featuresHTML}</ul></div></div><div class="lg:col-span-2"><h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2"><span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> SCREENSHOTS GALLERY</h3><div class="screenshot-gallery">${screenshotsHTML}</div></div></div>`;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "";
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});
window.openLightbox = function (imagePath) {
  lightboxImage.src = imagePath;
  lightbox.classList.add("active");
};
lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === lightboxClose) {
    lightbox.classList.remove("active");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
});
