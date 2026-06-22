const translations = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_education: 'Education',
    nav_contact: 'Contact',
    settings_language: 'Language',
    settings_theme: 'Theme',
    hero_greeting: "👋 Hi there, I'm",
    hero_title: 'Backend Developer',
    hero_description:
      'Aspiring Backend Developer with expertise in Java Spring Boot and PHP Laravel. Former tour guide with proven English fluency.',
    hero_cta_projects: 'View Projects',
    hero_cta_contact: 'Contact Me',
    about_title: 'About Me',
    about_subtitle: 'Get to know me better',
    about_heading: 'Backend Developer & Former Tour Guide',
    about_p1:
      'Currently pursuing Advanced Diploma in Software Engineering (ADSE) at Aptech Academy, I specialize in building robust RESTful APIs and microservices using Java Spring Boot and PHP Laravel.',
    about_p2:
      'My unique background as a motorbike tour guide for 250+ international tourists has equipped me with exceptional English communication skills and the ability to adapt quickly in high-pressure situations.',
    about_p3:
      "I'm actively seeking Backend/Java/Laravel internship opportunities to apply my technical expertise and deliver high-impact solutions in fast-paced development teams.",
    stat_tours: 'Tours Led',
    stat_projects: 'Projects',
    stat_countries: 'Countries',
    skills_title: 'Technical Skills',
    skills_subtitle: 'Technologies I work with',
    skill_advanced: 'Advanced',
    skill_proficient: 'Proficient',
    skill_intermediate: 'Intermediate',
    exp_title: 'Experience',
    exp_subtitle: 'My professional journey',
    exp_job_title: 'Scooter Tour Guide',
    exp_job_company: 'Freelance Tourism Services',
    exp_job_1:
      'Led and assisted over 250 motorbike/scooter tours for international tourists in Saigon',
    exp_job_2:
      'Conducted daily English-guided tours on Vietnamese history, culture, food, and hidden spots',
    exp_job_3:
      'Sharpened advanced English communication skills through interaction with tourists from 50+ countries',
    exp_job_4:
      'Demonstrated leadership and quick problem-solving in high-pressure environments',
    exp_job_5:
      'Maintained consistently positive attitude ensuring every guest had safe and memorable experience',
    projects_title: 'Featured Projects',
    projects_subtitle: 'Recent work and accomplishments',
    project1_meta: 'Personal Project | Nov 2025 – Dec 2025',
    project1_desc:
      'Full-stack MERN-stack note-taking app with Laravel API backend and React/Vite frontend. Features token-based authentication, OTP password reset, admin dashboard with analytics.',
    project2_meta: 'Personal Project | Present',
    project2_desc:
      'Engineered a low-latency Spring Boot backend utilizing MySQL and Redis to resolve concurrent queueing race conditions. Integrated P2P WebRTC video/voice and secure STOMP WebSockets for seamless 3-minute pairings.',
    project_demo: 'Live Demo',
    project_repo: 'Repository',
    edu_title: 'Education & Certifications',
    edu_subtitle: 'Academic background and achievements',
    edu_degree: 'Advanced Diploma in Software Engineering',
    edu_desc:
      'Comprehensive program covering software development methodologies, programming languages, database management, and system analysis.',
    cert1_desc:
      'Hands-on certification focused on building production-ready Gen AI features: prompt engineering, RAG pipelines, LLM integration.',
    cert2_desc:
      'Comprehensive introduction to Generative AI workflows, covering real-world applications and ethical implementation.',
    contact_title: 'Get In Touch',
    contact_subtitle: "Let's work together!",
    form_name: 'Name',
    form_email: 'Email',
    form_message: 'Message',
    form_submit: 'Send Message',
    footer_text: '© <span id="year-holder">2026</span> Vo Cao Thanh Đat (Dave). Built with 💻 and ☕',
  },
  vi: {
    nav_home: 'Trang chủ',
    nav_about: 'Giới thiệu',
    nav_skills: 'Kỹ năng',
    nav_experience: 'Kinh nghiệm',
    nav_projects: 'Dự án',
    nav_education: 'Học vấn',
    nav_contact: 'Liên hệ',
    settings_language: 'Ngôn ngữ',
    settings_theme: 'Giao diện',
    hero_greeting: '👋 Xin chào, tôi là',
    hero_title: 'Backend Developer',
    hero_description:
      'Backend Developer đầy tham vọng với chuyên môn về Java Spring Boot và PHP Laravel. Cựu hướng dẫn viên tour với khả năng tiếng Anh thành thạo.',
    hero_cta_projects: 'Xem Dự Án',
    hero_cta_contact: 'Liên Hệ',
    about_title: 'Giới Thiệu',
    about_subtitle: 'Tìm hiểu thêm về tôi',
    about_heading: 'Backend Developer & Cựu Hướng Dẫn Viên',
    about_p1:
      'Hiện đang theo học Advanced Diploma in Software Engineering (ADSE) tại Aptech Academy, tôi chuyên xây dựng các RESTful API và microservices mạnh mẽ bằng Java Spring Boot và PHP Laravel.',
    about_p2:
      'Lý lịch độc đáo của tôi với vai trò hướng dẫn viên tour xe máy cho hơn 250 khách du lịch quốc tế đã trang bị cho tôi kỹ năng giao tiếp tiếng Anh xuất sắc và khả năng thích ứng nhanh trong các tình huống áp lực cao.',
    about_p3:
      'Tôi đang tích cực tìm kiếm cơ hội thực tập Backend/Java/Laravel để áp dụng chuyên môn kỹ thuật và mang lại các giải pháp có tác động cao trong các nhóm phát triển năng động.',
    stat_tours: 'Tour Hướng Dẫn',
    stat_projects: 'Dự Án',
    stat_countries: 'Quốc Gia',
    skills_title: 'Kỹ Năng Kỹ Thuật',
    skills_subtitle: 'Công nghệ tôi làm việc với',
    skill_advanced: 'Nâng cao',
    skill_proficient: 'Thành thạo',
    skill_intermediate: 'Trung cấp',
    exp_title: 'Kinh Nghiệm',
    exp_subtitle: 'Hành trình nghề nghiệp của tôi',
    exp_job_title: 'Hướng Dẫn Viên Tour Xe Máy',
    exp_job_company: 'Dịch Vụ Du Lịch Tự Do',
    exp_job_1:
      'Dẫn dắt và hỗ trợ hơn 250 tour xe máy/scooter cho khách du lịch quốc tế tại Sài Gòn',
    exp_job_2:
      'Thực hiện các tour hướng dẫn bằng tiếng Anh hàng ngày về lịch sử, văn hóa, ẩm thực Việt Nam',
    exp_job_3:
      'Rèn luyện kỹ năng giao tiếp tiếng Anh nâng cao qua tương tác với khách từ hơn 50 quốc gia',
    exp_job_4:
      'Thể hiện khả năng lãnh đạo và giải quyết vấn đề nhanh chóng trong môi trường áp lực cao',
    exp_job_5:
      'Duy trì thái độ tích cực nhất quán đảm bảo mọi khách có trải nghiệm an toàn và đáng nhớ',
    projects_title: 'Dự Án Nổi Bật',
    projects_subtitle: 'Công việc gần đây và thành tựu',
    project1_meta: 'Dự Án Cá Nhân | Tháng 11 2025 – Tháng 12 2025',
    project1_desc:
      'Ứng dụng ghi chú full-stack với Laravel API backend và React/Vite frontend. Tích hợp xác thực token, đặt lại mật khẩu OTP, bảng điều khiển admin với phân tích.',
    project2_meta: 'Dự Án Cá Nhân | Hiện Tại',
    project2_desc:
      'Xây dựng hệ thống backend độ trễ thấp bằng Spring Boot, MySQL và Redis để giải quyết các luồng hàng đợi đồng thời. Tích hợp gọi thoại/video P2P bằng WebRTC và STOMP WebSockets cho các cuộc trò chuyện 3 phút mượt mà.',
    project_demo: 'Xem Demo',
    project_repo: 'Mã Nguồn',
    edu_title: 'Học Vấn & Chứng Chỉ',
    edu_subtitle: 'Lý lịch học thuật và thành tựu',
    edu_degree: 'Văn Bằng Cao Cấp Kỹ Thuật Phần Mềm',
    edu_desc:
      'Chương trình toàn diện bao gồm phương pháp phát triển phần mềm, ngôn ngữ lập trình, quản lý cơ sở dữ liệu.',
    cert1_desc:
      'Chứng chỉ thực hành tập trung vào xây dựng tính năng Gen AI sẵn sàng sản xuất: kỹ thuật prompt, RAG pipeline, tích hợp LLM.',
    cert2_desc:
      'Giới thiệu toàn diện về quy trình Generative AI, bao gồm ứng dụng thực tế và triển khai có đạo đức.',
    contact_title: 'Liên Hệ',
    contact_subtitle: 'Hãy cùng làm việc!',
    form_name: 'Tên',
    form_email: 'Email',
    form_message: 'Tin nhắn',
    form_submit: 'Gửi Tin Nhắn',
    footer_text: '© <span id="year-holder">2026</span> Vo Cao Thanh Đat (Dave). Built with 💻 and ☕',
  },
};

