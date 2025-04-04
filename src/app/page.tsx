"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="w-full flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-bold"
                >
                    Abdo Arts
                </motion.div>
                <motion.nav
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-4"
                >
                    <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</Link>
                    <Link href="/privacy-policy" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Privacy</Link>
                </motion.nav>
            </header>

            <main className="flex flex-col items-center w-full max-w-3xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl sm:text-6xl font-bold mb-6 text-center"
                >
                    Abdo Arts
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
                >
                    Discover a world of artistic expression through our collection of unique digital and traditional artworks. We blend creative vision with technical expertise to bring imagination to life.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-12"
                >
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-xl mb-2">Digital Art</h3>
                        <p className="text-gray-600 dark:text-gray-400">Explore our digital creations made with passion and precision.</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-xl mb-2">Traditional Art</h3>
                        <p className="text-gray-600 dark:text-gray-400">Hand-crafted pieces that capture moments and emotions.</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <Link
                        href="/privacy-policy"
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-6"
                    >
                        Privacy Policy
                    </Link>
                </motion.div>
            </main>

            <footer className="text-center text-gray-500 text-sm mt-12">
                <p>© {new Date().getFullYear()} Abdo Arts. All rights reserved.</p>
            </footer>
        </div>
    );
}