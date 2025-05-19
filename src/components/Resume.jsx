import React from 'react'
import { profile } from '../data/profile'
import { motion } from 'framer-motion'

 const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const Resume = () => (
  <main className="max-w-3xl mx-auto p-10 bg-indigo-100 rounded-2xl shadow-2xl">
    {/* Header */}
    <header className="text-center mb-12">
      <motion.h1
        className="text-3xl font-extrabold text-indigo-400 mb-2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {profile.name}
      </motion.h1>
      <motion.p
        className="text-2xl text-gray-700 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {profile.title}
      </motion.p>
      <motion.div
        className="flex justify-center gap-6 text-gray-600 text-sm overflow-auto no-scrollbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a href={`mailto:${profile.contacts.email}`} className="hover:text-indigo-600">{profile.contacts.email}</a>
        <span>{profile.contacts.phone}</span>
        <a href={profile.contacts.github} target="_blank" rel="noopener" className="hover:text-indigo-600">GitHub</a>
      </motion.div>
    </header>

    {/* Summary */}
    <section className="mb-12 p-6 bg-white rounded-xl shadow-inner">
      <h2 className="text-3xl font-semibold text-indigo-800 mb-4">О себе</h2>
      <motion.p
        className="text-gray-800 leading-relaxed whitespace-pre-line"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        transition={{ duration: 0.5 }}
      >
        {profile.summary}
      </motion.p>
    </section>

    {/* Skills */}
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-indigo-800 mb-4 text-center">Навыки</h2>
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {profile.skills.map(skill => (
          <motion.span
            key={skill}
            className="px-4 py-2 bg-indigo-200 rounded-full text-indigo-800 font-medium text-sm"
            variants={itemVariants}
          >{skill}</motion.span>
        ))}
      </motion.div>
    </section>

    {/* Experience List */}
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-indigo-800 mb-4 text-center">Опыт работы</h2>
      <ul className="space-y-6">
        {profile.experience.map((item, idx) => (
          <motion.li
            key={idx}
            className="p-6 bg-white rounded-xl shadow-lg"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-bold text-indigo-800">{item.company}</h3>
            <span className="text-sm text-gray-500 italic">{item.period}</span>
            <p className="mt-2 font-medium text-gray-800">{item.role}</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {item.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </motion.li>
        ))}
      </ul>
    </section>

    {/* Education List */}
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-indigo-800 mb-4 text-center">Образование</h2>
      <ul className="space-y-6">
        {profile.education.map((item, idx) => (
          <motion.li
            key={idx}
            className="p-6 bg-white rounded-xl shadow-lg"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-bold text-indigo-800">{item.institution}</h3>
            <span className="text-sm text-gray-500 italic">{item.degree}, {item.period}</span>
          </motion.li>
        ))}
      </ul>
    </section>

    {/* Projects */}
    <section className="mb-10">
      <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">Проекты</h2>
      <ul className="space-y-6">
        {profile.projects.map((proj, i) => (
          <motion.li
            key={i}
            className="p-6 flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg transition"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ delay: i * 0.2 }}
          >
            <a href={proj.link} target="_blank" rel="noopener" className="text-indigo-800 hover:text-indigo-900 text-lg font-semibold">
              {proj.name}
            </a>
            <a href={proj.link_code} target="_blank" rel="noopener" className="text-indigo-300 hover:text-indigo-900 text-lg font-semibold">
              ({proj.name_code})
            </a>
            <p className="text-gray-800 mt-2">{proj.description}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  </main>
)

export default Resume
