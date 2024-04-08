import CARDFRONT from '../../src/images/bg-card-front.png'
import CARDBACK from '../../src/images/bg-card-back.png'
import LOGO from '../../src/images/card-logo.svg'



const CardBack = () => {
    return (
        <div className='relative'>
            <img className='w-[300px] md:w-[350px]' src={CARDBACK} alt="cardb" />
            <p className="absolute text-white top-[72px] md:top-[84px] right-9 text-xs">000</p>
        </div>
    )
}

const CardFront = ({holder, number}) => {
    return (
        <div className='relative'>
            <img className='w-[300px] md:w-[350px]' src={CARDFRONT} alt="cardf" />
            <img src={LOGO} className='absolute top-4 left-4 w-[60px]' alt="" />

            <p className="absolute text-white bottom-14 tracking-[0.2rem] text-xl left-5 font-[500] ">{number}</p>
            <p className="absolute text-sm text-white bottom-5 left-5">{holder}</p>
            <p className="absolute text-xs text-white bottom-5 right-5">00/00</p>
        </div>
    )
}




const Cards = ({holderName,cardNumber}) => {
    return (
        <div className="relative">
            <img src="url(../../src/images/bg-main-desktop.png" className='bg-cover h-[250px] w-full md:w-4/5 md:h-screen absolute' alt="" />
            <div className='flex items-center justify-center md:justify-end'>
                <div className='flex items-center md:h-screen'>
                    <div className='relative w-[375px] h-[350px]'>
                        <div className="absolute right-2 top-10 md:top-44 md:-right-6">
                            <CardBack />
                        </div>
                        <div className="absolute left-2 top-36 md:-top-10 md:-left-6" >
                            <CardFront holder = {holderName} number = {cardNumber} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards