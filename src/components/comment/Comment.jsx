import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/YagoFGomes.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Yago Ferreira</strong>
                            <time
                                title="19 de fevereiro ás 16:20"
                                dateTime="2024-02-19 16:20:09"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Diego, parabéns!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>30</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
