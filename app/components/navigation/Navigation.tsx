import styles from "./Navigation.module.css";
import { Nav } from "@/app/common/";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Quiz", href: "/quiz" },
  { label: "Profile", href: "/profile" },
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
