const { FilesystemServer } = require('@modelcontextprotocol/server-filesystem');

// Create a new filesystem server instance
const server = new FilesystemServer({
  // Configure your options here
  rootDir: './data',
  allowedOperations: ['read', 'write', 'delete', 'list'],
});

// Start the server
async function startServer() {
  try {
    await server.start();
    console.log('Server started successfully');
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();
