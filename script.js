// ==========================================
// 1. MEMATIKAN FUNGSI KLIK KANAN (CONTEXT MENU)
// ==========================================
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

"use strict";

const i18n = {
  id: {
    skip: "Lewati ke konten utama", openNav: "Buka navigasi", navHome: "Beranda", navAbout: "Tentang Saya",
    navEducation: "Pendidikan", navExperience: "Pengalaman", navWork: "Pengalaman Kerja",
    navOrg: "Pengalaman Organisasi", navStudio: "Studio Karya", navTechnical: "Proyek Technical",
    navCreative: "Desain & Content", navCertifications: "Sertifikasi", navContact: "Kontak",
    heroEyebrow: "TERBUKA UNTUK PELUANG KOLABORASI",
    heroSubtitle: "Perencanaan Regional | Analitik Data | Administrasi | Pemasaran Digital",
    heroTagline: "Mengubah Data menjadi Wawasan, Perencanaan menjadi Dampak.", explore: "Jelajahi Studio Karya",
    downloadCv: "Unduh CV", basedIn: "BERBASIS DI", focus: "FOKUS", peopleFocused: "& berorientasi pada manusia",
    scroll: "GULIR UNTUK MENJELAJAH", aboutEyebrow: "TENTANG SAYA",
    aboutTitle: "Perspektif analitis.<br /><span class=\"accent\">Dampak nyata.</span>",
    aboutLead: "Saya Adiesti Nuri Amanda, lulusan Ekonomi Pembangunan Universitas Trunodjoyo Madura.",
    aboutBody: "Saya memadukan analisis data, perencanaan regional, administrasi, dan komunikasi digital untuk mendukung keputusan yang berdampak.",
    gpa: "IPK Ekonomi Pembangunan", sipdAccuracy: "Presisi rekonsiliasi SIPD", focusAreas: "Bidang kontribusi",
    letsTalk: "Mari berbincang", educationEyebrow: "PENDIDIKAN & PRESTASI",
    educationTitle: "Belajar untuk<br /><span class=\"accent\">membangun dampak.</span>",
    educationIntro: "Fondasi ekonomi pembangunan dan prestasi yang membentuk rasa ingin tahu serta komitmen saya.",
    degree: "S1 Ekonomi Pembangunan", gpaLabel: "IPK Kumulatif", regionalPlanning: "Perencanaan Wilayah",
    regionalFinance: "Keuangan Regional", scholarship: "BEASISWA · 2025/2026",
    scholarshipDesc: "Penerima beasiswa UPZ BAZNAS.", achievement: "PRESTASI · 2024",
    finalist: "Finalis LKTI KOMPAS", finalistDesc: "Universitas Jember.",
    workEyebrow: "PENGALAMAN PROFESIONAL", workTitle: "Kerja & kontribusi<br /><span class=\"accent\">profesional.</span>",
    workIntro: "Pengalaman dalam perencanaan daerah, pengajaran, dan kerja editorial.",
    internship: "MAGANG · PERENCANAAN DAERAH", bappedaRole: "Staf Administrasi & Perencanaan",
    bappedaDesc: "Audit KAK/RSK tahun anggaran 2025–2026, dukungan Musrenbang RPJMD dan Forum Perangkat Daerah, serta rekonsiliasi data SIPD dengan presisi 100%.",
    viewDocumentation: "Dokumentasi", viewCertificate: "Sertifikat",
    teachingAssistant: "ASISTENSI AKADEMIK", assistantRole: "Asisten Dosen Keuangan Regional",
    assistantDesc: "Mendampingi praktikum, membantu mahasiswa memahami materi, dan mendukung kelancaran kegiatan akademik Keuangan Regional.",
    teaching: "Pengajaran", editorialExperience: "EDITORIAL · JURNAL",
    editorialRole: "Sekretaris Editorial BEP Journal",
    editorialDesc: "Mendukung administrasi editorial, menyiapkan notulensi rapat redaksi, dan membantu koordinasi kegiatan jurnal.",
    orgEyebrow: "PENGALAMAN ORGANISASI", orgTitle: "Bekerja bersama,<br /><span class=\"accent\">bertumbuh bersama.</span>",
    orgIntro: "Kontribusi di organisasi mahasiswa melalui pengelolaan keuangan, teknologi informasi, dan komunikasi.",
    organization: "ORGANISASI · UKM FEB RATI", treasurerRole: "Bendahara Umum 1",
    treasurerDesc: "Mendukung pencatatan dan pengelolaan keuangan organisasi serta koordinasi kebutuhan anggaran kegiatan.",
    finance: "Keuangan", teamwork: "Kolaborasi", itSecretaryRole: "Sekretaris Bidang IT",
    itSecretaryDesc: "Mendukung kebutuhan digital dan dokumentasi organisasi serta berkontribusi sebagai MC pada Dies Natalis.",
    documentation: "Dokumentasi", studioEyebrow: "STUDIO KARYA",
    studioTitle: "Ide menjadi<br /><span class=\"accent\">sesuatu yang nyata.</span>",
    studioIntro: "Eksplorasi proyek data-teknikal dan karya desain komunikasi visual.",
    technicalProjects: "Proyek Technical", creativeContent: "Desain & Content",
    sentimentDesc: "Konsep dashboard web interaktif yang memadukan alur AI dan analisis sentimen pelanggan.",
    pizzaTitle: "Interactive Pizza Sales Analytics",
    pizzaDesc: "Eksplorasi performa penjualan melalui dashboard dan visualisasi data interaktif.",
    regionalAudit: "PERENCANAAN REGIONAL", auditTitle: "Audit Data BAPPEDA Mojokerto",
    auditDesc: "Audit KAK/RSK 2025–2026 dan rekonsiliasi SIPD dengan presisi 100%.",
    academicDesign: "DESAIN PUBLIKASI AKADEMIK", publicationTitle: "Academic Publication Collateral",
    publicationDesc: "Konsep pamflet dan banner Call for Paper BEP Journal Volume 6.",
    socialBranding: "BRANDING MEDIA SOSIAL & EVENT", socialTitle: "Social Media & Event Templates",
    socialDesc: "Template IG Story live report MPAB dan layout ucapan ulang tahun pengurus.",
    digitalIdentity: "IDENTITAS DIGITAL & VIDEO", identityTitle: "Digital Identity & Video Editing",
    identityDesc: "Eksplorasi header LinkedIn profesional, Linktree, dan editing video menggunakan CapCut.",
    certEyebrow: "LISENSI & SERTIFIKASI", certTitle: "Belajar tanpa<br /><span class=\"accent\">berhenti.</span>",
    certIntro: "Sertifikasi yang memperkuat kompetensi analitik, digital, dan perencanaan.",
    certOffice: "Microsoft Office Certification", certAnalyst: "Certified Data Analyst",
    certSocial: "Pemasaran Media Sosial", certPlanning: "Perencanaan Pembangunan Daerah",
    contactEyebrow: "MULAI KONEKSI",
    contactTitle: "Mari Terhubung &amp;<br /><span class=\"accent\">Berkolaborasi!</span>",
    contactDesc: "Punya proyek, peluang, atau ide yang ingin dibahas? Saya senang mendengar kabar dari Anda.",
    rights: "Dibuat dengan niat baik.", backTop: "Kembali ke atas ↑", ownerTitle: "Dashboard Pemilik",
    ownerPrompt: "Masukkan PIN untuk melanjutkan.", pinLabel: "PIN akses", openDashboard: "Buka dashboard",
    staticSecurity: "PIN ini hanya demo sisi klien. Situs statis tidak dapat melindungi tautan atau dokumen privat dari inspeksi browser.",
    dashboardTitle: "Ruang Pemilik",
    dashboardWarning: "Jangan masukkan tautan KTP atau dokumen sensitif ke situs statis publik. Gunakan layanan dengan autentikasi server.",
    trackerTitle: "Pelacak Lamaran", company: "Perusahaan", role: "Posisi", status: "Status",
    sampleCompany: "Contoh Perusahaan", sampleRole: "Analis Data", applied: "Diajukan",
    vaultTitle: "Brankas Dokumen",
    vaultHint: "Tautan kosong dan dinonaktifkan. Jangan simpan tautan privat di halaman publik.",
    copyLink: "Salin tautan", certificates: "Sertifikat", starTitle: "Catatan Wawancara · STAR",
    starS: "Jelaskan konteks dan tantangan.", starT: "Sebutkan tanggung jawab Anda.",
    starA: "Uraikan langkah spesifik yang Anda ambil.", starR: "Tunjukkan hasil terukur yang dicapai.",
    lockDashboard: "Kunci dashboard", pinError: "PIN salah. Silakan coba lagi.",
    copySuccess: "Tautan disalin.", copyFailure: "Gagal menyalin tautan. Periksa izin browser.",
    documentAccess: "Akses Dokumen", verifyPin: "Verifikasi PIN",
    canvasWarning: "Canvas dan PIN sisi klien bukan perlindungan dokumen. Pratinjau ini adalah mockup, bukan dokumen asli.",
    watermarkedPreview: "PRATINJAU BERMARKA", demoOnly: "DEMO ONLY",
    previewHidden: "Pratinjau disensor saat halaman tidak aktif.",
    previewDisclaimer: "Ini hanya mockup Canvas. Perlindungan sebenarnya membutuhkan autentikasi dan penyajian dokumen dari server privat.",
    closePreview: "Tutup pratinjau", documentPinError: "PIN salah. Dokumen tidak ditampilkan.",
    mockDocument: "MOCKUP — BUKAN DOKUMEN ASLI", documentTypePhoto: "Dokumentasi kegiatan",
    documentTypeCertificate: "Pratinjau sertifikat", watermark: "CONFIDENTIAL & PROTECTED - PROPERTY OF ADIESTI NURI AMANDA",
    themeLight: "Ganti ke mode terang", themeDark: "Ganti ke mode gelap"
  },
  en: {
    skip: "Skip to main content", openNav: "Open navigation", navHome: "Home", navAbout: "About Me",
    navEducation: "Education", navExperience: "Experience", navWork: "Work Experience",
    navOrg: "Organization Experience", navStudio: "Studio", navTechnical: "Technical Projects",
    navCreative: "Design & Content", navCertifications: "Certifications", navContact: "Contact",
    heroEyebrow: "OPEN TO COLLABORATION",
    heroSubtitle: "Regional Planning | Data Analytics | Administration | Digital Marketing",
    heroTagline: "Turning Data into Insight, Planning into Impact.", explore: "Explore the Studio",
    downloadCv: "Download CV", basedIn: "BASED IN", focus: "FOCUS", peopleFocused: "& people-focused",
    scroll: "SCROLL TO EXPLORE", aboutEyebrow: "ABOUT ME",
    aboutTitle: "Analytical perspective.<br /><span class=\"accent\">Real-world impact.</span>",
    aboutLead: "I'm Adiesti Nuri Amanda, a Development Economics graduate from Universitas Trunodjoyo Madura.",
    aboutBody: "I combine data analysis, regional planning, administration, and digital communication to support impactful decisions.",
    gpa: "Development Economics GPA", sipdAccuracy: "SIPD reconciliation accuracy",
    focusAreas: "Areas of contribution", letsTalk: "Let's talk",
    educationEyebrow: "EDUCATION & ACHIEVEMENTS",
    educationTitle: "Learning to<br /><span class=\"accent\">build impact.</span>",
    educationIntro: "A Development Economics foundation and achievements that shape my curiosity and commitment.",
    degree: "Bachelor of Development Economics", gpaLabel: "Cumulative GPA",
    regionalPlanning: "Regional Planning", regionalFinance: "Regional Finance",
    scholarship: "SCHOLARSHIP · 2025/2026", scholarshipDesc: "UPZ BAZNAS scholarship recipient.",
    achievement: "ACHIEVEMENT · 2024", finalist: "KOMPAS Scientific Paper Finalist",
    finalistDesc: "University of Jember.",
    workEyebrow: "PROFESSIONAL EXPERIENCE",
    workTitle: "Work & professional<br /><span class=\"accent\">contributions.</span>",
    workIntro: "Experience across regional planning, teaching, and editorial work.",
    internship: "INTERNSHIP · REGIONAL PLANNING", bappedaRole: "Administration & Planning Associate",
    bappedaDesc: "Audited 2025–2026 KAK/RSK, supported RPJMD Musrenbang and Regional Agency Forums, and reconciled SIPD data with 100% accuracy.",
    viewDocumentation: "Documentation", viewCertificate: "Certificate",
    teachingAssistant: "ACADEMIC ASSISTANCE", assistantRole: "Regional Finance Teaching Assistant",
    assistantDesc: "Supported practical sessions, helped students understand course materials, and assisted Regional Finance academic activities.",
    teaching: "Teaching", editorialExperience: "EDITORIAL · JOURNAL",
    editorialRole: "Editorial Secretary, BEP Journal",
    editorialDesc: "Supported editorial administration, prepared meeting minutes, and coordinated journal activities.",
    orgEyebrow: "ORGANIZATION EXPERIENCE",
    orgTitle: "Working together,<br /><span class=\"accent\">growing together.</span>",
    orgIntro: "Student organization contributions across finance, information technology, and communications.",
    organization: "ORGANIZATION · UKM FEB RATI", treasurerRole: "Treasurer 1",
    treasurerDesc: "Supported organizational financial records and management, and coordinated activity budget needs.",
    finance: "Finance", teamwork: "Teamwork", itSecretaryRole: "IT Secretary",
    itSecretaryDesc: "Supported digital and documentation needs and served as MC at the anniversary event.",
    documentation: "Documentation", studioEyebrow: "SELECTED WORK",
    studioTitle: "Ideas made<br /><span class=\"accent\">tangible.</span>",
    studioIntro: "Exploring technical data projects and visual communication design.",
    technicalProjects: "Technical Projects", creativeContent: "Design & Content",
    sentimentDesc: "An interactive dashboard concept combining AI workflows and customer sentiment analysis.",
    pizzaTitle: "Interactive Pizza Sales Analytics",
    pizzaDesc: "Exploring sales performance through an interactive dashboard and data visualizations.",
    regionalAudit: "REGIONAL PLANNING", auditTitle: "BAPPEDA Mojokerto Data Audit",
    auditDesc: "2025–2026 KAK/RSK audit and SIPD reconciliation with 100% accuracy.",
    academicDesign: "ACADEMIC PUBLICATION DESIGN", publicationTitle: "Academic Publication Collateral",
    publicationDesc: "Pamphlet and banner concepts for the BEP Journal Volume 6 Call for Papers.",
    socialBranding: "SOCIAL MEDIA BRANDING & EVENTS", socialTitle: "Social Media & Event Templates",
    socialDesc: "MPAB live-report Instagram Story templates and birthday greeting layouts for board members.",
    digitalIdentity: "DIGITAL IDENTITY & VIDEO", identityTitle: "Digital Identity & Video Editing",
    identityDesc: "Professional LinkedIn header, Linktree identity, and CapCut video editing.",
    certEyebrow: "LICENSES & CERTIFICATIONS",
    certTitle: "Always<br /><span class=\"accent\">learning.</span>",
    certIntro: "Certifications strengthening my analytics, digital, and planning skills.",
    certOffice: "Microsoft Office Certification", certAnalyst: "Certified Data Analyst",
    certSocial: "Social Media Marketing", certPlanning: "Regional Development Planning",
    contactEyebrow: "START A CONVERSATION",
    contactTitle: "Let's Connect &amp;<br /><span class=\"accent\">Collaborate!</span>",
    contactDesc: "Have a project, opportunity, or idea to discuss? I'd love to hear from you.",
    rights: "Made with good intentions.", backTop: "Back to top ↑", ownerTitle: "Owner Dashboard",
    ownerPrompt: "Enter your PIN to continue.", pinLabel: "Access PIN", openDashboard: "Open dashboard",
    staticSecurity: "This client-side PIN is for demonstration only. A static website cannot protect private links or documents from browser inspection.",
    dashboardTitle: "Owner Space",
    dashboardWarning: "Do not add ID or sensitive document links to a public static site. Use a service with server-side authentication.",
    trackerTitle: "Application Tracker", company: "Company", role: "Role", status: "Status",
    sampleCompany: "Sample Company", sampleRole: "Data Analyst", applied: "Applied",
    vaultTitle: "Document Vault",
    vaultHint: "Links are blank and disabled. Do not store private links on a public page.",
    copyLink: "Copy link", certificates: "Certificates", starTitle: "Interview Notes · STAR",
    starS: "Describe the context and challenge.", starT: "State your responsibility.",
    starA: "Explain the specific steps you took.", starR: "Share measurable results.",
    lockDashboard: "Lock dashboard", pinError: "Incorrect PIN. Please try again.",
    copySuccess: "Link copied.", copyFailure: "Could not copy the link. Check browser permissions.",
    documentAccess: "Document Access", verifyPin: "Verify PIN",
    canvasWarning: "Canvas and a client-side PIN do not secure documents. This preview is a mockup, not an original document.",
    watermarkedPreview: "WATERMARKED PREVIEW", demoOnly: "DEMO ONLY",
    previewHidden: "Preview is blurred while the page is inactive.",
    previewDisclaimer: "This is only a Canvas mockup. Real protection requires authentication and document delivery from a private server.",
    closePreview: "Close preview", documentPinError: "Incorrect PIN. The document was not displayed.",
    mockDocument: "MOCKUP — NOT AN ORIGINAL DOCUMENT", documentTypePhoto: "Activity documentation",
    documentTypeCertificate: "Certificate preview", watermark: "CONFIDENTIAL & PROTECTED - PROPERTY OF ADIESTI NURI AMANDA",
    themeLight: "Switch to light mode", themeDark: "Switch to dark mode"
  }
};

