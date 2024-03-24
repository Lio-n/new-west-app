import Button from "../ui/atoms/button.atom";
import MagnifyingGlassIcon from "../ui/atoms/icons/magnifying-glass.icon";
import Input from "../ui/atoms/input.atom";

interface SearchFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onListenQuery: (searchText: string) => void;
}
interface FormInputs extends EventTarget {
  searchText: { value: string };
}

const SearchForm: React.FC<SearchFormProps> = ({ onListenQuery, ...props }) => {
  const handleForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const target = e.target as FormInputs;

    if (!target.searchText.value) return;

    onListenQuery(target.searchText.value);
  };

  return (
    <form onSubmit={handleForm} {...props} className="flex border-b-2 border-body-400">
      <Input
        className="text-slate-950 font-semibold placeholder:italic placeholder:text-slate-600 placeholder:font-thin"
        placeholder="Search The New West"
        name="searchText"
      />
      <Button>
        <MagnifyingGlassIcon className="stroke-body-900 w-7 h-7 hover:opacity-50" />
      </Button>
    </form>
  );
};

export default SearchForm;
