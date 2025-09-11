import io from 'socket.io-client';

let socket = null;

export const connectWebSocket = (onDetection, onDisconnect, onConnecting) => {
  onConnecting();
  
  // Connect to the backend server (use the specific IP your backend is running on)
  socket = io('http://172.25.228.175:5000', {
    transports: ['websocket', 'polling'],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
  });
  
  socket.on('connect', () => {
    console.log('Connected to backend server');
  });
  
  socket.on('new_detection', (data) => {
    console.log('Received detection:', data);
    onDetection(data);
  });
  
  socket.on('disconnect', () => {
    console.log('Disconnected from server');
    onDisconnect();
  });
  
  socket.on('connect_error', (error) => {
    console.error('Connection error:', error);
    onDisconnect();
  });
  
  return socket;
};

export const disconnectWebSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const getSocket = () => {
  return socket;
};