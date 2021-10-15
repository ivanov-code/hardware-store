import cssClasses from './app.module.scss';
import {FC} from "react";

export const App: FC = () => {
    return (
        <div className={cssClasses.layout}>
            <header className={cssClasses.layout__header}>
                header
            </header>
            <main className={cssClasses.layout__content}>
                main
            </main>
            <footer className={cssClasses.layout__footer}>
                footer
            </footer>
        </div>
    );
};