let currentLang = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'midnight';

// Apply saved preferences
document.documentElement.setAttribute('data-theme', currentTheme);
updateTranslations();

// Particle animation
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = window.innerWidth < 768 ? 50 : 100;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw() {
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue(
      '--accent-primary',
    ).trim() || '#3b82f6';
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Custom cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline && window.innerWidth >= 768) {
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorOutline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  document.addEventListener('mousedown', () => {
    cursorOutline.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(0.8)`;
    cursorOutline.style.borderColor = 'var(--accent-primary)';
  });

  document.addEventListener('mouseup', () => {
    cursorOutline.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1)`;
    cursorOutline.style.borderColor = 'rgba(255,255,255,0.2)';
  });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('glass-nav');
    navbar.classList.remove('py-6');
    navbar.classList.add('py-4');
  } else {
    navbar.classList.remove('glass-nav');
    navbar.classList.add('py-6');
    navbar.classList.remove('py-4');
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active', 'text-accent-primary');
    link.classList.add('text-text-secondary');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active', 'text-text-primary');
      if(link.classList.contains('mobile-nav-link')) {
         link.classList.add('text-accent-primary');
      }
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-x-full');
  const spans = navToggle.querySelectorAll('span');
  if (!mobileMenu.classList.contains('translate-x-full')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// Settings panel toggle
const settingsToggle = document.getElementById('settingsToggle');
const settingsPanel = document.getElementById('settingsPanel');

settingsToggle.addEventListener('click', () => {
  settingsPanel.classList.toggle('translate-x-full');
});

document.addEventListener('click', (e) => {
  if (!settingsPanel.contains(e.target) && !settingsToggle.contains(e.target) && !settingsPanel.classList.contains('translate-x-full')) {
    settingsPanel.classList.add('translate-x-full');
  }
});

// Language switcher
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    langBtns.forEach((b) => b.classList.remove('border-accent-primary', 'bg-accent-primary/10'));
    btn.classList.add('border-accent-primary', 'bg-accent-primary/10');
    currentLang = btn.getAttribute('data-lang');
    localStorage.setItem('language', currentLang);
    updateTranslations();
  });
});

