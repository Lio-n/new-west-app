import Button from "../ui/atoms/button.atom";
import MagnifyingGlassIcon from "../ui/atoms/icons/magnifying-glass.icon";
import Input from "../ui/atoms/input.atom";

interface SearchFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const SearchForm: React.FC<SearchFormProps> = ({ ...props }) => {
  return (
    <form {...props} className="flex border-b-2 border-body-400">
      <Input
        className="text-slate-950 font-semibold placeholder:italic placeholder:text-slate-400 placeholder:font-thin"
        placeholder="Search The New West"
      />
      <Button>
        <MagnifyingGlassIcon className="stroke-body-900 w-7 h-7 hover:opacity-50" />
      </Button>
    </form>
  );
};

export default SearchForm;
