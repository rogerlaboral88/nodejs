import express, { Application } from 'express';
import morgan from "morgan";
import routes from "./routes/general.routes";

export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
    }

    settings() {
        this.app.set('port', this.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(routes);
    }
    
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
    
}