import { defineStore } from "pinia";
type User = {
    id: number
    name: string
    email: string
}

type userState = {
    users: User[]
}
export const useUserStore = defineStore({
    id: "user",
    state: (): userState => ({
        users: [],
    }),
    actions: {
        getAllUsers() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                     console.log(json);
                     this.users = json;
                });
        }
    },
});