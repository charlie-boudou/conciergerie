import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        <motion.div
          key={location.pathname}  // Utiliser le chemin comme clé pour gérer les transitions
          initial={{ opacity: 0, x: -500 }} // Initialement hors de l'écran à gauche
          animate={{ opacity: 1, x: 0 }}    // Animation d'entrée au centre
          exit={{ opacity: 1, x: 500 }}     // Animation de sortie hors de l'écran à droite
          transition={{ duration: 2 }}   // Ajuster la durée de la transition
          className="absolute inset-0"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;




