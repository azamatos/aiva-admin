import React, { FC, SVGProps } from "react";
import { ContentPageIcon, MainPageIcon, SettingsPageIcon } from "./";

interface LooseObject {
  [key: string]: FC<SVGProps<SVGSVGElement>>;
}

const Components: LooseObject = {
  navigation: ContentPageIcon,
  dashboard: MainPageIcon,
  settings: SettingsPageIcon,
};

interface Props {
  id: string;
  path: string;
  component: string;
}

const DynamicLoader = ({ id, path, component }: Props) => {
  if (typeof Components[component] !== "undefined") {
    return React.createElement(Components[component], {
      key: id,
      id,
      path,
    });
  }
};

export default DynamicLoader;
