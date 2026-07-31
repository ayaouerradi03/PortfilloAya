import type { PointerEvent as ReactPointerEvent } from 'react'

/**
 * Pointer-tracked refraction: feeds --mx / --my to the `glass-lens` utility so
 * the specular highlight follows the cursor across a glass surface.
 */
export function trackGlassPointer<T extends HTMLElement>(event: ReactPointerEvent<T>) {
  const el = event.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`)
  el.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`)
}

/** Base class list shared by every liquid-glass surface. */
export const GLASS_SURFACE =
  'glass glass-sheen glass-lens glass-panel transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
