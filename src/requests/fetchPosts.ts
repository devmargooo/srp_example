import { notify } from "./helpers/notify";

export type TPost = {
    id: number;
    title: string;
}

const SERVER_IS_TEAPOT = "сервер с нами не разговаривает";

export function fetchPosts(): Promise<TPost[]> {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error(SERVER_IS_TEAPOT);
        })
        .catch((e) => {
            throw new Error(SERVER_IS_TEAPOT);
        })
}
