import {
  SearchInput,
  SearchWrapper,
  SearchButton,
  Icon,
  SearchForm,
} from "./SearchBar.styled";

export default function SearchBar({ onSearch }) {
  return (
    <SearchWrapper>
      <SearchForm onSubmit={onSearch}>
        <SearchInput name="search" type="text" placeholder="Search Movie" />
        <SearchButton type="submit">
          <Icon /> Search
        </SearchButton>
      </SearchForm>
    </SearchWrapper>
  );
}
