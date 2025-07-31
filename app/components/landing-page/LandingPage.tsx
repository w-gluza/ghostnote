import styles from "./LandingPage.module.css";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>🥁 The Ghost Note</h1>
        <p className={styles.subtitle}>Train your ears. Master the groove.</p>
        <Link href="/quiz" className={styles.cta}>
          Start Practicing
        </Link>
      </section>

      <section className={styles.featuresHorizontal}>
        <div className={styles.featureItem}>
          <h3>🎮 Groove Quizzes</h3>
          <p>Listen and match the right drum pattern. Fun and challenging.</p>
        </div>
        <div className={styles.featureItem}>
          <h3>🔥 XP & Level System</h3>
          <p>Earn XP, level up, and track your progress over time.</p>
        </div>
        <div className={styles.featureItem}>
          <h3>🎧 Real Drum Patterns</h3>
          <p>Based on real grooves. Improve your timing and feel.</p>
        </div>
      </section>

      <section className={styles.preview}>
        <div className={styles.previewBox}>
          <p>[ Screenshot or Animation Placeholder ]</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Built with Next.js, CSS Modules, and Supabase</p>
        <p>
          <a
            href="https://github.com/w-gluza/ghostnote"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}
