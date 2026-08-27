/**
 * Fixed, full-viewport premium backdrop:
 *  - deep base gradient
 *  - three animated aurora blobs (blue / violet / cyan)
 *  - faint grid + top vignette
 * Purely decorative, sits behind all content.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base-950"
    >
      {/* radial base glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.12),_transparent_55%)]" />

      {/* aurora blobs */}
      <div className="absolute -top-32 -left-24 h-[38rem] w-[38rem] rounded-full bg-accent-blue/25 blur-[120px] animate-aurora" />
      <div className="absolute top-1/3 -right-24 h-[34rem] w-[34rem] rounded-full bg-accent-violet/25 blur-[130px] animate-aurora-slow" />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-accent-cyan/15 blur-[120px] animate-aurora" />

      {/* grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      {/* subtle noise / vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,16,0.7))]" />
    </div>
  );
}
