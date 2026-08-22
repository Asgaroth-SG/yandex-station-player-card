var W = Object.defineProperty;
var B = (s, a, e) => a in s ? W(s, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[a] = e;
var m = (s, a, e) => B(s, typeof a != "symbol" ? a + "" : a, e);
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
}, R = `
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
.ysp-progress .ysp-volume-icon-button { display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; flex:0 0 28px; padding:0; border:0; border-radius:999px; background:transparent; color:var(--ysp-primary); cursor:pointer; transition:background .12s ease, color .12s ease, transform .12s ease; }
.ysp-progress .ysp-volume-icon-button:hover, .ysp-progress .ysp-volume-icon-button:focus-visible { background:var(--ysp-surface); }
.ysp-progress .ysp-volume-icon-button:active { transform:scale(.92); }
.ysp-progress .ysp-volume-glyph { width:18px; height:18px; --mdc-icon-size:18px; }
.ysp-progress .ysp-volume-popover { position:absolute; bottom:calc(100% + 6px); left:50%; transform:translate(-50%, 6px); display:flex; align-items:center; justify-content:center; padding:14px 8px; border-radius:12px; background:var(--ysp-background, var(--ha-card-background, #fff)); border:1px solid var(--ysp-border); box-shadow:var(--ysp-shadow); opacity:0; pointer-events:none; transition:opacity .14s ease, transform .14s ease; }
.ysp-progress .ysp-volume-side:hover .ysp-volume-popover, .ysp-progress .ysp-volume-side:focus-within .ysp-volume-popover, .ysp-progress .ysp-volume-popover:hover, .ysp-progress .ysp-volume-popover:focus-within { opacity:1; pointer-events:auto; transform:translate(-50%, 0); }
.ysp-volume-vertical { align-self:center; width:24px; height:80px; margin:0; padding:0; background:transparent; cursor:pointer; writing-mode:vertical-lr; -webkit-appearance:slider-vertical; appearance:slider-vertical; accent-color:var(--ysp-primary); }
.ysp-volume-vertical::-webkit-slider-runnable-track { width:8px; border-radius:999px; background:linear-gradient(to top, var(--ysp-primary) 0 var(--ysp-volume-pct, 0%), var(--ysp-surface) var(--ysp-volume-pct, 0%) 100%); }
.ysp-volume-vertical::-moz-range-track { width:8px; border-radius:999px; background:linear-gradient(to top, var(--ysp-primary) 0 var(--ysp-volume-pct, 0%), var(--ysp-surface) var(--ysp-volume-pct, 0%) 100%); }
.ysp-volume-vertical::-webkit-slider-thumb { -webkit-appearance:none; appearance:none; width:14px; height:14px; margin:auto; border-radius:999px; background:var(--ysp-primary); border:0; }
.ysp-volume-vertical::-moz-range-thumb { width:14px; height:14px; border:0; border-radius:999px; background:var(--ysp-primary); }
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
function x(s, a, e, t) {
  const i = typeof s == "number" ? s : Number(s);
  return Number.isFinite(i) ? Math.min(e, Math.max(a, i)) : t;
}
function d(s, a) {
  return /[<>`{};"']/.test(s) ? a : s;
}
function p(s) {
  return s.replace(/[&<>"']/g, (a) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[a] ?? a);
}
function o(s, a = "") {
  return typeof s == "string" || typeof s == "number" ? String(s) : a;
}
function l(s, a = "ysp-action-icon") {
  const e = s.trim(), t = /^(mdi|hass|yandex):[a-z0-9-]+$/i.test(e) ? e : "mdi:help-circle-outline";
  return `<ha-icon class="ysp-icon ${p(a)}" icon="${p(t)}" aria-hidden="true"></ha-icon>`;
}
function U(s) {
  return l(s);
}
function u(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s / 60), e = Math.floor(s % 60).toString().padStart(2, "0");
  return `${a}:${e}`;
}
function V(s, a, e) {
  const t = Math.max(0, Number(s.media_position) || 0);
  if (a !== "playing" || e <= 0) return Math.min(t, e);
  const i = o(s.media_position_updated_at), r = Date.parse(i);
  return Number.isFinite(r) ? Math.min(e, t + Math.max(0, (Date.now() - r) / 1e3)) : Math.min(t, e);
}
class G extends HTMLElement {
  constructor() {
    super();
    m(this, "_config");
    m(this, "_hass");
    m(this, "_root");
    m(this, "_boundClick");
    m(this, "_boundInput");
    this._root = this.attachShadow({ mode: "open" }), this._boundClick = (e) => this.handleClick(e), this._boundInput = (e) => this.handleInput(e);
  }
  setConfig(e) {
    if (!e || typeof e.entity != "string" || !e.entity.includes("."))
      throw new Error("Yandex Station Player: укажите точный entity, например media_player.yandex_station_...");
    if (!e.entity.startsWith("media_player."))
      throw new Error("Yandex Station Player: entity должен принадлежать домену media_player.");
    this._config = { ...e }, this.render();
  }
  set hass(e) {
    this._hass = e, this.render();
  }
  getCardSize() {
    return 5;
  }
  connectedCallback() {
    this._root.addEventListener("click", this._boundClick), this._root.addEventListener("input", this._boundInput);
  }
  disconnectedCallback() {
    this._root.removeEventListener("click", this._boundClick), this._root.removeEventListener("input", this._boundInput);
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
    const e = this.config(), t = this.mediaState(), i = (t == null ? void 0 : t.attributes) ?? {}, r = this.mergedTheme(), n = x(i.volume_level, 0, 1, 0.5), y = Math.max(0, Number(i.media_duration) || 0), g = V(i, t == null ? void 0 : t.state, y), S = y > 0 ? Math.round(g / y * 1e3) / 10 : 0, w = o(i.media_title, t ? "Ничего не играет" : "Ожидание данных"), k = o(i.media_artist || i.media_album_name, (t == null ? void 0 : t.state) === "unavailable" ? "Устройство недоступно" : "Яндекс.Станция"), $ = o(i.entity_picture), E = x(e.artwork_size, 48, 220, 80), j = x(e.opacity, 0.1, 1, 0.72), P = x(e.blur, 0, 40, 18), v = e.content_align === "center" ? "center" : e.content_align === "right" ? "right" : "left", T = v === "center" ? "center" : v === "right" ? "flex-end" : "flex-start", I = e.controls_position === "left" ? "flex-start" : e.controls_position === "right" ? "flex-end" : "center", A = e.layout === "vertical" ? "ysp-vertical" : "", L = e.artwork_position === "right" ? "ysp-art-right" : e.artwork_position === "top" ? "ysp-art-top" : "", H = "", Y = (t == null ? void 0 : t.state) === "unavailable" || !t, b = (t == null ? void 0 : t.state) === "playing", f = i.is_volume_muted === !0 || n === 0, z = f ? "mdi:volume-off" : "mdi:volume-high", q = f ? "mdi:volume-high" : "mdi:volume-mute", M = this.normalizedPresets(), C = this.normalizedCommands(), D = `
      ${R}
      :host { --ysp-primary:${d(o(r.primary), c.primary)}; --ysp-accent:${d(o(r.accent), c.accent)}; --ysp-text:${d(o(r.text), c.text)}; --ysp-secondary:${d(o(r.secondary), c.secondary)}; --ysp-surface:${d(o(r.surface), c.surface)}; --ysp-background:${d(o(r.background), c.background)}; --ysp-on-primary:${d(o(r.on_primary), c.on_primary)}; --ysp-border:${d(o(r.border), c.border)}; --ysp-shadow:${d(o(r.shadow), c.shadow)}; --ysp-art-size:${E}px; --ysp-blur:${P}px; --ysp-controls-position:${I}; --ysp-align:${v}; --ysp-align-items:${T}; }
      .ysp-card { opacity:${j}; }
    `, F = e.show_artwork === !1 ? "" : $ ? `<img class="ysp-art" src="${p($)}" alt="Обложка текущего трека">` : `<div class="ysp-art ysp-art-placeholder" aria-label="Нет обложки">${l("mdi:music-note", "ysp-art-icon")}</div>`;
    this._root.innerHTML = `
      <style>${D}</style>
      <article class="ysp-card ${A} ${L} ${H}" aria-label="${p(e.name ?? "Яндекс.Станция")}" data-unavailable="${Y}">
        <div class="ysp-content">
          ${e.show_header !== !1 ? `<header class="ysp-header">${l(e.icon ?? "mdi:speaker-wireless", "ysp-device-icon")}<span class="ysp-name">${p(e.name ?? "Яндекс.Станция")}</span></header>` : ""}
          <section class="ysp-track">${F}<div class="ysp-track-info"><div class="ysp-title" title="${p(w)}">${p(w)}</div><div class="ysp-artist" title="${p(k)}">${p(k)}</div></div></section>
          ${e.show_progress !== !1 && y > 0 ? `<section class="ysp-progress" aria-label="Перемотка и громкость"><span>${u(g)}</span><input class="ysp-seek-range ysp-seek" type="range" min="0" max="${y}" step="1" value="${g}" style="--ysp-seek-pct:${S}%" data-action="seek" aria-label="Перемотка аудио" aria-valuetext="${u(g)} из ${u(y)}">${e.show_volume !== !1 ? `<span class="ysp-volume-side"><button class="ysp-volume-icon-button" type="button" data-action="mute" aria-label="${f ? "Включить звук" : "Выключить звук"}" aria-haspopup="true">${l(z, "ysp-volume-glyph")}</button><span class="ysp-volume-popover" role="dialog" aria-label="Громкость"><input class="ysp-volume-vertical" type="range" min="0" max="1" step="0.01" value="${n}" data-action="volume" aria-label="Громкость" aria-valuetext="${Math.round(n * 100)} процентов" style="--ysp-volume-pct:${Math.round(n * 100)}%"></span></span>` : ""}<span>${u(y)}</span></section>` : ""}
          ${e.show_controls !== !1 ? `<section class="ysp-controls" aria-label="Управление воспроизведением"><button class="ysp-button" type="button" data-action="previous" aria-label="Предыдущий трек">${l("mdi:skip-previous", "ysp-control-icon")}</button><button class="ysp-button primary" type="button" data-action="${b ? "pause" : "play"}" aria-label="${b ? "Пауза" : "Воспроизвести"}">${l(b ? "mdi:pause" : "mdi:play", "ysp-control-icon")}</button><button class="ysp-button" type="button" data-action="next" aria-label="Следующий трек">${l("mdi:skip-next", "ysp-control-icon")}</button></section>` : ""}
          ${e.show_volume !== !1 && (e.show_progress === !1 || y <= 0) ? `<section class="ysp-volume" aria-label="Громкость"><span class="ysp-volume-icon">${l(z, "ysp-volume-glyph")}</span><input class="ysp-range" type="range" min="0" max="1" step="0.01" value="${n}" data-action="volume" aria-label="Громкость"><button class="ysp-chip ysp-mute-button" type="button" data-action="mute" aria-label="${f ? "Включить звук" : "Выключить звук"}">${l(q, "ysp-chip-icon")}</button></section>` : ""}
          ${e.show_presets !== !1 && M.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Избранное</p><div class="ysp-preset-row">${M.map((h, _) => `<button class="ysp-preset" type="button" data-action="preset" data-index="${_}">${U(h.icon)}<span>${p(h.name)}</span></button>`).join("")}</div></section>` : ""}
          ${e.show_quick_commands !== !1 && C.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Быстрые команды</p><div class="ysp-command-row">${C.map((h, _) => `<button class="ysp-command" type="button" data-action="command" data-index="${_}">${l(h.icon ?? "mdi:gesture-tap-button")}<span>${p(h.name)}</span></button>`).join("")}</div></section>` : ""}
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
    const i = t.dataset.action;
    if (i === "play" && this.call("media_play"), i === "pause" && this.call("media_pause"), i === "previous" && this.call("media_previous_track"), i === "next" && this.call("media_next_track"), i === "mute" && this.call("volume_mute", { is_volume_muted: ((r = this.mediaState()) == null ? void 0 : r.attributes.is_volume_muted) !== !0 }), i === "command") {
      const n = this.normalizedCommands()[Number(t.dataset.index)];
      n && this.call("play_media", { media_content_id: n.command, media_content_type: "command" });
    }
    if (i === "preset") {
      const n = this.normalizedPresets()[Number(t.dataset.index)];
      if (!n) return;
      this.call("play_media", {
        media_content_id: n.command ?? n.media_content_id,
        media_content_type: n.command ? "text" : n.media_content_type ?? "music"
      });
    }
  }
  handleInput(e) {
    const t = e.target instanceof HTMLInputElement ? e.target : null;
    t && (t.dataset.action === "volume" && (this.call("volume_set", { volume_level: Number(t.value) }), t.setAttribute("aria-valuetext", `${Math.round(Number(t.value) * 100)} процентов`)), t.dataset.action === "seek" && (this.call("media_seek", { seek_position: Number(t.value) }), t.setAttribute("aria-valuetext", `${u(Number(t.value))} из ${u(Number(t.max))}`), t.style.setProperty("--ysp-seek-pct", `${Number(t.max) > 0 ? Number(t.value) / Number(t.max) * 100 : 0}%`)));
  }
}
customElements.get("yandex-station-player") || customElements.define("yandex-station-player", G);
const N = window.customCards ?? (window.customCards = []);
N.some((s) => s.type === "yandex-station-player") || N.push({
  type: "yandex-station-player",
  name: "Yandex Station Player",
  description: "Mint Teal media player for Yandex.Station media_player entities",
  preview: !0
});
