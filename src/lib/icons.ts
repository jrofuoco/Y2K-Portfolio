export type Y2KIconName =
  | 'arrow-tr'
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-up'
  | 'sparkle'
  | 'sparkle-outline'
  | 'starburst'
  | 'check'
  | 'alert'
  | 'menu'
  | 'close';

export const ICON_MARKUP: Record<Y2KIconName, string> = {
  'arrow-tr':
    '<path d="M4.25 11.75L11.75 4.25M6 4.25H11.75V10" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="miter" />',
  'arrow-right':
    '<path d="M2.5 8H13M8.75 3.75L13.25 8L8.75 12.25" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="miter" />',
  'arrow-left':
    '<path d="M13.5 8H3M7.25 3.75L2.75 8L7.25 12.25" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="miter" />',
  'arrow-up':
    '<path d="M8 13.5V3M3.75 7.25L8 2.75L12.25 7.25" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="miter" />',
  sparkle:
    '<path d="M8 0.75L9.85 6.15L15.25 8L9.85 9.85L8 15.25L6.15 9.85L0.75 8L6.15 6.15Z" fill="currentColor" />',
  'sparkle-outline':
    '<path d="M8 1.5L9.65 6.35L14.5 8L9.65 9.65L8 14.5L6.35 9.65L1.5 8L6.35 6.35Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="miter" />',
  starburst:
    '<path d="M8 1.5V14.5M1.5 8H14.5M3.4 3.4L12.6 12.6M12.6 3.4L3.4 12.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square" />',
  check:
    '<path d="M3 8.5L6.5 12L13 4.5" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="square" stroke-linejoin="miter" />',
  alert:
    '<path d="M8 2.2L14.3 13.2H1.7Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="miter" /><path d="M8 6.4V9.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" /><circle cx="8" cy="11.4" r="0.75" fill="currentColor" />',
  menu:
    '<path d="M2 4.5H14M2 8H14M2 11.5H14" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="square" />',
  close:
    '<path d="M3.5 3.5L12.5 12.5M12.5 3.5L3.5 12.5" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="square" />',
};

export function renderIconSvg(name: Y2KIconName, className = ''): string {
  const classes = className ? `y2k-icon ${className}` : 'y2k-icon';
  return `<svg class="${classes}" viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true" focusable="false">${ICON_MARKUP[name]}</svg>`;
}
