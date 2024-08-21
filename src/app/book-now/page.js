"use client";

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { MdOutlineNavigateNext, MdArrowBackIos } from "react-icons/md";
import { HiCheck } from "react-icons/hi";

import Nav from "../components/nav";
import Footer from "../components/footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ContactForm() {
  const [state, handleSubmit] = useForm("mjkbewjr");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    frequency: "",
    bedrooms: "",
    bathrooms: "",
    kitchens: "",
    livingAreas: "",
    levels: "",
    laundry: "",
    addOns: [],
    name: "",
    email: "",
    date: "",
    address: "",
    postalCode: "",
  });

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOnChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      addOns: checked
        ? [...prev.addOns, value]
        : prev.addOns.filter((item) => item !== value),
    }));
  };

  const goToNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const goToPreviousStep = () => {
    setStep((prev) => prev - 1);
  };

  const calculateTotal = () => {
    // Logic to calculate the total based on formData
    return 410.12; // Replace with your calculation logic
  };

  const sendEmail = async () => {
    await fetch("/api/booking", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });
    alert("Email has been sent")
  };

  return (
    <>
      <Nav />
      <section className="py-12 w-full bg-gradient-to-r from-fuchsia-200 to-violet-100 min-h-screen">
        <div className="pt-6 pb-16 flex flex-col flex-wrap items-center justify-start text-center">
          <h1 className="text-3xl px-3 lg:text-5xl font-medium">
            You’re 60 seconds away{" "}
            <span className="text-[#007aff]">from a clean home</span>
          </h1>
          <p className="text-lg hidden lg:block lg:text-xl pt-4 lg:pt-8 text-gray-800">
            View pricing, availability & book online.{" "}
            <span className="text-[#007aff]">Have questions?</span>
          </p>
        </div>
        <form method="post" className="w-full">
          <div className="grid grid-cols-1 gap-2">
            <div className="flex h-fit shadow-book_online bg-white rounded-lg col-span-2 mx-3 flex-col flex-wrap gap-6 px-5 py-6">
              {step === 1 && (
                <>
                  <div className="flex flex-wrap flex-col gap-4">
                    <label htmlFor="email" className="text-2xl font-medium">
                      Step 1: Choose your service
                    </label>
                    <p className="text-gray-700">
                      Select Hourly Cleaning for partial cleaning, extra large
                      or extra dirty homes.
                    </p>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="General Cleaning" />
                      </SelectTrigger>
                      <SelectContent name="services">
                        <SelectItem value="general">
                          General Cleaning
                        </SelectItem>
                        <SelectItem value="deep">Deep Cleaning</SelectItem>
                        <SelectItem value="lease">
                          End of Lease Cleaning
                        </SelectItem>
                        <SelectItem value="hourly">Hourly Cleaning</SelectItem>
                        <SelectItem value="movein">Move-in Cleaning</SelectItem>
                      </SelectContent>
                    </Select>

                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex flex-wrap flex-col gap-4">
                    <label htmlFor="message" className="text-2xl font-medium">
                      Step 2: How often would you like your cleaning service?
                    </label>
                    <p className="text-gray-700">
                      Get amazing discounts for being a recurring customer.
                    </p>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="One Time" />
                      </SelectTrigger>
                      <SelectContent name="how_often_time">
                        <SelectItem value="once">One Time</SelectItem>
                        <SelectItem value="montly">Monthly - 5% off</SelectItem>
                        <SelectItem value="fortnightly">
                          Fortnightly - 10% off
                        </SelectItem>
                        <SelectItem value="weekly">Weekly - 15% off</SelectItem>
                      </SelectContent>
                    </Select>

                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex flex-wrap flex-col gap-4">
                    <label htmlFor="message" className="text-2xl font-medium">
                      Step 3: How big is your home?
                    </label>
                    <p className="text-gray-700">
                      We use this information to estimate the total labour hours
                      required for a thorough clean. If you have a{" "}
                      <b>study, sunroom or office</b>, please add an additional{" "}
                      <b>'bedroom'</b>. If you have a separate toilet or powder
                      room, please add an additional '<b>bathroom'</b>. This
                      will ensure your quote is accurate.
                    </p>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                      <div className="flex flex-wrap flex-col gap-2">
                        <label className="font-semibold text-xl">
                          Bedrooms
                        </label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="1 Bedroom" />
                          </SelectTrigger>
                          <SelectContent name="bedroom">
                            <SelectItem value="one">1 Bedroom</SelectItem>
                            <SelectItem value="two">2 Bedroom</SelectItem>
                            <SelectItem value="three">3 bedroom</SelectItem>
                            <SelectItem value="four">4 Bedroom</SelectItem>
                            <SelectItem value="five">5 Bedroom</SelectItem>
                            <SelectItem value="six">6 Bedroom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-wrap flex-col gap-2">
                        <label className="font-semibold text-xl">
                          Bathrooms
                        </label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="1 Bathroom" />
                          </SelectTrigger>
                          <SelectContent name="bathroom">
                            <SelectItem value="one">1 Bathroom</SelectItem>
                            <SelectItem value="two">2 Bathroom</SelectItem>
                            <SelectItem value="three">3 Bathroom</SelectItem>
                            <SelectItem value="four">4 Bathroom</SelectItem>
                            <SelectItem value="five">5 Bathroom</SelectItem>
                            <SelectItem value="six">6 Bathroom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-wrap flex-col gap-2">
                        <label className="font-semibold text-xl">
                          Kitchens
                        </label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="1 Kitchen" />
                          </SelectTrigger>
                          <SelectContent name="kitchen">
                            <SelectItem value="one">1 Kitchen</SelectItem>
                            <SelectItem value="two">2 Kitchen</SelectItem>
                            <SelectItem value="three">3 Kitchen</SelectItem>
                            <SelectItem value="four">4 Kitchen</SelectItem>
                            <SelectItem value="five">5 Kitchen</SelectItem>
                            <SelectItem value="six">6 Kitchen</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-wrap flex-col gap-2">
                        <label className="font-semibold text-xl">
                          Living Areas
                        </label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="1 Living Area" />
                          </SelectTrigger>
                          <SelectContent name="living_area">
                            <SelectItem value="one">1 Living Area</SelectItem>
                            <SelectItem value="two">2 Living Area</SelectItem>
                            <SelectItem value="three">3 Living Area</SelectItem>
                            <SelectItem value="four">4 Living Area</SelectItem>
                            <SelectItem value="five">5 Living Area</SelectItem>
                            <SelectItem value="six">6 Living Area</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-wrap flex-col gap-2">
                        <label className="font-semibold text-xl">Levels</label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Single Story" />
                          </SelectTrigger>
                          <SelectContent name="levels">
                            <SelectItem value="single">Single Story</SelectItem>
                            <SelectItem value="double">Double Story</SelectItem>
                            <SelectItem value="three">Three Story</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-wrap flex-col gap-2">
                        <label className="font-semibold text-xl">Laundry</label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="0 Laundry Room" />
                          </SelectTrigger>
                          <SelectContent name="laundry">
                            <SelectItem value="one">0 Laundry Room</SelectItem>
                            <SelectItem value="two">1 Laundry Room</SelectItem>
                            <SelectItem value="three">
                              2 Laundry Room
                            </SelectItem>
                            <SelectItem value="four">3 Laundry Room</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <div className="py-4 flex flex-wrap flex-col gap-4">
                    <h2 className="text-2xl font-medium pb-4">
                      Step 4: Select your add-ons
                    </h2>
                    <div className="grid grid-cols-2 xl:grid-cols-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3">
                      {[
                        "Inside Oven",
                        "Range Hood",
                        "Interior Windows",
                        "Exterior Windows",
                        "Inside Cupboards",
                        "Sliding Glass Doors",
                        "Inside Fridge (Empty)",
                        "Inside Fridge (Full)",
                        "Change Bed Linen",
                        "Blinds/Shutters",
                        "Laundry",
                        "Wash Dishes",
                        "Small Balcony",
                        "Large Balcony",
                        "Deck",
                        "Patio",
                        "Garage Sweep & Tidy",
                        "Spot Clean Walls",
                        "Wall Washing",
                        "Dishwasher",
                        "Carpet Steam Clean",
                        "Wardrobe",
                        "Alfresco",
                        "Pantry",
                        "Ceiling Fan",
                        "Enclosed Sunroom",
                        "Driveway Cleaning",
                        "Air Condition",
                      ].map((addOn) => (
                        <div key={addOn} className="flex items-center">
                          <input type="checkbox" name="addon" required />
                          <label className="ml-2">{addOn}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr />
                </>
              )}
              {step === 2 && (
                <>
                  <div className="flex flex-wrap flex-col gap-4">
                    <div className="flex flex-wrap flex-col gap-2 ">
                      <label
                        htmlFor="name"
                        className="text-2xl font-medium pb-4"
                      >
                        Step 5: Contact Information
                      </label>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <Input
                          name="name"
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <Input
                          name="email"
                          required
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <Input
                          name="number"
                          required
                          placeholder="Number"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-col">
                      <label
                        htmlFor="name"
                        className="text-2xl font-medium pb-4"
                      >
                        Step 6: When would you like us to arrive?
                      </label>
                      <p className="text-gray-700 pb-3 ">
                        Select the date and time you would like us to arrive.
                        Once we receive your booking, we'll match you with one
                        of our top cleaning pros and we'll send you a
                        confirmation.
                      </p>
                      <Input
                        name="date"
                        required
                        placeholder="Date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div lassName="flex flex-wrap flex-col gap-3">
                      <label
                        htmlFor="name"
                        className="text-2xl font-medium pb-4"
                      >
                        Step 7: Address & Other Information
                      </label>
                      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 pt-3">
                        <Input
                          name="address"
                          required
                          placeholder="Address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                        <Input
                          name="postalCode"
                          required
                          placeholder="Postal Code"
                          value={formData.postalCode}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-wrap flex-col pt-6 gap-4">
                        <div className="flex flex-wrap flex-col gap-2">
                          <label className="font-semibold text-xl">
                            Where can we park?
                          </label>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="In my garage" />
                            </SelectTrigger>
                            <SelectContent name="where_to_park">
                              <SelectItem value="garage">
                                In my garage
                              </SelectItem>
                              <SelectItem value="driveway">
                                In my driveway
                              </SelectItem>
                              <SelectItem value="street">
                                On the street
                              </SelectItem>
                              <SelectItem value="parkingLot">
                                In a parking lot
                              </SelectItem>
                              <SelectItem value="noParking">
                                No dedicated parking
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex flex-wrap flex-col gap-2">
                          <label className="font-semibold text-xl">
                            How will we gain access to your home?
                          </label>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="I will be home" />
                            </SelectTrigger>
                            <SelectContent name="how_to_come_your_home">
                              <SelectItem value="home">
                                I will be home
                              </SelectItem>
                              <SelectItem value="keyUnderMat">
                                Key under the mat
                              </SelectItem>
                              <SelectItem value="lockbox">
                                Key in a lockbox
                              </SelectItem>
                              <SelectItem value="neighbor">
                                Neighbor has a key
                              </SelectItem>
                              <SelectItem value="securityCode">
                                Security code provided
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex flex-wrap flex-col gap-2">
                          <label className="font-semibold text-xl">
                            Is there running water and electricity at the
                            property?
                          </label>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Yes, both available" />
                            </SelectTrigger>
                            <SelectContent name="running_water">
                              <SelectItem value="both">
                                Yes, both available
                              </SelectItem>
                              <SelectItem value="waterOnly">
                                Only running water available
                              </SelectItem>
                              <SelectItem value="electricityOnly">
                                Only electricity available
                              </SelectItem>
                              <SelectItem value="neither">
                                Neither available
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex flex-wrap flex-col gap-2">
                          <label className="font-semibold text-xl">
                            On a scale of 1-5, how clean would you estimate your
                            home to be?
                          </label>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="3 - Average" />
                            </SelectTrigger>
                            <SelectContent name="how_much_clean">
                              <SelectItem value="1">1 - Very Dirty</SelectItem>
                              <SelectItem value="2">2 - Dirty</SelectItem>
                              <SelectItem value="3">3 - Average</SelectItem>
                              <SelectItem value="4">4 - Clean</SelectItem>
                              <SelectItem value="5">5 - Very Clean</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <ValidationError
                      prefix="User Information"
                      field="userInformation"
                      errors={state.errors}
                    />
                  </div>
                </>
              )}
              <div className="py-4 flex flex-wrap flex-col float-right w-full gap-4">
                {step === 1 && (
                  <button
                    type="button"
                    onClick={goToNextStep}
                    className="bg-[#007aff] py-3 float-right text-center justify-end w-fit capitalize flex items-center text-white gap-2 px-4 font-medium rounded-lg"
                  >
                    Next Step <MdOutlineNavigateNext className="text-xl" />
                  </button>
                )}
                {step === 2 && (
                  <>
                    <div className="flex flex-wrap justify-between flex-4 gap-4 w-full">
                      <button
                        type="button"
                        onClick={goToPreviousStep}
                        className="px-5 py-3 flex items-center bg-gray-200 text-gray-700 rounded-lg"
                      >
                        <MdArrowBackIos className="text-lg" />
                        Back
                      </button>
                      <button
                        onClick={sendEmail}
                        className="w-fit bg-[#007aff] py-3 float-right text-center justify-center capitalize flex items-center text-white gap-1 px-4 font-medium rounded-lg"
                      >
                        <HiCheck className="text-xl" />
                        Confirm Booking
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default ContactForm;
