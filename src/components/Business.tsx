import { businessType } from "../types";

function Business({ business }: { business: businessType }) {
  return (
    <div>
      <div className="img-div">
        <img src={business.image_url} alt={business.name} />
      </div>
      <p>{business.name}</p>
      <p>{business.rating} stars</p>
      <p>{business.review_count} reviews</p>
      <p>{business.location.city}</p>
      <p>{business.location.state}</p>
      <p>{business.location.zip_code}</p>
    </div>
  );
}

export default Business;
