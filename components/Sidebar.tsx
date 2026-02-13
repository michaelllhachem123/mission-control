'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/nav';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 lg:block" aria-label="Navigation">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 text-white shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Court Vision</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Mission Control</h2>
        </div>
        <nav className="mt-6 space-y-2">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition ${
                  active ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs">→</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
