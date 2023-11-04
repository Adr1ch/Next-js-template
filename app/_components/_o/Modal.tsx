"use client";

import Button from "@/app/_components/_a/Button";
import CloseIcon from "@/app/_components/_a/CloseIcon";
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
          className={`w-full max-w-[750px] bg-white m-auto rounded-lg relative modal ${
            isOpen ? "open" : ""
          }`}
        >
          <span className="absolute	top-[5px] right-[5px]" onClick={onClose}>
            <CloseIcon />
          </span>
          <div>{children}</div>
        </div>
      </div>,
      document.body
    )
  );
}
