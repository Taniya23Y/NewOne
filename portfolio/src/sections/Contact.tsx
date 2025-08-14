"use-client";

import { SectionHeader } from "@/components/SectionHeader";
import { SectionBackground } from "@/components/SectionBackground";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const projects = [
  {
    features: [
      "Clean & Maintainable Code – Well-structured, scalable, and bug-free.",
      "Responsive Design – Optimized for all devices and screen sizes.",
      "Strong Problem-Solving Skills – Efficient and creative solutions.",
      "Timely Delivery – Meeting deadlines without compromising quality.",
      "Collaboration & Communication – Clear updates and teamwork-friendly approach.",
    ],
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "taniyayadav882@gmail.com",
        },
        publicKey
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="container py-16 pt-14 lg:py-24 lg:pt-18" id="contact">
      <SectionHeader
        tagText="Get in Touch"
        tagIcon="mdi:email-outline"
        eyebrow="Contact"
        showUnderline={true}
        centered={true}
        title="Let’s Connect"
        description="Have a question, project idea, or just want to say hi? Feel free to reach out and I’ll get back to you as soon as possible."
      />

      {/* Contact Info & Form */}
      <SectionBackground>
        <section>
          <div className="container mx-auto px-4 bg-[#152D24] rounded-2xl border border-[#33785f]">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Left Column: Why Work With Me */}
              <div className="p-7 md:p-8 rounded-lg">
                <div>
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                    <div className="p-1.5 md:p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg md:rounded-xl">
                      <Icon
                        icon="solar:settings-bold"
                        className="text-white w-[18px] h-[18px] md:w-6 md:h-6"
                      />
                    </div>
                    <span> What I Bring to the Table!</span>
                  </h4>
                  <ul className="space-y-2.5 md:space-y-3">
                    {projects[0].features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-start gap-2.5 md:gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <Icon
                          icon="solar:check-circle-bold"
                          className="text-green-500 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5"
                        />
                        <span className="text-sm md:text-base leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Contact Links */}
                <div className="mt-8 space-y-4">
                  <div className="bg-[#aea776] rounded-md border border-[#e7db7d] p-2 text-center">
                    <a
                      href="mailto:taniyayadav882@gmail.com"
                      className="flex text-center items-center gap-3 hover:text-black"
                    >
                      <Mail className="w-6 h-6" />
                      <span>taniyayadav882@gmail.com</span>
                    </a>
                  </div>
                  <div className="bg-[#d48181] rounded-md border border-[#cb5353] p-2 text-center">
                    <a
                      href="https://github.com/taniya23y"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-black"
                    >
                      <Github className="w-6 h-6" />
                      <span>github.com/taniya23y</span>
                    </a>
                  </div>

                  <div className="bg-[#949CCE] rounded-md border border-[#7a88e1] p-2 text-center">
                    <a
                      href="https://linkedin.com/in/taniyay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-black"
                    >
                      <Linkedin className="w-6 h-6" />
                      <span>linkedin.com/in/taniyay</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="p-6 md:p-8 rounded-lg ">
                <motion.section
                  id="contact"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <div className="max-w-4xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                      className="mb-12"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <form
                        onSubmit={handleSubmit}
                        className="max-w-2xl mx-auto space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: true }}
                          >
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-300 mb-2"
                            >
                              Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-gray-100 transition-all duration-300"
                              placeholder="Your full name"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                          >
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-300 mb-2"
                            >
                              Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-gray-100 transition-all duration-300"
                              placeholder="your.email@example.com"
                            />
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                          viewport={{ once: true }}
                        >
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-gray-100 transition-all duration-300 resize-none"
                            placeholder="Tell me about your project or idea..."
                          />
                        </motion.div>

                        <motion.div
                          className="text-center"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.0 }}
                          viewport={{ once: true }}
                        >
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full inline-flex items-center gap-2 px-8 py-4 bg-[#a454f4]   hover:bg-purple-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <Icon
                                  icon="solar:loading-outline"
                                  width={20}
                                  height={20}
                                  className="animate-spin"
                                />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Icon
                                  icon="solar:letter-outline"
                                  width={20}
                                  height={20}
                                />
                                Send Message
                                <motion.div
                                  className="ml-2"
                                  animate={{ x: [0, 4, 0] }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                  }}
                                >
                                  →
                                </motion.div>
                              </>
                            )}
                          </motion.button>

                          {/* Status Messages */}
                          {submitStatus === "success" && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="relative mt-4 p-4 bg-green-900/20 border border-green-800 rounded-xl"
                            >
                              <div className="flex items-center gap-2 text-green-400">
                                <Icon
                                  icon="solar:check-circle-bold"
                                  width={20}
                                  height={20}
                                />
                                <span className="font-medium">
                                  Message sent successfully!
                                </span>
                              </div>
                              <p className=" text-left text-green-500 text-sm mt-1">
                                Thank you for reaching out. I&apos;ll get back
                                to you soon!
                              </p>
                              {/* add a button to close the message */}
                              <button
                                onClick={() => setSubmitStatus("idle")}
                                className="absolute top-1 right-1  text-red-500 rounded-md"
                              >
                                <Icon
                                  icon="solar:close-circle-bold"
                                  width={20}
                                  height={20}
                                />
                              </button>
                            </motion.div>
                          )}

                          {submitStatus === "error" && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-4 p-4 bg-red-900/20 border border-red-800 rounded-xl"
                            >
                              <div className="flex items-center gap-2 text-red-400">
                                <Icon
                                  icon="solar:close-circle-bold"
                                  width={20}
                                  height={20}
                                />
                                <span className="font-medium">
                                  Failed to send message
                                </span>
                              </div>
                              <p className="text-left text-red-500 text-sm mt-1">
                                Please try again or contact me directly at
                                taniyayadav882@gmail.com
                              </p>
                              {/* add a button to close the message */}
                              <button
                                onClick={() => setSubmitStatus("idle")}
                                className="absolute top-1 right-1  text-red-500 rounded-md"
                              >
                                <Icon
                                  icon="solar:close-circle-bold"
                                  width={20}
                                  height={20}
                                />
                              </button>
                            </motion.div>
                          )}
                        </motion.div>
                      </form>
                    </motion.div>

                    {/* Alternative Contact Methods */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.1 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-gray-400 mb-6">
                        Or reach out directly:
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            href="mailto:taniyayadav882@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3  bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 hover:border-gray-500 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                          >
                            <Icon
                              icon="solar:mailbox-bold-duotone"
                              width={18}
                              height={18}
                            />
                            Send Email
                          </Link>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            href="/CV.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border-2  border-gray-600 hover:border-gray-500 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                          >
                            <Icon
                              icon="solar:download-outline"
                              width={18}
                              height={18}
                            />
                            Download CV
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.section>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>
    </div>
  );
};
