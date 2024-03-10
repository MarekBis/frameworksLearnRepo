import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] grid mx-auto md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center items-center text-center md:items-start md:text-left'>
                <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 md:pr-6'>Manage Data Analytics Centrally</h1>
                <p className='px-8 md:pr-6 md:pl-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    molestiae delectus culpa hic assumenda, voluptate reprehenderit
                    dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                    eveniet ex deserunt fuga?
                </p>
                <button className="bg-[#00df9a] w-[200px] rounded-md py-3 my-6 mx-auto md:mx-0 text-black font-bold">Get started</button>
            </div>
        </div>
    </div>
  )
}
export default Analytics