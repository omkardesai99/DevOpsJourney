# documentation for docker running basic experss app on docker

## Give sudo permission to docker first
```bash
sudo groupadd docker
sudo usermod -aG docker $USER
sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
sudo chmod g+rwx "$HOME/.docker" -R
```


1. create a working dir and install npm:
```bash
    mkdir express_app && cd express_app
    npm install
```

2. create a packege.json file through npm and install express
```bash
    npm init -y
    npm install express
```

3. create a file for express project
```bash
   touch index.js
```

4. make this demo project
```python
const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

```

5. run the project locally to check if its working
```bash
    npm start
```

6. For docker container create a Dockerfile
```bash
    touch Dockerfile
```

7. write docker file to create a docker image of this express app project:
# Here we move the express app and all package json files to docker container
```docker
# Use the official Node.js image as a base
FROM node:16

# Create and set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]

```

8. Give access to 3001 port in AWS --> in security --> in security groups --> in Edit inbound rules --> Add rule --> add port 3001 to see the output of apis on webserver

9. Create a docker image and run docker container but by exposing its port to the web to connect the the system and container port.
```bash
    docker build -t express_app .
    docker run -p 3001:3001 express_app
```
