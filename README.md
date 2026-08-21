# Yandex Station Player Card — Mint Teal

Кастомная Lovelace-карточка для `media_player` из интеграции [AlexxIT/YandexStation](https://github.com/AlexxIT/YandexStation). Внешний вид перенесён из приложенного Stitch-шаблона: Mint Teal, Manrope/Work Sans, мягкая glass-подложка, крупная кнопка Play, обложка, прогресс, громкость, пресеты и команды Алисе.

## Установка

1. Скопируйте `dist/yandex-station-player-card.js` в `/config/www/community/yandex-station-player-card/yandex-station-player-card.js`.
2. Добавьте ресурс в Lovelace:

```yaml
url: /local/community/yandex-station-player-card/yandex-station-player-card.js
  type: module
```

3. Перезагрузите браузер с очисткой кэша (`Ctrl+F5`).
4. В конфигурации карточки замените `media_player.yandex_station_...` на точный `entity_id` из **Настройки → Устройства и службы → Сущности**.

## Карточка

```yaml
type: custom:yandex-station-player
entity: media_player.yandex_station_REPLACE_WITH_EXACT_ENTITY
name: Яндекс.Станция

layout: horizontal
artwork_position: left
content_align: left
controls_position: center
artwork_size: 80
opacity: 0.72
blur: 18
volume_on_hover: false

show_header: true
show_artwork: true
show_progress: true
show_controls: true
show_volume: true
show_presets: true
show_quick_commands: true

presets:
  - name: Моя волна
    command: включи мою волну
    icon: ♫
  - name: Радио
    command: включи радио
    icon: ◉
  - name: Музыка
    command: включи мою музыку
    icon: ♪

quick_commands:
  - name: Тише
    command: сделай потише
    icon: −
  - name: Громче
    command: сделай погромче
    icon: +
  - name: Стоп
    command: останови музыку
    icon: ■

theme:
  primary: '#00685d'
  accent: '#26a69a'
  text: '#0f1e1c'
  secondary: '#3d4946'
  surface: '#d5e6e3'
  background: 'rgba(255,255,255,.72)'
  on_primary: '#ffffff'
  border: 'rgba(0,137,123,.15)'
  shadow: '0 2px 8px rgba(0,137,123,.08)'
```

## Прямые медиа-пресеты

Для поддерживаемых интеграцией числовых идентификаторов Яндекс Музыки используйте `media_content_id` и реальный тип:

```yaml
presets:
  - name: Плейлист
    media_content_id: '60062'
    media_content_type: playlist
    icon: ♪
```

Команды отправляются через проверенный интеграцией generic action `media_player.play_media`:

- TTS-пресет: `media_content_type: text`;
- команда Алисе: `media_content_type: command`;
- прямой медиа-пресет: заданный `media_content_type`.

Для облачного режима у YandexStation есть ограничение текста TTS до 100 символов; локальный режим поддерживает больше возможностей и обратную связь по текущему треку.

## Совместимость

Карточка использует только generic действия Home Assistant: `media_play`, `media_pause`, `media_previous_track`, `media_next_track`, `media_seek`, `volume_set`, `volume_mute`, `play_media`. Если конкретная станция не поддерживает seek или не отдаёт `entity_picture`, секция перемотки/обложка деградирует без ошибки.

Сборка проверена локально; работу команд необходимо проверить на реальном entity после подстановки его точного ID.
