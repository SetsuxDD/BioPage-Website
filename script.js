document.addEventListener("keydown", function (_0x309017) {
  if (_0x309017.key === "F12" || _0x309017.ctrlKey && _0x309017.shiftKey && (_0x309017.key === "I" || _0x309017.key === "J" || _0x309017.key === "C") || _0x309017.ctrlKey && (_0x309017.key === "U" || _0x309017.key === "S")) {
    _0x309017.preventDefault();
    return false;
  }
});
const discordID = "660885554027560973";
const timestamp = new Date().getTime();
document.addEventListener("DOMContentLoaded", () => {
  console.log("Elite OS Başlatıldı...");
  const _0x3f0874 = {
    bgMusic: document.getElementById("bg-music"),
    bgVideo: document.getElementById("bg-video"),
    playBtn: document.getElementById("play-toggle-btn"),
    visualizer: document.getElementById("music-visualizer"),
    audioProgress: document.getElementById("audio-progress"),
    volumeSlider: document.getElementById("volume-slider"),
    opacitySlider: document.getElementById("opacity-slider"),
    digitalClock: document.getElementById("digital-clock"),
    profileCard: document.getElementById("profile-card"),
    skillsCard: document.getElementById("skills-card"),
    cardContainer: document.querySelector(".card-container"),
    initLayer: document.getElementById("init-layer"),
    cursor: document.querySelector(".custom-cursor"),
    canvas: document.getElementById("particle-canvas"),
    prevThemeBtn: document.getElementById("prev-theme"),
    nextThemeBtn: document.getElementById("next-theme"),
    terminalInput: document.getElementById("terminal-input"),
    terminalOutput: document.getElementById("terminal-output"),
    terminalBody: document.getElementById("terminal-body"),
    terminalOverlay: document.getElementById("terminal-overlay"),
    termBtn: document.getElementById("terminal-btn"),
    closeTerm: document.getElementById("close-terminal"),
    customMenu: document.getElementById("custom-menu"),
    langToggle: document.getElementById("lang-toggle")
  };
  const _0x2184de = {
    en: {
      langText: "EN",
      home: "Home",
      skills: "Skills",
      title: "I want to study in Europe.",
      contact: "Contact Me",
      mail: "Send an Email",
      techSkills: "TECHNICAL SKILLS",
      online: "Online",
      members: "Members",
      fetching: "Fetching status...",
      menuTerm: "Open Terminal",
      menuDc: "Join Discord",
      menuMusic: "Play/Pause Music"
    },
    tr: {
      langText: "TR",
      home: "Ana Sayfa",
      skills: "Yetenekler",
      title: "Avrupa'da okumak istiyorum",
      contact: "İletişim Kur",
      mail: "E-posta Gönder",
      techSkills: "TEKNİK YETENEKLER",
      online: "Çevrimiçi",
      members: "Üye",
      fetching: "Durum çekiliyor...",
      menuTerm: "Terminali Aç",
      menuDc: "Discord'a Katıl",
      menuMusic: "Müziği Başlat/Durdur"
    }
  };
  let _0xd5466d = "en";
  if (_0x3f0874.langToggle) {
    _0x3f0874.langToggle.addEventListener("click", () => {
      _0xd5466d = _0xd5466d === "en" ? "tr" : "en";
      _0x17cb25();
    });
  }
  function _0x17cb25() {
    const _0x33d0ae = _0x2184de[_0xd5466d];
    document.getElementById("lang-text").innerText = _0x33d0ae.langText;
    document.querySelector(".t-home").innerText = _0x33d0ae.home;
    document.querySelector(".t-skills").innerText = _0x33d0ae.skills;
    document.querySelector(".t-title").innerText = _0x33d0ae.title;
    document.querySelector(".t-contact").innerText = _0x33d0ae.contact;
    document.querySelector(".t-mail").innerText = _0x33d0ae.mail;
    document.querySelector(".t-techskills").innerText = _0x33d0ae.techSkills;
    document.querySelector(".t-online").innerText = _0x33d0ae.online;
    document.querySelector(".t-members").innerText = _0x33d0ae.members;
    const _0x4bcf30 = document.querySelector(".t-fetching");
    if (_0x4bcf30 && _0x4bcf30.innerText.includes("Fetch") || _0x4bcf30.innerText.includes("Durum")) {
      _0x4bcf30.innerText = _0x33d0ae.fetching;
    }
    document.querySelector(".t-term").innerText = _0x33d0ae.menuTerm;
    document.querySelector(".t-dc").innerText = _0x33d0ae.menuDc;
    document.querySelector(".t-music").innerText = _0x33d0ae.menuMusic;
  }
  document.addEventListener("contextmenu", _0x230f24 => {
    _0x230f24.preventDefault();
    _0x3f0874.customMenu.style.left = _0x230f24.pageX + "px";
    _0x3f0874.customMenu.style.top = _0x230f24.pageY + "px";
    _0x3f0874.customMenu.classList.add("active");
  });
  document.addEventListener("click", _0x944cab => {
    if (!_0x3f0874.customMenu.contains(_0x944cab.target)) {
      _0x3f0874.customMenu.classList.remove("active");
    }
  });
  document.getElementById("menu-term").addEventListener("click", () => {
    _0x3f0874.customMenu.classList.remove("active");
    _0x3f0874.terminalOverlay.classList.add("active");
    _0x3f0874.terminalInput.focus();
  });
  document.getElementById("menu-dc").addEventListener("click", () => {
    _0x3f0874.customMenu.classList.remove("active");
    window.open("https://discord.gg/rTNgWX6HNr", "_blank");
  });
  document.getElementById("menu-music").addEventListener("click", () => {
    _0x3f0874.customMenu.classList.remove("active");
    if (_0x3f0874.playBtn) {
      _0x3f0874.playBtn.click();
    }
  });
  const _0x1a3dc3 = document.getElementById("top-nav");
  const _0x2ef785 = document.getElementById("nav-toggle");
  if (_0x1a3dc3 && _0x2ef785) {
    _0x2ef785.addEventListener("click", () => {
      _0x1a3dc3.classList.toggle("hidden");
    });
  }
  function _0x173195() {
    if (!_0x3f0874.digitalClock) {
      return;
    }
    const _0x2469b9 = new Date();
    _0x3f0874.digitalClock.textContent = String(_0x2469b9.getHours()).padStart(2, "0") + ":" + String(_0x2469b9.getMinutes()).padStart(2, "0") + ":" + String(_0x2469b9.getSeconds()).padStart(2, "0");
  }
  setInterval(_0x173195, 1000);
  _0x173195();
  if (_0x3f0874.playBtn && _0x3f0874.bgMusic) {
    _0x3f0874.playBtn.addEventListener("click", () => {
      if (_0x3f0874.bgMusic.paused) {
        _0x3f0874.bgMusic.play();
        _0x3f0874.playBtn.classList.replace("fa-play", "fa-pause");
        if (_0x3f0874.visualizer) {
          _0x3f0874.visualizer.classList.remove("paused");
        }
        if (_0x3f0874.bgVideo) {
          _0x3f0874.bgVideo.play();
        }
      } else {
        _0x3f0874.bgMusic.pause();
        _0x3f0874.playBtn.classList.replace("fa-pause", "fa-play");
        if (_0x3f0874.visualizer) {
          _0x3f0874.visualizer.classList.add("paused");
        }
        if (_0x3f0874.bgVideo) {
          _0x3f0874.bgVideo.pause();
        }
      }
    });
    _0x3f0874.bgMusic.addEventListener("timeupdate", () => {
      if (_0x3f0874.audioProgress) {
        _0x3f0874.audioProgress.style.width = _0x3f0874.bgMusic.currentTime / _0x3f0874.bgMusic.duration * 100 + "%";
      }
    });
    _0x3f0874.bgMusic.onended = () => {
      _0x3f0874.playBtn.classList.replace("fa-pause", "fa-play");
      if (_0x3f0874.visualizer) {
        _0x3f0874.visualizer.classList.add("paused");
      }
    };
    _0x3f0874.bgMusic.addEventListener("volumechange", () => {
      if (_0x3f0874.volumeSlider) {
        _0x3f0874.volumeSlider.value = _0x3f0874.bgMusic.volume;
      }
    });
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: "I LOVE - U",
        artist: "XXXTENTACION",
        album: "SetsuxD",
        artwork: [{
          src: "assets/music_resim.webp",
          sizes: "512x512",
          type: "image/webp"
        }]
      });
      navigator.mediaSession.setActionHandler("play", () => {
        if (_0x3f0874.bgMusic) {
          _0x3f0874.bgMusic.play();
        }
        if (_0x3f0874.bgVideo) {
          _0x3f0874.bgVideo.play();
        }
        if (_0x3f0874.playBtn) {
          _0x3f0874.playBtn.classList.replace("fa-play", "fa-pause");
        }
        if (_0x3f0874.visualizer) {
          _0x3f0874.visualizer.classList.remove("paused");
        }
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        if (_0x3f0874.bgMusic) {
          _0x3f0874.bgMusic.pause();
        }
        if (_0x3f0874.bgVideo) {
          _0x3f0874.bgVideo.pause();
        }
        if (_0x3f0874.playBtn) {
          _0x3f0874.playBtn.classList.replace("fa-pause", "fa-play");
        }
        if (_0x3f0874.visualizer) {
          _0x3f0874.visualizer.classList.add("paused");
        }
      });
    }
  }
  if (_0x3f0874.volumeSlider && _0x3f0874.bgMusic) {
    _0x3f0874.bgMusic.volume = _0x3f0874.volumeSlider.value;
    _0x3f0874.volumeSlider.addEventListener("input", _0x34eb6f => _0x3f0874.bgMusic.volume = _0x34eb6f.target.value);
  }
  if (_0x3f0874.opacitySlider && _0x3f0874.profileCard) {
    _0x3f0874.opacitySlider.addEventListener("input", _0x34929e => {
      _0x3f0874.profileCard.style.setProperty("background-color", "rgba(10, 10, 15, " + _0x34929e.target.value + ")", "important");
    });
  }
  document.addEventListener("mousemove", _0xa88822 => {
    if (_0x3f0874.cursor && typeof gsap !== "undefined") {
      gsap.to(_0x3f0874.cursor, {
        x: _0xa88822.clientX,
        y: _0xa88822.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    }
    if (_0x3f0874.cardContainer && typeof gsap !== "undefined") {
      const _0x4b2acc = (window.innerWidth / 2 - _0xa88822.clientX) / 35;
      const _0x2356a5 = (window.innerHeight / 2 - _0xa88822.clientY) / 35;
      gsap.to(_0x3f0874.cardContainer, {
        rotationY: -_0x4b2acc,
        rotationX: _0x2356a5,
        duration: 0.6
      });
    }
  });
  if (_0x3f0874.canvas) {
    const _0xc4b025 = _0x3f0874.canvas.getContext("2d");
    let _0x5f12d1 = [];
    const _0x4488db = () => {
      _0x3f0874.canvas.width = window.innerWidth;
      _0x3f0874.canvas.height = window.innerHeight;
    };
    _0x4488db();
    window.addEventListener("resize", _0x4488db);
    class _0x239182 {
      constructor() {
        this.x = Math.random() * _0x3f0874.canvas.width;
        this.y = Math.random() * _0x3f0874.canvas.height;
        this.size = Math.random() * 4 + 2;
        this.speedX = (Math.random() - 0.5) * 1.2;
        this.speedY = (Math.random() - 0.5) * 1.2;
        this.angle = Math.random() * 360;
        this.spin = (Math.random() - 0.5) * 3;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.spin;
        if (this.x < 0 || this.x > _0x3f0874.canvas.width) {
          this.speedX *= -1;
        }
        if (this.y < 0 || this.y > _0x3f0874.canvas.height) {
          this.speedY *= -1;
        }
      }
      draw() {
        _0xc4b025.save();
        _0xc4b025.translate(this.x, this.y);
        _0xc4b025.rotate(this.angle * Math.PI / 180);
        _0xc4b025.fillStyle = "rgba(10, 10, 10, 0.8)";
        _0xc4b025.beginPath();
        _0xc4b025.moveTo(-this.size, -this.size / 2);
        _0xc4b025.lineTo(this.size, -this.size);
        _0xc4b025.lineTo(this.size / 2, this.size);
        _0xc4b025.closePath();
        _0xc4b025.fill();
        _0xc4b025.restore();
      }
    }
    for (let _0x43dbcf = 0; _0x43dbcf < 60; _0x43dbcf++) {
      _0x5f12d1.push(new _0x239182());
    }
    function _0x49937() {
      _0xc4b025.clearRect(0, 0, _0x3f0874.canvas.width, _0x3f0874.canvas.height);
      _0x5f12d1.forEach(_0x5418d4 => {
        _0x5418d4.update();
        _0x5418d4.draw();
      });
      requestAnimationFrame(_0x49937);
    }
    _0x49937();
  }
  let _0x5d3317 = false;
  if (_0x3f0874.profileCard && _0x3f0874.skillsCard && typeof gsap !== "undefined") {
    gsap.set(_0x3f0874.profileCard, {
      rotationY: 0,
      autoAlpha: 1
    });
    gsap.set(_0x3f0874.skillsCard, {
      rotationY: -180,
      autoAlpha: 0
    });
    const _0x21f579 = _0x25b1a7 => {
      if (_0x5d3317 === _0x25b1a7) {
        return;
      }
      _0x5d3317 = _0x25b1a7;
      gsap.to(_0x3f0874.profileCard, {
        rotationY: _0x5d3317 ? 180 : 0,
        autoAlpha: _0x5d3317 ? 0 : 1,
        duration: 0.7
      });
      gsap.to(_0x3f0874.skillsCard, {
        rotationY: _0x5d3317 ? 0 : -180,
        autoAlpha: _0x5d3317 ? 1 : 0,
        duration: 0.7,
        onStart: () => {
          if (_0x5d3317) {
            _0x3f0874.skillsCard.style.visibility = "visible";
          }
        },
        onComplete: () => {
          document.querySelectorAll(".s-bar-fill").forEach(_0x581743 => {
            gsap.to(_0x581743, {
              width: _0x5d3317 ? _0x581743.dataset.w + "%" : "0%",
              duration: 1
            });
          });
        }
      });
    };
    const _0x2c3f87 = document.getElementById("btn-skills");
    const _0x54dac3 = document.getElementById("btn-home");
    if (_0x2c3f87) {
      _0x2c3f87.addEventListener("click", () => _0x21f579(true));
    }
    if (_0x54dac3) {
      _0x54dac3.addEventListener("click", () => _0x21f579(false));
    }
  }
  function _0x454a1f(_0x4d470d) {
    let _0x3bbb1d = 0;
    let _0x49bf3c = 0;
    let _0x1477da = false;
    const _0x4be580 = document.getElementById("typewriter");
    if (!_0x4be580) {
      return;
    }
    function _0x1d6ba9() {
      const _0x57e9d5 = _0x4d470d[_0x3bbb1d] || "> Loading...";
      _0x4be580.innerHTML = _0x1477da ? _0x57e9d5.substring(0, _0x49bf3c--) : _0x57e9d5.substring(0, _0x49bf3c++);
      let _0x78be87 = _0x1477da ? 30 : 60;
      if (!_0x1477da && _0x49bf3c === _0x57e9d5.length + 1) {
        _0x1477da = true;
        _0x78be87 = 2000;
      } else if (_0x1477da && _0x49bf3c === 0) {
        _0x1477da = false;
        _0x3bbb1d = (_0x3bbb1d + 1) % _0x4d470d.length;
        _0x78be87 = 400;
      }
      _0x4be580.dataset.timeoutId = setTimeout(_0x1d6ba9, _0x78be87);
    }
    clearTimeout(_0x4be580.dataset.timeoutId);
    _0x1d6ba9();
  }
  if (_0x3f0874.termBtn && _0x3f0874.terminalOverlay) {
    _0x3f0874.termBtn.addEventListener("click", () => {
      _0x3f0874.terminalOverlay.classList.toggle("active");
      if (_0x3f0874.terminalOverlay.classList.contains("active")) {
        _0x3f0874.terminalInput.focus();
      }
    });
    if (_0x3f0874.closeTerm) {
      _0x3f0874.closeTerm.addEventListener("click", () => _0x3f0874.terminalOverlay.classList.remove("active"));
    }
  }
  if (_0x3f0874.terminalInput && _0x3f0874.terminalOutput) {
    _0x3f0874.terminalInput.addEventListener("keydown", function (_0x233675) {
      if (_0x233675.key === "Enter") {
        const _0x43a157 = this.value.trim();
        if (_0x43a157 !== "") {
          _0x3f0874.terminalOutput.innerHTML += "<br><span class=\"prompt\">root@eren:~#</span> " + _0x43a157;
          if (_0x43a157.toLowerCase() === "help") {
            _0x3f0874.terminalOutput.innerHTML += "<br><span class=\"term-success\">Kullanılabilir komutlar: help, clear, whoami, github</span>";
          } else if (_0x43a157.toLowerCase() === "clear") {
            _0x3f0874.terminalOutput.innerHTML = "Welcome to the system. Identity verified.<br>Type 'help' to see available commands.";
          } else if (_0x43a157.toLowerCase() === "whoami") {
            _0x3f0874.terminalOutput.innerHTML += "<br>Muhammed Eren Aydın -    I want to study in Europe. & Developer.";
          } else if (_0x43a157.toLowerCase() === "github") {
            _0x3f0874.terminalOutput.innerHTML += "<br>Açılıyor...";
            window.open("https://github.com/MuhammedEren", "_blank");
          } else {
            _0x3f0874.terminalOutput.innerHTML += "<br><span class=\"term-error\">Komut bulunamadı: " + _0x43a157 + "</span>";
          }
          if (_0x3f0874.terminalBody) {
            _0x3f0874.terminalBody.scrollTop = _0x3f0874.terminalBody.scrollHeight;
          }
        }
        this.value = "";
      }
    });
  }
  async function _0x495014() {
    try {
      const _0x320149 = await fetch("settings.json?v=" + timestamp);
      if (!_0x320149.ok) {
        return;
      }
      const _0x2d1c8a = await _0x320149.json();
      if (_0x2d1c8a.alt_baslik) {
        document.querySelector(".t-title").innerText = _0x2d1c8a.alt_baslik;
      }
      if (_0x2d1c8a.avatar_url) {
        document.querySelector(".avatar").src = "assets/" + _0x2d1c8a.avatar_url;
      }
      const _0x5471e7 = document.querySelector(".banner");
      if (_0x5471e7 && _0x2d1c8a.banner_url) {
        _0x5471e7.style.backgroundImage = "url('assets/" + _0x2d1c8a.banner_url + "?v=" + timestamp + "')";
      }
      const _0x2a4e5c = document.getElementById("music-image-bg") || document.querySelector(".music-box .b-icon");
      if (_0x2a4e5c) {
        _0x2a4e5c.style.backgroundImage = "url('assets/music_resim.webp?v=" + timestamp + "')";
      }
      const _0x3aa207 = document.querySelectorAll(".s-bar-fill");
      const _0x403220 = [_0x2d1c8a.cpp_yuzde, _0x2d1c8a.java_yuzde, _0x2d1c8a.lua_yuzde, _0x2d1c8a.python_yuzde];
      _0x3aa207.forEach((_0x13cf71, _0x4aac16) => {
        if (_0x403220[_0x4aac16]) {
          _0x13cf71.setAttribute("data-w", _0x403220[_0x4aac16]);
        }
      });
      if (_0x3f0874.profileCard && _0x2d1c8a.profil_op) {
        _0x3f0874.profileCard.style.setProperty("background-color", "rgba(10, 10, 15, " + _0x2d1c8a.profil_op + ")", "important");
        _0x3f0874.profileCard.style.setProperty("backdrop-filter", "blur(" + (_0x2d1c8a.profil_blur || 20) + "px)", "important");
        if (_0x3f0874.opacitySlider) {
          _0x3f0874.opacitySlider.value = _0x2d1c8a.profil_op;
        }
      }
    } catch (_0x210866) {
      console.log("JSON Yükleme Hatası.");
    }
  }
  _0x495014();
  const _0x1a7a93 = [{
    color: "#00CED1",
    vid: "background.mp4",
    name: "Cyber Cyan"
  }, {
    color: "#00ff00",
    vid: "witcher.mp4",
    name: "Toxic Matrix"
  }, {
    color: "#ff00ff",
    vid: "anime_background.mp4",
    name: "Neon Synth"
  }, {
    color: "#ff9900",
    vid: "car_background.mp4",
    name: "Sunset Overdrive"
  }, {
    color: "#00bfff",
    vid: "rain_background.mp4",
    name: "Midnight Rain"
  }];
  let _0x51f286 = 0;
  function _0x4f5bc4(_0x5f0590) {
    _0x51f286 += _0x5f0590;
    if (_0x51f286 < 0) {
      _0x51f286 = _0x1a7a93.length - 1;
    }
    if (_0x51f286 >= _0x1a7a93.length) {
      _0x51f286 = 0;
    }
    const _0x532ece = _0x1a7a93[_0x51f286];
    document.documentElement.style.setProperty("--primary", _0x532ece.color);
    const _0xb44a0a = "<i class=\"fa-solid fa-palette\" style=\"color: " + _0x532ece.color + "\"></i> Theme System: " + _0x532ece.name;
    copyText("", _0xb44a0a, true);
    if (_0x3f0874.bgVideo && typeof gsap !== "undefined") {
      gsap.to(_0x3f0874.bgVideo, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          _0x3f0874.bgVideo.querySelector("source").src = "assets/" + _0x532ece.vid;
          _0x3f0874.bgVideo.load();
          if (_0x3f0874.bgMusic && !_0x3f0874.bgMusic.paused) {
            _0x3f0874.bgVideo.play().catch(() => {});
          }
          gsap.to(_0x3f0874.bgVideo, {
            opacity: 1,
            duration: 0.5
          });
        }
      });
    }
  }
  if (_0x3f0874.prevThemeBtn) {
    _0x3f0874.prevThemeBtn.addEventListener("click", () => _0x4f5bc4(-1));
  }
  if (_0x3f0874.nextThemeBtn) {
    _0x3f0874.nextThemeBtn.addEventListener("click", () => _0x4f5bc4(1));
  }
  if (_0x3f0874.initLayer) {
    _0x3f0874.initLayer.addEventListener("click", () => {
      _0x3f0874.initLayer.style.opacity = "0";
      setTimeout(() => {
        _0x3f0874.initLayer.remove();
        if (_0x3f0874.bgMusic) {
          _0x3f0874.bgMusic.play().then(() => {
            if (_0x3f0874.playBtn) {
              _0x3f0874.playBtn.classList.replace("fa-play", "fa-pause");
            }
            if (_0x3f0874.visualizer) {
              _0x3f0874.visualizer.classList.remove("paused");
            }
          }).catch(() => {});
        }
        if (_0x3f0874.bgVideo) {
          _0x3f0874.bgVideo.play().catch(() => {});
        }
        document.getElementById("main-content").classList.replace("layout-hidden", "layout-visible");
        _0x454a1f(["> Its End...", "> Mastering Reverse Engineering_", "Coding..."]);
      }, 500);
    }, {
      once: true
    });
  }
  async function _0x22d52b() {
    try {
      const _0x6569e = await fetch("https://api.lanyard.rest/v1/users/" + discordID);
      const {
        data: _0x1e14fe
      } = await _0x6569e.json();
      if (!_0x1e14fe) {
        return;
      }
      const _0xbeb6c9 = document.getElementById("dc-username");
      const _0x3fe9d9 = document.getElementById("dc-custom-status");
      const _0x30e436 = document.getElementById("dc-status-dot");
      const _0x62427a = document.getElementById("dc-avatar");
      if (_0xbeb6c9) {
        _0xbeb6c9.innerText = _0x1e14fe.discord_user.display_name || _0x1e14fe.discord_user.username;
      }
      const _0x28a204 = {
        online: "#23a559",
        idle: "#f0b232",
        dnd: "#f23f43",
        offline: "#80848e"
      };
      if (_0x30e436) {
        _0x30e436.style.background = _0x28a204[_0x1e14fe.discord_status] || "#80848e";
      }
      if (_0x3fe9d9) {
        if (_0x1e14fe.activities && _0x1e14fe.activities.length > 0) {
          const _0x2efd5b = _0x1e14fe.activities.find(_0x4938dd => _0x4938dd.type === 0) || _0x1e14fe.activities[0];
          _0x3fe9d9.innerText = _0x2efd5b.name === "Custom Status" ? _0x2efd5b.state || "Aktif" : _0x2efd5b.name;
        } else {
          const _0x1216a5 = _0xd5466d === "en" ? "Offline" : "Çevrimdışı";
          const _0x6f75f3 = _0xd5466d === "en" ? "Idle" : "Boşta";
          _0x3fe9d9.innerText = _0x1e14fe.discord_status === "offline" ? _0x1216a5 : _0x6f75f3;
        }
      }
      if (_0x62427a && _0x1e14fe.discord_user.avatar) {
        const _0x715cd1 = _0x1e14fe.discord_user.avatar.startsWith("a_") ? "gif" : "webp";
        _0x62427a.src = "https://cdn.discordapp.com/avatars/" + discordID + "/" + _0x1e14fe.discord_user.avatar + "." + _0x715cd1;
      }
    } catch (_0x415c78) {}
  }
  async function _0x3ecd8b() {
    try {
      const _0x1e1f1d = await fetch("https://discord.com/api/v9/invites/rTNgWX6HNr?with_counts=true");
      const _0x1e3d5d = await _0x1e1f1d.json();
      if (_0x1e3d5d && _0x1e3d5d.guild) {
        const _0x212aea = document.getElementById("discord-name");
        const _0x776430 = document.getElementById("discord-online");
        const _0x43bcb1 = document.getElementById("discord-total");
        const _0xedf732 = document.getElementById("server-icon");
        if (_0x212aea) {
          _0x212aea.innerText = _0x1e3d5d.guild.name;
        }
        if (_0x776430) {
          _0x776430.innerText = _0x1e3d5d.approximate_presence_count || "0";
        }
        if (_0x43bcb1) {
          _0x43bcb1.innerText = _0x1e3d5d.approximate_member_count || "0";
        }
        if (_0xedf732 && _0x1e3d5d.guild.icon) {
          _0xedf732.src = "https://cdn.discordapp.com/icons/" + _0x1e3d5d.guild.id + "/" + _0x1e3d5d.guild.icon + ".png";
          _0xedf732.style.display = "block";
          document.getElementById("server-icon-placeholder").style.display = "none";
        }
      }
    } catch (_0x251b26) {}
  }
  _0x22d52b();
  _0x3ecd8b();
  setInterval(_0x22d52b, 15000);
});
function copyText(_0x5a174d, _0x3ee82e, _0x29b37e = false) {
  if (!_0x29b37e && _0x5a174d) {
    navigator.clipboard.writeText(_0x5a174d);
  }
  const _0x4001a6 = document.getElementById("toast-container");
  const _0x12756d = document.createElement("div");
  _0x12756d.className = "toast";
  _0x12756d.innerHTML = _0x29b37e ? _0x3ee82e : "<i class=\"fa-solid fa-check\"></i> " + _0x3ee82e;
  _0x4001a6.appendChild(_0x12756d);
  setTimeout(() => _0x12756d.remove(), 3000);
}