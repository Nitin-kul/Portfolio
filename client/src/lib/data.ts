import abstractGlass from '@assets/generated_images/abstract_3d_glass_shape.png';
import cyberpunkCity from '@assets/generated_images/cyberpunk_city_street.png';
import lowPoly from '@assets/generated_images/low_poly_landscape.png';
import scifiCorridor from '@assets/generated_images/sci-fi_corridor.png';

export const personalInfo = {
  name: "Nitin Kulkarni",
  title: "3D Artist & Designer",
  email: "contact@nitinkul.blog", // Placeholder based on domain
  phone: "+91 98765 43210", // Placeholder
  location: "Pune, India", // Based on search results hinting at Indian universities
  about: "I am a passionate 3D Artist specializing in hard surface modeling, environment design, and photorealistic rendering. With a deep understanding of Blender's powerful toolset, I transform concepts into immersive visual experiences. My workflow integrates procedural texturing, volumetric lighting, and optimized topology to create assets ready for game engines and cinematic productions.",
  socials: [
    { name: "ArtStation", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "YouTube", url: "#" }
  ]
};

export const education = [
  {
    degree: "Bachelor of Design (B.Des)",
    school: "Avantika University",
    year: "2019 - 2023",
    description: "Specialized in Industrial Design with a focus on digital prototyping and 3D visualization."
  },
  {
    degree: "Certification in 3D Animation",
    school: "Udemy / Coursera",
    year: "2018",
    description: "Comprehensive course on Blender fundamentals, character rigging, and animation pipelines."
  }
];

export const projects = [
  {
    id: 1,
    title: "Neon Rain",
    category: "Environment",
    image: cyberpunkCity,
    description: "A cyberpunk city street scene created to study volumetric lighting and screen-space reflections in Eevee.",
    tools: ["Blender", "Eevee", "Photoshop"]
  },
  {
    id: 2,
    title: "Prism Refraction",
    category: "Abstract",
    image: abstractGlass,
    description: "An exploration of glass dispersion shaders and caustics using the Cycles rendering engine.",
    tools: ["Blender", "Cycles"]
  },
  {
    id: 3,
    title: "Floating Isles",
    category: "Low Poly",
    image: lowPoly,
    description: "A whimsical low-poly landscape created for a mobile game prototype. Focus on color theory and simple geometry.",
    tools: ["Blender", "Unity"]
  },
  {
    id: 4,
    title: "Sector 7 Corridor",
    category: "Hard Surface",
    image: scifiCorridor,
    description: "High-fidelity sci-fi corridor modeled with modular assets. Baked texture maps for real-time performance.",
    tools: ["Blender", "Substance Painter"]
  }
];
