import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { APERRoute } from './routes/aper.route';
import { CurrentWorkHistoryRoute } from './routes/currrentWorkHistory.route';
import { DependentsRoute } from './routes/dependent.route';
import { DisciplinaryHistoryRoute } from './routes/disciplinaryHistory.route';
import { EducationalHistoryRoute } from './routes/educationalHistory.route';
import { NextOfKinRoute } from './routes/nextofKin.route';
import { IPPISOfficersInfoRoute } from './routes/officer.route';
import { ProfessionalAssociationRoute } from './routes/professionalAssociation.route';
import { SalaryDetailsRoute } from './routes/salaryDetails.route';
import { WorkExperienceRoute } from './routes/workExperience.route';
import { DepartmentRoute } from './routes/department.route';

ValidateEnv();

const app = new App([
  new AuthRoute(),
  new UserRoute(),
  new APERRoute(),
  new CurrentWorkHistoryRoute(),
  new DependentsRoute(),
  new DisciplinaryHistoryRoute(),
  new EducationalHistoryRoute(),
  new NextOfKinRoute(),
  new IPPISOfficersInfoRoute(),
  new ProfessionalAssociationRoute(),
  new SalaryDetailsRoute(),
  new WorkExperienceRoute(),
  new DepartmentRoute(),
]);

app.listen();
