# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

Please setup the latest node version ( v18.12.1). You can use nvm for node version management.

### Installation

```
$ npm run start
```

source - master branch
deployment - prod branch
Not using SSH: 
 
```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


Notes
#1
The following url works as of now !!!
https://atulagrawal.github.io/software-architecture/docs/category/tutorial---extras/
#2
Changed deploy.js because of ssh cert error
if (shellExecLog(`git clone -c http.sslverify=false --depth 1 --branch ${deploymentBranch} ${deploymentRepoURL} "${toPath}"`).code === 0) {
     shellExecLog('git rm -rf .');
}



#2  the following error happens becuase of node version so please check you are using latest version of the node.

> docusaurus clear

process.env.BABEL_ENV ??= 'development';
                       ^

SyntaxError: Unexpected token '?'
    at Loader.moduleStrategy (internal/modules/esm/translators.js:140:18)
    at async link (internal/modules/esm/module_job.js:42:21)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! software-architecture@0.0.0 clear: `docusaurus clear`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the software-architecture@0.0.0 clear script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     ..../.npm/_logs/2023-05-25T03_50_05_691Z-debug.log


#3 Setup GIT_USER and GIT_PASS in the env before invoking the command in case of following error:

[INFO] Deploy command invoked...
[ERROR] Error: Please set the GIT_USER environment variable, or explicitly specify USE_SSH instead!
    at Command.deploy (software-architecture/node_modules/@docusaurus/core/lib/commands/deploy.js:70:19)