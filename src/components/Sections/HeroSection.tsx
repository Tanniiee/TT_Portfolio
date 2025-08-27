import React from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowDown, Mail, LucideIcon } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import PROFILE_PIC from "../../assets/images/profile.jpg";
import { containerVariants, itemVariants } from "../../utils/helper";

// Interface definitions
interface SocialLink {
  icon: LucideIcon | React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

interface TechStackItem {
  name: string;
  color?: string;
}

// Animation variants with proper typing
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const HeroSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  // Utility function with proper typing
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Social links data with proper typing
  const socialLinks: SocialLink[] = [
    { 
      icon: FiGithub, 
      href: "https://github.com/Tanniiee", 
      label: "GitHub" 
    },
    { 
      icon: Mail, 
      href: "mailto:your.email@example.com", 
      label: "Email" 
    },
    { 
      icon: FiLinkedin, 
      href: "https://linkedin.com/in/yourprofile", 
      label: "LinkedIn" 
    },
  ];

  // Tech stack data with proper typing
  const techStack: TechStackItem[] = [
    { name: "React" },
    { name: "Node.js" },
    { name: "TypeScript" },
    { name: "MongoDB" },
    { name: "Tailwind CSS" },
    { name: "Next.js" },
    { name: "Framer Motion" },
    { name: "JavaScript" },
  ];

  // Render tech stack with separators - Updated with flex-wrap
  const renderTechStack = (className: string) => (
    <motion.div
      variants={itemVariants}
      className={`flex items-center justify-center flex-wrap gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-widest ${className}`}
    >
      {techStack.map((tech, index) => (
        <React.Fragment key={tech.name}>
          <span
            className={`${
              isDarkMode ? "text-gray-600" : "text-gray-500"
            }`}
          >
            {tech.name}
          </span>
          {index < techStack.length - 1 && (
            <span
              className={`${
                isDarkMode ? "text-gray-700" : "text-gray-400"
              } last:hidden`}
            >
              •
            </span>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );

  // Render social links
  const renderSocialLinks = (className: string = "") => (
    <motion.div
      variants={itemVariants}
      className={`flex space-x-6 ${className}`}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          whileHover={{ y: -3, scale: 1.1 }}
          className={`p-3 rounded-full transition-colors ${
            isDarkMode
              ? "text-gray-400 hover:text-white hover:bg-gray-800"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
          }`}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  );

  // Render CTA buttons
  const renderCTAButtons = (isMobile: boolean = false) => (
    <motion.div
      variants={itemVariants}
      className={`flex ${
        isMobile ? "flex-col sm:flex-row" : "flex-row"
      } gap-4 ${isMobile ? "justify-center items-center" : ""} mb-8`}
    >
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => scrollToSection("work")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="View my work"
      >
        View Work
      </motion.button>
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => scrollToSection("contact")}
        className={`border ${
          isDarkMode
            ? "border-gray-700 hover:border-gray-600 text-gray-300 focus:ring-gray-600"
            : "border-gray-300 hover:border-gray-400 text-gray-700 focus:ring-gray-400"
        } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2`}
        aria-label="Get in touch with me"
      >
        Get in Touch
      </motion.button>
    </motion.div>
  );

  // Render profile image with decorative elements - Fixed animation for all screen sizes
  const renderProfileImage = (className: string = "", size: "small" | "large" = "large") => {
    const imageSize = size === "small" ? "w-32 h-32" : "w-80 h-96";
    const borderRadius = size === "small" ? "rounded-2xl" : "rounded-3xl";
    const decorativeSize = size === "small" ? "-inset-2" : "-inset-4";
    const decorativeSize2 = size === "small" ? "-inset-4" : "-inset-8";

    return (
      <motion.div variants={imageVariants} className={className}>
        <div className={`${size === "small" ? "w-32 h-32 mx-auto" : ""} relative`}>
          <motion.div
            whileHover={{ scale: size === "small" ? 1.05 : 1.02 }}
            className={`${imageSize} ${borderRadius} overflow-hidden border-4 ${
              isDarkMode ? "border-gray-800" : "border-gray-300"
            } ${size === "large" ? "shadow-2xl" : ""}`}
          >
            <img
              src={PROFILE_PIC}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Decorative rings - Now animate on all screen sizes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute ${decorativeSize} ${borderRadius} border border-blue-500/20`}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute ${decorativeSize2} ${borderRadius} border border-purple-500/10`}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* Mobile Layout - Centered */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              {/* Profile Image - Mobile */}
              {renderProfileImage("mb-8", "small")}

              {/* Content Mobile */}
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-6`}
              >
                Mobile Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Creating mobile
                </span>
                <span className="text-blue-500 font-medium ml-2">
                  Solutions
                </span>
                <br />
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  that matter
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
              >
                Designing and developing intuitive mobile apps that blend
                performance, creativity, and technology.
              </motion.p>

              {/* CTA Buttons - Mobile */}
              {renderCTAButtons(true)}

              {/* Social Links - Mobile */}
              {renderSocialLinks("justify-center mb-8")}

              {/* Tech Stack - Mobile */}
              {renderTechStack("max-w-xs mx-auto")}
            </motion.div>
          </div>

          {/* Desktop Layout - Split */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left Column - Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left"
            >
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-6`}
              >
                Mobile Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Creating mobile
                </span>
                <br />
                <span className="text-blue-500 font-medium">Solutions</span>
                <br />
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  that matter
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-xl ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-12 font-light leading-relaxed max-w-lg`}
              >
                Designing and developing intuitive mobile apps that blend
                performance, creativity, and technology.
              </motion.p>

              {/* CTA Buttons - Desktop */}
              {renderCTAButtons(false)}

              {/* Social Links - Desktop */}
              {renderSocialLinks("mb-12")}
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Tech Stack - Desktop */}
                {renderTechStack("absolute -top-20 max-w-md")}

                {renderProfileImage()}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown
            size={20}
            className={`${isDarkMode ? "text-gray-600" : "text-gray-400"}`}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;