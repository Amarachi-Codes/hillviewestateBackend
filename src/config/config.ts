import dotenv from "dotenv"
import {StringValue} from 'ms' 

dotenv.config();


type Config = {
app:{
    port: string | number;
};
jwt:{
    secret: string;
    expires:StringValue;
    refresh_expires:StringValue;
}
};

const configuration : Config = {
    app:{
        port: process.env.PORT || 3000,
    },
    jwt:{
        secret:process.env.JWT_SECRET || "",
        expires: (process.env.JWT_EXPIRES as StringValue) || "15m",
        refresh_expires:(process.env.JWT_REFRESH_EXPIRES_IN) as StringValue ||"7d"  

    }
}

export default configuration