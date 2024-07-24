import cleaningConfigurations from "../../data/cleaningConfigurations";

export function ContactDetailModule({
  selectedOption,
  formData,
  handleDynamicChange,
}) {
  const config = cleaningConfigurations.find(
    (config) => config.key === selectedOption
  );

  if (!config) {
    return null;
  }

  const renderFields = (fields) =>
    fields.map((field, index) => {
      if (field.type === "heading") {
        return (
          <h4 key={index} className="font-semibold">
            {field.label}
          </h4>
        );
      }

      if (field.type === "checkbox") {
        return (
          <div key={index} className="flex items-center space-x-2">
            <label htmlFor={field.key}>{field.label}</label>
            <input
              type="checkbox"
              id={field.key}
              name={field.key}
              checked={!!formData[field.key]}
              onChange={handleDynamicChange}
              className="rounded-md"
              required={field.required}
            />
            {formData[field.key] && field.dependentFields && (
              <div className="ml-6">{renderFields(field.dependentFields)}</div>
            )}
          </div>
        );
      }

      if (field.type === "number") {
        return (
          <div key={index}>
            <label className="mr-2" htmlFor={field.key}>
              {field.label}
            </label>
            <input
              type="number"
              min={1}
              id={field.key}
              name={field.key}
              value={formData[field.key] || ""}
              onChange={handleDynamicChange}
              className="px-2 w-fit text-sm max-w-[60px] py-1 border-2 rounded-md border-[#B8B8B8] outline-2 outline-primary-orange-300"
              required={field.required}
            />
          </div>
        );
      }

      if (field.type === "dropdown") {
        return (
          <div key={index}>
            <label htmlFor={field.key}>{field.label}</label>
            <select
              id={field.key}
              name={field.key}
              value={formData[field.key] || ""}
              onChange={handleDynamicChange}
              className="px-5 py-3 bg-transparent border-2 rounded-md border-[#B8B8B8] outline-2 outline-primary-orange-300"
              required={field.required}
            >
              <option value="" disabled hidden>
                {field.label}
              </option>
              {field.option.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        );
      }
      if (field.type === "number-and-dropdown") {
        return (
          <div className="flex gap-2 item-center">
            <div key={index}>
              <label className="mr-2" htmlFor={field.key}>
                {field.label}
              </label>
              <input
                type="number"
                min={1}
                id={field.key}
                name={field.key}
                value={formData[field.key] || ""}
                onChange={handleDynamicChange}
                className="px-2 w-fit text-sm max-w-[60px] py-1 border-2 rounded-md border-[#B8B8B8] outline-2 outline-primary-orange-300"
                required={field.required}
              />
            </div>
            <div key={index}>
              <select
                id={field.dropdown.key}
                name={field.dropdown.key}
                value={formData[field.dropdown.key] || ""}
                onChange={handleDynamicChange}
                className="px-2 py-1 bg-transparent border-2 rounded-md border-[#B8B8B8] outline-2 outline-primary-orange-300"
                required={field.dropdown.required}
              >
                <option value="" disabled hidden>
                  {field.dropdown.label}
                </option>
                {field.dropdown.option.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );
      }

      if (field.type === "radio") {
        return (
          <div key={index}>
            <p>{field.label}</p>
            {field.option.map((opt, i) => (
              <div key={i} className="flex items-center space-x-3">
                <input
                  type="radio"
                  id={`${field.key}-${opt}`}
                  name={field.key}
                  value={opt}
                  checked={formData[field.key] === opt}
                  onChange={handleDynamicChange}
                  className="rounded-md"
                  required={field.required}
                />
                <label htmlFor={`${field.key}-${opt}`}>{opt}</label>
              </div>
            ))}
          </div>
        );
      }

      return null;
    });

  return (
    <div className="border-[#B8B8B8] rounded-md flex flex-col gap-4  border-2 border-solid p-4">
      {renderFields(config.fields)}
    </div>
  );
}
