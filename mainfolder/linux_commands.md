# Introduction:

Linux is an open-source, Unix-like operating system kernel originally developed by Linus Torvalds in 1991. It has since evolved into a full-fledged operating system used worldwide on a wide range of devices, from servers and desktop computers to embedded systems and smartphones. Linux is renowned for its stability, security, and versatility.

# List of commands for lecture:

## Commands:

1. list:
    ```bash
    1. ls
    2. ls -ltr
    3. ls -lht
    4. ls -la
    ```

2. cd:
    ```bash
    1. cd dir/path/
    2. cd ../../
    ```

3. > > /> append a text in side a file:
    ```bash
    1. > > : append inside existing file
    2. > : replace entire content
    ```

4. echo
    ```bash
    echo "Hello!"
    ```

5. mkdir
    ```bash
    1. mkdir demo
    2. mkdir -p /a/b/c
    ```

6. touch
    ```bash
    touch demo1.py demo2.py
    ```

7. rm -rf/ rm/ rmdir
    ```bash
    1. rm -rf demo1.py demo2.py
    1. rm demo1.py
    1. rm -f demo1.py
    ```

8. clear
9. pwd

10. cp
    ```bash
    cp demo1.py(from destination) /destination/path(to destination)
    ```

11. mv    
    ```bash
    mv(can be used to change names of files and folders)
    ```

12. read commands: cat, less, head -n, tail -n , more
    ```bash
    1. cat demo.py
    2. less demo.py
    3. head -n10 demo.py
    4. tail -n10 demo.py
    5. more demo.py
    ```

13. grep
    ```bash
    1. ls | grep demo.py
    2. less demo.py | grep hello
    ```

14. find, whereis, whoami
    ```bash
    1. find Path/to/folder -name filename/foldername
    2. whereis demo.py
    3. whoami
    ```

15. chmod, chown, chgrp
    ```bash
    1. sudo chmod ugo+rwx filename
    2. sudo chmod 775 filename [421=rwx]
    3. sudo chgrp omkar(groupname) filename
    4. sudo chown omkar(username) filename
    ```

16. kill/View a process command: 
    ```bash
    ps -aux
    kill -9
    htop
    ```
    
17. view file/folder size command : 
    ```bash
    df -h /path/
    du -sh /path/
    ```

18. compress and extract files
    ```bash
    tar -cvzf, tar -xvzf, gzip, bzip, zip
    ```

19. view config of the system like ipaddress, network
    ```bash
    ifconfig
    ```
    
20. ssh:
    1. install ssh server and create ssh keys:
    ```
    sudo apt install openssh-server
    ssh-keygen -t rsa
    ssh-keygen -t rsa -b 4096
    ```

    2. Now copy the id_rsa.pub file to the remote host and append it to ~/.ssh/authorized_keys by running:
    ```
    ssh-copy-id username@remotehost
    ```

    3. To connect ot remote server on remote/same network:
    ```
    ssh servername@ipaddress
    ssh servername@ipaddress:/path/to/dir
    ```

    4. To connect to remote host without password, manual save the public key to .ssh/authorized_keys:
    ```
    ~/.ssh/id_rsa.pub
    nano ~/.ssh/authorized_keys
    ```
    paste the copied public key -> Ctrl+o ->enter(saved)

21. scp:
    1. loaclhost to remote server:
    ```bash
    # file
    scp /path/to/local/file username@remote_host:/path/to/remote/destination
    # folder
    scp -r /path/to/local/folder username@remote_host:/path/to/remote/destination
    ```

    1. from remote server to loaclhost:
    ```bash
    # file
    scp username@remote_host:/path/to/remote/destinationfile /path/to/local/destination
    # folder
    scp -r username@remote_host:/path/to/remote/destinationfolder /path/to/local/destination
    ```

22. wget:
    1. download a link through terminal:
    ```bash
    wget http://example.com/file.zip
    ```

    2. Download a File with a Different Name:
    ```bash
    wget -O newfilename.zip http://example.com/file.zip
    ```

    3. Download a List of URLs from a File:
    ```bash
    wget -i urls.txt
    ```

    4. Download an Entire Website (Recursive Download):
    ```bash
    wget -r http://example.com/
    ```

23. ping:
    ```
    ping www.google.com(url link)
    ```

