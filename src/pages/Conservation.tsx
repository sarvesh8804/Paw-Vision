import React from 'react';
import { Camera, TreePine, Leaf, Bird, Fish } from 'lucide-react';
import { cn } from '@/lib/utils';

const Conservation = () => {
  const initiatives = [
    {
      title: "Wildlife Monitoring Program",
      description: "Our AI-powered cameras help track and monitor animal populations in protected areas, providing critical data for conservation efforts.",
      icon: <Camera className="w-12 h-12 text-jungle-moss" />,
      color: "bg-gradient-to-br from-jungle-leaf/20 to-jungle-moss/20"
    },
    {
      title: "Habitat Restoration Projects",
      description: "We work with local communities to restore degraded habitats, plant native trees, and create wildlife corridors.",
      icon: <TreePine className="w-12 h-12 text-jungle-canopy" />,
      color: "bg-gradient-to-br from-jungle-canopy/20 to-jungle-leaf/20"
    },
    {
      title: "Indigenous Knowledge Integration",
      description: "Partnering with indigenous communities to incorporate traditional ecological knowledge into conservation strategies.",
      icon: <Leaf className="w-12 h-12 text-jungle-moss" />,
      color: "bg-gradient-to-br from-jungle-moss/20 to-jungle-canopy/20"
    },
    {
      title: "Endangered Species Protection",
      description: "Targeted programs to protect critically endangered species through monitoring, anti-poaching efforts, and habitat protection.",
      icon: <Bird className="w-12 h-12 text-jungle-water" />,
      color: "bg-gradient-to-br from-jungle-water/20 to-jungle-canopy/20"
    },
    {
      title: "Marine Conservation Areas",
      description: "Establishing and monitoring protected marine areas to preserve aquatic biodiversity and ecosystem health.",
      icon: <Fish className="w-12 h-12 text-jungle-water" />,
      color: "bg-gradient-to-br from-jungle-water/20 to-jungle-moss/20"
    }
  ];

  return (
    <div className="min-h-screen w-full pt-16 pb-24">
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-moss/20 text-jungle-canopy text-sm font-medium mb-4">
              <TreePine className="w-4 h-4 mr-1" />
              <span>Conservation Efforts</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Conservation Initiatives</h1>
            <p className="text-muted-foreground">
              Explore our diverse range of conservation projects aimed at protecting wildlife and preserving natural habitats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl bg-white border border-jungle-canopy/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={cn("absolute inset-0", initiative.color)}></div>
                <div className="relative p-6">
                  <div className="mb-4">{initiative.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conservation;
