import {
  SearchInput,
  SearchWrapper,
  SearchButton,
  Icon,
  SearchForm,
} from "./SearchBar.styled";

export default function SearchBar({ onSearch, value }) {
  return (
    <SearchWrapper>
      <SearchForm onSubmit={onSearch}>
        <SearchInput
          name="search"
          defaultValue={value}
          // onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder="Search Movie"
        />
        <SearchButton type="submit">
          <Icon /> Search
        </SearchButton>
      </SearchForm>
    </SearchWrapper>
  );
}
