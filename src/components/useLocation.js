import { useLocation as useReactRouterLocation } from 'react-router-dom';

// Custom hook to use the location from react-router-dom
const useLocation = () => useReactRouterLocation();

export default useLocation;
