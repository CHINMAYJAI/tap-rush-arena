// checks if the current parameter does exists or not
function required(key: string) {
    const value = process.env[key];
    if (!value) throw new Error(`Missing env variable named: ${key}`);
    return value;
}

export const config = {
    app: {
        PORT: Number(required("PORT")),
    },
};

if (Number.isNaN(config.app.PORT)) throw new Error("PORT must be a number");
if (config.app.PORT <= 0)
    throw new Error(
        `Enter a valid PORT\nPORT: ${config.app.PORT} must be greater than 0`
    );
