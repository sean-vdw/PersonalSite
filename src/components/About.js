import { Fragment, useEffect, useState } from 'react';
import picture from '../assets/profile.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dialog, Transition } from '@headlessui/react';

export default function About() {
  const [open, setOpen] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from('#aboutImg', {
      scrollTrigger: {
        trigger: '#aboutImg'
      },
      x: -50,
      duration: 0.5,
      opacity: 0
    });

    gsap.from('#aboutContent', {
      scrollTrigger: {
        trigger: '#aboutContent'
      },
      x: 50,
      duration: 0.5,
      opacity: 0
    });
  }, []);

  return (
    <div className="relative bg-zinc-900 py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full bg-zinc-800 rounded-r-3xl lg:right-72" />
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative py-36 md:pt-64 md:pb-40 rounded-2xl shadow-xl overflow-hidden">
              <img
                id='aboutImg'
                className="absolute inset-0 h-full w-full object-cover"
                src={picture}
                alt="Profile picture"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div id='aboutContent' className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl pb-4 text-white font-extrabold tracking-tight sm:text-4xl border-b-8 border-teal-700">
              About Sean
            </h2>
            <div className="mt-6 text-gray-300 space-y-6">
              <p className="text-base leading-7">
                Sean is a full-stack software engineer based in San Carlos, CA. Though his career originally began in finance as
                an investment and wealth manager in San Francisco, the allure and excitement of the startup community in Silicon Valley
                was difficult to ignore. 
              </p>
              <p className="text-base leading-7">
                After working with several entrepreneurs, technology executives, and venture capitalists in the Menlo Park area, Sean had 
                officially caught the Silicon Valley bug and started learning to code. He quickly found a deep fulfillment in building applications and platforms
                that were both valuable and enjoyable for users. In 2020, just after the onset of the COVID-19 pandemic, Sean co-founded Drawing Capital Group,
                a technology-enabled investment platform. 
              </p>
              <p className="text-base leading-7">
                Over the last few years, Sean has been focused on growing his programming skills in order to solve real-world problems
                in a scalable way. His goal is to continuously build on these valuable skills alongside smart and ambitious people that want to meaningfully
                improve people's day-to-day lives.
              </p>
              <div className="mt-10">
                <a onClick={() => setOpen(true)} className="text-base font-medium text-teal-600 hover:text-teal-800 cursor-pointer no-underline">
                  {' '}
                  Sean's Values & Tenets <span aria-hidden="true">&rarr;</span>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Values & Tenets Modal */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => setOpen(false)}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Core Values & Tenets
                      </Dialog.Title>
                      <div className="mt-2">
                        <ol role='list' className='text-sm text-left text-gray-500 list-decimal'>
                          <li className='my-3'>
                            <b>Be Endlessly Curious.</b><br/> 
                            Ask questions. Ask questions about questions. Get to the very <i>bottom of the well.</i>
                          </li>
                          <li className='my-3'>
                            <b>Always Seek Improvement.</b><br/>  
                            Mistakes and frustration are often our best teachers.
                          </li>
                          <li className='my-3'>
                            <b>Be a Driver - Not a Passenger.</b><br/>  
                            Own the process. Own the tasks. Do them end to end to the absolute best of your ability and don't wait for instruction.
                          </li>
                          <li className='my-3'>
                            <b>Narrow Focus & Reduce Timelines.</b><br/>  
                            Relentlessly prioritize and complete tasks one at a time. Complete with both quality and urgency.
                          </li>
                          <li className='my-3'>
                            <b>Process for Everything.</b><br/>  
                            The first version won't be good. That's expected. Learn to iterate and improve quickly.
                          </li>
                          <li className='my-3'>
                            <b>Work Like a Lion - Not a Sheep.</b><br/>  
                            When energy and motivation are present, max them out. Do not graze leisurely.
                          </li>
                          <li className='my-3'>
                            <b>Assure You're Wrong - Prove Yourself Otherwise.</b><br/>  
                            If you're right you should be able to say why. Poke holes in your own judgement.
                          </li>
                          <li className='my-3'>
                            <b>Create Time to Reflect & Synthesize.</b><br/>  
                            For new information, for problems, for everything. Think, digest, and absorb. Avoid all distractions in this time.
                          </li>
                          <li className='my-3'>
                            <b>Take the Time to Write.</b><br/>  
                            Writing is the best form of developing and refining thoughts. Practice regularly.
                          </li>
                          <li className='my-3'>
                            <b>Never Stop Learning.</b><br/>  
                            Continuous improvement is predicated on learning. Lean in with an open mind.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  )
}
