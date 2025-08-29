import { motion } from "framer-motion";
const Skillsection = () => {
  const skills = [
    //frontend
    { name: "HTML", level: 95, category: "frontend" },
    { name: "CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 95, category: "frontend" },
    { name: "Bootstrap", level: 95, category: "frontend" },
    { name: "Tailwind CSS", level: 65, category: "frontend" },
    //backend
    { name: "Node JS", level: 95, category: "backend" },
    { name: "MongoDB", level: 95, category: "backend" },
    //tools
    { name: "Git/GitHub", level: 95, category: "tools" },
    { name: "Canva", level: 95, category: "tools" },
  ];
  const neoColors = [
    "#ff00cc", //pink
    "#9966ff", //purple
    "#ffffff", //white
  ];
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10  place-iteams-center">
          {skills.map((skill, index) => {
            {
              console.log(skill);
            }
            const neon = neoColors[index % neoColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative w-32 h-32 border-2 flex flex-col items-center jsutify-center"
                style={{
                  borderColor: neon,
                  boxShadow: `0 0 10px 6px ${neon}`,
                  background: "transparent",
                }}
              >
                <div className="text-2xl font-bold" style={{ color: neon }}>
                  {/* {console.log(skill.level)} */}
                  {skill.level}%
                </div>
                <div className="text-sm mt-1 uppercase tracking-wide">
                  {skill.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skillsection;
