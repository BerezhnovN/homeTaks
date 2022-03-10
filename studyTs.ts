interface IProtoData {
  name: string;
  age: number;
  gender?: string;
  hasWork? : boolean | null;
}
const str: string = ""

const arrProto : IProtoData[] = [
  {name: 'Ivan', age: 17, gender: 'male', hasWork: false},
  {name: 'Evgeny', age: 17, gender: 'male', hasWork: false},
  {name: 'Sergey', age: 17, gender: 'female', hasWork: false},
  {name: 'Alex', age: 17, gender: 'male', hasWork: false},
]
let optionalVal: Partial<IProtoData> = {name:   'Olga', age: 15}
arrProto.filter((protoEl:IProtoData) => protoEl.gender === 'female')
let foundItem: IProtoData | null;
for (let i = 0; i < arrProto.length; i++ ) {
  foundItem = arrProto[i].hasWork === true ? arrProto[i]: null

}
arrProto.map(item => {
  if (item.hasWork) {
      let name = item.age 
  } 
  return item
  }) 

const newMap = ['name', 'age', 'gender']
const dates = [
  {dt: new Date()},
  {dt: new Date()},
  {dt: new Date()},]
// 21.01.2021 = [
//     {dt: new Date()},
//     {dt: new Date()},
//     {dt: new Date()},]
new Map()
new Set()
let arr1 : number[] = [1,1,2,2,3,4,5,6,7,7,8,8]
// [1,2,3,4,5,6,7,8]

let uniqSet = new Set(arr1)

let exampleData = new Map([[
  'red',[ 
      {dt: new Date()},
      {dt: new Date()},
      {dt: new Date()}
  ]
]]);


exampleData.get('red') 

/* 
=>  [ {dt: new Date()},
  {dt: new Date()},
 {dt: new Date()}]
*/


