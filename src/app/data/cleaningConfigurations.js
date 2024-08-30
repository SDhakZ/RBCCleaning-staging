const cleaningConfigurations = [
  {
    title: "Air BnB Cleaning Details",
    key: "Air BNB Cleaning",
    fields: [
      {
        type: "heading",
        label: "Quantity Specifications",
      },
      {
        label: "Number of Storeys",
        type: "number",
        key: "Number of storeys",
        min: 1,
      },
      {
        label: "Number of Rooms",
        type: "number",
        key: "Number of rooms",
        min: 1,
      },
      {
        label: "Include Toilets",
        type: "checkbox",
        key: "Include Toilets",
        dependentFields: [
          {
            label: "Number of Toilets",
            type: "number",
            key: "Number of toilets",
          },
        ],
      },
      {
        type: "heading",
        label: "Specifications of amenities to clean",
      },
      {
        label: "Include Kitchen",
        type: "checkbox",
        key: "Include Kitchen",
        dependentFields: [
          {
            label: "Washing Dishes",
            type: "checkbox",
            key: "Washing Dishes",
          },
          {
            label: "Cleaning Fridge",
            type: "checkbox",
            key: "Cleaning Fridge",
          },
        ],
      },
      {
        label: "Changing linens",
        type: "checkbox",
        key: "changingLinens",
      },
      {
        label: "Refilling toiletries",
        type: "checkbox",
        key: "refillingToiletries",
      },
    ],
  },
  {
    title: "Buffering Details",
    key: "Buffering",
    fields: [
      {
        type: "heading",
        label: "Quantity Specifications",
      },
      {
        label: "Area of Building",
        type: "number-and-dropdown",
        required: true,
        key: "Area of the building",
        min: 0,
        dropdown: {
          key: "Area Unit",
          label: "unit",
          option: ["sq ft", "sq m", "sq yards", "sq km"],
          required: true,
        },
      },
    ],
  },
  {
    title: "Builder Cleaning Details",
    key: "Builder Cleaning",
    fields: [
      {
        type: "heading",
        label: "Quantity Specifications",
      },
      {
        label: "Area of Building",
        type: "number-and-dropdown",
        required: true,
        key: "Area of the building",
        min: 0,
        dropdown: {
          key: "Area Unit",
          label: "unit",
          option: ["sq ft", "sq m", "sq yards", "sq km"],
          required: true,
        },
      },

      {
        label: "Cleaning Type",
        type: "radio",
        option: ["Normal Cleaning", "Detailed Cleaning"],
        key: "Cleaning Type",
        required: true,
      },
    ],
  },
  {
    title: "Carpet steam cleaning details",
    key: "Carpet Steam Cleaning",
    fields: [
      {
        type: "heading",
        label: "Quantity Specifications",
      },

      {
        label: "Number of Rooms",
        type: "number",
        key: "Number of rooms",
        min: 1,
      },

      {
        type: "heading",
        label: "Specifications of amenities to clean",
      },
      {
        label: "Hallway",
        type: "checkbox",
        key: "Hallway",
      },
      {
        label: "Sitting area",
        type: "checkbox",
        key: "Sitting area",
      },
      {
        label: "Stairs",
        type: "checkbox",
        key: "Stairs",
      },
    ],
  },
  {
    title: "Domestic Cleaning Details",
    key: "Domestic Cleaning",
    fields: [
      {
        type: "heading",
        label: "Quantity Specifications",
      },
      {
        label: "Number of Storeys",
        type: "number",
        key: "Number of storeys",
        min: 1,
      },
      {
        label: "Number of Rooms",
        type: "number",
        key: "Number of rooms",
        min: 1,
      },
      {
        label: "Include Toilets",
        type: "checkbox",
        key: "Include Toilets",
        dependentFields: [
          {
            label: "Number of Toilets",
            type: "number",
            key: "Number of toilets",
            min: 1,
          },
        ],
      },
      {
        type: "heading",
        label: "Specifications of amenities to clean",
      },
      {
        label: "Include Kitchen",
        type: "checkbox",
        key: "Include Kitchen",
        dependentFields: [
          {
            label: "Washing Dishes",
            type: "checkbox",
            key: "Washing Dishes",
          },
          {
            label: "Cleaning Fridge",
            type: "checkbox",
            key: "Cleaning Fridge",
          },
        ],
      },
      {
        label: "Sitting area",
        type: "checkbox",
        key: "Sitting area",
      },
      {
        label: "Hallway",
        type: "checkbox",
        key: "Hallway",
      },
    ],
  },
  {
    title: "End of the lease cleaning details",
    key: "End of the Lease Cleaning",
    fields: [
      {
        type: "heading",
        label: "Quantity Specifications",
      },
      {
        label: "Number of Storeys",
        type: "number",
        key: "Number of storeys",
        min: 1,
      },
      {
        label: "Number of Rooms",
        type: "number",
        key: "Number of rooms",
        min: 1,
      },
      {
        label: "Include Toilets",
        type: "checkbox",
        key: "Include Toilets",
        dependentFields: [
          {
            label: "Number of Toilets",
            type: "number",
            key: "Number of toilets",
            min: 1,
          },
        ],
      },

      {
        label: "Number of big windows",
        type: "number",
        key: "Number of big windows",
        min: 0,
      },
      {
        label: "Number of small windows",
        type: "number",
        key: "Number of small windows",
        min: 0,
      },

      {
        type: "heading",
        label: "Specifications of amenities to clean",
      },
      {
        label: "Include Kitchen",
        type: "checkbox",
        key: "Include Kitchen",
        dependentFields: [
          {
            label: "Washing Dishes",
            type: "checkbox",
            key: "Washing Dishes",
          },
          {
            label: "Cleaning Fridge",
            type: "checkbox",
            key: "Cleaning Fridge",
          },
        ],
      },
      {
        label: "Sitting area",
        type: "checkbox",
        key: "Sitting area",
      },
      {
        label: "Hallway",
        type: "checkbox",
        key: "Hallway",
      },
    ],
  },

  {
    title: "Lawn Mowing",
    key: "Lawn Mowing",
    fields: [
      {
        type: "heading",
        label: "Quantity Specifications",
      },
      {
        label: "Area of the lawn",
        type: "number-and-dropdown",
        required: true,
        key: "Area of the lawn",
        min: 1,
        dropdown: {
          key: "Area Unit",
          label: "unit",
          option: ["sq ft", "sq m", "sq yards", "sq km"],
          required: true,
        },
      },

      {
        type: "heading",
        label: "Additional Cleaning Details",
      },
      {
        label: "Removing Weeds",
        type: "checkbox",
        key: "Removing Weeds",
      },
      {
        label: "Trimming",
        type: "checkbox",
        key: "Trimming",
      },
    ],
  },

  {
    key: "Office Cleaning",
    title: "Office Cleaning Details",
    fields: [
      {
        type: "heading",
        label: "Quantity Specifications",
      },
      {
        label: "Number of Storeys",
        type: "number",
        key: "Number of storeys",
        min: 1,
        required: true,
      },
      {
        label: "Number of Rooms",
        type: "number",
        key: "Number of rooms",
        min: 1,
        required: true,
      },
      {
        label: "Include Toilets",
        type: "checkbox",
        key: "Include Toilets",
        dependentFields: [
          {
            label: "Number of Toilets",
            type: "number",
            key: "Number of toilets",
            min: 1,
          },
        ],
      },
      {
        type: "heading",
        label: "Specification of amenities to clean",
      },
      {
        label: "Include Kitchen",
        type: "checkbox",
        key: "Include Kitchen",
        dependentFields: [
          {
            label: "Washing Dishes",
            type: "checkbox",
            key: "Washing Dishes",
          },
          {
            label: "Cleaning Fridge",
            type: "checkbox",
            key: "Cleaning Fridge",
          },
        ],
      },
    ],
  },

  {
    title: "Polishing and Washing",
    key: "Polishing and Washing",
    fields: [
      {
        type: "heading",
        label: "Quantity Specifications",
      },
      {
        label: "Area of the building",
        type: "number-and-dropdown",
        required: true,
        key: "Area of the building",
        min: 1,
        dropdown: {
          key: "Area Unit",
          label: "unit",
          option: ["sq ft", "sq m", "sq yards", "sq km"],
          required: true,
        },
      },

      {
        type: "radio",
        label: "Cleaning type",
        option: ["Polishing", "Washing", "Polishing and Washing"],
        key: "Cleaning Type",
        required: true,
      },
    ],
  },

  {
    title: "Pressure Hose Cleaning Details",
    key: "Pressure Hose Cleaning",
    fields: [
      {
        type: "heading",
        label: "Quantity Specifications",
      },
      {
        label: "Car Park",
        type: "checkbox",
        key: "Car Park",
        dependentFields: [
          {
            label: "Area of the car park",
            type: "number-and-dropdown",
            required: true,
            key: "Area of the car park",
            min: 1,
            dropdown: {
              key: "Area Unit",
              label: "unit",
              option: ["metre", "sq ft", "sq m", "sq yards", "sq km"],
              required: true,
            },
          },
        ],
      },
      {
        label: "Walk Ins",
        type: "checkbox",
        key: "Walk Ins",
        dependentFields: [
          {
            label: "Area of the walk ins",
            type: "number-and-dropdown",
            required: true,
            key: "Area of the walk ins",
            min: 1,
            dropdown: {
              key: "Area Unit",
              label: "unit",
              option: ["metre", "sq ft", "sq m", "sq yards", "sq km"],
              required: true,
            },
          },
        ],
      },
      {
        label: "Concrete Pavements",
        type: "checkbox",
        key: "Concrete Pavements",
        dependentFields: [
          {
            label: "Area of the pavement",
            type: "number-and-dropdown",
            required: true,
            key: "Area of the pavement",
            min: 1,
            dropdown: {
              key: "Area Unit",
              label: "unit",
              option: ["metre", "sq ft", "sq m", "sq yards", "sq km"],
              required: true,
            },
          },
        ],
      },
    ],
  },

  {
    title: "Rubbish Pickup details",
    key: "Pickup Rubbish",
    fields: [
      {
        type: "heading",
        label: "Pickup type",
      },
      {
        label: "General Rubbish",
        type: "checkbox",
        key: "General Rubbish",
      },
      {
        label: "Green Waste",
        type: "checkbox",
        key: "Green Waste",
      },
    ],
  },
  {
    title: "Window Cleaning Details",
    key: "Window Cleaning",
    fields: [
      {
        type: "heading",
        label: "Quantity Specifications",
      },
      {
        label: "Number of Storeys",
        type: "number",
        key: "Number of storeys",
        min: 1,
        required: true,
      },
      {
        label: "Number of big windows",
        type: "number",
        key: "Number of big windows",
        min: 0,
      },
      {
        label: "Number of small windows",
        type: "number",
        key: "Number of small windows",
        min: 0,
      },
    ],
  },
];

export default cleaningConfigurations;
