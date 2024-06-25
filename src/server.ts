import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { APERRoute } from './routes/aper.route';
import { OfficerCurrentPostingRoute } from './routes/currrentWorkHistory.route';
import { DependentsRoute } from './routes/dependent.route';
import { DisciplinaryHistoryRoute } from './routes/disciplinaryHistory.route';
import { EducationalHistoryRoute } from './routes/educationalHistory.route';
import { NextOfKinRoute } from './routes/nextofKin.route';
import { OfficerBioDataRoute } from './routes/officer.route';
import { ProfessionalAssociationRoute } from './routes/professionalAssociation.route';
import { SalaryDetailsRoute } from './routes/salaryDetails.route';
import { WorkExperienceRoute } from './routes/workExperience.route';
import { DepartmentRoute } from './routes/department.route';
import { AreaCommandRoute } from './routes/areaCommand.route';
import { DivisionalHeadquartersRoute } from './routes/divisionalHQ.route';
import { FormationRoute } from './routes/formation.route';
import { PoliceOutpostRoute } from './routes/policeOutpost.route';
import { PoliceStationRoute } from './routes/policeStation.route';
import { RankRoute } from './routes/ranks.route';
import { StateCommandRoute } from './routes/statecommand.route';
import { UnitRoute } from './routes/units.route';
import { OfficerMedicalInfoRoute } from './routes/medical.route';
import { OfficerPromotionHistoryRoute } from './routes/officerPromotionHistory.route';
import { OfficerTrainingRoute } from './routes/officerTraining.route';
import { OfficerWelfareInformationRoute } from './routes/welfare.route';
import { StateRoute } from './routes/state.route';

ValidateEnv();

const app = new App([
  new AuthRoute(),
  new UserRoute(),
  new APERRoute(),
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
  new AreaCommandRoute(),
  new DepartmentRoute(),
  new DivisionalHeadquartersRoute(),
  new FormationRoute(),
  new PoliceOutpostRoute(),
  new PoliceStationRoute(),
  new RankRoute(),
  new StateCommandRoute(),
  new UnitRoute(),
  new StateRoute(),
]);

app.listen();
