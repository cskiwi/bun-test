const { exec } = require('child_process');
const fs = require('fs');

// Function to run a shell command
function runCommand(command) {
  return new Promise((resolve, reject) => {
    const process = exec(command);

    process.stdout.on('data', (data) => {
      console.log(data);
    });

    process.stderr.on('data', (data) => {
      console.error(data);
    });

    process.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(`Command failed with code ${code}`);
      }
    });
  });
}

// Function to wait for the server to be ready
function waitForServer(port) {
  return new Promise((resolve) => {
    const interval = setInterval(async () => {
      try {
        console.log('Checking server status...');
        const response = await fetch(`http://localhost:${port}/api/routes`);
        if (response.ok) {
          clearInterval(interval);
          resolve();
        }
      } catch (error) {
        // Server is not ready yet
      }
    }, 1000);
  });
}

// Function to make a GET request and save the response to a file
async function getAndSaveRoutes(port, filePath) {
  try {
    const response = await fetch(`http://localhost:${port}/api/routes`);
    if (!response.ok) {
      throw new Error(`Failed to fetch routes: ${response.statusText}`);
    }
    const data = await response.text();
    fs.writeFileSync(filePath, data);
  } catch (error) {
    throw new Error(`GET request failed: ${error}`);
  }
}

// Main function to run the tasks
async function main() {
  const port = process.env.PORT || 3000;
  if (!port) {
    console.error('Environment variable PORT is not set');
    process.exit(1);
  }

  try {
    console.log('Starting server...');
    runCommand('nx serve api');

    console.log(`Waiting for server to be ready on port ${port}...`);
    await waitForServer(port);

    console.log('Server is ready. Fetching routes...');
    await getAndSaveRoutes(port, 'routes.txt');

    console.log('Routes saved to routes.txt');

    console.log('Building app...');
    await runCommand('nx build app');

    console.log('App build completed');

    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
}

main();
