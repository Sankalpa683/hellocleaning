import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faqs = () => {
    return (
        <>
            <section className="bg-base-200 overflow-hidden" id="pricing">
                <div className="py-6 px-5 max-w-5xl mx-auto">
                    <div className="flex flex-col text-center w-full mb-8">
                        <p className="font-medium text-lg text-[#007aff] mb-8">FAQs</p>
                        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight">
                            Your questions, <span className='text-[#007aff]'>answered</span>
                        </h2>
                    </div>
                    <div className='text-xl flex flex-wrap justify-start items-start text-start flex-col gap-8'>
                        <Accordion type="single" collapsible className="flex flex-col flex-wrap justify-start items-start text-start w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="flex flex-wrap justify-end items-center text-start">What areas in Sydney do you service?</AccordionTrigger>
                                <AccordionContent className="text-lg">
                                    We provide cleaning services across all suburbs in Sydney. If you’re unsure whether we cover your area, please contact us.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="flex flex-wrap justify-end items-center text-start">What cleaning products do you use?</AccordionTrigger>
                                <AccordionContent className="text-lg">
                                    We use eco-friendly and non-toxic cleaning products to ensure a safe and healthy environment for you and your family.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="flex flex-wrap justify-end items-center text-start">How do I book a cleaning service?</AccordionTrigger>
                                <AccordionContent className="text-lg">
                                    You can book a cleaning service online through our website or by calling our customer service team directly.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="flex flex-wrap justify-end items-center text-start">What if I need to cancel or reschedule my appointment?</AccordionTrigger>
                                <AccordionContent className="text-lg">
                                    Please notify us at least 24 hours in advance if you need to cancel or reschedule. We will do our best to accommodate your request.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className="flex flex-wrap justify-end items-center text-start">Are your cleaners insured?</AccordionTrigger>
                                <AccordionContent className="text-lg">
                                    Yes, all our cleaners are fully insured and undergo background checks to ensure your peace of mind.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}

export default Faqs