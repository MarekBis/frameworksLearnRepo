import COMPLETED from '../images/icon-complete.svg'
const Completed = ({ handleButton }) => {
    Completed.propTypes = null;
    return (
        <div className='flex flex-col items-center justify-center gap-6 mt-8 md:mt-0 md:h-screen'>
            <img src={COMPLETED} alt="completed" />
            <h2 className='text-3xl font-[500]'>THANK YOU!</h2>
            <p className='font-[500] text-gray-400'>We have added your card details</p>
            <button type="submit" className='p-4 text-white rounded-md w-[300px] bg-violet-950 font-[500]' onClick={handleButton}>Continue</button>
        </div>
    )
}

export default Completed