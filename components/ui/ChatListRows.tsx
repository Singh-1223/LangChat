"use client"

import { ChatMembers, chatMembersCollectionGroupRef } from '@/lib/converters/ChatMembers'
import { useSession } from 'next-auth/react';
import {useCollectionData} from "react-firebase-hooks/firestore";
import CreateChatButton from './CreateChatButton';
import {MessageSquare} from 'lucide-react';
import ChatListRow from './ChatListRow';
const ChatListRows = ( {initialChats}:{initialChats : ChatMembers[]} ) => {
   const {data:session} = useSession();
   
    const [members,loading,error] = useCollectionData<ChatMembers>(
      session && chatMembersCollectionGroupRef(session?.user.id!),
      {
        initialValue: initialChats,
      }
    );
    
    if(members?.length === 0)
        return (
            <div className="flex flex-col jsutify-center items-center pt-40 spaace-y-2">
                 <MessageSquare className="h-10 w-10">
                    <h1 className="text-5cl font-extralight">Welcome!</h1>
                     <h2 className="pb-10">
                         Lets get you started by creating your first chat!
                     </h2>
                      <CreateChatButton isLarge/>
                 </MessageSquare>
            </div>
        );

      return (
         <div className=''>
             {members?.map((member,i)=>(
              <ChatListRow key={member.chatId} chatId={member.chatId} />
             ))}
         </div>
  )
}

export default ChatListRows;
