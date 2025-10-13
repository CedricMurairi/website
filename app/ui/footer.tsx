export default function Footer() {
    return (
        <footer className="w-full">
            <div className="w-full flex gap-10 text-xs pb-5 flex-wrap">
                <div className="space-y-2">
                    <h1 className="font-semibold">My work</h1>
                    <ul>
                        <li>Merge</li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h1 className="font-semibold">Companies</h1>
                    <ul>
                        <li>CodeXtreme</li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h1 className="font-semibold">Activities & Fun</h1>
                    <ul className="space-y-1">
                        <li>Blog</li>
                        <li>YouTube</li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h1 className="font-bold">Follow</h1>
                    <ul className="space-y-1">
                        <li>LinkedIn</li>
                        <li>X - Twitter</li>
                    </ul>
                </div>
            </div>
            <p className="border-t py-2 text-xs w-full">❤ from Cedric</p>
        </footer>
    );
}