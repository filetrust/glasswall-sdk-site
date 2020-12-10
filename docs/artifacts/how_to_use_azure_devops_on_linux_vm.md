---
title: Steps to use Azure DevOps on Linux Virtual Machine
---

Note: You may have to skip §1 if this process does not work, and do §2 only.

## 1 Login to your Linux Virtual Machine.

### 1.1 Setup global Git configuration

Open a terminal session and type the commands:

    git config --global http.proxy 10.10.105.118:8888
    git config --global http.sslVerify false

### 1.2 Change System Settings

Go to **System Preferences** > **Internet and Network** > **Network Proxy**.<br />
Select **Manual Proxy Configuration** and type `10.10.105.118` with port:8888.

## 2 Clone the Repository

Go to Azure DevOps and go to the repository you want to clone.

2.1  Select the ellipsis (...) beside the repository name and select **clone**.<br />
2.2  Click on **Generate Git Credentials** and save the generated credentials.<br />
2.3  Go back to the VM and choose the desired folder into which you want to clone the repository,  secondary click and select **Open in Terminal**.<br />
2.4  In the terminal that opens type this (replace <...> with the content described):

    git config --global user.name <your username generated from step 2.2><br />
    git config --global user.email <your Glasswall email><br />
    git clone <repo https which you can copy from clone option><br />
2.7  You will be prompted for a password. Enter the password generated from step 2b.

The repository should be cloned to your VM.
