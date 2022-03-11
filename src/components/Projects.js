import { ExternalLinkIcon } from '@heroicons/react/solid';

// project image imports
import estatesync from '../assets/estatesync.png';
import ifaas from '../assets/ifaas.png';
import dotts from '../assets/dotts.png';

// Project icon variables
const javascriptIcon = 'fab fa-js-square';
const htmlIcon = 'fab fa-html5';
const cssIcon = 'fab fa-css3-alt';
const reactIcon = 'fab fa-react';
const nodeIcon = 'fab fa-node-js';

// Projects array to map over
const projects = [
  {
    image: estatesync,
    status: 'Deployed',
    name: 'EstateSync',
    description: 'Synchronized estate management. EstateSync removes the burden from the fragmented experience of estate management by aligning assets, people, and process on a single platform.',
    url: 'https://estatesync.co',
    languageIcons: [
      reactIcon,
      javascriptIcon,
      htmlIcon,
      cssIcon
    ]
  },
  {
    image: ifaas,
    status: 'Deployed',
    name: 'IFaaS',
    description: 'IFaaS (Investing Framework as a Service) provides an institutional-quality investing framework for high-growth companies. This utilizes APIs and charts from 3rd party libraries',
    url: 'https://ifaas.vercel.app',
    languageIcons: [
      reactIcon,
      javascriptIcon,
      cssIcon
    ]
  },
  {
    image: dotts,
    status: 'In Progress',
    name: 'Dotts.io',
    description: 'The best messaging experience ever made. Dotts.io is a new messaging app that puts user experience first with the widest range of customizable features available.',
    url: 'https://dotts.vercel.app',
    languageIcons: [
      javascriptIcon,
      reactIcon,
      nodeIcon
    ]
  }
];

export default function Projects() {

  return (
    <div className='bg-zinc-900'>
      <div className="max-w-7xl mx-auto py-16 md:pb-36 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl w-1/3 pb-4 text-white text-left font-extrabold tracking-tight sm:text-4xl border-b-8 border-teal-700">
          Projects
        </h2>
        {projects.map(project => {
          return (
            <div className="relative w-full mt-12 lg:mt-12 flex-col justify-center align-middle">
              <img
                className="rounded-xl w-full md:w-10/12 object-cover"
                src={project.image}
                alt={`${project.name} Teaser`}
              />
              <div id='esAbout' className="w-full md:w-2/3 lg:w-1/2 md:mr-20 relative md:absolute md:-right-2 top-10 md:top-20 lg:top-14 text-left py-6 px-8 shadow-2xl bg-zinc-800 border-t-4 border-teal-700">
                <p className="text-gray-300 text-sm uppercase">{project.status}</p>
                <h2 className="text-white pb-1">{project.name}</h2>
                <p className="text-white text-sm leading-7">{project.description}</p>
                <a href={project.url} target='_blank' className='no-underline'>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 shadow-sm text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    <ExternalLinkIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                    Check it out
                  </button>
                </a>
                <div className='flex justify-between w-7/12 md:w-1/3 mt-4'>
                  {project.languageIcons.map(icon => {
                    return <i className={`${icon} fa-2x text-zinc-500 ease-in-out duration-200 hover:-translate-y-2`}></i>
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}