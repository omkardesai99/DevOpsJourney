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
20. ssh
22. scp
23. wget
24. ping
25. psql
26. passwd
27. shutdown ad reboot
28. history, date, hostname
29. sudo
30. useradd, userdel, usermod
31. groupadd, groupdel, groupmod
32. crontab
33. curl
34. tree, wc, help, man, info, command
35. ln [hardlink and softlink]
36. nano, vim, emacs
37. firewall
38. softlink and hardlink
39. disk partition
40. swap
41. ACL (Access Control List) advance file permission for specific user
42. Shell Scripting