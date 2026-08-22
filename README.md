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
icon: yandex:station-mini

layout: horizontal
artwork_position: left
content_align: left
controls_position: center
artwork_size: 80
opacity: 0.72
blur: 18

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
    icon: mdi:radio
  - name: Радио
    command: включи радио
    icon: mdi:radio-tower
  - name: Музыка
    command: включи мою музыку
    icon: mdi:music

quick_commands:
  - name: Тише
    command: сделай потише
    icon: mdi:volume-minus
  - name: Громче
    command: сделай погромче
    icon: mdi:volume-plus
  - name: Стоп
    command: останови музыку
    icon: mdi:stop

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
    icon: mdi:playlist-music
```

Ползунок перемотки отображается при наличии у entity атрибутов `media_duration` и `media_position` и отправляет `media_player.media_seek` с `seek_position` в секундах. Для локального режима YandexStation интеграция поддерживает перемотку, если текущий плеер отдал длительность трека.

Ползунок громкости и кнопка mute встроены в строку прогресса и появляются при наведении курсора на эту строку (или фокусе с клавиатуры). Если у плеера нет `media_duration`, строка прогресса не рендерится, и тогда отображается отдельная секция громкости в исходном виде.

В `presets[].icon` и `quick_commands[].icon` поддерживаются иконки Home Assistant в формате `mdi:name`, например `mdi:music`, `mdi:radio`, `mdi:volume-minus` или `mdi:stop`.

Параметр `icon` задаёт иконку Home Assistant рядом с названием станции. Поддерживаются `mdi:*`, `hass:*` и иконки интеграции `yandex:*`, например `yandex:station-mini`. Для отображения `yandex:*` соответствующий набор иконок должен быть установлен и зарегистрирован в Home Assistant; сама карточка передаёт значение в `ha-icon`, но не добавляет набор иконок. Если параметр не задан, используется `mdi:speaker-wireless`.

Команды отправляются через проверенный интеграцией generic action `media_player.play_media`:

- TTS-пресет: `media_content_type: text`;
- команда Алисе: `media_content_type: command`;
- прямой медиа-пресет: заданный `media_content_type`.

Для облачного режима у YandexStation есть ограничение текста TTS до 100 символов; локальный режим поддерживает больше возможностей и обратную связь по текущему треку.

## Совместимость

Карточка использует только generic действия Home Assistant: `media_play`, `media_pause`, `media_previous_track`, `media_next_track`, `media_seek`, `volume_set`, `volume_mute`, `play_media`. Если конкретная станция не поддерживает seek или не отдаёт `entity_picture`, секция перемотки/обложка деградирует без ошибки.

Сборка проверена локально; работу команд необходимо проверить на реальном entity после подстановки его точного ID.
