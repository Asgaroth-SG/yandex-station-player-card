interface CustomCardRegistration {
  type?: string;
  name?: string;
  description?: string;
  preview?: boolean;
}

type MediaState = {
  state: string;
  attributes: Record<string, unknown>;
};

type HomeAssistant = {
  states: Record<string, MediaState>;
  callService: (domain: string, service: string, data: Record<string, unknown>) => Promise<void> | void;
};

type Preset = {
  name: string;
  command?: string;
  media_content_id?: string;
  media_content_type?: string;
  icon?: string;
};

type QuickCommand = {
  name: string;
  command: string;
  icon?: string;
};

type CardTheme = Partial<{
  primary: string;
  accent: string;
  text: string;
  secondary: string;
  surface: string;
  background: string;
  on_primary: string;
  border: string;
  shadow: string;
}>;

type CardConfig = {
  type: string;
  entity: string;
  name?: string;
  icon?: string;
  opacity?: number;
  blur?: number;
  artwork_size?: number;
  layout?: 'horizontal' | 'vertical';
  artwork_position?: 'left' | 'right' | 'top';
  content_align?: 'left' | 'center' | 'right';
  controls_position?: 'left' | 'center' | 'right';
  show_header?: boolean;
  show_artwork?: boolean;
  show_progress?: boolean;
  show_controls?: boolean;
  show_volume?: boolean;
  show_presets?: boolean;
  show_quick_commands?: boolean;
  volume_on_hover?: boolean; // @deprecated, громкость теперь встроена в прогресс-бар
  presets?: Preset[];
  quick_commands?: QuickCommand[];
  theme?: CardTheme;
};

type NormalizedPreset = Preset & { icon: string };

const DEFAULT_THEME: Required<CardTheme> = {
  primary: '#00685d',
  accent: '#26a69a',
  text: '#0f1e1c',
  secondary: '#3d4946',
  surface: '#ffffff',
  background: 'rgba(255,255,255,.72)',
  on_primary: '#ffffff',
  border: 'rgba(0,137,123,.15)',
  shadow: '0 2px 8px rgba(0,137,123,.08)',
};

const CARD_STYLE = `
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

function clamp(value: unknown, min: number, max: number, fallback: number): number {
  const parsed = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(parsed) ? Math.min(max, Math.max(min, parsed)) : fallback;
}

function safeCss(value: string, fallback: string): string {
  return /[<>`{};"']/.test(value) ? fallback : value;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}

function asText(value: unknown, fallback = ''): string {
  return typeof value === 'string' || typeof value === 'number' ? String(value) : fallback;
}

function renderHaIcon(icon: string, className = 'ysp-action-icon'): string {
  const normalized = icon.trim();
  const iconName = /^(mdi|hass|yandex):[a-z0-9-]+$/i.test(normalized) ? normalized : 'mdi:help-circle-outline';
  return `<ha-icon class="ysp-icon ${escapeHtml(className)}" icon="${escapeHtml(iconName)}" aria-hidden="true"></ha-icon>`;
}

function renderPresetIcon(icon: string): string {
  return renderHaIcon(icon);
}

