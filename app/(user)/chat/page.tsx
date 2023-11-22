import ChatList from "@/components/ui/ChatList";
import ChatPermissionError from "@/components/ui/ChatPermissionError";

type Props = {
    params:{};
    searchParams:{
        error:string;
    };
};

const ChatsPage = ({searchParams:{error}}: Props) => {
   
   {error && (
       <div className="m-2">
           <ChatPermissionError/>
       </div>
   )}
  
  return (
    <div>
        {/* Chat permission chat */}

         {/* ChatList */}
         <ChatList/>
    </div>
  )
}

export default ChatsPage;




