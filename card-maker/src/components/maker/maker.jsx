import React, {useEffect, useState} from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
    const [cards, setCards] = useState({
        1 : {
            id: '1',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null,
        },
        2 : {
            id: '2',
            name: 'Ellie2',
            company: 'Samsung',
            theme: 'light',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: 'ellie.png'
        },
        3 : {
            id: '3',
            name: 'Ellie3',
            company: 'Samsung',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null,
        },
    });

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push('/');
            }
        });
    });

    const createOrUpdateCard = (card) => {
        // 등록 및 수정 방법은 2가지. (현 코드와 아래 주석 참고)
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });

        // const updated = {...cards};
        // updated[card.id] = card;
        // setCards(updated);
    };

    const deletedCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deletedCard={deletedCard} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
}

export default Maker;
