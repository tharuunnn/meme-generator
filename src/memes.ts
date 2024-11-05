import { useEffect, useState} from "react";
import { memesApi } from "./api/memeApi";
import { Meme } from "./types";

function useGetMemesApi(){
  const [allMemes, setAllMemes] = useState<Meme[]>([]) ;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const memes = await memesApi();
        setAllMemes(memes)
      } catch (err) {
        setError("Failed to fetch memes");
        console.error(err);
      }finally{
        setLoading(false);
      }
    };
  
    fetchMemes();
  },[]);

  return {allMemes, loading, error};
}

export default useGetMemesApi;
