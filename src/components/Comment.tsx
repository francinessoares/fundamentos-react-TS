import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react';

import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.Comment}>
            <Avatar src="https://github.com/wheatjs.png" />

            <div className={styles.CommentBox}>
                <div className={styles.CommentContent}>
                    <header>
                        <div className={styles.AuthorAndTime}>
                            <strong>Tony Stark</strong>
                            <time title="11 de Maio às 08:11h" dateTime="2023-05-11 08:11:30">Publicado há 1h</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