function formatTime(value: number): string {
  if (!Number.isFinite(value) || value < 0) return '0:00';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function currentMediaPosition(attributes: Record<string, unknown>, state: string | undefined, duration: number): number {
  const position = Math.max(0, Number(attributes.media_position) || 0);
  if (state !== 'playing' || duration <= 0) return Math.min(position, duration);

  const updatedAt = asText(attributes.media_position_updated_at);
  const updatedTimestamp = Date.parse(updatedAt);
  if (!Number.isFinite(updatedTimestamp)) return Math.min(position, duration);

  return Math.min(duration, position + Math.max(0, (Date.now() - updatedTimestamp) / 1000));
}

class YandexStationPlayerCard extends HTMLElement {
  private _config?: CardConfig;
  private _hass?: HomeAssistant;
  private _root: ShadowRoot;
  private _boundClick: (event: Event) => void;
  private _boundInput: (event: Event) => void;

  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'open' });
    this._boundClick = (event) => this.handleClick(event);
    this._boundInput = (event) => this.handleInput(event);
  }

  setConfig(config: CardConfig): void {
    if (!config || typeof config.entity !== 'string' || !config.entity.includes('.')) {
      throw new Error('Yandex Station Player: укажите точный entity, например media_player.yandex_station_...');
    }
    if (!config.entity.startsWith('media_player.')) {
      throw new Error('Yandex Station Player: entity должен принадлежать домену media_player.');
    }
    this._config = { ...config };
    this.render();
  }

  set hass(value: HomeAssistant) {
    this._hass = value;
    this.render();
  }

  getCardSize(): number {
    return 5;
  }

  connectedCallback(): void {
    this._root.addEventListener('click', this._boundClick);
    this._root.addEventListener('input', this._boundInput);
  }

  disconnectedCallback(): void {
    this._root.removeEventListener('click', this._boundClick);
    this._root.removeEventListener('input', this._boundInput);
  }

  private config(): CardConfig {
    return this._config ?? { type: 'custom:yandex-station-player', entity: '' };
  }

  private mediaState(): MediaState | undefined {
    return this._hass?.states[this.config().entity];
  }

  private mergedTheme(): Required<CardTheme> {
    const configTheme = this.config().theme ?? {};
    return { ...DEFAULT_THEME, ...configTheme };
  }

  private normalizedPresets(): NormalizedPreset[] {
    const presets: Preset[] = Array.isArray(this.config().presets) ? this.config().presets ?? [] : [];
    return presets.filter((preset): preset is Preset => {
      if (!preset || typeof preset.name !== 'string') return false;
      return typeof preset.command === 'string' || typeof preset.media_content_id === 'string';
    }).map((preset) => ({ ...preset, icon: typeof preset.icon === 'string' ? preset.icon : 'mdi:music-note' }));
  }

  private normalizedCommands(): QuickCommand[] {
    const commands: QuickCommand[] = Array.isArray(this.config().quick_commands) ? this.config().quick_commands ?? [] : [];
    return commands.filter((item): item is QuickCommand => Boolean(item && typeof item.name === 'string' && typeof item.command === 'string'));
  }

  private render(): void {
    if (!this._config) return;
    const config = this.config();
    const state = this.mediaState();
    const attributes = state?.attributes ?? {};
    const theme = this.mergedTheme();
    const volume = clamp(attributes.volume_level, 0, 1, 0.5);
    const duration = Math.max(0, Number(attributes.media_duration) || 0);
    const position = currentMediaPosition(attributes, state?.state, duration);
    const seekPercent = duration > 0 ? Math.round((position / duration) * 1000) / 10 : 0;
    const title = asText(attributes.media_title, state ? 'Ничего не играет' : 'Ожидание данных');
    const artist = asText(attributes.media_artist || attributes.media_album_name, state?.state === 'unavailable' ? 'Устройство недоступно' : 'Яндекс.Станция');
    const picture = asText(attributes.entity_picture);
    const artworkSize = clamp(config.artwork_size, 48, 220, 80);
    const opacity = clamp(config.opacity, 0.1, 1, 0.72);
    const blur = clamp(config.blur, 0, 40, 18);
    const align = config.content_align === 'center' ? 'center' : config.content_align === 'right' ? 'right' : 'left';
    const alignItems = align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start';
    const controlsPosition = config.controls_position === 'left' ? 'flex-start' : config.controls_position === 'right' ? 'flex-end' : 'center';
    const layout = config.layout === 'vertical' ? 'ysp-vertical' : '';
    const artworkPosition = config.artwork_position === 'right' ? 'ysp-art-right' : config.artwork_position === 'top' ? 'ysp-art-top' : '';
    const hoverVolume = ''; // @deprecated: volume_on_hover больше не используется
    const unavailable = state?.state === 'unavailable' || !state;
    const isPlaying = state?.state === 'playing';
    const isMuted = attributes.is_volume_muted === true || volume === 0;
    const volumeIcon = isMuted ? 'mdi:volume-off' : 'mdi:volume-high';
    const muteIcon = isMuted ? 'mdi:volume-high' : 'mdi:volume-mute';
    const presets = this.normalizedPresets();
    const commands = this.normalizedCommands();

    const styles = `
      ${CARD_STYLE}
      :host { --ysp-primary:${safeCss(asText(theme.primary), DEFAULT_THEME.primary)}; --ysp-accent:${safeCss(asText(theme.accent), DEFAULT_THEME.accent)}; --ysp-text:${safeCss(asText(theme.text), DEFAULT_THEME.text)}; --ysp-secondary:${safeCss(asText(theme.secondary), DEFAULT_THEME.secondary)}; --ysp-surface:${safeCss(asText(theme.surface), DEFAULT_THEME.surface)}; --ysp-background:${safeCss(asText(theme.background), DEFAULT_THEME.background)}; --ysp-on-primary:${safeCss(asText(theme.on_primary), DEFAULT_THEME.on_primary)}; --ysp-border:${safeCss(asText(theme.border), DEFAULT_THEME.border)}; --ysp-shadow:${safeCss(asText(theme.shadow), DEFAULT_THEME.shadow)}; --ysp-art-size:${artworkSize}px; --ysp-blur:${blur}px; --ysp-controls-position:${controlsPosition}; --ysp-align:${align}; --ysp-align-items:${alignItems}; }
      .ysp-card { opacity:${opacity}; }
    `;
    const artwork = config.show_artwork === false ? '' : picture
      ? `<img class="ysp-art" src="${escapeHtml(picture)}" alt="Обложка текущего трека">`
      : `<div class="ysp-art ysp-art-placeholder" aria-label="Нет обложки">${renderHaIcon('mdi:music-note', 'ysp-art-icon')}</div>`;

    this._root.innerHTML = `
      <style>${styles}</style>
      <article class="ysp-card ${layout} ${artworkPosition} ${hoverVolume}" aria-label="${escapeHtml(config.name ?? 'Яндекс.Станция')}" data-unavailable="${unavailable}">
        <div class="ysp-content">
          ${config.show_header !== false ? `<header class="ysp-header">${renderHaIcon(config.icon ?? 'mdi:speaker-wireless', 'ysp-device-icon')}<span class="ysp-name">${escapeHtml(config.name ?? 'Яндекс.Станция')}</span></header>` : ''}
          <section class="ysp-track">${artwork}<div class="ysp-track-info"><div class="ysp-title" title="${escapeHtml(title)}">${escapeHtml(title)}</div><div class="ysp-artist" title="${escapeHtml(artist)}">${escapeHtml(artist)}</div></div></section>
          ${config.show_progress !== false && duration > 0 ? `<section class="ysp-progress" aria-label="Перемотка и громкость"><span>${formatTime(position)}</span><input class="ysp-seek-range ysp-seek" type="range" min="0" max="${duration}" step="1" value="${position}" style="--ysp-seek-pct:${seekPercent}%" data-action="seek" aria-label="Перемотка аудио" aria-valuetext="${formatTime(position)} из ${formatTime(duration)}">${config.show_volume !== false ? `<span class="ysp-volume-side"><button class="ysp-volume-icon-button" type="button" data-action="mute" aria-label="${isMuted ? 'Включить звук' : 'Выключить звук'}" aria-haspopup="true">${renderHaIcon(volumeIcon, 'ysp-volume-glyph')}</button><span class="ysp-volume-popover" role="dialog" aria-label="Громкость"><input class="ysp-volume-vertical" type="range" min="0" max="1" step="0.01" value="${volume}" data-action="volume" aria-label="Громкость" aria-valuetext="${Math.round(volume * 100)} процентов" style="--ysp-volume-pct:${Math.round(volume * 100)}%"></span></span>` : ''}<span>${formatTime(duration)}</span></section>` : ''}
          ${config.show_controls !== false ? `<section class="ysp-controls" aria-label="Управление воспроизведением"><button class="ysp-button" type="button" data-action="previous" aria-label="Предыдущий трек">${renderHaIcon('mdi:skip-previous', 'ysp-control-icon')}</button><button class="ysp-button primary" type="button" data-action="${isPlaying ? 'pause' : 'play'}" aria-label="${isPlaying ? 'Пауза' : 'Воспроизвести'}">${renderHaIcon(isPlaying ? 'mdi:pause' : 'mdi:play', 'ysp-control-icon')}</button><button class="ysp-button" type="button" data-action="next" aria-label="Следующий трек">${renderHaIcon('mdi:skip-next', 'ysp-control-icon')}</button></section>` : ''}
          ${config.show_volume !== false && (config.show_progress === false || duration <= 0) ? `<section class="ysp-volume" aria-label="Громкость"><span class="ysp-volume-icon">${renderHaIcon(volumeIcon, 'ysp-volume-glyph')}</span><input class="ysp-range" type="range" min="0" max="1" step="0.01" value="${volume}" data-action="volume" aria-label="Громкость"><button class="ysp-chip ysp-mute-button" type="button" data-action="mute" aria-label="${isMuted ? 'Включить звук' : 'Выключить звук'}">${renderHaIcon(muteIcon, 'ysp-chip-icon')}</button></section>` : ''}
          ${config.show_presets !== false && presets.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Избранное</p><div class="ysp-preset-row">${presets.map((preset, index) => `<button class="ysp-preset" type="button" data-action="preset" data-index="${index}">${renderPresetIcon(preset.icon)}<span>${escapeHtml(preset.name)}</span></button>`).join('')}</div></section>` : ''}
          ${config.show_quick_commands !== false && commands.length > 0 ? `<section class="ysp-section"><p class="ysp-label">Быстрые команды</p><div class="ysp-command-row">${commands.map((command, index) => `<button class="ysp-command" type="button" data-action="command" data-index="${index}">${renderHaIcon(command.icon ?? 'mdi:gesture-tap-button')}<span>${escapeHtml(command.name)}</span></button>`).join('')}</div></section>` : ''}
        </div>
      </article>
    `;
  }

  private call(service: string, data: Record<string, unknown> = {}): void {
    if (!this._hass || !this._config) return;
    void this._hass.callService('media_player', service, { entity_id: this._config.entity, ...data });
  }

  private handleClick(event: Event): void {
    const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-action]') : null;
    if (!target) return;
    const action = target.dataset.action;

    if (action === 'play') this.call('media_play');
    if (action === 'pause') this.call('media_pause');
    if (action === 'previous') this.call('media_previous_track');
    if (action === 'next') this.call('media_next_track');
    if (action === 'mute') {
      const attributes = this.mediaState()?.attributes ?? {};
      this.call('volume_mute', { is_volume_muted: attributes.is_volume_muted !== true });
    }
    if (action === 'command') {
      const item = this.normalizedCommands()[Number(target.dataset.index)];
      if (item) this.call('play_media', { media_content_id: item.command, media_content_type: 'command' });
    }
    if (action === 'preset') {
      const item = this.normalizedPresets()[Number(target.dataset.index)];
      if (!item) return;
      this.call('play_media', {
        media_content_id: item.command ?? item.media_content_id,
        media_content_type: item.command ? 'text' : (item.media_content_type ?? 'music'),
      });
    }
  }

  private handleInput(event: Event): void {
    const target = event.target instanceof HTMLInputElement ? event.target : null;
    if (!target) return;
    if (target.dataset.action === 'volume') {
      this.call('volume_set', { volume_level: Number(target.value) });
      target.setAttribute('aria-valuetext', `${Math.round(Number(target.value) * 100)} процентов`);
      target.style.setProperty('--ysp-volume-pct', `${Math.round(Number(target.value) * 100)}%`);
    }
    if (target.dataset.action === 'seek') {
      this.call('media_seek', { seek_position: Number(target.value) });
      target.setAttribute('aria-valuetext', `${formatTime(Number(target.value))} из ${formatTime(Number(target.max))}`);
      target.style.setProperty('--ysp-seek-pct', `${Number(target.max) > 0 ? (Number(target.value) / Number(target.max)) * 100 : 0}%`);
    }
  }
}

if (!customElements.get('yandex-station-player')) {
  customElements.define('yandex-station-player', YandexStationPlayerCard);
}

const cards = ((window as Window & { customCards?: CustomCardRegistration[] }).customCards ??= []);
if (!cards.some((card) => card.type === 'yandex-station-player')) {
  cards.push({
    type: 'yandex-station-player',
    name: 'Yandex Station Player',
    description: 'Mint Teal media player for Yandex.Station media_player entities',
    preview: true,
  });
}
