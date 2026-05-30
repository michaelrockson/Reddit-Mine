# Reddit Painpoint Agent

A full-stack application for discovering, validating and tracking recurring software-solvable pain points from Reddit.

The backend collects Reddit discussions, performs sentiment analysis, validates opportunities using Gemini and generates structured problem briefs. The frontend provides the user interface for authentication, dashboards, pipeline management and reviewing generated opportunities.

Results can be persisted to a database and optionally exported to services such as Notion.

---

# Getting Started

These instructions will give you a copy of the project up and running on your local machine for development purposes.

# Prerequisites

Requirements for the software and other tools to build and run the project:

* Python 3.11+ (Backend)
* Node.js 18+ and npm (Frontend)
* Reddit Developer Application (Client ID and Secret)
* Gemini API Key
* Infisical Project (recommended)
* Email Credentials

Optional:

* Notion Integration

# Installing

Clone the repository:

```bash
git clone https://github.com/michaelrockson/Reddit-Painpoint-Agent.git
cd Reddit-Painpoint-Agent
```

The project consists of two primary components:

* **Agent_Backend** – Reddit ingestion, sentiment analysis, AI curation and data persistence.
* **Agent_Frontend** – User interface for authentication, dashboards and agent management.

For detailed setup instructions, refer to the component READMEs:

### Backend

```text
Agent_Backend/README.md
```

### Frontend

```text
Agent_Frontend/README.md
```

Each README contains installation, configuration, development and operational instructions specific to that component.

# Built With

* FastAPI (expected)
* SQLAlchemy
* PRAW (Reddit API)
* Google Gemini
* Infisical
* React
* TypeScript
* Vite
* APScheduler

# Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

**Versioning**

We use Semantic Versioning for versioning. For the versions available, see the tags on this repository.

# Authors

* **Michael Coffie Rockson** - Project Owner and Lead Developer

# Acknowledgments

* Reddit API ecosystem
* Google Gemini
* Open-source Python and React communities
* Inspiration from AI Agentic Workflows and Agents
