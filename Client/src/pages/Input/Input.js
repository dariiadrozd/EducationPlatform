
    function Input({el,setInp, inp}) {
        function changeInput(e){
            setInp({ ...inp, [e.target.name]: e.target.value })
        }
        return (
            <>
                <div><input name={el.name} placeholder={el.placeholderValue} onChange={changeInput}></input></div>
            </>
        )
    }

    export default Input;