import styles from "../styles/Button.module.scss";
import clsx from "clsx";

export default function Button({
  variant = "default",
  loading = false,
  disabled = false,
  children,
  ...props
}) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        loading && styles.loading
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
