function FormField({ label, firstname, familyname, company, email, placeholder, value, type, handleChange, error }) {
    return (
      <>
          <div>
          <label>{label}
              <input
                  name={name}
                  fistname={firstname}
                  familyname={familyname}
                  company={company}
                  email={email}
                  placeholder={placeholder}
                  value={value}
                  type={type}
                  onChange={handleChange}
              />
          </label>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
      </>
    )
  }
  
  export default FormField