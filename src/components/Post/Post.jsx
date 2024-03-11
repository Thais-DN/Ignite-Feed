import { useState } from "react";
import styles from "./Post.module.css";

import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "../Avatar/Avatar";

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState(["Post bue giro, hein!"]);

    const [newCommentText, setNewCommentText] = useState("");

    const publishedDateFormatted = format(
        publishedAt,
        "d 'de' LLLL 'ás' HH'h'mm",
        {
            locale: ptBR,
        }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText("");
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("Esse campo é obrigatório!");
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter((comment) => {
            return comment != commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line) => {
                    if (line.type == "paragraph") {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == "link") {
                        return (
                            <p key={line.content}>
                                <a href="#">{line.content}</a>
                            </p>
                        );
                    }
                })}
            </div>

            <form
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}
            >
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comments) => {
                    return (
                        <Comment
                            key={comments}
                            content={comments}
                            onDeleteComment={deleteComment}
                        />
                    );
                })}
            </div>
        </article>
    );
}

Post.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    publishedAt: PropTypes.instanceOf(Date).isRequired,
    content: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(["paragraph", "link"]).isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};
