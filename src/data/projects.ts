export const projects = [
  {
    id: "2",
    title: "AI Chat App",
    shortDescription: "A scalabe fullstack app for communication with AI",
    description:
      "The app is able to communicate with AI, store messages in a database, and display them in a chat interface. Supports Docker compose, RabbitMQ for message queue, Cookies, and Gemini API for AI communication. The app is scalable and split into 3 different microservices. Uses Singleton and Visitor Design Patterns and able to Log system messages into console and log files.",
    techStack: [
      "Node.js",
      "Javascript",
      "MongoDB",
      "HTML",
      "CSS",
      "Docker",
      "RabbitMQ",
      "Gemini API",
    ],
    githubUrls: ["https://github.com/VladimirBondar23/ai-chat-app"],
    images: [
      "src/assets/SimpleChatApp-1.jpg",
      "src/assets/SimpleChatApp-2.jpg",
      "src/assets/SimpleChatApp-3.png",
    ],
  },
  {
    id: "3",
    title: "Restaurant Analytics App",
    shortDescription:
      "An app that helps restaurant owners understand licensing requirements",
    description:
      "A small end-to-end system that helps restaurant owners understand relevant licensing requirements based on business size, seating capacity, and features (e.g., uses gas, serves meat, delivery). It parses a subset of a PDF/Word source into structured rules, matches them to user input, and uses an LLM to generate a clear, prioritized report. If LLM is not able to provide answer, the report is still generated.",
    techStack: ["Python", "Javascript", "HTML", "CSS", "Gemini API"],
    githubUrls: ["https://github.com/VladimirBondar23/restaurant"],
    images: [
      "src/assets/Restaurant-1.png",
      "src/assets/Restaurant-2.png",
      "src/assets/Restaurant-3.png",
    ],
  },
  {
    id: "1",
    title: "Travel Agency",
    shortDescription: "A fullstack app for managing trips and visited places",
    description:
      "The app is able to add new trips and places (You need to know Art Institute API ids for this), edit notes and delete them. Supports pagination, caching for recently added ids, retrieval and storing data in a database. Has a perfect separation of concerns, separate services for frontend and backend and a clean code.",
    techStack: [
      "React.js",
      "Next.js",
      "FastAPI",
      "MySQL",
      "Tailwind CSS",
      "Docker",
    ],
    githubUrls: [
      "https://github.com/VladimirBondar23/BE-TravelCompany",
      "https://github.com/VladimirBondar23/FE-TravelCompany",
      "https://github.com/VladimirBondar23/Docker-compose-file-for-TravelCompany",
    ],
    images: [
      "src/assets/TravelAgency-1.png",
      "src/assets/TravelAgency-2.png",
      "src/assets/TravelAgency-3.png",
    ],
  },
  {
    id: "4",
    title: "Service Discovery Microservice",
    shortDescription:
      "Service Discovery Backend Service for realistic Cloud System",
    description:
      "In the real world, when a client approaches a website, he is not redirected to the website directly, but to the most available container of the website. As part of the Cloud System, Service Discovery Service is responsible for discovering and registering system services AND website containers in the system. It receives constant updates from Orchestrator Service and communicates with Load Balancer to update the list of available containers and check their statuses, so that the client is redirected to the most available container.",
    techStack: ["FastAPI", "Docker"],
    githubUrls: ["https://github.com/VladimirBondar23/SD_LB_microservices"],
    images: [
      "src/assets/lbsd-1.jpg",
      "src/assets/lbsd-2.png",
      "src/assets/lbsd-3.png",
    ],
  },
  
];