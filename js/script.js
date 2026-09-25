
var HER_NAME = "Valeria";
var HIS_NAME = "Orion";     
var COUPLE_START_DATE = "";       
var MUSIC_FILE = "audio/birthday-song.mp3";

var BIRTHDAY_WISHES = [
  "May this year hand you more plot twists worth smiling about.",
  "Here's to a year that's kinder, brighter, and a little louder with laughter.",
  "May you keep collecting tiny joys and big adventures in equal measure.",
  "Wishing you a year that finally slows down enough for you to enjoy it.",
  "May every candle you blow out this year come with a wish that actually comes true."
];

var FORTUNES = [
  { icon: "☀️", title: "SHINEEE", text: "Always shine like gold." },
  { icon: "🚪", title: "OPORUNITIES", text: "Many opportunities are coming your way." },
  { icon: "🕯️", title: "CANDLE", text: "You are the only one who can light up your own path." },
  { icon: "😂", title: "SMILEE", text: "I hope your smile never fades away." },
  { icon: "🌿", title: "LEAF", text: "Be like the leaf, always finding a way to grow." },
  { icon: "🧭", title: "CLOCK", text: "Always keep an eye on the time." },
  { icon: "🍰", title: "CAKE", text: "Be kind to yourself and treat yourself to something sweet." },
  { icon: "🏆", title: "ACHIEVEMENT", text: "Be proud of what you've accomplished." }
];

var CONFETTI_COLORS = ["#f4b8c5", "#f2d47a", "#a9d3b3", "#f6efdc", "#4aa678", "#e98fa5"];

document.addEventListener("DOMContentLoaded", function () {
  fillNames();
  makeSprouts();
  setupMenu();
  makeFireflies();
  makeStars();
  makeGarden();
  setupMusicButton();

  setupLandingPage();
  setupBirthdayPage();
  setupGraduationPage();
  setupTimelines();
  setupLightbox();
  setupCouplePage();
  setupReasonsPage();
  setupOpenWhenPage();
  setupFortunePage();
  setupMessagePage();
  setupFinalPage();
});

var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;



function fillNames() {
  var items = document.querySelectorAll("[data-names]");
  for (var i = 0; i < items.length; i++) {
    items[i].textContent = items[i].textContent
      .replace("[HER NAME]", HER_NAME)
      .replace("[HIS NAME]", HIS_NAME);
  }
}



function sproutSVG() {
  return '<svg class="sprout-svg" viewBox="0 0 120 130" role="img" aria-label="A cheerful little sprout">' +
    '<ellipse cx="60" cy="124" rx="34" ry="5" fill="#000" opacity=".2"/>' +
    '<path d="M60 48 C58 36 56 28 52 20" stroke="#0a1c13" stroke-width="7" fill="none" stroke-linecap="round"/>' +
    '<path d="M60 48 C58 36 56 28 52 20" stroke="#3f8f66" stroke-width="4.5" fill="none" stroke-linecap="round"/>' +
    '<path d="M60 48 C62 36 66 28 70 20" stroke="#0a1c13" stroke-width="7" fill="none" stroke-linecap="round"/>' +
    '<path d="M60 48 C62 36 66 28 70 20" stroke="#3f8f66" stroke-width="4.5" fill="none" stroke-linecap="round"/>' +
    '<path class="leaf-l" d="M52 20 C44 4 26 6 18 20 C28 34 46 32 52 20Z" fill="#a9dcb9" stroke="#0a1c13" stroke-width="3"/>' +
    '<path class="leaf-r" d="M70 20 C78 2 100 4 104 18 C94 34 76 32 70 20Z" fill="#a9dcb9" stroke="#0a1c13" stroke-width="3"/>' +
    '<path d="M60 46 C88 46 100 70 98 94 C96 114 80 124 60 124 C40 124 24 114 22 94 C20 70 32 46 60 46Z" fill="#f7f0dc" stroke="#0a1c13" stroke-width="3.5"/>' +
    '<circle class="eye" cx="46" cy="86" r="5" fill="#0a1c13"/>' +
    '<circle class="eye" cx="74" cy="86" r="5" fill="#0a1c13"/>' +
    '<ellipse cx="35" cy="98" rx="7" ry="4.5" fill="#f8a9c2"/>' +
    '<ellipse cx="85" cy="98" rx="7" ry="4.5" fill="#f8a9c2"/>' +
    '<path d="M53 97 Q60 105 67 97" stroke="#0a1c13" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '</svg>';
}

