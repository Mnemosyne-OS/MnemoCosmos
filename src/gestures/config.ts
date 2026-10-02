/** What this cartridge's hand gestures are called and how fast they go. */
export const CARTRIDGE_ID = '@mnemosyne-plugins/mnemo-cosmos';
/** One speed per hand move the person can tune: sliding the sky and zooming. */
export const SPEED_KEYS = ['move', 'zoom'] as const;
export type SpeedKey = (typeof SPEED_KEYS)[number];
