import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Assuming Badge might exist or I can use standard div if not
import { ExternalLink } from "lucide-react";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    tools: string[];
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="overflow-hidden border-border bg-card hover:border-primary/50 transition-colors h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white font-medium flex items-center gap-2">
              View Project <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        </div>
        
        <CardHeader className="p-4 pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
              {project.category}
            </span>
          </div>
        </CardHeader>
        
        <CardContent className="p-4 pt-2 flex-grow">
          <p className="text-muted-foreground text-sm line-clamp-3">
            {project.description}
          </p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 gap-2 flex-wrap">
          {project.tools.map((tool) => (
            <span 
              key={tool} 
              className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-full"
            >
              {tool}
            </span>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
