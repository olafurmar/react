import Axios from 'axios';
import { useState, useEffect } from "react";

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await Axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;