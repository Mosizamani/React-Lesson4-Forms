function FormField({ label, name, placeholder, value, type, handleChange, error }) {
  return (
    <>
        <div>
        <label>{label}
            <input
                name={name}
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
