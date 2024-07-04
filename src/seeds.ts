// import ippisData from './ippis-data.json';
import Container from 'typedi';
import { RankService } from './services/ranks.service';
import { IppisService } from './services/ippis.service';
import { CommandCategoryService } from './services/commandCategory.service';
import { CommandService } from './services/command.service';
import commandSeed from './command.json';
import commandCategorySeed from './commandcategory.json';
import { rankSeeds } from './seedData';

const rankService = Container.get(RankService);
// const ippisService = Container.get(IppisService);
const commandService = Container.get(CommandService);
const commandCategoryService = Container.get(CommandCategoryService);

export const seedRanks = () => {
  rankSeeds.forEach(async e => {
    const r = await rankService.createRank({ name: e });
    console.log(r);
  });
};
export const seedCommandCategory = () => {
  commandCategorySeed.forEach(async e => {
    const r = await commandCategoryService.createCommandCategory({
      Name: e.Name,
      CategoryLevel: e.CategoryLevel,
      ParentCommandCategory_Id: e.ParentCommandCategory_Id ? parseInt(e.ParentCommandCategory_Id) : null,
    });
    console.log(r);
  });
};
export const seedCommand = () => {
  commandSeed.forEach(async e => {
    const r = await commandService.createCommand({
      Name: e.Name,
      Code: e.Code,
      CommandCategory_Id: e.CommandCategory_Id,
      State_Id: e.State_Id,
      LGA_Id: e.LGA_Id,
      IsActive: e.IsActive,
      Address: e.Address,
      CommandType_Id: e.CommandType_Id,
      ParentCode: e.ParentCode ? parseInt(e.ParentCode) : null,
      ZonalCommand_Id: e.ZonalCommand_Id ? parseInt(e.ZonalCommand_Id) : null,
    });
    console.log(r);
  });
};

export const seedIppis = async () => {
  console.log('runnin ippis seed');
  // ippisData.forEach(async e => {
  //   const item: any = {
  //     staffId: e.staffId,
  //     fullName: e.firstName + ' ' + e.surname + ' ' + e.otherName,
  //     rank: e.rank,
  //     apNo: e.apNo,
  //     dateOfBirth: e.dateOfBirth,
  //     maritalStatus: e.maritalStatus,
  //     gender: e.gender,
  //     gradeCategory: e.gradeCategory,
  //     grade: e.grade,
  //     step: e.step,
  //     command: e.command,
  //     phoneNo: e.phoneNo,
  //     bankName: e.bankName,
  //     accountNo: e.accountNo,
  //     pfaName: e.pfaName,
  //     pinNo: e.pinNo,
  //     staffCategory: e.staffCategory,
  //     bvn: e.bvn,
  //     employeeStatus: e.employeeStatus,
  //   };
  // const f = await ippisService.createIppis(item);
  // console.log(f);
  // try {
  // } catch (error) {
  //   console.log(error);
  // }
  //});
};
