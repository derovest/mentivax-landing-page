/* ============================================
   Mentivax Landing Page — JavaScript
   ============================================ */

(function () {
  'use strict';

  // --- Q&A Data for command bar typewriter ---
  var qaData = [
    {
      q: 'How much fee is pending for Class 8?',
      a: '\u20B91,42,000 pending across 23 students. 5 are overdue by 30+ days. Want me to send WhatsApp reminders to their parents?'
    },
    {
      q: 'Which students are weak in Maths?',
      a: '7 students in Class 6 scored below 40%. Common gaps: fractions and word problems. I can group them for extra practice sessions.'
    },
    {
      q: 'Send fee reminder to all pending parents',
      a: 'WhatsApp reminders sent to 41 parents with pending fees. 12 have already read the message. I\u2019ll notify you when payments come in.'
    },
    {
      q: 'Show today\u2019s fee collection',
      a: '\u20B958,200 collected today from 22 payments (18 UPI, 4 cash). That\u2019s 1.4\u00D7 more than yesterday. Total this month: \u20B96.2L.'
    },
    {
      q: 'Generate fee report for June',
      a: 'June report ready: \u20B96,24,500 collected, \u20B92,40,500 pending, 91% collection rate. Download as PDF or share on WhatsApp?'
    }
  ];

  var qaIndex = 0;
  var charIndex = 0;
  var typingTimeout = null;
  var questionEl = document.getElementById('commandQuestion');
  var answerEl = document.getElementById('commandAnswer');

  function typeQuestion() {
    var current = qaData[qaIndex];
    if (charIndex <= current.q.length) {
      questionEl.textContent = current.q.slice(0, charIndex);
      charIndex++;
      typingTimeout = setTimeout(typeQuestion, 35);
    } else {
      answerEl.textContent = current.a;
      typingTimeout = setTimeout(nextQA, 3500);
    }
  }

  function nextQA() {
    qaIndex = (qaIndex + 1) % qaData.length;
    charIndex = 0;
    questionEl.textContent = '';
    answerEl.textContent = '';
    typingTimeout = setTimeout(typeQuestion, 400);
  }

  // Start typewriter
  if (questionEl && answerEl) {
    answerEl.textContent = qaData[0].a;
    questionEl.textContent = qaData[0].q;
    typingTimeout = setTimeout(nextQA, 3500);
  }

  // --- Mobile Menu ---
  var menuBtn = document.getElementById('menuBtn');
  var mainNav = document.getElementById('mainNav');
  var overlay = null;

  function createOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', closeMenu);
  }

  function openMenu() {
    menuBtn.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Close menu');
    mainNav.classList.add('open');
    if (!overlay) createOverlay();
    requestAnimationFrame(function () {
      overlay.classList.add('active');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open menu');
    mainNav.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      mainNav.classList.contains('open') ? closeMenu() : openMenu();
    });
  }

  // Close menu on nav link click
  if (mainNav) {
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mainNav && mainNav.classList.contains('open')) {
      closeMenu();
    }
  });

  // --- Smooth Scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerOffset = 72;
        var targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
        history.pushState(null, '', targetId);
      }
    });
  });

  // --- Copy-to-clipboard buttons (contact page) ---
  document.querySelectorAll('.copy-btn[data-copy]').forEach(function (btn) {
    var text = btn.getAttribute('data-copy');
    var done = function () {
      btn.textContent = 'Copied';
      btn.classList.add('copied');
      setTimeout(function () {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 1800);
    };
    var legacyCopy = function () {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (err) {}
      document.body.removeChild(ta);
      if (ok) done();
    };
    btn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, legacyCopy);
      } else {
        legacyCopy();
      }
    });
  });

  // --- Intersection Observer for reveal animations ---
  var revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- Header scroll effect ---
  // Reads scrollY inside rAF and only touches the DOM when the state actually
  // flips, so scrolling never forces a synchronous layout.
  var header = document.getElementById('header');

  if (header) {
    var scrolled = false;
    var ticking = false;

    function updateHeader() {
      ticking = false;
      var next = window.scrollY > 100;
      if (next !== scrolled) {
        scrolled = next;
        header.classList.toggle('is-scrolled', scrolled);
      }
    }

    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateHeader);
        }
      },
      { passive: true }
    );

    updateHeader();
  }

  // --- CTA click tracking (GA4 + Clarity) ---
  // One delegated listener covers every page. Links can name their CTA with
  // data-cta; otherwise the type is inferred from the link itself.
  function ctaType(link) {
    var explicit = link.getAttribute('data-cta');
    if (explicit) return explicit;
    var href = link.getAttribute('href') || '';
    var text = (link.textContent || '').toLowerCase();
    if (href.indexOf('wa.me/') !== -1) {
      if (/free(%20|\s)pilot/i.test(href) || text.indexOf('free pilot') !== -1) return 'free_pilot';
      if (/demo/i.test(href) || text.indexOf('demo') !== -1) return 'demo';
      return 'whatsapp';
    }
    if (href.indexOf('mailto:') === 0) return 'email';
    return null;
  }

  function ctaLocation(link) {
    if (link.closest('.site-header')) return 'header';
    if (link.closest('.site-footer')) return 'footer';
    var section = link.closest('section');
    if (!section) return 'other';
    return section.id || section.className.split(' ')[0];
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('a');
    if (!link) return;
    var type = ctaType(link);
    if (!type) return;
    var params = {
      cta_location: ctaLocation(link),
      page_type: document.body.getAttribute('data-page-type') || 'standard',
      link_text: (link.textContent || '').trim().slice(0, 60)
    };
    if (typeof window.gtag === 'function') {
      window.gtag('event', type + '_click', params);
    }
    if (typeof window.clarity === 'function') {
      window.clarity('event', type + '_click');
    }
  });

  // --- Hero background loop: still poster only for reduced-motion users ---
  var heroVideo = document.querySelector('.hero-bg-video');
  if (heroVideo && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroVideo.removeAttribute('autoplay');
    heroVideo.pause();
  }

  // --- Intro video (YouTube, loaded only when asked for) ---
  // Any element with data-video="<youtube id>" opens the player in a modal.
  var videoModal = null;
  var videoFrame = null;
  var videoOpener = null;

  function buildVideoModal() {
    videoModal = document.createElement('dialog');
    videoModal.className = 'video-modal';
    videoModal.setAttribute('aria-label', 'Mentivax introduction video');
    videoModal.innerHTML =
      '<div class="video-modal-inner">' +
        '<button type="button" class="video-modal-close">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Close' +
        '</button>' +
        '<div class="video-modal-frame"></div>' +
        '<p class="video-modal-fallback">Video not playing? <a target="_blank" rel="noopener">Watch it on YouTube</a></p>' +
      '</div>';
    document.body.appendChild(videoModal);
    videoFrame = videoModal.querySelector('.video-modal-frame');
    videoModal.querySelector('.video-modal-close').addEventListener('click', closeVideo);
    videoModal.addEventListener('click', function (e) {
      if (e.target === videoModal) closeVideo();
    });
    // Esc fires "cancel"; route it through closeVideo so the player is removed.
    videoModal.addEventListener('cancel', function (e) {
      e.preventDefault();
      closeVideo();
    });
  }

  function openVideo(id, opener) {
    if (!videoModal) buildVideoModal();
    videoOpener = opener;
    videoModal.querySelector('.video-modal-fallback a').href = 'https://www.youtube.com/watch?v=' + id;
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
    iframe.title = 'Mentivax in 60 seconds';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    videoFrame.appendChild(iframe);
    if (typeof videoModal.showModal === 'function') videoModal.showModal();
    else videoModal.setAttribute('open', '');
    document.body.style.overflow = 'hidden';
    videoModal.querySelector('.video-modal-close').focus();
  }

  function closeVideo() {
    if (!videoModal) return;
    videoFrame.innerHTML = '';
    if (typeof videoModal.close === 'function' && videoModal.open) videoModal.close();
    else videoModal.removeAttribute('open');
    document.body.style.overflow = '';
    if (videoOpener) videoOpener.focus();
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest && e.target.closest('[data-video]');
    if (!trigger) return;
    e.preventDefault();
    openVideo(trigger.getAttribute('data-video'), trigger);
    var section = trigger.closest('section');
    var params = {
      video_location: (section && section.id) || 'other',
      page_type: document.body.getAttribute('data-page-type') || 'standard'
    };
    if (typeof window.gtag === 'function') window.gtag('event', 'video_play', params);
    if (typeof window.clarity === 'function') window.clarity('event', 'video_play');
  });

  // --- Service Worker Registration ---
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () {
        // SW registration failed silently
      });
    });
  }
})();
