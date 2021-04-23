import express from "express";
import { Server } from "http";
import { Config } from "./Config";

interface Options {
  port: string | number;
  oobe: boolean;
}

const defaultOptions: Options = {
  port: 8080,
  oobe: true,
};

class App {
  config: Config<Options> = new Config<Options>(defaultOptions);
  express: express.Express = express();
  plugins: Plugin[] = [];

  webserver?: Server;

  init() {
    return new Promise<void>((resolve) => {
      process.on("SIGINT", () => {
        this.stop();
      });

      this.config.load();

      this.webserver = this.express.listen(this.config.get("port"), () => {
        resolve();
      });
    });
  }

  stop() {
    return new Promise<void>((resolve, reject) => {
      this.config.save();

      this.webserver?.close((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  static main(args: string[]) {
    const app = new App();
    app.init();
  }
}

export { App };
