import {
  BookOpenIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import ToggleButton from "../ui/toggle-button";

const NovelAction = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold py-5">Action</h1>
      <div className="grid grid-cols-3 gap-4 w-10/12 mx-auto">
        <ToggleButton>
          <HandThumbUpIcon className="w-10 h-10" />
        </ToggleButton>
        <ToggleButton>
          <HandThumbDownIcon className="w-10 h-10" />
        </ToggleButton>
        <ToggleButton>
          <BookOpenIcon className="w-10 h-10" />
        </ToggleButton>
      </div>
    </>
  );
};

export default NovelAction;
