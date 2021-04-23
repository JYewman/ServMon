# ServMon - Server Room Environmental & Security Platform

[![Node.js CI](https://github.com/JYewman/ServMon/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/JYewman/ServMon/actions/workflows/node.js.yml)

ServMon is an open source server room / datacenter environmental & security platform. The modular design of ServMon allows you to fully customise the platform to your fit your requirements.

## ServMon Structure
### ServMon Core
ServMon's core provides a Web UI, local authentication and dynamic plugin loading. ServMon's plugins do the rest of the heavy lifting.

### ServMon Plugins
ServMon's core codebase is a framework for it's plugins, these plugins include everything from LCD displays, enviromental sensors, RFID readers, audible alarms and anything else you can plug in and code into a plugin.

## Getting Started
ServMon is build on TypeScript and uses the Yarn package manager. You can follow the steps below to get a local copy of the source up and running.

### Prerequisites
* Nodejs 15
* Yarn Package Manager

### Install the repository
1. Clone the repository
2. Install the yarn packages
   ```
   yarn install
   ```
## Contributing
We would love you to contribute to ServMon! Any contributions, big or small are greatly appreciated! If you would like to become a frequent contributer and join the project, please get in touch with us using the contact info below!

Due to the modular nature of ServMon we would like to keep our codebase as clean as possible. If you would like to develop a plugin for ServMon you are more than welcome to develop your plugin in a seperate repository to ServMon, if your plugin requires additions to ServMon's core codebase, follow the steps below.

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Open a pull request

## Contact Us
You can get in touch with us via
GitHub Discussions or hello@gosystem.co.uk
