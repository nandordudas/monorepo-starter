# 🪛 Monorepo starter

> tl;dr - _it's a boilerplate for starting Node.js projects for nerds_

It's recommended to use Docker, VS Code and related extensions for - read more about [devcontainers].

## Does it work without Docker and Devcontainer?

Of course, these are only recommended tools. You have to comply with the Devcontainer configurations, which you can find in the [.devcontainer folder].

### Installation

1. Click to `Use this template` dropdown right above and select `Create a new repository` item.
2. One click [here].

**Recommended**

```bash
cd ~/Code/GitHub/...
npx degit https://github.com/nandordudas/monorepo-starter
code -n monorepo-starter
```

Open folder in Devcontainer, do some setup and enjoy.

```bash
git init -b main
git commit -m "chore: initial commit"
# set the remote origin if it doesn't exist
# git remote add origin https://github.com/...
npx bumpp major --files */**/package.json --no-{commit,push,tag}
npx bumpp premajor --preid alpha --yes
```

---

## Shortcuts

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
    // check if it is turned on
    "git.enableCommitSigning": true
  }
  ```
</details>

<details>
  <summary>Setting up VS Code</summary>

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
