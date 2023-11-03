"use client";

import { useState } from "react";

import Button from "@/app/_components/_a/Button";
import Modal from "@/app/_components/_o/Modal";

export default function Modals() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>Modals</h1>
      <br />
      <br />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="p-35px">
          <p className="mb-[35px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            sequi ut? Explicabo tempora et, a velit similique quisquam
            laboriosam commodi cumque quae nesciunt. Odio porro fugit doloribus
            itaque voluptatum ut consectetur ipsa quisquam possimus, earum sequi
            nisi soluta reiciendis enim quasi impedit laboriosam voluptate
            commodi aperiam voluptatibus. Libero, quod similique.
          </p>
          <p className="mb-[35px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            sequi ut? Explicabo tempora et, a velit similique quisquam
            laboriosam commodi cumque quae nesciunt. Odio porro fugit doloribus
            itaque voluptatum ut consectetur ipsa quisquam possimus, earum sequi
            nisi soluta reiciendis enim quasi impedit laboriosam voluptate
            commodi aperiam voluptatibus. Libero, quod similique.
          </p>
          <p className="mb-[35px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            sequi ut? Explicabo tempora et, a velit similique quisquam
            laboriosam commodi cumque quae nesciunt. Odio porro fugit doloribus
            itaque voluptatum ut consectetur ipsa quisquam possimus, earum sequi
            nisi soluta reiciendis enim quasi impedit laboriosam voluptate
            commodi aperiam voluptatibus. Libero, quod similique.
          </p>
          <p className="mb-[35px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            sequi ut? Explicabo tempora et, a velit similique quisquam
            laboriosam commodi cumque quae nesciunt. Odio porro fugit doloribus
            itaque voluptatum ut consectetur ipsa quisquam possimus, earum sequi
            nisi soluta reiciendis enim quasi impedit laboriosam voluptate
            commodi aperiam voluptatibus. Libero, quod similique.
          </p>
        </div>
      </Modal>
      <br />
      <br />
      <Button theme="deep" onClick={() => setShowModal(true)}>
        Open popup
      </Button>
    </div>
  );
}
