import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";
import "./global.css";

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post
                        author="Thais Dias"
                        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, aliquid ipsum qui eos aspernatur est sequi necessitatibus in quidem fuga quae quam tempora laboriosam placeat eveniet dignissimos alias sunt animi!"
                    />
                    <Post
                        author="Thais Dias"
                        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, aliquid ipsum qui eos aspernatur est sequi necessitatibus in quidem fuga quae quam tempora laboriosam placeat eveniet dignissimos alias sunt animi!"
                    />
                </main>
            </div>
        </div>
    );
}
