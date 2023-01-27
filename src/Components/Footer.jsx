import linkedin from './img/linkedin.png'
import github from './img/github.png'


function Footer(props) {
    return (
        <>
           <section  id="contact" className='max-w-[100%] bg-[#e6edf1] p-6 h-96 flex items-center justify-center'>
            <div className='w-[80%] bg-[#fff] m-auto p-6 border-4 border-white rounded-2xl'>
                    <div className='flex justify-between items-center'>
                    {/* name and contact section */}
                <div className='p-0 m-0 text-left text-black'>
                <h1 className='text-4xl font-extrabold font-[poppins]'>Daniela Franco.</h1>
                <h3 className='underline mt-3 text-xl font-medium'>!Puedes contactarme!</h3>
                <p className='text-xl mt-3'>iosdanielafranco@gmail.com</p>
                <p className=' text-lg'>+54 9 11 2255 2100</p>
                </div>
                {/* todo tiene que estar en ingles */}
                {/* Estoy en busca de mi primera oportunidad laboral como desarrolladora para aportar mi conocimiento transformarlo, y hacerlo crecer creando soluciones para los problemas de la gente */}
                {/* middle section*/}
                <div className=' flex justify-center p-auto'> 
                <p className='ml-[-20px] text-black'>Todos los derechos reservados - 2023 </p>
                </div>

                {/* social media section */}
                    <div className='flex p-auto'>
                    <a href=""><img src={github} alt="" className='w-[35px] h-[35px] m-4' /></a>
                    <a href=""><img src={linkedin} alt="" className='w-[35px] h-[35px] m-4' /></a>
                    </div>
                    </div>
                </div>
            </section> 
        </>
    );
}

export default Footer;