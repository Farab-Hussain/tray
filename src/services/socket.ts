import { io } from 'socket.io-client';

const socket = io('http://localhost:5050'); // 👈 Change to your IP when testing on real device

export default socket; 