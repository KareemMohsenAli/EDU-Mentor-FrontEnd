const BioTitle = ({ title , specialization,joined , number_of_follows}) => {
    return (
        <div  className="">
            <h2 className="crayons-title dispaly-4 fw-heavy ">{title}</h2>
            <small style={{fontSize:'12px'}}><i class="fa-solid fa-cake-candles me-1"></i> Joined on {joined}</small>
            <small style={{fontSize:'12px'}} className="ms-3">
                
            <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
    <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
</svg>
                {/* <i class="fa-solid fa-users me-1">
                </i> */}
                
                
                <strong className="ms-1">{number_of_follows}
                    </strong> followers</small>

            <p className="spw mt-1 fs-5" >{specialization}</p>
        </div>

    )
}

export default BioTitle;