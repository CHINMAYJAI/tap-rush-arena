import React from "react";
import styles from "./button.module.css";

interface ButtonLabelProps {
    buttonLabel: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonLabelProps> = ({
    buttonLabel,
    onClick,
}) => {
    return (
        <>
            <button className={styles.button} onClick={onClick}>
                {buttonLabel}
            </button>
        </>
    );
};
