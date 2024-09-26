"use client";

import { useEffect, useState } from "react";

const l = 50;

export default function Cursor() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMouseMovement(e: MouseEvent) {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMovement);

    return () => window.removeEventListener("mousemove", handleMouseMovement);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#4ADEDE",
        filter: "blur(30px)",
        height: l,
        width: l,
        position: "fixed",
        left: pos.x - l / 2,
        top: pos.y - l / 2,
      }}
    ></div>
  );
}
