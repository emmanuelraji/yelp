import { BusinessesProps } from "../lib/types";
import Business from "./Business";

function BusinessList({ businesses, isLoading, error }: BusinessesProps) {
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
