// Rambla site: language switch, the interactive strip demo, section reveals and copy buttons.
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // English strings. Spanish lives in the markup and is cached on load to switch back.
  const english = {
    "nav.skip": "Skip to content",
    "nav.how": "How it works",
    "nav.shortcuts": "Shortcuts",
    "nav.install": "Install",
    "hero.title": "Your windows, in a row.",
    "hero.lead": "Like an endless promenade: every window is a column on one horizontal strip. Free and open source.",
    "cta.download": "Download for Mac",
    "cta.github": "View on GitHub",
    "demo.width": "Cycle width",
    "demo.new": "New window",
    "demo.help": "Try it: tap the buttons or use the arrow keys.",
    "how.title": "Nothing gets squeezed.",
    "how.lead": "Instead of cutting the screen into smaller and smaller pieces, Rambla adds columns to a strip that keeps going past the edges. The screen slides to whatever you are using.",
    "how.a.title": "You open a window",
    "how.a.body": "It appears right next to the one you are using, at its own size. The others stay as they are.",
    "how.b.title": "You focus another one",
    "how.b.body": "With a shortcut, a click, ⌘Tab or the Dock. The strip slides until the window is fully visible.",
    "how.c.title": "Everything else waits at the side",
    "how.c.body": "Windows outside the screen peek one point from its edge. One click and they are back.",
    "features.title": "Made to work with all day.",
    "features.stacks.title": "Stacks and tabs",
    "features.stacks.body": "Put several windows in one column, one above the other or as tabs with their own bar.",
    "features.pin.title": "Pinned columns",
    "features.pin.body": "Chat or music, always in view at an edge.",
    "features.trackpad.title": "Trackpad",
    "features.trackpad.body": "Swipe with three or four fingers and the strip follows.",
    "features.light.title": "Truly light",
    "features.light.cpu": "CPU when idle",
    "features.light.mem": "of memory",
    "features.light.body": "Native Swift, no Electron, nothing polling in the background: it only reacts when something happens.",
    "features.restore.title": "Remembers everything",
    "features.restore.body": "Columns, widths and stacks come back after a restart. Every display and every desktop has its own strip.",
    "features.auto.title": "Scriptable",
    "features.auto.body": "rambla:// links, a command-line tool and Raycast scripts.",
    "rect.title": "Gets along with Rectangle.",
    "rect.body": "Keep using Rectangle as always. If you place a window with Rectangle, Rambla lets it float where it landed and does not fight it. ⌃⌘T puts it back in the strip.",
    "rect.note": "Different keys, so no shortcut clashes. Settings warn you if one matches your Rectangle setup.",
    "keys.title": "Drive it from the keyboard.",
    "keys.nav": "Navigate",
    "keys.focus": "Focus left or right",
    "keys.move": "Move the column",
    "keys.jump": "Go to column N",
    "keys.ends": "First and last",
    "keys.display": "To the other display",
    "keys.size": "Size",
    "keys.cycle": "Cycle 25, 33, 50, 66 and 75 %",
    "keys.full": "Full width",
    "keys.center": "Center",
    "keys.nudge": "Wider or narrower",
    "keys.pin": "Pin to an edge",
    "keys.stacks": "Stacks",
    "keys.stack": "Stack to the side",
    "keys.pop": "Pop out of the stack",
    "keys.rows": "Move within the stack",
    "keys.tabs": "Stack or tabs",
    "keys.float": "Float or back to the strip",
    "keys.manual": "Every shortcut is in the manual",
    "install.title": "Install it in a minute.",
    "install.a": "Download the DMG.",
    "install.a.body": "A single file of just over 1 MB.",
    "install.b": "Drag Rambla to Applications.",
    "install.b.body": "The first time, right-click it and choose Open: it is not notarized by Apple.",
    "install.c": "Grant the Accessibility permission.",
    "install.c.body": "System Settings, Privacy & Security, Accessibility. It is what lets it move windows.",
    "install.req": "Requires macOS 14 Sonoma or later on a Mac with Apple silicon.",
    "install.build": "Rather build it yourself?",
    "install.build.body": "All you need are the Xcode Command Line Tools.",
    "mvd.alt": "Aerial view of the Rambla of Montevideo along the river, with the city behind it at dawn",
    "mvd.credit": "Photo: Sala de Medios, Intendencia de Montevideo",
    "mvd.title": "Made in Montevideo, free for everyone.",
    "mvd.body": "Rambla is open source under the MIT license. Read the code, report a problem or propose an improvement.",
    "mvd.manual": "Read the manual",
    "footer.credits": "Built with Swift in Uruguay.",
    "footer.manual": "Manual",
    "footer.issues": "Report a problem",
    "footer.license": "MIT license",
  };
  const ariaLabels = {
    es: { left: "Enfocar la columna de la izquierda", right: "Enfocar la columna de la derecha", copy: "Copiar", copied: "Copiado" },
    en: { left: "Focus the column on the left", right: "Focus the column on the right", copy: "Copy", copied: "Copied" },
  };

  const textNodes = [...document.querySelectorAll("[data-i18n]")];
  const spanishText = new Map(textNodes.map((n) => [n, n.textContent]));
  const altNodes = [...document.querySelectorAll("[data-i18n-alt]")];
  const spanishAlt = new Map(altNodes.map((n) => [n, n.getAttribute("alt")]));
  const localizedLinks = [...document.querySelectorAll("[data-href-en]")];
  const spanishHref = new Map(localizedLinks.map((a) => [a, a.getAttribute("href")]));
  const toggle = document.getElementById("lang");
  let lang = "es";

  function setLang(next) {
    lang = next;
    document.documentElement.lang = next;
    for (const n of textNodes) n.textContent = next === "es" ? spanishText.get(n) : english[n.dataset.i18n] ?? spanishText.get(n);
    for (const n of altNodes) n.alt = next === "es" ? spanishAlt.get(n) : english[n.dataset.i18nAlt] ?? spanishAlt.get(n);
    for (const a of localizedLinks) a.href = next === "es" ? spanishHref.get(a) : a.dataset.hrefEn;
    toggle.textContent = next === "es" ? "EN" : "ES";
    toggle.setAttribute("aria-label", next === "es" ? "English" : "Español");
    document.querySelector('[data-act="left"]').setAttribute("aria-label", ariaLabels[next].left);
    document.querySelector('[data-act="right"]').setAttribute("aria-label", ariaLabels[next].right);
    for (const b of document.querySelectorAll(".copy")) b.setAttribute("aria-label", ariaLabels[next].copy);
    try { localStorage.setItem("rambla-lang", next); } catch { /* private mode */ }
    demo.relabel();
  }

  toggle.addEventListener("click", () => setLang(lang === "es" ? "en" : "es"));

  // The demo: a working model of the strip, with the same rules as the app (new windows open next to
  // the focused one, the strip scrolls just enough to show it, windows outside are parked at the edge).
  const demo = (() => {
    const root = document.getElementById("demo");
    const track = document.getElementById("track");
    const status = document.getElementById("demo-status");
    const apps = [
      { es: "Navegador", en: "Browser", icon: "i-compass" },
      { es: "Terminal", en: "Terminal", icon: "i-terminal" },
      { es: "Notas", en: "Notes", icon: "i-note" },
      { es: "Música", en: "Music", icon: "i-music" },
      { es: "Correo", en: "Mail", icon: "i-mail" },
      { es: "Editor", en: "Editor", icon: "i-code" },
      { es: "Chat", en: "Chat", icon: "i-chat" },
    ];
    const presets = [0.25, 1 / 3, 0.5, 2 / 3, 0.75];
    const columns = [
      { app: 0, w: 0.5 }, { app: 1, w: 1 / 3 }, { app: 2, w: 0.5 }, { app: 3, w: 2 / 3 },
    ];
    let focused = 0;
    let scroll = 0;
    let nextApp = 4;
    const nodes = new Map();

    function build(column) {
      const node = document.createElement("div");
      node.className = "win";
      node.setAttribute("aria-hidden", "true");
      node.innerHTML = `<span class="icon ${apps[column.app].icon}"></span><span class="label"></span>`;
      node.querySelector(".label").textContent = apps[column.app][lang];
      track.appendChild(node);
      nodes.set(column, node);
      return node;
    }

    function layout() {
      const W = track.clientWidth;
      const pad = W * 0.05;
      const gap = W * 0.022;
      const area = W - 2 * pad;
      const width = (c) => c.w * (area + gap) - gap;
      const xs = [];
      let x = 0;
      for (const c of columns) { xs.push(x); x += width(c) + gap; }
      const total = x - gap;
      const fx = xs[focused], fw = width(columns[focused]);
      if (fw >= area || fx < scroll) scroll = fx;
      else if (fx + fw > scroll + area) scroll = fx + fw - area;
      scroll = Math.max(0, Math.min(scroll, Math.max(0, total - area)));
      columns.forEach((c, i) => {
        const w = width(c);
        let left = pad + xs[i] - scroll;
        if (left + w <= 0) left = 3 - w;          // parked: a sliver at the left edge
        else if (left >= W) left = W - 3;         // parked: a sliver at the right edge
        const node = nodes.get(c);
        node.style.width = `${w}px`;
        node.style.transform = `translateX(${left}px)`;
        node.classList.toggle("focused", i === focused);
      });
    }

    function announce() {
      status.textContent = apps[columns[focused].app][lang];
    }

    const act = {
      left() { focused = Math.max(0, focused - 1); },
      right() { focused = Math.min(columns.length - 1, focused + 1); },
      width() {
        const c = columns[focused];
        c.w = presets.find((p) => p > c.w + 0.01) ?? presets[0];
      },
      new() {
        if (columns.length >= 7) {
          const removed = columns.splice(focused === 0 ? columns.length - 1 : 0, 1)[0];
          nodes.get(removed).remove();
          nodes.delete(removed);
          if (focused > 0) focused -= 1;
        }
        const column = { app: nextApp, w: 0.5 };
        nextApp = (nextApp + 1) % apps.length;
        columns.splice(focused + 1, 0, column);
        const node = build(column);
        node.classList.add("entering");
        focused += 1;
        requestAnimationFrame(() => node.classList.remove("entering"));
      },
    };

    function run(name) {
      act[name]();
      layout();
      announce();
    }

    // A short automatic tour while the demo is on screen, until the visitor touches it.
    const tour = ["right", "right", "new", "width", "left", "left", "left", "right", "new", "right"];
    let step = 0;
    let timer = null;
    let touched = false;
    function play() {
      if (timer || touched || reduceMotion) return;
      timer = setInterval(() => { run(tour[step % tour.length]); step += 1; }, 1700);
    }
    function pause() { clearInterval(timer); timer = null; }
    function stopTour() { touched = true; pause(); }

    root.addEventListener("click", (e) => {
      const button = e.target.closest("button[data-act]");
      if (!button) return;
      stopTour();
      run(button.dataset.act);
    });
    root.addEventListener("keydown", (e) => {
      const keys = { ArrowLeft: "left", ArrowRight: "right", n: "new", r: "width" };
      const name = keys[e.key];
      if (!name || e.metaKey || e.ctrlKey || e.altKey) return;
      e.preventDefault();
      stopTour();
      run(name);
    });
    root.addEventListener("pointerdown", stopTour);

    new IntersectionObserver((entries) => {
      for (const entry of entries) entry.isIntersecting ? play() : pause();
    }, { threshold: 0.4 }).observe(root);
    new ResizeObserver(() => layout()).observe(track);

    columns.forEach(build);
    track.style.setProperty("visibility", "hidden");
    layout();
    requestAnimationFrame(() => track.style.removeProperty("visibility"));

    return {
      relabel() {
        for (const c of columns) nodes.get(c).querySelector(".label").textContent = apps[c.app][lang];
      },
    };
  })();

  // Sections rise in once as they reach the viewport.
  const revealables = document.querySelectorAll("main > section:not(.hero)");
  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      }
    }, { threshold: 0.12 });
    revealables.forEach((s) => { s.classList.add("reveal"); observer.observe(s); });
  }

  // Copy buttons.
  for (const button of document.querySelectorAll(".copy")) {
    button.addEventListener("click", async () => {
      const code = document.getElementById(button.dataset.copy).textContent;
      try {
        await navigator.clipboard.writeText(code);
        const icon = button.querySelector(".icon");
        icon.classList.replace("i-copy", "i-check");
        button.setAttribute("aria-label", ariaLabels[lang].copied);
        setTimeout(() => {
          icon.classList.replace("i-check", "i-copy");
          button.setAttribute("aria-label", ariaLabels[lang].copy);
        }, 1600);
      } catch { /* clipboard unavailable: the text is still selectable */ }
    });
  }

  let saved = null;
  try { saved = localStorage.getItem("rambla-lang"); } catch { /* private mode */ }
  const preferred = saved || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
  if (preferred !== "es") setLang(preferred);
})();
