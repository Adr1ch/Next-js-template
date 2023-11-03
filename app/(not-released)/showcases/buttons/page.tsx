"use client";

import Button from "@/app/_components/_a/Button";
import Checkbox from "@/app/_components/_a/Checkbox";

export default function Buttons() {
  return (
    <div>
      <h1>Buttons</h1>
      <br />
      <br />
      <Button theme="potato">Lorem ipsum dolor</Button>
      <br />
      <br />
      <Button>Lorem ipsum dolor</Button>
      <br />
      <br />
      <Button theme="purple">Lorem ipsum dolor</Button>
      <br />
      <br />
      <Button size="lg" theme="deep">
        Lorem ipsum dolor
      </Button>
      <br />
      <br />
      <Checkbox />
    </div>
  );
}