const ACCESS_PIN = "1234";
const vaultLinks = { cv: "", certificates: "" };
const documentTitles = {
  "bappeda-photo": { id: "Dokumentasi BAPPEDA Mojokerto", en: "BAPPEDA Mojokerto documentation" },
  "bappeda-certificate": { id: "Sertifikat BAPPEDA Mojokerto", en: "BAPPEDA Mojokerto certificate" },
  "assistant-photo": { id: "Dokumentasi Asisten Dosen", en: "Teaching assistant documentation" },
  "assistant-certificate": { id: "Sertifikat Asisten Dosen", en: "Teaching assistant certificate" },
  "bep-photo": { id: "Dokumentasi BEP Journal", en: "BEP Journal documentation" },
  "bep-certificate": { id: "Sertifikat BEP Journal", en: "BEP Journal certificate" },
  "treasurer-photo": { id: "Dokumentasi Bendahara 1 UKM FEB RATI", en: "UKM FEB RATI Treasurer 1 documentation" },
  "treasurer-certificate": { id: "Sertifikat Bendahara 1 UKM FEB RATI", en: "UKM FEB RATI Treasurer 1 certificate" },
  "it-secretary-photo": { id: "Dokumentasi Sekretaris IT UKM FEB RATI", en: "UKM FEB RATI IT Secretary documentation" },
  "it-secretary-certificate": { id: "Sertifikat Sekretaris IT UKM FEB RATI", en: "UKM FEB RATI IT Secretary certificate" }
};

