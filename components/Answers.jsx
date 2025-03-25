export default function Answers({ data, formDataState, handleChange }) {
  const answers = data
    ? data.map((a) => {
      const { _key, _type, answers, heading, schemaName } = a;

      switch (_type) {
        case 'answerRadioButtons':
          return (
            <div key={_key} className="flex gap-6 lg:gap-8 mt-10">
              {answers.map(({ _key: key, value }) => (
                <div key={key} className="label-input-group">
                  <input required type="radio" id={key} name={schemaName} value={value} className="hidden" onChange={handleChange} checked={formDataState[schemaName] === value} />
                  <label htmlFor={key} className="body--large-semibold border border-green box-border flex items-center justify-center p-[0.625rem] rounded-2xl transition-colors w-fit min-w-[7.125rem] h-fit min-h-[3.375rem]">{value}</label>
                </div>
              ))}

            </div>
          );

          case 'answerSelectDropdown':
            return (
              <div key={_key} className="label-select-group mt-10">
                <label htmlFor={_key} className="body--large">{heading}</label>
                <select required id={_key} name={schemaName} value={formDataState[schemaName]} onChange={handleChange} className="select body--large !py-0">
                  {answers.map(({ _key: key, value }) => (
                    <option key={key} value={value}>{value}</option>
                  ))}
                </select>
              </div>
            );

          case 'answerText':
            let inputType = 'text';
            if (schemaName === 'email') inputType = 'email';
            else if (schemaName === 'phone') inputType = 'tel';

            return (
              <div key={_key} className="label-input-group mt-10">
                <label htmlFor={_key} className="body--large">{heading}</label>
                <input
                  required
                  type={inputType}
                  id={_key}
                  name={schemaName}
                  value={formDataState[schemaName] || ''}
                  onChange={handleChange}
                  className="input peer body--large invalid:border-red"
                  {...(inputType === 'tel' && { pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}', placeholder: '123-456-7890' })}
                />
                <p className="body--small invisible peer-invalid:visible mt-2 text-red">*This field is required</p>
              </div>
            );

          case 'answerTextarea':
            return (
              <div key={_key} className="label-input-group mt-10">
                <label htmlFor={_key} className="body--large">{heading}</label>
                <textarea
                  id={_key}
                  maxLength={600}
                  name={schemaName}
                  value={formDataState[schemaName] || ''}
                  className="textarea body--large invalid:border-red"
                  onChange={handleChange}
                />
                <p className="body--small invisible peer-invalid:visible mt-2 text-red">*This field is required</p>
              </div>
            );

        default:
          return <p key={_key}>Missing Component: {a._type}</p>
      }
    })
    : [];

  return (
    <>
      {answers.filter(Boolean)}
    </>
  )
};