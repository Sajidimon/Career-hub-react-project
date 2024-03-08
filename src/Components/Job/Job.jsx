

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className=""><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="btn btn-outline btn-info mx-1">{remote_or_onsite}</button>
                        <button className="btn btn-outline btn-info mx-1">{job_type}</button>
                    </div>
                    <div>
                        <span className="mx-1">{location}</span>
                        <span className="mx-1">{salary}</span>
                    </div>
                    <div className="card-actions">

                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;