const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const navMenu = document.querySelector("#nav-links");
const menuButton = document.querySelector(".menu-toggle");
const ownerDialog = document.querySelector(".owner-dialog");
const documentDialog = document.querySelector(".document-dialog");
const documentPinView = document.querySelector(".document-pin-view");
const documentPreview = document.querySelector(".document-preview");
const documentPinForm = document.querySelector(".document-pin-form");
const documentPinInput = document.querySelector("#document-pin");
const toast = document.querySelector(".toast");
let language = localStorage.getItem("portfolio-language") || "id";
let pendingDocument = null;
let lastDocumentTrigger = null;
let toastTimeout;

function translatePage(nextLanguage) {
  language = i18n[nextLanguage] ? nextLanguage : "id";
  document.documentElement.lang = language;
  localStorage.setItem("portfolio-language", language);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = i18n[language][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelector(".language-switch").setAttribute("aria-label", language === "id" ? "Pilih bahasa" : "Choose language");
  if (pendingDocument) {
    pendingDocument.title = documentTitles[pendingDocument.id][language];
    document.querySelector(".document-description").textContent = pendingDocument.title;
    if (!documentPreview.hidden) {
      document.querySelector("#document-title").textContent = pendingDocument.title;
      drawDocumentPreview(pendingDocument.title, pendingDocument.kind);
    }
  }
  updateThemeLabel();
}

function applyTheme(isDark) {
  root.classList.toggle("dark", isDark);
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  updateThemeLabel();
}

function updateThemeLabel() {
  const nextKey = root.classList.contains("dark") ? "themeLight" : "themeDark";
  themeButton.setAttribute("aria-label", i18n[language][nextKey]);
  themeButton.title = i18n[language][nextKey];
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function setDropdownState(dropdown, open) {
  dropdown.classList.toggle("is-open", open);
  const trigger = dropdown.querySelector(":scope > .nav-dropdown-trigger, :scope > .nested-trigger");
  trigger.setAttribute("aria-expanded", String(open));
}

function closeDropdowns() {
  document.querySelectorAll(".nav-dropdown.is-open, .nested-dropdown.is-open").forEach((dropdown) => {
    setDropdownState(dropdown, false);
  });
}

function closeNav() {
  navMenu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  closeDropdowns();
}

function drawDocumentPreview(title, kind) {
  const canvas = document.querySelector("#document-canvas");
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const dark = root.classList.contains("dark");
  const background = dark ? "#f8fafc" : "#ffffff";
  const ink = "#0f172a";
  const gray = "#64748b";
  const accent = dark ? "#b77908" : "#1e3a8a";

  context.clearRect(0, 0, width, height);
  context.fillStyle = background;
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "#cbd5e1";
  context.lineWidth = 2;
  context.strokeRect(34, 34, width - 68, height - 68);

  context.fillStyle = accent;
  context.fillRect(74, 76, 68, 68);
  context.fillStyle = "#ffffff";
  context.font = "bold 29px sans-serif";
  context.textAlign = "center";
  context.fillText("AN", 108, 119);
  context.textAlign = "left";

  context.fillStyle = ink;
  context.font = "bold 31px sans-serif";
  context.fillText(title, 170, 105, 730);
  context.fillStyle = gray;
  context.font = "18px sans-serif";
  context.fillText(i18n[language].mockDocument, 76, 190);
  context.fillStyle = accent;
  context.fillRect(76, 220, 260, 5);

  context.fillStyle = ink;
  context.font = "20px sans-serif";
  context.fillText(kind === "photo" ? i18n[language].documentTypePhoto : i18n[language].documentTypeCertificate, 76, 278);
  context.fillStyle = gray;
  for (let row = 0; row < 5; row += 1) {
    const y = 323 + row * 42;
    context.fillRect(76, y, row === 1 ? 570 : 790, 5);
  }

  context.save();
  context.translate(width / 2, height / 2);
  context.rotate(-Math.PI / 5.5);
  context.globalAlpha = .16;
  context.fillStyle = "#dc2626";
  context.font = "bold 31px sans-serif";
  context.textAlign = "center";
  context.fillText(i18n[language].watermark, 0, 0);
  context.restore();
  context.globalAlpha = 1;
}

function openDocumentGate(button) {
  pendingDocument = {
    id: button.dataset.document,
    title: documentTitles[button.dataset.document][language],
    kind: button.dataset.kind
  };
  lastDocumentTrigger = button;
  document.querySelector(".document-description").textContent = pendingDocument.title;
  document.querySelector(".document-pin-error").textContent = "";
  documentPinForm.reset();
  documentPinView.hidden = false;
  documentPreview.hidden = true;
  documentDialog.classList.remove("is-sensor-blurred");
  if (!documentDialog.open) documentDialog.showModal();
  window.setTimeout(() => documentPinInput.focus(), 0);
}

function closeDocumentDialog() {
  if (!documentDialog.open) return;
  documentDialog.close();
  documentPinForm.reset();
  documentPinView.hidden = false;
  documentPreview.hidden = true;
  documentDialog.classList.remove("is-sensor-blurred");
  pendingDocument = null;
  if (lastDocumentTrigger?.isConnected) lastDocumentTrigger.focus();
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => translatePage(button.dataset.language));
});

