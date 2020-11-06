import {Views} from "./app/views/views";
import {Controller} from "./app/controller/controller";
import{Model} from "./app/model/model";

const model = new Model()
const views = new Views(model)
const controller = new Controller(views, model)