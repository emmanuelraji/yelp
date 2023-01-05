import { businessType } from "../types";

function Business({ business }: { business: businessType }) {
  return (
    <article>
      <figure className="img-div">
        <img src={business.image_url} alt={business.name} />
      </figure>
      <figcaption>
        <h2>{business.name}</h2>
        <p>{business.rating} stars</p>
        <p>{business.review_count} reviews</p>
        <p>{business.location.city}</p>
        <p>{business.location.state}</p>
        <p>{business.location.zip_code}</p>
      </figcaption>
    </article>
  );
}

export default Business;