themeButton.addEventListener("click", () => applyTheme(!root.classList.contains("dark")));
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  navMenu.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  if (!open) closeDropdowns();
});

document.querySelectorAll(".nav-dropdown-trigger, .nested-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const dropdown = trigger.parentElement;
    const open = trigger.getAttribute("aria-expanded") !== "true";
    if (trigger.matches(".nav-dropdown-trigger")) {
      document.querySelectorAll(".nav-dropdown").forEach((item) => {
        if (item !== dropdown) setDropdownState(item, false);
      });
    }
    setDropdownState(dropdown, open);
  });
});

navMenu.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) closeNav();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-dropdown, .nested-dropdown") && !event.target.closest(".menu-toggle")) closeDropdowns();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDropdowns();
    if (documentDialog.open) closeDocumentDialog();
  }
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
    event.preventDefault();
    const dialog = ownerDialog;
    document.querySelector(".owner-pin-form").reset();
    document.querySelector(".pin-error").textContent = "";
    document.querySelector(".owner-pin-view").hidden = false;
    document.querySelector(".owner-dashboard").hidden = true;
    if (!dialog.open) dialog.showModal();
    window.setTimeout(() => document.querySelector("#owner-pin").focus(), 0);
  }
});

document.querySelector(".owner-trigger").addEventListener("click", () => {
  document.querySelector(".owner-pin-form").reset();
  document.querySelector(".pin-error").textContent = "";
  document.querySelector(".owner-pin-view").hidden = false;
  document.querySelector(".owner-dashboard").hidden = true;
  if (!ownerDialog.open) ownerDialog.showModal();
  window.setTimeout(() => document.querySelector("#owner-pin").focus(), 0);
});
document.querySelector(".dialog-close").addEventListener("click", () => ownerDialog.close());
ownerDialog.addEventListener("click", (event) => {
  if (event.target === ownerDialog) ownerDialog.close();
});
document.querySelector(".owner-pin-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (document.querySelector("#owner-pin").value !== ACCESS_PIN) {
    document.querySelector(".pin-error").textContent = i18n[language].pinError;
    document.querySelector("#owner-pin").select();
    return;
  }
  document.querySelector(".owner-pin-view").hidden = true;
  document.querySelector(".owner-dashboard").hidden = false;
  document.querySelector(".owner-dashboard h2").focus();
});
document.querySelector(".dashboard-lock").addEventListener("click", () => ownerDialog.close());

