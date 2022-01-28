import picture from '../assets/profile.jpg';

export default function About() {
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
                className="absolute inset-0 h-full w-full object-cover"
                src={picture}
                alt="Profile picture"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
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
                a technology-focused investment platform with his two partners, Sagar Joshi and Jugal Lodaya. 
              </p>
              <p className="text-base leading-7">
                Over the last few years, Sean has been hyperfocused on building and improving his programming skills in order to solve real-world problems
                in a scalable way. His goal is to continuously build on these valuable skills alongside smart and ambitious people that want to meaningfully
                improve people's day-to-day lives.
              </p>
              {/* <div className="mt-10">
                <a href="#" className="text-base font-medium text-teal-600">
                  {' '}
                  What it's like to work with Sean <span aria-hidden="true">&rarr;</span>{' '}
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
