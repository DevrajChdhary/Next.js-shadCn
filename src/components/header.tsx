import Image from 'next/image';
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Header = () => {
    return (
      <>
        <header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
          <div className="flex-shrink-0">
            <Image 
              src="/images/image.png" 
              alt="Company Logo" 
              width={150} 
              height={50} 
              className="object-contain"
            />
          </div>
          <nav className="flex-1 flex justify-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Media</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Cases</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">FAQ</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700">
              Email: info@company.com
            </span>
            <span className="text-sm text-gray-700">
              Mobile: (+91) 0000000000
            </span>
          </div>
        </header>
  
        <main className="p-8 ">
         <div className="w-2/3 pl-8">
                    <h2 className="text-xl font-semibold">
                        <span className='text-yellow-400 font-bold text-3xl'>User-Centric Excellence:</span> <span className='text-2xl'>Our <br/>App Development services Tackles Your Pain Points</span>
                    </h2>
                    <p className='text-gray-700 py-6'>
                        Experience a Seamless Digital Journey with Desun - Where Every Line of Code <br/> Resolves Your Challenges and <span className='text-yellow-400'>Elevates Your App Experience</span><br/>to Unparalleled Heights.
                    </p>
                </div>
          <div className="w-1/3 mt-8 p-10 bg-white border border-gray-200 rounded-md shadow-md">
            <h3 className="text-lg font-medium text-gray-900 py-10">Leave your contacts and we will call you back within 30 minutes</h3>
            <form className="mt-4 space-y-6 py">
              <div className="grid grid-cols-1 gap-4 ">
                <div>
                  <Label className="block text-sm font-medium text-gray-700">Full name</Label>
                  <Input 
                    type="text" 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" 
                    placeholder="My Name"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-gray-700">Phone number</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      +91
                    </span>
                    <Input 
                      type="text" 
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" 
                      placeholder="0000000000"
                    />
                  </div>
                </div>
                <div>
                  <Label className="block text-sm font-medium text-gray-700">Business name</Label>
                  <Input 
                    type="text" 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" 
                    placeholder="ABC Technologies PVT LTD"
                  />
                </div>
                            <div>
                                <Label className="block text-sm font-medium text-gray-700">Business mail</Label>
                                <Input 
                                    type="email" 
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" 
                                    placeholder="demoaccount@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button 
                                type="submit" 
                                className="px-4 py-2 bg-green-500 text-white font-medium rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
                            >
                                Get consultation
                            </Button>
                        </div>
                    </form>
                </div>
                
            </main>
        </>
    );
};

const DevelopmentCycle = () => {
    return (
        <section className="p-6 bg-gray-100">
            <div className="text-center mb-8">
  <div className="flex ">
    <Image src="/images/planet.jpg" alt="Planet Logo 1" width={85} height={80} className="mx-auto" />
    <Image src="/images/planet.jpg" alt="Planet Logo 2" width={85} height={80} className="mx-auto" />
    <Image src="/images/planet.jpg" alt="Planet Logo 3" width={85} height={80} className="mx-auto" />
    <Image src="/images/planet.jpg" alt="Planet Logo 4" width={85} height={80} className="mx-auto" />
    <Image src="/images/planet.jpg" alt="Planet Logo 5" width={85} height={80} className="mx-auto" />
    <Image src="/images/planet.jpg" alt="Planet Logo 6" width={85} height={80} className="mx-auto" />
  </div>
  <div className="text-left">  <h2 className="text-2xl font-semibold mt-8">Full development cycle</h2>
    <p className="text-gray-700">We use proven technologies</p>
  </div>
</div>
<div className="flex flex-wrap justify-between">
  <div className="w-full md:w-1/2 px-4 py-8">
    <h3 className="text-lg font-semibold">Web</h3>
    <p className="text-gray-700">
      PHP / JavaScript / Node.js / Web Socket / Socket.IO /<br />
      Vue.js / Nuxt / MySQL / Laravel / Go lang / Django / Python
    </p>
  </div>
  <div className="w-full md:w-1/2 px-4 py-8">
    <h3 className="text-lg font-semibold">Mobile</h3>
    <p className="text-gray-700">
      Swift / Kotlin / Alamofire / Firebase / CoreData /<br />
      Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation
    </p>
  </div>
  <div className="w-full md:w-1/2 px-4 py-8">
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>iOS Development</AccordionTrigger>
        <AccordionContent>
          Yes. It is iOS Development
        </AccordionContent>
      </AccordionItem>
    <AccordionItem value="item-2">
                        <AccordionTrigger>Android Development</AccordionTrigger>
                    <AccordionContent>
                             Detailed information about Android development, including tools and technologies used.
                    </AccordionContent>
                </AccordionItem>
    <AccordionItem value="item-3">
                        <AccordionTrigger>Web Development</AccordionTrigger>
                    <AccordionContent>
                             Detailed information about web development, including tools and technologies used.
                    </AccordionContent>
                </AccordionItem>
    <AccordionItem value="item-4">
                <AccordionTrigger>Backend Development</AccordionTrigger>
                        <AccordionContent>
                            Detailed information about backend development, including tools and technologies used.
                    </AccordionContent>
                </AccordionItem>
 </Accordion>

  </div>
</div>
        </section>
    );
};

