import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { homedir } from "os";
import { join } from "path";

class Config<ConfigOptions> {
  private configFolder = ".servmon";
  private configFile = "config.json";

  private configFolderLocation: string;
  private mainConfigFileLocation: string;

  defaultOptions: ConfigOptions;
  options: ConfigOptions;

  constructor(defaultOptions: ConfigOptions, filename?: string) {
    // Make the settings start off with the default options.
    this.options = defaultOptions;
    this.defaultOptions = defaultOptions;

    if (filename) {
      this.configFile = filename;
    }

    this.configFolderLocation = join(homedir(), this.configFolder);
    this.mainConfigFileLocation = join(
      homedir(),
      this.configFolder,
      this.configFile
    );

    // See if we can load from the filesystem.
    this.load();
  }

  /**
   * Write a property from the configuration file.
   * @param key The key to write to
   * @param value The value to write to the key
   */
  set<T extends keyof ConfigOptions>(key: T, value: ConfigOptions[T]) {
    this.options[key] = value;
  }

  /**
   * Get a property from the configuration file.
   * @param key The key to obtain
   * @returns The value of the key
   */
  get<T extends keyof ConfigOptions>(key: T): ConfigOptions[T] {
    return this.options[key];
  }

  /**
   * Write the configuration file to the file system.
   */
  save(): void {
    writeFileSync(
      this.mainConfigFileLocation,
      JSON.stringify(this.options, null, 2)
    );
  }

  /**
   * Attempt a load of the configuration file from the file system.
   * Sets the settings back to default if the file is not found.
   */
  load(): void {
    // If the folder doesn't exist, create it.
    if (!existsSync(this.configFolderLocation)) {
      mkdirSync(this.configFolderLocation);
    }

    // If the file doesn't exist, create it.
    if (!existsSync(this.mainConfigFileLocation)) {
      writeFileSync(
        this.mainConfigFileLocation,
        JSON.stringify(this.defaultOptions, null, 2)
      );
      this.options = this.defaultOptions;

      return;
    }

    // Read the options text file.
    const contents = readFileSync(this.mainConfigFileLocation, {
      encoding: "utf-8",
    });

    // Merge the settings with the defaults.
    // This has the effect of merging any potential newly created options,
    // great for the future!
    this.options = Object.assign(
      {},
      this.defaultOptions,
      JSON.parse(contents)
    ) as ConfigOptions;
  }
}

export { Config };
