import { Router } from 'express';

const router = Router();

// Mock data
let plans = [
  { id: 1, title: "Cesta do Prahy", description: "Týdenní výlet po hlavním městě České republiky", startDate: "2023-08-25", endDate: "2023-08-28", status: 'completed', tags: ['cestování', 'Evropa'] },
  { id: 2, title: "Výlet na hory", description: "Týden v Krkonoších s přáteli", startDate: "2023-09-10", endDate: "2023-09-15", status: 'in-progress', tags: ['příroda', 'rekreace'] },
  { id: 3, title: "Plánovaný výlet do Itálie", description: "Dvacetidenní cesta po Itálii", startDate: "2023-10-15", endDate: "2023-10-30", status: 'planned', tags: ['cestování', 'Evropa', 'historie'] }
];

let tasks = [
  { id: 1, title: "Zarezervovat letenky", completed: true },
  { id: 2, title: "Zarezervovat ubytování", completed: true, subTasks: [
    { id: 21, title: "Vybrat hotel", completed: true },
    { id: 22, title: "Zarezervovat pokoj", completed: true }
  ]},
  { id: 3, title: "Sbalit kufr", completed: false, subTasks: [
    { id: 31, title: "Oblečení", completed: false },
    { id: 32, title: "Toaletní potřeby", completed: false },
    { id: 33, title: "Elektronika", completed: false, subTasks: [
      { id: 331, title: "Nabíječka", completed: false },
      { id: 332, title: "Foták", completed: false }
    ]}
  ]}
];

let projects = [
  { id: 1, title: "Plánovaná cesta do Francie", description: "Detailní plán cesty po Francii s návštěvou Paříže, Lyonu a Côte d'Azur", createdAt: "2023-08-01", updatedAt: "2023-08-20", status: 'in-progress', tags: ['cestování', 'Evropa', 'Francie'] },
  { id: 2, title: "Rekonstrukce koupelny", description: "Plán rekonstrukce koupelny v domě, včetně výměny dlaždic a sanitárního zařízení", createdAt: "2023-07-15", updatedAt: "2023-08-10", status: 'draft', tags: ['domácnost', 'stavba'] },
  { id: 3, title: "Organizace firemního večírku", description: "Plánování firemního večírku na konci roku včetně místa, jídel a zábavy", createdAt: "2023-08-05", updatedAt: "2023-08-18", status: 'completed', tags: ['firemní', 'událost'] }
];

let chatMessages = [
  { id: 1, text: 'Ahoj! Jsem váš AI cestovní asistent. Jak vám mohu pomoci s plánováním vaší další cesty?', isUser: false }
];

// Routes
router.get('/', (req, res) => {
  res.send('Hello, VoyageAI!');
});

// Plány
router.get('/plans', (req, res) => {
  res.json(plans);
});

router.post('/plans', (req, res) => {
  const newPlan = { id: Date.now(), ...req.body };
  plans.push(newPlan);
  res.status(201).json(newPlan);
});

router.put('/plans/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = plans.findIndex(plan => plan.id === id);
  if (index !== -1) {
    plans[index] = { ...plans[index], ...req.body };
    res.json(plans[index]);
  } else {
    res.status(404).send('Plán nenalezen');
  }
});

router.delete('/plans/:id', (req, res) => {
  const id = parseInt(req.params.id);
  plans = plans.filter(plan => plan.id !== id);
  res.status(204).send();
});

// Úkoly
router.get('/tasks', (req, res) => {
  res.json(tasks);
});

router.post('/tasks', (req, res) => {
  const newTask = { id: Date.now(), ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...req.body };
    res.json(tasks[index]);
  } else {
    res.status(404).send('Úkol nenalezen');
  }
});

router.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.status(204).send();
});

// Projekty
router.get('/projects', (req, res) => {
  res.json(projects);
});

router.post('/projects', (req, res) => {
  const newProject = { id: Date.now(), ...req.body };
  projects.push(newProject);
  res.status(201).json(newProject);
});

router.put('/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = projects.findIndex(project => project.id === id);
  if (index !== -1) {
    projects[index] = { ...projects[index], ...req.body };
    res.json(projects[index]);
  } else {
    res.status(404).send('Projekt nenalezen');
  }
});

router.delete('/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  projects = projects.filter(project => project.id !== id);
  res.status(204).send();
});

// Chat
router.get('/chat', (req, res) => {
  res.json(chatMessages);
});

router.post('/chat', (req, res) => {
  const newMessage = { id: Date.now(), ...req.body };
  chatMessages.push(newMessage);
  res.status(201).json(newMessage);
});

export { router };