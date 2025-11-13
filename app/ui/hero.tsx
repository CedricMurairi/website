import CTA from "@/app/ui/cta";

export default function Hero() {
    return (
        <div className="space-y-3 md:w-[80%]">
            <p className="text-xs uppercase text-[#D10000]">About Me</p>
            <h1 className="text-xl font-bold">Engineer, Innovator and Craftsman working at the intersection of technology, business and education in Africa.</h1>
            <p className="text-xs space-y-1">
                <span className="block">I run <strong>CodeXtreme</strong> — where we <em>Build Things People Need</em>.</span>
                <span className="block">We discover, inspire, activate, nurture and accelerate early tech talent and founders, helping them build and ship real products to the world.</span>
                <span className="block">Through <strong>Power of Code</strong>, my team develops high-impact tech solutions for people and communities across Africa — giving the continent a competitive edge in the 4th Industrial Revolution.</span>
            </p>
            <CTA />
        </div>
    );
}