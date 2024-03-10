
const Newsletter = () => {
  return (
    <div className="w-full py-16 bg-black text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 text-center sm:text-left">
            <div className="lg:col-span-2">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="p-3 w-full rounded-md text-black" type="email" placeholder="Enter email" />
                    <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto py-3 my-6 sm:ml-4 text-black font-bold">Notify Me</button>
                </div>
                <p>We care about the protection of your data. <span className="text-[#00df9a]">Read our Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter