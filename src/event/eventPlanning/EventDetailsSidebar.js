import React, { useContext } from "react";
import { EventContext } from "./EventPlanning";
import { EventDetailsSide, ViewButton } from "./EventPlanningStyled";
import { useNavigate } from "react-router";
import { Txt } from "../emptyEvent/EmptyEventStyled";
import { FaTimes } from "react-icons/fa";
import { BudgetInventorySubtitle } from "../budgetInventory/BudgetStyled";
import { AbsolutePrimaryButton } from "../../components/button/button";
import { AlternativeButton2 } from "../../components/button/button";

const EventDetailsSidebar = () => {
  const navigate = useNavigate();
  const { selectedEvent, shareDetails } = useContext(EventContext);

  const navigateViewEvent = (selectedEvent) => {
    // if (selectedEvent?.status === "Draft") {
    //   navigate(`/event/planning/view-draft-event/${selectedEvent?.id}`);
    // } else if (selectedEvent?.status === "Completed") {
    //   navigate(`/event/planning/view-completed-event/${selectedEvent?.id}`);
    // } else {
    //   navigate(`/event/planning/view-draft-event/${selectedEvent?.id}`);
    // }
    navigate(`/event/planning/view-completed-event/${selectedEvent?.id}`);
  };

  const handleViewButtonClick = (event, selectedEvent) => {
    event.stopPropagation();
    navigateViewEvent(selectedEvent);
  };

  return (
    <>
      <EventDetailsSide display={selectedEvent && "flex"}>
        <FaTimes
          cursor="pointer"
          style={{ alignSelf: "flex-start", marginBottom: "1rem" }}
        />
        <Txt fontWeight="600">{selectedEvent?.eventName}</Txt>
        <ViewButton
          style={{ marginRight: "0rem" }}
          onClick={(event) => handleViewButtonClick(event, selectedEvent)}
        >
          View
        </ViewButton>
        <BudgetInventorySubtitle>
          {selectedEvent?.eventStartDate}
        </BudgetInventorySubtitle>
        <BudgetInventorySubtitle>
          {selectedEvent?.eventStartTime}
        </BudgetInventorySubtitle>

        {/* {selectedEvent?.status === "Completed" ? ( */}
        <AlternativeButton2
          style={{ marginTop: "1rem", width: "150px" }}
          onClick={() => {
            window.navigator?.share(shareDetails);
          }}
        >
          Share Event Link
        </AlternativeButton2>
        {/* ) : null} */}

        <AlternativeButton2 style={{ marginTop: "1rem", width: "150px" }}>
          Edit Event
        </AlternativeButton2>
        {/* {selectedEvent?.status === "Completed" ? ( */}
        <AlternativeButton2 style={{ width: "150px", marginTop: "1rem" }}>
          Generate Proposal
        </AlternativeButton2>
        {/* ) : null} */}
        <AbsolutePrimaryButton style={{ width: "150px", marginTop: "auto" }}>
          Delete Event
        </AbsolutePrimaryButton>
      </EventDetailsSide>
    </>
  );
};

export default EventDetailsSidebar;
