import { loadEnvironment } from "@jailtoncruz/oci-vault-env";

// Production
const COMPARTMENT_ID = 'ocid1.tenancy.oc1..aaaaaaaa3brmkyf6ix4h3glx3vwyu2sl6xicmljhmpp4ffk3ea5rmwaf3cla'
const VAULT_ID = 'ocid1.vault.oc1.sa-saopaulo-1.ershnrcqaaeu6.abtxeljrgjpn36l4nvyukzo2jnugucxudyoisez7eyxslvp7pm3sboka2ntq'

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

    this.loadVaultEnv()
  }

  private async loadVaultEnv() {
    if (this.NODE_ENV === "production") {
      const secrets = await loadEnvironment(COMPARTMENT_ID, VAULT_ID)
      for (const secret of secrets) {
        this[secret.name] = secret.value
      }
    }
  }
}