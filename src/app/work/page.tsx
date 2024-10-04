import {
  IconType,
  SiPython,
  SiAwsamplify,
  SiAmazondynamodb,
  SiAmazonapigateway,
  SiReact,
  SiAmazoncognito,
  SiAmazoniam,
  SiDocker,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiCypress,
  SiNestjs,
  SiSelenium,
  SiDocusaurus,
  SiGraphql,
  SiSwift,
  SiIos,

} from '@icons-pack/react-simple-icons'

export default function Page() {
  const PROJECTS = [
    {
      name: 'Niural App',
      description: 'All-in-one HR, Global Payroll & PEO, powered by AI',
      duties: ["Played a central role in all stages of Niural product development using React/Typescript and AWS Amplify/Python.",
         "Implemented tools like Sentry, Inspectlet, and GTM to significantly reduce production issues and improve overall product reliability.",
          "Introduced critical features such as user impersonation, admin panels, api permissions, contract management, timesheets, teams  and user roles  CPA/accountant.",
          "Implemented Cypress automation and CI/CD pipelines, automating testing processes and accelerating development cycles.",
          "Upgraded the application to Vite from CRA, resulting in a dramatic improvement in build and start times.",
          "Created and maintained scripts to streamline support processes and address customer requests effectively.",
          "Implemented a robust permission system combining RBAC and custom permissions, simplifying the introduction of new roles and features.",
          "Streamlined the hiring process by standardizing interviews and eliminating unnecessary take-home assignments, leading to faster time-to-hire.",
          "Refactored multiple aspects of frontend app like URLs, state management, api calls, code  architecture and forms using appropriate libraries like Recoil, Formik, SWR, Eslint, etc."
        ],
      liveLink: 'https://www.niural.com/',
      techStacks: [<SiAwsamplify key={0} />,
        <SiAmazondynamodb key={1}  />,
        <SiAmazonapigateway key={2}  />,
        <SiReact key={3}  />,
        <SiPython key={4}  />,
        <SiAmazoncognito key={5}  />,
        <SiAmazoniam  key={6} />,
        <SiJavascript key={9}/>,
        <SiTypescript key={8}/>,
        <SiDocker  key={7} />],
    },
    {
      name: 'Signetic',
      description: 'Transform your pharmacy into a community health destination',
      duties: ["Lead a team of 24 developers spanning frontend, backend and infrastructure.",
        "Implement multitenant hierarchial auth module using JWT for authentication & authorization for various business units and backend services.",
        "Solved local development issues for power apps module by leveraging multiple microsoft internal api's for accessing data in dataverse.",
        "Implement waitlist feature for covid vaccination using react, nodejs, azure service bus and azure functions.",
        "Implement UI in react and backend in nodejs/powerapps for vaccination scheduling module.",
      ],
      liveLink: 'https://www.signetic.com/',
      techStacks: [
        <SiNodedotjs key={0}/>,
        <SiCypress key={1} />,
        <SiNestjs key={2} />,
        <SiReact key={3}  />,
        <SiJavascript key={9}/>,
        <SiTypescript key={8}/>,
        <SiDocker  key={7} />],
    },
    {
      name: 'QA Automation Tool',
      description: 'Excel-In-Excel-Out. Literally. A tool to run automated tests written in google sheets in server using google sheets only.',
      duties: [
        "Developed a qa-friendly no-code automation tool to test our multinenant(40+ tenants) application.",
        "Architect qa automation tool using google sheets, app script, docker, selenium, redis and nodejs.",
        "Guide a team of 6 qa's on how to use qa-automation-tool to write tests, reduce regressions and increase test coverage across our 40+ tenants.",
        "Gave a talk on qa-automation-tool at our company's internal conference.",
      ],
      liveLink: 'https://leapfrogtechnology.github.io/qa-automation-tool/',
      techStacks: [
        <SiNodedotjs key={0}/>,
        <SiSelenium key={1} />,
        <SiDocusaurus key={2} />,
        <SiReact key={3}  />,
        <SiJavascript key={9}/>,
        <SiTypescript key={8}/>,
        <SiDocker  key={7} />],
    },
    {
      name: 'Returnalyze',
      description: 'Turn Returns into Revenue Today',
      liveLink: 'https://www.returnalyze.com/',
      techStacks: [
        <SiPython key={0}/>,
        <SiCypress key={1} />,
        <SiJavascript key={2} />,
        <SiReact key={3}  />,
        <SiTypescript key={9}/>,
        <SiGraphql key={8}/>,
        <SiDocker key={7} />],
      duties: [
        "Lead a team of 6 developers spanning frontend, backend and data engineering.",
        "Implement multiple data visualizations like line, bar, pie and heatmap charts using highcharts.",
        "Implement multiple api endpoints using graphene, graphql and python.",
        "Contributed to automated test cases by writing qa sql scripts to ensure that data shown to user is correct."
      ]
    },
    {
      name: 'Uvertz',
      description: 'Street Level Digital Marketing!',
      duties: ["Contributed to backend in nodejs.", "Contributed to frontend in react.", "Contributed to iOS app in swift."],
      liveLink: 'https://www.uvertz.com/',
      techStacks: [
        <SiSwift key={0}/>,
        <SiJavascript key={2} />,
        <SiReact key={3}  />,
        <SiIos key={5} />,
        <SiTypescript key={9}/>,
        <SiNodedotjs key={7} />]
    },
  ]

  return (
    <>
      {PROJECTS.map((project, id) => {
        return (
          <div
            className="dark:bg-darkBg text-text dark:text-darkText border-b-4 border-r-4 border-b-black border-r-black bg-bg p-8 py-10 w600:px-[30px] w400:px-5"
            key={id}
          >
            <div className="mx-auto w-3/4 w800:w-full">
              <div className="mt-6">
                <h2 className="text-3xl font-bold w700:text-2xl w450:text-xl">
                  {project.name}
                </h2>

                <p className="mt-5 text-lg w450:text-base">
                  {project.description}
                </p>
                <h2 className="mt-5 text-2xl font-bold w700:text-2xl w450:text-xl">
                  Tech Stack:
                </h2>
                <div className='flex gap-2'>
                  {project.techStacks}
                </div>
                <h2 className="mt-5 text-2xl font-bold w700:text-2xl w450:text-xl">
                  Responsibilities:
                </h2>
                <ul className='mt-4 list-disc list-inside'>
                  {project.duties?.map((duty) => <li key={duty}>{duty}</li>)}
                </ul> 

                <div className="mt-8 grid grid-cols-2 gap-5 text-base w400:text-sm">
                  <a
                    className="border-border dark:border-darkBorder text-text shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-main px-4 py-2 text-center uppercase transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
