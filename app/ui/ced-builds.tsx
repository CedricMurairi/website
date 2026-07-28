'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ToolTip from "@/app/ui/tool-tip";

export default function CedBuilds() {
    const [isWorkModelOpen, setIsWorkModelOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    
    const openWorkModel = () => {
        setIsWorkModelOpen(true);
    };
    const closeWorkModel = () => {
        setIsWorkModelOpen(false);
    };
    
    return (
        <div className="relative">
            <button 
                onClick={() => openWorkModel()} 
                className="hover:cursor-pointer relative block w-[60px] h-[60px] md:w-[40px] md:h-[40px]"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <Image
                    src="/images/cedric-builds.png"
                    alt="Cedric Builds"
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: "center"
                    }}
                />
                {showTooltip && (
                    <ToolTip text="Click me" />
                )}
            </button>
            {isWorkModelOpen && (
                <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50" onClick={() => closeWorkModel()}>
                    <div className="bg-white p-6 rounded-lg max-w-md w-[90%] md:w-full border border-gray-400" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-sm mb-2">Cédric Builds For Fun 😁</h2>
                        <div className="space-y-1 text-xs mb-2">
                            <p>Is a collection of small/medium/big projects and experiments by Cédric Murairi, showcasing his curiosity, craftsmanship, and love for software (hardware in the future), innovation, and technology.</p>
                        </div>
                        <h2 className="text-sm mb-2">Got a small, fun, or cool idea for Cédric Builds?</h2>
                        <div className="space-y-1 text-xs mb-2">
                            <p className="text-xs">Send an email to <Link className="underline" href="mailto:cedric@murairi.com">cedric@murairi.com</Link> and start your subject with [Cédric Builds].</p>
                            <p className="text-xs">I will review your idea and get back to you. The only rules: it has to be small, cool, and fun — and yes, it has to be software 🙂, for now.</p>
                        </div>
                        <button onClick={() => closeWorkModel()} className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}