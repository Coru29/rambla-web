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
    "film.title": "Rambla in 40 seconds.",
    "film.label": "Video: how Rambla works",
    "demo.left": "Focus left",
    "demo.right": "Focus right",
    "demo.moveLeft": "Move left",
    "demo.moveRight": "Move right",
    "demo.above": "Strip above",
    "demo.below": "Strip below",
    "demo.width": "Cycle width",
    "demo.full": "Full width",
    "demo.center": "Center",
    "demo.pin": "Pin",
    "demo.stack": "Stack",
    "demo.pop": "Pop out",
    "demo.tabs": "Tabs",
    "demo.new": "New window",
    "demo.border": "Focus border",
    "demo.dim": "Dim inactive",
    "demo.help": "Try it: tap the buttons or press the keys. In the app every shortcut adds ⌃⌘ (except ⌘N, which belongs to each app), and the strip ones ⌃⌥⌘.",
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
    "features.strips.title": "Stacked strips",
    "features.strips.body": "Work below, home above: several strips per display, one above another. A short swipe or ⌃⌥⌘↑\u00a0↓ takes you from one to the other.",
    "features.trackpad.title": "Trackpad",
    "features.trackpad.body": "Swipe with three or four fingers and the strip follows, with a haptic tap at each column. A short swipe up or down switches strips. A long swipe up gives full width, and a long swipe down opens the overview.",
    "features.pin.title": "Pinned columns",
    "features.pin.body": "Chat or music, always in view at an edge.",
    "features.restore.title": "Remembers everything",
    "features.restore.body": "Columns, widths, stacks and strips come back after a restart or when a display is plugged back in. Every display and desktop has its own strips.",
    "features.mouse.title": "Mouse",
    "features.mouse.body": "Hold ⌃⌘ and the wheel goes from column to column. Or pick mouse buttons, like the side ones 4\u00a0+\u00a05, and move the mouse: the strip follows. Gets along with Mac Mouse Fix.",
    "features.light.title": "Truly light",
    "features.light.cpu": "CPU when idle",
    "features.light.mem": "of memory",
    "features.light.body": "Native Swift, no Electron, nothing polling in the background: it only reacts when something happens.",
    "features.overview.title": "Overview",
    "features.overview.body": "⌃⌘O shows your strips at a glance, one row per strip and every window in miniature with its title. One click and you are there. Drag one to move it, or to another row to move it to that strip.",
    "features.update.title": "One-click updates",
    "features.update.body": "Once a day it checks for a new version. One click downloads it, verifies its signature and reinstalls Rambla, keeping the Accessibility permission.",
    "features.auto.title": "Scriptable",
    "features.auto.body": "rambla:// links, a command-line tool and Raycast scripts.",
    "rect.title": "Gets along with Rectangle.",
    "rect.body": "Keep using Rectangle as always. If you place a window with Rectangle, Rambla lets it float where it landed and does not fight it. ⌃⌘T puts it back in the strip.",
    "rect.note": "Different keys, so no shortcut clashes. The strips use ⌃⌥⌘ with ↑ and ↓, which Rectangle leaves free. Settings warn you if one matches your Rectangle setup.",
    "keys.title": "Drive it from the keyboard.",
    "keys.nav": "Navigate",
    "keys.focus": "Focus left or right",
    "keys.move": "Move the column",
    "keys.strip": "Strip above or below",
    "keys.carry": "Take the window to another strip",
    "keys.jump": "Go to column N",
    "keys.ends": "First and last",
    "keys.display": "To the other display",
    "keys.overview": "Overview",
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
    "install.a.body": "A single 2 MB file.",
    "install.b": "Drag Rambla to Applications.",
    "install.b.body": "It is not notarized by Apple, so macOS will not open it the first time: go to System Settings → Privacy & Security and click Open Anyway. On macOS 14, right-click it and choose Open.",
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
    "footer.mate": "Mate, by the same author",
  };
  const ariaLabels = {
    es: { copy: "Copiar", copied: "Copiado" },
    en: { copy: "Copy", copied: "Copied" },
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
    for (const b of document.querySelectorAll(".copy")) b.setAttribute("aria-label", ariaLabels[next].copy);
    film.setLang(next);
    try { localStorage.setItem("rambla-lang", next); } catch { /* private mode */ }
    demo.relabel();
  }

  toggle.addEventListener("click", () => setLang(lang === "es" ? "en" : "es"));

  // The demo: a working model of the strip, with the same rules as the app. New windows open next to the
  // focused one, the strip scrolls just enough to show it, and windows outside are parked at the edge. A
  // pinned column stays at the left edge, and a column can hold a stack of windows or show them as tabs.
  // There are two strips, work below and home above, and a frosted veil hides the jump between them.
  const demo = (() => {
    const root = document.getElementById("demo");
    const track = document.getElementById("track");
    const veil = document.getElementById("veil");
    const status = document.getElementById("demo-status");
    const apps = [
      { es: "Navegador", en: "Browser", icon: "i-compass" },
      { es: "Terminal", en: "Terminal", icon: "i-terminal" },
      { es: "Notas", en: "Notes", icon: "i-note" },
      { es: "Música", en: "Music", icon: "i-music" },
      { es: "Correo", en: "Mail", icon: "i-mail" },
      { es: "Editor", en: "Editor", icon: "i-code" },
      { es: "Chat", en: "Chat", icon: "i-chat" },
      { es: "Fotos", en: "Photos", icon: "i-photo" },
      { es: "Películas", en: "Movies", icon: "i-film" },
    ];
    const presets = [0.25, 1 / 3, 0.5, 2 / 3, 0.75];
    // A column: its windows (stacked, or as tabs), the active one, its width as a fraction of the screen and, while
    // it is full width, the width to go back to.
    const column = (wins, w) => ({ wins, w, active: 0, tabs: false, pinned: false, before: null });
    let columns = [0, 1, 2, 3].map((app, i) => column([{ app }], [0.5, 1 / 3, 0.5, 2 / 3][i]));
    let focused = 0;
    let scroll = 0;
    let centerNext = false;
    let nextApp = 4;
    const bars = new Map();
    // The strips, from the bottom one up: work, and home above it. Each keeps its own columns, focus and scroll, and
    // the one in view lends them to `columns`, `focused` and `scroll` above, which everything else works on.
    const strips = [
      { name: { es: "Tira de trabajo", en: "Work strip" }, columns, focused, scroll },
      { name: { es: "Tira de casa", en: "Home strip" }, focused: 0, scroll: 0,
        columns: [7, 6, 8].map((app, i) => column([{ app }], [2 / 3, 1 / 3, 0.5][i])) },
    ];
    let level = 0;
    let climbing = false;

    function build(win) {
      const node = document.createElement("div");
      node.className = "win";
      node.setAttribute("aria-hidden", "true");
      node.innerHTML = `<span class="icon ${apps[win.app].icon}"></span><span class="label"></span>`;
      node.querySelector(".label").textContent = apps[win.app][lang];
      track.appendChild(node);
      win.node = node;
      return node;
    }

    // The tab bar of a column shown as tabs: one tab per window, the active one lit.
    function bar(c) {
      let node = bars.get(c);
      if (!node) {
        node = document.createElement("div");
        node.className = "tabbar";
        node.setAttribute("aria-hidden", "true");
        track.appendChild(node);
        bars.set(c, node);
      }
      node.innerHTML = c.wins.map((w, i) =>
        `<span class="tab${i === c.active ? " on" : ""}"><span class="icon ${apps[w.app].icon}"></span></span>`).join("");
      return node;
    }

    function layout() {
      const W = track.clientWidth;
      const H = track.clientHeight;
      const pad = W * 0.05;
      const gap = W * 0.022;
      const area = W - 2 * pad;
      const top = H * 0.2;
      const height = H * 0.56;
      const rowGap = H * 0.025;
      const barHeight = H * 0.09;
      const width = (c) => c.w * (area + gap) - gap;
      // A pinned column keeps its place at the left edge; the others scroll in the room to its right.
      const pin = columns.find((c) => c.pinned);
      const pinWidth = pin ? Math.min(width(pin), area / 2) : 0;
      const left = pad + (pin ? pinWidth + gap : 0);
      const room = W - pad - left;
      const xs = new Map();
      let x = 0;
      for (const c of columns) {
        if (c === pin) continue;
        xs.set(c, x);
        x += width(c) + gap;
      }
      const total = x - gap;
      const f = columns[focused];
      if (f !== pin) {
        const fx = xs.get(f), fw = width(f);
        if (centerNext) scroll = fx + fw / 2 - room / 2;
        else if (fw >= room || fx < scroll) scroll = fx;
        else if (fx + fw > scroll + room) scroll = fx + fw - room;
      }
      centerNext = false;
      scroll = Math.max(0, Math.min(scroll, Math.max(0, total - room)));
      for (const c of columns) {
        const w = c === pin ? pinWidth : width(c);
        let cx = c === pin ? pad : left + xs.get(c) - scroll;
        if (cx + w <= 0) cx = 3 - w;              // parked: a sliver at the left edge
        else if (cx >= W) cx = W - 3;             // parked: a sliver at the right edge
        const n = c.wins.length;
        c.wins.forEach((win, i) => {
          const h = c.tabs ? height - barHeight - rowGap : (height - (n - 1) * rowGap) / n;
          const y = c.tabs ? top + barHeight + rowGap : top + i * (h + rowGap);
          const node = win.node;
          node.style.width = `${w}px`;
          node.style.height = `${h}px`;
          node.style.top = `${y}px`;
          node.style.transform = `translateX(${cx}px)`;
          node.classList.toggle("focused", c === f && i === c.active);
          node.classList.toggle("behind", c.tabs && i !== c.active);
          node.classList.toggle("pinned", c === pin);
          node.classList.toggle("short", h < 72);
        });
        if (c.tabs) {
          const node = bar(c);
          node.style.width = `${w}px`;
          node.style.height = `${barHeight}px`;
          node.style.top = `${top}px`;
          node.style.transform = `translateX(${cx}px)`;
          node.classList.toggle("focused", c === f);
          node.classList.toggle("pinned", c === pin);
        }
      }
      for (const [c, node] of bars) {
        if (!c.tabs || !columns.includes(c)) {
          node.remove();
          bars.delete(c);
        }
      }
    }

    // Says which window has the focus, after the strip's name when the strip has just changed.
    function announce(withStrip = false) {
      const c = columns[focused];
      const app = apps[c.wins[c.active].app][lang];
      status.textContent = withStrip ? `${strips[level].name[lang]}: ${app}` : app;
    }

    // The nearest column in that direction that is not pinned (a pinned column does not take part).
    function neighbor(step) {
      let i = focused + step;
      while (columns[i] && columns[i].pinned) i += step;
      return columns[i] ? i : -1;
    }

    function removeColumn(c) {
      c.wins.forEach((w) => w.node.remove());
      columns.splice(columns.indexOf(c), 1);
    }

    const act = {
      left() { focused = Math.max(0, focused - 1); },
      right() { focused = Math.min(columns.length - 1, focused + 1); },
      up() { const c = columns[focused]; c.active = Math.max(0, c.active - 1); },
      down() { const c = columns[focused]; c.active = Math.min(c.wins.length - 1, c.active + 1); },
      first() { focused = 0; },
      last() { focused = columns.length - 1; },
      moveLeft() { this.move(-1); },
      moveRight() { this.move(1); },
      move(step) {
        const t = neighbor(step);
        if (columns[focused].pinned || t < 0) return;
        [columns[focused], columns[t]] = [columns[t], columns[focused]];
        focused = t;
      },
      width() {
        const c = columns[focused];
        c.w = presets.find((p) => p > c.w + 0.01) ?? presets[0];
        c.before = null;
      },
      full() {
        const c = columns[focused];
        if (c.before !== null) { c.w = c.before; c.before = null; } else { c.before = c.w; c.w = 1; }
      },
      center() { centerNext = true; },
      // Pins the focused column at the left edge, or lets it go; only one column is pinned at a time.
      pin() {
        const c = columns[focused];
        const pinning = !c.pinned;
        columns.forEach((o) => { o.pinned = false; });
        if (!pinning) return;
        c.pinned = true;
        columns.splice(focused, 1);
        columns.unshift(c);
        focused = 0;
      },
      // The focused window joins the end of the next column's stack; an emptied column goes away.
      stack(step = 1) {
        const c = columns[focused];
        const t = neighbor(step);
        if (c.pinned || t < 0) return;
        const target = columns[t];
        const [win] = c.wins.splice(c.active, 1);
        target.wins.push(win);
        target.active = target.wins.length - 1;
        if (c.wins.length === 0) columns.splice(focused, 1);
        else c.active = Math.min(c.active, c.wins.length - 1);
        focused = columns.indexOf(target);
      },
      stackLeft() { this.stack(-1); },
      // The focused window leaves its stack for a column of its own, beside it, as wide as the stack.
      pop(step = 1) {
        const c = columns[focused];
        if (c.pinned || c.wins.length < 2) return;
        const [win] = c.wins.splice(c.active, 1);
        c.active = Math.min(c.active, c.wins.length - 1);
        const at = step > 0 ? focused + 1 : focused;
        columns.splice(at, 0, column([win], c.w));
        focused = at;
      },
      popLeft() { this.pop(-1); },
      tabs() { const c = columns[focused]; c.tabs = !c.tabs; },
      new() {
        if (columns.length >= 7) {
          const far = columns[focused === columns.length - 1 ? (columns[0].pinned ? 1 : 0) : columns.length - 1];
          removeColumn(far);
          focused = Math.min(focused, columns.length - 1);
        }
        const win = { app: nextApp };
        nextApp = (nextApp + 1) % apps.length;
        columns.splice(focused + 1, 0, column([win], 0.5));
        const node = build(win);
        node.classList.add("entering");
        focused += 1;
        requestAnimationFrame(() => node.classList.remove("entering"));
      },
    };

    // Brings strip `next` into view. The strip that leaves keeps its focus and scroll, and only the windows of the one
    // in view are shown: the others are out of the page (display: none), so they come back in place, without sliding.
    function enter(next) {
      Object.assign(strips[level], { focused, scroll });
      level = next;
      ({ columns, focused, scroll } = strips[level]);
      for (const s of strips) {
        for (const c of s.columns) c.wins.forEach((w) => w.node.classList.toggle("away", s !== strips[level]));
      }
      layout();
    }

    // The strip above (1) or below (-1). The veil comes down from above on the way up and up from below on the way
    // down, the strips swap behind it while it covers the screen, and it goes on out the other side. With reduced
    // motion it fades in and out in place.
    function climb(step) {
      if (climbing) return;
      const next = level + step;
      if (!strips[next]) { announce(true); return; }
      climbing = true;
      const off = (side) => (reduceMotion ? { transform: "none", opacity: 0 }
        : { transform: `translateY(${side * 100}%)`, opacity: 1 });
      const over = { transform: "none", opacity: 1 };
      const time = reduceMotion ? 100 : 150;
      const cover = veil.animate([off(-step), over], { duration: time, easing: "ease-in", fill: "forwards" });
      cover.finished.then(() => {
        enter(next);
        announce(true);
        const uncover = veil.animate([over, off(step)], { duration: time, easing: "ease-out" });
        cover.cancel();                         // it held the veil over the screen until the second half took over
        uncover.finished.then(() => { climbing = false; });
      });
    }

    function run(name) {
      // The strip above and below go through the veil, which lays out and announces once it covers the screen.
      if (name === "above" || name === "below") {
        climb(name === "above" ? 1 : -1);
        return;
      }
      act[name]();
      layout();
      announce();
    }

    // A short automatic tour while the demo is on screen, until the visitor touches it.
    const tour = ["right", "right", "new", "width", "stack", "tabs", "tabs", "pop", "full", "full", "above", "right",
                  "below", "left", "left", "pin", "right", "right", "left", "left", "pin", "right", "moveLeft", "right",
                  "right", "center"];
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
      const toggle = e.target.closest("button[data-toggle]");
      if (toggle) {
        stopTour();
        const on = toggle.getAttribute("aria-pressed") !== "true";
        toggle.setAttribute("aria-pressed", String(on));
        if (toggle.dataset.toggle === "border") root.classList.toggle("no-border", !on);
        else root.classList.toggle("dim", on);
        return;
      }
      const button = e.target.closest("button[data-act]");
      if (!button) return;
      stopTour();
      run(button.dataset.act);
    });
    // The app's keys, without ⌃⌘ (the browser and macOS keep several ⌃⌘ combinations for themselves).
    const plainKeys = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", r: "width",
                        m: "full", c: "center", p: "pin", "]": "stack", "[": "stackLeft", n: "new", a: "first", e: "last" };
    const shiftKeys = { ArrowLeft: "moveLeft", ArrowRight: "moveRight", "]": "pop", "}": "pop", "[": "popLeft",
                        "{": "popLeft", t: "tabs" };
    // The strips keep their ⌥, as in ⌃⌥⌘↑ and ⌃⌥⌘↓, since plain ↑ and ↓ move within a stack. Other ⌥ keys do nothing.
    const optionKeys = { ArrowUp: "above", ArrowDown: "below" };
    root.addEventListener("keydown", (e) => {
      if (e.metaKey || e.ctrlKey || (e.altKey && (e.shiftKey || !optionKeys[e.key]))) return;
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      let name = (e.altKey ? optionKeys : e.shiftKey ? shiftKeys : plainKeys)[key];
      // Keyboards without keys of their own for [ and ]: the keys where a US keyboard has them.
      if (!name && e.code === "BracketRight") name = e.shiftKey ? "pop" : "stack";
      if (!name && e.code === "BracketLeft") name = e.shiftKey ? "popLeft" : "stackLeft";
      if (!name) return;
      e.preventDefault();
      stopTour();
      run(name);
    });
    root.addEventListener("pointerdown", stopTour);

    new IntersectionObserver((entries) => {
      for (const entry of entries) entry.isIntersecting ? play() : pause();
    }, { threshold: 0.4 }).observe(root);
    new ResizeObserver(() => layout()).observe(track);

    for (const s of strips) s.columns.forEach((c) => c.wins.forEach(build));
    track.style.setProperty("visibility", "hidden");
    enter(level);
    requestAnimationFrame(() => track.style.removeProperty("visibility"));

    return {
      relabel() {
        for (const c of strips.flatMap((s) => s.columns)) {
          for (const w of c.wins) w.node.querySelector(".label").textContent = apps[w.app][lang];
        }
      },
    };
  })();

  // The film: loaded and played only while it is on screen, in the page's language. With reduced motion it waits
  // for the visitor to press play.
  const film = (() => {
    const video = document.getElementById("film");
    const spanishPoster = video.getAttribute("poster");
    const spanishLabel = video.getAttribute("aria-label");
    let visible = false;
    function source() { return lang === "en" ? video.dataset.srcEn : video.dataset.srcEs; }
    function play() {
      if (!video.getAttribute("src")) video.src = source();
      if (!reduceMotion) video.play().catch(() => { /* autoplay refused: the poster stays */ });
    }
    if (reduceMotion) video.controls = true;
    new IntersectionObserver((entries) => {
      for (const entry of entries) {
        visible = entry.isIntersecting;
        visible ? play() : video.pause();
      }
    }, { threshold: 0.35 }).observe(video);
    return {
      setLang(next) {
        video.poster = next === "en" ? video.dataset.posterEn : spanishPoster;
        video.setAttribute("aria-label", next === "en" ? english["film.label"] : spanishLabel);
        if (!video.getAttribute("src")) return;
        video.src = source();
        if (visible) play();
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
