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
