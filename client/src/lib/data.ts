import abstractGlass from '@assets/generated_images/abstract_3d_glass_shape.png';
import cyberpunkCity from '@assets/generated_images/cyberpunk_city_street.png';
import lowPoly from '@assets/generated_images/low_poly_landscape.png';
import scifiCorridor from '@assets/generated_images/sci-fi_corridor.png';
import watchMovement from '@assets/generated_images/mechanical_watch_movement.png';
import droneDesign from '@assets/generated_images/futuristic_drone_design.png';
import templeRuins from '@assets/generated_images/ancient_temple_ruins.png';
import retroComputer from '@assets/generated_images/retro_sci-fi_computer.png';
import abstractSculpture from '@assets/generated_images/geometric_abstract_sculpture.png';
import blacksmithShop from '@assets/generated_images/medieval_blacksmith_shop.png';

export const personalInfo = {
  name: "Nitin Kulkarni",
  title: "3D Artist & Designer",
  email: "contact@nitinkul.blog",
  phone: "+91 98765 43210",
  location: "Pune, India",
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
    title: "Cyber City Cinematic",
    category: "Animation",
    image: cyberpunkCity,
    isVideo: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-at-night-with-neon-lights-40011-large.mp4",
    description: "Animated cinematic fly-through of a cyberpunk environment with dynamic neon animations.",
    tools: ["Blender", "Eevee", "After Effects"]
  },
  {
    id: 4,
    title: "Sector 7 Corridor",
    category: "Hard Surface",
    image: scifiCorridor,
    description: "High-fidelity sci-fi corridor modeled with modular assets. Baked texture maps for real-time performance.",
    tools: ["Blender", "Substance Painter"]
  },
  {
    id: 5,
    title: "Watch Heartbeat",
    category: "Simulation",
    image: watchMovement,
    isVideo: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-clock-mechanism-working-42407-large.mp4",
    description: "Detailed mechanical watch movement animation showing the intricate gear interactions.",
    tools: ["Blender", "Cycles"]
  },
  {
    id: 6,
    title: "Vanguard X1",
    category: "Vehicle",
    image: droneDesign,
    description: "Conceptual drone design for a sci-fi universe. Features retractable landing gear and integrated lighting systems.",
    tools: ["Blender", "Eevee"]
  },
  {
    id: 7,
    title: "Fluid Dynamics",
    category: "Simulation",
    image: abstractGlass,
    isVideo: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-glass-structure-with-refractions-40012-large.mp4",
    description: "High-speed fluid simulation showing complex interactions and refractive properties.",
    tools: ["Blender", "Cycles", "Flip Fluids"]
  },
  {
    id: 8,
    title: "Echo Terminal",
    category: "Prop",
    image: retroComputer,
    description: "Retro-futuristic computer terminal. Focus on storytelling through wear, tear, and lighting.",
    tools: ["Blender", "Cycles"]
  },
  {
    id: 9,
    title: "Monolith",
    category: "Abstract",
    image: abstractSculpture,
    description: "Minimalist sculpture visualization in a gallery setting. Study of light, shadow, and architectural space.",
    tools: ["Blender", "Cycles"]
  },
  {
    id: 10,
    title: "Iron Hearth",
    category: "Environment",
    image: blacksmithShop,
    description: "Medieval blacksmith shop interior. Focus on fire and ember simulations using Mantaflow and particle systems.",
    tools: ["Blender", "Cycles", "Mantaflow"]
  },
  {
    id: 11,
    title: "Lost Relic",
    category: "Environment",
    image: templeRuins,
    description: "Ancient temple ruins overgrown with vegetation. Study of megascans integration and large-scale lighting.",
    tools: ["Blender", "Cycles", "Megascans"]
  },
  {
    id: 12,
    title: "Floating Isles",
    category: "Low Poly",
    image: lowPoly,
    description: "A whimsical low-poly landscape created for a mobile game prototype. Focus on color theory and simple geometry.",
    tools: ["Blender", "Unity"]
  }
];
