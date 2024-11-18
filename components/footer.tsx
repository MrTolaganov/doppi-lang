"use client";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ChartGanttIcon, CommandIcon, GithubIcon, HeartIcon, TriangleIcon } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t w-full h-16 mt-6">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex">
          <Image
            src="/doppi-icon.png"
            alt="logo"
            width={40}
            height={40}
            className="mr-3"
          />
          <div className="flex flex-col">
            <h2 className="text-md font-bold font-code">Doppi Lang</h2>
            <p className="text-sm">Version 0.0.1</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/AnonymousDevelope/doppi-lang"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            <GithubIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
            GitHub
          </Link>
          <FooterButtons />
        </div>
        {/* TODO footerni almashtirish kerak */}
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://github.com/sponsors/nisabmohd"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
      <Link
        href={"https://t.me/AnonymousDev_group"}
        className={buttonVariants({ variant: "outline", size: "sm" }) + "flex flex-row items-center px-2"}
      >
        {/* telegram svg */}
        <Image
          width={25}
          height={25}
          src={"https://img.icons8.com/?size=100&id=k4jADXhS5U1t&format=png&color=000000"}
          alt="Telegram icon"
        />
        My Chanel
      </Link >
    </>
  );
}
