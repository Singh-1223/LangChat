import {withAuth} from "next-auth/middleware";

export default withAuth;

export const config = {
    matcher : ['/chat','/chat/:id','/register'],
}

//whenever user go to these router this next js middleware 
// will ask them to login to access these routes