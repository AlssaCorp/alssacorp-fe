# Alssacorp FE

Welcome to Alssacorp FE

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Running the Server](#running-the-server)
- [License](#license)

## Getting Started

### Prerequisites

Ensure you have the following tools installed on your machine:

- [Node v20.10.0](https://nodejs.org/en/blog/release/v20.10.0)
- [Docker](https://hub.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation (For Local Development Only)

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/AlssaCorp/alssacorp-fe.git
    cd alssacorp-fe
    ```

2.  **Install pnpm globally:**

    ```bash
    npm install -g pnpm
    ```

3.  **Install dependencies:**

    ```bash
    pnpm i
    ```

### Configuration (Important)

1. **Setup .env based on .env.example:**

   ```bash
   // .env
   ENV=
   NEXT_PUBLIC_API_BACKEND_URL=
   ```

## Usage

### Running the Server Locally

```bash
pnpm run dev
```

### Running the Server via Docker
```bash
docker-compose up -d --build
```

## License

This project is licensed under the [MIT License](LICENSE). 
