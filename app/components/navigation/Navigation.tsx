import Nav, { NavLink } from "@/app/common/Nav/Nav";
import styles from "./Navigation.module.css";

const LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Quiz", href: "/quiz" },
];

export default function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Nav links={LINKS} />
      </div>
    </header>
  );
}