// Set active language button
langBtns.forEach((btn) => {
  if (btn.getAttribute('data-lang') === currentLang) {
    btn.classList.add('border-accent-primary', 'bg-accent-primary/10');
  }
});

function updateTranslations() {
  document.querySelectorAll('[data-tr]').forEach((el) => {
    const key = el.getAttribute('data-tr');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
  
  const yearHolder = document.getElementById('year-holder');
  if (yearHolder) {
    yearHolder.textContent = new Date().getFullYear();
  }
}

// Theme switcher
const themeBtns = document.querySelectorAll('.theme-btn');
themeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    themeBtns.forEach((b) => b.classList.remove('border-white'));
    themeBtns.forEach((b) => b.classList.add('border-transparent'));
    btn.classList.add('border-white');
    btn.classList.remove('border-transparent');
    currentTheme = btn.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  });
});

// Set active theme button
themeBtns.forEach((btn) => {
  if (btn.getAttribute('data-theme') === currentTheme) {
    btn.classList.add('border-white');
    btn.classList.remove('border-transparent');
  }
});

// Typing effect for hero title
const typingText = document.getElementById('typingText');
const texts = {
  en: [
    'Backend Developer',
    'Java Expert',
    'Laravel Specialist',
    'API Architect',
  ],
  vi: [
    'Backend Developer',
    'Chuyên Gia Java',
    'Chuyên Viên Laravel',
    'Kiến Trúc Sư API',
  ],
};
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentTexts = texts[currentLang];
  const currentText = currentTexts[textIndex];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => (isDeleting = true), 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % currentTexts.length;
  }

  const speed = isDeleting ? 30 : 100;
  setTimeout(typeEffect, speed);
}
typeEffect();

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

