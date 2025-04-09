import { SidebarDemo } from "@/registry/new-york/ui/sidebar"
export default function SlidingCardsDemo() {


  return (       // Replace h-[70vh] with h-screen
    <div className=" h-screen sm:h-[70vh] w-screen flex flex-col sm:flex-row bg-neutral-100 overflow-y-hidden"> 
    {/* Sidebar */}
    <SidebarDemo/>
    {/* Main Content */}
    <div className="w-full h-full bg-white rounded-l-3xl p-10 border border-gray-200">
    <Dashboard/> 
    </div>

  </div>
)}


const Dashboard = () => (
    <div className="flex h-full flex-1">
        <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-tl-2xl bg-white   ">
            <div className="flex gap-4">
                {[...Array(4)].map((_, idx) => (
                    <div key={idx} className="h-20 w-full animate-pulse rounded-lg bg-gray-100"></div>
                ))}
            </div>
            <div className="flex flex-1 gap-4">
                {[...Array(2)].map((_, idx) => (
                    <div key={idx} className="h-full w-full animate-pulse rounded-lg bg-gray-100"></div>
                ))}
            </div>
        </div>
    </div>
);