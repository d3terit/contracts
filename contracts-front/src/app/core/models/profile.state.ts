import { AuthData } from "./authData.model";
import { Profile } from "./profile.model";

export interface ProfileState{
  loading: boolean;
  profile: Readonly<Profile>;
  authData: Readonly<AuthData>;
}
