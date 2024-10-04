import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
  SiStackoverflow
} from '@icons-pack/react-simple-icons'

export default function Home() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:blogsubash@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/subash-poudel',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/its-subash/',
    },
    {
      icon: SiMedium,
      href: 'https://subashpoudel.medium.com/',
    },
    {
      icon: SiStackoverflow,
      href: 'https://stackoverflow.com/users/2833783/illegal-argument',
    },
  ]

  return (
    <div className="w600:p-[30px] w600:text-lg w400:p-5 w400:text-base p-10 text-xl leading-[1.7]">
      <p>
      Seasoned Full Stack Developer with 11+ years of experience leading complex web development projects. Results-oriented developer adept at architecting and implementing robust, scalable web applications. Proven ability to manage engineering teams, mentor junior developers, and ensure project success.
      </p>
      <br />
      <div className="mr-auto mt-10 flex w-full flex-wrap items-center gap-10">
        {links.map((link, id) => {
          return (
            <a target="_blank" key={id} href={link.href}>
              <link.icon title="" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
