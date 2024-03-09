import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {


    const alljobs = useLoaderData();

    const { id } = useParams();

    const intId = parseInt(id);

    const job = alljobs.find(singlejob => singlejob.id === intId)

    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;
    
    const handlesavejobs = () => {
        saveJobApplication(intId);
    }
    

    return (
        <div>
            <h2 className="text-center text-5xl">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className=" md:col-span-3">
                    <p><b>Job Description:</b> {job_description}</p>
                    <p><b>Job Responsibility:</b> {job_responsibility}</p>
                    <h3><b>Educational Requirements:</b></h3>
                    <p>{educational_requirements}</p>
                    <h3><b>Experiences:</b></h3>
                    <p>{experiences}</p>
                </div>
                <div className="">
                    <h3 className="font-bold">Job Details</h3>
                    <div>
                        <p><b>Salary :</b> {salary}</p>
                        <p><b>Job Title :</b>{job_title}</p>
                    </div>
                    <h3 className="font-bold">Contact Information</h3>
                    <div>
                        <p><b>Phone :</b> {contact_information.phone}</p>
                        <p><b>Email :</b> {contact_information.email}</p>
                        <p><b>Address :</b> {contact_information.address}</p>
                    </div>
                    <button onClick={handlesavejobs} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;