function makeSprouts() {
  var brand = document.querySelector(".brand-icon");
  if (brand) brand.innerHTML = sproutSVG().replace('role="img" aria-label="A cheerful little sprout"', 'aria-hidden="true"');

  var sprouts = document.querySelectorAll(".sprout[data-say]");
  for (var i = 0; i < sprouts.length; i++) {
    var say = sprouts[i].getAttribute("data-say");
    sprouts[i].innerHTML = '<div class="sprout-bubble">' + say + '</div>' + sproutSVG();
  }
}



function setupMenu() {
  var button = document.querySelector(".menu-btn");
  var menu = document.querySelector("#menu");
  if (!button || !menu) return;
  var closeButton = menu.querySelector(".menu-close");

  function openMenu() {
    menu.hidden = false;
    button.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
    if (closeButton) closeButton.focus();
  }

  function closeMenu() {
    menu.hidden = true;
    button.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
    button.focus();
  }

  button.addEventListener("click", openMenu);
  if (closeButton) closeButton.addEventListener("click", closeMenu);
  menu.addEventListener("click", function (event) {
    if (event.target === menu) closeMenu();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !menu.hidden) closeMenu();
  });
}



function makeFireflies() {
  var layer = document.querySelector(".fireflies");
  if (!layer) return;

  for (var i = 0; i < 24; i++) {
    var dot = document.createElement("span");
    dot.className = "firefly";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.top = Math.random() * 100 + "%";
    dot.style.setProperty("--s", 3 + Math.random() * 4 + "px");
    dot.style.setProperty("--dx", Math.random() * 160 - 80 + "px");
    dot.style.setProperty("--dy", Math.random() * 160 - 80 + "px");
    dot.style.setProperty("--dur", 9 + Math.random() * 10 + "s");
    dot.style.setProperty("--pulse", 3 + Math.random() * 4 + "s");
    dot.style.setProperty("--delay", "-" + Math.random() * 12 + "s");
    layer.appendChild(dot);
  }
}




function makeStars() {
  var layer = document.querySelector(".fireflies");
  if (!layer || !document.body.classList.contains("page-index")) return;

  for (var i = 0; i < 46; i++) {
    var star = document.createElement("span");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 62 + "%";
    star.style.setProperty("--s", 1.5 + Math.random() * 2 + "px");
    star.style.setProperty("--t", 2 + Math.random() * 4 + "s");
    star.style.setProperty("--delay", "-" + Math.random() * 6 + "s");
    layer.appendChild(star);
  }
}



var FLOWER_COLORS = ["#f8a9c2", "#f5b83d", "#f7f0dc", "#ee6c4d", "#a9dcb9", "#f5b83d"];

function flowerSVG(kind, color) {
  var stem = '<path d="M15 100 Q12 62 15 32" stroke="#0a1c13" stroke-width="4" fill="none" stroke-linecap="round"/>' +
             '<path d="M15 100 Q12 62 15 32" stroke="#3f8f66" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
             '<path d="M15 74 q-13 -5 -13 -19 q13 2 13 19Z" fill="#3f8f66" stroke="#0a1c13" stroke-width="2"/>';
  var head;

  if (kind === 0) {          
    head = '<path d="M7 22 C7 12 10 8 12 5 C13 10 17 10 18 5 C20 8 23 12 23 22 C23 31 19 35 15 35 C11 35 7 31 7 22Z" fill="' + color + '" stroke="#0a1c13" stroke-width="2.4"/>';
  } else if (kind === 1) {   
    var petals = "";
    for (var a = 0; a < 8; a++) {
      petals += '<ellipse cx="15" cy="16" rx="3.6" ry="8.4" fill="' + color + '" stroke="#0a1c13" stroke-width="1.6" transform="rotate(' + (a * 45) + ' 15 26)"/>';
    }
    head = petals + '<circle cx="15" cy="26" r="5" fill="#f5b83d" stroke="#0a1c13" stroke-width="2"/>';
  } else {                   
    head = '<circle cx="15" cy="22" r="7.4" fill="' + color + '" stroke="#0a1c13" stroke-width="2"/>' +
           '<circle cx="8" cy="30" r="5.8" fill="' + color + '" stroke="#0a1c13" stroke-width="2"/>' +
           '<circle cx="22" cy="30" r="5.8" fill="' + color + '" stroke="#0a1c13" stroke-width="2"/>';
  }
  return '<svg viewBox="0 0 30 100" aria-hidden="true">' + stem + head + '</svg>';
}

