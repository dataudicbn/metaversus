'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative `}
  >
    <div className="absolute inset-0 w-1/2 " />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="search" className="object-contain w-6 h-6" />
      <h2 className="font-extrabold text-[24px] leading-8 text-white">
        METAVERSUS
      </h2>
      <img src="/menu.svg" alt="menu" className="object-contain w-6 h-6" />
    </div>
  </motion.nav>
);

export default Navbar;
