var X = Object.defineProperty;
var J = (o, n, e) => n in o ? X(o, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[n] = e;
var i = (o, n, e) => J(o, typeof n != "symbol" ? n + "" : n, e);
const c = {
  primary: "#00685d",
  accent: "#26a69a",
  text: "#0f1e1c",
  secondary: "#3d4946",
  surface: "#ffffff",
  background: "rgba(255,255,255,.72)",
  on_primary: "#ffffff",
  border: "rgba(0,137,123,.15)",
  shadow: "0 2px 8px rgba(0,137,123,.08)"
}, G = `
:host { display:block; font-family: var(--ysp-body-font, Work Sans, system-ui, sans-serif); color:var(--ysp-text); }
* { box-sizing:border-box; }
.ysp-card { position:relative; overflow:hidden; padding:16px; border-radius:16px; background:var(--ysp-background, var(--ha-card-background, #fff)); border:1px solid var(--ysp-border); box-shadow:var(--ysp-shadow); backdrop-filter:blur(var(--ysp-blur)); -webkit-backdrop-filter:blur(var(--ysp-blur)); }
.ysp-card::before { content:""; position:absolute; inset:0; pointer-events:none; background:linear-gradient(135deg, rgba(255,255,255,.24), transparent 48%); }
.ysp-content { position:relative; display:flex; flex-direction:column; gap:16px; }
.ysp-header, .ysp-track, .ysp-track-info, .ysp-controls, .ysp-volume, .ysp-progress, .ysp-command-row, .ysp-preset-row { display:flex; align-items:center; }
.ysp-header { display:grid; grid-template-columns:minmax(0, 1fr) auto minmax(0, 1fr); gap:12px; min-width:0; min-height:20px; }
.ysp-header-slot { display:flex; align-items:center; min-width:0; gap:12px; }
.ysp-header-slot.ysp-slot-left { justify-content:flex-start; }
.ysp-header-slot.ysp-slot-center { justify-content:center; }
.ysp-header-slot.ysp-slot-right { justify-content:flex-end; }
.ysp-header .ysp-name { min-width:0; }
.ysp-header .ysp-slot-left .ysp-name { text-align:left; }
.ysp-header .ysp-slot-center .ysp-name { text-align:center; }
.ysp-header .ysp-slot-right .ysp-name { text-align:right; }
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
.ysp-progress .ysp-volume-side::after { content:""; position:absolute; left:-8px; right:-8px; bottom:100%; height:14px; z-index:1; }
.ysp-progress .ysp-volume-side.ysp-volume-open::before { content:""; position:absolute; left:-14px; right:-14px; bottom:-10px; top:-104px; z-index:1; }
.ysp-progress .ysp-volume-icon-button { display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; flex:0 0 28px; padding:0; border:0; border-radius:999px; background:transparent; color:var(--ysp-primary); cursor:pointer; transition:background .12s ease, color .12s ease, transform .12s ease; }
.ysp-progress .ysp-volume-icon-button:hover, .ysp-progress .ysp-volume-icon-button:focus-visible { background:var(--ysp-surface); }
.ysp-progress .ysp-volume-icon-button:active { transform:scale(.92); }
.ysp-progress .ysp-volume-glyph { width:18px; height:18px; --mdc-icon-size:18px; }
.ysp-progress .ysp-volume-popover { position:absolute; bottom:calc(100% + 6px); left:50%; transform:translateX(-50%); display:flex; align-items:center; justify-content:center; padding:14px 12px; border-radius:12px; background:var(--ysp-background, var(--ha-card-background, #fff)); border:1px solid var(--ysp-border); box-shadow:var(--ysp-shadow); opacity:0; pointer-events:none; transition:opacity .14s ease; z-index:2; }
.ysp-progress .ysp-volume-side.ysp-volume-open .ysp-volume-popover, .ysp-progress .ysp-volume-side:focus-within .ysp-volume-popover, .ysp-card.ysp-volume-interacting .ysp-volume-popover { opacity:1; pointer-events:auto; }
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
.ysp-art-bg { position:absolute; inset:0; background-size:cover; background-position:center; filter:blur(24px) brightness(0.85); transform:scale(1.1); z-index:0; pointer-events:none; }
.ysp-art-bg::after { content:""; position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,30,28,.65) 0%, rgba(15,30,28,.35) 25%, rgba(15,30,28,.55) 75%, rgba(15,30,28,.85) 100%); }
.ysp-card.ysp-art-background .ysp-content > :not(.ysp-art-bg) { position:relative; z-index:1; }
.ysp-card.ysp-art-background { color:#fff; }
.ysp-card.ysp-art-background .ysp-name, .ysp-card.ysp-art-background .ysp-artist, .ysp-card.ysp-art-background .ysp-progress, .ysp-card.ysp-art-background .ysp-label { color:rgba(255,255,255,.82); }
.ysp-card.ysp-art-background .ysp-title { color:#fff; }
.ysp-card.ysp-art-background .ysp-button { background:rgba(255,255,255,.18); color:#fff; }
.ysp-card.ysp-art-background .ysp-button.primary { background:var(--ysp-primary); color:var(--ysp-on-primary); }
.ysp-card.ysp-art-background .ysp-content { position:relative; z-index:1; }
.ysp-card.ysp-art-background .ysp-content { width:var(--ysp-content-size); margin-inline:auto; }
.ysp-card.ysp-art-background .ysp-header, .ysp-card.ysp-art-background .ysp-track, .ysp-card.ysp-art-background .ysp-controls { justify-content:var(--ysp-content-justify); }
.ysp-card.ysp-art-background .ysp-track { text-align:var(--ysp-align); }
.ysp-card.ysp-art-background .ysp-track-info { align-items:var(--ysp-align-items); text-align:var(--ysp-align); }
.ysp-card.ysp-art-background .ysp-art { display:none; }
.ysp-card.ysp-art-background .ysp-progress .ysp-seek { background:linear-gradient(to right, var(--ysp-primary) 0 var(--ysp-seek-pct), rgba(255,255,255,.25) var(--ysp-seek-pct) 100%); }
.ysp-card.ysp-art-background .ysp-chip, .ysp-card.ysp-art-background .ysp-command, .ysp-card.ysp-art-background .ysp-preset { background:rgba(255,255,255,.12); color:#fff; border:1px solid rgba(255,255,255,.18); }
.ysp-card.ysp-art-background .ysp-chip:hover, .ysp-card.ysp-art-background .ysp-command:hover, .ysp-card.ysp-art-background .ysp-preset:hover { background:rgba(255,255,255,.2); }
.ysp-card.ysp-art-background .ysp-volume-popover { background:rgba(15,30,28,.92); border-color:rgba(255,255,255,.15); }
.ysp-card.ysp-art-background .ysp-volume-vertical { background:linear-gradient(to top, var(--ysp-primary) 0 var(--ysp-volume-pct, 0%), rgba(255,255,255,.25) var(--ysp-volume-pct, 0%)) center / 8px 100% no-repeat; }
@media (max-width:420px) { .ysp-controls { gap:12px; } .ysp-button.primary { width:56px; height:56px; } .ysp-progress .ysp-volume-side .ysp-range { width:60px; flex:0 0 60px; } }
`;
function y(o, n, e, t) {
  const s = typeof o == "number" ? o : Number(o);
  return Number.isFinite(s) ? Math.min(e, Math.max(n, s)) : t;
}
function m(o, n) {
  return /[<>`{};"']/.test(o) ? n : o;
}
function l(o) {
  return o.replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n] ?? n);
}
function p(o, n = "") {
  return typeof o == "string" || typeof o == "number" ? String(o) : n;
}
function d(o, n = "ysp-action-icon") {
  const e = o.trim(), t = /^(mdi|hass|yandex):[a-z0-9-]+$/i.test(e) ? e : "mdi:help-circle-outline";
  return `<ha-icon class="ysp-icon ${l(n)}" icon="${l(t)}" aria-hidden="true"></ha-icon>`;
}
function K(o) {
  return d(o);
}
function g(o) {
  if (!Number.isFinite(o) || o < 0) return "0:00";
  const n = Math.floor(o / 60), e = Math.floor(o % 60).toString().padStart(2, "0");
  return `${n}:${e}`;
}
function Q(o, n, e) {
  const t = Math.max(0, Number(o.media_position) || 0);
  if (n !== "playing" || e <= 0) return Math.min(t, e);
  const s = p(o.media_position_updated_at), r = Date.parse(s);
  return Number.isFinite(r) ? Math.min(e, t + Math.max(0, (Date.now() - r) / 1e3)) : Math.min(t, e);
}
class Z extends HTMLElement {
  constructor() {
    super();
    i(this, "_config");
    i(this, "_hass");
    i(this, "_root");
    i(this, "_boundClick");
    i(this, "_boundInput");
    i(this, "_boundPointerDown");
    i(this, "_boundPointerMove");
    i(this, "_boundPointerUp");
    i(this, "_volumeInteracting", !1);
    i(this, "_volumeOpen", !1);
    i(this, "_volumeCloseTimer", null);
    i(this, "_boundPointerOver");
    i(this, "_boundPointerOut");
    i(this, "_pendingRender", !1);
    i(this, "_localVolume", null);
    i(this, "_volumeSendTimer", null);
    i(this, "_volumeToSend", null);
    this._root = this.attachShadow({ mode: "open" }), this._boundClick = (e) => this.handleClick(e), this._boundInput = (e) => this.handleInput(e), this._boundPointerDown = (e) => this.handleVolumePointerDown(e), this._boundPointerMove = (e) => this.handleVolumePointerMove(e), this._boundPointerUp = () => this.handleVolumePointerUp(), this._boundPointerOver = (e) => this.handleVolumePointerOver(e), this._boundPointerOut = (e) => this.handleVolumePointerOut(e);
  }
  setConfig(e) {
    if (!e || typeof e.entity != "string" || !e.entity.includes("."))
      throw new Error("Yandex Station Player: укажите точный entity, например media_player.yandex_station_...");
    if (!e.entity.startsWith("media_player."))
      throw new Error("Yandex Station Player: entity должен принадлежать домену media_player.");
    this._config = { ...e }, this.render();
  }
  set hass(e) {
    var t;
    if (this._hass = e, this._localVolume !== null) {
      const s = y((t = this.mediaState()) == null ? void 0 : t.attributes.volume_level, 0, 1, this._localVolume);
      Math.abs(s - this._localVolume) < 0.03 && (this._localVolume = null);
    }
    this.render();
  }
  getCardSize() {
    return 5;
  }
  connectedCallback() {
    this._root.addEventListener("click", this._boundClick), this._root.addEventListener("input", this._boundInput), this._root.addEventListener("pointerdown", this._boundPointerDown), this._root.addEventListener("pointermove", this._boundPointerMove), this._root.addEventListener("pointerup", this._boundPointerUp), this._root.addEventListener("pointercancel", this._boundPointerUp), this._root.addEventListener("pointerover", this._boundPointerOver), this._root.addEventListener("pointerout", this._boundPointerOut), window.addEventListener("pointerup", this._boundPointerUp), window.addEventListener("pointercancel", this._boundPointerUp);
  }
  disconnectedCallback() {
    this._root.removeEventListener("click", this._boundClick), this._root.removeEventListener("input", this._boundInput), this._root.removeEventListener("pointerdown", this._boundPointerDown), this._root.removeEventListener("pointermove", this._boundPointerMove), this._root.removeEventListener("pointerup", this._boundPointerUp), this._root.removeEventListener("pointercancel", this._boundPointerUp), this._root.removeEventListener("pointerover", this._boundPointerOver), this._root.removeEventListener("pointerout", this._boundPointerOut), window.removeEventListener("pointerup", this._boundPointerUp), window.removeEventListener("pointercancel", this._boundPointerUp), this._volumeCloseTimer !== null && (clearTimeout(this._volumeCloseTimer), this._volumeCloseTimer = null);
  }
  config() {
    return this._config ?? { type: "custom:yandex-station-player", entity: "" };
  }
  mediaState() {
    var e;
    return (e = this._hass) == null ? void 0 : e.states[this.config().entity];
  }
  mergedTheme() {
    const e = this.config().theme ?? {};
    return { ...c, ...e };
  }
  normalizedPresets() {
    return (Array.isArray(this.config().presets) ? this.config().presets ?? [] : []).filter((t) => !t || typeof t.name != "string" ? !1 : typeof t.command == "string" || typeof t.media_content_id == "string").map((t) => ({ ...t, icon: typeof t.icon == "string" ? t.icon : "mdi:music-note" }));
  }
  normalizedCommands() {
    return (Array.isArray(this.config().quick_commands) ? this.config().quick_commands ?? [] : []).filter((t) => !!(t && typeof t.name == "string" && typeof t.command == "string"));
  }
  render() {
    if (!this._config) return;
    if (this._volumeInteracting) {
      this._pendingRender = !0;
      return;
    }
    const e = this.config(), t = this.mediaState(), s = (t == null ? void 0 : t.attributes) ?? {}, r = this.mergedTheme(), a = this._localVolume ?? y(s.volume_level, 0, 1, 0.5), h = Math.max(0, Number(s.media_duration) || 0), b = Q(s, t == null ? void 0 : t.state, h), S = h > 0 ? Math.round(b / h * 1e3) / 10 : 0, w = p(s.media_title, t ? "Ничего не играет" : "Ожидание данных"), $ = p(s.media_artist || s.media_album_name, (t == null ? void 0 : t.state) === "unavailable" ? "Устройство недоступно" : "Яндекс.Станция"), f = p(s.entity_picture), C = y(e.artwork_size, 48, 220, 80), M = y(e.opacity, 0.1, 1, 0.72), L = y(e.blur, 0, 40, 18), V = y(e.artwork_blur, 0, 40, 8), v = e.content_align === "center" ? "center" : e.content_align === "right" ? "right" : "left", I = v === "center" ? "center" : v === "right" ? "flex-end" : "flex-start", j = v === "center" ? "center" : v === "right" ? "flex-end" : "flex-start", O = y(e.content_size, 50, 100, 100), N = e.controls_position === "left" ? "flex-start" : e.controls_position === "right" ? "flex-end" : "center", U = e.layout === "vertical" ? "ysp-vertical" : "", D = e.icon_position === "center" || e.icon_position === "right" ? e.icon_position : "left", A = e.name_position === "center" || e.name_position === "right" ? e.name_position : "left", F = e.show_header === !1 ? "" : `<header class="ysp-header">${["left", "center", "right"].map((u) => `<div class="ysp-header-slot ysp-slot-${u}">${D === u ? d(e.icon ?? "mdi:speaker-wireless", "ysp-device-icon") : ""}${A === u ? `<span class="ysp-name" title="${l(e.name ?? "Яндекс.Станция")}">${l(e.name ?? "Яндекс.Станция")}</span>` : ""}</div>`).join("")}</header>`, H = e.artwork_position === "right" ? "ysp-art-right" : e.artwork_position === "top" ? "ysp-art-top" : e.artwork_position === "background" ? "ysp-art-background" : "", q = "", Y = (t == null ? void 0 : t.state) === "unavailable" || !t, _ = (t == null ? void 0 : t.state) === "playing", x = s.is_volume_muted === !0 || a === 0, P = x ? "mdi:volume-off" : "mdi:volume-high", R = x ? "mdi:volume-high" : "mdi:volume-mute", T = this.normalizedPresets(), z = this.normalizedCommands(), B = `
      ${G}
      :host { --ysp-primary:${m(p(r.primary), c.primary)}; --ysp-accent:${m(p(r.accent), c.accent)}; --ysp-text:${m(p(r.text), c.text)}; --ysp-secondary:${m(p(r.secondary), c.secondary)}; --ysp-surface:${m(p(r.surface), c.surface)}; --ysp-background:${m(p(r.background), c.background)}; --ysp-on-primary:${m(p(r.on_primary), c.on_primary)}; --ysp-border:${m(p(r.border), c.border)}; --ysp-shadow:${m(p(r.shadow), c.shadow)}; --ysp-art-size:${C}px; --ysp-blur:${L}px; --ysp-controls-position:${N}; --ysp-align:${v}; --ysp-align-items:${I}; --ysp-content-justify:${j}; --ysp-content-size:${O}%; }
      .ysp-card { opacity:${M}; }
      .ysp-card.ysp-art-background .ysp-art-bg { filter:blur(${V}px) brightness(0.85); }
    `, W = e.show_artwork === !1 ? "" : f ? `<img class="ysp-art" src="${l(f)}" alt="Обложка текущего трека">` : `<div class="ysp-art ysp-art-placeholder" aria-label="Нет обложки">${d("mdi:music-note", "ysp-art-icon")}</div>`;
    this._root.innerHTML = `
      <style>${B}</style>
      <article class="ysp-card ${U} ${H} ${q} ${this._volumeInteracting ? "ysp-volume-interacting" : ""}" aria-label="${l(e.name ?? "Яндекс.Станция")}" data-unavailable="${Y}">
        <div class="ysp-content">
          ${F}
          <section class="ysp-track">${e.artwork_position === "background" ? "" : W}<div class="ysp-track-info"><div class="ysp-title" title="${l(w)}">${l(w)}</div><div class="ysp-artist" title="${l($)}">${l($)}</div></div></section>${f && e.artwork_position === "background" ? `<div class="ysp-art-bg" style="background-image:url(${l(f)})" aria-hidden="true"></div>` : ""}
          ${e.show_progress !== !1 && h > 0 ? `<section class="ysp-progress" aria-label="Перемотка и громкость"><span>${g(b)}</span><input class="ysp-seek-range ysp-seek" type="range" min="0" max="${h}" step="1" value="${b}" style="--ysp-seek-pct:${S}%" data-action="seek" aria-label="Перемотка аудио" aria-valuetext="${g(b)} из ${g(h)}">${e.show_volume !== !1 ? `<span class="ysp-volume-side${this._volumeOpen ? " ysp-volume-open" : ""}"><button class="ysp-volume-icon-button" type="button" data-action="mute" aria-label="${x ? "Включить звук" : "Выключить звук"}" aria-haspopup="true">${d(P, "ysp-volume-glyph")}</button><span class="ysp-volume-popover" role="dialog" aria-label="Громкость"><input class="ysp-volume-vertical" type="range" min="0" max="1" step="0.01" value="${a}" data-action="volume" aria-label="Громкость" aria-valuetext="${Math.round(a * 100)} процентов" style="--ysp-volume-pct:${Math.round(a * 100)}%"></span></span>` : ""}<span>${g(h)}</span></section>` : ""}
          ${e.show_controls !== !1 ? `<section class="ysp-controls" aria-label="Управление воспроизведением"><button class="ysp-button" type="button" data-action="previous" aria-label="Предыдущий трек">${d("mdi:skip-previous", "ysp-control-icon")}</button><button class="ysp-button primary" type="button" data-action="${_ ? "pause" : "play"}" aria-label="${_ ? "Пауза" : "Воспроизвести"}">${d(_ ? "mdi:pause" : "mdi:play", "ysp-control-icon")}</button><button class="ysp-button" type="button" data-action="next" aria-label="Следующий трек">${d("mdi:skip-next", "ysp-control-icon")}</button></section>` : ""}
          ${e.show_volume !== !1 && (e.show_progress === !1 || h <= 0) ? `<section class="ysp-volume" aria-label="Громкость"><span class="ysp-volume-icon">${d(P, "ysp-volume-glyph")}</span><input class="ysp-range" type="range" min="0" max="1" step="0.01" value="${a}" data-action="volume" aria-label="Громкость"><button class="ysp-chip ysp-mute-button" type="button" data-action="mute" aria-label="${x ? "Включить звук" : "Выключить звук"}">${d(R, "ysp-chip-icon")}</button></section>` : ""}
          ${e.show_presets !== !1 && T.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Избранное</p><div class="ysp-preset-row">${T.map((u, k) => `<button class="ysp-preset" type="button" data-action="preset" data-index="${k}">${K(u.icon)}<span>${l(u.name)}</span></button>`).join("")}</div></section>` : ""}
          ${e.show_quick_commands !== !1 && z.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Быстрые команды</p><div class="ysp-command-row">${z.map((u, k) => `<button class="ysp-command" type="button" data-action="command" data-index="${k}">${d(u.icon ?? "mdi:gesture-tap-button")}<span>${l(u.name)}</span></button>`).join("")}</div></section>` : ""}
        </div>
      </article>
    `;
  }
  call(e, t = {}) {
    !this._hass || !this._config || this._hass.callService("media_player", e, { entity_id: this._config.entity, ...t });
  }
  handleClick(e) {
    var r;
    const t = e.target instanceof Element ? e.target.closest("[data-action]") : null;
    if (!t) return;
    const s = t.dataset.action;
    if (s !== "volume") {
      if (s === "play" && this.call("media_play"), s === "pause" && this.call("media_pause"), s === "previous" && this.call("media_previous_track"), s === "next" && this.call("media_next_track"), s === "mute") {
        const a = ((r = this.mediaState()) == null ? void 0 : r.attributes) ?? {};
        this.call("volume_mute", { is_volume_muted: a.is_volume_muted !== !0 });
      }
      if (s === "command") {
        const a = this.normalizedCommands()[Number(t.dataset.index)];
        a && this.call("play_media", { media_content_id: a.command, media_content_type: "command" });
      }
      if (s === "preset") {
        const a = this.normalizedPresets()[Number(t.dataset.index)];
        if (!a) return;
        this.call("play_media", {
          media_content_id: a.command ?? a.media_content_id,
          media_content_type: a.command ? "command" : a.media_content_type ?? "music"
        });
      }
    }
  }
  handleInput(e) {
    const t = e.target instanceof HTMLInputElement ? e.target : null;
    if (t) {
      if (t.dataset.action === "volume") {
        const s = y(Number(t.value), 0, 1, 0), r = Math.round(s * 100);
        this._localVolume = s, t.setAttribute("aria-valuetext", `${r} процентов`), t.style.setProperty("--ysp-volume-pct", `${r}%`), t.setAttribute("title", `${r}%`), this.sendVolume(s);
      }
      t.dataset.action === "seek" && (this.call("media_seek", { seek_position: Number(t.value) }), t.setAttribute("aria-valuetext", `${g(Number(t.value))} из ${g(Number(t.max))}`), t.style.setProperty("--ysp-seek-pct", `${Number(t.max) > 0 ? Number(t.value) / Number(t.max) * 100 : 0}%`));
    }
  }
  handleVolumePointerDown(e) {
    var t;
    if (e.target instanceof HTMLInputElement && e.target.dataset.action === "volume") {
      this._volumeInteracting = !0, (t = this._root.querySelector(".ysp-card")) == null || t.classList.add("ysp-volume-interacting");
      const s = e;
      s.preventDefault();
      try {
        e.target.setPointerCapture(s.pointerId);
      } catch {
      }
      this.setVolumeFromPointer(e.target, e);
    }
  }
  handleVolumePointerMove(e) {
    !this._volumeInteracting || !(e.target instanceof HTMLInputElement) || e.target.dataset.action !== "volume" || this.setVolumeFromPointer(e.target, e);
  }
  setVolumeFromPointer(e, t) {
    const s = e.getBoundingClientRect(), r = y(s.height > 0 ? (s.bottom - t.clientY) / s.height : 0, 0, 1, 0);
    e.value = r.toFixed(2), this.handleInput({ target: e });
  }
  handleVolumePointerOver(e) {
    e.target instanceof Element && e.target.closest(".ysp-volume-side") && (this._volumeCloseTimer !== null && (clearTimeout(this._volumeCloseTimer), this._volumeCloseTimer = null), this.setVolumeOpen(!0));
  }
  handleVolumePointerOut(e) {
    if (!(e.target instanceof Element) || !e.target.closest(".ysp-volume-side")) return;
    const t = e.relatedTarget;
    t instanceof Element && t.closest(".ysp-volume-side") || this._volumeInteracting || (this._volumeCloseTimer !== null && clearTimeout(this._volumeCloseTimer), this._volumeCloseTimer = window.setTimeout(() => {
      this._volumeCloseTimer = null, this._volumeInteracting || this.setVolumeOpen(!1);
    }, 260));
  }
  setVolumeOpen(e) {
    this._volumeOpen = e;
    const t = this._root.querySelector(".ysp-volume-side");
    t == null || t.classList.toggle("ysp-volume-open", e);
  }
  handleVolumePointerUp() {
    var e;
    this._volumeInteracting && (this._volumeInteracting = !1, (e = this._root.querySelector(".ysp-card")) == null || e.classList.remove("ysp-volume-interacting"), this.flushVolume(), this._pendingRender && (this._pendingRender = !1, this.render()));
  }
  sendVolume(e) {
    this._volumeToSend = e, this._volumeSendTimer === null && this.flushVolume();
  }
  flushVolume() {
    if (this._volumeSendTimer !== null && (clearTimeout(this._volumeSendTimer), this._volumeSendTimer = null), this._volumeToSend === null) return;
    const e = this._volumeToSend;
    this._volumeToSend = null, this.call("volume_set", { volume_level: e }), this._volumeSendTimer = window.setTimeout(() => {
      this._volumeSendTimer = null, this._volumeToSend !== null && this.flushVolume();
    }, 180);
  }
}
customElements.get("yandex-station-player") || customElements.define("yandex-station-player", Z);
const E = window.customCards ?? (window.customCards = []);
E.some((o) => o.type === "yandex-station-player") || E.push({
  type: "yandex-station-player",
  name: "Yandex Station Player",
  description: "Mint Teal media player for Yandex.Station media_player entities",
  preview: !0
});
