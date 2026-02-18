import { useLoaderData,} from "react-router-dom";

const JobDetails = () => {
  // const {id} = useParams();
  const jobDetail = useLoaderData();

  return (
    <div className="job-details">
      <h1>job Detail</h1>
      <p>
        <b>{jobDetail.title}</b>
      </p>
      <p>loctatin: {jobDetail.location}</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ex
        nam quis similique neque hic veritatis. Illo velit unde architecto!
      </p>
      <button>apply now</button>
    </div>
  );
};

export default JobDetails;

export const detailLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:5000/jobs/${id}`);
  return res.json();
};
