import { useContext} from "react";
import BuilderContext from "../builderContext/builderContext";


function useBuilder() {
    const context = useContext(BuilderContext);
    if(!context) throw new Error("useBuilder must be used within a CredentialsContext");
  return context;
}

export default useBuilder
