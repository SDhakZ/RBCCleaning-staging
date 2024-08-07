import { useEffect } from "react";
import cleaningConfigurations from "@/app/data/cleaningConfigurations";

export function useDynamicFields(selectedOption, setFormData) {
  useEffect(() => {
    const config = cleaningConfigurations.find(
      (config) => config.key === selectedOption
    );

    if (config) {
      const initialFormData = {};

      config.fields.forEach((field) => {
        if (field.type === "number") {
          initialFormData[field.key] = 1;
        }
        if (field.type === "checkbox") {
          initialFormData[field.key] = false;
        }
        if (field.type === "number-and-dropdown") {
          initialFormData[field.key] = 1;
          initialFormData[field.dropdown.key] = ""; // Initial value for dropdown
        }
        if (field.dependentFields) {
          field.dependentFields.forEach((dependentField) => {
            if (dependentField.type === "number-and-dropdown") {
              initialFormData[dependentField.key] = 1;
              initialFormData[dependentField.dropdown.key] = "";
            } else if (dependentField.type === "number") {
              initialFormData[dependentField.key] = dependentField.min || 1;
            } else if (dependentField.type === "dropdown") {
              initialFormData[dependentField.key] = "";
            }
          });
        }
      });

      setFormData((prevFormData) => ({
        ...prevFormData,
        ...initialFormData,
      }));
    }
  }, [selectedOption, setFormData]);

  const resetDependentFields = (mainFieldKey, updatedFormData) => {
    const config = cleaningConfigurations.find((config) =>
      config.fields.some((field) => field.key === mainFieldKey)
    );

    if (config) {
      const mainField = config.fields.find(
        (field) => field.key === mainFieldKey
      );

      if (mainField && mainField.dependentFields) {
        mainField.dependentFields.forEach((dependentField) => {
          if (dependentField.type === "checkbox") {
            updatedFormData[dependentField.key] = false;
          } else if (dependentField.type === "number") {
            updatedFormData[dependentField.key] = 1;
          } else if (dependentField.type === "dropdown") {
            updatedFormData[dependentField.key] = "";
          }
        });
      }
    }
  };

  const handleDynamicChange = (event) => {
    const { name, type, value, checked } = event.target;

    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData };

      if (type === "checkbox") {
        updatedFormData[name] = checked;

        if (!checked) {
          resetDependentFields(name, updatedFormData);
        }
      } else {
        updatedFormData[name] = value;
      }

      return updatedFormData;
    });
  };

  return {
    handleDynamicChange,
  };
}
