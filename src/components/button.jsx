import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { IoDiamondOutline } from "react-icons/io5";
import { Textarea } from "@/components/ui/textarea";

export default function SheetDemo({ diamond }) {
    return (
        <Sheet className="w-screen">
            <SheetTrigger asChild>
                <button className='bg-[#007aff] w-full hover:bg-blue-700 hover:shadow-lg transition-all text-sm sm:text-lg capitalize flex items-center justify-center text-center text-white gap-2 px-4 font-medium py-2 rounded-lg'>
                    {diamond !== "no" && <IoDiamondOutline />}
                    Get a quote now
                </button>
            </SheetTrigger>
            <SheetContent className="w-screen">
                <SheetHeader>
                    <SheetTitle>Get a Quote</SheetTitle>
                    <SheetDescription>
                        Let Clean Australia Service do the cleaning so you can use your time for the activities you enjoy more.
                    </SheetDescription>
                </SheetHeader>
                <form className="grid gap-4 py-4">
                    <div className="grid grid-cols-1 gap-4">
                        <label htmlFor="name" className="text-lg font-semibold">Name</label>
                        <Input id="name" placeholder="Your Full Name" className="w-full" />
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <label htmlFor="email" className="text-lg font-semibold">Email</label>
                        <Input id="email" type="email" placeholder="Your Email" className="w-full" />
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <label htmlFor="phone" className="text-lg font-semibold">Phone</label>
                        <Input id="phone" type="tel" placeholder="Your Phone Number" className="w-full" />
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <label htmlFor="service" className="text-lg font-semibold">Service Needed</label>
                        <Input id="service" placeholder="Describe the service you need" className="w-full" />
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <label htmlFor="details" className="text-lg font-semibold">Additional Details</label>
                        <Textarea id="details" className="w-full" placeholder="Type your message here." />
                    </div>
                </form>
                <SheetFooter>
                    <SheetClose asChild>
                        <button className='bg-[#007aff] py-3 text-center justify-center w-full capitalize flex items-center text-white gap-2 px-4 font-medium rounded-lg'>
                            Submit Request
                        </button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
