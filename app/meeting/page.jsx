"use client";

import { useParams, useRouter } from "next/navigation";

//import { useSearchParams } from "next/navigation";

//import React from "react";
//import styles from '../styles/Contact.module.css'

import React, { useEffect, useCallback, useContext } from "react";
// import { useHistory } from "react-router-dom";
//import { MeetContext } from "../context/MeetContext";
//import { Outlet, useParams } from "react-router-dom";

const Meeting = ({ match }) => {

  const params = useParams();
  const roomn = params.key;

  //get the room name from the Url parameters.
  // const [searchParams, setSearchParams] = useParams();
  // const RoomN = searchParams.get('roomn');
  // console.log(searchParams);

  //AS OF NOW DOMAIN WOULD BE JITSI'S AS WE ARE STILL USING THIER SERVERS
  const domain = "meet.jit.si";
  let api = {};

//   const history = useHistory();

  const router = useRouter();

  // THIS IS TO EXTRACT THE NAME WHICH WAS FILLED IN THE FIRST PAGE
  //const [name] = useContext(MeetContext);

  const [name] = "ayad";

  // INTIALISE THE MEET WITH THIS FUNCTION
  const startMeet = useCallback(() => {
    const options = {
      //roomName: match.params.id,
      //roomName: "room96",
      //roomName: RoomN,
      roomName: roomn,
      width: "100vw",
      height: "100vh",
      configOverwrite: { prejoinPageEnabled: false },
      interfaceConfigOverwrite: {
        // overwrite interface properties if you want
      },
      // VIDEO FRAME WILL BE ADDED HERE
      parentNode: document.querySelector("#jitsi-iframe"),
      userInfo: {
        displayName: name,
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    api = new window.JitsiMeetExternalAPI(domain, options);

    api.addEventListeners({
      readyToClose: handleClose,
      participantLeft: handleParticipantLeft,
      participantJoined: handleParticipantJoined,
      videoConferenceJoined: handleVideoConferenceJoined,
      videoConferenceLeft: handleVideoConferenceLeft,
    });
  }, [api]);

  useEffect(() => {
    if (window.JitsiMeetExternalAPI) {
      startMeet();
    } else {
      alert("JitsiMeetExternalAPI not loaded");
    }
  }, [startMeet]);

  // ALL OUR HANDLERS
  const handleClose = () => {
    console.log("handleClose");
  };

  const handleParticipantLeft = async (participant) => {
    console.log("handleParticipantLeft", participant);
    await getParticipants();
  };

  const handleParticipantJoined = async (participant) => {
    console.log("handleParticipantJoined", participant);
    await getParticipants();
  };

  const handleVideoConferenceJoined = async (participant) => {
    console.log("handleVideoConferenceJoined", participant);
    await getParticipants();
  };

  const handleVideoConferenceLeft = () => {
    console.log("handleVideoConferenceLeft");
    // history.push("/meet");
    router.push('/meet');
  };

  // GETTING ALL PARTICIPANTS
  const getParticipants = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(api.getParticipantsInfo());
      }, 500);
    });
  };

  return (
    <>
      {/*<header
        style={{
          backgroundColor: "rgb(10, 25, 41)",
          color: "white",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, padding: 10 }}>Meeting name</p>
    </header>*/}

      <script src="https://meet.jit.si/external_api.js"></script>

      <div id="jitsi-iframe" style={{ marginBottom: 0 }}></div>
      {/*<div
        style={{
          backgroundColor: "rgb(10, 25, 41)",
          //height: "20vh",
          margin: 0,
        }}
    ></div>*/}
    </>
  );
};

export default Meeting;
/*

export default function Meeting(){
    return(
        <>
        <script src="https://meet.jit.si/external_api.js"></script>

        <div className={styles.container}>
            <h2 className={styles.title}>Meeting page</h2>
        </div>
        </>
    )
}*/