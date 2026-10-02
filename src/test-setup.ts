// Extend THIS app's `expect` with the matchers, instead of letting
// `@testing-library/jest-dom/vitest` import `vitest` on its own. In the
// monorepo store that bare import resolves through pnpm's hoisted fallback,
// which is whichever vitest another app pinned (2.1.9 today), while this app
// runs 1.6.1: two instances, and every test dies on `Cannot set property
// testPath of #<Object> which has only a getter` before it starts.
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
