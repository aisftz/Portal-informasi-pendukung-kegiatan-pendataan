/* Tautan dokumen yang diberikan untuk portal PSP Pascabencana Sumatera 2026. */
const documentLinks = {
  suratTugas: 'https://s.id/surtug_1213',
  bahanAjar: 'https://drive.google.com/drive/folders/1yMTmNwpnYkKambGd6nxJjjMqv9ypB09l?usp=sharing'
};

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    mobileMenu.classList.toggle('hidden', isExpanded);
  });
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const toast = document.getElementById('toast');
let toastTimeout;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden');
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.add('hidden'), 4200);
}

const docLabels = { suratTugas: 'Surat Tugas', bahanAjar: 'Bahan Ajar' };
document.querySelectorAll('[data-document-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const key = link.getAttribute('data-document-link');
    const url = documentLinks[key];
    if (!url) {
      event.preventDefault();
      showToast(`Tautan ${docLabels[key] || 'dokumen'} belum tersedia.`);
      return;
    }
    event.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  });
});
