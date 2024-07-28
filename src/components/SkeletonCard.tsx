const SkeletonCard = () => {
  return (
    <>
        <div className="card">
            <div>
                <div className="cardImage skeleton">
                    <div className="skeleton-img"></div>
                    <div className="skeleton-badge"></div>
                </div>
                <div className="cardDetails skeleton">
                    <div className="skeleton-text short"></div>
                    <div className="skeleton-text long"></div>
                </div>
                <div className="ratingVoteDetails skeleton">
                    <div className="skeleton-rating">
                    <div className="skeleton-star"></div>
                    <div className="skeleton-text short"></div>
                    <div className="skeleton-text short"></div>
                    </div>
                </div>
            </div>
            <div className="skeleton-line">
                
            </div>
        </div>
    </>
  )
}

export default SkeletonCard
