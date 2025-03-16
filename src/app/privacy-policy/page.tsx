"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
                    className="text-3xl sm:text-4xl font-bold mb-8 text-center"
                >
                    Privacy Policy
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="space-y-6 w-full bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-8"
                >
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Our Commitment to Privacy</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Our app doesn&#39;t collect data or even have network permission. We believe in creating a safe, private experience for all our users.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">Data Collection</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            We do not collect, store, or process any personal information. Our application operates entirely offline, ensuring your privacy is maintained at all times.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Since our app doesn&#39;t connect to the internet, we don&#39;t use any third-party services that might collect your data.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            If you have any questions about our privacy practices, please reach out to us at contact@abdoarts.com.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Link
                        href="/"
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-base h-12 px-6"
                    >
                        Back to Home
                    </Link>
                </motion.div>
            </main>

            <footer className="text-center text-gray-500 text-sm mt-12">
                <p>© {new Date().getFullYear()} Abdo Arts. All rights reserved.</p>
            </footer>
        </div>
    );
}