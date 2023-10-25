import { authOptions } from "@/auth"
import ChatInput from "@/components/ui/ChatInput"
import { getServerSession } from "next-auth"

type Props = {
  params: {
     chatId:string;
  }
}

const ChatPage = async({params:{chatId}}:Props) => {
  const session = await getServerSession(authOptions);

  return (
    <>  
       <div>uuuuuuuuuhhhhhhhhhhhh</div>
        {/* Admin Controls   */}
        {/* ChatMemberBadge */}

        {/* ChatMessages  */}

        <ChatInput chatId={chatId}/>
    </>
  )
}

export default ChatPage































































































































































