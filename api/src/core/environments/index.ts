import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { ProjectEnvironment } from '../domain/environment';

const files = readdirSync(process.cwd())
  .filter(f => (f.includes(process.env.NODE_ENV) && f.startsWith(".env")) || f === ".env")

const file = files.length > 1 ?
  files.find(f => f.includes(process.env.NODE_ENV)) :
  files.find(f => f === ".env");

const envs = readFileSync(resolve(process.cwd(), file))
  .toString().split("\n").filter(e => !e.startsWith("#") && e.length > 0)
  .map(line => line.split("=") as [string, string])

const environment: ProjectEnvironment = new ProjectEnvironment(envs);

export default environment;