function makeGarden() {
  var beds = document.querySelectorAll(".garden .flowers");
  for (var b = 0; b < beds.length; b++) {
    var bed = beds[b];
    var count = Math.max(12, Math.min(38, Math.round(window.innerWidth / 46)));

    for (var i = 0; i < count; i++) {
      var slot = document.createElement("span");
      slot.className = "flower";
      slot.style.left = (i / count) * 100 + Math.random() * (100 / count) + "%";
      slot.style.setProperty("--b", 58 + Math.random() * 44 + "px");
      slot.style.setProperty("--w", 22 + Math.random() * 16 + "px");
      slot.style.setProperty("--dur", 4 + Math.random() * 3 + "s");
      slot.style.setProperty("--delay", "-" + Math.random() * 5 + "s");
      slot.innerHTML = flowerSVG(Math.floor(Math.random() * 3), FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)]);
      bed.appendChild(slot);
    }
  }
}

function makeConfetti(amount) {
  for (var i = 0; i < amount; i++) {
    var piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.animationDuration = 2.2 + Math.random() * 1.8 + "s";
    var shape = Math.random();
    piece.style.borderRadius = shape > 0.66 ? "50%" : shape > 0.33 ? "0 100% 0 100%" : "2px";
    document.body.appendChild(piece);

    (function (el) {
      setTimeout(function () { el.remove(); }, 4300);
    })(piece);
  }
}



function setupMusicButton() {
  var button = document.querySelector(".music-toggle");
  if (!button) return;

  var KEY = "surpriseMusic";
  var audio = null;

  function getAudio() {
    if (audio) return audio;
    audio = new Audio(MUSIC_FILE);
    audio.loop = true;
    audio.addEventListener("error", function () { setUI(false); });
    return audio;
  }

  function setUI(on) {
    button.classList.toggle("playing", on);
    button.textContent = on ? "🔊" : "🎵";
    button.setAttribute("aria-pressed", on ? "true" : "false");
  }

  function play() {
    var player = getAudio();
    var attempt = player.play();
    if (attempt && attempt.then) {
      return attempt.then(function () { setUI(true); }).catch(function () { setUI(false); });
    }
    setUI(true);
    return Promise.resolve();
  }

  button.addEventListener("click", function () {
    var player = getAudio();
    if (player.paused) {
      play();
    } else {
      player.pause();
      setUI(false);
    }
  });

  window.addEventListener("pagehide", function () {
    try {
      sessionStorage.setItem(KEY, JSON.stringify({ on: !!audio && !audio.paused, t: audio ? audio.currentTime : 0 }));
    } catch (e) {}
  });

  var saved = null;
  try { saved = JSON.parse(sessionStorage.getItem(KEY) || "null"); } catch (e) {}

  if (saved && saved.on) {
    var player = getAudio();
    player.addEventListener("loadedmetadata", function () {
      try { audio.currentTime = saved.t; } catch (e) {}
    }, { once: true });

    var attempt = player.play();
    if (attempt && attempt.then) {
      attempt.then(function () { setUI(true); }).catch(function () {
       
        document.addEventListener("pointerdown", function (event) {
          if (event.target.closest && event.target.closest(".music-toggle")) return;
          play();
        }, { once: true });
      });
    }
  }
}



function setupLandingPage() {
  var giftCard = document.querySelector(".gift-card");
  var openButton = document.querySelector("#openGiftBtn");
  if (!giftCard || !openButton) return;

  openButton.addEventListener("click", function () {
    giftCard.classList.add("is-opened");
    openButton.disabled = true;
    makeConfetti(100);

    setTimeout(function () {
      window.location.href = "birthday.html";
    }, 1500);
  });
}



function setupBirthdayPage() {
  var cakeScene = document.querySelector(".cake-scene");
  var wishButton = document.querySelector("#makeWishBtn");
  var wishMessage = document.querySelector("#wishMessage");
  if (!cakeScene || !wishButton) return;

  wishButton.addEventListener("click", function () {
    cakeScene.classList.add("wish-made");
    makeConfetti(70);

    if (wishMessage) {
      wishMessage.textContent = BIRTHDAY_WISHES[Math.floor(Math.random() * BIRTHDAY_WISHES.length)];
      void wishMessage.offsetWidth;
      wishMessage.classList.add("show");
    }

    wishButton.disabled = true;
    wishButton.textContent = "Wish made 💫";
  });
}



function setupGraduationPage() {
  var capScene = document.querySelector(".cap-scene");
  var celebrateButton = document.querySelector("#celebrateBtn");
  if (!capScene || !celebrateButton) return;

  celebrateButton.addEventListener("click", function () {
    capScene.classList.add("tossed");
    makeConfetti(90);
    setTimeout(function () { capScene.classList.remove("tossed"); }, 1200);
  });
}



