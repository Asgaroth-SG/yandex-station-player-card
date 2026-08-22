var Y = Object.defineProperty;
var q = (s, o, t) => o in s ? Y(s, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[o] = t;
var l = (s, o, t) => q(s, typeof o != "symbol" ? o + "" : o, t);
const d = {
  primary: "#00685d",
  accent: "#26a69a",
  text: "#0f1e1c",
  secondary: "#3d4946",
  surface: "#ffffff",
  background: "rgba(255,255,255,.72)",
  on_primary: "#ffffff",
  border: "rgba(0,137,123,.15)",
  shadow: "0 2px 8px rgba(0,137,123,.08)"
}, B = `
:host { display:block; font-family: var(--ysp-body-font, Work Sans, system-ui, sans-serif); color:var(--ysp-text); }
* { box-sizing:border-box; }
.ysp-card { position:relative; overflow:hidden; padding:16px; border-radius:16px; background:var(--ysp-background, var(--ha-card-background, #fff)); border:1px solid var(--ysp-border); box-shadow:var(--ysp-shadow); backdrop-filter:blur(var(--ysp-blur)); -webkit-backdrop-filter:blur(var(--ysp-blur)); }
.ysp-card::before { content:""; position:absolute; inset:0; pointer-events:none; background:linear-gradient(135deg, rgba(255,255,255,.24), transparent 48%); }
.ysp-content { position:relative; display:flex; flex-direction:column; gap:16px; }
.ysp-header, .ysp-track, .ysp-track-info, .ysp-controls, .ysp-volume, .ysp-progress, .ysp-command-row, .ysp-preset-row { display:flex; align-items:center; }
.ysp-header { justify-content:flex-start; gap:12px; min-width:0; }
.ysp-name, .ysp-title, .ysp-artist { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.ysp-name { font-size:14px; line-height:18px; font-weight:600; color:var(--ysp-secondary); }
.ysp-chip, .ysp-command, .ysp-preset { display:inline-flex; align-items:center; justify-content:center; text-align:center; vertical-align:middle; border:0; cursor:pointer; font:inherit; }
.ysp-chip, .ysp-command, .ysp-preset { gap:6px; }
.ysp-chip:hover, .ysp-command:hover, .ysp-preset:hover { filter:brightness(.97); }
.ysp-track { gap:16px; min-width:0; }
.ysp-art { width:var(--ysp-art-size); height:var(--ysp-art-size); flex:0 0 var(--ysp-art-size); object-fit:cover; border-radius:12px; background:var(--ysp-surface); box-shadow:0 2px 6px rgba(0,0,0,.08); }
.ysp-art-placeholder { display:grid; place-items:center; color:var(--ysp-primary); font-size:30px; }
.ysp-art-icon { width:32px; height:32px; --mdc-icon-size:32px; }
.ysp-track-info { min-width:0; flex:1; flex-direction:column; align-items:flex-start; gap:4px; }
.ysp-title { max-width:100%; font:600 20px/28px Manrope, system-ui, sans-serif; }
.ysp-artist { max-width:100%; color:var(--ysp-secondary); font-size:14px; line-height:20px; }
.ysp-controls { justify-content:var(--ysp-controls-position); gap:24px; padding:4px 0; }
.ysp-button { display:inline-flex; align-items:center; justify-content:center; text-align:center; padding:0; line-height:0; width:48px; height:48px; border:0; border-radius:999px; cursor:pointer; color:var(--ysp-primary); background:var(--ysp-surface); font:400 24px/1 system-ui; transition:transform .12s ease, filter .12s ease; }
.ysp-button:hover { filter:brightness(.97); } .ysp-button:active { transform:scale(.95); }
.ysp-button:focus-visible, .ysp-chip:focus-visible, .ysp-command:focus-visible, .ysp-preset:focus-visible, input:focus-visible { outline:2px solid var(--ysp-accent); outline-offset:2px; }
.ysp-button.primary { width:64px; height:64px; color:var(--ysp-on-primary); background:var(--ysp-primary); box-shadow:0 3px 8px rgba(0,105,93,.22); font-size:30px; }
.ysp-control-icon { width:22px; height:22px; --mdc-icon-size:22px; }
.ysp-button.primary .ysp-control-icon { width:28px; height:28px; --mdc-icon-size:28px; }
.ysp-volume { gap:8px; width:100%; color:var(--ysp-secondary); }
.ysp-volume-icon { display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; flex:0 0 20px; }
.ysp-volume-glyph { width:18px; height:18px; --mdc-icon-size:18px; }
.ysp-range { min-width:0; flex:1; height:8px; accent-color:var(--ysp-primary); cursor:pointer; }
.ysp-progress { gap:8px; width:100%; color:var(--ysp-secondary); font-size:11px; align-items:center; }
.ysp-progress .ysp-seek { min-width:0; flex:1; height:8px; margin:0; accent-color:var(--ysp-primary); cursor:pointer; border-radius:999px; background:linear-gradient(to right, var(--ysp-primary) 0 var(--ysp-seek-pct), var(--ysp-surface) var(--ysp-seek-pct) 100%); }
.ysp-progress .ysp-volume-side { position:relative; display:inline-flex; align-items:center; justify-content:center; flex:0 0 auto; padding:2px 6px; }
.ysp-progress .ysp-volume-side::after { content:""; position:absolute; left:0; right:0; bottom:100%; height:10px; }
.ysp-progress .ysp-volume-icon-button { display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; flex:0 0 28px; padding:0; border:0; border-radius:999px; background:transparent; color:var(--ysp-primary); cursor:pointer; transition:background .12s ease, color .12s ease, transform .12s ease; }
.ysp-progress .ysp-volume-icon-button:hover, .ysp-progress .ysp-volume-icon-button:focus-visible { background:var(--ysp-surface); }
.ysp-progress .ysp-volume-icon-button:active { transform:scale(.92); }
.ysp-progress .ysp-volume-glyph { width:18px; height:18px; --mdc-icon-size:18px; }
.ysp-progress .ysp-volume-popover { position:absolute; bottom:calc(100% + 6px); left:50%; transform:translate(-50%, 6px); display:flex; align-items:center; justify-content:center; padding:14px 10px; border-radius:12px; background:var(--ysp-background, var(--ha-card-background, #fff)); border:1px solid var(--ysp-border); box-shadow:var(--ysp-shadow); opacity:0; pointer-events:none; transition:opacity .14s ease, transform .14s ease; }
.ysp-progress .ysp-volume-side:hover .ysp-volume-popover, .ysp-progress .ysp-volume-side:focus-within .ysp-volume-popover, .ysp-progress .ysp-volume-side:has(.ysp-volume-vertical:active) .ysp-volume-popover, .ysp-progress .ysp-volume-popover:hover, .ysp-progress .ysp-volume-popover:focus-within, .ysp-card.ysp-volume-interacting .ysp-volume-popover { opacity:1; pointer-events:auto; transform:translate(-50%, 0); }
.ysp-volume-vertical { align-self:center; width:32px; height:80px; margin:0; padding:0; border:0; background:linear-gradient(to top, var(--ysp-primary) 0 var(--ysp-volume-pct, 0%), var(--ysp-surface) var(--ysp-volume-pct, 0%)) center / 8px 100% no-repeat; border-radius:999px; cursor:pointer; writing-mode:vertical-lr; direction:rtl; -webkit-appearance:none; appearance:none; transition:filter .18s ease, transform .18s ease; }
.ysp-volume-vertical { touch-action:none; }
.ysp-volume-vertical:hover { filter:brightness(1.08); }
.ysp-volume-vertical:active { transform:scaleX(1.08); }
.ysp-volume-vertical::-webkit-slider-runnable-track { width:8px; height:80px; border:0; border-radius:999px; background:transparent; }
.ysp-volume-vertical::-moz-range-track { width:8px; height:80px; border:0; border-radius:999px; background:transparent; }
.ysp-volume-vertical::-webkit-slider-thumb { -webkit-appearance:none; appearance:none; width:0; height:0; border:0; background:transparent; }
.ysp-volume-vertical::-moz-range-thumb { width:0; height:0; border:0; background:transparent; }

.ysp-command-row, .ysp-preset-row { gap:8px; flex-wrap:wrap; }
.ysp-chip, .ysp-command, .ysp-preset { min-height:32px; padding:8px 12px; border-radius:999px; background:var(--ysp-surface); color:var(--ysp-primary); font-size:12px; font-weight:600; line-height:1; }
.ysp-icon { display:inline-flex; align-items:center; justify-content:center; vertical-align:middle; flex:0 0 auto; line-height:0; }
.ysp-action-icon { display:inline-flex; align-items:center; justify-content:center; width:16px; height:16px; flex:0 0 16px; color:currentColor; --mdc-icon-size:16px; }
.ysp-device-icon { display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; flex:0 0 20px; color:var(--ysp-primary); --mdc-icon-size:20px; }
.ysp-chip-icon { width:18px; height:18px; --mdc-icon-size:18px; }
.ysp-label { margin:0 0 8px; color:var(--ysp-secondary); font-size:12px; font-weight:600; }
.ysp-section { position:relative; }
.ysp-vertical .ysp-track { flex-direction:column; align-items:stretch; text-align:var(--ysp-align); }
.ysp-vertical .ysp-track-info { align-items:var(--ysp-align-items); }
.ysp-art-right .ysp-art { order:2; }
.ysp-art-top .ysp-track { flex-direction:column; align-items:stretch; }
.ysp-art-top .ysp-track-info { align-items:var(--ysp-align-items); text-align:var(--ysp-align); }
@media (max-width:420px) { .ysp-controls { gap:12px; } .ysp-button.primary { width:56px; height:56px; } .ysp-progress .ysp-volume-side .ysp-range { width:60px; flex:0 0 60px; } }
`;
function h(s, o, t, e) {
  const i = typeof s == "number" ? s : Number(s);
  return Number.isFinite(i) ? Math.min(t, Math.max(o, i)) : e;
}
function y(s, o) {
  return /[<>`{};"']/.test(s) ? o : s;
}
function p(s) {
  return s.replace(/[&<>"']/g, (o) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[o] ?? o);
}
function a(s, o = "") {
  return typeof s == "string" || typeof s == "number" ? String(s) : o;
}
function u(s, o = "ysp-action-icon") {
  const t = s.trim(), e = /^(mdi|hass|yandex):[a-z0-9-]+$/i.test(t) ? t : "mdi:help-circle-outline";
  return `<ha-icon class="ysp-icon ${p(o)}" icon="${p(e)}" aria-hidden="true"></ha-icon>`;
}
function R(s) {
  return u(s);
}
function g(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const o = Math.floor(s / 60), t = Math.floor(s % 60).toString().padStart(2, "0");
  return `${o}:${t}`;
}
function W(s, o, t) {
  const e = Math.max(0, Number(s.media_position) || 0);
  if (o !== "playing" || t <= 0) return Math.min(e, t);
  const i = a(s.media_position_updated_at), r = Date.parse(i);
  return Number.isFinite(r) ? Math.min(t, e + Math.max(0, (Date.now() - r) / 1e3)) : Math.min(e, t);
}
class X extends HTMLElement {
  constructor() {
    super();
    l(this, "_config");
    l(this, "_hass");
    l(this, "_root");
    l(this, "_boundClick");
    l(this, "_boundInput");
    l(this, "_boundPointerDown");
    l(this, "_boundPointerMove");
    l(this, "_boundPointerUp");
    l(this, "_volumeInteracting", !1);
    this._root = this.attachShadow({ mode: "open" }), this._boundClick = (t) => this.handleClick(t), this._boundInput = (t) => this.handleInput(t), this._boundPointerDown = (t) => this.handleVolumePointerDown(t), this._boundPointerMove = (t) => this.handleVolumePointerMove(t), this._boundPointerUp = () => this.handleVolumePointerUp();
  }
  setConfig(t) {
    if (!t || typeof t.entity != "string" || !t.entity.includes("."))
      throw new Error("Yandex Station Player: укажите точный entity, например media_player.yandex_station_...");
    if (!t.entity.startsWith("media_player."))
      throw new Error("Yandex Station Player: entity должен принадлежать домену media_player.");
    this._config = { ...t }, this.render();
  }
  set hass(t) {
    this._hass = t, this.render();
  }
  getCardSize() {
    return 5;
  }
  connectedCallback() {
    this._root.addEventListener("click", this._boundClick), this._root.addEventListener("input", this._boundInput), this._root.addEventListener("pointerdown", this._boundPointerDown), this._root.addEventListener("pointermove", this._boundPointerMove), this._root.addEventListener("pointerup", this._boundPointerUp), this._root.addEventListener("pointercancel", this._boundPointerUp);
  }
  disconnectedCallback() {
    this._root.removeEventListener("click", this._boundClick), this._root.removeEventListener("input", this._boundInput), this._root.removeEventListener("pointerdown", this._boundPointerDown), this._root.removeEventListener("pointermove", this._boundPointerMove), this._root.removeEventListener("pointerup", this._boundPointerUp), this._root.removeEventListener("pointercancel", this._boundPointerUp);
  }
  config() {
    return this._config ?? { type: "custom:yandex-station-player", entity: "" };
  }
  mediaState() {
    var t;
    return (t = this._hass) == null ? void 0 : t.states[this.config().entity];
  }
  mergedTheme() {
    const t = this.config().theme ?? {};
    return { ...d, ...t };
  }
  normalizedPresets() {
    return (Array.isArray(this.config().presets) ? this.config().presets ?? [] : []).filter((e) => !e || typeof e.name != "string" ? !1 : typeof e.command == "string" || typeof e.media_content_id == "string").map((e) => ({ ...e, icon: typeof e.icon == "string" ? e.icon : "mdi:music-note" }));
  }
  normalizedCommands() {
    return (Array.isArray(this.config().quick_commands) ? this.config().quick_commands ?? [] : []).filter((e) => !!(e && typeof e.name == "string" && typeof e.command == "string"));
  }
  render() {
    if (!this._config) return;
    const t = this.config(), e = this.mediaState(), i = (e == null ? void 0 : e.attributes) ?? {}, r = this.mergedTheme(), n = h(i.volume_level, 0, 1, 0.5), c = Math.max(0, Number(i.media_duration) || 0), m = W(i, e == null ? void 0 : e.state, c), I = c > 0 ? Math.round(m / c * 1e3) / 10 : 0, w = a(i.media_title, e ? "Ничего не играет" : "Ожидание данных"), k = a(i.media_artist || i.media_album_name, (e == null ? void 0 : e.state) === "unavailable" ? "Устройство недоступно" : "Яндекс.Станция"), $ = a(i.entity_picture), L = h(t.artwork_size, 48, 220, 80), C = h(t.opacity, 0.1, 1, 0.72), N = h(t.blur, 0, 40, 18), b = t.content_align === "center" ? "center" : t.content_align === "right" ? "right" : "left", S = b === "center" ? "center" : b === "right" ? "flex-end" : "flex-start", T = t.controls_position === "left" ? "flex-start" : t.controls_position === "right" ? "flex-end" : "center", j = t.layout === "vertical" ? "ysp-vertical" : "", A = t.artwork_position === "right" ? "ysp-art-right" : t.artwork_position === "top" ? "ysp-art-top" : "", D = "", V = (e == null ? void 0 : e.state) === "unavailable" || !e, x = (e == null ? void 0 : e.state) === "playing", f = i.is_volume_muted === !0 || n === 0, P = f ? "mdi:volume-off" : "mdi:volume-high", F = f ? "mdi:volume-high" : "mdi:volume-mute", M = this.normalizedPresets(), z = this.normalizedCommands(), H = `
      ${B}
      :host { --ysp-primary:${y(a(r.primary), d.primary)}; --ysp-accent:${y(a(r.accent), d.accent)}; --ysp-text:${y(a(r.text), d.text)}; --ysp-secondary:${y(a(r.secondary), d.secondary)}; --ysp-surface:${y(a(r.surface), d.surface)}; --ysp-background:${y(a(r.background), d.background)}; --ysp-on-primary:${y(a(r.on_primary), d.on_primary)}; --ysp-border:${y(a(r.border), d.border)}; --ysp-shadow:${y(a(r.shadow), d.shadow)}; --ysp-art-size:${L}px; --ysp-blur:${N}px; --ysp-controls-position:${T}; --ysp-align:${b}; --ysp-align-items:${S}; }
      .ysp-card { opacity:${C}; }
    `, U = t.show_artwork === !1 ? "" : $ ? `<img class="ysp-art" src="${p($)}" alt="Обложка текущего трека">` : `<div class="ysp-art ysp-art-placeholder" aria-label="Нет обложки">${u("mdi:music-note", "ysp-art-icon")}</div>`;
    this._root.innerHTML = `
      <style>${H}</style>
      <article class="ysp-card ${j} ${A} ${D} ${this._volumeInteracting ? "ysp-volume-interacting" : ""}" aria-label="${p(t.name ?? "Яндекс.Станция")}" data-unavailable="${V}">
        <div class="ysp-content">
          ${t.show_header !== !1 ? `<header class="ysp-header">${u(t.icon ?? "mdi:speaker-wireless", "ysp-device-icon")}<span class="ysp-name">${p(t.name ?? "Яндекс.Станция")}</span></header>` : ""}
          <section class="ysp-track">${U}<div class="ysp-track-info"><div class="ysp-title" title="${p(w)}">${p(w)}</div><div class="ysp-artist" title="${p(k)}">${p(k)}</div></div></section>
          ${t.show_progress !== !1 && c > 0 ? `<section class="ysp-progress" aria-label="Перемотка и громкость"><span>${g(m)}</span><input class="ysp-seek-range ysp-seek" type="range" min="0" max="${c}" step="1" value="${m}" style="--ysp-seek-pct:${I}%" data-action="seek" aria-label="Перемотка аудио" aria-valuetext="${g(m)} из ${g(c)}">${t.show_volume !== !1 ? `<span class="ysp-volume-side"><button class="ysp-volume-icon-button" type="button" data-action="mute" aria-label="${f ? "Включить звук" : "Выключить звук"}" aria-haspopup="true">${u(P, "ysp-volume-glyph")}</button><span class="ysp-volume-popover" role="dialog" aria-label="Громкость"><input class="ysp-volume-vertical" type="range" min="0" max="1" step="0.01" value="${n}" data-action="volume" aria-label="Громкость" aria-valuetext="${Math.round(n * 100)} процентов" style="--ysp-volume-pct:${Math.round(n * 100)}%"></span></span>` : ""}<span>${g(c)}</span></section>` : ""}
          ${t.show_controls !== !1 ? `<section class="ysp-controls" aria-label="Управление воспроизведением"><button class="ysp-button" type="button" data-action="previous" aria-label="Предыдущий трек">${u("mdi:skip-previous", "ysp-control-icon")}</button><button class="ysp-button primary" type="button" data-action="${x ? "pause" : "play"}" aria-label="${x ? "Пауза" : "Воспроизвести"}">${u(x ? "mdi:pause" : "mdi:play", "ysp-control-icon")}</button><button class="ysp-button" type="button" data-action="next" aria-label="Следующий трек">${u("mdi:skip-next", "ysp-control-icon")}</button></section>` : ""}
          ${t.show_volume !== !1 && (t.show_progress === !1 || c <= 0) ? `<section class="ysp-volume" aria-label="Громкость"><span class="ysp-volume-icon">${u(P, "ysp-volume-glyph")}</span><input class="ysp-range" type="range" min="0" max="1" step="0.01" value="${n}" data-action="volume" aria-label="Громкость"><button class="ysp-chip ysp-mute-button" type="button" data-action="mute" aria-label="${f ? "Включить звук" : "Выключить звук"}">${u(F, "ysp-chip-icon")}</button></section>` : ""}
          ${t.show_presets !== !1 && M.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Избранное</p><div class="ysp-preset-row">${M.map((v, _) => `<button class="ysp-preset" type="button" data-action="preset" data-index="${_}">${R(v.icon)}<span>${p(v.name)}</span></button>`).join("")}</div></section>` : ""}
          ${t.show_quick_commands !== !1 && z.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Быстрые команды</p><div class="ysp-command-row">${z.map((v, _) => `<button class="ysp-command" type="button" data-action="command" data-index="${_}">${u(v.icon ?? "mdi:gesture-tap-button")}<span>${p(v.name)}</span></button>`).join("")}</div></section>` : ""}
        </div>
      </article>
    `;
  }
  call(t, e = {}) {
    !this._hass || !this._config || this._hass.callService("media_player", t, { entity_id: this._config.entity, ...e });
  }
  handleClick(t) {
    var r;
    const e = t.target instanceof Element ? t.target.closest("[data-action]") : null;
    if (!e) return;
    const i = e.dataset.action;
    if (i === "volume" && e instanceof HTMLInputElement && t instanceof MouseEvent) {
      const n = e.getBoundingClientRect(), c = n.height > 0 ? (n.bottom - t.clientY) / n.height : 0, m = h(c, 0, 1, 0);
      e.value = m.toFixed(2), this.handleInput({ target: e });
      return;
    }
    if (i === "play" && this.call("media_play"), i === "pause" && this.call("media_pause"), i === "previous" && this.call("media_previous_track"), i === "next" && this.call("media_next_track"), i === "mute") {
      const n = ((r = this.mediaState()) == null ? void 0 : r.attributes) ?? {};
      this.call("volume_mute", { is_volume_muted: n.is_volume_muted !== !0 });
    }
    if (i === "command") {
      const n = this.normalizedCommands()[Number(e.dataset.index)];
      n && this.call("play_media", { media_content_id: n.command, media_content_type: "command" });
    }
    if (i === "preset") {
      const n = this.normalizedPresets()[Number(e.dataset.index)];
      if (!n) return;
      this.call("play_media", {
        media_content_id: n.command ?? n.media_content_id,
        media_content_type: n.command ? "command" : n.media_content_type ?? "music"
      });
    }
  }
  handleInput(t) {
    const e = t.target instanceof HTMLInputElement ? t.target : null;
    e && (e.dataset.action === "volume" && (this.call("volume_set", { volume_level: Number(e.value) }), e.setAttribute("aria-valuetext", `${Math.round(Number(e.value) * 100)} процентов`), e.style.setProperty("--ysp-volume-pct", `${Math.round(Number(e.value) * 100)}%`), e.setAttribute("title", `${Math.round(Number(e.value) * 100)}%`)), e.dataset.action === "seek" && (this.call("media_seek", { seek_position: Number(e.value) }), e.setAttribute("aria-valuetext", `${g(Number(e.value))} из ${g(Number(e.max))}`), e.style.setProperty("--ysp-seek-pct", `${Number(e.max) > 0 ? Number(e.value) / Number(e.max) * 100 : 0}%`)));
  }
  handleVolumePointerDown(t) {
    var e;
    t.target instanceof HTMLInputElement && t.target.dataset.action === "volume" && (this._volumeInteracting = !0, (e = this._root.querySelector(".ysp-card")) == null || e.classList.add("ysp-volume-interacting"), t.target.setPointerCapture(t.pointerId), this.setVolumeFromPointer(t.target, t));
  }
  handleVolumePointerMove(t) {
    !this._volumeInteracting || !(t.target instanceof HTMLInputElement) || t.target.dataset.action !== "volume" || this.setVolumeFromPointer(t.target, t);
  }
  setVolumeFromPointer(t, e) {
    const i = t.getBoundingClientRect(), r = h(i.height > 0 ? (i.bottom - e.clientY) / i.height : 0, 0, 1, 0);
    t.value = r.toFixed(2), this.handleInput({ target: t });
  }
  handleVolumePointerUp() {
    var t;
    this._volumeInteracting = !1, (t = this._root.querySelector(".ysp-card")) == null || t.classList.remove("ysp-volume-interacting");
  }
}
customElements.get("yandex-station-player") || customElements.define("yandex-station-player", X);
const E = window.customCards ?? (window.customCards = []);
E.some((s) => s.type === "yandex-station-player") || E.push({
  type: "yandex-station-player",
  name: "Yandex Station Player",
  description: "Mint Teal media player for Yandex.Station media_player entities",
  preview: !0
});
