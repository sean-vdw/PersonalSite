const navigation = [
  {
    name: 'Github',
    href: 'https://github.com/sean-vdw',
    icon: 'fab fa-github fa-lg'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/seanvanderwal/',
    icon: 'fab fa-linkedin fa-lg'
  },
  {
    name: 'AngelList',
    href: 'https://angel.co/u/sean-van-der-wal-1',
    icon: 'fab fa-angellist fa-lg'
  },
  {
    name: 'Email',
    href: 'mailto:sean.vanderwal2@gmail.com',
    icon: 'fas fa-envelope fa-lg'
  },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-zinc-300 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <i className={item.icon} />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <h5 className="text-center text-base text-gray-400">&copy; 2022 Sean van der Wal. All rights reserved.</h5>
        </div>
      </div>
    </footer>
  )
}
