import React from "react";
import styles from "./nameEntry.module.css";

interface NameEntryProps {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const NameEntry: React.FC<NameEntryProps> = ({
    username,
    setUsername,
}) => {
    return (
        <div className={styles.inputGroup}>
            <input
                required
                type="text"
                name="text"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
            />
            <label className={styles.userLabel}>Enter Name</label>
        </div>
    );
};
