import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import './Home.css';
import {useState} from 'react';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const openPdf = ():void => {
    const pdfUrl = '/MyResume.pdf'
    window.open(pdfUrl, '_blank');
  }

  return(
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white px-10 text-center md:text-left md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className='developedby text-xl font-burtons dark:text-white'>developedbydiptanshu</h1>
            <ul className='options flex items-center justify-evenly'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-2xl dark:text-white' /></li>
              <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#" onClick={openPdf}>Resume</a></li>
            </ul>
          </nav>
          <div className=' text-center p-10'>
            <h2 className=' text-4xl py-2 text-teal-600 font-medium md:text-6xl'>Diptanshu Banerjee</h2>
            <h3 className=' text-2xl py-2 md:text-3xl dark:text-white'>Developer and Coding Enthusiast</h3>
            <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>Been contributing in OpenSource Projects from the past 3 months, my expertise lies in MERNstack and fullstack development. Feel free to checkout my socials down below. </p>
          </div>
          <div className=' text-5xl flex justify-center gap-20 py-3 text-gray-600'>
            <a href="https://twitter.com/diptanshu1044"><AiFillTwitterCircle className="dark:text-white" /></a>
            <a href="https://www.linkedin.com/in/diptanshu1044/"><AiFillLinkedin className="dark:text-white" /></a>
            <a href="https://github.com/diptanshu1044/"><AiFillGithub className="dark:text-white" /></a>
          </div>
        </section>


        <section>
          <div>
            <h3 className=' text-3xl py-1 dark:text-white'>About Me</h3>
            <p className=' text-md py-2 leading-8 text-gray-700 dark:text-gray-400'>I started coding very early from my school(java) days but after a certain point i was stuck as to why i was coding. I gave up after the topics started getting more difficult. After that i got into coding through coding discord bots. I learnt Javascript and NodeJS and soon i switched to learning fullstack web development. Currently I am a fullstack developer, my expertise lies in MERNstack.</p>
          </div>

          <div>
            <div className='text-center shadow-lg rounded-xl p-10 mt-10'>
              <h3 className=' py-4 text-teal-600 font-bold'>Frameworks/Libraries I use</h3>
              <p className='text-gray-800 py-1 dark:text-gray-300'>NextJS</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>React</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Typescript</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;