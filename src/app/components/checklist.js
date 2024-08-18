import React from 'react';
import { cn } from "@/lib/utils";

const checklistItems = [
  {
    category: "Kitchen",
    items: [
      "Clean oven inside & outside (including trays)",
      "Clean inside and outside built-in microwave",
      "Clean cooktop & grill",
      "Clean range-hood & filter",
      "Clean bench top surfaces & splashback",
      "Clean sink, taps & handles",
      "Clean inside & outside cabinets & drawers, including top of cabinets",
      "Dust and remove cobwebs",
      "Vacuum and mop floors",
      "Clean outside dishwasher & handles",
      "Clean windows, sills & tracks (internally)",
      "Scrub & clean skirting boards",
      "Clean and dust lighting, switches, and fixtures",
      "Spot clean walls"
    ]
  },
  {
    category: "Bathroom & Toilet",
    items: [
      "Vacuum and mop floors",
      "Clean and descale shower screen and tiles",
      "Clean & dust exhaust fans & air vents",
      "Clean windows sills and tracks (internally)",
      "Clean toilet inside and outside",
      "Clean mirrors and wipe all counters",
      "Clean basin & bathtub (including taps & handles)",
      "Clean vanity (including taps & handles)",
      "Scrub & clean skirting boards",
      "Clean and dust lighting, switches, and fixtures",
      "Clean inside & outside cabinets & drawers",
      "Wipe clean doors and door frames",
      "Dust and remove cobwebs",
      "Scrub mineral deposits & mould"
    ]
  },
  {
    category: "Bedroom",
    items: [
      "Vacuum and mop floors",
      "Scrub & clean skirting boards",
      "Clean and dust lighting, switches & fixtures",
      "Dust and remove cobwebs",
      "Clean windows, sills & tracks (internally)",
      "Spot clean walls",
      "Clean & dust exhaust fans & air vents",
      "Clean cupboards, drawers & built-in wardrobes (inside & outside - including the top)",
      "Clean wardrobe mirrors, frames, and tracks",
      "Wipe clean doors and door frames"
    ]
  },
  {
    category: "Living & Dining",
    items: [
      "Vacuum and mop floors",
      "Scrub & clean skirting boards",
      "Clean and dust lighting, switches, and fixtures",
      "Dust and remove cobwebs",
      "Clean windows, sills & tracks (internally)",
      "Spot clean walls",
      "Clean & dust exhaust fans & air vents",
      "Clean cupboards and drawers (inside & outside - including the top)",
      "Clean and vacuum closet spaces",
      "Clean mirrors"
    ]
  },
  {
    category: "Entry & Hallway",
    items: [
      "Vacuum and mop floor",
      "Scrub & clean skirting boards",
      "Clean and dust lighting, switches, and fixtures",
      "Spot clean walls",
      "Dust and remove cobwebs",
      "Wipe clean doors and door frames"
    ]
  },
  {
    category: "Laundry",
    items: [
      "Vacuum and mop floor",
      "Scrub & clean skirting boards",
      "Clean windows, sills & tracks (internally)",
      "Clean and dust lighting, switches, and fixtures",
      "Wipe clean doors and door frames",
      "Clean sink, taps and tap handles",
      "Spot clean walls",
      "Dust and remove cobwebs",
      "Wipe clean washer & dryer surfaces",
      "Clean cabinets & drawers (inside & outside)"
    ]
  },
  {
    category: "Optional Extras",
    items: [
      "Garage (add-on): Vacuum & sweep floor, remove cobwebs, dust lighting and power points",
      "Balcony (add-on): Vacuum & mop floor, remove cobwebs, clean glass walls internally, wipe railings",
      "Sliding Glass Doors",
      "Balcony",
      "Deck/ Patio",
      "Wall washing",
      "Carpet Cleaning",
      "Exterior Windows",
      "Blinds, shutters & curtains",
      "Garage (sweep, dust & tidy)"
    ]
  }
];

const ChecklistCategory = ({ category, items }) => (
  <div className="p-4 lg:p-6 border border-gray-300 rounded-lg shadow-sm">
    <h3 className="text-xl font-semibold mb-4">{category}</h3>
    <ul className="space-y-2 list-inside list-disc">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const PricingChecklist = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">Cleaning <span className='text-[#007aff]'>Checklist</span></h2>
          <p className="text-lg text-gray-600">See below a detailed checklist of what's included in our end of lease cleaning and move-in cleaning service.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {checklistItems.map((category, index) => (
            <ChecklistCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingChecklist;
