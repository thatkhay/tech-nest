"use client";
import { motion } from "framer-motion";

export default function PhonePreview() {
  return (
    <div className="relative flex justify-center items-end min-h-[600px]">
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3.2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="relative"
      >
        <div className="h-[560px] w-[300px] rounded-[36px] bg-white/95 p-5 shadow-2xl ring-1 ring-white/50">
          <div className="mx-auto mb-5 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold flex items-center justify-center text-sm">
            TechNest App
          </div>

          <div className="space-y-4">
            <div className="h-20 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 shadow-inner p-3 flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>

            <div className="h-20 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 shadow-inner p-3 flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-500 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="h-3 bg-gray-300 rounded w-2/3 mb-2"></div>
                <div className="h-2 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>

            <div className="h-20 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 shadow-inner p-3 flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-pink-500 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="h-3 bg-gray-300 rounded w-4/5 mb-2"></div>
                <div className="h-2 bg-gray-200 rounded w-2/5"></div>
              </div>
            </div>

            <div className="h-12 rounded-xl bg-white shadow-inner border border-gray-200 flex items-center px-4">
              <div className="h-2 bg-gray-300 rounded w-1/2"></div>
            </div>

            <div className="mt-8 h-14 rounded-xl bg-white shadow-inner border border-gray-200 flex items-center justify-around">
              <div className="w-6 h-6 rounded bg-pink-400"></div>
              <div className="w-6 h-6 rounded bg-gray-300"></div>
              <div className="w-6 h-6 rounded bg-gray-300"></div>
              <div className="w-6 h-6 rounded bg-gray-300"></div>
            </div>
          </div>
        </div>

        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3.2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute -bottom-6 left-1/2 h-10 w-[70%] -translate-x-1/2 rounded-full bg-black/40 blur-2xl"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
