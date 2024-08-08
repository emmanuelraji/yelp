import { BusinessType } from "../lib/types";
import Business from "./Business";

type Props = {
  businesses: BusinessType[];
  error: string | null;
  isLoading: boolean;
};

function BusinessList({ businesses, isLoading, error }: Props) {
  return (
    <section className="businesses">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {businesses && (
        <div className="businesslist">
          {businesses.map((business) => (
            <Business key={business.id} business={business} />
          ))}
        </div>
      )}
    </section>
  );
}

export default BusinessList;
