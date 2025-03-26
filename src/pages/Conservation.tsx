
import React from 'react';
import { ArrowRight, TreePine, Globe, Heart, Users, Sparkles, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Conservation = () => {
  return (
    <div className="min-h-screen w-full pt-16 pb-24">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-jungle-canopy/10 to-transparent relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-moss/20 text-jungle-canopy text-sm font-medium mb-4 animate-float-up" style={{ animationDelay: '0.1s' }}>
              <TreePine className="w-4 h-4 mr-1" />
              <span>Wildlife Conservation</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-jungle-canopy via-jungle-canopy to-jungle-leaf animate-float-up" style={{ animationDelay: '0.3s' }}>
              Protecting Our Planet's Biodiversity
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 animate-float-up" style={{ animationDelay: '0.5s' }}>
              Learn how JungleGuardian's technology supports global conservation efforts and how you can contribute to wildlife protection.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-float-up" style={{ animationDelay: '0.7s' }}>
              <Link 
                to="/predict" 
                className="px-6 py-3 rounded-lg bg-jungle-canopy text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-jungle-canopy/20 hover:shadow-xl hover:shadow-jungle-canopy/30 transition-all hover:translate-y-[-2px]"
              >
                Try Our Technology
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a 
                href="#initiatives" 
                className="px-6 py-3 rounded-lg border border-jungle-canopy/20 text-jungle-canopy bg-white font-medium flex items-center justify-center gap-2 hover:bg-jungle-canopy/5 transition-all"
              >
                View Initiatives
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-sunlight/20 text-jungle-canopy text-sm font-medium mb-4">
                <Globe className="w-4 h-4 mr-1" />
                <span>Our Mission</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technology for Nature's Protection
              </h2>
              
              <p className="text-muted-foreground mb-6">
                At JungleGuardian, we believe that technology can play a crucial role in wildlife conservation. Our mission is to develop innovative AI solutions that help researchers, conservationists, and wildlife enthusiasts monitor and protect animal health in their natural habitats.
              </p>
              
              <p className="text-muted-foreground mb-8">
                By providing accessible tools for wildlife health assessment, we aim to contribute to early detection of health issues, tracking of disease outbreaks, and monitoring of ecosystem health on a global scale.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "30+",
                    description: "Species Analyzed"
                  },
                  {
                    title: "12",
                    description: "Conservation Partners"
                  },
                  {
                    title: "10k+",
                    description: "Animals Monitored"
                  },
                  {
                    title: "95%",
                    description: "Accuracy Rate"
                  }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-jungle-canopy/10 shadow-sm">
                    <h3 className="text-2xl font-bold text-jungle-canopy mb-1">{stat.title}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" 
                  alt="Conservation work" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-jungle-canopy/10 max-w-xs">
                <div className="flex items-start">
                  <div className="bg-jungle-moss/20 p-2 rounded-full mr-3">
                    <Heart className="w-5 h-5 text-jungle-canopy" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Wildlife Protection</h4>
                    <p className="text-sm text-muted-foreground">Each analysis contributes to our global wildlife health database.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Conservation Initiatives */}
      <section id="initiatives" className="py-20 px-4 bg-jungle-canopy/5">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-moss/20 text-jungle-canopy text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-1" />
              <span>Conservation Initiatives</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Impact</h2>
            
            <p className="text-muted-foreground">
              JungleGuardian collaborates with conservation organizations worldwide to deploy our technology where it's needed most. Explore our key initiatives dedicated to protecting endangered species and their habitats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Elephant Health Monitoring",
                location: "Amboseli National Park, Kenya",
                description: "Tracking injuries and health conditions in elephant populations to prevent poaching and disease outbreaks.",
                image: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                title: "Tiger Conservation Program",
                location: "Sundarbans, India & Bangladesh",
                description: "Monitoring tiger populations using camera traps and health analysis to support conservation efforts.",
                image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                title: "Primate Rehabilitation",
                location: "Borneo, Indonesia",
                description: "Supporting orangutan rehabilitation centers with health assessment tools for rescued primates.",
                image: "https://images.unsplash.com/photo-1544715228-c2b9e8425d31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((initiative, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-jungle-canopy/10">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="text-xs font-medium text-jungle-leaf mb-2">
                    {initiative.location}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {initiative.description}
                  </p>
                  
                  <a href="#" className="inline-flex items-center text-jungle-canopy font-medium hover:underline">
                    Learn more 
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How to Contribute */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-sunlight/20 text-jungle-canopy text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-1" />
              <span>Get Involved</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How You Can Contribute</h2>
            
            <p className="text-muted-foreground">
              There are many ways to support wildlife conservation efforts. Here are some meaningful ways you can make a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Camera className="w-6 h-6 text-jungle-canopy" />,
                title: "Submit Images",
                description: "Upload wildlife photos to our database to help train our AI and contribute to research."
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-jungle-canopy">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>,
                title: "Donate",
                description: "Support our conservation partners with financial contributions that fund vital projects."
              },
              {
                icon: <Users className="w-6 h-6 text-jungle-canopy" />,
                title: "Volunteer",
                description: "Join local conservation initiatives or participate in our citizen science programs."
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-jungle-canopy">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>,
                title: "Spread Awareness",
                description: "Share information about wildlife conservation challenges and solutions with your network."
              }
            ].map((way, index) => (
              <div key={index} className="jungle-card">
                <div className="jungle-card-inner">
                  <div className="w-14 h-14 rounded-xl bg-jungle-leaf/10 flex items-center justify-center mb-5">
                    {way.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{way.title}</h3>
                  <p className="text-muted-foreground">{way.description}</p>
                  <a href="#" className="inline-flex items-center mt-4 text-sm text-jungle-canopy font-medium hover:underline">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-jungle-canopy to-jungle-leaf rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-jungle-pattern opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Us in Protecting Wildlife
              </h2>
              
              <p className="text-white/80 mb-8 text-lg">
                Every contribution makes a difference. Start using JungleGuardian today to help us build a more comprehensive wildlife health database.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/predict" 
                  className="px-6 py-3 rounded-lg bg-white text-jungle-canopy font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                >
                  Start Analyzing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link 
                  to="/about" 
                  className="px-6 py-3 rounded-lg border border-white/30 text-white font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conservation;