function setupTimelines() {
  var timelines = document.querySelectorAll(".timeline");
  if (!timelines.length) return;

  function update() {
    var line = window.innerHeight * 0.62;

    for (var t = 0; t < timelines.length; t++) {
      var box = timelines[t];
      var rect = box.getBoundingClientRect();
      var progress = (line - rect.top) / rect.height;
      progress = Math.max(0, Math.min(1, progress));
      box.style.setProperty("--grow", (progress * 100).toFixed(1));

      var items = box.querySelectorAll(".t-item");
      for (var i = 0; i < items.length; i++) {
        var node = items[i].querySelector(".t-node");
        var top = (node || items[i]).getBoundingClientRect().top;
        items[i].classList.toggle("on", top < line);
      }
    }
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { update(); ticking = false; });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}



function setupLightbox() {
  var polaroids = document.querySelectorAll(".polaroid");
  var lightbox = document.querySelector("#lightbox");
  if (polaroids.length === 0 || !lightbox) return;

  var frameBox = lightbox.querySelector(".photo-frame");
  var captionBox = lightbox.querySelector(".lightbox-caption");
  var closeButton = lightbox.querySelector(".lightbox-close");
  var prevButton = lightbox.querySelector(".lightbox-prev");
  var nextButton = lightbox.querySelector(".lightbox-next");
  var currentIndex = 0;
  var lastFocus = null;

  function showPhoto() {
    var item = polaroids[currentIndex];
    var source = item.querySelector(".photo-frame");
    frameBox.innerHTML = source.innerHTML;
    frameBox.className = source.className;
    frameBox.setAttribute("data-label", source.getAttribute("data-label") || "");
    captionBox.textContent = item.querySelector("figcaption").textContent;
  }

  function openAt(index) {
    currentIndex = index;
    showPhoto();
    lastFocus = document.activeElement;
    lightbox.classList.add("open");
    closeButton.focus();
  }

  function closeBox() {
    lightbox.classList.remove("open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function step(delta) {
    currentIndex = (currentIndex + delta + polaroids.length) % polaroids.length;
    showPhoto();
  }

  for (var i = 0; i < polaroids.length; i++) {
    (function (index) {
      polaroids[index].addEventListener("click", function () { openAt(index); });
      polaroids[index].addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openAt(index);
        }
      });
    })(i);
  }

  closeButton.addEventListener("click", closeBox);
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeBox();
  });
  prevButton.addEventListener("click", function () { step(-1); });
  nextButton.addEventListener("click", function () { step(1); });

  document.addEventListener("keydown", function (event) {
    if (!lightbox.classList.contains("open")) return;
    if (event.key === "Escape") closeBox();
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "ArrowRight") step(1);
  });
}



function setupCouplePage() {
  var box = document.querySelector("#together");
  if (!box || !COUPLE_START_DATE) return;

  var start = new Date(COUPLE_START_DATE + "T00:00:00");
  if (isNaN(start.getTime())) return;

  var now = new Date();
  var years = now.getFullYear() - start.getFullYear();
  var months = now.getMonth() - start.getMonth();
  var days = now.getDate() - start.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  if (years < 0) return;

  var totalDays = Math.floor((now - start) / 86400000);
  document.querySelector("#tgYears").textContent = years;
  document.querySelector("#tgMonths").textContent = months;
  document.querySelector("#tgDays").textContent = days;
  document.querySelector("#tgTotal").textContent = "That's " + totalDays.toLocaleString() + " days of choosing each other.";
  box.hidden = false;
}



function setupReasonsPage() {
  var cards = document.querySelectorAll(".flip");
  if (!cards.length) return;

  var counter = document.querySelector("#flipCount");
  var done = document.querySelector("#reasonsDone");
  var seen = 0;

  function refresh() {
    if (counter) counter.textContent = seen + " of " + cards.length + " flipped";
    if (seen === cards.length && done && done.hidden) {
      done.hidden = false;
      makeConfetti(80);
      done.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "center" });
    }
  }

  for (var i = 0; i < cards.length; i++) {
    (function (card) {
      card.addEventListener("click", function () {
        var flipped = card.classList.toggle("flipped");
        card.setAttribute("aria-pressed", flipped ? "true" : "false");
        if (flipped && !card.getAttribute("data-seen")) {
          card.setAttribute("data-seen", "1");
          seen++;
          refresh();
        }
      });
    })(cards[i]);
  }
  refresh();
}



