import React, { useState } from "react";
import styles from "./inputBox.module.css";
import { NameEntry } from "../NameEntry/NameEntry";
import { Button } from "../Buttons/Button";
import { setNameToLocalStorage } from "@/utils/storage/nameStorage/nameStorage.storage";

export const InputBox: React.FC = () => {
    const [username, setUsername] = useState<string>("");

    const handlePlay = (): void => {
        if (username.trim() === "") return;
        // TODO: currently adding key as candidateName but after creating server according to the joinies key will be decided
        setNameToLocalStorage("candidateName", username);
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.box}>
                <NameEntry username={username} setUsername={setUsername} />
                <Button buttonLabel="Play" onClick={handlePlay} />
            </div>
        </div>
    );
};
