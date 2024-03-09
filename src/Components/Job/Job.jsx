import { MdLocationOn } from "react-icons/md";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-5">
                <figure className=""><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="btn btn-outline btn-info mx-1">{remote_or_onsite}</button>
                        <button className="btn btn-outline btn-info mx-1">{job_type}</button>
                    </div>
                    <div className="my-4 flex">
                        <h2 className="mx-1 flex"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
                        <h2 className="mx-1 flex"> <HiOutlineCurrencyBangladeshi className="text-2xl mr-2"></HiOutlineCurrencyBangladeshi>{salary}</h2>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;