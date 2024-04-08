
const Form = ({handleHolderChange,handleNumberChange,holderName}) => {
    console.log(holderName)
    const handleHolder = (event) =>{
        const value = event.target.value;
        handleHolderChange(value);
    }
    const handleNumber = (event) =>{
        const value = event.target.value;
        handleNumberChange(value);
    }

    return (
        <div className=" text-violet-900 font-[500] flex justify-center items-center md:mt-0">
            <form className="flex flex-col w-[350px] p-2">
                <div className="flex flex-col pb-6">
                    <label htmlFor="name" className="text-xs pb-[5px]">C@RDHOLDER NAME</label>
                    <input autoComplete="auto" onChange={handleHolder} className="p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:border-violet-900" type="text" name="name" id="name" placeholder="Felicia Leire" />
                    <label className="text-xs pb-[5px]" htmlFor="number">C@RD NUMBER</label>
                    <input autoComplete="auto" onChange={handleNumber} className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-900" type="text" name="number" id="number" placeholder="9535 6473 3224 191E" />
                </div>
                <div>
                    <div className="flex">
                        <div className="flex flex-col w-1/2">
                            <label className="text-xs pb-[5px]" htmlFor="month">EXP. DATE (MM/YY)</label>
                            <div className="flex gap-2">
                                <input autoComplete="auto" className="w-[40%] focus:outline-none focus:border-violet-900 border p-2 rounded-md border-gray-300" type="number" name="month" id="month" placeholder="DD" />
                                <input autoComplete="auto" className=" w-[40%] focus:outline-none focus:border-violet-900 border p-2 rounded-md border-gray-300" type="number" name="year" id="year" placeholder="YY" />
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-xs pb-[5px]" htmlFor="cvc">CVC</label>
                            <input autoComplete="auto" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-900" type="number" name="cvc" id="cvc" placeholder="e.g 123" />
                        </div>
                    </div>
                </div>
                <button className="px-2 py-4 mt-6 text-white rounded-md bg-violet-950" type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default Form