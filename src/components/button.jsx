"use client";

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IoDiamondOutline } from "react-icons/io5";
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
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function SheetDemo({ diamond }) {
    const [state, handleSubmit] = useForm("xkgwvnwq");
    const [showSuccess, setShowSuccess] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const result = await handleSubmit(event);

        if (result && result.succeeded) {
            setShowSuccess(true); // This should trigger the dialog to open
        }
    };

    return (
        <>
            <Sheet className="w-screen">
                <SheetTrigger asChild>
                    
                </SheetTrigger>
                <SheetContent className="w-screen">
                    <SheetHeader>
                        <SheetTitle>Get a Quote</SheetTitle>
                        <SheetDescription>
                            Let Clean Australia Service do the cleaning so you can use your time for the activities you enjoy more.
                        </SheetDescription>
                    </SheetHeader>
                    <form onSubmit={handleFormSubmit} className="grid gap-4 py-4">
                        <div className="grid grid-cols-1 gap-4">
                            <label htmlFor="name" className="text-lg font-semibold">Name</label>
                            <Input id="name" name="name" placeholder="Your Full Name" className="w-full" />
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <label htmlFor="email" className="text-lg font-semibold">Email</label>
                            <Input id="email" type="email" name="email" placeholder="Your Email" className="w-full" />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <label htmlFor="phone" className="text-lg font-semibold">Phone</label>
                            <Input id="phone" type="tel" name="phone" placeholder="Your Phone Number" className="w-full" />
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <label htmlFor="service" className="text-lg font-semibold">Service Needed</label>
                            <Input id="service" name="service" placeholder="Describe the service you need" className="w-full" />
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <label htmlFor="details" className="text-lg font-semibold">Additional Details</label>
                            <Textarea id="details" name="message" className="w-full" placeholder="Type your message here." />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>
                        <SheetFooter>
                            <button type="submit" disabled={state.submitting} className='bg-[#007aff] py-3 text-center justify-center w-full capitalize flex items-center text-white gap-2 px-4 font-medium rounded-lg'>
                                Submit Request
                            </button>
                        </SheetFooter>
                    </form>
                </SheetContent>
            </Sheet>

            {/* Success Dialog */}
            <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
                <DialogContent>
                    <DialogTitle>Thank you!</DialogTitle>
                    <DialogDescription>
                        Your request has been submitted successfully.
                    </DialogDescription>
                    <SheetClose asChild>
                        <button className='mt-4 bg-[#007aff] py-2 text-center justify-center w-full capitalize flex items-center text-white gap-2 px-4 font-medium rounded-lg'>
                            Close
                        </button>
                    </SheetClose>
                </DialogContent>
            </Dialog>
        </>
    );
}
