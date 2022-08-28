import { Heading } from "../../Shared/Heading/Heading";
import { Input } from "../../Shared/Input/Input";
import "./WorkSpaceDetails.css";

export const WorkSpaceDetails = () => {
  const title = `Let's setup a home for all your work`;
  const description = "You can always create another workspace later.";
  return (
    <div className="workSpaceDetailsContainer">
      <Heading title={title} description={description} />
      <div className="workSpaceDetailsInput">
        <Input label="Workspace Name" type="text" placeholder="Eden" />
        <Input label="Display Name" type="text" placeholder="Example" />
      </div>
    </div>
  );
};
