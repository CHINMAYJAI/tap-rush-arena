export const setNameToLocalStorage = (
    candidateName: string,
    username: string
): number => {
    try {
        const trimValue: string = username.trim();
        const candidateNameKey: string = candidateName.trim();
        localStorage.setItem(candidateNameKey, trimValue);
        return 1;
    } catch (err) {
        console.error(`Cannot store the username in localstorage\n${err}`);
        return 0;
    }
};

export const getNameFromLocalStorage = (
    candidateName: string
): string | number => {
    try {
        return localStorage.getItem(candidateName) ?? "";
    } catch (err) {
        console.error(`Cannot fetch the username from localstoage\n${err}`);
        return 0;
    }
};

export const removeNameFromLocalStorage = (): number => {
    try {
        localStorage.removeItem("candidateName");
        return 1;
    } catch (err) {
        console.error(`Cannot remove the username from localstorage\n${err}`);
        return 0;
    }
};

export const numberOfCandidates = (): number => {
    try {
        return localStorage.length;
    } catch (err) {
        console.error(`Cannot fetch the number of users\n${err}`);
        return -1;
    }
};

export const cleanLocalStorage = (): number => {
    try {
        localStorage.clear();
        return 1;
    } catch (err) {
        console.error(`Cannot clean the localstorage\n${err}`);
        return 0;
    }
};
