import reduxLogo from '../assets/redux.svg';

export default function Skills() {
  return (
    <div className="bg-zinc-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl w-1/3 pb-4 text-white text-left font-extrabold tracking-tight sm:text-4xl border-b-8 border-teal-700">
          Skills
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
          <div className="text-center col-span-1 flex-col justify-center align-middle py-3 px-8 bg-zinc-700 hover:bg-teal-100 ease-in-out duration-200 hover:-translate-y-3">
            <i className="fab fa-html5 fa-5x text-zinc-500"></i>
            <p className="text-lg mb-0 text-zinc-500">HTML</p>
          </div>
          <div className="text-center col-span-1 flex-col justify-center align-middle py-3 px-8 bg-zinc-700 hover:bg-teal-100 ease-in-out duration-200 hover:-translate-y-3">
            <i className="fab fa-css3-alt fa-5x text-zinc-500"></i>
            <p className="text-lg mb-0 text-zinc-500">CSS</p>
          </div>
          <div className="text-center col-span-1 flex-col justify-center align-middle py-3 px-8 bg-zinc-700 hover:bg-teal-100 ease-in-out duration-200 hover:-translate-y-3">
            <i className="fab fa-js-square fa-5x text-zinc-500"></i>
            <p className="text-lg mb-0 text-zinc-500">Javascript</p>
          </div>
          <div className="text-center col-span-1 flex-col justify-center align-middle py-3 px-8 bg-zinc-700 hover:bg-teal-100 ease-in-out duration-200 hover:-translate-y-3">
            <i className="fab fa-sass fa-5x text-zinc-500"></i>
            <p className="text-lg mb-0 text-zinc-500">Sass</p>
          </div>
          <div className="text-center col-span-1 flex-col justify-center align-middle py-3 px-8 bg-zinc-700 hover:bg-teal-100 ease-in-out duration-200 hover:-translate-y-3">
            <i className="fab fa-bootstrap fa-5x text-zinc-500"></i>
            <p className="text-lg mb-0 text-zinc-500">Bootstrap</p>
          </div>
          <div className="text-center col-span-1 flex-col justify-center align-middle py-3 px-8 bg-zinc-700 hover:bg-teal-100 ease-in-out duration-200 hover:-translate-y-3">
            <svg className='max-h-14 m-auto mt-1' preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6">
              <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="#71717a"/>
            </svg>
            <p className="text-lg mb-0 mt-3 text-zinc-500">Tailwind</p>
          </div>
          <div className="text-center col-span-1 flex-col justify-center align-middle py-3 px-8 bg-zinc-700 hover:bg-teal-100 ease-in-out duration-200 hover:-translate-y-3">
            <i className="fab fa-react fa-5x text-zinc-500"></i>
            <p className="text-lg mb-0 text-zinc-500">React</p>
          </div>
          <div className="text-center col-span-1 flex-col justify-center align-middle py-3 px-8 bg-zinc-700 hover:bg-teal-100 ease-in-out duration-200 hover:-translate-y-3">
            <svg className='max-h-20 m-auto' viewBox="0 0 256 244" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
              <path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" fill='#71717a'/>
            </svg>
            <p className="text-lg mb-0 mt-1 text-zinc-500">Redux</p>
          </div>
          <div className="text-center col-span-1 flex-col justify-center align-middle py-3 px-8 bg-zinc-700 hover:bg-teal-100 ease-in-out duration-200 hover:-translate-y-3">
            <i className="fab fa-node-js fa-5x text-zinc-500"></i>
            <p className="text-lg mb-0 text-zinc-500">Node.js</p>
          </div>
          <div className="text-center col-span-1 flex-col justify-center align-middle py-3 px-8 bg-zinc-700 hover:bg-teal-100 ease-in-out duration-200 hover:-translate-y-3">
            <i className="fab fa-git-square fa-5x text-zinc-500"></i>
            <p className="text-lg mb-0 text-zinc-500">Git</p>
          </div>
          <div className="text-center col-span-1 flex-col justify-center align-middle py-3 px-8 bg-zinc-700 hover:bg-teal-100 ease-in-out duration-200 hover:-translate-y-3">
            <i className="fab fa-figma fa-5x text-zinc-500"></i>
            <p className="text-lg mb-0 text-zinc-500">Figma</p>
          </div>
        </div>
      </div>
    </div>
  )
}
