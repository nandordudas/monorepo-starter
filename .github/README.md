[![GitHub tag](https://img.shields.io/github/tag/nandordudas/monorepo-starter?include_prereleases=&sort=semver&color=blue)](https://github.com/nandordudas/monorepo-starter/releases/ "Latest release")
[![License](https://img.shields.io/badge/License-MIT-blue)](../LICENSE "License")
[![issues - monorepo-starter](https://img.shields.io/github/issues/nandordudas/monorepo-starter)](https://github.com/nandordudas/monorepo-starter/issues "Issues")

[![Use this template](https://img.shields.io/badge/Generate-Use_this_template-2ea44f)](https://github.com/nandordudas/monorepo-starter/generate "Use this template")
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/github/nandordudas/monorepo-starter "Open in StackBlitz")

<!-- https://codesandbox.io/p/sandbox/github/nandordudas/monorepo-starter -->
<!-- https://githubbox.com/nandordudas/monorepo-starter -->

# 🪛 Monorepo starter

> tl;dr - _it's a boilerplate for starting Node.js projects for nerds_

It's recommended to use Docker, VS Code and related extensions for - read more about [devcontainers].

## Does it work without Docker and Devcontainer?

Of course, these are only recommended tools. You have to comply with the Devcontainer configurations, which you can find in the [.devcontainer folder].

### Installation

```bash
cd ~/Code/GitHub/...
npx degit https://github.com/nandordudas/monorepo-starter
code -n monorepo-starter
```

Open folder in Devcontainer, do some setup and enjoy.

```bash
cp .env.example .env
git init -b main
git add .
git commit -m "chore: initial commit"
git remote add origin https://github.com/...
npx bumpp major --files */**/package.json --no-{commit,push,tag}
npx bumpp premajor --preid alpha --no-verify --yes
```

---

## Setup shortcuts

<details>
  <summary>Setting up git</summary>

  Simple config

  ```bash
  email=john.doe@email.com
  name="John Doe"

  git config --global user.email $email
  git config --global user.name $name
  git config --global core.editor "code --wait"
  ```

  Adnvanced config - using GPG key

  ```bash
  sudo apt update -y && sudo apt upgrade -y
  # Recommeneded on WSL
  # sudo apt install -y gpg socat && sudo apt autoremove -y

  # Windows only
  # echo "pinentry-program $(command -v pinentry.exe)" >~/.gnupg/gpg-agent.conf

  # start new session - not necessary
  bash

  chmod 700 ~/.gnupg
  chmod 600 ~/.gnupg/*
  gpg-connect-agent reloadagent /bye
  gpg --default-new-key-algo rsa4096 --gen-key

  signing_key=$(
    gpg --list-secret-keys --keyid-format long |
    grep ^sec |
    tail -1 |
    cut -f 2 -d "/" |
    cut -f 1 -d " "
  )

  git config --global commit.gpgsign true
  git config --global tag.forcesignannotated true
  git config --global user.signingkey "${signing_key}"

  gpg --armor --export "${signing_key}"
  #  Windows only
  # gpg --armor --export "${signing_key}" | clip.exe
  # explorer.exe https://github.com/settings/gpg/new

  # close the open session
  exit
  ```

  VS Code settings - _if you prefer to commit from VS Code_

  ```json
  {
    "git.enableCommitSigning": true
  }
  ```
</details>

<details>
  <summary>Setting up VS Code</summary>

  [More about setup]

  ```bash
  code --install-extension ms-vscode-remote.remote-containers
  # Windows only
  # code --install-extension ms-vscode-remote.remote-wsl
  # code --remote wsl+Ubuntu
  ```
</details>

[.devcontainer folder]: ../.devcontainer
[devcontainers]: ../.devcontainer/README.md#vs-code-devcontainer
[here]: https://github.com/nandordudas/monorepo-starter/generate
[More about setup]: https://gist.github.com/nandordudas/a80971a3cf4a4563a26bc9aa3cfc8c00
