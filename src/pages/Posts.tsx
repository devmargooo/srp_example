import {useEffect} from "react";
import {fetchPosts} from "../requests/fetchPosts";

export const Posts:React.FC = () => {
    useEffect(fetchPosts, []);
    return null;
}
