import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";

export function CleanLoading() {
  const angle = useMotionValue(0);
  const radius = 5;

  const x = useTransform(angle, (a) => Math.cos(a) * radius);
  const y = useTransform(angle, (a) => Math.sin(a) * radius);

  useAnimationFrame((t) => {
    angle.set(t / 500);
  });

  return (
    <motion.div
      animate={{ opacity: [0, 1], transition: { delay: 3.5, duration: 2 } }}
      className="border border-white size-8 rounded-[30%] p-1 relative"
    >
      <motion.div
        style={{ x, y }}
        className="absolute top-1/2 left-1/2 size-3 bg-white rounded-[40%] -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
}
