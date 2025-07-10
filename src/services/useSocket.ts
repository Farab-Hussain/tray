import { useEffect } from 'react';
import socket from './socket';

const useSocket = () => {
  useEffect(() => {
    // Optionally connect/disconnect logic can go here
    return () => {
      // Optionally disconnect on unmount
      // socket.disconnect();
    };
  }, []);
  return socket;
};

export default useSocket; 