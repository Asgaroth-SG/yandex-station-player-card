var q = Object.defineProperty;
var F = (s, i, t) => i in s ? q(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t;
var d = (s, i, t) => F(s, typeof i != "symbol" ? i + "" : i, t);
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
}, D = `
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
.ysp-track-info { min-width:0; flex:1; flex-direction:column; align-items:flex-start; gap:4px; }
.ysp-title { max-width:100%; font:600 20px/28px Manrope, system-ui, sans-serif; }
.ysp-artist { max-width:100%; color:var(--ysp-secondary); font-size:14px; line-height:20px; }
.ysp-controls { justify-content:var(--ysp-controls-position); gap:24px; padding:4px 0; }
.ysp-button { display:inline-flex; align-items:center; justify-content:center; text-align:center; padding:0; line-height:1; width:48px; height:48px; border:0; border-radius:999px; cursor:pointer; color:var(--ysp-primary); background:var(--ysp-surface); font:400 24px/1 system-ui; transition:transform .12s ease, filter .12s ease; }
.ysp-button:hover { filter:brightness(.97); } .ysp-button:active { transform:scale(.95); }
.ysp-button:focus-visible, .ysp-chip:focus-visible, .ysp-command:focus-visible, .ysp-preset:focus-visible, input:focus-visible { outline:2px solid var(--ysp-accent); outline-offset:2px; }
.ysp-button.primary { width:64px; height:64px; color:var(--ysp-on-primary); background:var(--ysp-primary); box-shadow:0 3px 8px rgba(0,105,93,.22); font-size:30px; }
.ysp-volume { gap:8px; width:100%; color:var(--ysp-secondary); }
.ysp-volume-icon { width:18px; text-align:center; font-size:16px; }
.ysp-range { min-width:0; flex:1; height:8px; accent-color:var(--ysp-primary); cursor:pointer; }
.ysp-progress { gap:8px; width:100%; color:var(--ysp-secondary); font-size:11px; }
.ysp-progress input { min-width:0; flex:1; height:6px; accent-color:var(--ysp-primary); cursor:pointer; }
.ysp-command-row, .ysp-preset-row { gap:8px; flex-wrap:wrap; }
.ysp-command, .ysp-preset { min-height:32px; padding:8px 12px; border-radius:999px; background:var(--ysp-surface); color:var(--ysp-primary); font-size:12px; font-weight:600; }
.ysp-action-icon { display:inline-flex; align-items:center; justify-content:center; width:16px; height:16px; flex:0 0 16px; color:currentColor; --mdc-icon-size:16px; }
.ysp-device-icon { display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; flex:0 0 20px; color:var(--ysp-primary); --mdc-icon-size:20px; }
.ysp-text-icon { font-size:14px; line-height:1; }
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
function m(s, i, t, e) {
  const a = typeof s == "number" ? s : Number(s);
  return Number.isFinite(a) ? Math.min(t, Math.max(i, a)) : e;
}
function l(s, i) {
  return /[<>`{};"']/.test(s) ? i : s;
}
function n(s) {
  return s.replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i] ?? i);
}
function r(s, i = "") {
  return typeof s == "string" || typeof s == "number" ? String(s) : i;
}
function S(s, i = "ysp-action-icon") {
  const t = s.trim();
  return /^(mdi|hass):[a-z0-9-]+$/i.test(t) ? `<ha-icon class="${n(i)}" icon="${n(t)}" aria-hidden="true"></ha-icon>` : `<span class="${n(i)} ysp-text-icon" aria-hidden="true">${n(t)}</span>`;
}
function W(s) {
  return S(s);
}
function z(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const i = Math.floor(s / 60), t = Math.floor(s % 60).toString().padStart(2, "0");
  return `${i}:${t}`;
}
class B extends HTMLElement {
  constructor() {
    super();
    d(this, "_config");
    d(this, "_hass");
    d(this, "_root");
    d(this, "_boundClick");
    d(this, "_boundInput");
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
    return (Array.isArray(this.config().presets) ? this.config().presets ?? [] : []).filter((e) => !e || typeof e.name != "string" ? !1 : typeof e.command == "string" || typeof e.media_content_id == "string").map((e) => ({ ...e, icon: typeof e.icon == "string" ? e.icon : "♫" }));
  }
  normalizedCommands() {
    return (Array.isArray(this.config().quick_commands) ? this.config().quick_commands ?? [] : []).filter((e) => !!(e && typeof e.name == "string" && typeof e.command == "string"));
  }
  render() {
    if (!this._config) return;
    const t = this.config(), e = this.mediaState(), a = (e == null ? void 0 : e.attributes) ?? {}, o = this.mergedTheme(), p = m(a.volume_level, 0, 1, 0.5), b = m(a.media_position, 0, Number(a.media_duration) || 1, 0), u = Math.max(0, Number(a.media_duration) || 0), v = r(a.media_title, e ? "Ничего не играет" : "Ожидание данных"), _ = r(a.media_artist || a.media_album_name, (e == null ? void 0 : e.state) === "unavailable" ? "Устройство недоступно" : "Яндекс.Станция"), w = r(a.entity_picture), E = m(t.artwork_size, 48, 220, 80), M = m(t.opacity, 0.1, 1, 0.72), T = m(t.blur, 0, 40, 18), h = t.content_align === "center" ? "center" : t.content_align === "right" ? "right" : "left", P = h === "center" ? "center" : h === "right" ? "flex-end" : "flex-start", I = t.controls_position === "left" ? "flex-start" : t.controls_position === "right" ? "flex-end" : "center", j = t.layout === "vertical" ? "ysp-vertical" : "", L = t.artwork_position === "right" ? "ysp-art-right" : t.artwork_position === "top" ? "ysp-art-top" : "", N = t.volume_on_hover === !0 ? "ysp-hover-volume" : "", Y = (e == null ? void 0 : e.state) === "unavailable" || !e, f = (e == null ? void 0 : e.state) === "playing", g = a.is_volume_muted === !0 || p === 0, $ = this.normalizedPresets(), k = this.normalizedCommands(), A = `
      ${D}
      :host { --ysp-primary:${l(r(o.primary), c.primary)}; --ysp-accent:${l(r(o.accent), c.accent)}; --ysp-text:${l(r(o.text), c.text)}; --ysp-secondary:${l(r(o.secondary), c.secondary)}; --ysp-surface:${l(r(o.surface), c.surface)}; --ysp-background:${l(r(o.background), c.background)}; --ysp-on-primary:${l(r(o.on_primary), c.on_primary)}; --ysp-border:${l(r(o.border), c.border)}; --ysp-shadow:${l(r(o.shadow), c.shadow)}; --ysp-art-size:${E}px; --ysp-blur:${T}px; --ysp-controls-position:${I}; --ysp-align:${h}; --ysp-align-items:${P}; }
      .ysp-card { opacity:${M}; }
    `, H = t.show_artwork === !1 ? "" : w ? `<img class="ysp-art" src="${n(w)}" alt="Обложка текущего трека">` : '<div class="ysp-art ysp-art-placeholder" aria-label="Нет обложки">♫</div>';
    this._root.innerHTML = `
      <style>${A}</style>
      <article class="ysp-card ${j} ${L} ${N}" aria-label="${n(t.name ?? "Яндекс.Станция")}" data-unavailable="${Y}">
        <div class="ysp-content">
          ${t.show_header !== !1 ? `<header class="ysp-header">${S(t.icon ?? "mdi:speaker-wireless", "ysp-device-icon")}<span class="ysp-name">${n(t.name ?? "Яндекс.Станция")}</span></header>` : ""}
          <section class="ysp-track">${H}<div class="ysp-track-info"><div class="ysp-title" title="${n(v)}">${n(v)}</div><div class="ysp-artist" title="${n(_)}">${n(_)}</div></div></section>
          ${t.show_progress !== !1 && u > 0 ? `<section class="ysp-progress" aria-label="Позиция воспроизведения"><span>${z(b)}</span><input type="range" min="0" max="${u}" step="1" value="${b}" data-action="seek" aria-label="Перемотка"><span>${z(u)}</span></section>` : ""}
          ${t.show_controls !== !1 ? `<section class="ysp-controls" aria-label="Управление воспроизведением"><button class="ysp-button" type="button" data-action="previous" aria-label="Предыдущий трек">⏮</button><button class="ysp-button primary" type="button" data-action="${f ? "pause" : "play"}" aria-label="${f ? "Пауза" : "Воспроизвести"}">${f ? "Ⅱ" : "▶"}</button><button class="ysp-button" type="button" data-action="next" aria-label="Следующий трек">⏭</button></section>` : ""}
          ${t.show_volume !== !1 ? `<section class="ysp-volume" aria-label="Громкость"><span class="ysp-volume-icon">${g ? "🔇" : "🔊"}</span><input class="ysp-range" type="range" min="0" max="1" step="0.01" value="${p}" data-action="volume" aria-label="Громкость"><button class="ysp-chip" type="button" data-action="mute" aria-label="${g ? "Включить звук" : "Выключить звук"}">${g ? "Звук" : "Mute"}</button></section>` : ""}
          ${t.show_presets !== !1 && $.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Избранное</p><div class="ysp-preset-row">${$.map((y, x) => `<button class="ysp-preset" type="button" data-action="preset" data-index="${x}">${W(y.icon)}<span>${n(y.name)}</span></button>`).join("")}</div></section>` : ""}
          ${t.show_quick_commands !== !1 && k.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Быстрые команды</p><div class="ysp-command-row">${k.map((y, x) => `<button class="ysp-command" type="button" data-action="command" data-index="${x}">${n(y.icon ?? "•")} ${n(y.name)}</button>`).join("")}</div></section>` : ""}
        </div>
      </article>
    `;
  }
  call(t, e = {}) {
    !this._hass || !this._config || this._hass.callService("media_player", t, { entity_id: this._config.entity, ...e });
  }
  handleClick(t) {
    var o;
    const e = t.target instanceof Element ? t.target.closest("[data-action]") : null;
    if (!e) return;
    const a = e.dataset.action;
    if (a === "play" && this.call("media_play"), a === "pause" && this.call("media_pause"), a === "previous" && this.call("media_previous_track"), a === "next" && this.call("media_next_track"), a === "mute" && this.call("volume_mute", { is_volume_muted: ((o = this.mediaState()) == null ? void 0 : o.attributes.is_volume_muted) !== !0 }), a === "command") {
      const p = this.normalizedCommands()[Number(e.dataset.index)];
      p && this.call("play_media", { media_content_id: p.command, media_content_type: "command" });
    }
    if (a === "preset") {
      const p = this.normalizedPresets()[Number(e.dataset.index)];
      if (!p) return;
      this.call("play_media", {
        media_content_id: p.command ?? p.media_content_id,
        media_content_type: p.command ? "text" : p.media_content_type ?? "music"
      });
    }
  }
  handleInput(t) {
    const e = t.target instanceof HTMLInputElement ? t.target : null;
    e && (e.dataset.action === "volume" && this.call("volume_set", { volume_level: Number(e.value) }), e.dataset.action === "seek" && this.call("media_seek", { seek_position: Number(e.value) }));
  }
}
customElements.get("yandex-station-player") || customElements.define("yandex-station-player", B);
const C = window.customCards ?? (window.customCards = []);
C.some((s) => s.type === "yandex-station-player") || C.push({
  type: "yandex-station-player",
  name: "Yandex Station Player",
  description: "Mint Teal media player for Yandex.Station media_player entities",
  preview: !0
});
