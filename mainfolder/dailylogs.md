# Dailylogs for My DevOps Journey.

## 2024

### 14th September:
1. Installed Oracle Virtual Machine on local server.
    ```md
        1. Download and Install VirtualBox:
        - Install the VirtualBox through this download page (https://www.virtualbox.org/wiki/Downloads)
        and download the appropriate version for your OS.
        - Follow the installation instructions to install VirtualBox on your machine.

        2. Download Latest Ubuntu ISO file:
        - Go to the Ubuntu download page (https://ubuntu.com/download/desktop) and
        download the Ubuntu LTS ISO file.

        3. Create a New Virtual Machine:
        - Open VirtualBox and click on "New" to create a new VM.
        Name the VM (e.g., "Ubuntu 22.04") and select "Linux" as the type and "Ubuntu
        (64-bit)" as the version.
        - Allocate memory (RAM) to the VM. A minimum of 2 GB (2048 MB) is recommended.
        - Create a virtual hard disk. Select "Create a virtual hard disk now" and click "Create".
        - Choose the hard disk file type (VDI is the default) and click "Next".
        - Select "Dynamically allocated" and click "Next".
        - Set the size of the virtual hard disk (20 GB is sufficient) and click "Create".
    ```
1. Install Ubuntu linux 24.04.1 on the VM.
    ```md
    - Select the newly created VM and click "Start".
    - When prompted to "Select start-up disk", click the folder icon and select the Ubuntu
    22.04 ISO file you downloaded earlier. Click "Start".
    - Follow the on-screen instructions to install Ubuntu. Choose your language,
    keyboard layout, and install updates and third-party software as needed.
    - When prompted, select "Erase disk and install Ubuntu" (this only affects the virtual
    disk, not your physical machine).
    - Follow the remaining prompts to complete the installation. Create a user account
    and set a password.
    ```
1. Fixed errors while installing the iso file in VM and while installing VM.

### 15th September:

1. Linux Commands
1. Installed Python (**Installation steps:**):
    ```bash
    sudo apt update && sudo apt upgrade
    sudo add-apt-repository ppa:deadsnakes/ppa -y
    sudo apt update
    sudo apt install python3.10
    python3.10 --version
    sudo apt install python3.10-dbg
    sudo apt install python3.10-venv  -y
    sudo apt install python3.10-distutils -y
    sudo apt install python3.10-lib2to3 -y
    sudo apt install python3.10-gdbm -y
    ```