import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { useEffect, useRef } from "react"
import { Title } from "@radix-ui/react-dialog";
import { useDispatch } from "react-redux";
import { DeleteNote } from "@/Store/NotesApp.store";

function NotesCard({ NotesData }) {
  const TitleRef = useRef();
  const DescRef = useRef();
  const dispatch = useDispatch();
  const Handler = () => {
    const title = NotesData.Card_Title;
    dispatch(DeleteNote(title))
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle ref={TitleRef} >{NotesData.Card_Title}</CardTitle>
        <CardDescription ref={DescRef} >{NotesData.Card_Description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={Handler} >Done</Button >
      </CardContent>
    </Card>

  )

}


export default NotesCard
