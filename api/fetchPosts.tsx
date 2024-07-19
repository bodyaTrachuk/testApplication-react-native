import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export const fetchPost = async (limit: number): Promise<Post[]> => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
  return response.data;
};
