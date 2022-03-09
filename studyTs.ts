interface IProtoData {
  name: string;
  age: number;
  gender?: string;
  hasWork?: boolean | null;
}

const arrProto: IProtoData[] = [
  { name: "Ivan", age: 17, gender: "male", hasWork: false },
];
let optionalVal: Partial<IProtoData> = { name: "Olga", age: 15 }; //позволяет частично использовать интерфейс


