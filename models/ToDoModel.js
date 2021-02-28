import mongoose from "../connection/connect.js";
import modelenum from "../utils/enumModel.js";
import RolesModel from "./rolesModel.js";

class ToDoModel {
    constructor() {
      var roles = new RolesModel();
      this.Schema = mongoose.Schema;
      this.TareaSchema = new this.Schema({
        name: String,
        description: String,
        date: Date,
        hour: String,
        done:{
            type: Boolean,
        },
      
      });
      //Ingresamos a llamar a la funcion model
      //this.mymodel = mongoose.model("users", this.UserSchema);
      if (modelenum["tarea"] == null) {
        this.mymodel = mongoose.model("tarea", this.TareaSchema);
        modelenum["tarea"] = this.mymodel;
      } else {
        this.mymodel = modelenum["tarea"];
      }
    }
    /* 
    C. create
    */
    createTarea(name, description, date, hour, done) {
      var tarea= {
        name,
        description,
        date,
        hour,
        done,
      };
      var newtarea = new this.mymodel(tarea);
      // aqui viene la validacion
      var error = newtarea.validateSync();
      return new Promise((resolve, reject) => {
        if (error) {
          resolve(error);
          return;
        }
        newtarea.save().then((docs) => {
          console.log("tarea registrada");
          resolve(docs);
        });
      });
    }
    /* 
    R. read
    */
    getTarea(filterdata) {
      var filter = {};
      if (filterdata != null) {
        filter = filterdata;
      }
      return new Promise((resolve, reject) => {
        this.mymodel.find(filter, (err, docs) => {
          if (err) {
            console.log(err);
            resolve(err);
            return;
          }
          resolve(docs);
        });
      });
    }
    /*
    U. update
     */
    updateModel(id, tareaUpdate) {
      return new Promise((resolve, reject) => {
        this.mymodel.update({ _id: id }, { $set: tareaUpdate }, (err, docs) => {
          if (err) {
            console.log(err);
            resolve(err);
            return;
          }
          resolve(docs);
        });
      });
    }
    /*
    D. delete
     */
    deleteTarea(id) {
      return new Promise((resolve, reject) => {
        this.mymodel.remove({ _id: id }).then((err, docs) => {
          if (err) {
            console.log(err);
            resolve(err);
            return;
          }
          resolve(docs);
        });
      });
    }
    getModel() {
      return this.mymodel;
    }
    getSchema() {
      return this.UserSchema;
    }  
    /*doneupdateModel(done, tareaUpdate)  {
                return new Promise((resolve, reject) => {
                  this.mymodel.update({ _done:done }, { $set: tareaUpdate }, (err, docs) => {
                    if ( done == "false") {
                      console.log(err);
                      resolve(err);
                      return;
                    }
                    resolve(docs);
                  
                  });
                });
    }*/
    
  }
  export default ToDoModel;