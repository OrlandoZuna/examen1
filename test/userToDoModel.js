import ToDoModel from "../models/ToDoModel.js";
var inittest = async () => {
  var tareamodel = new ToDoModel();
  /*tareamodel.createTarea(
    "Test1",
    "realizar lo imposible",
    new Date(),
    "16:00",
    'false'
  );
  tareamodel.createTarea(
    "Test3",
    "cursando los deberes",
    new Date(),
    "8:00 A.M.",
    'true'
  );*/
  //////console.log(await tareamodel.getTarea());
  //tareamodel.deleteTarea("603bc063ec192401a79be7a7");
  //console.log(await tareamodel.getTarea());
// await tareamodel.updateModel("603c1792f9c4360f9bb354e4", { name: "prueba a fallar",
//description: "probando actualizar el echo" });

  //await tareamodel.doneupdateModel("603bc063ec192401a79be7a7", { name: "prueba a fallar",
  //description: "probando actualizar el echo" });
  
  //console.log(await tareamodel.getTarea());
};
inittest();
