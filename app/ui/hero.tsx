import CTA from "@/app/ui/cta";

export default function Hero() {
    return (
        <div className="space-y-3 md:w-[80%]">
            <p className="text-xs uppercase text-[#D10000]">About Me</p>
            <h1 className="text-xl font-bold">Engineer, Innovator and Craftsman working at the intersection of technology,<br/>product strategy, business, education, agriculture, and finance in Africa.</h1>
            <p className="text-xs space-y-1">
                <span className="block">Currently running <strong>CodeXtreme</strong> — an Applied Venture R&D turning High-Impact Ideas Into High-Value Startups In Africa</span>
                <span className="block">We take raw ideas from concept to validated, fundable, and scalable startups through continuous market and user-driven experimentations.</span>
            </p>
            <p className="text-xs space-y-1 text-gray-400">Let&apos;s Connect: I am always open to exploring high-impact consulting roles, Technical Product/Program Management (TPM) tracks,<br/>or Product Engineering opportunities. Reach out directly at <a href="mailto:cedric@murairi.com" className="text-[#D10000]">cedric@murairi.com</a>.</p>
            <CTA />
        </div>
    );
}