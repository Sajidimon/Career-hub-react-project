// localstorage kono data seve korte hole string data hote hobe.

const getStoredJobApplications = () => {
    const storedJobApplication = localStorage.getItem('job applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplications();
    const existjobs = storedJobApplications.find(jobId => jobId === id);
    if (!existjobs) {
        storedJobApplications.push(id);
        localStorage.setItem('job applications', JSON.stringify(storedJobApplications));
    }
}

export {getStoredJobApplications, saveJobApplication}