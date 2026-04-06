import { spawn } from 'node:child_process';

const commands = [
  { name: 'api', command: 'npm run api:dev' },
  { name: 'web', command: 'npm run dev' },
];

const children = [];
let shuttingDown = false;

function startProcess({ name, command }) {
  const child = spawn(command, {
    stdio: 'inherit',
    shell: true,
  });

  child.on('exit', (code, signal) => {
    if (shuttingDown) {
      return;
    }

    shuttingDown = true;

    for (const current of children) {
      if (!current.killed) {
        current.kill('SIGTERM');
      }
    }

    const detail = signal ? `signal ${signal}` : `code ${code ?? 0}`;
    console.error(`[${name}] stopped with ${detail}`);
    process.exit(code ?? 1);
  });

  children.push(child);
}

function shutdown() {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;

  for (const child of children) {
    if (!child.killed) {
      child.kill('SIGTERM');
    }
  }
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

for (const command of commands) {
  startProcess(command);
}
