import {useEffect, useState} from "react";
import {fetchPosts, TPost} from "../requests/fetchPosts";
import {notify} from "../requests/helpers/notify";

interface IPostProps {
    icon:React.FC<{fill:string}>
}

export const Posts:React.FC = () => {
    const [posts, setPosts] = useState<TPost[]>([]);
    useEffect(() => {
        fetchPosts().then(setPosts)
    }, []);
    if (!posts) {
        return <p>"Loading..."</p>;
    }
    return (
        <ul>
            { posts.map((item) => ( <li key={item.id}>{item.title}</li> )) }
        </ul>
    )
}

export const Alert:React.FC = () => {
    useEffect(() => {
        fetchPosts().then((posts) => notify(posts.toString()))
    }, []);
    return null;
}
