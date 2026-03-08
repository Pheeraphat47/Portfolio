'use client';


export default function Education() {
  return (
    <section id="education" className="py-16 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-12">
          <div className="shrink-0">
            <p className="text-xs text-sage-dark font-body tracking-widest uppercase mb-1">
              01 \ EDUCATION
            </p>
            <p className="text-5xl font-heading font-black text-sage/80">2022</p>
          </div>
          <div className="pb-1">
            <h3 className="text-base font-heading font-bold text-dark">
              King Mongkut&apos;s University of Technology Thonburi{' '}
              <span className="text-sage-dark">&mdash;</span>
            </h3>
            <p className="text-xs text-muted font-body mt-0.5">
              Bachelor of Science in Information Technology &nbsp;&middot;&nbsp; 2022 &ndash; Present
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
