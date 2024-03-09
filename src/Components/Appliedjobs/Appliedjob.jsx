import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../Utility/LocalStorage";


const Appliedjob = () => {


    const appliedjobs = useLoaderData();

    const [appliedjob, setAppliedJob] = useState([]);

    useEffect(() => {
        const storedJobId = getStoredJobApplications();

        if (appliedjobs.length > 0) {
            const jobapplied = [];
            for (const id of storedJobId) {
                const job = appliedjobs.find(job => job.id === id);
                if (job) {
                    jobapplied.push(job);
                }
            }
            setAppliedJob(jobapplied);
        }


    }, []);
    return (
        <div>
            <h3>All the jobs here that i applied before</h3>
            <ul>
                {
                    appliedjob.map(job => <li key={job.id}>
                        <p>{job.job_title}</p>
                        <p>{job.company_name}</p>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Appliedjob;