import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { NODE_ENV, PORT, LOG_FORMAT, ORIGIN, CREDENTIALS } from '@config';
import { dbConnection } from '@database';
import { Routes } from '@interfaces/routes.interface';
import { ErrorMiddleware } from '@middlewares/error.middleware';
import { logger, stream } from '@utils/logger';

export class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private async connectToDatabase() {
    await dbConnection();
  }

  private initializeMiddlewares() {
    this.app.use(morgan(LOG_FORMAT, { stream }));
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'Example docs',
        },
        securityDefinitions: {
          bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
            description: 'JWT Authorization header using the Bearer scheme. Example: "Bearer {token}"',
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
      apis: [
        'swagger.yaml',
        'api-docs/aper.yaml',
        'api-docs/auth.yaml',
        'api-docs/areaCommand.yaml',
        'api-docs/currentWorkHistory.yaml',
        'api-docs/department.yaml',
        'api-docs/dependent.yaml',
        'api-docs/disciplinaryHistory.yaml',
        'api-docs/divisionalHQ.yaml',
        'api-docs/educationalHistory.yaml',
        'api-docs/formation.yaml',
        'api-docs/medical.yaml',
        'api-docs/nextOfKin.yaml',
        'api-docs/officer-biodata.yaml',
        'api-docs/officerPromotionHistory.yaml',
        'api-docs/officerTraining.yaml',
        'api-docs/policeOutpost.yaml',
        'api-docs/policeStation.yaml',
        'api-docs/professionalAssociation.yaml',
        'api-docs/ranks.yaml',
        'api-docs/salaryDetails.yaml',
        'api-docs/statecommand.yaml',
        'api-docs/units.yaml',
        'api-docs/welfare.yaml',
        'api-docs/workExperience.yaml',
      ],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  private initializeErrorHandling() {
    this.app.use(ErrorMiddleware);
  }
}
