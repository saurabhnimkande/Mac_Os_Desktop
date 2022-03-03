import { Navbar } from "../Navbar/Navbar";
import "./Desktop.css";
import { DocItem } from "../DocItems/DocItem";
import { DesktopArea } from "../DesktopArea/DesktopArea";
export const Desktop = () => {
  return (
    <div id="wallpaperDiv">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <DesktopArea></DesktopArea>
      </div>
      <div id="docsIcons">
        <DocItem></DocItem>
      </div>
    </div>
  );
};
