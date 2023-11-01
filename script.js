const flashcards = [
  {
    term: "AmazonMQ",
    definition:
      "AmazonMQ is a wrapped version of ActiveMQ, that we use in the cloud. It is a managed service provided by AWS. This means that AWS takes care of all the underlying infrastructure and operational tasks.",
  },
  {
    term: "CloudWatch",
    definition:
      "A monitoring service provided by AWS. It allows us to collect, store and analyse a large amount of data related to the performance and health of our AWS resources. It provides us with useful metrics that we can use to monitor and troubleshoot our resources.",
  },
  {
    term: "Cloud9",
    definition:
      "A cloud-based Integrated Development Environment (IDE) provided by AWS. It is a browser based environment for writing, running and debugging code. We primarily use Cloud9 for 'curling' endpoints using the terminal. We do this to check if an endpoint is connected to the public internet.",
  },
  {
    term: "DataDog",
    definition:
      "A cloud monitoring and analytics platform that we use to monitor our data. We use DataDog closely with CloudWatch and we are able to pull in CloudWatch metrics and logs and display them in clear dashboards.",
  },
  {
    term: "ECR",
    definition:
      "Elastic Container Registry. A fully managed container registry which makes it easier for us to store, manager and deploy Docker container images. ECR allows us to control who can access and modify container images using IAM.",
  },
  {
    term: "ECS",
    definition:
      "Elastic Container Service. A fully managed container orchestration service we use to simplify the deployment and management of our containerised applications. ",
  },
  {
    term: "EC2",
    definition:
      "Elastic Compute Cloud. This is a service provided by AWS that allows us to rent Virtual Machines (VMs) known as instances. ",
  },
  {
    term: "EKS",
    definition:
      "Elastic Kubernetes Service. This is a managed orchestration service, similar to Fargate. It allows us to run Kubernetes clusters on AWS. This simplifies the management of Kubernetes clusters. EKS is managed by us, this makes it more complicated but means we have more control. Fargate is managed by AWS making it more simple, but less control as we don’t manage any of the actual hardware or virtual machines.",
  },
  {
    term: "Fargate",
    definition:
      "A service provided by AWS that we use to run our applications in the containers we have created. Fargate is a serverless orchestration service. It abstracts the EC2 instances that are underlying and allows us to run containers without having to manage the virtual machines that they run on. Instead, we specify the CPU and memory that the containers need, and AWS essentially looks after the scaling of the infrastructure for us.",
  },
  {
    term: "Infrastructure",
    definition:
      "The foundational hardware and software components necessary to support the operations of computer systems, networks and applications. It’s the underlying framework that allows our software and services to run effectively and reliably.",
  },
  {
    term: "ECS",
    definition:
      "The foundational hardware and software components necessary to support the operations of computer systems, networks and applications. It’s the underlying framework that allows our software and services to run effectively and reliably",
  },
  {
    term: "Internet Gateway",
    definition:
      "An important component that facilitates communication between resources within our Virtual Private Cloud (VPC) and the public internet. It enables resources within our VPC to access the internet and be accessed from the internet, this acts as a gateway for inbound and outbound traffic. ",
  },
  {
    term: "Kubernetes",
    definition:
      "An open-source container platform. It runs on a cluster of machines, which differs from docker which runs on a single machine. Kubernetes is used to organise containers into clusters that work together to run containerised applications. These clusters consist of master nodes that control the cluster and worker nodes that run containers.",
  },
  {
    term: "Load Balancer",
    definition:
      "A device that distributes network or application traffic across a number of servers. They are used to increase capacity and reliability of applications.",
  },
  {
    term: "NAT Gateway",
    definition:
      "Network Address Translation Gateway. A managed network service that allows our resources in a private subnet to have outbound connections to the internet while preventing inbound traffic from the internet. These gateways provide a way for resources in a private subnet to access services on the internet without exposing their private IP addresses.",
  },
  {
    term: "Private Subnet",
    definition:
      "A subnet (logical subdivision of an IP network) that is not directly accessible from the internet. These are used to host our resources that we do not want to be exposed to the internet. Private subnets are good for reducing risk to potential threats from the internet by offering enhances security.",
  },
  {
    term: "Public Subnet",
    definition:
      "A subnet (logical subdivision of an IP network) that is configured to have direct access to the public internet. This means that resources inside these subnets can send and receive network traffic to and from the internet. This allows external users of services to access these resources over the internet.",
  },
  {
    term: "Route Table",
    definition:
      "A networking component that is used to determine how data packets should be routed from their source to their destination. The route table contains a list of routing rules. Each entry defines a specific destination network or IP address range that represents the destination of the packets",
  },
  {
    term: "Secrets Manager",
    definition:
      "A managed service provided by AWS that enables us to securely store and retrieve sensitive information. We currently use Secrets Manager to store the *** credentials, the Admin credentials, and the DataDog API key.",
  },
  {
    term: "Subnet",
    definition:
      "Short for Subnetwork. It is a logical subdivision of an IP network. Subnetting is used to divide a large network into smaller, more manageable segments. Having multiple subnets helps with organising traffic. We are able to route traffic between subnets using a load balancer. This makes it easier to manage how devices communicate with each other.",
  },
  {
    term: "S3 Bucket",
    definition:
      "Stands for Simple Storage Service. It provides scalable and durable cloud-based storage.  It is designed for storing and retrieving large amounts of data.",
  },
  {
    term: "Terraform",
    definition:
      "An Infrastructure as Code (IaC) tool that enables us to define cloud infrastructure resources and configurations in code. It can be used to create, update and manage AWS resources like virtual machines, storage, databases and networking components. We use terraform to declare infrastructure in files that end in .tf. This means it is very easy to destroy and re-run the instrastructure when we need, automating the process and leaving less room for manual errors.",
  },
  {
    term: "Virtual Machine",
    definition:
      "A software-based emulation of a physical computer. It allows you to run multiple operating systems and applications on a single machine. We use EC2 instances. Which are a specific type of Virtual Machine provided by AWS.",
  },
  {
    term: "VPC",
    definition:
      "Virtual Private Cloud. This is a network virtualisation service that is offered by AWS. It allows us to create an isolated network environment within a public cloud infrastructure. Within our VPC, we have created multiple Subnets. The VPC ensures that our resources are away from other users. We use a route table to determine how the network traffic is directed within the VPC.",
  },
  {
    term: "Wiz",
    definition:
      "Wiz is a cloud security platform that we use to help minimise risk. It involves vulnerability detection that we use to scan our cloud configurations to identify vulnerabilities and risks. ",
  },
  {
    term: "ECS",
    definition: "",
  },
  {
    term: "ECS",
    definition: "",
  },
];

