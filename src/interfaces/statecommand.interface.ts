export interface StateCommand {
  id: number;
  refNo: string;
  name: string;
  department: string;
  location: string;
  phone: string;
  email: string;
  geoCode: string;
  type: string;
  parent: string;
  section: string;
  createdBy: string;
  creationDate: Date;
  modifiedBy: string;
  modificationDate: Date;
}
