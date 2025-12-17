import type { ElementType, FC, PropsWithChildren, ReactNode } from 'react';

export interface Props {
  title: string;
  navLinks: { href: string; label: string }[];
  LinkComponent?: ElementType<PropsWithChildren<{ href: string }>>;
  rightSection?: ReactNode;
}

export const PageHeader: FC<Props> = ({
  title,
  navLinks,
  LinkComponent = 'a',
  rightSection,
}) => {
  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border px-8 py-4 z-10 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-12">
        <h2 className="text-primary text-xl font-bold tracking-tight">
          {title}
        </h2>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <LinkComponent key={href} href={href}>
              {label}
            </LinkComponent>
          ))}
        </nav>
      </div>

      {rightSection && (
        <div className="flex items-center gap-6">{rightSection}</div>
      )}
    </header>
  );
};
