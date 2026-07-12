import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-1 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)]",
            vertical
              ? "animate-marquee-vertical flex-col"
              : "animate-marquee flex-row",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

const skillReviews = [
  {
    name: "React",
    username: "Frontend Library",
    body: "Crafting modular, reactive, and highly responsive user interfaces.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    username: "Programming Language",
    body: "Writing scalable, type-safe, and robust application codebases.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Next.js",
    username: "React Framework",
    body: "Leveraging Server Components and routing for optimal performance.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Solidity",
    username: "Smart Contracts",
    body: "Programming secure, gas-optimized decentralized applications.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  },
  {
    name: "Tailwind CSS",
    username: "Utility-First CSS",
    body: "Styling premium, responsive layouts with modern utility classes.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    username: "Runtime Environment",
    body: "Powering fast, event-driven, and scalable server-side systems.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    username: "Programming Language",
    body: "Analyzing datasets, developing models, and automating AI workloads.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Hardhat",
    username: "Ethereum Env",
    body: "Compiling, testing, and deploying robust smart contract configurations.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hardhat/hardhat-original.svg",
  },
  {
    name: "Docker",
    username: "Productivity Tool",
    body: "Containerizing services to ensure uniform, reliable runtime environments.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Ethereum",
    username: "Blockchain Network",
    body: "Building trustless peer-to-peer applications on EVM networks.",
    img: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  }
];

const firstRow = skillReviews.slice(0, skillReviews.length / 2);
const secondRow = skillReviews.slice(skillReviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-56 cursor-pointer overflow-hidden rounded-xl border p-3 flex flex-col justify-between text-left",
        "border-zinc-200 dark:border-white/5 bg-zinc-100/50 dark:bg-white/[0.02] hover:bg-zinc-200 dark:hover:bg-white/[0.06] transition-colors"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full bg-white/10 p-0.5" width="24" height="24" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-xs font-semibold text-foreground">
            {name}
          </figcaption>
          <p className="text-[10px] font-medium text-muted-foreground">{username}</p>
        </div>
      </div>
      <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground/90">{body}</p>
    </figure>
  );
};

export default function SkillsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-2 select-none">
      {/* Title */}
      <div className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] font-bold text-primary/80">
        <Sparkles className="h-3 w-3 animate-sparkle" />
        <span>Skills Ticker</span>
      </div>

      {/* Ticker Rows */}
      <div className="w-full max-w-5xl flex flex-col gap-1.5">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Gradient Fades for Left and Right edges */}
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l"></div>
    </div>
  );
}