document.querySelectorAll(".vault-button").forEach((button) => {
  button.disabled = !vaultLinks[button.dataset.vault];
  button.addEventListener("click", async () => {
    const url = vaultLinks[button.dataset.vault];
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      document.querySelector(".copy-feedback").textContent = i18n[language].copySuccess;
    } catch (error) {
      document.querySelector(".copy-feedback").textContent = i18n[language].copyFailure;
      showToast(i18n[language].copyFailure);
    }
  });
});

document.querySelectorAll(".document-button").forEach((button) => {
  button.addEventListener("click", () => openDocumentGate(button));
});
document.querySelector(".document-close").addEventListener("click", closeDocumentDialog);
document.querySelector(".preview-close").addEventListener("click", closeDocumentDialog);
documentDialog.addEventListener("click", (event) => {
  if (event.target === documentDialog) closeDocumentDialog();
});
documentPinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (documentPinInput.value !== ACCESS_PIN) {
    document.querySelector(".document-pin-error").textContent = i18n[language].documentPinError;
    documentPinInput.select();
    return;
  }
  if (!pendingDocument) return;
  document.querySelector(".document-pin-error").textContent = "";
  documentPinView.hidden = true;
  documentPreview.hidden = false;
  document.querySelector("#document-title").textContent = pendingDocument.title;
  drawDocumentPreview(pendingDocument.title, pendingDocument.kind);
  documentDialog.classList.toggle("is-sensor-blurred", document.hidden);
  document.querySelector(".preview-close").focus();
});

