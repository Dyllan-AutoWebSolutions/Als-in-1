/* Als-in-1 Tuindienste — mobile nav + contact-form behaviour.
   Loaded in <head> without defer so the `js` class lands before first paint
   (prevents the mobile nav flashing open). Everything else waits for the DOM. */

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  initNav();
  initHeaderHide();
  initQuoteForm();
});

/* ---------- Mobile nav ---------- */

function initNav() {
  var toggle = document.querySelector(".nav-toggle");
  if (!toggle) return;
  var nav = document.getElementById(toggle.getAttribute("aria-controls"));
  if (!nav) return;
  var label = toggle.querySelector(".nav-toggle__label");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    if (label) label.textContent = open ? "Maak toe" : "Menu";
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia("(min-width: 860px)").addEventListener("change", function (mq) {
    if (mq.matches) setOpen(false);
  });
}

/* ---------- Hide header on scroll down (phones only) ---------- */

function initHeaderHide() {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (!header) return;
  // Phones in portrait, plus any short (landscape) screen, matching the CSS.
  var phone = window.matchMedia("(max-width: 859.98px), (max-height: 500px)");
  var lastY = window.scrollY;
  var ticking = false;
  var THRESHOLD = 8; // ignore tiny scroll jitter

  function menuOpen() {
    return toggle && toggle.getAttribute("aria-expanded") === "true";
  }

  function update() {
    ticking = false;
    var y = window.scrollY;
    var delta = y - lastY;
    if (!phone.matches || menuOpen() || header.contains(document.activeElement) || y <= header.offsetHeight) {
      header.classList.remove("is-hidden");
    } else if (delta > THRESHOLD) {
      header.classList.add("is-hidden");
    } else if (delta < -THRESHOLD) {
      header.classList.remove("is-hidden");
    }
    if (Math.abs(delta) > THRESHOLD) lastY = y;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }, { passive: true });

  // Keyboard users tabbing into the header always see it.
  header.addEventListener("focusin", function () {
    header.classList.remove("is-hidden");
  });

  phone.addEventListener("change", function () {
    header.classList.remove("is-hidden");
  });
}

/* ---------- Quote form ---------- */

var MAX_PHOTO_BYTES = 8 * 1024 * 1024;

var MESSAGES = {
  naam: "Vul asseblief jou naam in.",
  selfoon: "Vul asseblief 'n geldige selfoonnommer in, bv. 082 123 4567.",
  area: "Kies asseblief jou area.",
  tipe: "Kies asseblief Woonhuis of Plaas.",
  fotoGroot: "Die foto is te groot. Kies asseblief 'n foto kleiner as 8 MB.",
  fotoTipe: "Die lêer is nie 'n foto nie. Kies asseblief 'n JPG-, PNG- of HEIC-foto."
};

function initQuoteForm() {
  var form = document.querySelector("form[name='kwotasie']");
  if (!form) return;

  var radios = form.querySelectorAll("input[name='tipe']");
  var area = form.querySelector("#area");
  var farmField = form.querySelector("[data-farm-only]");
  var submit = form.querySelector("[type='submit']");
  var photo = form.querySelector("#foto");
  var photoError = form.querySelector("#foto-fout");

  // Snapshot the no-JS optgroups so the list can be rebuilt per type.
  var groups = {};
  area.querySelectorAll("optgroup").forEach(function (g) {
    groups[g.dataset.group] = Array.prototype.map.call(g.querySelectorAll("option"), function (o) {
      return o.value;
    });
  });
  var placeholder = area.querySelector("option[value='']").textContent;
  var other = area.querySelector("option[data-other]");
  var otherValue = other.value;
  var otherLabel = other.textContent;

  function currentType() {
    var checked = form.querySelector("input[name='tipe']:checked");
    return checked && checked.value === "Plaas" ? "plaas" : "huis";
  }

  function render() {
    var type = currentType();
    var keep = area.value;
    var values = groups[type].concat(otherValue);

    area.textContent = "";
    area.appendChild(new Option(placeholder, ""));
    groups[type].forEach(function (v) {
      area.appendChild(new Option(v, v));
    });
    area.appendChild(new Option(otherLabel, otherValue));
    area.value = values.indexOf(keep) > -1 ? keep : "";

    var isFarm = type === "plaas";
    farmField.hidden = !isFarm;
    farmField.querySelector("input").disabled = !isFarm;
    submit.textContent = isFarm ? submit.dataset.labelPlaas : submit.dataset.labelHuis;
  }

  // ?tipe=plaas preselects Plaas.
  var params = new URLSearchParams(window.location.search);
  if (params.get("tipe") === "plaas") {
    form.querySelector("input[name='tipe'][value='Plaas']").checked = true;
  }

  radios.forEach(function (r) {
    r.addEventListener("change", render);
  });
  render();

  // Afrikaans validation messages instead of the browser's own language.
  [["#naam", "naam"], ["#selfoon", "selfoon"], ["#area", "area"]].forEach(function (pair) {
    var el = form.querySelector(pair[0]);
    el.addEventListener("invalid", function () {
      el.setCustomValidity(MESSAGES[pair[1]]);
      el.setAttribute("aria-invalid", "true");
    });
    el.addEventListener("input", clear);
    el.addEventListener("change", clear);
    function clear() {
      el.setCustomValidity("");
      el.removeAttribute("aria-invalid");
    }
  });
  radios[0].addEventListener("invalid", function () {
    radios[0].setCustomValidity(MESSAGES.tipe);
  });
  radios.forEach(function (r) {
    r.addEventListener("change", function () {
      radios[0].setCustomValidity("");
    });
  });

  // One photo, max 8 MB.
  photo.addEventListener("change", function () {
    var file = photo.files && photo.files[0];
    var message = "";
    if (file && file.type && file.type.indexOf("image/") !== 0) message = MESSAGES.fotoTipe;
    else if (file && file.size > MAX_PHOTO_BYTES) message = MESSAGES.fotoGroot;

    photo.setCustomValidity(message);
    photoError.textContent = message;
    photoError.hidden = !message;
    if (message) {
      photo.setAttribute("aria-invalid", "true");
    } else {
      photo.removeAttribute("aria-invalid");
    }
  });
}
