import { Bug, Code, Palette } from "lucide-react";
const About = () => {
  return (
    <section id="About" className="py-24 px-4 relative">
      <div className="container mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          About<span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>Wed develop;er & technology</h3>
            <p className="text-muted-foreground">
              I am Developer and I have fresher I create website modern I build
              interface that are both beautiful and functional.
            </p>
            <p className="text-muted-foreground">
              With 6 Month training , I've built and maintained a wide range of
              websites and web apps - from landing pages to full Saas platforms.
              I pay close attention to detail, focus on accessibility and
              containously learn new tools and trands to stay ahead inthe
              fast-moving world of web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-95"
              >
                Get In Contact Me
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border bordder-primarytext-primary  hover:bg-primary/10  transition-colors duration-300 "
              >
                Download CV
              </a>
            </div>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 ">
          <div className="group prespective w-full h-48 ">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl flex flex-col justify-center item-center px-4 backface-hidden">
                <Code className="h-8 w-8 mb-2" />
                <h4 className="text-lg font-bold ">Web Development</h4>
              </div>
            </div>
          </div>
          <div className="group prespective w-full h-48 ">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl flex flex-col justify-center item-center px-4 backface-hidden">
                <Bug className="h-8 w-8 mb-2" />
                <h4 className="text-lg font-bold ">Web Development</h4>
              </div>
            </div>
          </div>
          <div className="group prespective w-full h-48 ">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl flex flex-col justify-center item-center px-4 backface-hidden">
                <Palette className="h-8 w-8 mb-2" />
                <h4 className="text-lg font-bold ">Ui Design</h4>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
export default About;
