var D = Object.defineProperty;
var W = (s, i, t) => i in s ? D(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t;
var y = (s, i, t) => W(s, typeof i != "symbol" ? i + "" : i, t);
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
.ysp-progress { gap:8px; width:100%; color:var(--ysp-secondary); font-size:11px; }
.ysp-progress input { min-width:0; flex:1; height:6px; accent-color:var(--ysp-primary); cursor:pointer; }
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
.ysp-hover-volume .ysp-volume { position:relative; }
@media (hover:hover) and (pointer:fine) { .ysp-hover-volume .ysp-range { opacity:0; pointer-events:none; transform:translateY(4px); transition:opacity .12s ease, transform .12s ease; } .ysp-hover-volume .ysp-volume:hover .ysp-range, .ysp-hover-volume .ysp-volume:focus-within .ysp-range { opacity:1; pointer-events:auto; transform:none; } }
@media (max-width:420px) { .ysp-controls { gap:12px; } .ysp-button.primary { width:56px; height:56px; } }
`;
function u(s, i, t, e) {
  const n = typeof s == "number" ? s : Number(s);
  return Number.isFinite(n) ? Math.min(t, Math.max(i, n)) : e;
}
function l(s, i) {
  return /[<>`{};"']/.test(s) ? i : s;
}
function p(s) {
  return s.replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i] ?? i);
}
function o(s, i = "") {
  return typeof s == "string" || typeof s == "number" ? String(s) : i;
}
function d(s, i = "ysp-action-icon") {
  const t = s.trim(), e = /^(mdi|hass):[a-z0-9-]+$/i.test(t) ? t : "mdi:help-circle-outline";
  return `<ha-icon class="ysp-icon ${p(i)}" icon="${p(e)}" aria-hidden="true"></ha-icon>`;
}
function R(s) {
  return d(s);
}
function C(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const i = Math.floor(s / 60), t = Math.floor(s % 60).toString().padStart(2, "0");
  return `${i}:${t}`;
}
class U extends HTMLElement {
  constructor() {
    super();
    y(this, "_config");
    y(this, "_hass");
    y(this, "_root");
    y(this, "_boundClick");
    y(this, "_boundInput");
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
    return { ...c, ...t };
  }
  normalizedPresets() {
    return (Array.isArray(this.config().presets) ? this.config().presets ?? [] : []).filter((e) => !e || typeof e.name != "string" ? !1 : typeof e.command == "string" || typeof e.media_content_id == "string").map((e) => ({ ...e, icon: typeof e.icon == "string" ? e.icon : "mdi:music-note" }));
  }
  normalizedCommands() {
    return (Array.isArray(this.config().quick_commands) ? this.config().quick_commands ?? [] : []).filter((e) => !!(e && typeof e.name == "string" && typeof e.command == "string"));
  }
  render() {
    if (!this._config) return;
    const t = this.config(), e = this.mediaState(), n = (e == null ? void 0 : e.attributes) ?? {}, a = this.mergedTheme(), r = u(n.volume_level, 0, 1, 0.5), v = u(n.media_position, 0, Number(n.media_duration) || 1, 0), h = Math.max(0, Number(n.media_duration) || 0), _ = o(n.media_title, e ? "Ничего не играет" : "Ожидание данных"), w = o(n.media_artist || n.media_album_name, (e == null ? void 0 : e.state) === "unavailable" ? "Устройство недоступно" : "Яндекс.Станция"), $ = o(n.entity_picture), E = u(t.artwork_size, 48, 220, 80), I = u(t.opacity, 0.1, 1, 0.72), M = u(t.blur, 0, 40, 18), f = t.content_align === "center" ? "center" : t.content_align === "right" ? "right" : "left", T = f === "center" ? "center" : f === "right" ? "flex-end" : "flex-start", j = t.controls_position === "left" ? "flex-start" : t.controls_position === "right" ? "flex-end" : "center", P = t.layout === "vertical" ? "ysp-vertical" : "", N = t.artwork_position === "right" ? "ysp-art-right" : t.artwork_position === "top" ? "ysp-art-top" : "", L = t.volume_on_hover === !0 ? "ysp-hover-volume" : "", Y = (e == null ? void 0 : e.state) === "unavailable" || !e, g = (e == null ? void 0 : e.state) === "playing", x = n.is_volume_muted === !0 || r === 0, A = x ? "mdi:volume-off" : "mdi:volume-high", H = x ? "mdi:volume-high" : "mdi:volume-mute", k = this.normalizedPresets(), z = this.normalizedCommands(), q = `
      ${B}
      :host { --ysp-primary:${l(o(a.primary), c.primary)}; --ysp-accent:${l(o(a.accent), c.accent)}; --ysp-text:${l(o(a.text), c.text)}; --ysp-secondary:${l(o(a.secondary), c.secondary)}; --ysp-surface:${l(o(a.surface), c.surface)}; --ysp-background:${l(o(a.background), c.background)}; --ysp-on-primary:${l(o(a.on_primary), c.on_primary)}; --ysp-border:${l(o(a.border), c.border)}; --ysp-shadow:${l(o(a.shadow), c.shadow)}; --ysp-art-size:${E}px; --ysp-blur:${M}px; --ysp-controls-position:${j}; --ysp-align:${f}; --ysp-align-items:${T}; }
      .ysp-card { opacity:${I}; }
    `, F = t.show_artwork === !1 ? "" : $ ? `<img class="ysp-art" src="${p($)}" alt="Обложка текущего трека">` : `<div class="ysp-art ysp-art-placeholder" aria-label="Нет обложки">${d("mdi:music-note", "ysp-art-icon")}</div>`;
    this._root.innerHTML = `
      <style>${q}</style>
      <article class="ysp-card ${P} ${N} ${L}" aria-label="${p(t.name ?? "Яндекс.Станция")}" data-unavailable="${Y}">
        <div class="ysp-content">
          ${t.show_header !== !1 ? `<header class="ysp-header">${d(t.icon ?? "mdi:speaker-wireless", "ysp-device-icon")}<span class="ysp-name">${p(t.name ?? "Яндекс.Станция")}</span></header>` : ""}
          <section class="ysp-track">${F}<div class="ysp-track-info"><div class="ysp-title" title="${p(_)}">${p(_)}</div><div class="ysp-artist" title="${p(w)}">${p(w)}</div></div></section>
          ${t.show_progress !== !1 && h > 0 ? `<section class="ysp-progress" aria-label="Позиция воспроизведения"><span>${C(v)}</span><input type="range" min="0" max="${h}" step="1" value="${v}" data-action="seek" aria-label="Перемотка"><span>${C(h)}</span></section>` : ""}
          ${t.show_controls !== !1 ? `<section class="ysp-controls" aria-label="Управление воспроизведением"><button class="ysp-button" type="button" data-action="previous" aria-label="Предыдущий трек">${d("mdi:skip-previous", "ysp-control-icon")}</button><button class="ysp-button primary" type="button" data-action="${g ? "pause" : "play"}" aria-label="${g ? "Пауза" : "Воспроизвести"}">${d(g ? "mdi:pause" : "mdi:play", "ysp-control-icon")}</button><button class="ysp-button" type="button" data-action="next" aria-label="Следующий трек">${d("mdi:skip-next", "ysp-control-icon")}</button></section>` : ""}
          ${t.show_volume !== !1 ? `<section class="ysp-volume" aria-label="Громкость"><span class="ysp-volume-icon">${d(A, "ysp-volume-glyph")}</span><input class="ysp-range" type="range" min="0" max="1" step="0.01" value="${r}" data-action="volume" aria-label="Громкость"><button class="ysp-chip ysp-mute-button" type="button" data-action="mute" aria-label="${x ? "Включить звук" : "Выключить звук"}">${d(H, "ysp-chip-icon")}</button></section>` : ""}
          ${t.show_presets !== !1 && k.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Избранное</p><div class="ysp-preset-row">${k.map((m, b) => `<button class="ysp-preset" type="button" data-action="preset" data-index="${b}">${R(m.icon)}<span>${p(m.name)}</span></button>`).join("")}</div></section>` : ""}
          ${t.show_quick_commands !== !1 && z.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Быстрые команды</p><div class="ysp-command-row">${z.map((m, b) => `<button class="ysp-command" type="button" data-action="command" data-index="${b}">${d(m.icon ?? "mdi:gesture-tap-button")}<span>${p(m.name)}</span></button>`).join("")}</div></section>` : ""}
        </div>
      </article>
    `;
  }
  call(t, e = {}) {
    !this._hass || !this._config || this._hass.callService("media_player", t, { entity_id: this._config.entity, ...e });
  }
  handleClick(t) {
    var a;
    const e = t.target instanceof Element ? t.target.closest("[data-action]") : null;
    if (!e) return;
    const n = e.dataset.action;
    if (n === "play" && this.call("media_play"), n === "pause" && this.call("media_pause"), n === "previous" && this.call("media_previous_track"), n === "next" && this.call("media_next_track"), n === "mute" && this.call("volume_mute", { is_volume_muted: ((a = this.mediaState()) == null ? void 0 : a.attributes.is_volume_muted) !== !0 }), n === "command") {
      const r = this.normalizedCommands()[Number(e.dataset.index)];
      r && this.call("play_media", { media_content_id: r.command, media_content_type: "command" });
    }
    if (n === "preset") {
      const r = this.normalizedPresets()[Number(e.dataset.index)];
      if (!r) return;
      this.call("play_media", {
        media_content_id: r.command ?? r.media_content_id,
        media_content_type: r.command ? "text" : r.media_content_type ?? "music"
      });
    }
  }
  handleInput(t) {
    const e = t.target instanceof HTMLInputElement ? t.target : null;
    e && (e.dataset.action === "volume" && this.call("volume_set", { volume_level: Number(e.value) }), e.dataset.action === "seek" && this.call("media_seek", { seek_position: Number(e.value) }));
  }
}
customElements.get("yandex-station-player") || customElements.define("yandex-station-player", U);
const S = window.customCards ?? (window.customCards = []);
S.some((s) => s.type === "yandex-station-player") || S.push({
  type: "yandex-station-player",
  name: "Yandex Station Player",
  description: "Mint Teal media player for Yandex.Station media_player entities",
  preview: !0
});
