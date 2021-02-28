//import TodoModel from "../models/ToDoModel.js";
//import Sha1 from "sha1";
//import empty from "is-empty";
import ToDoModel from "../models/ToDoModel.js";
var tarea = new ToDoModel();
class todoController {
  constructor() {}
  //services
  async createTarea(request, response) {
    var data = request.body;
    var result = await tarea.createTarea(
      data.name,
      data.description,
      new Date(),
      data.hour,
      data.done
    );
    response.status(200).json(result);
  }

  async getTarea(request, response) {
    var result = await tarea.getTarea();
    response.status(200).json(result);
  }
  async updateTarea(request, response) {
    var id = request.params.id;
    var updatedata = request.body;
    var result = await tarea.updateModel(id, updatedata);
    response.status(200).json(result);
  }
  async deleteTarea(request, response) {
    var id = request.params.id;
    var result = await tarea.deleteTarea(id);
    response.status(200).json(result);
  }
 
}
export default todoController;