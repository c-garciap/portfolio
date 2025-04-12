// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Language switcher
const translations = {
  es: {
    video_title: "Video CV",
    video_placeholder: "Aún no has subido un video CV.",
    projects: "Proyectos",
    project_desc_1: "Un proyecto básico en Python que analiza tráfico de red.",
    project_desc_2: "Script bash para asegurar configuraciones en Linux.",
    skills: "Habilidades",
    contact: "Contacto",
  },
  en: {
    video_title: "Video CV",
    video_placeholder: "You haven't uploaded a video CV yet.",
    projects: "Projects",
    project_desc_1: "A basic Python project for network traffic analysis.",
    project_desc_2: "Bash script to harden Linux configurations.",
    skills: "Skills",
    contact: "Contact",
  },
  fr: {
    video_title: "CV Vidéo",
    video_placeholder: "Vous n'avez pas encore téléchargé de CV vidéo.",
    projects: "Projets",
    project_desc_1: "Projet Python basique pour analyser le trafic réseau.",
    project_desc_2: "Script bash pour sécuriser les configurations Linux.",
    skills: "Compétences",
    contact: "Contact",
  },
};

const langSwitcher = document.getElementById("lang-switcher");

langSwitcher.addEventListener("change", () => {
  const lang = langSwitcher.value;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
});
