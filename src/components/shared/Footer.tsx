import Image from 'next/image';
import logo from '@/assets/logo.png'


const Footer = () => {
    return (
        <footer className=" bg-[#1A1D23] border border-gray-700">
            <div className='container mx-auto px-6 py-2 md:px-12 flex flex-col sm:flex-row items-center justify-between'>
                <div className="flex items-center gap-2 mb-4 sm:mb-0">

                    <Image src={logo} alt='logo' className='rotate-90 h-10 w-8' />
                    <span className="text-white font-extrabold tracking-widest text-lg">
                        FITLOG
                    </span>
                </div>

                <p className="text-[#6b7280] text-sm text-center sm:text-right">
                    © 2026 FitLog - Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;