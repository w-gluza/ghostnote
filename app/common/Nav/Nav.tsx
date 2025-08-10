"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./Nav.module.css";

export interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  links: NavLink[];
  className?: string;
}

export default function Nav({ links, className }: NavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className={clsx(styles.nav, className)}>
      <ul className={styles.menu}>
        {links.map((item, i) => {
          const isCurrent = pathname === item.href;
          return (
            <li key={item.href} className={styles.menuItem}>
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={styles.link}
              >
                {item.label}
              </Link>
              {i < links.length - 1 && (
                <span aria-hidden="true" className={styles.dot}>
                  &bull;
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
