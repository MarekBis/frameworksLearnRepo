import { useState } from "react";

const Form = ({ handleFormDataChange, handleButton, formData }) => {

    Form.propTypes = null;
    console.log(formData.holder)
    const handleInput = (event) => {
        handleFormDataChange(event.target.name, event.target.value);
    }

    const [errors, setErrors] = useState({});

    const handleValidation = (event) => {
        event.preventDefault();
        setErrors(Validation(formData));

    }

    const Validation = (formData) => {
        const errors = {}
        if (formData.holder === ""){
            console.log("holder required");
            errors.name="Name is required";
        }
        if (formData.number === ""){
            console.log("number required");
            errors.number="Number is required";
        }
        if (formData.dateYear === ""){
            console.log("year required");
            errors.dateYear="Year is required";
        }
        if (formData.dateMonth === ""){
            console.log("month required");
            errors.dateMonth="Month is required";
        }
        if (formData.CVC === ""){
            console.log("cvc required");
            errors.CVC="CVC is required";
        }
        return errors;

    }

    
    return (
        <div className=" text-violet-900 md:h-screen font-[500] flex justify-center items-center md:mt-0">
            <form className="flex flex-col w-[350px] p-2" onSubmit={handleValidation}>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs pb-[5px]">HOLDER NAME</label>


                    <input autoComplete="auto" onChange={handleInput} className={`p-2 border ${errors.name ?"border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-violet-900}`} type="text" name="holder" id="name" placeholder="Felicia Leire" />
                    {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                    <label className="text-xs pb-[5px] pt-6" htmlFor="number">NUMBER</label>


                    <input autoComplete="auto" onChange={handleInput} className={`p-2 border ${errors.number ?"border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-violet-900`} type="text" name="number" id="number" placeholder="9535 6473 3224 1919" />
                    {errors.number && <span className="text-xs text-red-500">{errors.number}</span>}
                </div>
                <div>
                    <div className="flex">
                        <div className="flex flex-col w-1/2">
                            <label className="text-xs pb-[5px] pt-6" htmlFor="month">EXP. DATE (MM/YY)</label>

                            <div className="flex gap-2">
                                <input autoComplete="auto" onChange={handleInput} className={`w-[40%] focus:outline-none focus:border-violet-900 border p-2 rounded-md ${errors.dateMonth ?"border-red-500" : "border-gray-300"}`} type="number" name="dateMonth" id="month" placeholder="MM" />
                                <input autoComplete="auto" onChange={handleInput} className={`w-[40%] focus:outline-none focus:border-violet-900 border p-2 rounded-md ${errors.dateYear ?"border-red-500" : "border-gray-300"}`} type="number" name="dateYear" id="year" placeholder="YY" />
                            </div>
                            {errors.dateYear && <span className="text-xs text-red-500">{errors.dateYear}</span>}
                            {errors.dateMonth && <span className="text-xs text-red-500">{errors.dateMonth}</span>}
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-xs pb-[5px] pt-6" htmlFor="cvc">CVC</label>
                            <input autoComplete="auto" onChange={handleInput} className={`w-full p-2 border ${errors.CVC ?"border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-violet-900`} type="number" name="CVC" id="cvc" placeholder="e.g 123" />
                            {errors.CVC && <span className="text-xs text-red-500">{errors.CVC}</span>}

                        </div>
                    </div>
                </div>
                <button className="px-2 py-4 mt-6 text-white rounded-md bg-violet-950" onClick={(!formData.holder || !formData.number || !formData.dateMonth || !formData.dateYear || !formData.CVC) ? null : handleButton} type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default Form