import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-2xl w-[325px] p-8">
        <Image
          src="/image-qr-code.png"
          alt="logo"
          width={576}
          height={576}
          className="rounded-2xl"
        />
        <h1 className="font-extrabold text-center text-xl text-[#1f3251] max-w-sm">
          {" "}
          Improve your front-end skills by building projects
        </h1>
        <p className="max-w-sm text-center text-[#7b879d] font-semibold">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
      <div className="attribution text-center">
        Challenge by
        <span className="mx-1">
          <a
            href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H/"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </span>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/yh919">
          Youssef Hussein
        </a>
        .
      </div>
    </main>
  );
}
