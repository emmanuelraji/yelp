import { businessesType } from "../types";
import Business from "./Business";

function BusinessList({ businesses, isLoading, error }: businessesType) {
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
