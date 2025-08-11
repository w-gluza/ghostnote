import clsx from "clsx";
import styles from "./Avatar.module.css";

interface AvatarProps {
  /** Pre-rendered image element (e.g., <img> or <Image />). */
  image?: React.ReactNode;
  /** Fallback text (e.g., initials) shown when no image is provided. */
  fallback?: string;
  /** Size of the avatar in pixels (width & height). Default is 64. */
  size?: number;
  /** Testing hook. Renders as `data-testid` on the container. */
  dataTestId?: string;
  /** Extra class applied to the root container. */
  className?: string;
}

export function Avatar({
  image,
  fallback,
  size = 64,
  dataTestId,
  className,
}: AvatarProps) {
  return (
    <span
      className={clsx(styles.avatar, className)}
      data-testid={dataTestId}
      style={{ width: size, height: size }}
    >
      {image ? image : <span className={styles.fallback}>{fallback}</span>}
    </span>
  );
}