const Industries = () => {
    return (
        <section className="p-8 bg-white">
            <div className="mb-8">
                <h2 className="text-4xl font-bold px-10">Developed more than <span className="text-green-400">100</span> <br /> projects in <span className="text-green-400">15</span> industries</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 text-gray-700">
                <div>Social media</div>
                <div>Fitness and sport</div>
                <div>Bank</div>
                <div>Construction</div>
                <div>Game projects</div>
                <div>Education</div>
                <div>Auto, transport</div>
                <div>Medicine, health</div>
                <div>Restaurants, food delivery</div>
                <div>Marketplace</div>
                <div>AI technology</div>
                <div>TV series</div>
                <div>Retail</div>
                <div>Religion</div>
                <div>Online courses</div>
            </div>

        
        </section>
    );
};
const Project = () => {
    const projects = [
      {
        id: 1,
        title: "Project 1",
        description: "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.",
        technologies: ["Business analysis", "iOS", "Android", "QA", "UI/UX Design"],
      },
      {
        id: 2,
        title: "Project 2",
        description: "Developed a cutting-edge e-commerce platform with advanced product recommendation algorithms, secure payment gateways, and real-time inventory management. Boosting sales and enhancing customer experience through intuitive design and seamless functionality.",
        technologies: ["Web Development", "AI/ML", "Payment Integration", "Database Management"],
      },
      {
        id: 3,
        title: "Project 3",
        description: "Created a revolutionary health and fitness app that combines personalized workout plans, nutrition tracking, and wearable device integration. Empowering users to achieve their fitness goals with data-driven insights and community support features.",
        technologies: ["Mobile Development", "IoT Integration", "Data Analytics", "Cloud Computing"],
      },
      {
        id: 4,
        title: "Project 4",
        description: "Engineered a robust financial management system for small to medium-sized businesses, featuring automated bookkeeping, expense tracking, and comprehensive reporting tools. Streamlining financial operations and providing valuable insights for informed decision-making.",
        technologies: ["FinTech", "Backend Development", "Security", "Data Visualization"],
      },
    ];
  
    return (
      <section className="p-8 bg-white">
        <h2 className="text-4xl font-bold px-10 p-8">Projects We are Proud of</h2>
        <h4 className="pl-10">
          Our software development company is truly proud of the wonderful clients we have
          <br />worked with. We enjoy a long-term partnership
        </h4>
        
        <div className="flex mt-8">
          {projects.map((project) => (
            <div key={project.id} className={`px-4 py-2 mr-4 ${project.id === 1 ? 'border-b-2 border-yellow-400' : ''}`}>
              {project.title}
            </div>
          ))}
        </div>
        
        <div className="mt-8 pl-10">
          <h3 className="text-2xl font-bold mb-4">{projects[0].title}</h3>
          <p className="mb-4">{projects[0].description}</p>
          <div className="flex flex-wrap">
            {projects[0].technologies.map((tech, index) => (
              <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm mr-2 mb-2">{tech}</span>
            ))}
          </div>
        </div>
      </section>
    );
  };


  const ProjectDiscussion = () => {
    return (
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-green-500 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Let discuss<br />Your project</h1>
              <p className="text-white text-base">
                Let figure out how to create an effective application,<br />
                its cost and terms of its development
              </p>
            </div>
            
            <div className="md:w-1/2 max-w-md">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                    <input type="text" className="w-full p-2 border rounded text-sm" placeholder="My Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                    <div className="flex items-center">
                      <span className="mr-2">🇮🇳</span>
                      <input type="tel" className="w-full p-2 border rounded text-sm" placeholder="+91 000000000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business name</label>
                    <input type="text" className="w-full p-2 border rounded text-sm" placeholder="ABC Technologies PVT LTD" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business mail</label>
                    <input type="email" className="w-full p-2 border rounded text-sm" placeholder="demoaccount@gmail.com" />
                  </div>
                </div>
                <button className="mt-4 w-full bg-yellow-400 text-white py-2 px-4 rounded text-sm hover:bg-yellow-500 transition duration-300">
                  Discuss the project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AppDevelopmentStages = () => {
    const stages = [
      {
        title: 'Analysis',
        description: 'We craft precise technical specs, aligning with your business, technology, and user requirements.',
        icon: '📋',
      },
      {
        title: 'Design',
        description: 'We adapt the customer corporate identity to the platform guidelines. We draw convenient and understandable interfaces ',
        icon: '🎨',
      },
      {
        title: 'Development',
        description: 'We create an extensible architecture, write clean and stable code. We integrate with customer technologies.',
        icon: '💻',
      },
      {
        title: 'Testing',
        description: 'We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.',
        icon: '🧪',
      },
      {
        title: 'Launching',
        description: 'We design the application page and publish it in the App Store and Google Play stores.',
        icon: '🚀',
      },
      {
        title: 'Support',
        description: 'We monitor the stability of the application, update it for new devices and versions of iOS and Android.',
        icon: '🛠️',
      },
    ];
  
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Application Development Stages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{stage.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
              <p className="text-gray-600">{stage.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  const TeamSection = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Our team</h2>
          
          <p className="text-gray-600 mb-12 max-w-2xl">
            Thousand is a full-cycle digital production company with its own product analytics,
            design, web and mobile development.
          </p>
          
          <div className="flex justify-between mb-12">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">28</p>
              <p className="text-gray-600">team members</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">+100</p>
              <p className="text-gray-600">projects</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">7 years</p>
              <p className="text-gray-600">in IT sphere</p>
            </div>
          </div>
          
          <p className="text-gray-600 max-w-3xl">
            All the necessary specialists - from a designer to a tester - are on our staff. We hire
            the best specialists in the market. Its expensive but worth it
          </p>
        </div>
      </section>
    );
  };

const Footer = () => {
    return (
      <footer className="bg-black text-white p-8">
        <div className="container mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <div>
                <h3 className="text-xl font-bold text-cyan-300">MY COMPANY</h3>
                <p className="text-xs">DEMO COMPANY</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center">
              <span className="mr-2">📱</span>
              <div>
                <p className="text-gray-400 text-sm">Contact nums</p>
                <p>+91 0000000000</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="mr-2">✉️</span>
              <div>
                <p className="text-gray-400 text-sm">Gmail</p>
                <p>demo@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="mr-2">📍</span>
              <div>
                <p className="text-gray-400 text-sm">Adress</p>
                <p>Mumbai, India</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="mr-2">📄</span>
              <div>
                <p className="text-gray-400 text-sm">Leave a request</p>
                <p>Leave a request</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-400 text-sm mt-8">
            We work throughout the world
          </p>
        </div>
      </footer>
    );
  };
const HomePage = () => {
    return (
        <div>
            <Header />
            <DevelopmentCycle />
            <Industries />
            <Project />
            <AppDevelopmentStages />
            <ProjectDiscussion />
            <TeamSection />
            <Footer />
        </div>
    );
};

export default HomePage;
