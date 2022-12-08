import { businessType } from "../types";
import Business from "./Business";

function BusinessList({ businesses }: { businesses: businessType[] }) {
  return (
    <section className="businesses">
      <div className="businesslist">
        {businesses.map((business) => (
          <Business key={business.id} business={business} />
        ))}
      </div>
    </section>
  );
}

export default BusinessList;
