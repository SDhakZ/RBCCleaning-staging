const cleaningConfigurations = [
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
        key: "Number of stores",
        required: true,
      },
      {
        label: "Number of Rooms",
        type: "number",
        key: "Number of rooms",
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
            required: true,
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
        dropdown: {
          key: "Area Unit",
          label: "unit",
          option: ["sq ft", "sq m", "sq yards", "sq km"],
          required: true,
        },
      },

      {
        type: "heading",
        label: "Cleaning Type",
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
        key: "Number of stores",
      },
      {
        label: "Number of Rooms",
        type: "number",
        key: "Number of rooms",
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
];

export default cleaningConfigurations;
