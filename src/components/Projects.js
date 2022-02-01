import { useEffect } from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import estatesync from '../assets/estatesync.png';

export default function Projects() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from('#esImg', {
      scrollTrigger: {
        trigger: '#esImg'
      },
      y: 50,
      duration: 0.5,
      opacity: 0
    });

    gsap.from('#esAbout', {
      scrollTrigger: {
        trigger: '#esAbout'
      },
      y: 50,
      duration: 0.5,
      opacity: 0
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16 md:pb-36 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <h2 className="text-3xl w-1/3 pb-4 text-white text-left font-extrabold tracking-tight sm:text-4xl border-b-8 border-teal-700">
        Projects
      </h2>
      <div className="relative w-full mt-12 lg:mt-12 flex-col justify-center align-middle">
        <img
          id='esImg' 
          className="rounded-xl w-full md:w-10/12 object-cover"
          src={estatesync}
          alt="Project image"
        />
        <div id='esAbout' className="w-full md:w-2/3 lg:w-1/2 md:mr-20 relative md:absolute md:-right-2 top-10 md:top-20 lg:top-14 text-left py-6 px-8 shadow-2xl bg-zinc-800 border-t-4 border-teal-700">
            <p className="text-gray-300 text-sm uppercase">Deployed</p>
            <h2 className="text-white pb-1">EstateSync</h2>
            <p className="text-white text-sm leading-7"><b>Synchronized estate management. </b>EstateSync removes the burden from the fragmented experience of estate management by aligning assets, people, and process on a single platform. </p>
            <a href='https://estatesync.co/' target='_blank' className='no-underline'>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 shadow-sm text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                <ExternalLinkIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Check it out
              </button>
            </a>
            <div className='flex justify-between w-7/12 md:w-1/3 mt-4'>
              <i className="fab fa-js-square fa-2x text-zinc-500 ease-in-out duration-200 hover:-translate-y-2"></i>
              <i className="fab fa-html5 fa-2x text-zinc-500 ease-in-out duration-200 hover:-translate-y-2"></i>
              <i className="fab fa-css3-alt fa-2x text-zinc-500 ease-in-out duration-200 hover:-translate-y-2"></i>
              <i className="fab fa-react fa-2x text-zinc-500 ease-in-out duration-200 hover:-translate-y-2"></i>
            </div>
        </div>
      </div>
    </div>
  )
}