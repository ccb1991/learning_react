const StarRating=({starsSelected=0,totalStarts=5,onRate=f=>f})=>
    <div className="star-rating">
        {[...Array(totalStarts)].map((n,i)=>
        <Star key={i}
            selected={i<starsSelected}
            onClick={()=>onRate(i+1)}/>
            )}
        <p>{starsSelected} of {totalStarts} stars</p>
    </div>;

export default StarRating