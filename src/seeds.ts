import Container from 'typedi';
import { DepartmentService } from './services/department.service';
import { FormationService } from './services/formation.service';
import { RankService } from './services/ranks.service';
import { IppisService } from './services/ippis.service';
import  IppisSeeds from './output.json';


const departmentSeeds = [
  'FORCE SECRETARY',
  'OFFICE OF THE INSPECTOR - GENERAL OF POLICE',
  'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  'B DEPARTMENT OF OPERATIONS (DOP)',
  'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  'E DEPARTMENT OF TRAINING AND DEVELOPMENT (DTD)',
  'F DEPARTMENT OF RESEARCH AND PLANNING (DR&P)',
  'G DEPARTMENT OF INFORMATION & COMMUNICATION TECHNOLOGY (DICT)',
  'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
];

const rankSeeds = [
  'INSPECTOR GENERAL OF POLICE',
  'DEPUTY INSPECTOR GENERAL OF POLICE',
  'ASSISTANT INSPECTOR GENERAL OF POLICE',
  'COMMISSIONER OF POLICE',
  'DEPUTY COMMISSIONER OF POLICE',
  'ASSISTANT COMMISSIONER OF POLICE',
  'CHIEF SUPERINTENDENT OF POLICE',
  'SUPERINTENDENT OF POLICE',
  'DEPUTY SUPERINTENDENT OF POLICE',
  'ASSISTANT SUPERINTENDENT OF POLICE I',
  'ASSISTANT SUPERINTENDENT OF POLICE II',
  'INSPECTOR OF POLICE I',
  'INSPECTOR OF POLICE II',
  'SERGEANT MAJOR',
  'SERGEANT',
  'CORPORAL',
  'CONSTABLE I',
  'CONSTABLE II',
];

