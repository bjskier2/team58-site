
// Defining our Team Mappingclass
export default class TeamMapping {
    public done: boolean = false;
    public address: string = '';
    public city?: string = '';
    public country?: string = '';
    public gmaps_place_id?: string = '';
    public gmaps_url?: string = '';
    public key?: string = '';
    public lat?: string = '';
    public lng?: string = '';
    public location_name?: string = '';
    public motto?: string = '';
    public name?: string = '';
    public nickname?: string = '';
    public postal_code?: string = '';
    public rookie_year?: number = 0;
    public school_name?: string = '';
    public state_prov?: string = '';
    public team_number?: number = 0;
    public website?: string
   
    getTeam() {
        return this.team_number;
    }
   
    isDone() {
            return this.done;
    }
}