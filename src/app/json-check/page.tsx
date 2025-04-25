"use client";

import styles from "@/styles/components/json-check/main.module.scss";
import { useState } from "react";
import TextGrid from "../../components/TextGrid/TextGrid";

export default function JsonCheck() {
  const [txt, setTxt] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  return (
    <div className={styles.jContainer}>
      <h1>JSON Check</h1>
      <p>Check if your string is a valid JSON object.</p>
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <TextGrid
          text={txt}
          handleChange={(v) => {
            setTxt(v);
            try {
              JSON.parse(v);
              setError(null);
            } catch (e) {
              setError(e.message);
            }
          }}
          readOnly={false}
          editable={true}
        />
      </div>
      <span style={{ color: "#e83f36", padding: 10 }}>{error}</span>
    </div>
  );
}
