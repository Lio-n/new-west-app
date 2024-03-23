import Button from '../ui/atoms/button.atom';
import Input from '../ui/atoms/input.atom';

interface FormInputs extends EventTarget {
  subscriptionLetter: { value: string };
}

const SubscriptionLetterForm: React.FC = () => {
  const handleForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const target = e.target as FormInputs;

    if (!target.subscriptionLetter.value) return;
  };

  return (
    <form onSubmit={handleForm} className="flex gap-4">
      <Input
        style={{ background: 'url(/email.svg) no-repeat left', backgroundPosition: '1rem' }}
        className="text-body-500 border-2 border-slate-300 pl-12 p-r4 pt-2 rounded-xl placeholder:text-slate-600 placeholder:font-thin"
        placeholder="Your email"
        name="subscriptionLetter"
      />
      <Button intent="classic">Subscribe</Button>
    </form>
  );
};

export default SubscriptionLetterForm;
