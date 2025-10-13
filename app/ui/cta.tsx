import Link from "next/link";

export default function CTA() {
    return (
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
    );
}