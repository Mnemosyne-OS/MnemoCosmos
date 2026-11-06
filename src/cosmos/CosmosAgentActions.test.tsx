/**
 * CosmosAgentActions — an iframe served an older SDK (no onAgentActions) keeps its window:
 * it warns and serves nothing, it never throws the page down.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import type { CosmosAgentContext } from './cosmosAgent';

vi.mock('@mnemosyne_os/cartridge-sdk', () => ({ MnemoCartridgeSDK: class { pluginId = 'x'; } }));

const realParent = window.parent;
afterEach(() => { Object.defineProperty(window, 'parent', { value: realParent, configurable: true }); vi.restoreAllMocks(); });

describe('CosmosAgentActions', () => {
  it('an SDK without onAgentActions warns instead of breaking the window', async () => {
    Object.defineProperty(window, 'parent', { value: {}, configurable: true });
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    const { CosmosAgentActions } = await import('./CosmosAgentActions');
    expect(() => render(<CosmosAgentActions {...({} as CosmosAgentContext)} />)).not.toThrow();
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('no onAgentActions'));
  });
});