24. psql: Enter into Postgresql shell
25. passwd: change current users password
26. shutdown ad reboot
27. history, date, hostname
28. sudo: enter administrator/ superuser mode.
    ```bash
    sudo su
    sudo -i
    sudo -s
    ```

29. useradd, userdel, usermod:
    1. useradd:
        1. Create a new user:
        ```bash
         sudo useradd john
        ```
        2. Create a user with a home directory:
        ```bash
        sudo useradd -m john
        ```
        3. Create a user with a custom home directory:
        ```bash
        sudo useradd -m -d /home/custom_dir john
        ```
        4. Create a user with a specific user ID and group ID:
        ```bash
        sudo useradd -u 1050 -g 1001 john
        ```

    2. userdel:
        1. delete a user from the system
        ```bash
        sudo userdel john
        ```
        1. delete a user with their home directory from the system
        ```bash
        sudo userdel -r john
        ```

    3. usermod
        1. Change the user's home directory: Use the -d
        ```bash
        sudo usermod -d /new/home/directory -m john
        ```
        2. Add the user to a group: Use the -aG
        ```bash
        sudo usermod -aG sudo john
        ```
        3. Change the username: Use the -l
        ```bash
        sudo usermod -l newusername john
        ```

30. groupadd, groupdel, groupmod:
    1. groupadd:
        1. Create a new group:
        ```bash
        sudo groupadd developers
        ```
        1. Create a group with a specific Group ID (GID): 
        ```bash
        sudo groupadd -g 1050 developers
        ```
        1. Create a system group:
        ```bash
        sudo groupadd -r sysadmins
        ```
    
    2. groupmod:
        1. Change the group name: 
        ```bash
        sudo groupmod -n newgroupname oldgroupname
        ```
        1. Change the Group ID (GID):
        ```bash
        sudo groupmod -g 1051 developers
        ```
    
    3. groupdel:
        1. delete group
        ```bash
        sudo groupdel developers
        ```

31. crontab:
32. curl:
    #### 1. making HTTP requests, downloading files, or interacting with APIs.
    ```bash
    curl http://example.com
    curl -O http://example.com/file.zip #download a file
    curl http://example.com -o output.html # save as output
    curl -H "Content-Type: application/json" -d '{"key1":"value1", "key2":"value2"}' http://example.com/api # send POST request
    curl -X DELETE http://example.com/resource # sepecify request
    ```

33. tree, wc, help, man, info, command
    1. tree:
    ```bash
    tree                    # Display the directory structure of the current directory
    tree /path/to/directory  # Display the structure of a specific directory
    tree -L 2               # Limit the depth to 2 levels
    tree -d                 # Show only directories
    tree -f                 # Show the full path of files
    tree -P "*.txt"         # Show only files matching the pattern (*.txt)
    ```

    2. wc:
    ```bash
    wc file.txt              # Show line, word, and byte counts for file.txt
    wc -l file.txt           # Count only the lines in file.txt
    wc -w file.txt           # Count only the words in file.txt
    wc -c file.txt           # Count only the bytes in file.txt
    cat file.txt | wc -l     # Pipe output from cat to count lines in file.txt
    ```

    3. help:
    ```bash
    help                     # List all shell built-in commands with descriptions
    help cd                  # Show help for the `cd` built-in command
    help export              # Get help for the `export` command
    help if                  # Display help for `if` conditional statement
    ```

    4. man:
    ```bash
    man ls                   # Show the manual page for the `ls` command
    man bash                 # Show the manual for the Bash shell
    man -k network           # Search for all manual pages related to 'network'
    man 5 passwd             # Show section 5 of the manual for `passwd` file format
    ```

    5. info:
    ```bash
    info ls                  # Open the info page for the `ls` command
    info bash                # Show the info page for Bash shell
    info coreutils           # Display the info page for GNU Core Utilities
    info info                # Learn how to use the `info` command itself
    ```

    6. command
    ```bash
    command ls               # Run the external `ls` command, bypassing any shell function named `ls`
    command -v ls            # Check if `ls` is a valid command or function
    command -p ls            # Search for the command `ls` only in standard system paths
    command -V ls            # Display detailed information about `ls` (whether it is a shell function or external command)
    ```


34. ln [hardlink and softlink]
35. nano, vim, emacs
36. firewall
37. softlink and hardlink
38. disk partition
39. swap
40. ACL (Access Control List) advance file permission for specific user
41. Shell Scripting
