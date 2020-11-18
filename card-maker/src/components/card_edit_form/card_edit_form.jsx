import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = ({ card }) => {
    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const onSubmit = () => {};
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" defaultValue={name} />
            <input className={styles.input} type="text" name="company" defaultValue={company} />
            <select className={styles.select} name="theme" defaultValue={theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" defaultValue={title} />
            <input className={styles.input} type="text" name="email" defaultValue={email} />
            <textarea className={styles.textarea} name="message" defaultValue={message} />
            <div>
                <ImageFileInput />
            </div>
            <Button name="Delete" onClick={onSubmit} />
        </form>
    );
}

export default CardEditForm;
