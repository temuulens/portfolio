import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { FaAws, FaGolang, FaJava, FaJs, FaPython } from "react-icons/fa6";
import { DiDjango, DiDocker, DiMysql, DiPostgresql, DiSymfony } from "react-icons/di";
import { SiKubernetes } from "react-icons/si";


export function Component() {
  return (
    (<div className="flex flex-col min-h-[100dvh] w-full">
      <header className="bg-primary text-primary-foreground py-12 md:py-20 lg:py-24 w-full">
        <div className="max-w-[100rem] mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col items-start justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Temuulen Sodnom</h1>
              <h2 className="text-2xl font-medium text-primary-foreground/80">Backend Developer</h2>
              <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
                I'm a skilled backend developer with a passion for building scalable and efficient web applications.
                With years of experience, I've honed my expertise in various backend technologies and frameworks.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/profile.jpg"
                width="400"
                height="400"
                alt="Temuulen Sodnom"
                className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover"
                style={{ aspectRatio: "400/400", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full">
        <section className="py-12 md:py-20 lg:py-24 w-full">
          <div className="max-w-[100rem] mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Check out some of the projects I've worked on and the technologies I've used.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <img
                  src="/project1.jpg"
                  width="400"
                  height="225"
                  alt="Project 1"
                  className="rounded-t-lg w-full h-[200px] object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }} />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Baaz.mn</h3>
                  <p className="text-muted-foreground mt-2">
                    A scalable and efficient backend API built with Django and PostgreSQL.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/project2.jpg"
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-t-lg w-full h-[200px] object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }} />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Lendmn</h3>
                  <p className="text-muted-foreground mt-2">
                    A high-performance microservices architecture using Docker and Kubernetes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/project3.jpg"
                  width="400"
                  height="225"
                  alt="Project 3"
                  className="rounded-t-lg w-full h-[200px] object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }} />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Nito Pay</h3>
                  <p className="text-muted-foreground mt-2">
                    High performance financial backend service using Golang, PostgreSQL and GraphQL.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 lg:py-24">
          <div className="max-w-[100rem] mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Here are some of the technologies and tools I'm proficient in.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              <div className="flex items-center justify-center bg-background rounded-lg p-4">
                <FaGolang className="w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Golang</span>
              </div>
              <div className="flex items-center justify-center bg-background rounded-lg p-4">
                <FaPython className="w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Python</span>
              </div>
              <div className="flex items-center justify-center bg-background rounded-lg p-4">
                <FaJava className="w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Java</span>
              </div>
              <div className="flex items-center justify-center bg-background rounded-lg p-4">
                <FaJs className="w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">JavaScript</span>
              </div>
              <div className="flex items-center justify-center bg-background rounded-lg p-4">
                <DiDjango className="w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Django</span>
              </div>
              <div className="flex items-center justify-center bg-background rounded-lg p-4">
                <DiSymfony className="w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Symfony</span>
              </div>
              <div className="flex items-center justify-center bg-background rounded-lg p-4">
                <DiPostgresql className="w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">PostgreSQL</span>
              </div>
              <div className="flex items-center justify-center bg-background rounded-lg p-4">
                <DiMysql className="w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">MySQL</span>
              </div>
              <div className="flex items-center justify-center bg-background rounded-lg p-4">
                <DiDocker className="w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Docker</span>
              </div>
              <div className="flex items-center justify-center bg-background rounded-lg p-4">
                <SiKubernetes className="w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Kubernetes</span>
              </div>
              <div className="flex items-center justify-center bg-background rounded-lg p-4">
                <FaAws className="w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">AWS</span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-24">
          <div className="max-w-[100rem] mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Check out my work history and the projects I've been involved in.
              </p>
            </div>
            <div className="grid gap-6 mt-8">
            <Card>
  <CardHeader>
    <div className="flex items-center">
      <BriefcaseIcon className="w-6 h-6 text-muted-foreground" />
      <h3 className="text-xl font-bold ml-2">Senior Back-End Engineer</h3>
    </div>
    <div className="text-muted-foreground text-sm">NITO LLC | Feb. 2023 - Present</div>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">
      Developed a high-performance backend service using Golang, MySQL, and GraphQL for a FinTech startup’s early wage access application.
    </p>
    <ul className="list-disc pl-6 mt-4 text-muted-foreground">
      <li>Enabled real-time wage calculations for employees by integrating with a time-tracking system.</li>
      <li>Facilitated secure bank transfers using robust API development practices, contributing to the platform’s success.</li>
    </ul>
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <div className="flex items-center">
      <BriefcaseIcon className="w-6 h-6 text-muted-foreground" />
      <h3 className="text-xl font-bold ml-2">Senior Back-End Engineer</h3>
    </div>
    <div className="text-muted-foreground text-sm">ONDO LLC | Aug. 2022 - Feb. 2023</div>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">
      Designed and implemented a comprehensive internal inventory management system, streamlining stock control and reporting.
    </p>
    <ul className="list-disc pl-6 mt-4 text-muted-foreground">
      <li>Performed backend maintenance on the company website, resolving bugs and ensuring smooth operation.</li>
      <li>Developed internal reporting pages using PHP, PostgreSQL, and Hasura, a GraphQL engine, to provide data and insights to stakeholders.</li>
    </ul>
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <div className="flex items-center">
      <BriefcaseIcon className="w-6 h-6 text-muted-foreground" />
      <h3 className="text-xl font-bold ml-2">Senior Backend Engineer/Architect</h3>
    </div>
    <div className="text-muted-foreground text-sm">AND Systems | 2017 - Feb. 2022</div>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">
      Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.
    </p>
    <ul className="list-disc pl-6 mt-4 text-muted-foreground">
      <li>Led the migration of a monolithic system into micro-services.</li>
      <li>Developed and maintained wallet, coupon, and sales systems.</li>
      <li>Ensured quality with unit and integration tests and applied TDD.</li>
    </ul>
  </CardContent>
</Card>
<Card>
  <CardHeader>
    <div className="flex items-center">
      <BriefcaseIcon className="w-6 h-6 text-muted-foreground" />
      <h3 className="text-xl font-bold ml-2">Android Developer</h3>
    </div>
    <div className="text-muted-foreground text-sm">Mongol Content | Oct. 2016 - Oct. 2017</div>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">
      Developed a mobile payment application for a leading Myanmar telecom operator, facilitating secure and convenient financial transactions for their customers.
    </p>
    <ul className="list-disc pl-6 mt-4 text-muted-foreground">
      <li>Utilized JUnit framework to ensure code quality and application stability through rigorous unit testing.</li>
      <li>Technologies used: Java, JUnit, Git, Android Studio, Gradle, Kotlin.</li>
    </ul>
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <div className="flex items-center">
      <BriefcaseIcon className="w-6 h-6 text-muted-foreground" />
      <h3 className="text-xl font-bold ml-2">Junior Developer</h3>
    </div>
    <div className="text-muted-foreground text-sm">Novasoft | May 2014 - Jul. 2016</div>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">
      Designed and built APIs and data clients for efficient data exchange and integration within the company’s systems.
    </p>
    <ul className="list-disc pl-6 mt-4 text-muted-foreground">
      <li>Authored clean and maintainable code in Python and JavaScript using the Django framework for web development.</li>
      <li>Contributed to the development of "Baaz.mn", an accounting SaaS platform, leveraging Python and PostgreSQL for back-end functionality.</li>
      <li>Technologies used: Python, Django, Java, Android Studio, PostgreSQL.</li>
    </ul>
  </CardContent>
</Card>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 lg:py-24">
          <div className="max-w-[100rem] mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <div className="max-w-md mx-auto mt-8 space-y-4 flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <MailIcon className="w-6 h-6 text-muted-foreground" />
                  <a href="#" className="text-muted-foreground hover:underline">
                    temuulensodnom@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-6 h-6 text-muted-foreground" />
                  <a href="#" className="text-muted-foreground hover:underline">
                    +976 9588 8558
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <LinkedinIcon className="w-6 h-6 text-muted-foreground" />
                  <a href="https://www.linkedin.com/in/temuulen-sodnom" className="text-muted-foreground hover:underline">
                  Linkedin
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <GithubIcon className="w-6 h-6 text-muted-foreground" />
                  <a href="https://github.com/temuulens" className="text-muted-foreground hover:underline">
                  Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="max-w-[100rem] mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm">&copy; 2024</p>
        </div>
      </footer>
    </div>)
  );
}

function BriefcaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>)
  );
}


function GithubIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>)
  );
}


function LinkedinIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>)
  );
}


function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}

