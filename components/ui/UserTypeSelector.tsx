import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserTypeSelector = ({
  userType,
  setUserType,
  onClickHandler,
}: UserTypeSelectorParams) => {
  function accessChangeHandler(type: UserType): void {
    setUserType(type)
    onClickHandler && onClickHandler(type)
  }

  return (
    <Select value={userType} onValueChange={(type: UserType) => accessChangeHandler(type)}>
      <SelectTrigger className="shad-select">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border-none bg-dark-200">
        <SelectItem value="viewer" className="shad-select-item">Cho phép xem</SelectItem>
        <SelectItem value="editor" className="shad-select-item">Cho phép sửa</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UserTypeSelector;
