var B = Object.defineProperty;
var R = (s, i, t) => i in s ? B(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t;
var u = (s, i, t) => R(s, typeof i != "symbol" ? i + "" : i, t);
const l = {
  primary: "#00685d",
  accent: "#26a69a",
  text: "#0f1e1c",
  secondary: "#3d4946",
  surface: "#ffffff",
  background: "rgba(255,255,255,.72)",
  on_primary: "#ffffff",
  border: "rgba(0,137,123,.15)",
  shadow: "0 2px 8px rgba(0,137,123,.08)"
}, W = `
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
.ysp-progress .ysp-volume-side:hover .ysp-volume-popover, .ysp-progress .ysp-volume-side:focus-within .ysp-volume-popover, .ysp-progress .ysp-volume-popover:hover, .ysp-progress .ysp-volume-popover:focus-within { opacity:1; pointer-events:auto; transform:translate(-50%, 0); }
.ysp-volume-vertical { align-self:center; width:32px; height:80px; margin:0; padding:0; border:0; background:linear-gradient(to top, var(--ysp-primary) 0 var(--ysp-volume-pct, 0%), var(--ysp-surface) var(--ysp-volume-pct, 0%)) center / 8px 100% no-repeat; border-radius:999px; cursor:pointer; writing-mode:vertical-lr; direction:rtl; -webkit-appearance:none; appearance:none; transition:filter .18s ease, transform .18s ease; }
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
function f(s, i, t, e) {
  const a = typeof s == "number" ? s : Number(s);
  return Number.isFinite(a) ? Math.min(t, Math.max(i, a)) : e;
}
function y(s, i) {
  return /[<>`{};"']/.test(s) ? i : s;
}
function p(s) {
  return s.replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i] ?? i);
}
function o(s, i = "") {
  return typeof s == "string" || typeof s == "number" ? String(s) : i;
}
function d(s, i = "ysp-action-icon") {
  const t = s.trim(), e = /^(mdi|hass|yandex):[a-z0-9-]+$/i.test(t) ? t : "mdi:help-circle-outline";
  return `<ha-icon class="ysp-icon ${p(i)}" icon="${p(e)}" aria-hidden="true"></ha-icon>`;
}
function U(s) {
  return d(s);
}
function h(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const i = Math.floor(s / 60), t = Math.floor(s % 60).toString().padStart(2, "0");
  return `${i}:${t}`;
}
function V(s, i, t) {
  const e = Math.max(0, Number(s.media_position) || 0);
  if (i !== "playing" || t <= 0) return Math.min(e, t);
  const a = o(s.media_position_updated_at), r = Date.parse(a);
  return Number.isFinite(r) ? Math.min(t, e + Math.max(0, (Date.now() - r) / 1e3)) : Math.min(e, t);
}
class X extends HTMLElement {
  constructor() {
    super();
    u(this, "_config");
    u(this, "_hass");
    u(this, "_root");
    u(this, "_boundClick");
    u(this, "_boundInput");
    this._root = this.attachShadow({ mode: "open" }), this._boundClick = (t) => this.handleClick(t), this._boundInput = (t) => this.handleInput(t);
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
    this._root.addEventListener("click", this._boundClick), this._root.addEventListener("input", this._boundInput);
  }
  disconnectedCallback() {
    this._root.removeEventListener("click", this._boundClick), this._root.removeEventListener("input", this._boundInput);
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
    return { ...l, ...t };
  }
  normalizedPresets() {
    return (Array.isArray(this.config().presets) ? this.config().presets ?? [] : []).filter((e) => !e || typeof e.name != "string" ? !1 : typeof e.command == "string" || typeof e.media_content_id == "string").map((e) => ({ ...e, icon: typeof e.icon == "string" ? e.icon : "mdi:music-note" }));
  }
  normalizedCommands() {
    return (Array.isArray(this.config().quick_commands) ? this.config().quick_commands ?? [] : []).filter((e) => !!(e && typeof e.name == "string" && typeof e.command == "string"));
  }
  render() {
    if (!this._config) return;
    const t = this.config(), e = this.mediaState(), a = (e == null ? void 0 : e.attributes) ?? {}, r = this.mergedTheme(), n = f(a.volume_level, 0, 1, 0.5), c = Math.max(0, Number(a.media_duration) || 0), m = V(a, e == null ? void 0 : e.state, c), E = c > 0 ? Math.round(m / c * 1e3) / 10 : 0, w = o(a.media_title, e ? "Ничего не играет" : "Ожидание данных"), k = o(a.media_artist || a.media_album_name, (e == null ? void 0 : e.state) === "unavailable" ? "Устройство недоступно" : "Яндекс.Станция"), $ = o(a.entity_picture), S = f(t.artwork_size, 48, 220, 80), P = f(t.opacity, 0.1, 1, 0.72), j = f(t.blur, 0, 40, 18), b = t.content_align === "center" ? "center" : t.content_align === "right" ? "right" : "left", I = b === "center" ? "center" : b === "right" ? "flex-end" : "flex-start", T = t.controls_position === "left" ? "flex-start" : t.controls_position === "right" ? "flex-end" : "center", A = t.layout === "vertical" ? "ysp-vertical" : "", L = t.artwork_position === "right" ? "ysp-art-right" : t.artwork_position === "top" ? "ysp-art-top" : "", H = "", Y = (e == null ? void 0 : e.state) === "unavailable" || !e, v = (e == null ? void 0 : e.state) === "playing", x = a.is_volume_muted === !0 || n === 0, z = x ? "mdi:volume-off" : "mdi:volume-high", F = x ? "mdi:volume-high" : "mdi:volume-mute", M = this.normalizedPresets(), C = this.normalizedCommands(), q = `
      ${W}
      :host { --ysp-primary:${y(o(r.primary), l.primary)}; --ysp-accent:${y(o(r.accent), l.accent)}; --ysp-text:${y(o(r.text), l.text)}; --ysp-secondary:${y(o(r.secondary), l.secondary)}; --ysp-surface:${y(o(r.surface), l.surface)}; --ysp-background:${y(o(r.background), l.background)}; --ysp-on-primary:${y(o(r.on_primary), l.on_primary)}; --ysp-border:${y(o(r.border), l.border)}; --ysp-shadow:${y(o(r.shadow), l.shadow)}; --ysp-art-size:${S}px; --ysp-blur:${j}px; --ysp-controls-position:${T}; --ysp-align:${b}; --ysp-align-items:${I}; }
      .ysp-card { opacity:${P}; }
    `, D = t.show_artwork === !1 ? "" : $ ? `<img class="ysp-art" src="${p($)}" alt="Обложка текущего трека">` : `<div class="ysp-art ysp-art-placeholder" aria-label="Нет обложки">${d("mdi:music-note", "ysp-art-icon")}</div>`;
    this._root.innerHTML = `
      <style>${q}</style>
      <article class="ysp-card ${A} ${L} ${H}" aria-label="${p(t.name ?? "Яндекс.Станция")}" data-unavailable="${Y}">
        <div class="ysp-content">
          ${t.show_header !== !1 ? `<header class="ysp-header">${d(t.icon ?? "mdi:speaker-wireless", "ysp-device-icon")}<span class="ysp-name">${p(t.name ?? "Яндекс.Станция")}</span></header>` : ""}
          <section class="ysp-track">${D}<div class="ysp-track-info"><div class="ysp-title" title="${p(w)}">${p(w)}</div><div class="ysp-artist" title="${p(k)}">${p(k)}</div></div></section>
          ${t.show_progress !== !1 && c > 0 ? `<section class="ysp-progress" aria-label="Перемотка и громкость"><span>${h(m)}</span><input class="ysp-seek-range ysp-seek" type="range" min="0" max="${c}" step="1" value="${m}" style="--ysp-seek-pct:${E}%" data-action="seek" aria-label="Перемотка аудио" aria-valuetext="${h(m)} из ${h(c)}">${t.show_volume !== !1 ? `<span class="ysp-volume-side"><button class="ysp-volume-icon-button" type="button" data-action="mute" aria-label="${x ? "Включить звук" : "Выключить звук"}" aria-haspopup="true">${d(z, "ysp-volume-glyph")}</button><span class="ysp-volume-popover" role="dialog" aria-label="Громкость"><input class="ysp-volume-vertical" type="range" min="0" max="1" step="0.01" value="${n}" data-action="volume" aria-label="Громкость" aria-valuetext="${Math.round(n * 100)} процентов" style="--ysp-volume-pct:${Math.round(n * 100)}%"></span></span>` : ""}<span>${h(c)}</span></section>` : ""}
          ${t.show_controls !== !1 ? `<section class="ysp-controls" aria-label="Управление воспроизведением"><button class="ysp-button" type="button" data-action="previous" aria-label="Предыдущий трек">${d("mdi:skip-previous", "ysp-control-icon")}</button><button class="ysp-button primary" type="button" data-action="${v ? "pause" : "play"}" aria-label="${v ? "Пауза" : "Воспроизвести"}">${d(v ? "mdi:pause" : "mdi:play", "ysp-control-icon")}</button><button class="ysp-button" type="button" data-action="next" aria-label="Следующий трек">${d("mdi:skip-next", "ysp-control-icon")}</button></section>` : ""}
          ${t.show_volume !== !1 && (t.show_progress === !1 || c <= 0) ? `<section class="ysp-volume" aria-label="Громкость"><span class="ysp-volume-icon">${d(z, "ysp-volume-glyph")}</span><input class="ysp-range" type="range" min="0" max="1" step="0.01" value="${n}" data-action="volume" aria-label="Громкость"><button class="ysp-chip ysp-mute-button" type="button" data-action="mute" aria-label="${x ? "Включить звук" : "Выключить звук"}">${d(F, "ysp-chip-icon")}</button></section>` : ""}
          ${t.show_presets !== !1 && M.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Избранное</p><div class="ysp-preset-row">${M.map((g, _) => `<button class="ysp-preset" type="button" data-action="preset" data-index="${_}">${U(g.icon)}<span>${p(g.name)}</span></button>`).join("")}</div></section>` : ""}
          ${t.show_quick_commands !== !1 && C.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Быстрые команды</p><div class="ysp-command-row">${C.map((g, _) => `<button class="ysp-command" type="button" data-action="command" data-index="${_}">${d(g.icon ?? "mdi:gesture-tap-button")}<span>${p(g.name)}</span></button>`).join("")}</div></section>` : ""}
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
    const a = e.dataset.action;
    if (a === "volume" && e instanceof HTMLInputElement && t instanceof MouseEvent) {
      const n = e.getBoundingClientRect(), c = n.height > 0 ? (n.bottom - t.clientY) / n.height : 0, m = f(c, 0, 1, 0);
      e.value = m.toFixed(2), this.handleInput({ target: e });
      return;
    }
    if (a === "play" && this.call("media_play"), a === "pause" && this.call("media_pause"), a === "previous" && this.call("media_previous_track"), a === "next" && this.call("media_next_track"), a === "mute") {
      const n = ((r = this.mediaState()) == null ? void 0 : r.attributes) ?? {};
      this.call("volume_mute", { is_volume_muted: n.is_volume_muted !== !0 });
    }
    if (a === "command") {
      const n = this.normalizedCommands()[Number(e.dataset.index)];
      n && this.call("play_media", { media_content_id: n.command, media_content_type: "command" });
    }
    if (a === "preset") {
      const n = this.normalizedPresets()[Number(e.dataset.index)];
      if (!n) return;
      this.call("play_media", {
        media_content_id: n.command ?? n.media_content_id,
        media_content_type: n.command ? "text" : n.media_content_type ?? "music"
      });
    }
  }
  handleInput(t) {
    const e = t.target instanceof HTMLInputElement ? t.target : null;
    e && (e.dataset.action === "volume" && (this.call("volume_set", { volume_level: Number(e.value) }), e.setAttribute("aria-valuetext", `${Math.round(Number(e.value) * 100)} процентов`), e.style.setProperty("--ysp-volume-pct", `${Math.round(Number(e.value) * 100)}%`), e.setAttribute("title", `${Math.round(Number(e.value) * 100)}%`)), e.dataset.action === "seek" && (this.call("media_seek", { seek_position: Number(e.value) }), e.setAttribute("aria-valuetext", `${h(Number(e.value))} из ${h(Number(e.max))}`), e.style.setProperty("--ysp-seek-pct", `${Number(e.max) > 0 ? Number(e.value) / Number(e.max) * 100 : 0}%`)));
  }
}
customElements.get("yandex-station-player") || customElements.define("yandex-station-player", X);
const N = window.customCards ?? (window.customCards = []);
N.some((s) => s.type === "yandex-station-player") || N.push({
  type: "yandex-station-player",
  name: "Yandex Station Player",
  description: "Mint Teal media player for Yandex.Station media_player entities",
  preview: !0
});
