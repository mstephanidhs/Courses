import { useRouteLoaderData } from "react-router-dom";

import EvenForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");

  return <EvenForm method="patch" event={data.event} />;
}

export default EditEventPage;
