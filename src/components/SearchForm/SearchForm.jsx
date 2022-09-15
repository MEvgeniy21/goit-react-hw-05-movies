import * as SC from './SearchForm.styled';

const SearchForm = ({ onSubmit, inputValue, isDisabledBtn }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    onSubmit(form.elements.query.value);
  };

  return (
    <SC.Form onSubmit={handleSubmit}>
      <SC.Input type="text" name="query" defaultValue={inputValue} />
      <button type="submit" disabled={isDisabledBtn}>
        Search
      </button>
    </SC.Form>
  );
};

export default SearchForm;
