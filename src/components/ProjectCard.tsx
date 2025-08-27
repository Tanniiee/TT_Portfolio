import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Lock, X, AlertCircle } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project, index, isDarkMode }) => {
  const [showPrivateModal, setShowPrivateModal] = useState(false);

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleGithubClick = (e) => {
    if (project.githubPrivate) {
      e.preventDefault();
      setShowPrivateModal(true);
    }
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        whileHover={{
          y: -8,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        className="group relative"
      >
        <div
          className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
            isDarkMode
              ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10"
              : "bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-500/10"
          } backdrop-blur-sm`}
        >
          {/* Project Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4">
                <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  Featured
                </span>
              </div>
            )}
            {/* Category Badge */}
            <div className="absolute top-4 right-4">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  isDarkMode
                    ? "bg-gray-800/80 text-gray-300"
                    : "bg-white/80 text-gray-700"
                } backdrop-blur-sm`}
              >
                {project.category}
              </span>
            </div>
            {/* Hover Overlay with CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4"
            >
              {/* Live Demo Button */}
              {project.liveDemo !== false ? (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0.5 }}
                  whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </motion.a>
              ) : (
                <motion.div
                  initial={{ y: 20, opacity: 0.5 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium cursor-not-allowed opacity-70"
                >
                  <ExternalLink size={16} />
                  <span>No Demo</span>
                </motion.div>
              )}

              {/* GitHub Button */}
              <motion.button
                onClick={handleGithubClick}
                initial={{ y: 20, opacity: 0.5 }}
                whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className={`border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-all ${
                  project.githubPrivate ? "cursor-pointer" : ""
                }`}
                as={project.githubPrivate ? "button" : "a"}
                {...(!project.githubPrivate && {
                  href: project.githubUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {project.githubPrivate ? (
                  <Lock size={16} />
                ) : (
                  <FiGithub size={16} />
                )}
                <span>{project.githubPrivate ? "Private" : "GitHub"}</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-xl font-medium mb-3 group-hover:text-blue-500 transition-colors">
              {project.title}
            </h3>
            <p
              className={`text-sm leading-relaxed mb-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {project.description}
            </p>
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tag && project.tag.length > 0 ? (
                project.tag.map((tag, tagIndex) => (
                  <span
                    key={`${project.title}-${tag}-${tagIndex}`}
                    className={`text-xs px-3 py-1 rounded-full ${
                      isDarkMode
                        ? "bg-gray-800 text-gray-300"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-xs text-gray-500">No tags available</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Private Repository Modal */}
      <AnimatePresence>
        {showPrivateModal && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowPrivateModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`max-w-md w-full rounded-2xl p-6 ${
                isDarkMode
                  ? "bg-gray-900 border border-gray-800"
                  : "bg-white border border-gray-200"
              } shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-orange-500/10">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-medium">Private Repository</h3>
                </div>
                <button
                  onClick={() => setShowPrivateModal(false)}
                  className={`p-1 rounded-full hover:bg-gray-100 ${
                    isDarkMode ? "hover:bg-gray-800" : ""
                  } transition-colors`}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lock className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-sm">
                    Private repository
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  The source code for <strong>{project.title}</strong> is
                  currently private and cannot be accessed publicly. This may be
                  due to client confidentiality requirements or the proprietary
                  nature of the project.
                  {project.liveDemo === false && (
                    <span className="block mt-2 text-orange-500 font-medium">
                      This project also has no live demo available.
                    </span>
                  )}
                </p>
              </div>

              {/* Modal Actions */}
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowPrivateModal(false)}
                  className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors text-sm"
                >
                  Understood
                </button>
                {project.liveDemo !== false && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowPrivateModal(false)}
                    className={`px-4 py-2 border-2 rounded-lg font-medium transition-colors text-sm flex items-center space-x-2 ${
                      isDarkMode
                        ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <ExternalLink size={14} />
                    <span>View Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
