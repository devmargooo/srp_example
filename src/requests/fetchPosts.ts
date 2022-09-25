import { notify } from "./helpers/notify";

export function fetchPosts(): void {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            notify("Error :(");
        })
        .then((result: Object[] | undefined) => {
            if (result) {
                notify("get data:" + JSON.stringify(result, null, 4));
            }
        });
}