fadeElements.forEach((el) => observer.observe(el));

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
    backToTop.classList.remove('opacity-0', 'invisible');
  } else {
    backToTop.classList.remove('visible');
    backToTop.classList.add('opacity-0', 'invisible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Premium Toast Notification System
class PremiumToast {
  static container = null;

  static init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'fixed top-6 right-6 z-[10000] flex flex-col gap-4 pointer-events-none';
      document.body.appendChild(this.container);
    }
  }

  static show(message, type = 'success') {
    this.init();

    const toast = document.createElement('div');
    
    let icon = '';
    let colorHex = '';
    let borderClass = '';
    let glowClass = '';
    let titleEn = '';
    let titleVi = '';

    if (type === 'success') {
      icon = '<i class="fas fa-check-circle text-[#4ade80] text-2xl drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]"></i>';
      colorHex = '#4ade80';
      borderClass = 'border-[#4ade80]/30';
      glowClass = 'shadow-[0_0_30px_rgba(74,222,128,0.15)]';
      titleEn = 'Success';
      titleVi = 'Thành công';
    } else if (type === 'error') {
      icon = '<i class="fas fa-exclamation-circle text-[#f87171] text-2xl drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]"></i>';
      colorHex = '#f87171';
      borderClass = 'border-[#f87171]/30';
      glowClass = 'shadow-[0_0_30px_rgba(248,113,113,0.15)]';
      titleEn = 'Error';
      titleVi = 'Lỗi';
    } else {
      icon = '<i class="fas fa-bell text-accent-primary text-2xl drop-shadow-[0_0_8px_rgba(var(--accent-primary-rgb),0.5)]"></i>';
      colorHex = 'var(--accent-primary)';
      borderClass = 'border-accent-primary/30';
      glowClass = 'shadow-[0_0_30px_rgba(var(--accent-primary-rgb),0.15)]';
      titleEn = 'Notification';
      titleVi = 'Thông báo';
    }

    const title = currentLang === 'vi' ? titleVi : titleEn;

    toast.className = `glass-panel flex items-start gap-4 w-[320px] sm:w-[380px] p-5 rounded-2xl border ${borderClass} ${glowClass} transform translate-x-[120%] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-auto overflow-hidden relative group backdrop-blur-2xl bg-bg-secondary/90`;
    
    toast.innerHTML = `
      <div class="flex-shrink-0 relative z-10 animate-[bounce_2s_infinite]">
        ${icon}
      </div>
      <div class="flex-1 min-w-0 relative z-10 pt-0.5">
        <p class="text-sm font-bold text-text-primary mb-1 tracking-wider uppercase font-mono" style="color: ${colorHex}">${title}</p>
        <p class="text-sm text-text-secondary leading-relaxed">${message}</p>
      </div>
      <button class="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors z-10 w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10" onclick="this.closest('.glass-panel').classList.add('translate-x-[120%]', 'opacity-0'); setTimeout(() => this.closest('.glass-panel').remove(), 500);">
        <i class="fas fa-times text-xs"></i>
      </button>
      <div class="absolute bottom-0 left-0 h-1 w-full bg-black/20 overflow-hidden">
        <div class="h-full bg-current progress-bar" style="width: 100%; transform-origin: left; color: ${colorHex}; transition: transform 4s linear;"></div>
      </div>
      <div class="absolute inset-0 opacity-5 bg-gradient-to-tr from-transparent to-current pointer-events-none" style="color: ${colorHex}"></div>
    `;

    this.container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('translate-x-[120%]', 'opacity-0');
    });

    const progressBar = toast.querySelector('.progress-bar');
    setTimeout(() => {
      progressBar.style.transform = 'scaleX(0)';
    }, 50);

    let timeoutId = setTimeout(() => {
      removeToast();
    }, 4000);

    toast.addEventListener('mouseenter', () => {
      clearTimeout(timeoutId);
      const computedStyle = window.getComputedStyle(progressBar);
      const currentTransform = computedStyle.getPropertyValue('transform');
      progressBar.style.transition = 'none';
      progressBar.style.transform = currentTransform;
    });

    toast.addEventListener('mouseleave', () => {
      progressBar.style.transition = 'transform 2s linear';
      progressBar.style.transform = 'scaleX(0)';
      timeoutId = setTimeout(() => {
        removeToast();
      }, 2000);
    });

    function removeToast() {
      toast.style.transitionTimingFunction = 'ease-in';
      toast.classList.add('translate-x-[120%]', 'opacity-0');
      setTimeout(() => toast.remove(), 500);
    }
  }
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = currentLang === 'vi' ? 'Đang gửi...' : 'Sending...';
  submitBtn.classList.add('loading', 'opacity-80', 'pointer-events-none');

  emailjs.sendForm('service_5zressf', 'template_i1h0kbo', contactForm)
    .then(() => {
      PremiumToast.show(
        currentLang === 'vi'
          ? 'Tin nhắn đã gửi thành công! Tôi sẽ phản hồi bạn sớm nhất có thể.'
          : "Message sent successfully! I'll get back to you as soon as possible.",
        'success'
      );
      contactForm.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      PremiumToast.show(
        currentLang === 'vi'
          ? 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.'
          : "Something went wrong. Please try again later.",
        'error'
      );
    })
    .finally(() => {
      submitBtn.textContent = originalText;
      submitBtn.classList.remove('loading', 'opacity-80', 'pointer-events-none');
    });
});

