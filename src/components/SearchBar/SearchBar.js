import {
  SearchInput,
  SearchWrapper,
  SearchButton,
  Icon,
} from "./SearchBar.styled";

export default function SearchBar() {
  return (
    <SearchWrapper>
      <SearchInput placeholder="Search Movie" />
      <SearchButton>
        <Icon /> Search
      </SearchButton>
    </SearchWrapper>
  );
}
