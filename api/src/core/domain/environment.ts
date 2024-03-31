export class ProjectEnvironment {
  NODE_ENV: 'development' | 'production';
  JWT_SECRET: string;
  DATABASE_URL: string;

  constructor(envs?: [string, string][]) {
    this.NODE_ENV = process.env.NODE_ENV ?? 'development';
    this.DATABASE_URL = process.env.DATABASE_URL;
    this.JWT_SECRET = process.env.JWT_SECRET;

    if (envs) {
      for (const env of envs) {
        this[env[0]] = env[1]
      }
    }
  }
}