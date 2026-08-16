import { GooeyField } from './GooeyField'

/**
 * The site-wide background: the gooey gradient field, plus a whisper of grain
 * and the faintest edge falloff. Nothing here dims the field — the glass
 * panels are tinted dark instead, which keeps text readable without flattening
 * the colour behind it.
 *
 * Decorative only; never intercepts the pointer.
 */
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <GooeyField />

      {/* Barely-there edge falloff so the field feels lit rather than flat */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(125% 90% at 50% 40%, transparent 45%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* Film grain */}
      <div className="grain absolute inset-0" />
    </div>
  )
}

export default Backdrop