const formationSeeds = [
  {
    name: 'Airport Police Command',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Force Provost Marshal',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'IGP Secretariat',
    type: 'Department',
    department: 'OFFICE OF THE INSPECTOR - GENERAL OF POLICE',
  },
  {
    name: 'Other Specialized Training Institutions',
    type: 'Department',
    department: 'E DEPARTMENT OF TRAINING AND DEVELOPMENT (DTD)',
  },
  {
    name: 'Police Medical Services',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Police Mobile Force Squadrons',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Police Premier Colleges',
    type: 'Department',
    department: 'E DEPARTMENT OF TRAINING AND DEVELOPMENT (DTD)',
  },
  {
    name: 'Police Training School',
    type: 'Department',
    department: 'E DEPARTMENT OF TRAINING AND DEVELOPMENT (DTD)',
  },
  {
    name: 'Railway Police Command',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'ZONE 1',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 10',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 11',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 12',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 13',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 14',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 15',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 16',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 17',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 2',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 3',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 4',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 5',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 6',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 7',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 8',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ZONE 9',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'Inspectorate',
    type: 'Department',
    department: 'E DEPARTMENT OF TRAINING AND DEVELOPMENT (DTD)',
  },
  {
    name: 'Training Unit',
    type: 'Department',
    department: 'E DEPARTMENT OF TRAINING AND DEVELOPMENT (DTD)',
  },
  {
    name: 'Finance And Admin',
    type: 'Department',
    department: 'E DEPARTMENT OF TRAINING AND DEVELOPMENT (DTD)',
  },
  {
    name: 'HEAD OF DEPARTMENT',
    type: '',
    department: 'FORCE SECRETARY',
  },
  {
    name: 'Force Headquarters Abuja',
    type: '',
    department: 'E DEPARTMENT OF TRAINING AND DEVELOPMENT (DTD)',
  },
  {
    name: 'The Office(s) Of The PSO To The IGP.',
    type: 'Department',
    department: 'OFFICE OF THE INSPECTOR - GENERAL OF POLICE',
  },
  {
    name: 'The Office Of The P.A. To The IGP.',
    type: 'Department',
    department: 'OFFICE OF THE INSPECTOR - GENERAL OF POLICE',
  },
  {
    name: 'The Office Of The CSO To The IGP.',
    type: 'Department',
    department: 'OFFICE OF THE INSPECTOR - GENERAL OF POLICE',
  },
  {
    name: 'The Administrative/Main Office. 5. Typing/Computer Office.',
    type: 'Department',
    department: 'OFFICE OF THE INSPECTOR - GENERAL OF POLICE',
  },
  {
    name: 'Mechanized Salary Section And Finance Office.',
    type: 'Department',
    department: 'OFFICE OF THE INSPECTOR - GENERAL OF POLICE',
  },
  {
    name: 'Conference Room.',
    type: 'Department',
    department: 'OFFICE OF THE INSPECTOR - GENERAL OF POLICE',
  },
  {
    name: 'Disciplinary Matters',
    type: 'Department',
    department: 'FORCE SECRETARY',
  },
  {
    name: 'Promotion',
    type: 'Department',
    department: 'FORCE SECRETARY',
  },
  {
    name: 'Establishment',
    type: 'Department',
    department: 'FORCE SECRETARY',
  },
  {
    name: 'Postings/Transfer And Secondment',
    type: 'Department',
    department: 'FORCE SECRETARY',
  },
  {
    name: 'General Admin',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'DFA Admin FHQ Annex Lagos',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Police Accounts And Budget',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Welfare Section',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Force Public Relations Office',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Pension Office',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Education Section',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Sports Section',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Police  Printing Press',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Police Band',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Force Insurance',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Policing Formation And Implementation',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Covering Of The NPF Tenders Board',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Designing And Implementing NPF Policing And Programs On Welfare',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'National Housing Scheme',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'Chaplaincy (Imanship/Catholic/Protestant)',
    type: 'Department',
    department: 'A DEPARTMENT OF FINANCE AND ADMINISTRATION (DFA)',
  },
  {
    name: 'FIB ABUJA',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'FIB LAGOS ANNEX',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'STS',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'IRT',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'ITT',
    type: 'Department',
    department: 'H DEPARTMENT - FORCE INTELLIGENCE DEPARTMENT',
  },
  {
    name: 'Administration Section',
    type: 'Department',
    department: 'G DEPARTMENT OF INFORMATION & COMMUNICATION TECHNOLOGY (DICT)',
  },
  {
    name: 'Force Communication Section',
    type: 'Department',
    department: 'G DEPARTMENT OF INFORMATION & COMMUNICATION TECHNOLOGY (DICT)',
  },
  {
    name: 'Information Technology Section',
    type: 'Department',
    department: 'G DEPARTMENT OF INFORMATION & COMMUNICATION TECHNOLOGY (DICT)',
  },
  {
    name: 'Administration, Audit And Inspection',
    type: 'Department',
    department: 'F DEPARTMENT OF RESEARCH AND PLANNING (DR&P)',
  },
  {
    name: 'Research And Development',
    type: 'Department',
    department: 'F DEPARTMENT OF RESEARCH AND PLANNING (DR&P)',
  },
  {
    name: 'Community Policing',
    type: 'Department',
    department: 'F DEPARTMENT OF RESEARCH AND PLANNING (DR&P)',
  },
  {
    name: 'SERVICOM',
    type: 'Department',
    department: 'F DEPARTMENT OF RESEARCH AND PLANNING (DR&P)',
  },
  {
    name: 'Police Staff College, Jos',
    type: 'Department',
    department: 'E DEPARTMENT OF TRAINING AND DEVELOPMENT (DTD)',
  },
  {
    name: 'Police Academy, Kano (POLAC)',
    type: 'Department',
    department: 'E DEPARTMENT OF TRAINING AND DEVELOPMENT (DTD)',
  },
  {
    name: 'National Institute For Police Studies',
    type: 'Department',
    department: 'E DEPARTMENT OF TRAINING AND DEVELOPMENT (DTD)',
  },
  {
    name: 'Administration',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Federal Operations',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Force Animal Branch',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Force Veterinary Section',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Force Dog Section',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Force Mounted Troop',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Border Patrol Section',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Police Mobile Force',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Explosive Ordinance Disposal (EOD) Unit',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Force Police Air Wing',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Force Armament Section',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Counter-Terrorism Unit (CTU',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Directorate Of Peacekeeping Operations',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Central Motor Registry (CMR)',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Force Marine Section',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'National Inland Waterways',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Special Protection Unit (SPU)',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Independent National Electoral Commission (INEC) Liaison Unit',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Disaster Management Unit (DMU)',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Special Forces Unit',
    type: 'Department',
    department: 'B DEPARTMENT OF OPERATIONS (DOP)',
  },
  {
    name: 'Force Quarter Master',
    type: 'Department',
    department: 'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  },
  {
    name: 'Administrative',
    type: 'Department',
    department: 'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  },
  {
    name: 'Cooperative',
    type: 'Department',
    department: 'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  },
  {
    name: 'Procurement',
    type: 'Department',
    department: 'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  },
  {
    name: 'Works, Housing And Transport',
    type: 'Department',
    department: 'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  },
  {
    name: 'Board Of Survey Enquiry',
    type: 'Department',
    department: 'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  },
  {
    name: 'Public Relations Office (PRO)',
    type: 'Department',
    department: 'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  },
  {
    name: 'Provost',
    type: 'Department',
    department: 'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  },
  {
    name: 'Accounts, Savings & Loans',
    type: 'Department',
    department: 'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  },
  {
    name: 'Registry',
    type: 'Department',
    department: 'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  },
  {
    name: 'Investment (BDC)',
    type: 'Department',
    department: 'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  },
  {
    name: 'Audit',
    type: 'Department',
    department: 'C DEPARTMENT OF LOGISTICS AND SUPPLY (DLS)',
  },
  {
    name: 'Administrative Section',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Federal Special Anti-Robbery-Squad (FSARS)',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Police Special Fraud Unit (PSFU)',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Interpol Section',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Homicide Section',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'General Investigation',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Legal Science',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Forensic/CCR',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'X-Squad',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Special Enquiry Bureau (SEB)',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Anti-Human Trafficking Unit (AHTU) )',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Terrorism Financing And General Investigation (TFGI)',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Anti-Fraud Section',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Force CID Annex Lagos',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Force CID Annex Kaduna',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Force CID Annex Enugu',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
  {
    name: 'Force CID Annex Gombe',
    type: 'Department',
    department: 'D FORCE CRIMINAL INVESTIGATION AND INTELLIGENCE DEPARTMENT (FCIID)',
  },
];

const departmentService = Container.get(DepartmentService);
const formatioonService = Container.get(FormationService);
const rankService = Container.get(RankService);
const ippisService = Container.get(IppisService);

export const seedDepartment = () => {
  departmentSeeds.forEach(async e => {
    const d = await departmentService.createDepartment({ departmentName: e, description: '' });
    console.log(d);
  });
};
export const seedRanks = () => {
  rankSeeds.forEach(async e => {
    const r = await rankService.createRank({ name: e });
    console.log(r);
  });
};

export const seedFormation = async () => {
  formationSeeds.forEach(async e => {
    const item = {
      name: e.name,
      department: e.department,
      section: '',
      zone: '',
    };
    const f = await formatioonService.createFormation(item);
    console.log(f);
  });
};

export const seedIppis = async () => {
  IppisSeeds.forEach( async e => {
    const item :any = {
      staffId: e.staffId,
      fullName: e.fullName,
      rank: e.rank,
      apNo: e.apNo,
      dateOfBirth: e.dateOfBirth,
      maritalStatus: e.maritalStatus,
      gender: e.gender,
      gradeCategory: e.gradeCategory,
      grade: e.grade,
      step: e.step,
      command: e.command,
      phoneNo: e.phoneNo,
      bankName: e.bankName,
      accountNo: e.accountNo,
      pfaName: e.pfaName,
      pinNo: e.pinNo,
      staffCategory: e.staffCategory,
      bvn: e.bvn,
      employeeStatus: e.employeeStatus,
     
    };
    // const f = await ippisService.createIppis(item);
    console.log(item);
  });
};
