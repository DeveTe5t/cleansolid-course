import { JsonDataBaseService, LocalDataBaseService, PostProvider } from "./05-dependency-inversion-c";

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    // dependency injection
    constructor(private postProvider: PostProvider) { }

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        // this.posts = await jsonDB.getFakePosts();
        // const jsonDB = new JsonDataBaseService();        
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}