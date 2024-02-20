import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";
import "./global.css";

const post = [
    {
        id: 1,
        author: {
            avatarUrl: "http://github.com/diego3g.png",
            name: "Diego Fernandes",
            role: "CTO @Rocketseat",
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. o nome do projeto é DoctorCare 🚀",
            },
            { type: "link", content: "diego.developer/doctorcare" },
        ],
        publishedAt: new Date("2024-02-18 16:20:42"),
    },
    {
        id: 2,
        author: {
            avatarUrl: "http://github.com/YagoFGomes.png",
            name: "Yago Ferreira",
            role: "FullStack",
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            {
                type: "paragraph",
                content:
                    "Estou fazendo um projeto com o back em node e o front em nextJs 🚀",
            },
            { type: "link", content: "Yago.fullstack/tasks" },
        ],
        publishedAt: new Date("2024-02-20 12:14:15"),
    },
];

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {post.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        );
                    })}
                </main>
            </div>
        </div>
    );
}
