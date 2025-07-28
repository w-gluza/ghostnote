import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import jsxA11y from "eslint-plugin-jsx-a11y";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    settings: {
      "jsx-a11y": {
        components: {
          ExternalLink: "a",
        },
      },
    },
    rules: {
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/label-has-associated-control": "warn",
      "jsx-a11y/control-has-associated-label": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
    },
  },
];

export default eslintConfig;
