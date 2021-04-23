interface ServMonPlugin {
  name: string;
  description: string;
  version: string;
  author: string;
  email: string;
  licence: string;

  init(): Promise<void>;
  stop(): Promise<void>;
}
