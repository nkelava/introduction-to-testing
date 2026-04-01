import { http, HttpResponse } from 'msw';
import tasks from './tasks.json';

let id = 3;

const createTask = (title) => ({
  id: `${id++}`,
  title,
  completed: false,
  createdAt: new Date('04-01-2026').toISOString(),
  lastModified: new Date('04-01-2026').toISOString(),
});

export const handlers = [
  http.get('/api/tesks', () => {
    return HttpResponse.json(tasks);
  }),
  http.post('/api/tasks', async ({ request }) => {
    const { title } = await request.json();
    const task = createTask(title);

    return HttpResponse.json(task);
  }),
];
