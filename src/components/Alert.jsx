import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertMake } from "@/Store/NotesApp.store"
import { Terminal } from "lucide-react"


import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"


function AlertButton() {
  const AlertNote = useSelector((data) => data.AlertNote)
  const AlertRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    let intervalId;
    AlertRef.current.style.display = "none";
    if (AlertNote) {
      AlertRef.current.style.display = "flex";
      intervalId = setInterval(() => {
        AlertRef.current.style.display = "none";
        dispatch(AlertMake());
        clearInterval(intervalId); // Clear interval after execution
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [AlertNote, dispatch]);


  return (
    <div ref={AlertRef} className="none fixed bottom-2 right-3 ">

      <Alert >
        {/* <Terminal className="h-4 w-4" /> */}
        <AlertTitle>Hey !</AlertTitle>
        <AlertDescription>
          You Created A New Note
        </AlertDescription>
      </Alert>

    </div>
  )
}

export default AlertButton