function setupOpenWhenPage() {
  var envelopes = document.querySelectorAll(".env");
  var modal = document.querySelector("#letterModal");
  if (!envelopes.length || !modal) return;

  var title = modal.querySelector(".note-title");
  var body = modal.querySelector(".note-body");
  var closeButton = modal.querySelector(".modal-close");
  var lastFocus = null;

  function openLetter(env) {
    title.textContent = env.getAttribute("data-title");
    body.textContent = env.getAttribute("data-letter");
    env.classList.add("opened");
    lastFocus = env;
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    closeButton.focus();
  }

  function closeLetter() {
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }

  for (var i = 0; i < envelopes.length; i++) {
    (function (env) {
      env.addEventListener("click", function () { openLetter(env); });
    })(envelopes[i]);
  }

  closeButton.addEventListener("click", closeLetter);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeLetter();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden) closeLetter();
  });
}



function setupFortunePage() {
  var deck = document.querySelector("#deck");
  var reveal = document.querySelector("#fortuneReveal");
  var again = document.querySelector("#drawAgain");
  if (!deck || !reveal) return;

  var cards = deck.querySelectorAll(".fcard");
  var lastIndex = -1;

  function pick(card) {
    if (deck.classList.contains("chosen")) return;

    var index;
    do { index = Math.floor(Math.random() * FORTUNES.length); }
    while (index === lastIndex && FORTUNES.length > 1);
    lastIndex = index;

    var fortune = FORTUNES[index];
    card.querySelector(".fcard-face").textContent = fortune.icon;
    card.classList.add("picked");
    card.setAttribute("aria-pressed", "true");
    deck.classList.add("chosen");

    reveal.querySelector("h2").textContent = fortune.title;
    reveal.querySelector("p").textContent = fortune.text;
    setTimeout(function () {
      reveal.hidden = false;
      if (again) again.hidden = false;
      makeConfetti(30);
    }, prefersReducedMotion ? 0 : 650);
  }

  for (var i = 0; i < cards.length; i++) {
    (function (card) {
      card.addEventListener("click", function () { pick(card); });
    })(cards[i]);
  }

  if (again) {
    again.addEventListener("click", function () {
      deck.classList.remove("chosen");
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove("picked");
        cards[i].setAttribute("aria-pressed", "false");
      }
      reveal.hidden = true;
      again.hidden = true;
    });
  }
}



function setupMessagePage() {
  var envelope = document.querySelector("#envelope");
  var openButton = document.querySelector("#openLetterBtn");
  var letter = document.querySelector("#letterPaper");
  if (!envelope || !openButton || !letter) return;

  var paragraphs = letter.querySelectorAll("[data-typewrite]");
  var finish = null;
  var opened = false;

  function openLetter() {
    if (opened) return;
    opened = true;
    envelope.classList.add("open");
    openButton.disabled = true;

    setTimeout(function () {
      letter.classList.add("show");
      finish = typeParagraphs(paragraphs, function () { letter.classList.add("done"); });
      if (prefersReducedMotion) finish();
    }, 500);
  }

  envelope.addEventListener("click", openLetter);
  openButton.addEventListener("click", openLetter);
  letter.addEventListener("click", function () { if (finish) finish(); });
}

function typeParagraphs(paragraphs, onDone) {
  var index = 0;
  var timer = null;
  var stopped = false;

 
 
  var spans = [];
  for (var p = 0; p < paragraphs.length; p++) {
    var full = paragraphs[p].getAttribute("data-typewrite");
    paragraphs[p].innerHTML = '<span></span><span style="visibility:hidden"></span>';
    var pair = paragraphs[p].querySelectorAll("span");
    pair[1].textContent = full;
    spans.push({ shown: pair[0], hidden: pair[1], full: full });
  }

  function next() {
    if (stopped) return;
    if (index >= spans.length) { onDone(); return; }

    var item = spans[index];
    var count = 0;
    timer = setInterval(function () {
      count++;
      item.shown.textContent = item.full.slice(0, count);
      item.hidden.textContent = item.full.slice(count);
      if (count >= item.full.length) {
        clearInterval(timer);
        index++;
        next();
      }
    }, 18);
  }

  function finish() {
    if (stopped) return;
    stopped = true;
    clearInterval(timer);
    for (var i = 0; i < spans.length; i++) {
      spans[i].shown.textContent = spans[i].full;
      spans[i].hidden.textContent = "";
    }
    onDone();
  }

  next();
  return finish;
}



function setupFinalPage() {
  var finalButton = document.querySelector("#finalSurpriseBtn");
  var finalMessage = document.querySelector("#finalMessage");
  if (!finalButton) return;

  finalButton.addEventListener("click", function () {
    makeConfetti(140);
    if (finalMessage) finalMessage.classList.add("show");
    finalButton.style.display = "none";
  });
}
