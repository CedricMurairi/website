import Link from "next/link";

export default function CTA() {
    return (
        <div className="space-y-3 md:w-[80%]">
            <p className="text-xs uppercase text-[#D10000]">About Me</p>
            <h1 className="text-xl font-bold">Engineer, Innovator and Superior Craftsman working at the intersection of technology, business and education in Africa.</h1>
            <p className="text-xs space-y-1">
                <span className="block">I run <strong>CodeXtreme</strong> — where we <em>Build Things People Need</em>.</span>
                <span className="block">We discover and nurture early tech talent and founders, helping them build and ship real products to the world.</span>
                <span className="block">Through <strong>Power of Code</strong>, my team develops high-impact tech solutions for people and communities across Africa — giving the continent a competitive edge in the 4th Industrial Revolution.</span>
            </p>
            <div className="flex gap-5 text-xs mt-5">
                <div className="space-y-1">
                    <p className="text-[10px]">Be part of what's next</p>
                    <button className="min-w-fit rounded-full border py-2 px-3 w-full">Join my team</button>
                </div>
                <div className="space-y-1">
                    <p className="text-[10px]">Got an idea worth building?</p>
                    <Link href="mailto:murairicedric@gmail.com"><p className="text-center min-w-fit rounded-full border py-2 px-3 w-full">Let's talk</p></Link>
                </div>
            </div>
        </div>
    );
}