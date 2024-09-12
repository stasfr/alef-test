import Child from "./child";
import Person from "./person";

export default interface FormData {
  person: Person | null;
  childs: Child[] | null;
}
