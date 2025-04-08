export const containerVariants = {
  initial: { opacity: 0 },
  transition: { duration: 0.8 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  }
}

export const itemVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
}
