"use client";

import Button from "@/app/_components/_a/Button";
import Checkbox from "@/app/_components/_a/Checkbox";

export default function Home() {
  const handleClick = () => console.log("handleClick");
  const handleChange = (value: any) =>
    console.log("handleChange", value.target.checked);

  return (
    <>
      <h1 className="mb-[35px]">Main page with personal layout</h1>
      <div>
        <Button onClick={handleClick} theme="potato">
          Lorem ipsum dolor
        </Button>
        <Button onClick={handleClick}>Lorem ipsum dolor</Button>
        <Button onClick={handleClick} theme="purple">
          Lorem ipsum dolor
        </Button>
      </div>
      <div>
        <Checkbox onChange={(value) => handleChange(value)} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        dignissimos. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Perferendis doloribus fugiat voluptatum incidunt sint at exercitationem
        possimus dolores. Eveniet voluptas ea laudantium nobis blanditiis ut
        enim nisi qui inventore quos voluptates tempore esse ipsam, error autem
        quibusdam quas pariatur corporis, repudiandae vero magnam, natus
        numquam! Iure, eum fugit neque quo eius esse, beatae voluptatum
        doloribus saepe assumenda quos? Fugit ipsa dolore voluptatum eaque
        recusandae magnam molestias voluptate hic ad, perspiciatis ab? Est
        velit, dolor dolores soluta repellat nam error saepe quam quasi harum
        tempore magni perspiciatis amet officia nisi fugit quo, sequi quidem
        laboriosam? Amet quasi quam esse maxime debitis?
      </p>
    </>
  );
}
