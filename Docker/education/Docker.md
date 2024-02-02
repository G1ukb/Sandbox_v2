<h1>Docker</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

* How docker reacts on changes in dockerfile / image / source code?
* How do you run a Docker container from a Docker image?
* What is Docker Hub and how is it used?
* How do you push a Docker image to Docker Hub?
* What is a Docker volume and what is it used for?
* How do you use Docker Compose to manage multi-container applications?
* How do you stop and remove Docker containers?
* What is the purpose of the docker run command and how is it used?
* How do you list all running Docker containers?
* What is the purpose of Docker networking and how do you use it?
* How do you share data between a Docker container and the host?
* How do you update a Docker image with new changes?
* What is the difference between Docker Swarm and Kubernetes?
* How do you debug a running Docker container?

[//]: # (What is Docker and what is it used for?)
<br>
<details>
    <summary>
        <b><big><big><big>
            What is Docker and what is it used for?
        </big></big></big></b>
    </summary>

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
    <summary>
        <b><big><big><big>
            What are some disadvantages of using Docker?
        </big></big></big></b>
    </summary>

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
    <summary>
        <b><big><big><big>
            What docker alternatives you know?
        </big></big></big></b>
    </summary>

Podman // Containerd // Rancher

</details>

[//]: # (Main docker container backup 
        and recover strategies?)
<br>
<details>
    <summary>
        <b><big><big><big>
            Main docker container backup 
            and recover strategies?
        </big></big></big></b>
    </summary>

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
    <summary>
        <b><big><big><big>
            Why docker is better then EC2 
            or hosted envs or virtual envs?
        </big></big></big></b>
    </summary>

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
    <summary>
        <b><big><big><big>
            What is a Docker image and 
            how does it differ from a Docker container?
        </big></big></big></b>
    </summary>

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
    <summary>
        <b><big><big><big>
            What is Dockerfile?
        </big></big></big></b>
    </summary>

A Dockerfile is a text document that contains all 
the commands a user could call on the command 
line to assemble an image

</details>

[//]: # (What is Docker Layers?)
<br>
<details>
    <summary>
        <b><big><big><big>
            What is Docker Layers?
        </big></big></big></b>
    </summary>

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

