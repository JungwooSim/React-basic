import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = ({ card, updateCard, deletedCard }) => {
    const {name, company, title, email, message, theme, fileName, fileURL} = card;

    const onSubmit = event => {
        deletedCard(card);
    };

    const onChange = event => {
        if (event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };
    return (
        <form className={styles.form}>
            <input onChange={onChange} className={styles.input} type="text" name="name" defaultValue={name} />
            <input onChange={onChange} className={styles.input} type="text" name="company" defaultValue={company} />
            <select onChange={onChange} className={styles.select} name="theme" defaultValue={theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input onChange={onChange} className={styles.input} type="text" name="title" defaultValue={title} />
            <input onChange={onChange} className={styles.input} type="text" name="email" defaultValue={email} />
            <textarea onChange={onChange} className={styles.textarea} name="message" defaultValue={message} />
            <div>
                <ImageFileInput />
            </div>
            <Button name="Delete" onClick={onSubmit} />
        </form>
    );
}

export default CardEditForm;
