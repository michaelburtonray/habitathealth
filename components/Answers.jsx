export default function Answers({ data, formDataState, handleChange }) {
  const answers = data
    ? data.map((a) => {
      const { _key, _type, answers, heading, schemaName } = a;
      console.log(a)

      switch (_type) {
        case 'answerRadioButtons':
          return (
            <div key={_key} className="flex max-lg:flex-col gap-6 lg:gap-8 mt-10">
              {answers.map(({ _key: key, value }) => (
                <div key={key} className="label-input-group">
                  <input type="radio" id={key} name={schemaName} value={value} className="hidden" onChange={handleChange} checked={formDataState[schemaName] === value} />
                  <label htmlFor={key} className="body--large-semibold border border-green box-border flex items-center justify-center p-[0.625rem] rounded-2xl transition-colors w-fit min-w-[7.125rem] h-fit min-h-[3.375rem]">{value}</label>
                </div>
              ))}

            </div>
          );

          case 'answerSelectDropdown':
            return (
              <div key={_key} className="label-select-group mt-10">
                <label htmlFor={_key} className="body--large">{heading}</label>
                <select id={_key} name={schemaName} value={formDataState[schemaName]} onChange={handleChange} className="body--large !py-0">
                  {answers.map(({ _key: key, value }) => (
                    <option key={key} value={value}>{value}</option>
                  ))}
                </select>
              </div>
            );

          case 'answerText':
            return (
              <div key={_key} className="label-input-group mt-10">
                <label htmlFor={_key} className="body--large">{heading}</label>
                <input type="text" id={_key} name={schemaName} value={formDataState[schemaName]} onChange={handleChange} className="input body--large" />
              </div>
            );

        default:
          return <h2 key={_key}>Missing Component: {a._type}</h2>
      }
    })
    : [];

  return (
    <>
      {answers.filter(Boolean)}
    </>
  )
};