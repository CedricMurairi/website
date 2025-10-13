import IdCard from "@/app/ui/id-card";
import CedBuilds from "@/app/ui/ced-builds";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center w-full mt-10">
            <IdCard />
            <CedBuilds />
        </nav>
    );
}