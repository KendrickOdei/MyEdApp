import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-auto w-full z-10 bg-[url('src/assets/DSC_3905.JPG')] bottom-0">
      <div className='bg-cyan-950 py-10'>
        <div className='container mx-auto text-center'>
          <span className='text-2xl text-white font-bold tracking-tight border-b-4 border-red-600'>
            Ed Educational Complex
          </span>
          <div className='mt-6'>
            <p className='text-white font-bold'>Location: Mataheko-Afienya</p>
            <p className='text-white font-bold'>Contact: 0208240435, 0560143603.</p>
          </div>
          <div className='mt-6 flex justify-center gap-4'>
            <a href="https://www.facebook.com" className='text-white text-2xl'>
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className='text-white text-2xl'>
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className='text-white text-2xl'>
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" className='text-white text-2xl'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
