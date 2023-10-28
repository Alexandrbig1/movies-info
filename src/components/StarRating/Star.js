import { FullStar, EmptyStar } from "./Star.styled";

export default function Star({ full, value }) {
  return <>{full ? <FullStar value={value} /> : <EmptyStar value={value} />}</>;
}
