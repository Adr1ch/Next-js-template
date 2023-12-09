"use client";
import Image from "next/image";
import Link from "next/link";

export default function Article({
  href,
  title,
  intro,
  date,
  articleImage,
  authorName,
  categories,
  onClick = () => {},
  authorImage,
}: {
  href: string;
  title: string;
  intro: string;
  date: string;
  articleImage: string;
  authorName: string;
  categories: unknown[];
  onClick: () => void;
  authorImage: string;
}) {
  return (
    <li className="bg-white shadow-xl shadow-black-700/50 p-[15px] rounded-md flex flex-col">
      <div
        className="overflow-hidden relative"
        style={{ paddingBottom: "calc(480 / 720 * 100%)" }}
      >
        <Image
          src={articleImage}
          className="absolute top-0 left-0 h-full w-full object-cover"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <h3 className="text-3xl mt-[15px] leading-snug font-semibold">
        <Link href={href} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed my-[10px]">{date}</p>
      <p className="text-lg leading-relaxed mb-[10px]">{intro}</p>
      <div className="flex gap-x-[15px] items-center">
        <Image
          src={authorImage}
          className="h-[70px] w-[70px] object-cover rounded-full"
          width={70}
          height={70}
          alt="Picture of the author"
        />
        <p className="leading-relaxed mb-[4px] mt-[10px] text-xl font-bold">
          {authorName}
        </p>
      </div>
      <ul className="flex gap-x-[15px] items-center mt-[10px]">
        <Link
          href="/"
          className="inline-flex px-[15px] py-[5px] rounded-md bg-slate-200 hover:underline"
        >
          Lorem ipsum dolor amet
        </Link>
        <Link
          href="/"
          className="inline-flex px-[15px] py-[5px] rounded-md bg-slate-200 hover:underline"
        >
          Lorem ipsum dolor amet
        </Link>
        <Link
          href="/"
          className="inline-flex px-[15px] py-[5px] rounded-md bg-slate-200 hover:underline"
        >
          Lorem ipsum dolor amet
        </Link>
      </ul>
    </li>
  );
}
