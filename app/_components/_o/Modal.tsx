"use client";

import Button from "@/app/_components/_a/Button";
import "./Modal.css";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function Modal({
  isOpen = false,
  children,
  onClose,
}: {
  isOpen?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}) {
  const [animationOpen, setAnimationOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      setAnimationOpen(isOpen);
      return;
    }

    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
      setAnimationOpen(isOpen);
    }, 400);
  }, [isOpen]);

  return (
    animationOpen &&
    createPortal(
      <div
        className={`fixed top-0 left-0 bg-slate-700/70 h-screen w-full flex p-[15px] overflow-y-auto overlay ${
          isOpen ? "open" : ""
        }`}
      >
        <div
          className={`w-full max-w-[750px] bg-white m-auto rounded-lg modal ${
            isOpen ? "open" : ""
          }`}
        >
          <Button theme="deep" onClick={onClose}>
            Close
          </Button>
          <div>{children}</div>
        </div>
      </div>,
      document.body
    )
  );
}
