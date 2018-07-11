// tslint:disable-next-line:no-var-requires
const pkg = require('../../package.json');

export interface IConfig {
  name: string;
  environment: string;
  version: string;
  debug?: string;
  port: number;
}

const { name, version } = pkg;

let config: IConfig = {
  debug: process.env.DEBUG || `${name}:*`,
  environment: process.env.NODE_ENV || 'development',
  name,
  port: Number.parseInt(process.env.PORT || '') || 3000,
  version
};

export function merge(newConfig: IConfig) {
  config = { ...config, ...newConfig };
}

export function set<K extends keyof IConfig>(key: K, value: IConfig[K]) {
  config[key] = value;
}

export function get<K extends keyof IConfig>(key: K) {
  return config[key];
}

export function getWithDefault<K extends keyof IConfig>(key: K, defaultFallback: any) {
  return config[key] || defaultFallback;
}
