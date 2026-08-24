var X = Object.defineProperty;
var J = (s, n, e) => n in s ? X(s, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[n] = e;
var c = (s, n, e) => J(s, typeof n != "symbol" ? n + "" : n, e);
const y = {
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
.ysp-track-info { min-width:0; flex:1; flex-direction:column; align-items:var(--ysp-align-items); text-align:var(--ysp-align); gap:4px; }
.ysp-title { max-width:100%; font:600 20px/28px Manrope, system-ui, sans-serif; }
.ysp-artist { max-width:100%; color:var(--ysp-secondary); font-size:14px; line-height:20px; }
.ysp-controls { width:100%; justify-content:var(--ysp-controls-position); gap:24px; padding:4px 0; }
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
.ysp-vertical .ysp-track-info { align-items:var(--ysp-align-items); text-align:var(--ysp-align); }
.ysp-vertical .ysp-controls { width:100%; justify-content:var(--ysp-controls-position); }
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
.ysp-card.ysp-art-background .ysp-header, .ysp-card.ysp-art-background .ysp-track { justify-content:var(--ysp-content-justify); }
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
function _(s, n, e, t) {
  const o = typeof s == "number" ? s : Number(s);
  return Number.isFinite(o) ? Math.min(e, Math.max(n, o)) : t;
}
function x(s, n) {
  return /[<>`{};"']/.test(s) ? n : s;
}
function p(s) {
  return s.replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n] ?? n);
}
function d(s, n = "") {
  return typeof s == "string" || typeof s == "number" ? String(s) : n;
}
function g(s, n = "ysp-action-icon") {
  const e = s.trim(), t = /^(mdi|hass|yandex):[a-z0-9-]+$/i.test(e) ? e : "mdi:help-circle-outline";
  return `<ha-icon class="ysp-icon ${p(n)}" icon="${p(t)}" aria-hidden="true"></ha-icon>`;
}
function K(s) {
  return g(s);
}
function E(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const n = Math.floor(s / 60), e = Math.floor(s % 60).toString().padStart(2, "0");
  return `${n}:${e}`;
}
function Q(s, n, e) {
  const t = Math.max(0, Number(s.media_position) || 0);
  if (n !== "playing" || e <= 0) return Math.min(t, e);
  const o = d(s.media_position_updated_at), r = Date.parse(o);
  return Number.isFinite(r) ? Math.min(e, t + Math.max(0, (Date.now() - r) / 1e3)) : Math.min(t, e);
}
class Z extends HTMLElement {
  constructor() {
    super();
    c(this, "_root");
    c(this, "_config", { type: "custom:yandex-station-player", entity: "" });
    c(this, "_hass");
    c(this, "_boundInput");
    c(this, "_boundChange");
    c(this, "_boundClick");
    this._root = this.attachShadow({ mode: "open" }), this._boundInput = (e) => this.handleField(e), this._boundChange = (e) => this.handleField(e), this._boundClick = (e) => this.handleClick(e);
  }
  setConfig(e) {
    this._config = { ...e }, this.render();
  }
  set hass(e) {
    this._hass = e, this.render();
  }
  connectedCallback() {
    this._root.addEventListener("input", this._boundInput), this._root.addEventListener("change", this._boundChange), this._root.addEventListener("click", this._boundClick), this.render();
  }
  disconnectedCallback() {
    this._root.removeEventListener("input", this._boundInput), this._root.removeEventListener("change", this._boundChange), this._root.removeEventListener("click", this._boundClick);
  }
  render() {
    var k;
    const e = this._config, t = Array.isArray(e.presets) ? e.presets : [], o = Array.isArray(e.quick_commands) ? e.quick_commands : [], r = { ...y, ...e.theme ?? {} }, l = Object.keys(((k = this._hass) == null ? void 0 : k.states) ?? {}).filter((i) => i.startsWith("media_player.")), u = (i, a) => e[i] === void 0 ? a : e[i] === !0, h = (i, a = "") => p(d(e[i], a)), $ = (i, a, v) => `<option value="${a}"${v === a ? " selected" : ""}>${i}</option>`, b = (i, a, v, z, P) => `<label>${a}<select data-field="${i}">${v.map((T, j) => $(z[j], T, d(e[i], P))).join("")}</select></label>`, w = (i, a, v, z, P, T) => `<label>${a}<input data-field="${i}" type="number" min="${v}" max="${z}" step="${P}" value="${p(d(e[i], String(T)))}"></label>`, m = (i, a, v) => `<label class="toggle"><input data-field="${i}" type="checkbox"${u(i, v) ? " checked" : ""}><span>${a}</span></label>`, L = l.map((i) => `<option value="${p(i)}"></option>`).join(""), S = t.map((i, a) => `<div class="array-row">
      <div class="row-head"><strong>Пресет ${a + 1}</strong><button type="button" data-action="remove-preset" data-index="${a}">Удалить</button></div>
      <div class="grid two"><label>Название<input data-array="presets" data-index="${a}" data-subfield="name" value="${p(d(i.name))}"></label><label>Иконка<input data-array="presets" data-index="${a}" data-subfield="icon" value="${p(d(i.icon, "mdi:music-note"))}"></label></div>
      <label>Команда Алисе<input data-array="presets" data-index="${a}" data-subfield="command" value="${p(d(i.command))}"></label>
      <div class="grid two"><label>ID медиа<input data-array="presets" data-index="${a}" data-subfield="media_content_id" value="${p(d(i.media_content_id))}"></label><label>Тип медиа<input data-array="presets" data-index="${a}" data-subfield="media_content_type" value="${p(d(i.media_content_type, "music"))}"></label></div>
    </div>`).join(""), M = o.map((i, a) => `<div class="array-row">
      <div class="row-head"><strong>Команда ${a + 1}</strong><button type="button" data-action="remove-command" data-index="${a}">Удалить</button></div>
      <div class="grid two"><label>Название<input data-array="quick_commands" data-index="${a}" data-subfield="name" value="${p(d(i.name))}"></label><label>Иконка<input data-array="quick_commands" data-index="${a}" data-subfield="icon" value="${p(d(i.icon, "mdi:gesture-tap-button"))}"></label></div>
      <label>Команда Алисе<input data-array="quick_commands" data-index="${a}" data-subfield="command" value="${p(d(i.command))}"></label>
    </div>`).join(""), I = Object.keys(y).map((i) => `<label>${i}<input data-theme="${i}" value="${p(r[i])}"></label>`).join("");
    this._root.innerHTML = `<style>${ee}</style><div class="editor">
      <section><h3>Основные</h3><label>Медиа-плеер<input list="ysp-media-entities" data-field="entity" value="${h("entity")}" required></label><datalist id="ysp-media-entities">${L}</datalist>
        <div class="grid two"><label>Название<input data-field="name" value="${h("name", "Алиса")}"></label><label>Иконка<input data-field="icon" value="${h("icon", "mdi:speaker-wireless")}"></label></div>
        <div class="grid two">${b("name_position", "Положение названия", ["left", "center", "right"], ["Слева", "По центру", "Справа"], "left")}${b("icon_position", "Положение иконки", ["left", "center", "right"], ["Слева", "По центру", "Справа"], "left")}</div>
      </section>
      <section><h3>Расположение</h3><div class="grid two">${b("layout", "Layout", ["horizontal", "vertical"], ["Горизонтальный", "Вертикальный"], "horizontal")}${b("artwork_position", "Обложка", ["left", "right", "top", "background"], ["Слева", "Справа", "Сверху", "Фон"], "left")}</div>
        <div class="grid two">${b("content_align", "Выравнивание трека", ["left", "center", "right"], ["Слева", "По центру", "Справа"], "left")}${b("controls_position", "Положение кнопок", ["left", "center", "right"], ["Слева", "По центру", "Справа"], "center")}</div>
        <div class="grid three">${w("content_size", "Ширина содержимого (%)", 50, 100, 1, 100)}${w("artwork_size", "Размер обложки (px)", 48, 220, 1, 80)}${w("artwork_blur", "Blur обложки (px)", 0, 40, 1, 8)}</div>
      </section>
      <section><h3>Внешний вид</h3><div class="grid two">${w("opacity", "Прозрачность", 0.1, 1, 0.01, 0.72)}${w("blur", "Blur карточки (px)", 0, 40, 1, 18)}</div><div class="toggles">${m("show_header", "Шапка", !0)}${m("show_artwork", "Обложка", !0)}${m("show_progress", "Прогресс", !0)}${m("show_controls", "Кнопки", !0)}${m("show_volume", "Громкость", !0)}${m("show_presets", "Пресеты", !0)}${m("show_quick_commands", "Команды", !0)}</div></section>
      <section><div class="section-head"><h3>Пресеты</h3><button type="button" data-action="add-preset">Добавить</button></div>${u("show_presets", !0) ? S || '<p class="hint">Пресетов пока нет.</p>' : '<p class="hint">Секция отключена переключателем «Пресеты».</p>'}</section>
      <section><div class="section-head"><h3>Быстрые команды</h3><button type="button" data-action="add-command">Добавить</button></div>${u("show_quick_commands", !0) ? M || '<p class="hint">Команд пока нет.</p>' : '<p class="hint">Секция отключена переключателем «Команды».</p>'}</section>
      <section><div class="section-head"><h3>Тема</h3><button type="button" data-action="reset-theme">Сбросить тему</button></div><div class="grid two">${I}</div></section>
    </div>`;
  }
  emit() {
    this.dispatchEvent(new CustomEvent("config-changed", { bubbles: !0, composed: !0, detail: { config: this._config } }));
  }
  handleField(e) {
    const t = e.target;
    if (!t) return;
    const o = t.dataset.field;
    if (o) {
      const u = t instanceof HTMLInputElement && t.type === "checkbox" ? t.checked : t instanceof HTMLInputElement && t.type === "number" ? Number(t.value) : t.value;
      t instanceof HTMLInputElement && t.type === "number" && t.value === "" ? delete this._config[o] : this._config[o] = u, this.emit(), (o === "artwork_position" || o === "show_presets" || o === "show_quick_commands") && this.render();
      return;
    }
    const r = t.dataset.array;
    if (r) {
      const u = Number(t.dataset.index), h = t.dataset.subfield, $ = this._config[r] ?? [];
      $[u] && h && ($[u][h] = t.value), this.emit();
      return;
    }
    const l = t.dataset.theme;
    l && (this._config.theme = { ...this._config.theme, [l]: t.value }, this.emit());
  }
  handleClick(e) {
    const t = e.target instanceof Element ? e.target.closest("[data-action]") : null, o = t == null ? void 0 : t.dataset.action;
    !t || !o || (o === "add-preset" ? this._config.presets = [...this._config.presets ?? [], { name: "", command: "", icon: "mdi:music-note" }] : o === "remove-preset" ? this._config.presets = (this._config.presets ?? []).filter((r, l) => l !== Number(t.dataset.index)) : o === "add-command" ? this._config.quick_commands = [...this._config.quick_commands ?? [], { name: "", command: "", icon: "mdi:gesture-tap-button" }] : o === "remove-command" ? this._config.quick_commands = (this._config.quick_commands ?? []).filter((r, l) => l !== Number(t.dataset.index)) : o === "reset-theme" && delete this._config.theme, this.emit(), this.render());
  }
}
customElements.get("yandex-station-player-editor") || customElements.define("yandex-station-player-editor", Z);
const ee = `
:host { display:block; color:var(--primary-text-color, #0f1e1c); font-family:var(--paper-font-body1_-_font-family, sans-serif); }
* { box-sizing:border-box; }
.editor { display:grid; gap:12px; }
section { padding:16px; border:1px solid var(--divider-color, rgba(0,137,123,.18)); border-radius:16px; background:var(--card-background-color, rgba(255,255,255,.72)); }
h3 { margin:0 0 12px; font-size:16px; }
label { display:grid; gap:5px; margin:0 0 10px; font-size:12px; color:var(--secondary-text-color, #3d4946); }
input, select { width:100%; min-height:38px; padding:8px 10px; border:1px solid var(--divider-color, #bcc9c5); border-radius:10px; color:var(--primary-text-color, #0f1e1c); background:var(--primary-background-color, #fff); font:inherit; }
input:focus, select:focus { outline:2px solid var(--accent-color, #26a69a); outline-offset:1px; }
.grid { display:grid; gap:10px; }.grid.two { grid-template-columns:repeat(2, minmax(0, 1fr)); }.grid.three { grid-template-columns:repeat(3, minmax(0, 1fr)); }
.toggles { display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:8px; }.toggle { display:flex; align-items:center; gap:8px; min-height:34px; }.toggle input { width:auto; min-height:auto; }
.section-head, .row-head { display:flex; align-items:center; justify-content:space-between; gap:8px; }.section-head h3 { margin-bottom:12px; }
button { border:0; border-radius:999px; padding:8px 12px; color:var(--text-primary-color, #00685d); background:var(--secondary-background-color, #d5e6e3); cursor:pointer; font:inherit; }.row-head button { color:var(--error-color, #ba1a1a); }
.array-row { margin-top:10px; padding:12px; border:1px solid var(--divider-color, rgba(0,137,123,.15)); border-radius:12px; }.hint { margin:0; color:var(--secondary-text-color, #3d4946); font-size:13px; }
@media (max-width:600px) { .grid.two, .grid.three { grid-template-columns:1fr; } }
`;
class te extends HTMLElement {
  constructor() {
    super();
    c(this, "_config");
    c(this, "_hass");
    c(this, "_root");
    c(this, "_boundClick");
    c(this, "_boundInput");
    c(this, "_boundPointerDown");
    c(this, "_boundPointerMove");
    c(this, "_boundPointerUp");
    c(this, "_volumeInteracting", !1);
    c(this, "_volumeOpen", !1);
    c(this, "_volumeCloseTimer", null);
    c(this, "_boundPointerOver");
    c(this, "_boundPointerOut");
    c(this, "_pendingRender", !1);
    c(this, "_localVolume", null);
    c(this, "_volumeSendTimer", null);
    c(this, "_volumeToSend", null);
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
      const o = _((t = this.mediaState()) == null ? void 0 : t.attributes.volume_level, 0, 1, this._localVolume);
      Math.abs(o - this._localVolume) < 0.03 && (this._localVolume = null);
    }
    this.render();
  }
  static getConfigForm() {
    return {
      schema: [
        { name: "entity", required: !0, selector: { entity: { filter: [{ domain: "media_player" }] } } },
        { name: "name", selector: { text: {} } },
        { name: "name_position", selector: { select: { options: ["left", "center", "right"], mode: "dropdown" } } },
        { name: "icon", selector: { icon: {} } },
        { name: "icon_position", selector: { select: { options: ["left", "center", "right"], mode: "dropdown" } } },
        { name: "layout", selector: { select: { options: ["horizontal", "vertical"], mode: "dropdown" } } },
        { name: "artwork_position", selector: { select: { options: ["left", "right", "top", "background"], mode: "dropdown" } } },
        { name: "content_align", selector: { select: { options: ["left", "center", "right"], mode: "dropdown" } } },
        { name: "controls_position", selector: { select: { options: ["left", "center", "right"], mode: "dropdown" } } },
        { name: "content_size", selector: { number: { min: 50, max: 100, step: 1, mode: "slider" } } },
        { name: "artwork_size", selector: { number: { min: 48, max: 220, step: 1, mode: "box" } } },
        { name: "artwork_blur", selector: { number: { min: 0, max: 40, step: 1, mode: "slider" } } },
        { name: "opacity", selector: { number: { min: 0.1, max: 1, step: 0.01, mode: "slider" } } },
        { name: "blur", selector: { number: { min: 0, max: 40, step: 1, mode: "slider" } } },
        { name: "show_header", selector: { boolean: {} } },
        { name: "show_artwork", selector: { boolean: {} } },
        { name: "show_progress", selector: { boolean: {} } },
        { name: "show_controls", selector: { boolean: {} } },
        { name: "show_volume", selector: { boolean: {} } },
        { name: "show_presets", selector: { boolean: {} } },
        { name: "show_quick_commands", selector: { boolean: {} } },
        { name: "presets", selector: { object: {} } },
        { name: "quick_commands", selector: { object: {} } },
        { name: "theme", selector: { theme: {} } }
      ],
      computeLabel: (e) => ({
        entity: "Медиа-плеер",
        name: "Название",
        name_position: "Положение названия",
        icon: "Иконка",
        icon_position: "Положение иконки",
        layout: "Расположение карточки",
        artwork_position: "Положение обложки",
        content_align: "Выравнивание трека",
        controls_position: "Положение кнопок",
        content_size: "Ширина содержимого (%)",
        artwork_size: "Размер обложки (px)",
        artwork_blur: "Размытие обложки (px)",
        opacity: "Прозрачность",
        blur: "Размытие фона (px)",
        show_header: "Показывать шапку",
        show_artwork: "Показывать обложку",
        show_progress: "Показывать прогресс",
        show_controls: "Показывать кнопки",
        show_volume: "Показывать громкость",
        show_presets: "Показывать пресеты",
        show_quick_commands: "Показывать команды",
        presets: "Пресеты (объект)",
        quick_commands: "Быстрые команды (объект)",
        theme: "Тема"
      })[e.name]
    };
  }
  static getConfigElement() {
    return document.createElement("yandex-station-player-editor");
  }
  static getStubConfig() {
    return {
      name: "Алиса",
      icon: "mdi:speaker-wireless",
      layout: "horizontal",
      artwork_position: "background",
      content_align: "left",
      controls_position: "center",
      show_header: !0,
      show_artwork: !0,
      show_progress: !0,
      show_controls: !0,
      show_volume: !0,
      show_presets: !0,
      show_quick_commands: !0
    };
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
    return { ...y, ...e };
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
    const e = this.config(), t = this.mediaState(), o = (t == null ? void 0 : t.attributes) ?? {}, r = this.mergedTheme(), l = this._localVolume ?? _(o.volume_level, 0, 1, 0.5), u = Math.max(0, Number(o.media_duration) || 0), h = Q(o, t == null ? void 0 : t.state, u), $ = u > 0 ? Math.round(h / u * 1e3) / 10 : 0, b = d(o.media_title, t ? "Ничего не играет" : "Ожидание данных"), w = d(o.media_artist || o.media_album_name, (t == null ? void 0 : t.state) === "unavailable" ? "Устройство недоступно" : "Яндекс.Станция"), m = d(o.entity_picture), L = _(e.artwork_size, 48, 220, 80), S = _(e.opacity, 0.1, 1, 0.72), M = _(e.blur, 0, 40, 18), I = _(e.artwork_blur, 0, 40, 8), k = e.content_align === "center" ? "center" : e.content_align === "right" ? "right" : "left", i = k === "center" ? "center" : k === "right" ? "flex-end" : "flex-start", a = k === "center" ? "center" : k === "right" ? "flex-end" : "flex-start", v = _(e.content_size, 50, 100, 100), z = e.controls_position === "left" ? "flex-start" : e.controls_position === "right" ? "flex-end" : "center", P = e.layout === "vertical" ? "ysp-vertical" : "", T = e.icon_position === "center" || e.icon_position === "right" ? e.icon_position : "left", j = e.name_position === "center" || e.name_position === "right" ? e.name_position : "left", U = e.show_header === !1 ? "" : `<header class="ysp-header">${["left", "center", "right"].map((f) => `<div class="ysp-header-slot ysp-slot-${f}">${T === f ? g(e.icon ?? "mdi:speaker-wireless", "ysp-device-icon") : ""}${j === f ? `<span class="ysp-name" title="${p(e.name ?? "Яндекс.Станция")}">${p(e.name ?? "Яндекс.Станция")}</span>` : ""}</div>`).join("")}</header>`, D = e.artwork_position === "right" ? "ysp-art-right" : e.artwork_position === "top" ? "ysp-art-top" : e.artwork_position === "background" ? "ysp-art-background" : "", H = "", R = (t == null ? void 0 : t.state) === "unavailable" || !t, V = (t == null ? void 0 : t.state) === "playing", C = o.is_volume_muted === !0 || l === 0, O = C ? "mdi:volume-off" : "mdi:volume-high", Y = C ? "mdi:volume-high" : "mdi:volume-mute", N = this.normalizedPresets(), A = this.normalizedCommands(), B = `
      ${G}
      :host { --ysp-primary:${x(d(r.primary), y.primary)}; --ysp-accent:${x(d(r.accent), y.accent)}; --ysp-text:${x(d(r.text), y.text)}; --ysp-secondary:${x(d(r.secondary), y.secondary)}; --ysp-surface:${x(d(r.surface), y.surface)}; --ysp-background:${x(d(r.background), y.background)}; --ysp-on-primary:${x(d(r.on_primary), y.on_primary)}; --ysp-border:${x(d(r.border), y.border)}; --ysp-shadow:${x(d(r.shadow), y.shadow)}; --ysp-art-size:${L}px; --ysp-blur:${M}px; --ysp-controls-position:${z}; --ysp-align:${k}; --ysp-align-items:${i}; --ysp-content-justify:${a}; --ysp-content-size:${v}%; }
      .ysp-card { opacity:${S}; }
      .ysp-card.ysp-art-background .ysp-art-bg { filter:blur(${I}px) brightness(0.85); }
    `, W = e.show_artwork === !1 ? "" : m ? `<img class="ysp-art" src="${p(m)}" alt="Обложка текущего трека">` : `<div class="ysp-art ysp-art-placeholder" aria-label="Нет обложки">${g("mdi:music-note", "ysp-art-icon")}</div>`;
    this._root.innerHTML = `
      <style>${B}</style>
      <article class="ysp-card ${P} ${D} ${H} ${this._volumeInteracting ? "ysp-volume-interacting" : ""}" aria-label="${p(e.name ?? "Яндекс.Станция")}" data-unavailable="${R}">
        <div class="ysp-content">
          ${U}
          <section class="ysp-track">${e.artwork_position === "background" ? "" : W}<div class="ysp-track-info"><div class="ysp-title" title="${p(b)}">${p(b)}</div><div class="ysp-artist" title="${p(w)}">${p(w)}</div></div></section>${m && e.artwork_position === "background" ? `<div class="ysp-art-bg" style="background-image:url(${p(m)})" aria-hidden="true"></div>` : ""}
          ${e.show_progress !== !1 && u > 0 ? `<section class="ysp-progress" aria-label="Перемотка и громкость"><span>${E(h)}</span><input class="ysp-seek-range ysp-seek" type="range" min="0" max="${u}" step="1" value="${h}" style="--ysp-seek-pct:${$}%" data-action="seek" aria-label="Перемотка аудио" aria-valuetext="${E(h)} из ${E(u)}">${e.show_volume !== !1 ? `<span class="ysp-volume-side${this._volumeOpen ? " ysp-volume-open" : ""}"><button class="ysp-volume-icon-button" type="button" data-action="mute" aria-label="${C ? "Включить звук" : "Выключить звук"}" aria-haspopup="true">${g(O, "ysp-volume-glyph")}</button><span class="ysp-volume-popover" role="dialog" aria-label="Громкость"><input class="ysp-volume-vertical" type="range" min="0" max="1" step="0.01" value="${l}" data-action="volume" aria-label="Громкость" aria-valuetext="${Math.round(l * 100)} процентов" style="--ysp-volume-pct:${Math.round(l * 100)}%"></span></span>` : ""}<span>${E(u)}</span></section>` : ""}
          ${e.show_controls !== !1 ? `<section class="ysp-controls" aria-label="Управление воспроизведением"><button class="ysp-button" type="button" data-action="previous" aria-label="Предыдущий трек">${g("mdi:skip-previous", "ysp-control-icon")}</button><button class="ysp-button primary" type="button" data-action="${V ? "pause" : "play"}" aria-label="${V ? "Пауза" : "Воспроизвести"}">${g(V ? "mdi:pause" : "mdi:play", "ysp-control-icon")}</button><button class="ysp-button" type="button" data-action="next" aria-label="Следующий трек">${g("mdi:skip-next", "ysp-control-icon")}</button></section>` : ""}
          ${e.show_volume !== !1 && (e.show_progress === !1 || u <= 0) ? `<section class="ysp-volume" aria-label="Громкость"><span class="ysp-volume-icon">${g(O, "ysp-volume-glyph")}</span><input class="ysp-range" type="range" min="0" max="1" step="0.01" value="${l}" data-action="volume" aria-label="Громкость"><button class="ysp-chip ysp-mute-button" type="button" data-action="mute" aria-label="${C ? "Включить звук" : "Выключить звук"}">${g(Y, "ysp-chip-icon")}</button></section>` : ""}
          ${e.show_presets !== !1 && N.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Избранное</p><div class="ysp-preset-row">${N.map((f, q) => `<button class="ysp-preset" type="button" data-action="preset" data-index="${q}">${K(f.icon)}<span>${p(f.name)}</span></button>`).join("")}</div></section>` : ""}
          ${e.show_quick_commands !== !1 && A.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Быстрые команды</p><div class="ysp-command-row">${A.map((f, q) => `<button class="ysp-command" type="button" data-action="command" data-index="${q}">${g(f.icon ?? "mdi:gesture-tap-button")}<span>${p(f.name)}</span></button>`).join("")}</div></section>` : ""}
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
    const o = t.dataset.action;
    if (o !== "volume") {
      if (o === "play" && this.call("media_play"), o === "pause" && this.call("media_pause"), o === "previous" && this.call("media_previous_track"), o === "next" && this.call("media_next_track"), o === "mute") {
        const l = ((r = this.mediaState()) == null ? void 0 : r.attributes) ?? {};
        this.call("volume_mute", { is_volume_muted: l.is_volume_muted !== !0 });
      }
      if (o === "command") {
        const l = this.normalizedCommands()[Number(t.dataset.index)];
        l && this.call("play_media", { media_content_id: l.command, media_content_type: "command" });
      }
      if (o === "preset") {
        const l = this.normalizedPresets()[Number(t.dataset.index)];
        if (!l) return;
        this.call("play_media", {
          media_content_id: l.command ?? l.media_content_id,
          media_content_type: l.command ? "command" : l.media_content_type ?? "music"
        });
      }
    }
  }
  handleInput(e) {
    const t = e.target instanceof HTMLInputElement ? e.target : null;
    if (t) {
      if (t.dataset.action === "volume") {
        const o = _(Number(t.value), 0, 1, 0), r = Math.round(o * 100);
        this._localVolume = o, t.setAttribute("aria-valuetext", `${r} процентов`), t.style.setProperty("--ysp-volume-pct", `${r}%`), t.setAttribute("title", `${r}%`), this.sendVolume(o);
      }
      t.dataset.action === "seek" && (this.call("media_seek", { seek_position: Number(t.value) }), t.setAttribute("aria-valuetext", `${E(Number(t.value))} из ${E(Number(t.max))}`), t.style.setProperty("--ysp-seek-pct", `${Number(t.max) > 0 ? Number(t.value) / Number(t.max) * 100 : 0}%`));
    }
  }
  handleVolumePointerDown(e) {
    var t;
    if (e.target instanceof HTMLInputElement && e.target.dataset.action === "volume") {
      this._volumeInteracting = !0, (t = this._root.querySelector(".ysp-card")) == null || t.classList.add("ysp-volume-interacting");
      const o = e;
      o.preventDefault();
      try {
        e.target.setPointerCapture(o.pointerId);
      } catch {
      }
      this.setVolumeFromPointer(e.target, e);
    }
  }
  handleVolumePointerMove(e) {
    !this._volumeInteracting || !(e.target instanceof HTMLInputElement) || e.target.dataset.action !== "volume" || this.setVolumeFromPointer(e.target, e);
  }
  setVolumeFromPointer(e, t) {
    const o = e.getBoundingClientRect(), r = _(o.height > 0 ? (o.bottom - t.clientY) / o.height : 0, 0, 1, 0);
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
customElements.get("yandex-station-player") || customElements.define("yandex-station-player", te);
const F = window.customCards ?? (window.customCards = []);
F.some((s) => s.type === "yandex-station-player") || F.push({
  type: "yandex-station-player",
  name: "Yandex Station Player",
  description: "Mint Teal media player for Yandex.Station media_player entities",
  preview: !0,
  documentationURL: "https://github.com/AlexxIT/YandexStation",
  getEntitySuggestion: (s, n) => n.startsWith("media_player.") && s.states[n] ? { config: { type: "custom:yandex-station-player", entity: n } } : null
});
