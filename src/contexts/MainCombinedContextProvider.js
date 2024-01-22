import { MainContextProvider } from '@contexts/MainContext';
import { EventRegistrationContextProvider } from '@contexts/EventRegistrationContext';
import { combineComponents } from '@utils/combineComponents';

const providers = [MainContextProvider, EventRegistrationContextProvider];

export const MainCombinedContextProvider = combineComponents(...providers);
