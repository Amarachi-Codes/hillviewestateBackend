import dotenv from "dotenv"

dotenv.config();


type Config = {
app:{
    port: string | number;
};
};

const configuration : Config = {
    app:{
        port: process.env.PORT || 3000,
    },
}

export default configuration