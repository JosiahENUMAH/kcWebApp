import React, { useContext } from "react";
import ReactLoading from "react-loading";
import { EventContext } from "./EventPlanning";
import { useNavigate } from "react-router";
import {
  EventPlanningTable,
  TdLarge,
  TableTr,
  TableHead,
  ViewButton,
  SM,
  TdMedium,
  TdSmall,
  LoadingSection,
} from "./EventPlanningStyled";
import { SlOptionsVertical } from "react-icons/sl";

const EventDetails = () => {
  const navigate = useNavigate();

  const navigateViewEvent = (data) => {
    // if (data?.status === "Draft") {
    //   navigate(`/event/planning/view-draft-event/${data?.id}`);
    // } else if (data?.status === "Completed") {
    //   navigate(`/event/planning/view-completed-event/${data?.id}`);
    // } else {
    //   navigate(`/event/planning/view-draft-event/${data?.id}`);
    // }
    navigate(`/event/planning/view-completed-event/${data?.id}`);
  };

  const handleViewButtonClick = (event, data) => {
    event.stopPropagation();
    navigateViewEvent(data);
  };

  const { active, handleApiClick, loading } = useContext(EventContext);
  return (
    <>
      <div id="event-details-container" style={{ overflowX: "auto" }}>
        {loading ? (
          <LoadingSection style={{ width: "100vw" }}>
            <ReactLoading type="spin" color="#FF2957" height={100} width={50} />
          </LoadingSection>
        ) : (
          <EventPlanningTable style={{ marginBottom: "10rem" }}>
            <tbody>
              <TableHead>
                <TdLarge style={{ fontWeight: "600" }}>Name and Date</TdLarge>
                {/* <TdMedium style={{ fontWeight: "600" }}>Last updated</TdMedium> */}
                {/* <TdMedium style={{ fontWeight: "600" }}>Status</TdMedium> */}
                <TdMedium style={{ border: "none" }}>{""}</TdMedium>
              </TableHead>

              {active?.map((data, index) => (
                <TableTr
                  key={index}
                  backgroundColor={data.selected ? "#f9e6ea" : "white"}
                  onClick={() => handleApiClick(data, index)}
                >
                  <TdLarge>
                    {data.eventName} <br />
                    <SM>
                      {data.eventStartDate} at {data.eventStartTime}
                    </SM>
                  </TdLarge>
                  {/* <TdMedium>
                  {data.dateTimeUpdated ? data.dateTimeUpdated : "---"}
                </TdMedium>
                <TdMedium style={{ color: "#0068FF" }}>{data.status}</TdMedium> */}
                  <TdSmall style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        right: "1rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <ViewButton
                        onClick={(event) => handleViewButtonClick(event, data)}
                      >
                        View
                      </ViewButton>
                    </div>
                    <SlOptionsVertical cursor="pointer" />
                  </TdSmall>
                </TableTr>
              ))}
            </tbody>
          </EventPlanningTable>
        )}
      </div>
    </>
  );
};

export default EventDetails;
