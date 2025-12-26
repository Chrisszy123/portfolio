import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, web3idArch, web3idAuthFlow } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="relative z-0 bg-primary min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-4xl mb-4">Project Not Found</h2>
          <Link to="/" className="text-secondary hover:text-white">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className={`${styles.paddingX} pt-24 pb-16`}>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            variants={fadeIn("right", "spring", 0.1, 0.8)}
            initial="hidden"
            animate="show"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-secondary hover:text-white mb-8 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to Projects</span>
          </motion.button>

          {/* Hero Image */}
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.8)}
            initial="hidden"
            animate="show"
            className="mb-12"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </motion.div>

          {/* Header */}
          <motion.div
            variants={textVariant()}
            initial="hidden"
            animate="show"
            className="mb-8"
          >
            <h1 className={`${styles.sectionHeadText} mb-4`}>
              {project.name}
            </h1>
            <p className="text-secondary text-lg leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.8)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3 mb-12"
          >
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-sm px-4 py-2 rounded-full bg-tertiary ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </motion.div>

          {/* Source Code Link */}
          <motion.div
            variants={fadeIn("up", "spring", 0.4, 0.8)}
            initial="hidden"
            animate="show"
            className="mb-12"
          >
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-tertiary rounded-lg hover:bg-opacity-80 transition-all"
            >
              <img
                src={github}
                alt="github"
                className="w-5 h-5 object-contain"
              />
              <span className="text-white">View Source Code</span>
            </a>
          </motion.div>

          {/* Narrative Section */}
          <motion.article
            variants={fadeIn("up", "spring", 0.5, 0.8)}
            initial="hidden"
            animate="show"
            className="prose prose-invert max-w-none mb-16"
          >
            <div className="space-y-6">
              {project.narrative.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-secondary text-lg leading-[32px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          {/* Architecture Diagram - Web3ID Only */}
          {project.id === "web3id" && (
            <motion.section
              variants={fadeIn("up", "spring", 0.55, 0.8)}
              initial="hidden"
              animate="show"
              className="mb-16"
            >
              <h2 className="text-white text-3xl font-bold mb-6">
                System Architecture
              </h2>
              <div className="bg-tertiary rounded-2xl p-6">
                <img
                  src={web3idArch}
                  alt="Web3ID Architecture Diagram"
                  className="w-full rounded-xl mb-4"
                />
                <p className="text-secondary text-sm text-center">
                  High-level architecture diagram showing the interaction between user interfaces (User Wallet/Browser, React Admin Console), backend services (Node.js API Gateway, Auth Service), the Rust Signature Verifier, PostgreSQL database, and Blockchain Smart Contracts. The arrows indicate the flow of data and requests throughout the system.
                </p>
              </div>
            </motion.section>
          )}

          {/* Authentication Flow Diagram - Web3ID Only */}
          {project.id === "web3id" && (
            <motion.section
              variants={fadeIn("up", "spring", 0.6, 0.8)}
              initial="hidden"
              animate="show"
              className="mb-16"
            >
              <h2 className="text-white text-3xl font-bold mb-6">
                Authentication Flow (Wallet → JWT)
              </h2>
              <div className="bg-tertiary rounded-2xl p-6">
                <img
                  src={web3idAuthFlow}
                  alt="Web3ID Authentication Flow Diagram"
                  className="w-full rounded-xl mb-4"
                />
                <p className="text-secondary text-sm text-center">
                  Sequence diagram illustrating the complete authentication process: from wallet connection through nonce generation, signature verification via the Rust service, on-chain role checking, to final JWT and session token issuance. This flow ensures secure, wallet-native authentication with enterprise-grade authorization.
                </p>
              </div>
            </motion.section>
          )}

          {/* Challenges Section */}
          {project.challenges && (
            <motion.section
              variants={fadeIn("up", "spring", 0.6, 0.8)}
              initial="hidden"
              animate="show"
              className="mb-16"
            >
              <h2 className="text-white text-3xl font-bold mb-6">
                Challenges
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-secondary text-lg"
                  >
                    <span className="text-white mt-2">•</span>
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Solutions Section */}
          {project.solutions && (
            <motion.section
              variants={fadeIn("up", "spring", 0.7, 0.8)}
              initial="hidden"
              animate="show"
              className="mb-16"
            >
              <h2 className="text-white text-3xl font-bold mb-6">
                Solutions
              </h2>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-secondary text-lg"
                  >
                    <span className="text-white mt-2">•</span>
                    <span className="leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Technologies Section */}
          {project.technologies && (
            <motion.section
              variants={fadeIn("up", "spring", 0.8, 0.8)}
              initial="hidden"
              animate="show"
              className="mb-16"
            >
              <h2 className="text-white text-3xl font-bold mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-tertiary rounded-lg text-white text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>
          )}

          {/* Footer Navigation */}
          <motion.div
            variants={fadeIn("up", "spring", 0.9, 0.8)}
            initial="hidden"
            animate="show"
            className="pt-12 border-t border-tertiary flex justify-between items-center"
          >
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Back to Projects</span>
            </button>
            <Link
              to="/#work"
              className="text-secondary hover:text-white transition-colors"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