document.addEventListener("contextmenu", (event) => {
  if (documentDialog.open && event.target.closest(".canvas-guard")) event.preventDefault();
});
document.addEventListener("keydown", (event) => {
  if (!documentDialog.open) return;
  const blockedShortcut = event.ctrlKey && ["p", "s", "u", "c"].includes(event.key.toLowerCase());
  const captureKey = event.key === "PrintScreen";
  if (blockedShortcut || captureKey || event.key === "F12") {
    event.preventDefault();
  }
});
function blurDocumentOnFocusLoss() {
  if (documentDialog.open && !documentPreview.hidden) documentDialog.classList.add("is-sensor-blurred");
}
function revealDocumentOnFocus() {
  if (documentDialog.open && !documentPreview.hidden && !document.hidden) documentDialog.classList.remove("is-sensor-blurred");
}
window.addEventListener("blur", blurDocumentOnFocusLoss);
window.addEventListener("focus", revealDocumentOnFocus);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) blurDocumentOnFocusLoss();
  else revealDocumentOnFocus();
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
applyTheme(localStorage.getItem("portfolio-theme") !== "light");
translatePage(language);

// Fungsi Membuka Pratinjau CV
function openCVPreview() {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.showModal();
  }
}

// Fungsi Menutup Pratinjau CV
function closeCVPreview() {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.close();
  }
}

// --- FITUR PRATINJAU CV TERPROTEKSI ---

function openCVPreview() {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.showModal();
    renderProtectedCV();
  }
}

function closeCVPreview() {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.close();
  }
}

// Render Gambar CV ke Elemen Canvas dengan Watermark
function renderProtectedCV() {
  const canvas = document.getElementById('cv-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const img = new Image();
  
  // Ganti lokasi file gambar CV Anda (Format JPG/PNG)
  img.src = 'assets/CV-Preview-Image.jpg'; 

  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    
    // 1. Gambar dokumen CV asli ke Canvas
    ctx.drawImage(img, 0, 0);

    // 2. Tambahkan Watermark Diagonal Menyilang
    ctx.save();
    ctx.rotate(-45 * Math.PI / 180);
    ctx.font = 'bold ' + (canvas.width / 18) + 'px sans-serif';
    ctx.fillStyle = 'rgba(220, 38, 38, 0.18)'; // Warna merah transparan
    ctx.textAlign = 'center';
    
    for (let y = -canvas.height; y < canvas.height * 2; y += 180) {
      for (let x = -canvas.width; x < canvas.width * 2; x += 400) {
        ctx.fillText('CONFIDENTIAL — NO DOWNLOAD / COPY', x, y);
      }
    }
    ctx.restore();
  };
}

// --- LOGIKA PROTEKSI PENCEGAHAN AKSES & TANGKAPAN LAYAR ---

// 1. Matikan Klik Kanan pada Seluruh Area Pratinjau
document.addEventListener('contextmenu', function(e) {
  if (e.target.closest('#cv-preview-dialog')) {
    e.preventDefault();
  }
});

