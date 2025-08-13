import { Main } from "@/app/common/Layout";
import styles from "./LandingPage.module.css";
import {
  ButtonLink,
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  ExternalLink,
  Heading,
} from "@/app/common";

export default function LandingPage() {
  return (
    <Main>
      <header className={styles.hero}>
        <Heading level={1} className={styles.title}>
          🥁 The Ghost Note
        </Heading>
        <p className={styles.subtitle}>Train your ears. Master the groove.</p>
        <ButtonLink href="/quiz">Start Practicing</ButtonLink>
      </header>

      <article className={styles.features}>
        <Card variant="secondary">
          <CardHeader>
            <CardTitle>🎮 Groove Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            Listen and match the right drum pattern. Fun and challenging!
          </CardContent>
        </Card>
        <Card variant="secondary">
          <CardHeader>
            <CardTitle>🔥 XP & Level System</CardTitle>
          </CardHeader>
          <CardContent>
            Earn XP, level up, and track your progress over time.
          </CardContent>
        </Card>
        <Card variant="secondary">
          <CardHeader>
            <CardTitle>🎧 Real Drum Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            Based on real grooves. Improve your timing and feel.
          </CardContent>
        </Card>
      </article>

      <footer className={styles.footer}>
        <p>Built with Next.js, CSS Modules, and Supabase</p>
        <ExternalLink href="https://github.com/w-gluza/ghostnote">
          View on GitHub
        </ExternalLink>
      </footer>
    </Main>
  );
}
