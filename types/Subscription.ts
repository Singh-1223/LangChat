import { DocumentData,DocumentReference,Timestamp } from "firebase/firestore";
import Stripe from "stripe";

export interface Subscription {
     id?:string;
     
     /* Set of key-value pairs that you can attackj to an object
        This can be useful for storing additional infromation about the object in a structured format
     */
     metadata:{
        [name:string]:string;
     };
     stripeLink:string;
     role:string|null;
     quantity:number;
     items:Stripe.SubscriptionItem[];

     /* Firestore reference to the product doc for this Subsrcitption*/

     product: DocumentReference<DocumentData>;

     /* firestore refernce to the price for this subscription*/
     price:DocumentReference<DocumentData>

     /*Array of price references .if you provde multiple recurring prices to the checlout sesssion via the 
       'line_items' parameters ,
        this array will hold the references for all recurring prices for this subscription
       */
       
     prices:Array<DocumentReference<DocumentData>>
     payment_method?:string;
     latest_invoice?:string;

     /*The status of the subscription object */

     status:
       | 'active'
       | 'canceled'
       | 'incomplete'
       | 'incomplete_expired'
       | 'past_due'
       | 'trialing'
       | 'unpaid';

       /* if true the subscription has been cnaceled by the user and  will be deleted at the end of billing period*/
       
       cancel_at_period_end:boolean;
       /* time at which the object was created*/
       created:Timestamp;

       /* start of the current period theat hte subscripton has been invoiced for*/
       current_period_start:Timestamp;

       /* end of the current period that the subscription has been invoiced for , at the end of this period , a new invoice will be created
       */
      current_period_end:Timestamp;

      /* if the subscription has ended , the imestamp of the date the subscription ended
      */
       ended_at : Timestamp | null;

       /* a date in future at which the subscription will automaticalluy gety canceled*/
       cancel_at :Timestamp | null;

       /* if the subscription has been canceled, the date of the cancellation. if the subscription was 
        canceled with 'cancel_at_period_end' 'canceled_at' will still reflecxt the date of the initial cancellation requesr , not hte end of the subscription
        peirod when the subscription is automatically moved to a canceled state       */
        canceled_at :Timestamp | null;

        /* if the subscriptin  has a trial , the beginning of that trail*/
        trial_start:Timestamp | null;

        /* if the subscriptin has a trial, the end of that trial*/
        trial_end : Timestamp | null;
}