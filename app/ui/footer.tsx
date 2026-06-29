import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="w-full flex gap-10 text-xs pb-5 flex-wrap">
                <div className="space-y-2">
                    <h1 className="font-semibold">My work</h1>
                    <ul className="space-y-1">
                        <li><Link href="https://www.simplywrite.org" target="_blank">SimplyWrite</Link></li>
                        <li><Link href="https://www.gradis.site" target="_blank">Gradis</Link></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h1 className="font-semibold">Companies & Initiatives</h1>
                    <ul>
                        <li><Link target="_blank" href="https://codextreme.io">CodeXtreme</Link></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h1 className="font-semibold">Activities & Fun</h1>
                    <ul className="space-y-1">
                        <li><Link href="https://blog.murairi.com" target="_blank">Essays</Link></li>
                        <li><Link target="_blank" href="http://www.youtube.com/@engineering1O1">YouTube</Link></li>
                        <li><Link href="/builds">Cédric Builds</Link></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h1 className="font-semibold">Follow</h1>
                    <ul className="space-y-1">
                        <li><Link target="_blank" href="https://www.linkedin.com/in/cedric-murairi/">LinkedIn</Link></li>
                        <li><Link target="_blank" href="https://www.instagram.com/cedricmurairi/">Instagram</Link></li>
                        <li><Link target="_blank" href="https://x.com/CedricMurairi">X - Twitter</Link></li>
                    </ul>
                </div>
            </div>
            <p className="border-t border-gray-400 py-2 text-xs w-full">❤ from Cédric</p>
        </footer>
    );
}