// 2. Blokir Kombinasi Tombol Pintas Pintar (Pencegahan Download, Print, & DevTools)
document.addEventListener('keydown', function(e) {
  const dialog = document.getElementById('cv-preview-dialog');
  if (!dialog || !dialog.open) return;

  // Cetak (Ctrl+P / Cmd+P), Simpan (Ctrl+S / Cmd+S), Inspect Element (F12, Ctrl+Shift+I, Ctrl+U)
  if (
    (e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 's' || e.key === 'u') ||
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
    e.key === 'PrintScreen'
  ) {
    e.preventDefault();
    triggerBlurSecurity();
  }
});

// 3. Sensor Otomatis (Blur) saat Fokus Layar Berpindah atau Mencoba Screenshot
const blurOverlay = document.getElementById('cv-blur-overlay');

function triggerBlurSecurity() {
  if (blurOverlay) blurOverlay.style.display = 'flex';
}

function removeBlurSecurity() {
  if (blurOverlay) blurOverlay.style.display = 'none';
}

// Deteksi saat tab/aplikasi lain dibuka (Pengguna meninggalkan halaman)
window.addEventListener('blur', triggerBlurSecurity);
window.addEventListener('focus', removeBlurSecurity);

document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    triggerBlurSecurity();
  } else {
    removeBlurSecurity();
  }
});

// Jalur Berkas Gambar CV Masing-Masing Bahasa
const cvSources = {
  id: 'assets/CV-Preview-ID.jpg', // Berkas gambar CV Bahasa Indonesia
  en: 'assets/CV-Preview-EN.jpg'  // Berkas gambar CV Bahasa Inggris
};

let currentCVLang = 'id';

function openCVPreview(lang = 'id') {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.showModal();
    switchCVLanguage(lang);
  }
}

function closeCVPreview() {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.close();
  }
}

// Fungsi Pengalih Versi Bahasa CV
function switchCVLanguage(lang) {
  currentCVLang = lang;
  
  const btnId = document.getElementById('btn-cv-id');
  const btnEn = document.getElementById('btn-cv-en');
  
  // Penanda Visual Tombol Aktif
  if (btnId && btnEn) {
    if (lang === 'id') {
      btnId.style.backgroundColor = '#fbbf24';
      btnId.style.color = '#0a192f';
      btnId.style.fontWeight = 'bold';
      
      btnEn.style.backgroundColor = '';
      btnEn.style.color = '';
      btnEn.style.fontWeight = 'normal';
    } else {
      btnEn.style.backgroundColor = '#fbbf24';
      btnEn.style.color = '#0a192f';
      btnEn.style.fontWeight = 'bold';
      
      btnId.style.backgroundColor = '';
      btnId.style.color = '';
      btnId.style.fontWeight = 'normal';
    }
  }

  // Render Ulang Kanvas Sesuai Gambar CV Pilihan
  renderProtectedCV(cvSources[lang]);
}

// Render Gambar CV ke Kanvas dengan Watermark Keamanan
function renderProtectedCV(imagePath) {
  const canvas = document.getElementById('cv-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const img = new Image();
  
  img.src = imagePath;

  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    
    // Draw Image
    ctx.drawImage(img, 0, 0);

    // Add Watermark
    ctx.save();
    ctx.rotate(-45 * Math.PI / 180);
    ctx.font = 'bold ' + (canvas.width / 18) + 'px sans-serif';
    ctx.fillStyle = 'rgba(220, 38, 38, 0.18)';
    ctx.textAlign = 'center';
    
    for (let y = -canvas.height; y < canvas.height * 2; y += 180) {
      for (let x = -canvas.width; x < canvas.width * 2; x += 400) {
        ctx.fillText('CONFIDENTIAL — NO DOWNLOAD / COPY', x, y);
      }
    }
    ctx.restore();
  };
}

// Data Gambar Dokumentasi (4 Foto per Pengalaman)
const documentationData = {
  'bappeda-photo': {
    title: 'Dokumentasi — BAPPEDA Kabupaten Mojokerto',
    images: ['bappeda1.jpg', 'bappeda2.jpg', 'bappeda3.jpg', 'bappeda4.jpg']
  },
  'assistant-photo': {
    title: 'Dokumentasi — Asistensi Akademik Keuangan Regional',
    images: ['asisten1.jpg', 'asisten2.jpg', 'asisten3.jpg', 'asisten4.jpg']
  },
  'bep-photo': {
    title: 'Dokumentasi — Sekretaris Editorial BEP Journal',
    images: ['bep1.jpg', 'bep2.jpg', 'bep3.jpg', 'bep4.jpg']
  },
  'treasurer-photo': {
    title: 'Dokumentasi — Bendahara Umum UKM FEB RATI',
    images: ['rati1.jpg', 'rati2.jpg', 'rati3.jpg', 'rati4.jpg']
  },
  'it-secretary-photo': {
    title: 'Dokumentasi — Sekretaris Bidang IT UKM FEB RATI',
    images: ['it1.jpg', 'it2.jpg', 'it3.jpg', 'it4.jpg']
  }
};

