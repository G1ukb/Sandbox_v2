<h1>Docker</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (What is Docker and what is it used for?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is Docker and what is it used for?
        </b>
    </summary>
<br>

The main idea behind Docker is to create
independent and isolated lightweight and fast
environments.

**Isolation:** Docker allows users to create
isolated environments, called containers,
to launch and deploy applications

**Portability** This means
you can launch your container on any system.

**Efficiency:** Docker is lightweight and fast.
It shares the resources of the host machine
to run its environments.

**Development Lifecycle:**
It’s great for continuous integration and continuous
delivery (CI/CD) workflows.

**Deployment:** Docker makes it easier to
deploy your project on your server in order to put it online.
Docker makes it easier to deploy your project on your server
in order to put it online1.

</details>

[//]: # (What are some disadvantages of using Docker?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are some disadvantages of using Docker?
        </b>
    </summary>
<br>

While Docker has many advantages,
it also has some limitations. Here are a few:

- **Complexity of knowledge and integration:**
  can be a problem for who are new to Docker

- **Framework Dependency.**
    - **Missing Features:** Docker is still under active
      development, and there are many feature requests in progress.
    - **You can't switch quickly** to another framework
      in case if you need additional features.

- **Data Persistence:** If a container goes down,
  it needs a backup and recovery strategy.

- **Performance**: Docker containers are smaller
  and require fewer resources than a virtual machine.
  However, Docker by itself will use as much system resources
  as the system will allow.

- **Security:** While Docker containers are isolated,
  all containers share access to a single host operating system.
  This means that if a container is compromised,
  there’s a risk that the malicious code could gain
  access to the host system.

</details>

[//]: # (What docker alternatives you know?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What docker alternatives you know?
        </b>
    </summary>
<br>

Podman // Containerd // Rancher

</details>

[//]: # (Main docker container backup 
        and recover strategies?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Main docker container backup 
            and recover strategies?
        </b>
    </summary>
<br>

- **Committing Containers to an Image:**
  // docker container commit // command
  to store container filesystem changes
  and some of the container’s configuration
- Backing Up Volumes Separately
- Pushing Images
- Saving Images to a Local Tar File
- Re-creating Containers from Docker hub and Local tar

</details>

[//]: # (Why docker is better then EC2 
        or hosted envs or virtual envs?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Why docker is better then EC2 
            or hosted envs or virtual envs?
        </b>
    </summary>
<br>

- Docker is a part of machine that uses reserved resources
  (in that concept on one ec2 can be stored lots of containers)

- Containers are lightweight piece of software
  that contains all parts to run application

- Docker containers are less resource-intensive
  than virtual machines.

- Docker containers are portable and provide
  an environment throughout the software
  development life cycle of the application.

</details>

[//]: # (What is a Docker image and 
        how does it differ from a Docker container?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is a Docker image and 
            how does it differ from a Docker container?
        </b>
    </summary>
<br>

**Docker Image:**

- A Docker image is an immutable (unchangeable) file
  that contains the source code, libraries, dependencies,
  tools, and other files needed for an application to run.
- Docker images are sometimes referred to as snapshots.
- When you change the initial state of an image
  and save the existing state, you create a new template
  with an additional layer on top of it.

Docker Container:

- A Docker container is a virtualized run-time environment
  where users can isolate applications from the
  underlying system.
- A container is a running instance of an image.

</details>

[//]: # (What is Dockerfile?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is Dockerfile?
        </b>
    </summary>
<br>

A Dockerfile is a text document that contains all
the commands a user could call on the command
line to assemble an image

</details>

[//]: # (What is Docker Layers?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is Docker Layers?
        </b>
    </summary>
<br>

Docker uses the concept of “layers” to build images.
Each layer is a set of changes that have
been made to the file system.
When you create a Dockerfile and run it,
each command in the Dockerfile creates a new layer.

These layers are stacked on top of each other
to create the final Docker image.
If you make changes to the Dockerfile,
Docker will rebuild only the changed layer
and all layers after it. This is called layer caching.

</details>

[//]: # (How docker reacts on changes in dockerfile / image / source code?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How docker reacts on changes in dockerfile / image / source code?
        </b>
    </summary>
<br>

- **Dockerfile:** When you make changes to a Dockerfile and then run docker build,
  Docker starts building a new Docker image according to the instructions
  in the Dockerfile.

Docker uses a layered cache system, so if you change a line in your Dockerfile,
all layers defined after that line will be built again.
This is because the change might affect subsequent layers.

- **Image**: If you pull a new version of an image from a Docker registry
  (like Docker Hub), any containers that you start with docker run after that
  will use the new image.

However, any containers that were already running before you pulled
the new image will continue to use the old image they were started with,
unless you explicitly stop and remove the old container and start a new one.

- **Source Code:** Docker itself does not automatically react to changes
  in your source code.
  If you change your source code, you need to rebuild your Docker image
  (if your source code is part of the image) and restart your container to see the changes.

However, during development, you can use Docker volumes to map a directory
in your local file system (where your source code resides)
to a directory in the Docker container.

This way, changes to your local source code will immediately be reflected
inside the container.

</details>

[//]: # (Docker container's lifecycle?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Docker container's lifecycle?
        </b>
    </summary>
<br>

The lifecycle of a Docker container consists of several stages:

1. **Create**. docker creates command or the docker run
2. **Start**. docker start command is used to start a created container.
3. **Running**. After the container is started, it’s in the running state.
4. **Stop**. The docker stop command is used to stop a running container.
    1. sends a **SIGTERM** signal to the main process to shut down cleanly
    2. If the process doesn’t stop after the period,
       Docker sends a **SIGKILL** terminate it
5. **Restart**. The docker restart command stops and then starts a container again.
   (useful for applying new settings or recovering from issues)
6. **Pause/Unpause**: The docker pause command pauses a running container,
   freezing all its processes.
   (useful for troubleshooting or system resource management)
7. **Remove**. remove a stopped container

</details>

[//]: # (Docker volumes? Definition / Creation / Usage / Volume Drivers)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Docker volumes? Definition / Creation / Usage / Volume Drivers
        </b>
    </summary>
<br>

The lifecycle of a Docker container consists of several stages:

Docker volumes are directory on the host machine that is controlled
by Docker container.
With the help of volumes, containers can backup, Restore, or Migrate Data

Creation - docker volume create

Usage: you can use the -v or --mount flag
to attach a volume to the container

Volumes can be shared and reused among containers.
They are a good way to share data between containers and the host.

Volume Drivers: Docker has a concept of volume drivers,
which allow volumes to be hosted on remote hosts or cloud providers.

</details>

[//]: # (What is Docker Compose? 
        And how do you use Docker Compose to manage multi-container applications?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is Docker Compose? 
            And how do you use Docker Compose to manage multi-container applications?
        </b>
    </summary>
<br>

Docker Compose is a tool for defining and running multi-container Docker applications.
With Compose, you use a YAML file to configure your application’s services.

</details>

[//]: # (What is the most popular commands in docker?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the most popular commands in docker?
        </b>
    </summary>
<br>

- **docker run:** create and start a container from an image.
- **docker ps:** list the running containers.
- **docker stop**
- **docker rm**
- **docker images** lists the images.
- **docker rmi** removes one or more images.
- **docker pull** pulls an image
- **docker build**
- **docker login** logs in to a Docker registry.
- **docker network create**
- **docker volume create**

</details>

[//]: # (What is Docker registry?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is Docker registry?
        </b>
    </summary>
<br>

A Docker registry is a storage and distribution system for named Docker images.
It’s where you push images for storage and
pull them down when you need to run containers.

Like git for code

</details>

[//]: # (What is the purpose of Docker networking and how do you use it?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the purpose of Docker networking and how do you use it?
        </b>
    </summary>
<br>

**Docker networking** enables containers to connect to each other
and to non-Docker workloads.

It’s a crucial aspect of Docker as it allows for the communication
and data sharing between multiple systems

</details>

[//]: # (What are the steps to connect Docker container to network?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the steps to connect Docker container to network?
        </b>
    </summary>
<br>

1. **Create a Network:**
    -     docker network create
2. Run/Connect running container in the Network
    -     docker run --network=
    -     docker network connect
3. Inspect a Network to find details
    -     docker network inspect

</details>

[//]: # (Docker Swarm vs Kubernetes?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Docker Swarm vs Kubernetes?
        </b>
    </summary>
<br>

Docker Swarm is a good choice for simpler applications 
that are quick to deploy and easy to manage.
- Docker Swarm is easier to install and configure
- Docker Swarm is known for its simplicity. 
In case if you’re already known with Docker commands.

Kubernetes is better suited for complex, high-demand applications
- Scalability features
- Kubernetes has a larger community

</details>

[//]: # (How do you debug a running Docker container?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How do you debug a running Docker container?
        </b>
    </summary>
<br>

* Docker Logs
* Docker Exec to execute commands like "container /bin/bash"
* Docker Exec to get detailed information about your container
* Debugging Tools like an IntelliJ docker extension

</details>