const termElement = document.getElementById("term");
const definitionElement = document.getElementById("definition");
const showDefinitionBtn = document.getElementById("show-definition-button");
const nextCardBtn = document.getElementById("next-card-button");
const randomOrderCheckbox = document.getElementById("random-order-checkbox");
const flashcard = document.querySelector(".flashcard");
const backButton = document.getElementById("back-button");

let currentCardIndex = 0;
let shuffledIndices = [...Array(flashcards.length).keys()]; // Create an array of indices to shuffle
let isRandomOrder = false;

showFront();

showDefinitionBtn.addEventListener("click", showBack);
nextCardBtn.addEventListener("click", nextCard);
randomOrderCheckbox.addEventListener("change", toggleRandomOrder);
backButton.addEventListener("click", goBack);

function showFront() {
  flashcard.style.transform = "rotateY(0deg)";
  termElement.textContent = flashcards[shuffledIndices[currentCardIndex]].term;
}

function showBack() {
  flashcard.style.transform = "rotateY(180deg)";
  definitionElement.textContent =
    flashcards[shuffledIndices[currentCardIndex]].definition;
}

function nextCard() {
  currentCardIndex++;
  if (currentCardIndex >= flashcards.length) {
    currentCardIndex = 0;
  }
  showFront();
}

function toggleRandomOrder() {
  isRandomOrder = randomOrderCheckbox.checked;
  randomOrderCheckbox.disabled = true;
  if (isRandomOrder) {
    shuffledIndices = shuffleArray([...Array(flashcards.length).keys()]);
  } else {
    shuffledIndices = [...Array(flashcards.length).keys()];
  }

  currentCardIndex = 0;
  showFront();

  setTimeout(() => {
    randomOrderCheckbox.disabled = false;
  }, 500);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
