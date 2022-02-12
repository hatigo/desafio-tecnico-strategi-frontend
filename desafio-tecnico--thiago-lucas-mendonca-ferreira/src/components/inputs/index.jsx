import './style.scss';


 function Input ({ inputState, setInputState, htmlFor, placeholder, type, text }) {

    return (
        <div className="input">

            <label htmlFor={htmlFor}>{text}</label>
            <input
                onChange={e => setInputState(e.target.value)}
                value={inputState}
                placeholder={placeholder}
                id={htmlFor}
                type={type}

            />

        </div>


    )
}

export default Input;