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
          <div key={index} className="flex items-center w-full space-x-2">
            <label className="whitespace-nowrap" htmlFor={field.key}>
              {field.label}:
            </label>
            <input
              type="checkbox"
              id={field.key}
              name={field.key}
              checked={!!formData[field.key] || false}
              onChange={handleDynamicChange}
              className="rounded-md"
              required={field.required}
            />
            {formData[field.key] && field.dependentFields && (
              <div className="w-full pl-2 item-center">
                {renderFields(field.dependentFields)}
              </div>
            )}
          </div>
        );
      }

      if (field.type === "number") {
        return (
          <div key={index}>
            <label className="mr-2 whitespace-nowrap" htmlFor={field.key}>
              {field.label}:
            </label>
            <input
              type="number"
              min={field.min}
              id={field.key}
              name={field.key}
              defaultValue={1}
              value={formData[field.key] || field.min}
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
            <label htmlFor={field.key}>{field.label}:</label>
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
          <div className="flex w-full gap-2 item-center">
            <div
              className="flex flex-wrap items-center w-full space-y-2"
              key={index}
            >
              <label className="mr-2 whitespace-nowrap" htmlFor={field.key}>
                {field.label}:
              </label>
              <div className="flex flex-row w-full gap-2">
                <input
                  type="number"
                  min={field.min}
                  id={field.key}
                  name={field.key}
                  value={formData[field.key] || field.min === 0 ? null : 1}
                  onChange={handleDynamicChange}
                  className="px-2 w-fit text-sm max-w-[60px] py-1 border-2 rounded-md border-[#B8B8B8] outline-2 outline-primary-orange-300"
                  required={field.required}
                />

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
            </div>
          </div>
        );
      }

      if (field.type === "radio") {
        return (
          <div key={index}>
            <p className="mb-2 font-semibold ">{field.label}</p>
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
    <div className="border-[#B8B8B8] rounded-md flex flex-col gap-4 w-full  border-2 border-solid p-4">
      {renderFields(config.fields)}
    </div>
  );
}
