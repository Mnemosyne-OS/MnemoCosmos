import { describe, expect, it } from 'vitest';
import { slideLook, zoomLook } from './moves';
import { drag, MAX_FOV, MIN_FOV } from '../cosmos/sky';

const look = { ra: 90, dec: 20, fov: 60 };

describe('the hand slides the sky the way the mouse does', () => {
  it('at 1× it is exactly the mouse drag', () => {
    expect(slideLook(look, 30, -10, 800)).toEqual(drag(look, 30, -10, 800));
  });
  it('the speed scales the slide', () => {
    expect(slideLook(look, 30, -10, 800, 2)).toEqual(drag(look, 60, -20, 800));
  });
  it('an unreadable step leaves the sky where it is', () => {
    expect(slideLook(look, Number.NaN, 0, 800)).toBeNull();
    expect(slideLook(look, 1, 1, 0)).toBeNull();
  });
});

describe('closer and farther', () => {
  it('a factor above 1 narrows the field, the speed scales it', () => {
    expect(zoomLook(look, 2)!.fov).toBe(30);
    expect(zoomLook(look, 2, 2)!.fov).toBe(15);
    expect(zoomLook(look, 0.5)!.fov).toBe(MAX_FOV);
  });
  it('never goes past the sky\'s own limits', () => {
    expect(zoomLook(look, 1000)!.fov).toBe(MIN_FOV);
  });
  it('refuses a factor it cannot read', () => {
    expect(zoomLook(look, 0)).toBeNull();
  });
});
