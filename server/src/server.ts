import { app } from "./app";
import { config } from "./utils/envVariables/index.envVariables.utils";

const PORT: Number = config.app.PORT;

app.listen(PORT, function () {
    console.log(`App is running on PORT: ${PORT}`);
});
