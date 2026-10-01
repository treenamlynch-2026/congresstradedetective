(function () {
  "use strict";
  var S = window.SITE;
  var ROOT = document.documentElement.getAttribute("data-root") || "";
  var PAGE = document.body.getAttribute("data-page") || "";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var ICONS = {
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9l5.8 3.1-5.8 3.1z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.3 22H2.2l7.7-8.8L1.7 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20z"/></svg>'
  };
  var LABELS = { youtube: "YouTube", tiktok: "TikTok", x: "X" };

  function socialLinks(cls, withText) {
    return ["youtube", "tiktok", "x"].filter(function (k) { return S.social[k]; }).map(function (k) {
      return '<a class="' + cls + '" href="' + esc(S.social[k]) + '" target="_blank" rel="noopener" aria-label="' + LABELS[k] + '">' +
        ICONS[k] + (withText ? "<span>" + LABELS[k] + "</span>" : "") + "</a>";
    }).join("");
  }

  var NAV = [["home", "", "Home"], ["about", "about/", "About"], ["shop", "shop/", "Shop"], ["contact", "contact/", "Contact"]];

  function navLinks() {
    return NAV.map(function (n) {
      return '<a href="' + ROOT + n[1] + '"' + (PAGE === n[0] ? ' class="active" aria-current="page"' : "") + ">" + n[2] + "</a>";
    }).join("");
  }

  var LOGO = '<img class="logo-mark" src="' + ROOT + 'assets/img/favicon.svg" alt="" width="34" height="34">';
  var BRAND = '<a class="brand" href="' + ROOT + '">' + LOGO + '<span>Congress <em>Trade</em> Detective</span></a>';

  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<div class="container header-inner">' + BRAND +
        '<nav class="nav" id="nav" aria-label="Main">' + navLinks() + "</nav>" +
        '<div class="header-social">' + socialLinks("icon-link", false) + "</div>" +
        '<button class="menu-btn" id="menu-btn" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>' +
      "</div>";
    var btn = document.getElementById("menu-btn");
    btn.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML =
      '<div class="container footer-inner">' +
        "<div>" + BRAND + '<p class="muted" style="margin-top:12px">' + esc(S.tagline) +
        '<br><a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a></p></div>" +
        '<nav class="footer-nav" aria-label="Footer">' + navLinks() + '<a href="' + ROOT + 'privacy/">Privacy</a></nav>' +
        '<div class="footer-social">' + socialLinks("icon-link labeled", true) + "</div>" +
      "</div>" +
      '<div class="container"><p class="disclaimer">Congress Trade Detective reports information from public financial disclosures filed under the STOCK Act. It is not investment advice. Disclosures are filed late, show value ranges rather than exact amounts, and can contain errors; always check the official filing.</p>' +
      '<p class="copyright">&copy; ' + new Date().getFullYear() + " Congress Trade Detective</p></div>";
  }

  // social fill-ins: <a data-social="youtube">
  document.querySelectorAll("[data-social]").forEach(function (a) {
    var url = S.social[a.getAttribute("data-social")];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; } else { a.remove(); }
  });

  // app button: <a data-app> -> live link, or "launching soon"
  document.querySelectorAll("[data-app]").forEach(function (a) {
    if (S.appUrl) { a.href = S.appUrl; }
    else {
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
      a.textContent = "Tracker launching soon";
    }
  });
  // store badges: <a data-store="appStore|playStore">
  document.querySelectorAll("[data-store]").forEach(function (a) {
    var url = S[a.getAttribute("data-store")];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; } else { a.remove(); }
  });
  document.querySelectorAll("[data-email]").forEach(function (a) {
    a.href = "mailto:" + S.email; a.textContent = S.email;
  });

  // merch: <a data-store-link>, <div id="merch-grid">
  var M = S.merch || {};
  document.querySelectorAll("[data-store-link]").forEach(function (a) {
    if (M.storeUrl) { a.href = M.storeUrl; a.target = "_blank"; a.rel = "noopener"; }
    else { a.removeAttribute("href"); a.setAttribute("aria-disabled", "true"); a.textContent = "Merch drop coming soon"; }
  });
  var grid = document.getElementById("merch-grid");
  if (grid) {
    var items = (M.products || []).filter(function (p) { return p && p.name; });
    if (items.length) {
      grid.innerHTML = items.map(function (p) {
        var link = p.url || M.storeUrl;
        var tag = "div";
        function list(a) { return "<ul>" + a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }
        var details = (p.description || p.features || p.care) ? '<details class="product-details"><summary>Details</summary>' +
          (p.description ? "<p>" + esc(p.description) + "</p>" : "") +
          (p.features ? "<h4>Product features</h4>" + list(p.features) : "") +
          (p.care ? "<h4>Care instructions</h4>" + list(p.care) : "") + "</details>" : "";
        var buy = link ? '<a class="btn product-buy" href="' + esc(link) + '" target="_blank" rel="noopener">Buy now</a>' : "";
        return '<' + tag + ' class="product">' +
          (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">' : "") +
          '<span class="product-name">' + esc(p.name) + "</span>" +
          (p.brand ? '<span class="product-brand">Brand: ' + esc(p.brand) + "</span>" : "") +
          (p.options ? '<span class="product-options">' + esc(p.options) + "</span>" : "") +
          ((p.colors || p.views || []).length ? '<span class="swatches">' + (p.colors || p.views).map(function (c, i) {
            return '<button type="button" class="swatch' + (i ? "" : " on") + '" data-img="' + esc(c[1]) + '">' + esc(c[0]) + "</button>";
          }).join("") + "</span>" : "") +
          (p.sizeChart ? '<button type="button" class="size-link" data-chart="' + esc(p.sizeChart) + '">Size chart</button>' : "") +
          (p.price ? '<span class="product-price">' + esc(p.price) + "</span>" : "") +
          (p.note && !link ? '<span class="product-note">' + esc(p.note) + "</span>" : "") + details + buy + "</" + tag + ">";
      }).join("");
      grid.addEventListener("click", function (e) {
        var sw = e.target.closest(".swatch"), sc = e.target.closest(".size-link");
        if (!sw && !sc) return;
        if (sw) {
          var card = sw.closest(".product");
          card.querySelector("img").src = sw.getAttribute("data-img");
          card.querySelectorAll(".swatch").forEach(function (b) { b.classList.toggle("on", b === sw); });
        } else { window.open(sc.getAttribute("data-chart"), "_blank", "noopener"); }
      });
    } else { var sec = document.getElementById("merch-products"); if (sec) sec.remove(); }
  }

  // contact form
  var form = document.getElementById("contact-form");
  if (form) {
    var status = document.getElementById("form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.botcheck && form.botcheck.checked) return;
      var b = form.querySelector("button[type=submit]");
      b.disabled = true; b.textContent = "Sending...";
      status.className = "form-status"; status.textContent = "";
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: S.web3formsKey,
          subject: "New message from congresstradedetective.com" + (form.topic.value ? " (" + form.topic.value + ")" : ""),
          from_name: "Congress Trade Detective website",
          name: form.name.value, email: form.email.value, topic: form.topic.value, message: form.message.value
        })
      }).then(function (r) { return r.json(); }).then(function (res) {
        if (!res.success) throw new Error(res.message || "Send failed");
        form.reset();
        status.className = "form-status ok";
        status.textContent = "Message received. Hal is on the case.";
      }).catch(function () {
        status.className = "form-status error";
        status.textContent = "Something went wrong. Email " + S.email + " instead.";
      }).finally(function () { b.disabled = false; b.textContent = "Send message"; });
    });
  }
})();
