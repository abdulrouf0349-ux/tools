import React from 'react';
import YamlToJsonClient from './client';

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "YAML to JSON Converter — Online Config Transformer",
  description:
    "Convert YAML configurations to JSON format instantly. Secure, browser-based parsing for Kubernetes manifests, Docker Compose, and CI/CD files.",
  keywords: [
    "yaml to json converter",
    "online yaml parser",
    "convert yaml to json object",
    "kubernetes yaml to json",
    "docker compose converter",
    "devops tools online"
  ],
};

export default function Page() {
  return <YamlToJsonClient />;
}