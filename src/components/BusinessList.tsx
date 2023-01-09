import { businessesProps } from "../types";
import Business from "./Business";

function BusinessList({ businesses, isLoading, error }: businessesProps) {
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
