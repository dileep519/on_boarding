import { Person } from "@mui/icons-material";
import React, { useState } from "react";
import { Heading } from "../../Shared/Heading/Heading";
import { Info } from "../../Shared/Info/Info";
import GroupsIcon from "@mui/icons-material/Groups";
import "./AccountType.css";

export const AccountType = () => {
  const [active, setActive] = useState("mySelf");
  const title = `How are you planning to use Eden?`;
  const description = `We'll streamline setup experience accordingly`;
  const personIcon = (
    <Person sx={active === "mySelf" ? { color: "#654de4" } : {}} />
  );
  const groupIcon = (
    <GroupsIcon sx={active !== "mySelf" ? { color: "#654de4" } : {}} />
  );
  return (
    <div className="accountTypeContainer">
      <Heading title={title} description={description} />
      <div className="accountTypeInput">
        <Info
          onClick={() => setActive("mySelf")}
          isActive={active === "mySelf"}
          icon={personIcon}
          title="For myself"
          description="Write better. Think more clearly. Stay organised."
        />
        <Info
          onClick={() => setActive("organisation")}
          isActive={active !== "mySelf"}
          icon={groupIcon}
          title="With my team"
          description="Wikis, docs, tasks & projects, all in one place."
        />
      </div>
    </div>
  );
};
