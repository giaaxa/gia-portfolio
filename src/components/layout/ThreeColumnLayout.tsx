import { ReactNode } from 'react';

interface ThreeColumnLayoutProps {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}

export function ThreeColumnLayout({ left, center, right }: ThreeColumnLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Mobile: Stack with right info at top */}
        <div className="lg:hidden">
          <div className="pt-8 pb-6">{right}</div>
          <div>{center}</div>
          <div className="py-8">{left}</div>
        </div>

        {/* Desktop: Three columns */}
        <div className="hidden lg:grid lg:grid-cols-[200px_1fr_200px] lg:gap-8 lg:py-12">
          {/* Left sidebar - sticky */}
          <aside className="sticky top-12 h-fit">
            {left}
          </aside>

          {/* Center content */}
          <main className="min-w-0">
            {center}
          </main>

          {/* Right sidebar - sticky */}
          <aside className="sticky top-12 h-fit text-right">
            {right}
          </aside>
        </div>
      </div>
    </div>
  );
}