// Data Sertifikat
const certificateData = {
  'bappeda-certificate': { title: 'Sertifikat Magang BAPPEDA Mojokerto', src: 'cert-bappeda.jpg' },
  'assistant-certificate': { title: 'Sertifikat Asisten Dosen Keuangan Regional', src: 'cert-assistant.jpg' },
  'bep-certificate': { title: 'Sertifikat Editorial BEP Journal', src: 'cert-bep.jpg' },
  'treasurer-certificate': { title: 'Sertifikat Pengurus UKM FEB RATI', src: 'cert-treasurer.jpg' },
  'it-secretary-certificate': { title: 'Sertifikat Sekretaris IT UKM FEB RATI', src: 'cert-it.jpg' }
};

// 1. Fungsi Buka Modal Dokumentasi (Render 4 Foto ke Canvas)
function openDocModal(key) {
  const data = documentationData[key];
  if (!data) return;

  document.getElementById('doc-modal-title').innerText = data.title;
  const grid = document.getElementById('doc-gallery-grid');
  grid.innerHTML = '';

  data.images.forEach((imgSrc, index) => {
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.borderRadius = '8px';
    canvas.style.background = '#1e293b';
    grid.appendChild(canvas);

    renderProtectedCanvas(canvas, imgSrc, `CONFIDENTIAL PHOTO ${index + 1}`);
  });

  document.getElementById('documentation-modal').showModal();
}

function closeDocModal() {
  document.getElementById('documentation-modal').close();
}

// 2. Fungsi Buka Modal Sertifikat
function openCertModal(key) {
  const data = certificateData[key];
  if (!data) return;

  document.getElementById('cert-modal-title').innerText = data.title;
  const canvas = document.getElementById('cert-canvas');
  renderProtectedCanvas(canvas, data.src, 'PROTECTED CERTIFICATE - ADIESTI NURI AMANDA');

  document.getElementById('certificate-modal').showModal();
}

function closeCertModal() {
  document.getElementById('certificate-modal').close();
}

// 3. Render Gambar ke Canvas dengan Watermark Menyilang
function renderProtectedCanvas(canvas, imageSrc, watermarkText) {
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = imageSrc;

  img.onload = () => {
    canvas.width = img.width || 800;
    canvas.height = img.height || 600;

    // Gambar Foto Asli ke Kanvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Tambah Teks Watermark Menyilang (Diagonal)
    ctx.save();
    ctx.rotate((-25 * Math.PI) / 180);
    ctx.font = 'bold 24px DM Sans, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
    ctx.textAlign = 'center';

    const stepX = 250;
    const stepY = 120;
    for (let x = -canvas.width; x < canvas.width * 2; x += stepX) {
      for (let y = -canvas.height; y < canvas.height * 2; y += stepY) {
        ctx.fillText(watermarkText, x, y);
      }
    }
    ctx.restore();
  };
}

// 4. Mendaftarkan Event Listener pada Tombol Dokumentasi & Sertifikat
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.document-button').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const docKey = button.getAttribute('data-document');
      const kind = button.getAttribute('data-kind');

      if (kind === 'photo') {
        openDocModal(docKey);
      } else if (kind === 'certificate') {
        openCertModal(docKey);
      }
    });
  });
});

// ==========================================
// SYSTEM PROTEKSI KEAMANAN KETAT
// ==========================================

// Blokir Klik Kanan
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Blokir Kombinasi Tombol Pintas (Ctrl+S, Ctrl+P, Ctrl+U, F12, PrintScreen)
document.addEventListener('keydown', (e) => {
  if (
    e.key === 'F12' ||
    e.key === 'PrintScreen' ||
    (e.ctrlKey && ['s', 'p', 'u', 'S', 'P', 'U'].includes(e.key)) ||
    (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key))
  ) {
    e.preventDefault();
    triggerBlurOverlay();
  }
});

// Sensor Otomatis saat Jendela Kehilangan Fokus / Beralih Tab
function triggerBlurOverlay() {
  const overlays = document.querySelectorAll('.security-blur-overlay');
  overlays.forEach((el) => (el.style.display = 'flex'));
}

function hideBlurOverlay() {
  const overlays = document.querySelectorAll('.security-blur-overlay');
  overlays.forEach((el) => (el.style.display = 'none'));
}

window.addEventListener('blur', triggerBlurOverlay);
window.addEventListener('focus', hideBlurOverlay);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    triggerBlurOverlay();
  } else {
    hideBlurOverlay();
  }
});

// ==========================================
// 2. LOGIKA VERIFIKASI PIN / KATA SANDI
// ==========================================
const CORRECT_PIN = "1234"; // 🔑 Ganti dengan PIN pilihan Anda

function verifyPin(event) {
  event.preventDefault();
  const inputPin = document.getElementById('input-pin').value;
  const errorMsg = document.getElementById('pin-error-msg');
  const pinModal = document.getElementById('pin-lock-modal');

  if (inputPin === CORRECT_PIN) {
    errorMsg.style.display = 'none';
    pinModal.close(); // Menutup modal pengunci jika PIN benar
  } else {
    errorMsg.style.display = 'block';
    document.getElementById('input-pin').value = '';
  }
}

document.querySelectorAll('.document-button').forEach(button => {
  button.addEventListener('click', () => {
    const kind = button.getAttribute('data-kind');
    
    if (kind === 'photo') {
      const docModal = document.getElementById('documentation-modal');
      if (docModal) docModal.showModal();
    } else if (kind === 'certificate') {
      const certModal = document.getElementById('certificate-modal');
      if (certModal) certModal.showModal();
    }
  });
});