import React from 'react'
import { profile } from '../data/Profile'

const Resume = () => (
  <main className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg">
    {/* Header */}
    <header className="text-center mb-8">
      <h1 className="text-5xl font-bold">{profile.name}</h1>
      <p className="text-xl text-gray-600">{profile.title}</p>
      <div className="mt-4 space-x-4 text-sm text-gray-500">
        <a href={`mailto:${profile.contacts.email}`}>{profile.contacts.email}</a>
        <span>{profile.contacts.phone}</span>
        <a href={profile.contacts.github} target="_blank" rel="noopener">GitHub</a>
        <a href={profile.contacts.linkedin} target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </header>

    {/* Summary */}
    <section className="mb-6">
      <h2 className="text-2xl font-semibold border-b pb-1 mb-3">О себе</h2>
      <p className="text-gray-700 leading-relaxed">{profile.summary}</p>
    </section>

    {/* Skills */}
    <section className="mb-6">
      <h2 className="text-2xl font-semibold border-b pb-1 mb-3">Навыки</h2>
      <ul className="flex flex-wrap gap-2">
        {profile.skills.map(skill => (
          <li
            key={skill}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>

    {/* Experience */}
    <section className="mb-6">
      <h2 className="text-2xl font-semibold border-b pb-1 mb-3">Опыт работы</h2>
      {profile.experience.map((job, i) => (
        <div key={i} className="mb-4">
          <h3 className="text-lg font-medium">
            {job.company} <span className="text-sm text-gray-500">({job.period})</span>
          </h3>
          <p className="italic text-gray-600 mb-1">{job.role}</p>
          <ul className="list-disc list-inside text-gray-700">
            {job.details.map((d, idx) => <li key={idx}>{d}</li>)}
          </ul>
        </div>
      ))}
    </section>

    {/* Education */}
    <section className="mb-6">
      <h2 className="text-2xl font-semibold border-b pb-1 mb-3">Образование</h2>
      {profile.education.map((edu, i) => (
        <div key={i} className="mb-2">
          <p className="font-medium">{edu.institution}</p>
          <p className="text-sm text-gray-500">
            {edu.degree}, {edu.period}
          </p>
        </div>
      ))}
    </section>

    {/* Projects */}
    <section>
      <h2 className="text-2xl font-semibold border-b pb-1 mb-3">Проекты</h2>
      {profile.projects.map((proj, i) => (
        <div key={i} className="mb-4">
          <a
            href={proj.link}
            target="_blank"
            rel="noopener"
            className="text-blue-600 hover:underline font-medium"
          >
            {proj.name}
          </a>
          <p className="text-gray-700">{proj.description}</p>
        </div>
      ))}
    </section>
  </main>
)

export default Resume
