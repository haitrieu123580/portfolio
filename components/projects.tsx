"use client";
import React, {useEffect} from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selectedId, setSelectedId] = React.useState<any>(null);

  const onClick = (project: any) => {
    setSelectedId(project);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 relative">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.id}>
            <Project {...project} onClick={() => onClick(project)} />
          </React.Fragment>
        ))}
      </div>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId.id}
              className="bg-red-500 text-black absolute z-50 top-1/2 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.h5>{selectedId?.description}</motion.h5>
              <motion.h2>{selectedId?.title}</motion.h2>
              <motion.button
                onClick={() => setSelectedId(null)}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white"
              >
                x
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  );
}
