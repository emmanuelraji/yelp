import { businessType } from "../types";

function Business({ business }: { business: businessType }) {
  return (
    <article>
      <figure>
        <div className="img-container">
          <img src={business.image_url} alt={business.name} />
        </div>
        <figcaption>
          <h2>{business.name.substring(0, 30)}</h2>
          <p className="business-category">{business.categories[0].title}</p>
          <div className="business-info">
            <div className="business-address">
              <p>{business.location.city}</p>
              <p>
                {business.location.state} {business.location.zip_code}
              </p>
            </div>
            <div className="business-review">
              <p>{business.rating} stars</p>
              <p>{business.review_count} reviews</p>
            </div>
          </div>
        </figcaption>
      </figure>
    </article>
  );
}

export default Business;
