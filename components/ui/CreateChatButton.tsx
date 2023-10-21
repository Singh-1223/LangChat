"use client"
import { useRouter } from "next/navigation";
import {Button} from "./button"
import {MessageSquarePlusIcon} from "lucide-react";

const CreateChatButton = () => {
  
    const router= useRouter();
    const createNewChat = async() =>{
        //all the logic here
        router.push(`/chat/abc`);
    }

  return (
     <Button onClick={createNewChat} variant={"ghost"}>  
        <MessageSquarePlusIcon/> 
     </Button>
  )
}

export default CreateChatButton
