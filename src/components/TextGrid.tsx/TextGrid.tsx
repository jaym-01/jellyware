"use client";

import "@/styles/components/textgrid.css";
import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";
import { EditorView } from "@uiw/react-codemirror";
import styles from "@/styles/components/home/aboutme.module.scss";

const theme = createTheme({
  theme: "dark",
  settings: {
    background: "#282c34cc",
    backgroundImage: "",
    foreground: "#ffffff",
    caret: "#ffffff",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: "#8a91991a",
    gutterBackground: "#282c34cc",
    gutterForeground: "#8a919966",
  },
  styles: [
    { tag: t.comment, color: "#ffffff" },
    { tag: t.variableName, color: "#ffffff" },
    { tag: [t.string, t.special(t.brace)], color: "#ffffff" },
    { tag: t.number, color: "#ffffff" },
    { tag: t.bool, color: "#ffffff" },
    { tag: t.null, color: "#ffffff" },
    { tag: t.keyword, color: "#ffffff" },
    { tag: t.operator, color: "#ffffff" },
    { tag: t.className, color: "#ffffff" },
    { tag: t.definition(t.typeName), color: "#ffffff" },
    { tag: t.typeName, color: "#ffffff" },
    { tag: t.angleBracket, color: "#ffffff" },
    { tag: t.tagName, color: "#ffffff" },
    { tag: t.attributeName, color: "#ffffff" },
  ],
});

export default function TextGrid({ text }: { text: string }) {
  return (
    <CodeMirror
      className={styles.text}
      // style={{
      //   fontSize: 18,
      // }}
      value={text}
      width="100%"
      minHeight="40vh"
      readOnly
      editable={false}
      theme={theme}
      extensions={[EditorView.lineWrapping]}
    />
  );
}