// Loading screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    // Ensure all fade in elements in view load immediately
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight) {
         el.classList.add('visible');
      }
    });
  }, 800);
});

// Konami Code Easter Egg (↑↑↓↓←→←→BA)
let konamiCode = [];
const konamiSequence = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

window.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join('') === konamiSequence.join('')) {
    activateRetroMode();
  }
});

function activateRetroMode() {
  document.body.classList.add('retro-mode');
  PremiumToast.show('🎮 RETRO MODE ACTIVATED! 🎮', 'info');
  
  setTimeout(() => {
    document.body.classList.remove('retro-mode');
  }, 1500);
}

// Project cards 3D tilt effect (Kept from original but without anime.js)
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    if(window.innerWidth < 768) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Animate stats on scroll into view
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector('.stat-number');
        if(statNumber && !statNumber.dataset.animated) {
            const finalNumber = parseInt(statNumber.textContent);
            animateValue(statNumber, 0, finalNumber, 2000);
            statNumber.dataset.animated = "true";
        }
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll('.stat-item').forEach((stat) => {
  statsObserver.observe(stat);
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    obj.textContent = value + (obj.textContent.includes('+') ? '+' : '');
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Console Easter Egg
console.log(
  "%c🚀 Welcome to Dave's Portfolio!",
  'font-size: 20px; color: #3b82f6; font-weight: bold;',
);
console.log(
  "%c💻 Looking for developers? I'm available for hire!",
  'font-size: 14px; color: #8b5cf6;',
);
console.log(
  '%c📧 Contact: thanhdattt2006@gmail.com',
  'font-size: 14px; color: #ec4899;',
);
console.log(
  '%c🎮 Try the Konami Code: ↑↑↓↓←→←→BA',
  'font-size: 12px; color: #10b981;',
);
