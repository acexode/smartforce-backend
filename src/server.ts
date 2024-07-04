import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { OfficerCurrentPostingRoute } from './routes/currrentWorkHistory.route';
import { DependentsRoute } from './routes/dependent.route';
import { DisciplinaryHistoryRoute } from './routes/disciplinaryHistory.route';
import { EducationalHistoryRoute } from './routes/educationalHistory.route';
import { NextOfKinRoute } from './routes/nextofKin.route';
import { OfficerBioDataRoute } from './routes/officer.route';
import { ProfessionalAssociationRoute } from './routes/professionalAssociation.route';
import { SalaryDetailsRoute } from './routes/salaryDetails.route';
import { WorkExperienceRoute } from './routes/workExperience.route';
import { DivisionalHeadquartersRoute } from './routes/divisionalHQ.route';
import { RankRoute } from './routes/ranks.route';
import { OfficerMedicalInfoRoute } from './routes/medical.route';
import { OfficerPromotionHistoryRoute } from './routes/officerPromotionHistory.route';
import { OfficerTrainingRoute } from './routes/officerTraining.route';
import { OfficerWelfareInformationRoute } from './routes/welfare.route';
import { IppisRoute } from './routes/ippis.route';
import { StateRoute } from './routes/state.route';
import { CommandRoute } from './routes/command.route';
import { CommandCategoryRoute } from './routes/commandCategory.route';


ValidateEnv();

const app = new App([
  new AuthRoute(),
  new UserRoute(),
  new OfficerCurrentPostingRoute(),
  new DependentsRoute(),
  new DisciplinaryHistoryRoute(),
  new EducationalHistoryRoute(),
  new NextOfKinRoute(),
  new OfficerBioDataRoute(),
  new OfficerMedicalInfoRoute(),
  new OfficerPromotionHistoryRoute(),
  new OfficerTrainingRoute(),
  new OfficerWelfareInformationRoute(),
  new ProfessionalAssociationRoute(),
  new SalaryDetailsRoute(),
  new WorkExperienceRoute(),
  new DivisionalHeadquartersRoute(),
  new RankRoute(),
  new IppisRoute(),
  new StateRoute(),
  new CommandRoute(),
  new CommandCategoryRoute()
]);

app.listen();
