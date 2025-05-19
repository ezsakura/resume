export const profile = {
  name:    'Иван Иванов',
  title:   'Junior Front-End Developer',
  contacts: {
    email:   'ivan.ivanov@example.com',
    phone:   '+420 123 456 789',
    github:  'https://github.com/ivan-ivanov',
    linkedin:'https://linkedin.com/in/ivan-ivanov',
  },
  summary:
    `Студент экономического факультета, увлечён фронтенд-разработкой.
     Практикую Vite, React и Tailwind для создания отзывчивых SPA.
     Ищу возможность прокачать скиллы в дружной команде.`,
  skills: [
    'JavaScript (ES6+)', 'React', 'Vite', 'Tailwind CSS',
    'HTML5', 'CSS3', 'Git', 'REST API',
  ],
  education: [
    {
      institution: 'Экономический факультет, МГУ',
      period:      '2022 – наст. время',
      degree:      'Бакалавр «Налоги и налогообложение»',
    },
  ],
  experience: [
    {
      company: 'Интернатура в Веб-студии XYZ',
      period:  'Май 2024 – Авг 2024',
      role:    'Frontend Intern',
      details: [
        'Разработал SPA для внутренней CRM-системы',
        'Оптимизировал загрузку ассетов: снизил bundle на 30%',
        'Писал юнит-тесты с Jest и React Testing Library',
      ],
    },
  ],
  projects: [
    {
      name: 'Pokedex SPA',
      link: 'https://github.com/ivan-ivanov/pokedex',
      description:
        'Интерактивное приложение на React + Tailwind: список покемонов с пагинацией и детальной страницей каждого существа.',
    },
    {
      name: 'Todo List App',
      link: 'https://github.com/ivan-ivanov/todo-vite',
      description:
        'Минималистичный TODO-лист с drag’n’drop, локальным хранилищем и светлыми/тёмными темами.',
    },
  ],
}
