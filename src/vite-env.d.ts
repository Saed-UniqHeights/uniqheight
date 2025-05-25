/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  RESEND_API_KEY: string;
  ADMIN_EMAIL: string;
  FROM_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
