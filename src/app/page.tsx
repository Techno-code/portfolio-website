import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Hi, I&apos;m <span className="gradient-text">Sean Yang</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              High school student passionate about programming, music, and building innovative solutions. 
              Founder of OneToos tutoring business and debate club leader.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects" 
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-200 animate-pulse-glow"
              >
                View My Projects
              </a>
              <a 
                href="#contact" 
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg">Get to know the person behind the code</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold">Student Developer & Entrepreneur</h3>
              <p className="text-lg leading-relaxed">
                I&apos;m a high school student with a passion for technology and innovation. When I&apos;m not coding, 
                you&apos;ll find me singing, leading the debate club, or helping students through my tutoring business.
              </p>
              <p className="text-lg leading-relaxed">
                I believe in the power of technology to solve real-world problems and create positive change. 
                My goal is to build solutions that make a difference in people&apos;s lives.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 glass rounded-lg">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Programming</div>
                </div>
                <div className="text-center p-4 glass rounded-lg">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Students Tutored</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-muted rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">SY</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Photo Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">My Projects</h2>
            <p className="text-muted-foreground text-lg">Innovative solutions I&apos;ve built</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Announcement App */}
            <div className="group glass rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">School Announcement App</h3>
              <p className="text-muted-foreground mb-4">
                A real-time announcement system for schools using WebSocket technology. 
                Enables instant communication between administrators and students.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Django</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">WebSocket</span>
              </div>
            </div>

            {/* OneToos Platform */}
            <div className="group glass rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">OneToos Tutoring Platform</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive tutoring management system with scheduling, 
                progress tracking, and payment integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Tailwind</span>
              </div>
            </div>

            {/* Debate Club Management */}
            <div className="group glass rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Debate Club Platform</h3>
              <p className="text-muted-foreground mb-4">
                A digital platform for managing debate club activities, 
                tournament scheduling, and member communication.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Music & Singing</h2>
            <p className="text-muted-foreground text-lg">My creative side beyond coding</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold">Passionate Singer</h3>
              <p className="text-lg leading-relaxed">
                Music has always been a big part of my life. I love singing and performing, 
                whether it&apos;s at school events, local competitions, or just for fun.
              </p>
              <p className="text-lg leading-relaxed">
                I believe music and technology share a common language - both require creativity, 
                precision, and the ability to connect with people on an emotional level.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 glass rounded-lg">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Years Singing</div>
                </div>
                <div className="text-center p-4 glass rounded-lg">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Performances</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-muted rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">Performance Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OneToos Section */}
      <section id="onetoo" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">OneToos</h2>
            <p className="text-muted-foreground text-lg">My tutoring business and passion for education</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold">Empowering Students Through Education</h3>
              <p className="text-lg leading-relaxed">
                OneToos is more than just a tutoring business - it&apos;s my way of giving back to the community 
                and helping students reach their full potential.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in math, science, and programming, helping students not just with their 
                homework, but with developing critical thinking and problem-solving skills.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 glass rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center p-4 glass rounded-lg">
                  <div className="text-2xl font-bold text-accent">3+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center p-4 glass rounded-lg">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3">Services Offered</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Mathematics (Algebra, Calculus, Statistics)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Science (Physics, Chemistry, Biology)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Programming (Python, JavaScript, Web Development)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Test Preparation (SAT, ACT, AP Exams)
                  </li>
                </ul>
              </div>
              
              <div className="glass rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3">Why Choose OneToos?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Personalized learning approach
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Flexible scheduling options
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Proven track record of success
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Achievements</h2>
            <p className="text-muted-foreground text-lg">Milestones and accomplishments</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Debate Club Founder</h3>
              <p className="text-muted-foreground">
                Successfully established and led the school&apos;s debate club, 
                organizing tournaments and mentoring new members.
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Award</h3>
              <p className="text-muted-foreground">
                Recognized for developing innovative solutions that address 
                real-world problems in education and communication.
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Success</h3>
              <p className="text-muted-foreground">
                Built OneToos from the ground up, helping over 50 students 
                improve their academic performance and confidence.
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
              <p className="text-muted-foreground">
                Developed multiple full-stack applications demonstrating 
                proficiency in modern web technologies and best practices.
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership</h3>
              <p className="text-muted-foreground">
                Demonstrated strong leadership skills through club management, 
                team projects, and community initiatives.
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
              <p className="text-muted-foreground">
                Maintained high academic standards while pursuing 
                extracurricular activities and entrepreneurial ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">Let&apos;s connect and create something amazing together</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold">Let&apos;s Talk</h3>
              <p className="text-lg leading-relaxed">
                I&apos;m always interested in new opportunities, collaborations, 
                or just having a great conversation about technology and innovation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">sean.yang@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Vancouver, BC, Canada</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SY</span>
            </div>
            <span className="font-heading text-xl font-bold gradient-text">Sean Yang</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Student Developer • Entrepreneur • Singer • Leader
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
          <div className="border-t border-border mt-8 pt-8">
            <p className="text-muted-foreground">
              © 2024 Sean Yang. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
