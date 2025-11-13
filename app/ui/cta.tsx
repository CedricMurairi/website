import Link from "next/link";

export default function CTA() {
    return (
        <div className="flex gap-5 text-xs mt-5">
            <div className="space-y-1">
                <p className="text-[10px]">Be part of what&apos;s next</p>
                <Link href="mailto:team@codextreme.io" className="min-w-fit rounded-full border py-2 px-3 w-full">Join my team</Link>
            </div>
            <div className="space-y-1">
                <p className="text-[10px]">Got an idea worth building?</p>
                <Link href="mailto:ping@murairi.com"><p className="text-center min-w-fit rounded-full border py-2 px-3 w-full">Let&apos;s talk</p></Link>
            </div>
        </div>
    );
}