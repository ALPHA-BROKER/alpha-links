import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import {
  FaGlobe,
  FaTwitter,
  FaTelegramPlane,
  FaBatteryThreeQuarters,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

type LinkData = {
  name: string;
  icon: JSX.Element | null;
  href: string;
};

const links: LinkData[] = [
  {
    name: "Website",
    icon: <FaGlobe className="h-8 w-8" />,
    href: "https://alpha.broker",
  },
  {
    name: "App",
    icon: <FaTelegramPlane className="h-8 w-8" />,
    href: "https://app.alpha.broker",
  },
  {
    name: "Twitter",
    icon: <FaTwitter className="h-8 w-8" />,
    href: "https://twitter.com/alphabroker_x",
  },
  {
    name: "Telegram Bot",
    icon: <FaTelegramPlane className="h-8 w-8" />,
    href: "https://t.me/alphabroker_bot",
  },
  {
    name: "Github",
    icon: <FaGithub className="h-8 w-8" />,
    href: "https://github.com/ALPHA-BROKER",
  },
  {
    name: "Servers status",
    icon: <FaBatteryThreeQuarters className="h-8 w-8" />,
    href: "https://alpha.openstatus.dev/",
  },
];

export default function Page(): JSX.Element {
  return (
    <div className="flex min-h-screen w-full max-w-md flex-col items-center bg-[#040708] p-6 text-white mx-auto">
      <Header />
      <MainContent />
    </div>
  );
}

function Header(): JSX.Element {
  return (
    <header className="mb-8 text-center">
      <div className="mx-auto mb-4 h-20 w-20">
        <Image
          src="/avatar_black.png"
          alt="Alpha Broker Logo"
          width={80}
          height={80}
          priority
        />
      </div>
      <h1 className="mb-2 text-2xl font-bold">@ALPHABROKER</h1>
      <p className="text-gray-400">
        Powerful management and automation platform built for Solana blockchain,
        designed to simplify token launches and drive you token performance.
      </p>
    </header>
  );
}

function MainContent(): JSX.Element {
  return (
    <main className="flex w-full flex-col space-y-4">
      {links.map(({ name, icon, href }) => (
        <Link key={name} href={href} target="_blank" rel="noopener noreferrer">
          <Button className="h-16 w-full rounded-lg bg-black p-6 text-lg outline outline-1 outline-zinc-500 transition-colors hover:bg-zinc-800 flex items-center justify-between">
            {icon}
            {name}
            <FaExternalLinkAlt className="h-8 w-8" />
          </Button>
        </Link>
      ))}
      <Image
        unoptimized
        src="/alpha_intro.gif"
        alt="Alpha Broker"
        width={400}
        height={400}
      />
    </main>
  );
}
