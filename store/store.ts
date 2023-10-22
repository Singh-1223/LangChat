import {create} from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguagesSupported =
   | 'en'
   | 'de'
   | 'fr'
   | 'es'
   | 'hi'
   | 'ja'
   | 'la'
   | 'ru'
   | 'zh'
   | 'ar'
   | 'pa'
   | 'kn'
   | 'ko'
   | 'ta'
   | 'te'
   | 'gu'
   | 'bn';
   

    export const LanguagesSupportedMap:Record<LanguagesSupported,string> = {
        en:"English",
        de:"German",
        fr:"French",
        es:"Spanish",
        hi:"Hindi",
        ja:"Japanese",
        la:"Latin",
        ru:"Russian",
        zh:"Mandrin",
        ar:"Arabic",
        pa:"Punjabi",
        kn:"Kannada",
        ko:"Korean",
        ta:"Tamil",
        te:"Telugu",
        gu:"Gujarati",
        bn:"Bengali",

    };

    interface SubscriptionState {
        subscription: Subscription | null | undefined;
        setSubscription: (subscription : Subscription | null) => void;
    }

    export const useSubscriptionStore = create<SubscriptionState>((set)=> ({
        subscription:undefined,
        setSubscription : (subscription: Subscription | null) =>({subscription}),
    }));